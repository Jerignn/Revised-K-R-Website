import Accordion from "./Accordion.jsx";
import { faqs } from "../data/content.js";

function Faq() {
  return (
    <section className="section section--flush faq">
      <div className="wrap">
        <div data-reveal="1">
          <span className="kicker">FAQ</span>
          <h2>
            Good questions. <span className="hl">Straight answers.</span>
          </h2>
          <p className="lede">Still wondering? Call us any time — we pick up 24/7.</p>
        </div>

        <div data-reveal="2">
          <Accordion items={faqs} firstOpen={true} />
        </div>
      </div>
    </section>
  );
}

export default Faq;
