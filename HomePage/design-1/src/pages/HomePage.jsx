import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import QuickTiles from "../components/QuickTiles.jsx";
import Features from "../components/Features.jsx";
import Services from "../components/Services.jsx";
import Steps from "../components/Steps.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Reviews from "../components/Reviews.jsx";
import Offers from "../components/Offers.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";

// Design 1 — Dark & Bold
// The page is just a list of sections, top to bottom.
// The header and footer come from Layout.
function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <QuickTiles />
      <Features />
      <Services />
      <Steps />
      <WhyUs />
      <Reviews />
      <Offers />
      <Faq />
      <Contact />
    </>
  );
}

export default HomePage;
