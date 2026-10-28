import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { Kicker, section } from "./ui.jsx";
import { businessTypes } from "../data/content.js";
import commercialImage from "../../../assets/img/svc-commercial.jpg";

// A full-width navy band for business customers
function Commercial() {
  return (
    <section className={section + " bg-navy text-white"} id="commercial">
      <div className="wrap grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-2">
        <div data-reveal="1">
          <Kicker light={true}>Commercial HVAC</Kicker>
          <h2 className="mb-4">Business comfort, handled.</h2>
          <p className="max-w-[56ch] text-lg text-mist">
            No two businesses are alike, so we design heating and cooling around yours. Our technicians are
            trained on every type of commercial system — and respond fast, so you can keep working as usual.
          </p>

          <ul className="mt-7 mb-8 grid gap-2.5 sm:grid-cols-3">
            {businessTypes.map((type) => (
              <li className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/6 px-3.5 py-3 text-[15px] font-medium [&_svg]:flex-none [&_svg]:text-sky" key={type}>
                <Icon name="building" size={18} /> {type}
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="light">
            Get a free quote <Icon name="arrow" />
          </Button>
        </div>

        <div data-reveal="2">
          <img className="aspect-[5/4] w-full rounded-[20px] object-cover" src={commercialImage} alt="Commercial HVAC rooftop units serviced by K&R" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Commercial;
