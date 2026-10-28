import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

// The last thing on the home page: call, visit, or book
function CtaBand() {
  return (
    <section className="py-[clamp(48px,6vw,72px)]">
      <div className="wrap">
        <div
          className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 rounded-3xl bg-linear-120 from-blue to-navy p-[clamp(32px,4vw,48px)] text-white"
          data-reveal="1"
        >
          <div>
            <h2 className="text-[clamp(28px,3vw,38px)]">Ready when you are — day or night.</h2>
            <p className="mt-2 text-mist">
              Open 24 hours, Monday – Sunday · {business.street}, {business.city}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 max-sm:w-full max-sm:[&>a]:w-full">
            <Button href={business.phoneLink} size="lg" variant="light">
              <Icon name="phone" /> {business.phone}
            </Button>
            <Button href="#contact" size="lg">
              Book online <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
