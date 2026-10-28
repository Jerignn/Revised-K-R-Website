import PageHero from "../components/PageHero.jsx";
import InfoCards from "../components/InfoCards.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Contact from "../components/Contact.jsx";
import SectionHead, { Eyebrow, section } from "../components/ui.jsx";
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

      <section className={section}>
        <div className="wrap grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="max-w-[560px]" data-reveal="1">
            <img className="aspect-[4/4.4] w-full object-cover" src={heroImage} alt="A comfortable living room kept cool by K&R" loading="lazy" />
          </div>
          <div data-reveal="2">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3.5 mb-5">
              Good enough is <em>never good enough.</em>
            </h2>
            {/* The first paragraph opens with a large rust drop cap */}
            {aboutStory.map((paragraph) => (
              <p
                className="mb-[18px] max-w-[56ch] font-serif text-[19px]/[1.6] first-of-type:first-letter:float-left first-of-type:first-letter:pt-1.5 first-of-type:first-letter:pr-2.5 first-of-type:first-letter:text-[76px]/[0.8] first-of-type:first-letter:text-rust"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={section + " border-t border-hair"}>
        <div className="wrap">
          <SectionHead label="What we stand for" className="mb-0!">
            Our <em>promise</em>
          </SectionHead>
          <InfoCards items={aboutValues} />
        </div>
      </section>

      <WhyUs />
      <Contact />
    </>
  );
}

export default AboutPage;
