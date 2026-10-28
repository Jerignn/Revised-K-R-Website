import Badges from "./Badges.jsx";
import { Eyebrow, section } from "./ui.jsx";
import { stats } from "../data/content.js";

// A dark band: K&R by the numbers
function WhyUs() {
  return (
    <section className={section + " bg-night text-night-text [&_em]:text-peach"} id="why">
      <div className="wrap">
        <div className="grid items-start gap-x-10 gap-y-4 border-t-2 border-night-text pt-[18px] lg:grid-cols-[220px_1fr_1fr]" data-reveal="1">
          <Eyebrow light={true} className="lg:pt-2.5">§ 04 — By the numbers</Eyebrow>
          <h2>
            It's not a <em>gamble.</em>
          </h2>
          <p className="mt-1.5 max-w-[58ch] text-xl text-night-muted">
            Our priority is to earn the trust of the community by delivering superior heating and cooling
            service with an unmatched client experience. We never accept past performance as good enough —
            we strive every day for new levels of excellence.
          </p>
        </div>

        <dl className="mt-[clamp(48px,6vw,72px)] grid border-t border-night-hair sm:grid-cols-2 lg:grid-cols-3" data-reveal="2">
          {stats.map((stat) => (
            <div
              className="border-b border-night-hair pt-7 pr-6 pb-[30px] sm:max-lg:even:border-l sm:max-lg:even:pl-6 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-6"
              key={stat.label}
            >
              <dt className="font-serif text-[clamp(54px,6vw,84px)]/[0.95] tracking-[-0.03em] text-white">{stat.value}</dt>
              <dd className="mt-2.5 text-[17px] text-night-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <Badges />
      </div>
    </section>
  );
}

export default WhyUs;
