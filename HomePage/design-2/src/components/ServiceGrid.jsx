import Icon from "./Icon.jsx";
import { serviceCards } from "../data/content.js";

// The four main services side by side
function ServiceGrid() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head" data-reveal="1">
          <div>
            <span className="kicker">Services</span>
            <h2>Everything your system needs, in one place.</h2>
          </div>
          <p className="lede">We service all makes and models — and give free estimates on new installations.</p>
        </div>

        <div className="svc-grid">
          {serviceCards.map((card, index) => (
            <article className="svc" data-reveal={String((index % 3) + 1)} key={card.id}>
              <div className="svc__img">
                <img src={card.image} alt={card.imageAlt} loading="lazy" width="400" height="260" />
                <span className="svc__icon"><Icon name={card.icon} /></span>
              </div>
              <div className="svc__body">
                <h3>{card.label}</h3>
                <p>{card.text}</p>
                <ul className="tags">
                  {card.pills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
                <a className="svc__link" href={card.buttonLink}>
                  {card.buttonText} <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
