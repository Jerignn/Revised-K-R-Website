import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business, quickTiles } from "../data/content.js";
import heroImage from "../../../assets/img/hero.jpg";

// The "front page": a big headline and photo, with an index of services down the side
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__lead">
          <span className="eyebrow">Locally owned &amp; operated · Kerrville</span>

          {/* The only h1 on the page (important for SEO) */}
          <h1>
            Your home comfort is <em>priority&nbsp;#1.</em>
          </h1>

          <p className="hero__dek">
            Heating and cooling done right the first time. Repairs, new installations and maintenance for
            homes and businesses — backed by a true 30-day, 100% satisfaction guarantee.
          </p>

          <div className="hero__cta">
            <Button href="#contact" size="lg">
              Schedule service <Icon name="arrow" />
            </Button>
            <Button href={business.phoneLink} size="lg" variant="ghost">
              <Icon name="phone" /> {business.phone}
            </Button>
          </div>

          <figure className="hero__figure">
            <img src={heroImage} alt="A comfortable living room kept cool by K&R" width="1200" height="700" />
            <figcaption>A cool, quiet living room in Kerrville — the way it should feel all year.</figcaption>
          </figure>
        </div>

        <aside className="hero__index" aria-label="In this issue">
          <h2 className="index__title">In this issue</h2>
          <ol>
            {quickTiles.map((tile) => (
              <li key={tile.title}>
                <a href={tile.href}>
                  <span className="n">{tile.number}</span>
                  <span>
                    <strong>{tile.title}</strong>
                    {tile.text}
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="hero__notice">
            <span className="eyebrow">Emergency?</span>
            <p>We answer 24 hours a day, 7 days a week.</p>
            <a href={business.phoneLink}>{business.phone}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
