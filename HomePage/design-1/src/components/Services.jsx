import { services } from "../data/content.js";

// Every service as an entry in a two-column ledger
function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head" data-reveal="1">
          <span className="eyebrow">§ 03 — The full list</span>
          <h2>
            Complete comfort for your <em>home or business.</em>
          </h2>
          <p className="lede">
            From routine tune-ups to complete system replacements. We service all makes and models, and
            installations come with a free estimate.
          </p>
        </div>

        <ol className="ledger">
          {services.map((service, index) => (
            <li className="ledger__item" data-reveal={String((index % 2) + 1)} key={service.title}>
              <span className="n">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <p className="ledger__list">{service.list.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Services;
