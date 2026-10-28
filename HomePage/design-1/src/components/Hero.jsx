import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" role="img" aria-label="A comfortable living room kept cool by K&R"></div>

      <div className="wrap">
        <span className="eyebrow">Locally owned &amp; operated · Kerrville</span>

        {/* The only h1 on the page (important for SEO) */}
        <h1>
          <span className="line"><span>Your home</span></span>
          <span className="line"><span>comfort is</span></span>
          <span className="line"><span><em>Priority #1</em></span></span>
        </h1>

        <p>
          Heating and cooling done right the first time. Repairs, new installations and maintenance for
          homes and businesses — backed by a true 30-day, 100% satisfaction guarantee.
        </p>

        <div className="hero__cta">
          <Button href="#contact" size="lg">
            Schedule Service <Icon name="arrow" />
          </Button>
          <Button href={business.phoneLink} size="lg" variant="ghost">
            <Icon name="phone" /> {business.phone}
          </Button>
        </div>
      </div>

      <div className="hero__badge" aria-hidden="true">
        <div>
          <strong>24/7</strong>Emergency<br />Service
        </div>
      </div>
    </section>
  );
}

export default Hero;
