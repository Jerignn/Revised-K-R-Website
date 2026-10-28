import TopStrip from "../components/TopStrip.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ServiceTabs from "../components/ServiceTabs.jsx";
import Values from "../components/Values.jsx";
import Commercial from "../components/Commercial.jsx";
import MaintenancePlan from "../components/MaintenancePlan.jsx";
import Reviews from "../components/Reviews.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import DesignSwitcher from "../components/DesignSwitcher.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

// Design 2 — Light & Friendly
// Built around the visitor's problem: the hero asks what they need help with.
// The page is just a list of sections, top to bottom.
function HomePage() {
  useScrollReveal();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopStrip />
      <Header />

      <main id="main">
        <Hero />
        <ServiceTabs />
        <MaintenancePlan />
        <Commercial />
        <Values />
        <Reviews />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <DesignSwitcher />
    </>
  );
}

export default HomePage;
