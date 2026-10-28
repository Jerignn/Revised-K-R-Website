import Icon from "./Icon.jsx";
import SectionHead, { checks, section } from "./ui.jsx";
import { features } from "../data/content.js";

// Cooling, Heating and Commercial as three side-by-side "departments"
function Features() {
  return (
    <section className={section}>
      <div className="wrap">
        <SectionHead label="§ 01 — Departments">
          What we do, <em>and how well.</em>
        </SectionHead>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
          {features.map((feature, index) => (
            <article
              className="flex flex-col lg:border-l lg:border-hair lg:px-[clamp(20px,2.4vw,32px)] lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              id={feature.id}
              data-reveal={String(index + 1)}
              key={feature.id}
            >
              <img className="mb-5 aspect-[4/3] w-full object-cover" src={feature.image} alt={feature.imageAlt} loading="lazy" width="400" height="300" />
              <span className="font-mono text-xs/[1.4] font-medium tracking-[0.1em] text-rust-dk uppercase">
                {feature.number} · {feature.eyebrow}
              </span>
              <h3 className="mt-2.5 mb-3.5 text-[clamp(28px,2.6vw,36px)]">
                {feature.title} <em>{feature.highlight}</em>
              </h3>
              <p className="text-ink-soft">{feature.text}</p>

              <ul className={checks + " mb-5"}>
                {feature.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>

              <a
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-[15px] font-semibold text-ink underline decoration-1 underline-offset-[6px] transition-all hover:gap-3 hover:text-rust"
                href="#contact"
              >
                {feature.linkText} <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
