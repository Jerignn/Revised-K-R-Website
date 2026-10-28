import PageHero from "../components/PageHero.jsx";
import ProjectGallery from "../components/ProjectGallery.jsx";
import Contact from "../components/Contact.jsx";

// Our Work — a gallery of recent jobs
function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Recent"
        highlight="projects"
        text="A look at some of the installs, replacements and upgrades our team has completed around the Hill Country."
      />

      <section className="section">
        <div className="wrap">
          <ProjectGallery />
        </div>
      </section>

      <Contact />
    </>
  );
}

export default OurWorkPage;
