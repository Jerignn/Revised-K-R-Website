import Accordion from "./Accordion.jsx";
import SectionHead, { section } from "./ui.jsx";
import { business, faqs } from "../data/content.js";

function Faq() {
  return (
    <section className={section + " bg-paper-2"}>
      <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead label="§ 06 — Questions & answers" side={true}>
          Straight <em>answers.</em>
        </SectionHead>

        <div data-reveal="2">
          <Accordion items={faqs} />
          <p className="mt-6 text-ink-soft">
            Can't find what you're looking for? Call us any time at{" "}
            <a className="underline underline-offset-4 hover:text-rust" href={business.phoneLink}>
              {business.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faq;
