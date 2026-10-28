import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business, serviceOptions } from "../data/content.js";

// Underlined inputs, like filling in a printed form
const label = "font-mono text-xs/none font-medium tracking-[0.12em] text-ink-soft uppercase";
const input =
  "w-full rounded-none border-0 border-b border-ink bg-transparent py-3 font-serif text-lg/[1.4] text-ink focus:border-rust focus:shadow-[0_1px_0_var(--color-rust)] focus:outline-none";
// The message box is fully outlined so it reads as a writing area
const textarea =
  "w-full rounded-none border border-ink bg-transparent p-3 font-serif text-lg/[1.4] text-ink focus:border-rust focus:outline-none";

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
    <form className="grid content-start gap-x-6 gap-y-[22px] sm:grid-cols-2" data-reveal="2" noValidate onSubmit={handleSubmit}>
      <h3 className="text-[34px] italic sm:col-span-2">Book your service</h3>

      <div className="grid gap-1.5">
        <label className={label} htmlFor="d1-name">Name *</label>
        <input className={input} id="d1-name" name="name" autoComplete="name" required />
      </div>

      <div className="grid gap-1.5">
        <label className={label} htmlFor="d1-phone">Phone *</label>
        <input className={input} id="d1-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className="grid gap-1.5 sm:col-span-2">
        <label className={label} htmlFor="d1-email">Email</label>
        <input className={input} id="d1-email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="grid gap-1.5 sm:col-span-2">
        <label className={label} htmlFor="d1-svc">Service needed</label>
        <select className={input} id="d1-svc" name="service">
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-1.5 sm:col-span-2">
        <label className={label} htmlFor="d1-msg">Message</label>
        <textarea className={textarea} id="d1-msg" name="message" rows="4"></textarea>
      </div>

      <input className="absolute -left-[9999px]" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <Button type="submit" size="lg" className="sm:col-span-2">
        Send request <Icon name="arrow" />
      </Button>

      <p
        className={"text-sm sm:col-span-2 " + (sent ? "border-l-[3px] border-rust bg-paper-2 px-3.5 py-2.5 text-ink" : "text-muted")}
        role="status"
      >
        {message}
      </p>
    </form>
  );
}

export default ContactForm;
