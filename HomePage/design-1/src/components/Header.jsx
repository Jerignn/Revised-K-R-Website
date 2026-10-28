import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import NavItem from "./NavItem.jsx";
import { siteMenu } from "../../../shared/pages.js";
import logo from "../../../assets/img/logo.png";

// The masthead: the logo centred on top, the menu on its own ruled line below.
// On small screens the menu becomes a full-screen panel that slides down.
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

  let navState = "max-lg:invisible max-lg:-translate-y-full";
  if (menuOpen) {
    navState = "";
  }

  // The three burger lines turn into an X when the menu is open
  const line = "mx-2.5 my-[7px] block h-0.5 bg-current transition";

  return (
    <header className="border-b border-ink bg-paper">
      <div className="wrap grid grid-cols-[1fr_auto] items-center gap-6 py-3 lg:grid-cols-[1fr_auto_1fr] lg:py-[18px]">
        <span className="font-serif text-lg/[1.3] text-ink-soft max-lg:hidden">
          Heating &amp; Cooling
          <br />
          for the Hill Country
        </span>

        <a className="flex" href="#/" aria-label="K&R Heating & Cooling home">
          <img className="h-12 w-auto sm:h-14 lg:h-[72px]" src={logo} alt="K&R Heating & Cooling logo" width="186" height="109" />
        </a>

        <div className="justify-self-end max-lg:hidden">
          <Button href="#/contact" size="sm">
            Book service
          </Button>
        </div>

        <button
          className="relative z-[160] size-12 cursor-pointer justify-self-end text-ink lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={line + (menuOpen ? " translate-y-[9px] rotate-45" : "")}></span>
          <span className={line + (menuOpen ? " opacity-0" : "")}></span>
          <span className={line + (menuOpen ? " -translate-y-[9px] -rotate-45" : "")}></span>
        </button>
      </div>

      <div className="wrap">
        <nav
          className={
            "flex max-lg:fixed max-lg:inset-0 max-lg:z-[150] max-lg:flex-col max-lg:overflow-y-auto max-lg:bg-paper max-lg:px-6 max-lg:pt-24 max-lg:pb-12 max-lg:transition-[translate,visibility] max-lg:duration-500 lg:items-center lg:justify-center lg:gap-[34px] lg:border-t-[3px] lg:border-double lg:border-ink lg:py-1 " +
            navState
          }
          id="site-nav"
          aria-label="Main"
        >
          {siteMenu.map((link) => (
            <NavItem key={link.href} link={link} path={path} onNavigate={closeMenu} />
          ))}
          <span className="mt-7 lg:hidden">
            <Button href="#/contact" className="w-full" onClick={closeMenu}>
              Book service
            </Button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
