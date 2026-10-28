import { Link } from 'react-router-dom';
import { Icon } from '../shared/icons.jsx';
import { useTitle } from '../shared/hooks.jsx';
import { img } from '../shared/content.js';

// Miniature, non-interactive previews of each design's hero.
function PreviewDark() {
  return (
    <div className="relative isolate h-full overflow-hidden bg-ink p-6 font-body">
      <img src={img('hero-banner-compressed.jpeg')} alt="" className="absolute inset-0 -z-20 size-full object-cover transition duration-[1.6s] ease-out-expo group-hover:scale-110" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,19,22,.97),rgba(15,19,22,.55))]" />
      <div className="mb-8 flex items-center justify-between">
        <img src={img('logo-white.png')} alt="" className="h-8 w-auto" />
        <span className="rounded-full bg-rust px-3 py-1.5 text-[10px] font-bold text-white">Book Service</span>
      </div>
      <p className="mb-2 text-[9px] font-bold uppercase tracking-[.16em] text-rust-2">Locally owned · Kerrville, TX</p>
      <p className="max-w-[16ch] font-display text-[clamp(28px,3.4vw,40px)] leading-[.88] font-extrabold uppercase text-white">Your home comfort is our <span className="text-rust-2">#1 priority.</span></p>
      <div className="absolute right-6 bottom-6 rounded-xl bg-[linear-gradient(160deg,var(--color-rust-2),var(--color-rust-3))] px-4 py-3 text-white shadow-xl">
        <span className="font-display text-4xl leading-none font-extrabold">15%</span><span className="ml-1 font-display text-sm font-extrabold">OFF</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-rust" />
    </div>
  );
}

function PreviewLight() {
  return (
    <div className="relative h-full overflow-hidden bg-paper p-6 font-jakarta">
      <div className="mb-8 flex items-center justify-between">
        <img src={img('logo.png')} alt="" className="h-8 w-auto" />
        <span className="rounded-full bg-rust px-3 py-1.5 text-[10px] font-bold text-white">Book service</span>
      </div>
      <div className="text-center">
        <span className="mb-3 inline-flex rounded-full border border-hair bg-white px-2 py-1 text-[9px] font-semibold text-slate">Open now · 24/7</span>
        <p className="mx-auto mb-5 max-w-[18ch] text-[clamp(20px,2.4vw,30px)] leading-[1.04] font-extrabold tracking-[-.035em] text-char">What can we help you with <span className="text-rust">today?</span></p>
        <div className="grid grid-cols-4 gap-2 text-left transition duration-[1.6s] ease-out-expo group-hover:-translate-y-1">
          {[['wrench', 'Not working'], ['calendar', 'Tune-up'], ['tag', 'Replace'], ['building', 'Business']].map(([i, x]) => (
            <span key={x} className="grid gap-2 rounded-xl border border-hair bg-white p-2.5 text-[9px] font-bold text-char shadow-sm">
              <span className="grid size-6 place-items-center rounded-md bg-tint text-rust"><Icon name={i} className="size-3.5" /></span>{x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const designs = [
  {
    to: '/design-1/',
    num: '01',
    label: 'Bold · Cinematic · Dark',
    title: 'Dark & Bold',
    text: 'Confident and cinematic. A full-bleed hero, a scrolling ticker, split feature sections and a dark services accordion, all driven by K&R rust red.',
    tags: ['Deep charcoal', 'K&R rust red', 'Cinematic motion'],
    Preview: PreviewDark,
  },
  {
    to: '/design-2/',
    num: '02',
    label: 'Bright · Warm · Helpful',
    title: 'Light & Friendly',
    text: 'Built around the visitor’s problem. It opens with “What can we help you with today?”, then a system explorer, a plan-vs-no-plan comparison and guide-style service pages that each end in booking.',
    tags: ['Warm off-white', 'Help-first layout', 'Guide-style pages'],
    Preview: PreviewLight,
  },
];

export default function HomePage() {
  useTitle('Website Directions');
  return (
    <div className="min-h-screen bg-[#f2eee7] font-jakarta text-char">
      <a href="#designs" className="absolute -left-[9999px] top-2 rounded-lg bg-char px-4 py-2 text-white focus:left-2">Skip to content</a>
      <header className="mx-auto flex max-w-[1240px] items-center justify-between px-[clamp(18px,5vw,48px)] py-7">
        <img src={img('logo.png')} alt="K&R Heating & Cooling" className="h-11 w-auto" />
        <span className="text-xs font-semibold uppercase tracking-[.14em] text-dim">Website directions · 2026</span>
      </header>

      <main className="mx-auto max-w-[1240px] px-[clamp(18px,5vw,48px)] pb-20">
        <section className="py-[clamp(36px,6vw,80px)] text-center">
          <p className="mb-5 animate-rise text-sm font-bold uppercase tracking-[.16em] text-rust">A fresh perspective</p>
          <h1 className="mx-auto mb-6 max-w-[14ch] animate-rise text-[clamp(42px,6.4vw,84px)] leading-[1] font-extrabold tracking-[-.04em] [animation-delay:90ms]">
            Two fresh directions for <span className="text-rust">K&amp;R.</span>
          </h1>
          <p className="mx-auto max-w-[54ch] animate-rise text-[clamp(17px,1.5vw,20px)] text-dim [animation-delay:180ms]">
            The same dependable heating &amp; cooling care, expressed two ways. Explore each complete website and choose the direction that feels right.
          </p>
        </section>

        <section id="designs" className="grid gap-6 lg:grid-cols-2">
          {designs.map(({ to, num, label, title, text, tags, Preview }, i) => (
            <Link key={to} to={to} className="group flex animate-rise flex-col overflow-hidden rounded-[28px] border border-hair bg-white shadow-[0_2px_4px_rgba(29,34,39,.04),0_30px_60px_-30px_rgba(29,34,39,.25)] transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(29,34,39,.04),0_40px_80px_-30px_rgba(29,34,39,.35)]" style={{ animationDelay: `${270 + i * 120}ms` }}>
              <div className="aspect-[16/10] overflow-hidden border-b border-hair"><Preview /></div>
              <div className="flex flex-1 flex-col p-[clamp(24px,3vw,36px)]">
                <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[.14em] text-dim">
                  <span className="text-rust">Design {num}</span><span className="h-px w-6 bg-hair" />{label}
                </div>
                <h2 className="mb-3 text-[clamp(28px,3vw,36px)] font-extrabold tracking-[-.03em]">{title}</h2>
                <p className="mb-6 flex-1 text-dim">{text}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slate">{tag}</li>)}</ul>
                  <span className="inline-flex items-center gap-2 rounded-full bg-char px-5 py-3 text-sm font-bold text-white transition group-hover:bg-rust">
                    Explore Design {Number(num)} <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-16 grid gap-6 rounded-[28px] border border-hair bg-white/60 p-[clamp(24px,4vw,44px)] md:grid-cols-[1fr_1.4fr] md:items-center">
          <h2 className="text-[clamp(24px,2.6vw,32px)] leading-tight font-extrabold tracking-[-.03em]">Different first impressions. The same K&amp;R care.</h2>
          <p className="m-0 text-dim">
            Each direction is a complete, responsive website with all 16 pages, the 24/7 phone line, booking and careers forms, and the downloadable maintenance plan.
            Use the floating bar inside each design to switch designs or come back here.
          </p>
        </section>
      </main>

      <footer className="border-t border-hair py-8 text-center text-sm text-dim">
        Prepared for K&amp;R Heating &amp; Cooling · Kerrville, TX · Two website concepts
      </footer>
    </div>
  );
}
