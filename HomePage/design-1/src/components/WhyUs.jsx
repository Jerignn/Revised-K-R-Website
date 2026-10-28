import Badges from "./Badges.jsx";
import { stats } from "../data/content.js";

// A dark band: K&R by the numbers
function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="why__head" data-reveal="1">
          <span className="eyebrow">§ 04 — By the numbers</span>
          <h2>
            It's not a <em>gamble.</em>
          </h2>
          <p className="lede">
            Our priority is to earn the trust of the community by delivering superior heating and cooling
            service with an unmatched client experience. We never accept past performance as good enough —
            we strive every day for new levels of excellence.
          </p>
        </div>

        <dl className="stats" data-reveal="2">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <Badges />
      </div>
    </section>
  );
}

export default WhyUs;
