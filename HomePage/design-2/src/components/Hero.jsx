import Icon from "./Icon.jsx";
import QuoteForm from "./QuoteForm.jsx";
import { business } from "../data/content.js";
import heroImage from "../../../assets/img/hero.jpg";

// Design 2 is booking-first: the request form sits right in the hero
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img src={heroImage} alt="" width="1600" height="900" />
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="status">
            <span className="status__dot" aria-hidden="true"></span> Technicians available 24/7 in Kerrville
          </span>

          {/* The only h1 on the page (important for SEO) */}
          <h1>
            Honest heating &amp; cooling, <span className="hl">booked in a minute.</span>
          </h1>

          <p className="lede">
            Tell us what's going on and we'll take it from there. Repairs, replacements and tune-ups for
            Kerrville homes and businesses, on all makes and models.
          </p>

          <ul className="trust">
            <li>
              <span className="stars" aria-hidden="true">★★★★★</span> Loved on Google
            </li>
            <li>
              <Icon name="shield" size={18} /> 30-day 100% guarantee
            </li>
            <li>
              <Icon name="check" size={18} /> NATE-certified technicians
            </li>
          </ul>

          <a className="hero__call" href={business.phoneLink}>
            <span className="hero__call-icon"><Icon name="phone" /></span>
            <span>
              <small>Rather talk?</small>
              {business.phone}
            </span>
          </a>
        </div>

        <div className="hero__form" id="contact">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
