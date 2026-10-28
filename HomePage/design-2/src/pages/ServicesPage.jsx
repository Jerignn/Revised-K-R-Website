import PageHero from "../components/PageHero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Contact from "../components/Contact.jsx";

// Our Services — every service, each linking to its own page
function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="Comfort for every"
        highlight="room & season."
        text="Heating and cooling services from routine tune-ups to complete system replacements. We service all makes and models, and installations come with a free estimate."
      />

      <section className="section">
        <div className="wrap">
          <ServiceCards />
        </div>
      </section>

      <MaintenancePlan />
      <Contact />
    </>
  );
}

export default ServicesPage;
