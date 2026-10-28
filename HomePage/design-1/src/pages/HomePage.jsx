import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Reviews from "../components/Reviews.jsx";
import Services from "../components/Services.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Steps from "../components/Steps.jsx";
import Offers from "../components/Offers.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";

// Design 1 — Editorial
// The page is just a list of sections, top to bottom.
// The header and footer come from Layout.
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <Services />
      <WhyUs />
      <Steps />
      <Offers />
      <Faq />
      <Contact />
    </>
  );
}

export default HomePage;
