import { steps } from "../data/content.js";

function Steps() {
  return (
    <section className="section">
      <div className="wrap steps__grid">
        <div className="section-head section-head--side" data-reveal="1">
          <span className="eyebrow">How it works</span>
          <h2>
            Back to comfort <em>in three steps.</em>
          </h2>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" data-reveal={String(index + 1)} key={step.title}>
              <span className="n">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Steps;
