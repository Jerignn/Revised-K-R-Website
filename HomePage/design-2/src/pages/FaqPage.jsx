import PageHero from "../components/PageHero.jsx";
import Faq from "../components/Faq.jsx";
import Contact from "../components/Contact.jsx";

// About Us — FAQ
function FaqPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Frequently asked"
        highlight="questions."
        text="Quick answers about service hours, brands, tune-ups, financing and second opinions."
        crumbs={[{ label: "About Us", href: "#/about" }, { label: "FAQ", href: "#/about/faq" }]}
      />
      <Faq />
      <Contact />
    </>
  );
}

export default FaqPage;
