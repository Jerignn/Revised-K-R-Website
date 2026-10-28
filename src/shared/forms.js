import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FORMS } from './config.js';
import { business } from './content.js';

const RESUME = /\.(pdf|docx?|rtf|txt)$/i;
const MAX_RESUME = 8 * 1024 * 1024;

function validate(kind, v, file) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number.';
  if (!/^\d{5}(-\d{4})?$/.test(v.zip.trim())) e.zip = 'Please enter a valid 5-digit zip code.';
  if (kind === 'careers' && (!file || !RESUME.test(file.name) || file.size > MAX_RESUME)) {
    e.resume = 'Please attach your resume (PDF, DOC, DOCX, RTF or TXT, max 8 MB).';
  }
  return e;
}

// State, validation and submission for the contact and careers forms.
// Contact forms also pick up ?message= and ?service= from the URL (used by "Claim offer" links).
export function useLeadForm(kind, formId, initial = {}) {
  const [params] = useSearchParams();
  const [values, setValues] = useState({ name: '', email: '', phone: '', zip: '', service: '', message: '', position: '', ...initial });
  const [file, setFileState] = useState(null);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState('');

  const urlMessage = kind === 'contact' ? params.get('message') : null;
  const urlService = kind === 'contact' ? params.get('service') : null;
  useEffect(() => {
    setValues((v) => ({
      ...v,
      ...(urlMessage ? { message: urlMessage } : {}),
      ...(urlService ? { service: urlService } : {}),
      ...(initial.position ? { position: initial.position } : {}),
    }));
  }, [urlMessage, urlService, initial.position]);

  const recheck = (next, nextFile) => {
    if (!Object.keys(errors).length) return;
    const fresh = validate(kind, next, nextFile);
    setErrors((prev) => Object.fromEntries(Object.keys(prev).filter((k) => fresh[k]).map((k) => [k, fresh[k]])));
  };

  const bind = (name) => ({
    value: values[name],
    onChange: (e) => {
      const next = { ...values, [name]: e.target.value };
      setValues(next);
      recheck(next, file);
    },
  });

  const setFile = (f) => {
    setFileState(f || null);
    recheck(values, f);
  };

  const id = (name) => `${formId}-${name}`;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('');
    const errs = validate(kind, values, file);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) return void document.getElementById(id(first))?.focus();
    if (!FORMS[kind]) return void setStatus('unconfigured');
    if (form.elements.website?.value) return void setSent(true); // honeypot filled: likely a bot

    const data = new FormData(form);
    if (file) data.set('resume', file);
    setBusy(true);
    try {
      const res = await fetch(FORMS[kind], { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false || json.success === false) throw new Error();
      setSent(true);
    } catch {
      setStatus(`We couldn’t send your ${kind === 'careers' ? 'application' : 'request'}. Please call ${business.phone}.`);
    } finally {
      setBusy(false);
    }
  }

  return { kind, formId, id, bind, values, errors, busy, sent, status, file, setFile, onSubmit };
}
