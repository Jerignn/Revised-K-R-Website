// One clickable card that links to a design.
// design: one item from src/data/designs.js

function DesignCard({ design }) {
  return (
    <a className={"card card--" + design.theme} href={design.link}>
      <div className="card__shot">
        <img src={design.image} alt={design.imageAlt} width="1440" height="990" />
        <span className="card__tag">{design.tag}</span>
      </div>

      <div className="card__body">
        <span className="card__meta">{design.meta}</span>
        <h2>{design.title}</h2>
        <p>{design.text}</p>

        <div className="swatches">
          {design.colors.map((color) => (
            <i key={color} style={{ background: color }}></i>
          ))}
          {design.colorText}
        </div>

        <span className="card__cta">
          {design.buttonText}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default DesignCard;
