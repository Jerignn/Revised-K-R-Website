import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import Values from "../components/Values.jsx";
import Contact from "../components/Contact.jsx";
import { aboutStory, aboutValues } from "../../../shared/pages.js";
import heroImage from "../../../assets/img/hero.jpg";

// About Us — Our Story
function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Your neighbors in"
        highlight="Kerrville."
        text="Locally owned and operated heating and cooling, serving homes and businesses across the Hill Country."
        crumbs={[{ label: "About Us", href: "#/about" }]}
      />

      <section className="section">
        <div className="wrap story">
          <div className="story__img" data-reveal="1">
            <img src={heroImage} alt="A comfortable living room kept cool by K&R" loading="lazy" />
          </div>
          <div data-reveal="2">
            <span className="kicker">Our story</span>
            <h2 className="page-title">
              Treat every home <span className="hl">like our own.</span>
            </h2>
            {aboutStory.map((paragraph) => (
              <p className="lede" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap">
          <div data-reveal="1">
            <span className="kicker">What we stand for</span>
            <h2 className="page-title">
              Our <span className="hl">promise.</span>
            </h2>
          </div>
          <InfoCards items={aboutValues} />
        </div>
      </section>

      <Values />
      <Contact />
    </>
  );
}

export default AboutPage;
