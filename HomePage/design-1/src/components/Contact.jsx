import ContactForm from "./ContactForm.jsx";
import { Eyebrow, lede, section } from "./ui.jsx";
import { business } from "../data/content.js";

// The contact details, shown as label / value rows
const details = [
  {
    label: "Visit",
    value: (
      <address>
        {business.street}
        <br />
        {business.city}
      </address>
    ),
  },
  { label: "Hours", value: "Open 24 hours, Monday – Sunday" },
  { label: "Promise", value: "30-day 100% satisfaction guarantee" },
];

function Contact() {
  return (
    <section className={section} id="contact">
      <div className="wrap grid gap-[clamp(40px,6vw,96px)] border-t-2 border-ink pt-[18px] lg:grid-cols-2">
        <div data-reveal="1">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 mb-[18px]">
            Need HVAC service? <em>We're on it.</em>
          </h2>
          <p className={lede}>Fill out the form or give us a call. We look forward to getting you back to comfort.</p>

          <a
            className="mt-[18px] inline-block font-serif text-[clamp(44px,5vw,68px)]/none tracking-[-0.02em] text-rust italic no-underline transition-colors hover:text-ink"
            href={business.phoneLink}
          >
            {business.phone}
          </a>

          <dl className="mt-8 border-t border-hair">
            {details.map((detail) => (
              <div className="grid gap-1 border-b border-hair py-3.5 sm:grid-cols-[110px_1fr] sm:gap-4" key={detail.label}>
                <dt className="text-[15px]/[1.9] font-semibold tracking-[0.06em] text-muted uppercase">{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
