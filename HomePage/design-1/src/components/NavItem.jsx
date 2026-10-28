import { useState } from "react";
import Icon from "./Icon.jsx";

// One link in the main menu.
// If the link has children, it gets a dropdown:
//   desktop — opens on hover or keyboard focus
//   mobile  — opens with the small arrow button

const linkClass =
  "inline-flex min-h-11 items-center text-[15px] font-medium text-ink no-underline underline-offset-[6px] hover:text-rust aria-[current=page]:text-rust aria-[current=page]:underline max-lg:min-h-16 max-lg:font-serif max-lg:text-[32px] max-lg:font-normal";

function NavItem({ link, path, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);

  // Highlight the menu item for the page we're on (and its sub-pages)
  const linkPath = link.href.slice(1);
  const isCurrent = path === linkPath || path.startsWith(linkPath + "/");

  if (!link.children) {
    return (
      <a className={linkClass + " max-lg:border-b max-lg:border-hair"} href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
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
    <div className="group relative flex items-center gap-0.5 max-lg:flex-wrap max-lg:justify-between max-lg:border-b max-lg:border-hair">
      <a className={linkClass} href={link.href} onClick={onNavigate} aria-current={isCurrent ? "page" : undefined}>
        {link.label}
      </a>
      <button
        className={
          "grid h-8 w-6 cursor-pointer place-items-center text-ink max-lg:size-12 [&_svg]:size-3.5 [&_svg]:transition-transform max-lg:[&_svg]:size-[22px] " +
          (subOpen ? "[&_svg]:rotate-180" : "")
        }
        type="button"
        aria-expanded={subOpen}
        aria-label={"Show " + link.label + " pages"}
        onClick={() => setSubOpen(!subOpen)}
      >
        <Icon name="chevron" />
      </button>

      <ul
        className={
          "max-lg:w-full max-lg:pb-3.5 lg:absolute lg:top-full lg:-left-5 lg:z-[120] lg:min-w-[250px] lg:border lg:border-ink lg:bg-paper lg:py-2.5 lg:shadow-[6px_6px_0_var(--color-ink)] lg:transition " +
          subState
        }
      >
        {link.children.map((child) => (
          <li key={child.href}>
            <a
              className="block py-2 font-serif text-xl/[1.25] text-ink-soft no-underline hover:text-rust hover:italic aria-[current=page]:text-rust aria-[current=page]:italic lg:px-5 lg:py-2.5 lg:text-[17px] lg:text-ink"
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
