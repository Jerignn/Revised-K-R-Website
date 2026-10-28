import { business } from "../data/content.js";

// The thin dateline above the masthead, like the top of a newspaper
function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>Kerrville, Texas</span>
        <span className="hide-sm">Open 24 hours · Monday – Sunday</span>
        <a href={business.phoneLink}>Call {business.phone}</a>
      </div>
    </div>
  );
}

export default TopBar;
