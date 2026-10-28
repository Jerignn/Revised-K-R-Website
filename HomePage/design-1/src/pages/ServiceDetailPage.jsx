import PageHero from "../components/PageHero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Contact from "../components/Contact.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import SectionHead, { Eyebrow, checks, section } from "../components/ui.jsx";
import { business } from "../data/content.js";
import { findServicePage } from "../../../shared/pages.js";

// One service, e.g. #/services/furnaces. The text comes from shared/pages.js.
function ServiceDetailPage({ slug }) {
  const service = findServicePage(slug);
  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={service.title}
        text={service.short}
        crumbs={[{ label: "Our Services", href: "#/services" }]}
      />

      <section className={section}>
        <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="max-w-[560px]" data-reveal="1">
            <img className="aspect-[4/4.4] w-full object-cover" src={service.image} alt={service.imageAlt} loading="lazy" />
          </div>

          <div data-reveal="2">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3.5 mb-5">
              {service.title} <em>done right.</em>
            </h2>
            <p className="max-w-[56ch] text-[17px] text-ink-soft">{service.intro}</p>
            <ul className={checks + " sm:grid-cols-2"}>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button href="#contact">
                Book service <Icon name="arrow" />
              </Button>
              <Button href={business.phoneLink} variant="ghost">
                <Icon name="phone" /> {business.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={section + " border-t border-hair"}>
        <div className="wrap">
          <SectionHead label="Time to call?">
            Signs you need <em>service</em>
          </SectionHead>
          <ol className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {service.signs.map((sign, index) => (
              <li
                className="border-b border-hair py-[22px] pr-[22px] font-serif text-2xl/[1.2] lg:border-b-0 lg:border-l lg:pt-6 lg:pb-0 lg:pl-[22px] lg:first:border-l-0 lg:first:pl-0"
                data-reveal={String((index % 3) + 1)}
                key={sign}
              >
                <span className="mb-3.5 block font-mono text-[13px]/none font-medium text-rust-dk">{String(index + 1).padStart(2, "0")}</span>
                {sign}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={section}>
        <div className="wrap">
          <SectionHead label="More services">
            We can also <em>help with</em>
          </SectionHead>
          <ServiceCards skip={service.slug} />
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ServiceDetailPage;
