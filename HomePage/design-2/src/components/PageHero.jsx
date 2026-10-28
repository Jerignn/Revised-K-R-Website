import { Kicker, lede } from "./ui.jsx";

// The banner at the top of every inner page (About, Promotions, a service...).
// It holds the page's only <h1>, which matters for SEO.
//
// crumbs: the links above the title, e.g. [{ label: "Our Services", href: "#/services" }]
// title + highlight: the highlight words are shown in blue after the title
function PageHero({ kicker, title, highlight, text, crumbs = [] }) {
  return (
    <section className="border-b border-line bg-surface py-[clamp(56px,7vw,96px)]">
      <div className="wrap">
        <nav className="mb-[22px] text-sm text-soft [&_a]:no-underline [&_a:hover]:text-blue" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          {crumbs.map((crumb) => (
            <span key={crumb.href}>
              {" / "}
              <a href={crumb.href}>{crumb.label}</a>
            </span>
          ))}
        </nav>

        <Kicker>{kicker}</Kicker>
        <h1 className="mb-[18px] max-w-[18ch] text-[clamp(40px,5.6vw,68px)] tracking-[-0.035em]">
          {title} {highlight && <span className="text-blue">{highlight}</span>}
        </h1>
        {text && <p className={lede}>{text}</p>}
      </div>
    </section>
  );
}

export default PageHero;
