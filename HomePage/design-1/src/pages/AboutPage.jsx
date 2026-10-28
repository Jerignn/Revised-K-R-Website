import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Contact from "../components/Contact.jsx";
import { aboutStory, aboutValues } from "../../../shared/pages.js";
import heroImage from "../../../assets/img/hero.jpg";

// About Us — Our Story
function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your neighbors in"
        highlight="Kerrville"
        text="Locally owned and operated heating and cooling, serving homes and businesses across the Hill Country."
        crumbs={[{ label: "About Us", href: "#/about" }]}
      />

      <section className="section">
        <div className="wrap split">
          <div className="split__media" data-reveal="1">
            <img src={heroImage} alt="A comfortable living room kept cool by K&R" loading="lazy" />
          </div>
          <div data-reveal="2">
            <span className="eyebrow">Our story</span>
            <h2>
              Good enough is <em>never good enough.</em>
            </h2>
            {aboutStory.map((paragraph) => (
              <p className="story-p" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers">
        <div className="wrap">
          <div data-reveal="1">
            <span className="eyebrow">What we stand for</span>
            <h2 className="section-title">
              Our <em>promise</em>
            </h2>
          </div>
          <InfoCards items={aboutValues} />
        </div>
      </section>

      <WhyUs />
      <Contact />
    </>
  );
}

export default AboutPage;
