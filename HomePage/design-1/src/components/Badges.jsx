import { badges } from "../data/content.js";

// The certification logos in a single quiet row
function Badges() {
  return (
    <ul className="badges" aria-label="Certifications and partners">
      {badges.map((badge) => (
        <li key={badge.alt}>
          <img src={badge.image} alt={badge.alt} loading="lazy" height="48" />
        </li>
      ))}
    </ul>
  );
}

export default Badges;
