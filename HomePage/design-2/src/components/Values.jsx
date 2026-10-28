import Icon from "./Icon.jsx";
import Badges from "./Badges.jsx";
import { valueChips } from "../data/content.js";

function Values() {
  return (
    <section className="section values" id="about">
      <div className="wrap">
        <div className="values__grid">
          <div data-reveal="1">
            <span className="kicker">Why K&amp;R</span>
            <h2>
              Good enough is <span className="hl">never</span> good enough.
            </h2>
            <p className="lede">
              Our priority is to earn the trust of our community by delivering superior heating and cooling
              service with an unmatched client experience — and to keep striving every day for new levels of
              excellence.
            </p>
          </div>

          <ul className="value-list" data-reveal="2">
            {valueChips.map((chip) => (
              <li key={chip.text}>
                <span className="value-list__icon"><Icon name={chip.icon} /></span>
                {chip.text}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="3">
          <Badges />
        </div>
      </div>
    </section>
  );
}

export default Values;
