import Hero from "../components/Hero.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import Values from "../components/Values.jsx";
import Steps from "../components/Steps.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Commercial from "../components/Commercial.jsx";
import Reviews from "../components/Reviews.jsx";
import Faq from "../components/Faq.jsx";
import CtaBand from "../components/CtaBand.jsx";

// Design 2 — Clean & Modern
// The page is just a list of sections, top to bottom.
// The header and footer come from Layout. The booking form is in the Hero.
function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <Values />
      <Steps />
      <MaintenancePlan />
      <Commercial />
      <Reviews />
      <Faq />
      <CtaBand />
    </>
  );
}

export default HomePage;
