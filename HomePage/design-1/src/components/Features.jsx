import Icon from "./Icon.jsx";
import { features } from "../data/content.js";

// Cooling, Heating and Commercial as three side-by-side "departments"
function Features() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head" data-reveal="1">
          <span className="eyebrow">§ 01 — Departments</span>
          <h2>
            What we do, <em>and how well.</em>
          </h2>
        </div>

        <div className="depts">
          {features.map((feature, index) => (
            <article className="dept" id={feature.id} data-reveal={String(index + 1)} key={feature.id}>
              <img src={feature.image} alt={feature.imageAlt} loading="lazy" width="400" height="300" />
              <span className="dept__tag">
                {feature.number} · {feature.eyebrow}
              </span>
              <h3>
                {feature.title} <em>{feature.highlight}</em>
              </h3>
              <p>{feature.text}</p>

              <ul className="checks">
                {feature.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>

              <a className="link-more" href="#contact">
                {feature.linkText} <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
