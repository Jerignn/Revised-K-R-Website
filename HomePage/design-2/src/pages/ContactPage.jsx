import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";
import Faq from "../components/Faq.jsx";

// Contact Us
function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact us"
        title="We pick up"
        highlight="24/7."
        text="Call us any time, or send a message and we'll get back to you to schedule service."
      />
      <Contact />
      <Faq />
    </>
  );
}

export default ContactPage;
