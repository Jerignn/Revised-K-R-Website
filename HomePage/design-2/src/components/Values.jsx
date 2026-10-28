import Icon from "./Icon.jsx";
import Badges from "./Badges.jsx";
import { Kicker, lede, section } from "./ui.jsx";
import { valueChips } from "../data/content.js";

function Values() {
  return (
    <section className={section + " bg-surface"} id="about">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-2">
          <div data-reveal="1">
            <Kicker>Why K&amp;R</Kicker>
            <h2 className="mb-[18px]">
              Good enough is <span className="text-blue">never</span> good enough.
            </h2>
            <p className={lede}>
              Our priority is to earn the trust of our community by delivering superior heating and cooling
              service with an unmatched client experience — and to keep striving every day for new levels of
              excellence.
            </p>
          </div>

          <ul className="grid gap-3" data-reveal="2">
            {valueChips.map((chip) => (
              <li className="flex items-center gap-4 rounded-[14px] border border-line bg-white px-5 py-4 font-semibold" key={chip.text}>
                <span className="grid size-10 flex-none place-items-center rounded-[10px] bg-blue-tint text-blue [&_svg]:size-5">
                  <Icon name={chip.icon} />
                </span>
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
