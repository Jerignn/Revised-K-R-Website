import { steps } from "../data/content.js";

// Three numbered steps joined by a line
function Steps() {
  return (
    <section className="section steps-section">
      <div className="wrap">
        <div className="head head--center" data-reveal="1">
          <div>
            <span className="kicker">How it works</span>
            <h2>Back to comfort in three steps.</h2>
          </div>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" data-reveal={String(index + 1)} key={step.title}>
              <span className="step__n">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Steps;
