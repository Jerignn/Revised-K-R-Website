import Icon from "./Icon.jsx";
import Head, { card, lift, section } from "./ui.jsx";
import { serviceCards } from "../data/content.js";

// The four main services side by side
function ServiceGrid() {
  return (
    <section className={section} id="services">
      <div className="wrap">
        <Head kicker="Services" text="We service all makes and models — and give free estimates on new installations.">
          Everything your system needs, in one place.
        </Head>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service, index) => (
            // The wrapper fades in; the card inside lifts on hover
            <div className="flex" data-reveal={String((index % 3) + 1)} key={service.id}>
              <article className={card + " " + lift + " flex flex-1 flex-col overflow-hidden"}>
                <div className="relative">
                  <img className="aspect-[16/11] w-full object-cover" src={service.image} alt={service.imageAlt} loading="lazy" width="400" height="260" />
                  <span className="absolute -bottom-[22px] left-4 grid size-12 place-items-center rounded-xl bg-blue text-white shadow-card [&_svg]:size-[22px]">
                    <Icon name={service.icon} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 px-5 pt-9 pb-[22px]">
                  <h3 className="text-[22px]">{service.label}</h3>
                  <p className="text-[15px] text-soft">{service.text}</p>
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {service.pills.map((pill) => (
                      <li className="rounded-full bg-surface px-2.5 py-1 text-[13px] font-medium text-soft" key={pill}>
                        {pill}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-2.5 text-[15px] font-semibold text-blue no-underline [&_svg]:size-4 [&_svg]:transition-transform hover:[&_svg]:translate-x-1"
                    href={service.buttonLink}
                  >
                    {service.buttonText} <Icon name="arrow" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
