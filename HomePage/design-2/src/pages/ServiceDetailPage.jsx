import PageHero from "../components/PageHero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Contact from "../components/Contact.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { Kicker, section } from "../components/ui.jsx";
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
        kicker="Our services"
        title={service.title}
        text={service.short}
        crumbs={[{ label: "Our Services", href: "#/services" }]}
      />

      <section className={section}>
        <div className="wrap grid items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-2" data-reveal="1">
          <img className="aspect-[4/3.2] w-full rounded-[20px] object-cover" src={service.image} alt={service.imageAlt} loading="lazy" />
          <div className="flex flex-col items-start gap-4">
            <Kicker>What we do</Kicker>
            <h2 className="text-[clamp(30px,3.4vw,42px)]">
              {service.title}, <span className="text-blue">done right.</span>
            </h2>
            <p className="text-[17px] text-soft">{service.intro}</p>
            <ul className="flex flex-wrap gap-2">
              {service.includes.map((item) => (
                <li className="rounded-full bg-blue-tint px-3.5 py-2 text-sm font-semibold text-blue" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="#contact">
                Book service <Icon name="arrow" />
              </Button>
              <Button href={business.phoneLink} variant="light">
                <Icon name="phone" /> {business.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={section + " pt-0"}>
        <div className="wrap">
          <div data-reveal="1">
            <Kicker>Time to call?</Kicker>
            <h2>
              Signs you need <span className="text-blue">service.</span>
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.signs.map((sign, index) => (
              <li className="rounded-2xl bg-surface p-6 text-lg/[1.35] font-semibold" data-reveal={String((index % 3) + 1)} key={sign}>
                <span className="mb-3 block text-[13px] font-bold text-blue">{String(index + 1).padStart(2, "0")}</span>
                {sign}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={section + " pt-0"}>
        <div className="wrap">
          <div className="mb-10" data-reveal="1">
            <Kicker>More services</Kicker>
            <h2>
              We can also <span className="text-blue">help with.</span>
            </h2>
          </div>
          <ServiceCards skip={service.slug} />
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ServiceDetailPage;
