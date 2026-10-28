import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { businessTypes } from "../data/content.js";
import commercialImage from "../../../assets/img/svc-commercial.jpg";

function Commercial() {
  return (
    <section className="section commercial" id="commercial">
      <div className="wrap">
        <div className="commercial__img" data-reveal="1">
          <img src={commercialImage} alt="Commercial HVAC rooftop units serviced by K&R" loading="lazy" />
          <div className="chip">
            <b className="hl">Fast response</b>
            <br />
            so you can keep working as usual
          </div>
        </div>

        <div data-reveal="2">
          <span className="kicker">Commercial HVAC</span>
          <h2>
            Business comfort, <span className="hl">handled.</span>
          </h2>
          <p className="lede">
            No two businesses are alike, so we design heating and cooling around yours. Our technicians are
            trained on every type of commercial system.
          </p>

          <ul className="prop-list">
            {businessTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>

          <Button href="#contact">
            Get a free quote <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Commercial;
