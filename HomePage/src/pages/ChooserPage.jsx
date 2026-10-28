import DesignCard from "../components/DesignCard.jsx";
import { designs } from "../data/designs.js";
import logo from "../../assets/img/logo.png";

// Small uppercase label style used in the header, intro and section label
const label = "text-xs/none font-bold tracking-[0.18em] uppercase";

// Landing page that lets the client pick between the two designs
function ChooserPage() {
  return (
    <>
      <a className="sr-only z-10 bg-ink px-3.5 py-2.5 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2" href="#main">
        Skip to content
      </a>

      <header className="border-b border-line py-[26px]">
        <div className="wrap flex items-center justify-between gap-5">
          <img className="h-[58px] w-auto" src={logo} alt="K&R Heating & Cooling" width="186" height="109" />
          <span className={label + " text-soft max-[520px]:hidden"}>K&amp;R · Homepage concepts</span>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="pt-[clamp(60px,9vw,110px)] pb-[clamp(40px,6vw,70px)]">
          <span className={label + " text-[13px] tracking-[0.2em] text-rust"}>Website proposal · Kerrville, TX</span>
          <h1 className="mt-[22px] mb-[26px] font-display text-[clamp(48px,7.4vw,104px)]/[0.95] font-bold tracking-[-0.045em]">
            Pick the K&amp;R
            <br />
            you'd <span className="text-rust">recognize.</span>
          </h1>
          <p className="max-w-[56ch] text-xl text-soft">
            One reads like the local paper you trust; the other gets a visit booked before the coffee's
            poured. Open each homepage, click around, and tell us which one sounds like you.
          </p>
        </section>

        {/* Label with a rule running to the right edge */}
        <div className={label + " mb-[26px] flex items-center gap-4 tracking-[0.2em] text-soft after:h-px after:flex-1 after:bg-line"}>
          Two concepts · same services, same people
        </div>

        <section className="grid gap-7 pb-[clamp(70px,9vw,110px)] md:grid-cols-2" aria-label="Design directions">
          {designs.map((design, index) => (
            <DesignCard design={design} index={index} key={design.tag} />
          ))}
        </section>

        <section className="border-t border-line py-[clamp(50px,7vw,80px)]">
          <h2 className="mb-4 font-display text-[clamp(26px,3vw,36px)]/[1.1] font-bold tracking-[-0.02em]">
            How to <span className="text-rust">review them.</span>
          </h2>
          <p className="max-w-[70ch] text-soft">
            Both concepts are full, working sites built from K&amp;R's real services, offers and customer
            reviews — try them on your phone too. The floating bar at the bottom switches between them or
            brings you back here. Forms don't send anything yet; call links ring the K&amp;R line,
            830-792-3993.
          </p>
        </section>

        <footer className="flex flex-wrap justify-between gap-3 border-t border-line pt-[30px] pb-10 text-sm text-soft">
          <span>Prepared for K&amp;R Heating &amp; Cooling.</span>
          <span>Homepage concepts · October 2026 · Not yet public</span>
        </footer>
      </main>
    </>
  );
}

export default ChooserPage;
