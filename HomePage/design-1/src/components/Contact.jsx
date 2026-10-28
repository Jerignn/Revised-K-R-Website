import ContactForm from "./ContactForm.jsx";
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

          <dl className="info">
            <div>
              <dt>Visit</dt>
              <dd>
                <address>
                  {business.street}
                  <br />
                  {business.city}
                </address>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Open 24 hours, Monday – Sunday</dd>
            </div>
            <div>
              <dt>Promise</dt>
              <dd>30-day 100% satisfaction guarantee</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
