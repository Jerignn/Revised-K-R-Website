import Icon from "./Icon.jsx";
import { servicePages } from "../../../shared/pages.js";

// A grid of cards, one per service page.
// skip: the slug of a service to leave out (used on a service's own page)
function ServiceCards({ skip }) {
  const cards = servicePages.filter((service) => service.slug !== skip);

  return (
    <div className="cards">
      {cards.map((service, index) => (
        <a className="card" href={"#/services/" + service.slug} data-reveal={String((index % 3) + 1)} key={service.slug}>
          <img src={service.image} alt="" loading="lazy" />
          <div className="card__body">
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <span className="card__go">
              Learn more <Icon name="arrow" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ServiceCards;
