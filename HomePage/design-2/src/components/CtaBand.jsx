import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

// The last thing on the home page: call, visit, or book
function CtaBand() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="cta-band" data-reveal="1">
          <div>
            <h2>Ready when you are — day or night.</h2>
            <p>Open 24 hours, Monday – Sunday · {business.street}, {business.city}</p>
          </div>
          <div className="cta-band__actions">
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
