import ContactForm from "./ContactForm.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__grid">
        <div data-reveal="1">
          <span className="eyebrow">Get in touch</span>
          <h2>
            Need HVAC service? <em>We're on it.</em>
          </h2>
          <p className="lede">Fill out the form or give us a call. We look forward to getting you back to comfort.</p>

          <a className="big-phone" href={business.phoneLink}>
            {business.phone}
          </a>

          <ul className="info">
            <li>
              <Icon name="pin" />
              <address>
                {business.street}
                <br />
                {business.city}
              </address>
            </li>
            <li>
              <Icon name="clock" />
              <span>
                Open 24 hours
                <br />
                Monday – Sunday
              </span>
            </li>
            <li>
              <Icon name="shield" />
              <span>30-day 100% satisfaction guarantee</span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
