import PageHero from "../components/PageHero.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";

// About Us — FAQ
function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Frequently asked"
        highlight="questions"
        text="Quick answers about service hours, brands, maintenance plans, financing and our guarantee."
        crumbs={[{ label: "About Us", href: "#/about" }, { label: "FAQ", href: "#/about/faq" }]}
      />
      <Faq />
      <Contact />
    </>
  );
}

export default FaqPage;
