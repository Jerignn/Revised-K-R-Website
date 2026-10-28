import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
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
    <form className="form" data-reveal="2" noValidate onSubmit={handleSubmit}>
      <h3>Book your service</h3>

      <div className="field">
        <label htmlFor="d1-name">Name *</label>
        <input id="d1-name" name="name" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="d1-phone">Phone *</label>
        <input id="d1-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className="field field--full">
        <label htmlFor="d1-email">Email</label>
        <input id="d1-email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="field field--full">
        <label htmlFor="d1-svc">Service needed</label>
        <select id="d1-svc" name="service">
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="field field--full">
        <label htmlFor="d1-msg">Message</label>
        <textarea id="d1-msg" name="message" rows="4"></textarea>
      </div>

      <input className="hp" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <Button type="submit" size="lg">
        Send request <Icon name="arrow" />
      </Button>

      <p className={sent ? "form-note is-shown" : "form-note"} role="status">
        {message}
      </p>
    </form>
  );
}

export default ContactForm;
