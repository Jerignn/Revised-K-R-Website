import PageHero from "../components/PageHero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Contact from "../components/Contact.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
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

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split__media" data-reveal="1">
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
            </div>

            <div data-reveal="2">
              <span className="eyebrow">What we do</span>
              <h2>
                {service.title} <em>done right.</em>
              </h2>
              <p>{service.intro}</p>
              <ul className="checks">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="hero__cta page-cta">
                <Button href="#contact">
                  Book service <Icon name="arrow" />
                </Button>
                <Button href={business.phoneLink} variant="ghost">
                  <Icon name="phone" /> {business.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap">
          <div data-reveal="1">
            <span className="eyebrow">Time to call?</span>
            <h2 className="section-title">
              Signs you need <em>service</em>
            </h2>
          </div>
          <ol className="signs">
            {service.signs.map((sign, index) => (
              <li data-reveal={String((index % 3) + 1)} key={sign}>
                <span className="signs__n">{String(index + 1).padStart(2, "0")}</span>
                {sign}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div data-reveal="1">
            <span className="eyebrow">More services</span>
            <h2 className="section-title">
              We can also <em>help with</em>
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
