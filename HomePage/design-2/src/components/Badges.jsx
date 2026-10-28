import { badges } from "../data/content.js";

// The certification logos in one row, with a short label
function Badges() {
  return (
    <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-line pt-8">
      <span className="text-[13px] font-bold tracking-[0.08em] text-soft uppercase">Certified &amp; trusted</span>
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-5" aria-label="Certifications and partners">
        {badges.map((badge) => (
          <li key={badge.alt}>
            <img className="h-11 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" src={badge.image} alt={badge.alt} loading="lazy" height="44" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Badges;
