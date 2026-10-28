import Hero from "../components/Hero.jsx";
import ServiceTabs from "../components/ServiceTabs.jsx";
import Values from "../components/Values.jsx";
import Commercial from "../components/Commercial.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Reviews from "../components/Reviews.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";

// Design 2 — Light & Friendly
// The page is just a list of sections, top to bottom.
// The header and footer come from Layout.
function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTabs />
      <Values />
      <Commercial />
      <MaintenancePlan />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}

export default HomePage;
