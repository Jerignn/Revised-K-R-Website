import { useState } from "react";
import Icon from "./Icon.jsx";

// One link in the main menu.
// If the link has children, it gets a dropdown:
//   desktop — opens on hover or keyboard focus
//   mobile  — opens with the small arrow button
function NavItem({ link, path, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);

  // Highlight the menu item for the page we're on (and its sub-pages)
  const linkPath = link.href.slice(1);
  const isCurrent = path === linkPath || path.startsWith(linkPath + "/");

  if (!link.children) {
    return (
      <a className="nav__link" href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
        {link.label}
      </a>
    );
  }

  return (
    <div className={subOpen ? "nav__item has-sub is-open" : "nav__item has-sub"}>
      <a className="nav__link" href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
        {link.label}
      </a>
      <button
        className="nav__caret"
        type="button"
        aria-expanded={subOpen}
        aria-label={"Show " + link.label + " pages"}
        onClick={() => setSubOpen(!subOpen)}
      >
        <Icon name="chevron" />
      </button>

      <ul className="nav__sub">
        {link.children.map((child) => (
          <li key={child.href}>
            <a href={child.href} onClick={onNavigate} aria-current={path === child.href.slice(1) ? "page" : undefined}>
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItem;
