import ContactForm from "./ContactForm.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

function Contact() {
  return (
    <section className="section section--flush contact" id="contact">
      <div className="wrap">
        <div className="contact__card">
          <div data-reveal="1">
            <span className="kicker">Get in touch</span>
            <h2>Let's get you comfy again.</h2>
            <p className="lede">
              Need a repair, a new system, or just have a question? We look forward to helping you get back
              to comfort.
            </p>

            <ul className="contact__list">
              <li>
                <a href={business.phoneLink}>
                  <i><Icon name="phone" /></i>
                  <span className="phone">{business.phone}</span>
                </a>
              </li>
              <li>
                <address>
                  <i><Icon name="pin" /></i>
                  {business.street}, {business.city}
                </address>
              </li>
              <li>
                <span>
                  <i><Icon name="clock" /></i>
                  Open 24 hours, Monday – Sunday
                </span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
