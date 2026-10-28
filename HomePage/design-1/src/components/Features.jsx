import Icon from "./Icon.jsx";
import { features } from "../data/content.js";

// Image + text rows for Cooling, Heating and Commercial
function Features() {
  return (
    <section className="section">
      <div className="wrap">
        {features.map((feature) => (
          <article className={feature.flip ? "split split--flip" : "split"} id={feature.id} key={feature.id}>
            <div className="split__media" data-reveal="1">
              <img src={feature.image} alt={feature.imageAlt} loading="lazy" width="320" height="380" />
              <div className="tag">
                <b>{feature.number}</b> · {feature.tag}
              </div>
            </div>

            <div data-reveal="2">
              <span className="eyebrow">
                <span className="num">{feature.number}</span> {feature.eyebrow}
              </span>
              <h2>
                {feature.title} <em>{feature.highlight}</em>
              </h2>
              <p>{feature.text}</p>

              <ul className="checks">
                {feature.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>

              <a className="link-more" href="#contact">
                {feature.linkText} <Icon name="arrow" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
