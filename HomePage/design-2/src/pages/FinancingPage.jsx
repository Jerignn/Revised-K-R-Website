import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Contact from "../components/Contact.jsx";
import { Kicker, fine, section } from "../components/ui.jsx";
import { business } from "../data/content.js";
import { financingPoints } from "../../../shared/pages.js";

// About Us — Financing
function FinancingPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Simple, affordable"
        highlight="financing."
        text="A new heating or cooling system shouldn't have to wait. We offer financing on new systems with options that fit your budget."
        crumbs={[{ label: "About Us", href: "#/about" }, { label: "Financing", href: "#/about/financing" }]}
      />

      <section className={section}>
        <div className="wrap">
          <div data-reveal="1">
            <Kicker>Why finance with K&amp;R</Kicker>
            <h2>
              Comfort now, <span className="text-blue">pay over time.</span>
            </h2>
          </div>
          <InfoCards items={financingPoints} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">
              Ask about financing <Icon name="arrow" />
            </Button>
            <Button href={business.phoneLink} variant="light">
              <Icon name="phone" /> {business.phone}
            </Button>
          </div>
          <p className={fine}>Financing available on new systems for qualified buyers. Call for details.</p>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default FinancingPage;
