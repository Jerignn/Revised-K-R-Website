import Icon from "./Icon.jsx";
import { business, helpOptions } from "../data/content.js";

// Design 2 starts from the visitor's problem: pick what fits, and the card takes you there.
function Hero() {
  // Cards with a message fill in the contact form's "How can we help?" box
  function handleCardClick(option) {
    if (option.message) {
      document.getElementById("d2-msg").value = option.message;
    }
  }

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__head">
          <span className="kicker">
            <span className="live" aria-hidden="true"></span> Open now <span className="dot"></span> 24/7 in Kerrville
          </span>

          {/* The only h1 on the page (important for SEO) */}
          <h1>
            <span className="word">What</span> <span className="word">can</span> <span className="word">we</span>{" "}
            <span className="word">help</span> <span className="word">you</span> <span className="word">with</span>{" "}
            <span className="word hl">
              today?
              <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 14 C 80 4, 200 4, 296 12" />
              </svg>
            </span>
          </h1>

          <p className="lede">
            Pick what fits and we'll take it from there. Honest heating and cooling for Kerrville homes and
            businesses, on all makes and models.
          </p>
        </div>

        <ul className="help">
          {helpOptions.map((option) => (
            <li key={option.title}>
              <a className="help__card" href={option.link} onClick={() => handleCardClick(option)}>
                <span className="help__icon"><Icon name={option.icon} /></span>
                <h2>{option.title}</h2>
                <p>{option.text}</p>
                <span className="help__go">
                  {option.linkText} <Icon name="arrow" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="help__call">
          <a href={business.phoneLink}>
            <span className="help__phone"><Icon name="phone" /></span>
            Rather talk? Call {business.phone}
          </a>
          <span>
            <span className="stars" aria-hidden="true">★★★★★</span> Loved on Google
          </span>
          <span>
            <span className="trust__icon"><Icon name="shield" size={18} /></span> 30-day guarantee
          </span>
          <span>
            <span className="trust__icon"><Icon name="check" size={18} /></span> Certified technicians
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
