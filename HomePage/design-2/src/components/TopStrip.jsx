import { business } from "../data/content.js";

function TopStrip() {
  return (
    <div className="strip">
      <div className="wrap">
        <span>When you call K&amp;R, it's not a gamble.</span>
        <span className="hide-sm">
          Open 24/7 · <a href={business.phoneLink}>{business.phone}</a>
        </span>
      </div>
    </div>
  );
}

export default TopStrip;
