import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import Values from "../components/Values.jsx";
import Contact from "../components/Contact.jsx";
import { Kicker, lede, section } from "../components/ui.jsx";
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

      <section className={section}>
        <div className="wrap grid items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-2">
          <div data-reveal="1">
            <img className="aspect-[4/3.6] w-full rounded-[20px] object-cover" src={heroImage} alt="A comfortable living room kept cool by K&R" loading="lazy" />
          </div>
          <div data-reveal="2">
            <Kicker>Our story</Kicker>
            <h2 className="mb-[18px]">
              Treat every home <span className="text-blue">like our own.</span>
            </h2>
            {aboutStory.map((paragraph) => (
              <p className={lede + " mb-4"} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={section + " pt-0"}>
        <div className="wrap">
          <div data-reveal="1">
            <Kicker>What we stand for</Kicker>
            <h2>
              Our <span className="text-blue">promise.</span>
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
