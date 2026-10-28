import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business, helpOptions } from "../data/content.js";

// The short booking form in the hero.
// Preview only: it shows a thank-you message and sends nothing.
function QuoteForm() {
  const [need, setNeed] = useState(helpOptions[0].title);
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
    setNeed(helpOptions[0].title);
  }

  return (
    <form className="quote" noValidate onSubmit={handleSubmit}>
      <div className="quote__head">
        <h2>Book a visit</h2>
        <p>Takes under a minute. We'll call to confirm a time.</p>
      </div>

      <fieldset className="needs">
        <legend>What do you need?</legend>
        {helpOptions.map((option) => (
          <label className={need === option.title ? "need is-on" : "need"} key={option.title}>
            <input
              type="radio"
              name="need"
              value={option.title}
              checked={need === option.title}
              onChange={() => setNeed(option.title)}
            />
            <Icon name={option.icon} />
            <span>{option.short}</span>
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label htmlFor="q-name">Name *</label>
        <input id="q-name" name="name" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="q-phone">Phone *</label>
        <input id="q-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className="field field--full">
        <label htmlFor="q-zip">ZIP code *</label>
        <input id="q-zip" name="zip" inputMode="numeric" autoComplete="postal-code" required />
      </div>

      <input className="hp" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <Button type="submit" size="lg">
        Request my visit <Icon name="arrow" />
      </Button>

      <p className={sent ? "form-note is-shown" : "form-note"} role="status">
        {message}
      </p>
    </form>
  );
}

export default QuoteForm;
