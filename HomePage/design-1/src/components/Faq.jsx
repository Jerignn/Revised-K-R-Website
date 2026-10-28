import Accordion from "./Accordion.jsx";
import { business, faqs } from "../data/content.js";

function Faq() {
  return (
    <section className="section faq">
      <div className="wrap faq__grid">
        <div className="section-head section-head--side" data-reveal="1">
          <span className="eyebrow">§ 06 — Questions &amp; answers</span>
          <h2>
            Straight <em>answers.</em>
          </h2>
          <p className="lede">
            Can't find what you're looking for? Call us any time at{" "}
            <a href={business.phoneLink}>{business.phone}</a>.
          </p>
        </div>

        <div data-reveal="2">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export default Faq;
