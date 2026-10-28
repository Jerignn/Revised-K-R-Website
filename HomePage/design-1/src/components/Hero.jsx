import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { Eyebrow } from "./ui.jsx";
import { business, quickTiles } from "../data/content.js";
import heroImage from "../../../assets/img/hero.jpg";

// The "front page": a big headline and photo, with an index of services down the side
function Hero() {
  return (
    <section className="pt-[clamp(40px,6vw,72px)] pb-[clamp(24px,3vw,40px)]" id="top">
      <div className="wrap grid gap-[clamp(32px,4vw,56px)] lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <Eyebrow>Locally owned &amp; operated · Kerrville</Eyebrow>

          {/* The only h1 on the page (important for SEO) */}
          <h1 className="mt-[18px] mb-[26px] max-w-[12ch] animate-fade-up text-[clamp(52px,8.4vw,124px)] leading-[0.96] tracking-[-0.03em]">
            Your home comfort is <em>priority&nbsp;#1.</em>
          </h1>

          <p className="mb-8 max-w-[46ch] animate-fade-up font-serif text-[clamp(20px,1.8vw,24px)]/[1.5] text-ink-soft [animation-delay:0.12s]">
            Heating and cooling done right the first time. Repairs, new installations and maintenance for
            homes and businesses — backed by a true 30-day, 100% satisfaction guarantee.
          </p>

          <div className="flex animate-fade-up flex-wrap gap-3 [animation-delay:0.2s]">
            <Button href="#contact" size="lg">
              Schedule service <Icon name="arrow" />
            </Button>
            <Button href={business.phoneLink} size="lg" variant="ghost">
              <Icon name="phone" /> {business.phone}
            </Button>
          </div>

          <figure className="mt-[clamp(40px,5vw,60px)] animate-fade-up [animation-delay:0.3s]">
            <img className="aspect-[4/3] w-full object-cover sm:aspect-[2/1]" src={heroImage} alt="A comfortable living room kept cool by K&R" width="1200" height="700" />
            <figcaption className="mt-2.5 border-t border-hair pt-2.5 font-serif text-[17px]/[1.4] text-muted">
              A cool, quiet living room in Kerrville — the way it should feel all year.
            </figcaption>
          </figure>
        </div>

        <aside className="self-start border-t-2 border-ink pt-[18px] lg:sticky lg:top-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-[clamp(24px,3vw,36px)]" aria-label="In this issue">
          <h2 className="border-b-2 border-ink pb-3 text-[15px]/[1.4] font-semibold tracking-[0.06em] uppercase">In this issue</h2>
          <ol className="grid gap-x-6 sm:max-lg:grid-cols-2">
            {quickTiles.map((tile) => (
              <li className="border-b border-hair" key={tile.title}>
                <a className="group grid grid-cols-[36px_1fr] gap-2 py-[18px] text-[17px]/[1.45] text-ink-soft no-underline" href={tile.href}>
                  <span className="text-[15px]/[1.6] font-semibold text-rust-dk">{tile.number}</span>
                  <span>
                    <strong className="mb-1 block font-serif text-[26px]/[1.1] font-normal text-ink transition-colors group-hover:text-rust group-hover:italic">
                      {tile.title}
                    </strong>
                    {tile.text}
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-7 bg-night p-[22px] text-night-text">
            <Eyebrow light={true}>Emergency?</Eyebrow>
            <p className="mt-2 mb-1.5 text-[17px] text-night-muted">We answer 24 hours a day, 7 days a week.</p>
            <a className="font-serif text-[32px]/[1.1] text-white no-underline hover:text-peach" href={business.phoneLink}>
              {business.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
