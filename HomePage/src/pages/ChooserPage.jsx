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
          <span>K&amp;R · Homepage concepts</span>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="intro">
          <span className="kicker">Website proposal · Kerrville, TX</span>
          <h1>
            Pick the K&amp;R
            <br />
            you'd <span>recognize.</span>
          </h1>
          <p>
            One reads like the local paper you trust; the other gets a visit booked before the coffee's
            poured. Open each homepage, click around, and tell us which one sounds like you.
          </p>
        </section>

        <div className="label">Two concepts · same services, same people</div>

        <section className="cards" aria-label="Design directions">
          {designs.map((design) => (
            <DesignCard design={design} key={design.tag} />
          ))}
        </section>

        <section className="note">
          <h2>
            How to <span>review them.</span>
          </h2>
          <p>
            Both concepts are full, working sites built from K&amp;R's real services, offers and customer
            reviews — try them on your phone too. The floating bar at the bottom switches between them or
            brings you back here. Forms don't send anything yet; call links ring the K&amp;R line,
            830-792-3993.
          </p>
        </section>

        <footer>
          <span>Prepared for K&amp;R Heating &amp; Cooling.</span>
          <span>Homepage concepts · October 2026 · Not yet public</span>
        </footer>
      </main>
    </>
  );
}

export default ChooserPage;
