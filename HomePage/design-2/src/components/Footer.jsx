import { business } from "../data/content.js";
import { siteMenu } from "../../../shared/pages.js";
import logo from "../../../assets/img/logo.png";

// Footer standard: all text is 16px on a 24px line, all spacing is 24px,
// and every link is a block at least 24px tall (the WCAG minimum target size)
const title = "mb-6 text-base/6 font-bold tracking-[0.06em] text-white uppercase";
const list = "grid gap-6 [&_a]:block [&_a]:min-h-6";

function Footer() {
  const year = new Date().getFullYear();

  // Menu items with a dropdown get their own column; the rest share one
  const menusWithPages = siteMenu.filter((link) => link.children);
  const singleLinks = siteMenu.filter((link) => !link.children);

  return (
    <footer className="bg-navy pt-[72px] pb-[120px] text-base/6 text-[#b5c3d3] [&_a]:no-underline [&_a:hover]:text-white">
      <div className="wrap">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            {/* The logo is dark, so it sits on a white tile */}
            <img className="mb-4 box-content h-16 w-auto rounded-xl bg-white px-3.5 py-2.5" src={logo} alt="K&R Heating & Cooling" width="186" height="109" loading="lazy" />
            <p className="max-w-[32ch]">Locally owned &amp; operated. Your home comfort is our #1 priority.</p>
          </div>

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
            <h2 className={title}>Visit</h2>
            <ul className={list}>
              <li><a href={business.phoneLink}>{business.phone}</a></li>
              <li>
                <address>
                  {business.street}
                  <br />
                  {business.city}
                </address>
              </li>
              <li>Open 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-6">
          <span>© {year} K&amp;R Heating &amp; Cooling. All rights reserved.</span>
          <span>It's not a gamble.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
