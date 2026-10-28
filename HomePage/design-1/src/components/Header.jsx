import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import NavItem from "./NavItem.jsx";
import { siteMenu } from "../../../shared/pages.js";
import logoWhite from "../../../assets/img/logo-white.png";

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
      <div className="wrap">
        <a className="logo" href="#/" aria-label="K&R Heating & Cooling home">
          <img src={logoWhite} alt="K&R Heating & Cooling logo" width="145" height="85" />
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} id="site-nav" aria-label="Main">
          {siteMenu.map((link) => (
            <NavItem key={link.href} link={link} path={path} onNavigate={closeMenu} />
          ))}
          <Button href="#/contact" size="sm" onClick={closeMenu}>
            Book Service <Icon name="arrow" />
          </Button>
        </nav>

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
    </header>
  );
}

export default Header;
