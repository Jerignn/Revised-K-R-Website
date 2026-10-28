import { badges } from "../data/content.js";

// The certification logos slide from right to left in an endless loop.
// There are only a few logos, so one "lap" repeats them 3 times to fill wide screens.
// The lap is then shown twice so the loop has no gap. Only the first set is read
// out by screen readers. Hovering pauses it (see .badge-carousel in style.css).
function BadgeCarousel() {
  const lap = [...badges, ...badges, ...badges];

  return (
    <div className="badge-carousel" role="region" aria-label="Certifications and partners">
      <ul className="badge-carousel__track">
        {[...lap, ...lap].map((badge, index) => {
          const isCopy = index >= badges.length;
          return (
            <li key={index} aria-hidden={isCopy ? "true" : undefined}>
              <img src={badge.image} alt={isCopy ? "" : badge.alt} loading="lazy" height="54" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgeCarousel;
