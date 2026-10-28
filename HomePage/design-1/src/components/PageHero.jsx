import { Eyebrow } from "./ui.jsx";

// The banner at the top of every inner page (About, Promotions, a service...).
// It holds the page's only <h1>, which matters for SEO.
//
// crumbs: the links above the title, e.g. [{ label: "Our Services", href: "#/services" }]
// title + highlight: the highlight words are shown in rust italics after the title
function PageHero({ eyebrow, title, highlight, text, crumbs = [] }) {
  return (
    <section className="border-b-[3px] border-double border-ink pt-[clamp(48px,7vw,96px)] pb-[clamp(40px,5vw,64px)]">
      <div className="wrap">
        <nav className="mb-[26px] text-[15px]/none font-semibold tracking-[0.06em] text-muted uppercase [&_a]:no-underline [&_a:hover]:text-rust" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          {crumbs.map((crumb) => (
            <span key={crumb.href}>
              {" / "}
              <a href={crumb.href}>{crumb.label}</a>
            </span>
          ))}
        </nav>

        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 mb-5 max-w-[15ch] text-[clamp(48px,7vw,104px)] leading-[0.98] tracking-[-0.03em]">
          {title} {highlight && <em>{highlight}</em>}
        </h1>
        {text && <p className="max-w-[58ch] font-serif text-[22px]/[1.5] text-ink-soft">{text}</p>}
      </div>
    </section>
  );
}

export default PageHero;
