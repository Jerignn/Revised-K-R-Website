import BadgeCarousel from "./BadgeCarousel.jsx";
import { stats } from "../data/content.js";

function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="wrap why__grid">
        <div data-reveal="1">
          <span className="eyebrow">Why K&amp;R</span>
          <h2>
            It's not a <em>gamble.</em>
          </h2>
          <p className="lede">
            Our priority is to earn the trust of the community by delivering superior heating and cooling
            service with an unmatched client experience. We never accept past performance as good enough —
            we strive every day for new levels of excellence.
          </p>

          <BadgeCarousel />
        </div>

        <div className="stats" data-reveal="2">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
