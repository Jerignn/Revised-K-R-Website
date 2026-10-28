import Accordion from "./Accordion.jsx";
import Icon from "./Icon.jsx";
import { business, faqs } from "../data/content.js";

function Faq() {
  return (
    <section className="section faq">
      <div className="wrap faq__grid">
        <div data-reveal="1">
          <span className="kicker">FAQ</span>
          <h2>Good questions, straight answers.</h2>
          <div className="ask-card">
            <p>Still wondering? We pick up 24/7.</p>
            <a href={business.phoneLink}>
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
