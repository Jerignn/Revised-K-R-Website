import Icon from "./Icon.jsx";
import { badges, valueChips } from "../data/content.js";

function Values() {
  return (
    <section className="section values" id="about">
      <div className="wrap">
        <span className="kicker" data-reveal="1">
          Why K&amp;R <span className="dot"></span> Our promise
        </span>
        <h2 data-reveal="2">
          Good enough is <span className="hl">never</span> good enough.
        </h2>
        <p className="lede" data-reveal="3">
          Our priority is to earn the trust of our community by delivering superior heating and cooling
          service with an unmatched client experience — and to keep striving every day for new levels of
          excellence.
        </p>

        <div className="value-chips" data-reveal="4">
          {valueChips.map((chip) => (
            <span key={chip.text}>
              <Icon name={chip.icon} /> {chip.text}
            </span>
          ))}
        </div>

        <div className="badges" data-reveal="4">
          {badges.map((badge) => (
            <img src={badge.image} alt={badge.alt} loading="lazy" height="58" key={badge.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
