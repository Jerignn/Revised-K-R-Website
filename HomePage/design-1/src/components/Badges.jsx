import { badges } from "../data/content.js";

// The certification logos in a single quiet row (shown on the dark band, so turned white)
function Badges() {
  return (
    <ul className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-5" aria-label="Certifications and partners">
      {badges.map((badge) => (
        <li key={badge.alt}>
          <img
            className="h-12 w-auto opacity-75 mix-blend-screen brightness-[1.6] grayscale invert transition-opacity hover:opacity-100"
            src={badge.image}
            alt={badge.alt}
            loading="lazy"
            height="48"
          />
        </li>
      ))}
    </ul>
  );
}

export default Badges;
