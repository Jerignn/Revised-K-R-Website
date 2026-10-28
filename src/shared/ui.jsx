import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './icons.jsx';
import { business, reviews, badges, faqs, img, promoMessage, serviceOptions, services } from './content.js';
import { useLeadForm } from './forms.js';

// The active design's kit: { base, t (Tailwind class map), Layout, PageHero, Home }.
export const KitContext = createContext(null);
export const useKit = () => useContext(KitContext);

const cx = (...c) => c.filter(Boolean).join(' ');
const isExternal = (href) => /^(https?:|tel:|mailto:|\/assets\/)/.test(href);

// Link that resolves site paths against the current design's base URL.
export function L({ to, children, ...rest }) {
  const { base } = useKit();
  if (isExternal(to)) {
    const ext = /^https?:|\/assets\//.test(to);
    return <a href={to} {...(ext ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{children}</a>;
  }
  return <Link to={`${base}/${to}`} {...rest}>{children}</Link>;
}

export function Btn({ to, variant = 'primary', size, children, className, ...rest }) {
  const { t } = useKit();
  const cls = cx(t.btn.base, t.btn[variant], size && t.btn[size], className);
  if (to !== undefined) return <L to={to} className={cls} {...rest}>{children}</L>;
  return <button className={cls} {...rest}>{children}</button>;
}

export const Wrap = ({ className, children }) => <div className={cx(useKit().t.wrap, className)}>{children}</div>;

export function Section({ tone = 'base', id, className, children }) {
  const { t } = useKit();
  return <section id={id} className={cx(t.section[tone], className)}><Wrap>{children}</Wrap></section>;
}

export function Eyebrow({ children, className }) {
  return <p className={cx(useKit().t.eyebrow, 'reveal', className)}>{children}</p>;
}

// Heading with an optional highlighted second line.
export function H2({ children, accent, className, light }) {
  const { t } = useKit();
  return (
    <h2 className={cx(t.h2, light && t.h2Light, 'reveal', className)}>
      {children}
      {accent && <> <br className={t.accentBreak} /><em className={t.accent}>{accent}</em></>}
    </h2>
  );
}

export const H3 = ({ children, className }) => <h3 className={cx(useKit().t.h3, 'reveal', className)}>{children}</h3>;

export function Lead({ children, className, light }) {
  const { t } = useKit();
  return <p className={cx(t.lead, light && t.leadLight, 'reveal', className)}>{children}</p>;
}

export function ArrowLink({ to, children, className }) {
  const { t } = useKit();
  return <L to={to} className={cx(t.linkArrow, className)}>{children}<Icon name="arrow" className="size-4" /></L>;
}

export function CheckList({ items, cols, light }) {
  const { t } = useKit();
  return (
    <ul className={cx(t.check.list, cols && t.check.cols2)}>
      {items.map((i) => (
        <li key={i} className={cx(t.check.item, light && t.check.itemLight)}>
          <span className={cx(t.check.icon, light && t.check.iconLight)}><Icon name="check" className="size-3.5" strokeWidth={3} /></span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({ icon = 'shield', children }) {
  const { t } = useKit();
  return (
    <div className={cx(t.callout.box, 'reveal')}>
      <span className={t.callout.icon}><Icon name={icon} className="size-6" /></span>
      <div className={t.callout.text}>{children}</div>
    </div>
  );
}

export function Stars({ className }) {
  const { t } = useKit();
  return <span className={cx(t.stars, className)}>{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" fill="currentColor" className="h-full w-auto" />)}</span>;
}

// ---------- accordion ----------
export function Accordion({ items, defaultOpen = 0, light }) {
  const { t } = useKit();
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cx(t.acc.list, light && t.acc.listLight)}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} className={cx(t.acc.item, light && t.acc.itemLight, isOpen && t.acc.itemOpen)}>
            <h3>
              <button className={cx(t.acc.btn, light && t.acc.btnLight)} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className={t.acc.num}>{String(i + 1).padStart(2, '0')}</span>
                <span>{it.title}</span>
                <span className={cx(t.acc.icon, light && t.acc.iconLight, isOpen && t.acc.iconOpen)}><Icon name="plus" className="size-4" /></span>
              </button>
            </h3>
            <div className={cx('collapse-grid', isOpen && 'is-open')} role="region">
              <div><div className={cx(t.acc.panel, light && t.acc.panelLight)}>{it.content}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- reviews ----------
export function ReviewsSection({ id = 'customer-reviews' }) {
  const { t } = useKit();
  const track = useRef(null);
  const step = () => (track.current.firstElementChild?.getBoundingClientRect().width || 300) + 20;
  const next = () => {
    const el = track.current;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step(), behavior: 'smooth' });
  };
  return (
    <Section tone={t.reviewsTone} id={id} className="overflow-hidden">
      <div className={t.splitHead}>
        <div>
          <Eyebrow>Real reviews from real customers</Eyebrow>
          <H2 accent={t.reviewsAccent ? 'have to say.' : null}>{t.reviewsAccent ? 'What our customers' : 'What our customers have to say.'}</H2>
        </div>
        <div className="reveal max-w-sm">
          <Stars className="h-5" />
          <p className={t.review.scoreText}>Trusted by homeowners and businesses across Kerrville.</p>
          <ArrowLink to={business.reviewsUrl}>See all of our Google reviews</ArrowLink>
        </div>
      </div>
      <div ref={track} className={t.review.track}>
        {reviews.map((r) => (
          <figure key={r.name} className={t.review.card}>
            <span className={t.review.quote}><Icon name="quote" className="size-11" /></span>
            <Stars className="h-4" />
            <blockquote className={t.review.text}>{r.text}</blockquote>
            <figcaption className={t.review.author}>
              <span className={t.review.avatar}>{r.name[0]}</span>
              {r.name}
              <small className={t.review.small}>Google review</small>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex gap-2.5">
        <button className={t.roundBtn} aria-label="Previous review" onClick={() => track.current.scrollBy({ left: -step(), behavior: 'smooth' })}><Icon name="arrow" className="size-5 rotate-180" /></button>
        <button className={t.roundBtn} aria-label="Next review" onClick={next}><Icon name="arrow" className="size-5" /></button>
      </div>
    </Section>
  );
}

// ---------- coupons ----------
export function Coupon({ p, light }) {
  const { t } = useKit();
  return (
    <article className={cx(t.coupon.card, light && t.coupon.cardLight, 'reveal')}>
      <div className={cx(t.coupon.amt, light && t.coupon.amtLight)}>
        {p.prefix && <small className={t.coupon.small}>{p.prefix}</small>}
        <strong className={t.coupon.big}>{p.amount}</strong>
        {p.unit && <span className={t.coupon.unit}>{p.unit}</span>}
      </div>
      <h3 className={cx(t.coupon.title, light && t.coupon.titleLight)}>{p.title}</h3>
      <p className={t.coupon.fine}>Offer subject to restrictions. Expires {p.expires}.{p.note ? ` ${p.note}` : ''}</p>
      <Btn to={`contact?message=${encodeURIComponent(promoMessage(p))}#book`} size="sm">Claim offer <Icon name="arrow" className="size-4" /></Btn>
    </article>
  );
}

// ---------- FAQ ----------
export function FaqSection() {
  const { t } = useKit();
  return (
    <Section tone={t.faqTone} id="faq">
      <div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32">
          <Eyebrow>FAQ</Eyebrow>
          <H2 accent="Straight answers.">Common questions.</H2>
          <Lead>Can’t find what you’re looking for? Our team picks up 24 hours a day.</Lead>
          <Btn to={business.phoneHref} variant="secondary" className="reveal"><Icon name="phone" /> {business.phone}</Btn>
        </div>
        <Accordion items={faqs.map(([q, a]) => ({ title: q, content: <p>{a}</p> }))} />
      </div>
    </Section>
  );
}

// ---------- contact ----------
export function ContactInfo({ cards }) {
  const { t } = useKit();
  const rows = [
    ['phone', 'Call 24/7', <a href={business.phoneHref}>{business.phone}</a>],
    ['pin', 'Our office', <a href={business.mapUrl} target="_blank" rel="noopener">{business.addressFull}</a>],
    ['clock', 'Hours', <span>{business.hours}</span>],
  ];
  return (
    <ul className={cx(t.info.list, cards && t.info.listCards)}>
      {rows.map(([icon, label, value]) => (
        <li key={label} className={cx(t.info.item, cards && t.info.itemCard, 'reveal')}>
          <span className={t.info.icon}><Icon name={icon} className="size-5" /></span>
          <div><small className={t.info.small}>{label}</small><div className={t.info.value}>{value}</div></div>
        </li>
      ))}
    </ul>
  );
}

export function ContactSection() {
  const { t } = useKit();
  return (
    <Section tone={t.contactTone} id="contact">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <H2 accent="back to comfort.">Let’s get you</H2>
          <Lead>Need help with your heating or cooling? Fill out the form or give us a call — we look forward to helping you.</Lead>
          <ContactInfo />
        </div>
        <div className="reveal"><ContactForm source="Home page" /></div>
      </div>
    </Section>
  );
}

export function SidebarCall() {
  const { t } = useKit();
  return (
    <a href={business.phoneHref} className={t.sideCall.box}>
      <span className={t.sideCall.icon}><Icon name="phone" className="size-5" /></span>
      <span><small className={t.sideCall.small}>24/7 emergency service</small>{business.phone}</span>
    </a>
  );
}

// ---------- bands ----------
export function ProjectCta() {
  const { t } = useKit();
  return (
    <section className={t.cta.section}>
      <Wrap>
        <div className={cx(t.cta.box, 'reveal')}>
          <div>
            <p className={t.cta.eyebrow}>Ready for your next HVAC project?</p>
            <h2 className={t.cta.title}>We service commercial &amp; residential homes and buildings.</h2>
            <p className={t.cta.lead}>Get a free quote today!</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn to={business.phoneHref} variant={t.cta.primary} size="lg"><Icon name="phone" /> {business.phone}</Btn>
            <Btn to="contact#book" variant={t.cta.secondary} size="lg"><Icon name="mail" /> Email us</Btn>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

export function FinancingBand() {
  const { t } = useKit();
  return (
    <section className={t.fin.section}>
      <Wrap className={t.fin.inner}>
        <span className={t.fin.icon}><Icon name="dollar" className="size-6" /></span>
        <div className="grid min-w-56 flex-1">
          <strong className={t.fin.title}>Special financing is available</strong>
          <span className={t.fin.text}>Simple, affordable options for new heating &amp; cooling systems.</span>
        </div>
        <Btn to="financing" variant="secondary">Learn more <Icon name="arrow" className="size-4" /></Btn>
      </Wrap>
    </section>
  );
}

export function BadgeStrip() {
  const { t } = useKit();
  return (
    <section className={t.badges.section}>
      <Wrap className="flex flex-wrap items-center justify-center gap-8 sm:justify-between">
        <p className={t.badges.label}>Certified &amp; trusted</p>
        {badges.map(([f, a]) => {
          const image = <img src={img(f)} alt={a} loading="lazy" className={t.badges.img} />;
          return f === 'google-reviews.png' ? <a key={f} href={business.reviewsUrl} target="_blank" rel="noopener">{image}</a> : <span key={f}>{image}</span>;
        })}
      </Wrap>
    </section>
  );
}

export function ServiceCards({ exclude }) {
  const { t } = useKit();
  return (
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
      {services.filter((s) => s.slug !== exclude).map((s) => (
        <L key={s.slug} to={`services/${s.slug}`} className={cx(t.svcCard.card, 'reveal')}>
          <span className={t.svcCard.icon}><Icon name={s.icon} className="size-6" /></span>
          <strong className={t.svcCard.title}>{s.title}</strong>
          <span className={t.svcCard.text}>{s.tagline}</span>
          <Icon name="arrow" className={t.svcCard.arrow} />
        </L>
      ))}
    </div>
  );
}

// ---------- gallery + lightbox ----------
export function Gallery({ images }) {
  const { t } = useKit();
  const [idx, setIdx] = useState(-1);
  const open = idx >= 0;
  const show = (i) => setIdx((i + images.length) % images.length);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(-1);
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  });
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((g, i) => (
          <button key={g} onClick={() => setIdx(i)} aria-label={`View project photo ${i + 1}`} className={cx(t.gallery.item, 'reveal')}>
            <img src={img(g)} alt={`K&R HVAC project photo ${i + 1}`} loading="lazy" className="w-full transition duration-700 ease-out-expo group-hover:scale-105" />
            <span className={t.gallery.overlay}><Icon name="plus" className={t.gallery.plus} /></span>
          </button>
        ))}
      </div>
      {open && (
        <div className={t.gallery.lightbox} role="dialog" aria-modal="true" aria-label="Project photo" onClick={(e) => e.target === e.currentTarget && setIdx(-1)}>
          <button autoFocus className={cx(t.gallery.lbBtn, 'top-4 right-4')} aria-label="Close" onClick={() => setIdx(-1)}><Icon name="close" /></button>
          <button className={cx(t.gallery.lbBtn, 'bottom-4 left-[calc(50%-60px)] sm:top-1/2 sm:bottom-auto sm:left-4 sm:-translate-y-1/2')} aria-label="Previous image" onClick={() => show(idx - 1)}><Icon name="arrow" className="size-5 rotate-180" /></button>
          <img src={img(images[idx])} alt={`K&R HVAC project photo ${idx + 1}`} className="max-h-[84vh] max-w-full animate-rise rounded-2xl shadow-2xl" />
          <button className={cx(t.gallery.lbBtn, 'right-[calc(50%-60px)] bottom-4 sm:top-1/2 sm:right-4 sm:bottom-auto sm:-translate-y-1/2')} aria-label="Next image" onClick={() => show(idx + 1)}><Icon name="arrow" className="size-5" /></button>
        </div>
      )}
    </>
  );
}

// ---------- forms ----------
function Field({ f, name, label, required, hint, children }) {
  const { t } = useKit();
  const err = f.errors[name];
  return (
    <div className="relative grid min-w-0 gap-1.5">
      <label htmlFor={f.id(name)} className={t.form.label}>
        {label} {required && <b className={t.form.req}>*</b>} {hint && <small className={t.form.hint}>{hint}</small>}
      </label>
      {children(cx(t.form.input, err && t.form.inputError), err ? { 'aria-invalid': true, 'aria-describedby': f.id(name) + '-err' } : {})}
      {err && <span id={f.id(name) + '-err'} className={t.form.fieldError}>{err}</span>}
    </div>
  );
}

function FormShell({ f, title, sub, submitLabel, children }) {
  const { t } = useKit();
  if (f.sent) {
    return (
      <div className={t.form.card}>
        <div className="grid justify-items-center gap-3 px-2 py-8 text-center">
          <span className={t.form.successIcon}><Icon name="check" className="size-9" strokeWidth={3} /></span>
          <h3 className={t.form.title}>Thank you!</h3>
          <p className={t.form.sub}>{f.kind === 'careers' ? 'Your application has been received. If you’re a good fit, one of our managers will be in touch to schedule an interview.' : 'Your request has been received. A member of the K&R team will contact you shortly.'}</p>
          <p className={t.form.sub}>Need help right away? Call <a className={t.form.noteLink} href={business.phoneHref}>{business.phone}</a></p>
        </div>
      </div>
    );
  }
  return (
    <form id={f.formId} className={t.form.card} noValidate onSubmit={f.onSubmit} encType={f.kind === 'careers' ? 'multipart/form-data' : undefined}>
      <div>
        <h3 className={t.form.title}>{title}</h3>
        <p className={t.form.sub}>{sub}</p>
      </div>
      <div className="absolute -left-[10000px] size-px overflow-hidden" aria-hidden="true">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {children}
      <button type="submit" disabled={f.busy} className={cx(t.btn.base, t.btn.primary, 'w-full disabled:opacity-70')}>
        <span>{f.busy ? 'Sending…' : submitLabel}</span>
        <Icon name="arrow" className={cx('size-5', f.busy && 'animate-spin')} />
      </button>
      {f.status && (
        <p role="status" className={t.form.status}>
          {f.status === 'unconfigured' ? <>Online requests aren’t connected yet. Please call us 24/7 at <a className="underline" href={business.phoneHref}>{business.phone}</a>.</> : f.status}
        </p>
      )}
    </form>
  );
}

function CommonFields({ f }) {
  const { t } = useKit();
  return (
    <>
      <Field f={f} name="name" label="Full name" required>{(c, a) => <input id={f.id('name')} name="name" autoComplete="name" maxLength={120} className={c} {...a} {...f.bind('name')} />}</Field>
      <div className={t.form.row}>
        <Field f={f} name="email" label="Email address" required>{(c, a) => <input id={f.id('email')} name="email" type="email" autoComplete="email" maxLength={160} className={c} {...a} {...f.bind('email')} />}</Field>
        <Field f={f} name="phone" label="Phone number" required>{(c, a) => <input id={f.id('phone')} name="phone" type="tel" autoComplete="tel" maxLength={30} className={c} {...a} {...f.bind('phone')} />}</Field>
      </div>
    </>
  );
}

export function ContactForm({ id = 'book', title = 'Book your service', sub = 'Contact our team of experts to learn more!', source = '', service = '', message = '' }) {
  const { t } = useKit();
  const f = useLeadForm('contact', id, { service, message, source });
  return (
    <FormShell f={f} title={title} sub={sub} submitLabel="Submit request">
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="_subject" value={`New service request — ${source || 'Website'}`} />
      <CommonFields f={f} />
      <div className={t.form.row}>
        <Field f={f} name="zip" label="Zip code" required>{(c, a) => <input id={f.id('zip')} name="zip" inputMode="numeric" autoComplete="postal-code" maxLength={10} className={c} {...a} {...f.bind('zip')} />}</Field>
        <Field f={f} name="service" label="Service needed">
          {(c) => (
            <select id={f.id('service')} name="service" className={cx(c, t.form.select)} {...f.bind('service')}>
              <option value="">Select a service</option>
              {serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          )}
        </Field>
      </div>
      <Field f={f} name="message" label="Message">{(c) => <textarea id={f.id('message')} name="message" rows={4} maxLength={3000} className={cx(c, 'min-h-28 resize-y')} {...f.bind('message')} />}</Field>
      <p className={t.form.note}>Prefer to talk? Call <a className={t.form.noteLink} href={business.phoneHref}>{business.phone}</a> — we answer 24/7.</p>
    </FormShell>
  );
}

export function CareersForm({ positions, position }) {
  const { t } = useKit();
  const f = useLeadForm('careers', 'apply', { position });
  const [drag, setDrag] = useState(false);
  const file = f.file;
  return (
    <FormShell f={f} title="Join our team" sub="Upload your resume and a manager will be in touch." submitLabel="Submit application">
      <input type="hidden" name="_subject" value="New job application — Careers page" />
      <CommonFields f={f} />
      <div className={t.form.row}>
        <Field f={f} name="zip" label="Zip code" required>{(c, a) => <input id={f.id('zip')} name="zip" inputMode="numeric" autoComplete="postal-code" maxLength={10} className={c} {...a} {...f.bind('zip')} />}</Field>
        <Field f={f} name="position" label="Position">
          {(c) => (
            <select id={f.id('position')} name="position" className={cx(c, t.form.select)} {...f.bind('position')}>
              <option value="">Any position</option>
              {positions.map((p) => <option key={p.title}>{p.title}</option>)}
            </select>
          )}
        </Field>
      </div>
      <Field f={f} name="resume" label="Resume" required hint="PDF, DOC, DOCX, RTF or TXT · max 8 MB">
        {(c, a) => (
          <label
            htmlFor={f.id('resume')}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); f.setFile(e.dataTransfer.files[0]); }}
            className={cx(t.form.file, (drag || file) && t.form.fileActive, f.errors.resume && t.form.inputError)}
          >
            <Icon name="upload" className={t.form.fileIcon} />
            <span>{file ? `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB` : 'Choose a file or drag it here'}</span>
            <input id={f.id('resume')} name="resume" type="file" accept=".pdf,.doc,.docx,.rtf,.txt" className="sr-only" {...a} onChange={(e) => f.setFile(e.target.files[0])} />
          </label>
        )}
      </Field>
      <Field f={f} name="message" label="Message">{(c) => <textarea id={f.id('message')} name="message" rows={4} maxLength={3000} className={cx(c, 'min-h-28 resize-y')} {...f.bind('message')} />}</Field>
    </FormShell>
  );
}
