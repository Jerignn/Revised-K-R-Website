import ContactForm from "./ContactForm.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div data-reveal="1">
          <span className="kicker">Get in touch</span>
          <h2>Let's get you comfortable again.</h2>
          <p className="lede">
            Need a repair, a new system, or just have a question? We look forward to helping you get back to
            comfort.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon"><Icon name="phone" /></span>
              <span>
                <small>Call any time</small>
                <a href={business.phoneLink}>{business.phone}</a>
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon name="pin" /></span>
              <span>
                <small>Visit</small>
                <address>
                  {business.street}, {business.city}
                </address>
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon name="clock" /></span>
              <span>
                <small>Hours</small>
                Open 24 hours, Monday – Sunday
              </span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
