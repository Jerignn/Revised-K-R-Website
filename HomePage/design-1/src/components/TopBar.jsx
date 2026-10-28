import { business } from "../data/content.js";

// The thin dateline above the masthead, like the top of a newspaper
function TopBar() {
  return (
    <div className="border-b border-hair font-mono text-xs/none font-medium tracking-[0.08em] text-ink-soft uppercase">
      <div className="wrap flex min-h-10 items-center justify-between gap-4">
        <span>Kerrville, Texas</span>
        <span className="max-sm:hidden">Open 24 hours · Monday – Sunday</span>
        <a className="text-rust-dk no-underline hover:underline" href={business.phoneLink}>
          Call {business.phone}
        </a>
      </div>
    </div>
  );
}

export default TopBar;
