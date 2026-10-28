import Accordion from "./Accordion.jsx";
import Icon from "./Icon.jsx";
import { Kicker, section } from "./ui.jsx";
import { business, faqs } from "../data/content.js";

function Faq() {
  return (
    <section className={section + " bg-surface"}>
      <div className="wrap grid items-start gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal="1">
          <Kicker>FAQ</Kicker>
          <h2 className="mb-6">Good questions, straight answers.</h2>
          <div className="rounded-2xl border border-line bg-white p-[22px]">
            <p className="mb-1.5 text-soft">Still wondering? We pick up 24/7.</p>
            <a
              className="inline-flex min-h-11 items-center gap-2.5 text-[22px] font-bold text-navy no-underline hover:text-blue [&_svg]:size-5 [&_svg]:text-rust"
              href={business.phoneLink}
            >
              <Icon name="phone" /> {business.phone}
            </a>
          </div>
        </div>

        <div data-reveal="2">
          <Accordion items={faqs} firstOpen={true} />
        </div>
      </div>
    </section>
  );
}

export default Faq;
