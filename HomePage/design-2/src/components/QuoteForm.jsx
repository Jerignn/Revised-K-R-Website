import { useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { field, honeypot, input, label, noteClass } from "./formStyles.js";
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
    <form className="grid gap-4 rounded-[20px] bg-white p-[clamp(24px,3vw,32px)] text-ink shadow-lift sm:grid-cols-2" noValidate onSubmit={handleSubmit}>
      <div className="sm:col-span-2">
        <h2 className="text-[26px]">Book a visit</h2>
        <p className="mt-1 text-[15px] text-soft">Takes under a minute. We'll call to confirm a time.</p>
      </div>

      <fieldset className="grid grid-cols-2 gap-2 sm:col-span-2 sm:grid-cols-4">
        <legend className="mb-2 text-sm font-semibold">What do you need?</legend>
        {helpOptions.map((option) => {
          const isOn = need === option.title;
          return (
            <label
              className={
                "relative grid cursor-pointer justify-items-center gap-1.5 rounded-xl border px-1 py-3 text-center text-[13px] font-semibold transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue [&_svg]:size-[22px] " +
                (isOn ? "border-blue bg-blue-tint text-blue [&_svg]:text-blue" : "border-line hover:border-blue [&_svg]:text-soft")
              }
              key={option.title}
            >
              <input
                className="pointer-events-none absolute opacity-0"
                type="radio"
                name="need"
                value={option.title}
                checked={isOn}
                onChange={() => setNeed(option.title)}
              />
              <Icon name={option.icon} />
              <span>{option.short}</span>
            </label>
          );
        })}
      </fieldset>

      <div className={field}>
        <label className={label} htmlFor="q-name">Name *</label>
        <input className={input} id="q-name" name="name" autoComplete="name" required />
      </div>

      <div className={field}>
        <label className={label} htmlFor="q-phone">Phone *</label>
        <input className={input} id="q-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className={field + " sm:col-span-2"}>
        <label className={label} htmlFor="q-zip">ZIP code *</label>
        <input className={input} id="q-zip" name="zip" inputMode="numeric" autoComplete="postal-code" required />
      </div>

      <input className={honeypot} name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <Button type="submit" size="lg" className="w-full sm:col-span-2">
        Request my visit <Icon name="arrow" />
      </Button>

      <p className={noteClass(sent) + " sm:col-span-2"} role="status">
        {message}
      </p>
    </form>
  );
}

export default QuoteForm;
