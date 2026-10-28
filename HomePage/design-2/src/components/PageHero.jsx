// The banner at the top of every inner page (About, Promotions, a service...).
// It holds the page's only <h1>, which matters for SEO.
//
// crumbs: the links above the title, e.g. [{ label: "Our Services", href: "#/services" }]
// title + highlight: the highlight words are shown in rust after the title
function PageHero({ kicker, title, highlight, text, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          {crumbs.map((crumb) => (
            <span key={crumb.href}>
              {" / "}
              <a href={crumb.href}>{crumb.label}</a>
            </span>
          ))}
        </nav>

        <span className="kicker">{kicker}</span>
        <h1>
          {title} {highlight && <span className="hl">{highlight}</span>}
        </h1>
        {text && <p className="lede">{text}</p>}
      </div>
    </section>
  );
}

export default PageHero;
