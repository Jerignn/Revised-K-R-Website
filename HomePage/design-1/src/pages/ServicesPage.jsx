import PageHero from "../components/PageHero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import Steps from "../components/Steps.jsx";
import Contact from "../components/Contact.jsx";
import { section } from "../components/ui.jsx";

// Our Services — every service, each linking to its own page
function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Complete comfort for your"
        highlight="home or business"
        text="Heating and cooling services from routine tune-ups to complete system replacements. We service all makes and models, and installations come with a free estimate."
      />

      <section className={section}>
        <div className="wrap">
          <ServiceCards />
        </div>
      </section>

      <Steps />
      <Contact />
    </>
  );
}

export default ServicesPage;
