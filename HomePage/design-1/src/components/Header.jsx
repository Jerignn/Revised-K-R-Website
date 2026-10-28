import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import NavItem from "./NavItem.jsx";
import { siteMenu } from "../../../shared/pages.js";
import logo from "../../../assets/img/logo.png";

// The masthead: the logo centred on top, the menu on its own ruled line below
function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stop the page from scrolling while the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
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

  return (
    <header className="header">
      <div className="wrap masthead">
        <span className="masthead__side">
          Heating &amp; Cooling
          <br />
          for the Hill Country
        </span>

        <a className="logo" href="#/" aria-label="K&R Heating & Cooling home">
          <img src={logo} alt="K&R Heating & Cooling logo" width="186" height="109" />
        </a>

        <div className="masthead__side masthead__side--end">
          <Button href="#/contact" size="sm">
            Book service
          </Button>
        </div>

        <button
          className="burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="wrap">
        <nav className={menuOpen ? "nav is-open" : "nav"} id="site-nav" aria-label="Main">
          {siteMenu.map((link) => (
            <NavItem key={link.href} link={link} path={path} onNavigate={closeMenu} />
          ))}
          <span className="nav__book">
            <Button href="#/contact" onClick={closeMenu}>
              Book service
            </Button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
