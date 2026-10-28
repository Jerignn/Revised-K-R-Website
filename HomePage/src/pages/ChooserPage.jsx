import DesignCard from "../components/DesignCard.jsx";
import { designs } from "../data/designs.js";
import logo from "../../assets/img/logo.png";

// Landing page that lets the client pick between the two designs
function ChooserPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header>
        <div className="wrap">
          <img src={logo} alt="K&R Heating & Cooling" width="186" height="109" />
          <span>K&amp;R · Website directions</span>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="intro">
          <span className="kicker">A fresh perspective</span>
          <h1>
            Two fresh directions
            <br />
            for <span>K&amp;R.</span>
          </h1>
          <p>
            The same trusted Kerrville comfort, expressed two ways. Explore each complete homepage and choose
            the direction that feels right.
          </p>
        </section>

        <div className="label">One K&amp;R. Two possibilities.</div>

        <section className="cards" aria-label="Design directions">
          {designs.map((design) => (
            <DesignCard design={design} key={design.tag} />
          ))}
        </section>

        <section className="note">
          <h2>
            Different first impressions. <span>The same K&amp;R care.</span>
          </h2>
          <p>
            Each direction is a complete, responsive homepage built from K&amp;R's own services, offers and
            customer reviews. Use the floating bar to switch designs or return here. Enquiry forms are
            previews only; call links lead to the K&amp;R phone line, 830-792-3993.
          </p>
        </section>

        <footer>
          <span>Thoughtfully prepared for K&amp;R Heating &amp; Cooling.</span>
          <span>Two homepage concepts · October 2026 · Presentation only</span>
        </footer>
      </main>
    </>
  );
}

export default ChooserPage;
