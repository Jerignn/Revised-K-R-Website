import { useState } from "react";
import Icon from "./Icon.jsx";

// One link in the main menu.
// If the link has children, it gets a dropdown:
//   desktop — opens on hover or keyboard focus
//   mobile  — opens with the small arrow button

const linkClass =
  "inline-flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-ink no-underline transition-colors hover:bg-surface aria-[current=page]:bg-blue-tint aria-[current=page]:text-blue max-lg:min-h-[52px] max-lg:text-lg";

function NavItem({ link, path, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);

  // Highlight the menu item for the page we're on (and its sub-pages)
  const linkPath = link.href.slice(1);
  const isCurrent = path === linkPath || path.startsWith(linkPath + "/");

  if (!link.children) {
    return (
      <a className={linkClass} href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
        {link.label}
      </a>
    );
  }

  // Closed: hidden on mobile; on desktop hidden until hover or keyboard focus
  let subState =
    "max-lg:hidden lg:invisible lg:translate-y-1.5 lg:opacity-0 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100";
  if (subOpen) {
    subState = "";
  }

  return (
    <div className="group relative flex items-center max-lg:flex-wrap max-lg:justify-between">
      <a className={linkClass + " pr-1 max-lg:flex-1"} href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
        {link.label}
      </a>
      <button
        className={
          "grid h-11 w-8 cursor-pointer place-items-center text-soft max-lg:h-[52px] max-lg:w-12 [&_svg]:size-3.5 [&_svg]:transition-transform max-lg:[&_svg]:size-5 " +
          (subOpen ? "[&_svg]:rotate-180" : "")
        }
        type="button"
        aria-expanded={subOpen}
        aria-label={"Show " + link.label + " pages"}
        onClick={() => setSubOpen(!subOpen)}
      >
        <Icon name="chevron" />
      </button>

      {/* The ::before strip bridges the gap so the menu stays open while the mouse moves down */}
      <ul
        className={
          "max-lg:w-full max-lg:pb-2 max-lg:pl-3 lg:absolute lg:top-[calc(100%+8px)] lg:left-0 lg:min-w-[240px] lg:rounded-xl lg:border lg:border-line lg:bg-white lg:p-2 lg:shadow-lift lg:transition lg:before:absolute lg:before:inset-x-0 lg:before:-top-2.5 lg:before:h-2.5 " +
          subState
        }
      >
        {link.children.map((child) => (
          <li key={child.href}>
            <a
              className="block rounded-lg px-3 py-2.5 text-[15px]/[1.3] font-medium no-underline hover:bg-surface hover:text-blue aria-[current=page]:bg-surface aria-[current=page]:text-blue"
              href={child.href}
              onClick={onNavigate}
              aria-current={path === child.href.slice(1) ? "page" : undefined}
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItem;
