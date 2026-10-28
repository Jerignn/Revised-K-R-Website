import { badges } from "../data/content.js";

// The certification logos in one row, with a short label
function Badges() {
  return (
    <div className="badges">
      <span className="badges__label">Certified &amp; trusted</span>
      <ul aria-label="Certifications and partners">
        {badges.map((badge) => (
          <li key={badge.alt}>
            <img src={badge.image} alt={badge.alt} loading="lazy" height="44" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Badges;
