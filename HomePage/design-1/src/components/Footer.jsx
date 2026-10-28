import { business } from "../data/content.js";
import { siteMenu } from "../../../shared/pages.js";
import logoWhite from "../../../assets/img/logo-white.png";

function Footer() {
  const year = new Date().getFullYear();

  // Menu items with a dropdown get their own column; the rest share one
  const menusWithPages = siteMenu.filter((link) => link.children);
  const singleLinks = siteMenu.filter((link) => !link.children);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <img className="footer__logo" src={logoWhite} alt="K&R Heating & Cooling" width="145" height="85" loading="lazy" />
          <p className="footer__about">
            Locally owned &amp; operated. <em>Your home comfort is our #1 priority.</em>
          </p>
        </div>

        <div className="footer__grid">
          {menusWithPages.map((menu) => (
            <div key={menu.href}>
              <h2 className="footer__title">
                <a href={menu.href}>{menu.label}</a>
              </h2>
              <ul>
                {menu.children.map((child) => (
                  <li key={child.href}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="footer__title">Company</h2>
            <ul>
              {singleLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__title">Contact</h2>
            <ul>
              <li><a href={business.phoneLink}>{business.phone}</a></li>
              <li>
                <address>
                  {business.street}
                  <br />
                  {business.city}
                </address>
              </li>
              <li>Open 24 hours, 7 days</li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>© {year} K&amp;R Heating &amp; Cooling. All rights reserved.</span>
          <span>Printed in Kerrville, Texas</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
