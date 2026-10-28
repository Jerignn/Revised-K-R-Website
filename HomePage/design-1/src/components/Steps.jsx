import { steps } from "../data/content.js";

function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <div data-reveal="1">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">
            Back to comfort <em>in three steps</em>
          </h2>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" data-reveal={String(index + 1)} key={step.title}>
              <div className="n">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
