import Icon from "./Icon.jsx";
import { business } from "../data/content.js";

function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>
          <Icon name="clock" /> 24/7 Emergency HVAC Service
        </span>
        <span>
          <span className="hide-sm">
            <Icon name="pin" /> Kerrville, TX
          </span>
          &nbsp;&nbsp;
          <a href={business.phoneLink}>
            <Icon name="phone" /> {business.phone}
          </a>
        </span>
      </div>
    </div>
  );
}

export default TopBar;
