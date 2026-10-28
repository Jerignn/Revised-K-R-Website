import Accordion from "./Accordion.jsx";
import { services } from "../data/content.js";

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="services__head">
          <div data-reveal="1">
            <span className="eyebrow">Our services</span>
            <h2>
              Complete comfort for your <em>home or business</em>
            </h2>
          </div>
          <p className="lede" data-reveal="2">
            Heating and cooling services from routine tune-ups to complete system replacements. We service
            all makes and models, and installations come with a free estimate.
          </p>
        </div>

        <Accordion items={services} firstOpen={true} />
      </div>
    </section>
  );
}

export default Services;
