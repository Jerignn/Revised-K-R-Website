import Icon from "./Icon.jsx";
import { card, lift } from "./ui.jsx";
import { servicePages } from "../../../shared/pages.js";

// A grid of cards, one per service page.
// skip: the slug of a service to leave out (used on a service's own page)
function ServiceCards({ skip }) {
  const cards = servicePages.filter((service) => service.slug !== skip);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((service, index) => (
        // The wrapper fades in; the card inside lifts on hover
        <div className="flex" data-reveal={String((index % 3) + 1)} key={service.slug}>
          <a className={card + " " + lift + " group flex flex-1 flex-col overflow-hidden no-underline"} href={"#/services/" + service.slug}>
            <img className="aspect-[16/10] w-full object-cover" src={service.image} alt="" loading="lazy" />
            <div className="flex flex-1 flex-col gap-2 p-[22px]">
              <h3 className="text-[21px]">{service.title}</h3>
              <p className="text-[15px] text-soft">{service.short}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-2.5 text-[15px] font-semibold text-blue [&_svg]:size-4 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-1">
                Learn more <Icon name="arrow" />
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ServiceCards;
