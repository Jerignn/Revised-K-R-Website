import Icon from "./Icon.jsx";
import { servicePages } from "../../../shared/pages.js";

// A grid of cards, one per service page.
// skip: the slug of a service to leave out (used on a service's own page)
function ServiceCards({ skip }) {
  const cards = servicePages.filter((service) => service.slug !== skip);

  return (
    <div className="grid gap-x-[clamp(20px,2.4vw,32px)] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((service, index) => (
        <a
          className="group flex flex-col border-t-2 border-ink pt-[18px] no-underline"
          href={"#/services/" + service.slug}
          data-reveal={String((index % 3) + 1)}
          key={service.slug}
        >
          <img className="aspect-[16/10] w-full object-cover transition-[filter] duration-400 group-hover:contrast-105 group-hover:saturate-[1.15]" src={service.image} alt="" loading="lazy" />
          <div className="flex flex-1 flex-col gap-2 pt-[18px]">
            <h3 className="text-[30px] transition-colors group-hover:text-rust group-hover:italic">{service.title}</h3>
            <p className="text-ink-soft">{service.short}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-[15px] font-semibold underline underline-offset-[6px] [&_svg]:size-4 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-1">
              Learn more <Icon name="arrow" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ServiceCards;
