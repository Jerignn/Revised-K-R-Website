import SectionHead, { section } from "./ui.jsx";
import { steps } from "../data/content.js";

function Steps() {
  return (
    <section className={section}>
      <div className="wrap grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-[1fr_1.4fr]">
        <SectionHead label="How it works" side={true}>
          Back to comfort <em>in three steps.</em>
        </SectionHead>

        <ol className="border-t-2 border-ink">
          {steps.map((step, index) => (
            <li className="grid grid-cols-[56px_1fr] gap-5 border-b border-hair py-[26px] sm:grid-cols-[90px_1fr]" data-reveal={String(index + 1)} key={step.title}>
              <span className="font-serif text-[56px]/[0.85] text-rust italic sm:text-[76px]">{index + 1}</span>
              <div>
                <h3 className="mb-1.5 text-[28px]">{step.title}</h3>
                <p className="text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Steps;
