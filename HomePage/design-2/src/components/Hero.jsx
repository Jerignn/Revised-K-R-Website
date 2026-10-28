import Icon from "./Icon.jsx";
import QuoteForm from "./QuoteForm.jsx";
import { business } from "../data/content.js";
import heroImage from "../../../assets/img/hero.jpg";

// Design 2 is booking-first: the request form sits right in the hero
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white" id="top">
      {/* Faded photo behind a navy gradient */}
      <div className="absolute inset-0 -z-10 after:absolute after:inset-0 after:bg-[linear-gradient(100deg,var(--color-navy)_30%,rgb(16_38_61/0.7)_65%,rgb(16_38_61/0.5))]" aria-hidden="true">
        <img className="size-full object-cover opacity-30" src={heroImage} alt="" width="1600" height="900" />
      </div>

      <div className="wrap grid items-center gap-[clamp(40px,5vw,72px)] py-[clamp(56px,7vw,96px)] lg:grid-cols-[1.1fr_minmax(0,460px)]">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/16 bg-white/10 px-3.5 py-2 text-sm font-medium">
            <span className="size-2 animate-ping-soft rounded-full bg-green-400" aria-hidden="true"></span> Technicians available 24/7 in Kerrville
          </span>

          {/* The only h1 on the page (important for SEO) */}
          <h1 className="mt-6 mb-5 max-w-[15ch] text-[clamp(42px,5.4vw,68px)] leading-[1.04] tracking-[-0.035em]">
            Honest heating &amp; cooling, <span className="text-sky">booked in a minute.</span>
          </h1>

          <p className="max-w-[56ch] text-lg text-mist">
            Tell us what's going on and we'll take it from there. Repairs, replacements and tune-ups for
            Kerrville homes and businesses, on all makes and models.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] text-[#dbe5ef] [&_li]:inline-flex [&_li]:items-center [&_li]:gap-2 [&_svg]:text-sky">
            <li>
              <span className="tracking-[2px] text-amber-400" aria-hidden="true">★★★★★</span> Loved on Google
            </li>
            <li>
              <Icon name="shield" size={18} /> 30-day 100% guarantee
            </li>
            <li>
              <Icon name="check" size={18} /> NATE-certified technicians
            </li>
          </ul>

          <a className="group mt-8 inline-flex items-center gap-3.5 text-[22px] font-bold no-underline" href={business.phoneLink}>
            <span className="grid size-12 place-items-center rounded-full bg-white/12 transition-colors group-hover:bg-rust [&_svg]:size-5">
              <Icon name="phone" />
            </span>
            <span>
              <small className="block text-[13px] font-medium text-fog">Rather talk?</small>
              {business.phone}
            </span>
          </a>
        </div>

        <div className="max-w-[560px]" id="contact">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
