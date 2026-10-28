import ContactForm from "./ContactForm.jsx";
import Icon from "./Icon.jsx";
import { Kicker, lede, section } from "./ui.jsx";
import { business } from "../data/content.js";

// Each contact row: an icon tile, a small label, then the detail
function Row({ icon, label, children }) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="grid size-11 flex-none place-items-center rounded-xl bg-blue-tint text-blue [&_svg]:size-5">
        <Icon name={icon} />
      </span>
      <span>
        <small className="block text-[13px] text-soft">{label}</small>
        {children}
      </span>
    </li>
  );
}

function Contact() {
  return (
    <section className={section} id="contact">
      <div className="wrap grid items-start gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal="1">
          <Kicker>Get in touch</Kicker>
          <h2 className="mb-3.5">Let's get you comfortable again.</h2>
          <p className={lede}>
            Need a repair, a new system, or just have a question? We look forward to helping you get back to
            comfort.
          </p>

          <ul className="mt-8 grid gap-4">
            <Row icon="phone" label="Call any time">
              <a className="text-xl font-bold text-navy no-underline hover:text-blue" href={business.phoneLink}>
                {business.phone}
              </a>
            </Row>
            <Row icon="pin" label="Visit">
              <address>
                {business.street}, {business.city}
              </address>
            </Row>
            <Row icon="clock" label="Hours">
              Open 24 hours, Monday – Sunday
            </Row>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
