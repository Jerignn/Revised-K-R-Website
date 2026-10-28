import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { field, honeypot, input, label, noteClass } from "./formStyles.js";
import { business, serviceOptions } from "../data/content.js";

// Preview only: the form shows a thank-you message and sends nothing.
function ContactForm() {
  const [message, setMessage] = useState("Design preview: this form doesn't send anything.");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    // Hidden "website" field: real people leave it empty, spam bots fill it in
    if (form.website.value !== "") {
      return;
    }

    const firstName = form.name.value.trim().split(" ")[0];
    let thanks = "Thanks";
    if (firstName) {
      thanks = "Thanks, " + firstName;
    }

    setMessage(thanks + "! This is a design preview, so nothing was sent. For service now, call " + business.phone + ".");
    setSent(true);
    form.reset();
  }

  return (
    <form
      className="grid gap-4 rounded-[20px] border border-line bg-white p-[clamp(24px,3vw,36px)] shadow-card sm:grid-cols-2"
      data-reveal="2"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={field}>
        <label className={label} htmlFor="d2-name">Name *</label>
        <input className={input} id="d2-name" name="name" autoComplete="name" required />
      </div>

      <div className={field}>
        <label className={label} htmlFor="d2-phone">Phone *</label>
        <input className={input} id="d2-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className={field}>
        <label className={label} htmlFor="d2-svc">Service *</label>
        <select className={input} id="d2-svc" name="service" required>
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className={field}>
        <label className={label} htmlFor="d2-zip">ZIP code *</label>
        <input className={input} id="d2-zip" name="zip" inputMode="numeric" autoComplete="postal-code" required />
      </div>

      <div className={field + " sm:col-span-2"}>
        <label className={label} htmlFor="d2-msg">How can we help?</label>
        <textarea className={input} id="d2-msg" name="message" rows="3"></textarea>
      </div>

      <input className={honeypot} name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <Button type="submit" size="lg" className="sm:col-span-2">
        Request service <Icon name="arrow" />
      </Button>

      <p className={noteClass(sent) + " sm:col-span-2"} role="status">
        {message}
      </p>
    </form>
  );
}

export default ContactForm;
