import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Contact from "../components/Contact.jsx";
import SectionHead, { fine, section } from "../components/ui.jsx";
import { business } from "../data/content.js";
import { financingPoints } from "../../../shared/pages.js";

// About Us — Financing
function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Simple, affordable"
        highlight="financing"
        text="A new heating or cooling system shouldn't have to wait. We offer financing on new systems with options that fit your budget."
        crumbs={[{ label: "About Us", href: "#/about" }, { label: "Financing", href: "#/about/financing" }]}
      />

      <section className={section}>
        <div className="wrap">
          <SectionHead label="Why finance with K&R" className="mb-0!">
            Comfort now, <em>pay over time</em>
          </SectionHead>
          <InfoCards items={financingPoints} />
          <div className="mt-[30px] flex flex-wrap gap-3">
            <Button href="#contact">
              Ask about financing <Icon name="arrow" />
            </Button>
            <Button href={business.phoneLink} variant="ghost">
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
