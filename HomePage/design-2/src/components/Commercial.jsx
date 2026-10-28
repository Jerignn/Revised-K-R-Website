import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { businessTypes } from "../data/content.js";
import commercialImage from "../../../assets/img/svc-commercial.jpg";

// A full-width navy band for business customers
function Commercial() {
  return (
    <section className="commercial" id="commercial">
      <div className="wrap commercial__grid">
        <div data-reveal="1">
          <span className="kicker kicker--light">Commercial HVAC</span>
          <h2>Business comfort, handled.</h2>
          <p className="lede">
            No two businesses are alike, so we design heating and cooling around yours. Our technicians are
            trained on every type of commercial system — and respond fast, so you can keep working as usual.
          </p>

          <ul className="biz-list">
            {businessTypes.map((type) => (
              <li key={type}>
                <Icon name="building" size={18} /> {type}
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="light">
            Get a free quote <Icon name="arrow" />
          </Button>
        </div>

        <div className="commercial__img" data-reveal="2">
          <img src={commercialImage} alt="Commercial HVAC rooftop units serviced by K&R" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Commercial;
