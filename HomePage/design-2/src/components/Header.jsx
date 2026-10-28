import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import NavItem from "./NavItem.jsx";
import { business } from "../data/content.js";
import { siteMenu } from "../../../shared/pages.js";
import logo from "../../../assets/img/logo.png";

// Sticky white header. On small screens the menu becomes a panel that slides in from the right.
function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stop the page from scrolling while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  // Close the menu with the Escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  let navState = "max-lg:invisible max-lg:translate-x-full";
  if (menuOpen) {
    navState = "";
  }

  // The three burger lines turn into an X when the menu is open
  const line = "mx-3 my-1.5 block h-0.5 rounded-sm bg-current transition";

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white lg:bg-white/92 lg:backdrop-blur-md">
      <div className="wrap flex min-h-[68px] items-center gap-3 sm:min-h-[76px] lg:gap-7">
        <a className="flex flex-none" href="#/" aria-label="K&R Heating & Cooling home">
          <img className="h-[42px] w-auto sm:h-[50px]" src={logo} alt="K&R Heating & Cooling logo" width="186" height="109" />
        </a>

        <nav
          className={
            "flex items-center gap-1 max-lg:fixed max-lg:inset-x-0 max-lg:top-[68px] max-lg:bottom-0 max-lg:z-[150] max-lg:flex-col max-lg:items-stretch max-lg:overflow-y-auto max-lg:border-t max-lg:border-line max-lg:bg-white max-lg:px-6 max-lg:pt-5 max-lg:pb-12 max-lg:transition-[translate,visibility] max-lg:duration-350 sm:max-lg:top-[76px] lg:mx-auto " +
            navState
          }
          id="site-nav"
          aria-label="Main"
        >
          {siteMenu.map((link) => (
            <NavItem key={link.href} link={link} path={path} onNavigate={closeMenu} />
          ))}
          <span className="mt-6 lg:hidden">
            <Button href="#/contact" className="w-full" onClick={closeMenu}>
              Book online
            </Button>
          </span>
        </nav>

        <div className="flex flex-none items-center gap-4 max-lg:ml-auto">
          <a className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-navy no-underline hover:text-blue [&_svg]:size-4 [&_svg]:text-blue" href={business.phoneLink}>
            <Icon name="phone" /> <span className="max-sm:sr-only">{business.phone}</span>
          </a>
          <Button href="#/contact" size="sm" className="max-sm:hidden" onClick={closeMenu}>
            Book online
          </Button>
        </div>

        <button
          className="relative z-[160] size-12 cursor-pointer text-ink lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={line + (menuOpen ? " translate-y-2 rotate-45" : "")}></span>
          <span className={line + (menuOpen ? " opacity-0" : "")}></span>
          <span className={line + (menuOpen ? " -translate-y-2 -rotate-45" : "")}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
