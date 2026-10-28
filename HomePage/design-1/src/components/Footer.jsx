import { business } from "../data/content.js";
import { siteMenu } from "../../../shared/pages.js";
import logoWhite from "../../../assets/img/logo-white.png";

// Footer standard: all text is 16px on a 24px line
const title = "mb-3.5 font-mono text-base/6 font-medium tracking-[0.08em] text-white uppercase";
const list = "grid gap-2";

function Footer() {
  const year = new Date().getFullYear();

  // Menu items with a dropdown get their own column; the rest share one
  const menusWithPages = siteMenu.filter((link) => link.children);
  const singleLinks = siteMenu.filter((link) => !link.children);

  return (
    <footer className="bg-night pt-[72px] pb-[120px] text-base/6 text-night-muted [&_a]:no-underline [&_a:hover]:text-peach">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b-[3px] border-double border-night-hair pb-9">
          <img className="h-16 w-auto" src={logoWhite} alt="K&R Heating & Cooling" width="145" height="85" loading="lazy" />
          <p className="max-w-[34ch] font-serif text-base/6 text-night-text">
            Locally owned &amp; operated. <em className="text-peach">Your home comfort is our #1 priority.</em>
          </p>
        </div>

        <div className="grid gap-9 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {menusWithPages.map((menu) => (
            <div key={menu.href}>
              <h2 className={title}>
                <a href={menu.href}>{menu.label}</a>
              </h2>
              <ul className={list}>
                {menu.children.map((child) => (
                  <li key={child.href}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className={title}>Company</h2>
            <ul className={list}>
              {singleLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={title}>Contact</h2>
            <ul className={list}>
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

        <div className="flex flex-wrap justify-between gap-3 border-t border-night-hair pt-[22px] text-base/6">
          <span>© {year} K&amp;R Heating &amp; Cooling. All rights reserved.</span>
          <span>Printed in Kerrville, Texas</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
