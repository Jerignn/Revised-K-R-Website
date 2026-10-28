import { useState } from 'react';
import { Icon } from '../shared/icons.jsx';
import { useNav, useScrolled, useTitle } from '../shared/hooks.jsx';
import { business, services, provides, maintenance, promotions, whyUs, badges, img, serviceLinks, aboutLinks } from '../shared/content.js';
import { useKit, L, Btn, Wrap, Section, Eyebrow, H2, Lead, ArrowLink, CheckList, ReviewsSection, Coupon, FaqSection, ContactSection, BadgeStrip } from '../shared/ui.jsx';

const cx = (...c) => c.filter(Boolean).join(' ');
const pad = 'py-[clamp(80px,10vw,140px)]';
const dark = '[--h:#fff] [--m:var(--color-mute)] [--line:var(--color-line)]';

// Tailwind class map consumed by the shared components.
const t = {
  wrap: 'mx-auto w-full max-w-[1416px] px-[clamp(18px,5vw,48px)]',
  section: {
    base: cx('bg-ink text-fog', dark, pad),
    alt: cx('bg-ink-2 text-fog', dark, pad),
    paper: cx('bg-cream text-[#1a1f23] [--h:#1a1f23] [--m:#4a5055] [--line:var(--color-sand)]', pad),
  },
  eyebrow: 'mb-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.16em] text-rust-2 before:h-0.5 before:w-6 before:bg-current',
  h2: 'mb-5 font-display text-[clamp(38px,5.4vw,72px)] font-extrabold uppercase leading-[.95] text-(--h)',
  accent: 'not-italic text-rust-2',
  h3: 'mb-4 font-display text-[clamp(26px,3vw,34px)] font-extrabold uppercase leading-none text-(--h)',
  lead: 'mb-4 max-w-[62ch] text-[clamp(16px,1.3vw,18px)] text-(--m)',
  leadXl: 'text-[clamp(22px,2.4vw,32px)] font-semibold leading-snug text-(--h)',
  body: 'mb-4 text-(--m)',
  linkArrow: 'inline-flex items-center gap-2.5 border-b-2 border-rust pb-1 font-bold text-(--h) transition-all duration-300 hover:gap-4 hover:text-rust-2',
  pageTitle: 'mb-6 font-display text-[clamp(48px,7.4vw,104px)] font-extrabold uppercase leading-[.9] text-white',
  splitHead: 'mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-8 [&_h2]:mb-0',
  btn: {
    base: 'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-transparent px-6 text-[15px] font-bold transition duration-300 active:scale-[.97]',
    primary: 'bg-rust text-white shadow-[0_10px_30px_-10px_rgba(200,71,42,.7)] hover:bg-rust-2',
    secondary: 'border-current/30 text-(--h) hover:border-current hover:bg-current/5',
    dark: 'bg-ink text-white hover:bg-black',
    sm: 'min-h-10 px-4 text-sm',
    lg: 'min-h-14 px-7 text-base',
  },
  check: {
    list: 'grid gap-3',
    cols2: 'gap-x-7 sm:grid-cols-2',
    item: 'flex items-start gap-3 font-medium',
    icon: 'mt-0.5 grid size-[22px] shrink-0 place-items-center rounded-full bg-rust/15 text-rust-2',
  },
  callout: {
    box: 'mt-4 flex items-start gap-4 rounded-2xl bg-ink p-6 text-[#e3e7ea] [&_a]:font-bold [&_a]:text-rust-2 [&_a]:underline',
    icon: 'grid size-12 shrink-0 place-items-center rounded-xl bg-rust text-white',
    text: '[&_p]:m-0',
  },
  stars: 'inline-flex gap-1 text-[#ffb547]',
  acc: {
    list: 'border-t border-(--line)',
    item: 'border-b border-(--line)',
    btn: 'grid w-full cursor-pointer grid-cols-[30px_minmax(0,1fr)_40px] items-center gap-3.5 py-6 text-left text-[clamp(17px,1.5vw,20px)] font-bold leading-snug text-(--h) sm:grid-cols-[44px_minmax(0,1fr)_40px]',
    num: 'text-[13px] font-bold tracking-widest text-rust-2',
    icon: 'grid size-10 place-items-center rounded-full border border-(--line) transition duration-300',
    iconOpen: 'rotate-45 border-rust! bg-rust text-white',
    panel: 'pb-6 text-(--m) sm:pr-14 sm:pl-[58px] [&_p]:mb-4',
    h4: 'mt-6 mb-3.5 font-display text-xl font-extrabold uppercase text-(--h)',
  },
  reviewsTone: 'alt',
  reviewsAccent: true,
  faqTone: 'base',
  contactTone: 'alt',
  review: {
    track: 'no-scrollbar grid snap-x snap-mandatory auto-cols-[86%] grid-flow-col gap-5 overflow-x-auto pb-1.5 sm:auto-cols-[minmax(300px,420px)]',
    card: 'relative m-0 flex snap-start flex-col gap-4 rounded-[20px] border border-line bg-ink-3 p-8',
    quote: 'absolute top-6 right-6 text-rust opacity-50',
    text: 'm-0 flex-1 text-[#e7eaec]',
    author: 'flex items-center gap-3 font-bold text-white',
    avatar: 'grid size-10 place-items-center rounded-full bg-rust font-display text-lg font-extrabold text-white',
    small: 'ml-auto text-xs font-medium text-mute',
    scoreText: 'my-3 text-mute',
  },
  roundBtn: 'grid size-13 cursor-pointer place-items-center rounded-full border border-line text-white transition hover:border-rust hover:bg-rust',
  coupon: {
    card: 'flex flex-col items-start rounded-[20px] border-2 border-dashed border-[#3a434a] bg-ink-3 px-7 pt-8 pb-7 transition duration-300 hover:-translate-y-1.5 hover:border-rust',
    cardLight: 'border-[#d7cfbf] bg-white',
    amt: 'mb-3.5 flex items-end gap-1.5 text-rust-2',
    amtLight: 'text-rust',
    big: 'font-display text-[76px] leading-[.8] font-extrabold',
    unit: 'font-display text-[22px] font-extrabold uppercase',
    small: 'self-start font-display text-[22px] font-extrabold uppercase opacity-60',
    title: 'mb-3 font-display text-[26px] leading-tight font-extrabold uppercase text-white',
    titleLight: 'text-[#1a1f23]',
    fine: 'mb-5 flex-1 text-[13px] text-(--m)',
  },
  info: {
    list: 'mt-8 grid gap-3.5',
    listCards: 'mt-0',
    item: 'flex items-start gap-4 rounded-2xl border border-line bg-ink-3 p-5',
    itemCard: 'border-sand bg-white',
    icon: 'grid size-11 shrink-0 place-items-center rounded-xl bg-rust text-white',
    small: 'block text-xs font-bold uppercase tracking-[.12em] text-(--m)',
    value: 'text-[17px] font-bold text-(--h) [&_a:hover]:text-rust-2',
  },
  map: 'mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-(--line)',
  sideCall: {
    box: 'flex items-center gap-3.5 rounded-[18px] bg-ink px-6 py-5 font-display text-[28px] font-extrabold leading-none text-white transition hover:bg-rust',
    icon: 'grid size-12 place-items-center rounded-full bg-rust',
    small: 'mb-1 block font-body text-[11px] font-bold uppercase tracking-[.12em] opacity-70',
  },
  cta: {
    section: 'relative overflow-hidden bg-rust py-[clamp(60px,8vw,100px)] text-white [--h:#fff] before:absolute before:-top-[60%] before:-right-[10%] before:size-[60vw] before:rounded-full before:bg-[radial-gradient(circle,rgba(255,255,255,.16),transparent_60%)]',
    box: 'relative flex flex-wrap items-center justify-between gap-8',
    eyebrow: 'mb-4 text-[13px] font-bold uppercase tracking-[.16em] opacity-85',
    title: 'mb-2.5 max-w-[18ch] font-display text-[clamp(38px,5vw,64px)] leading-[.95] font-extrabold uppercase',
    lead: 'm-0 font-semibold opacity-90',
    primary: 'dark',
    secondary: 'secondary',
  },
  fin: {
    section: 'border-t border-line bg-ink-3 [--h:#fff]',
    inner: 'flex flex-wrap items-center gap-5 py-7',
    icon: 'grid size-14 place-items-center rounded-full bg-rust text-white',
    title: 'font-display text-[26px] font-extrabold uppercase text-white',
    text: 'text-mute',
  },
  badges: {
    section: 'bg-cream py-9',
    label: 'm-0 w-full text-center font-display text-[22px] font-extrabold uppercase text-[#1a1f23] sm:w-auto',
    img: 'h-12 w-auto opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-16',
  },
  svcCard: {
    card: 'group relative grid gap-1.5 rounded-[18px] border border-line bg-ink-3 p-6 transition duration-300 hover:-translate-y-1 hover:border-rust',
    icon: 'mb-3.5 grid size-13 place-items-center rounded-2xl bg-rust/15 text-rust-2',
    title: 'font-display text-2xl leading-none font-extrabold uppercase text-white',
    text: 'text-sm text-mute',
    arrow: 'absolute top-6 right-6 size-5 text-mute transition group-hover:translate-x-1 group-hover:text-rust-2',
  },
  gallery: {
    item: 'group relative mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[18px]',
    overlay: 'absolute inset-0 grid place-items-center bg-ink/45 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100',
    plus: 'size-14 rounded-full bg-rust p-3.5 text-white',
    lightbox: 'fixed inset-0 z-[200] grid place-items-center bg-[#08090c]/95 px-3 py-20 sm:px-20',
    lbBtn: 'absolute grid size-13 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-rust',
  },
  form: {
    card: 'relative grid gap-4 rounded-[22px] bg-white p-[clamp(24px,3.4vw,38px)] text-[#1a1f23] shadow-[0_40px_80px_-40px_rgba(0,0,0,.55)]',
    title: 'mb-1.5 font-display text-[32px] leading-none font-extrabold uppercase',
    sub: 'm-0 text-[#5d6368]',
    label: 'text-[13px] font-bold',
    req: 'text-rust',
    hint: 'ml-1 font-medium text-[#5d6368]',
    input: 'w-full appearance-none rounded-xl border-[1.5px] border-[#e2ddd1] bg-[#f6f4ef] px-3.5 py-3 text-base font-medium text-[#1a1f23] transition focus:border-rust focus:bg-white focus:shadow-[0_0_0_4px_rgba(200,71,42,.14)] focus:outline-none',
    inputError: 'border-[#c62828]! bg-[#fff5f5]',
    select: 'select-chevron',
    fieldError: 'text-[13px] font-semibold text-[#c62828]',
    row: 'grid gap-4 sm:grid-cols-2',
    file: 'flex cursor-pointer items-center gap-3 rounded-xl border-[1.5px] border-dashed border-[#cfc7b6] bg-[#f6f4ef] p-4 font-semibold text-[#5d6368] transition hover:border-rust focus-within:outline-2 focus-within:outline-rust-2',
    fileActive: 'border-solid border-rust bg-white text-[#1a1f23]',
    fileIcon: 'size-5 text-rust',
    status: 'm-0 text-sm font-bold text-[#c62828]',
    note: 'm-0 text-center text-[13px] text-[#5d6368]',
    noteLink: 'font-bold text-rust',
    successIcon: 'mb-2 grid size-20 place-items-center rounded-full bg-rust text-white',
  },
  block: 'border-t border-(--line) py-9',
  figure: 'mb-10 overflow-hidden rounded-[22px]',
  miniCard: {
    card: 'rounded-2xl border border-[#e5ddcd] bg-white p-6',
    num: 'text-[13px] font-bold tracking-widest text-rust',
    title: 'my-2 font-display text-[24px] leading-tight font-extrabold uppercase text-[#1a1f23]',
    text: 'm-0 text-[15px] text-[#4a5055]',
  },
  pdf: {
    card: 'mb-5 flex flex-wrap items-center gap-4 rounded-[18px] border border-[#e5ddcd] bg-white p-6 sm:flex-nowrap',
    icon: 'grid size-12 shrink-0 place-items-center rounded-xl bg-rust/12 text-rust',
    sub: 'text-sm text-[#5d6368]',
  },
  inspection: {
    item: 'flex gap-3.5 border-b border-[#e2dacb] py-3 font-semibold',
    num: 'min-w-7 font-display text-lg text-rust',
  },
  stats: {
    section: 'border-y border-line bg-ink',
    item: 'grid gap-2 border-line px-5 py-12 text-center',
    divider: 'border-l',
    rowDivider: 'max-md:border-t',
    value: 'font-display text-[clamp(50px,6vw,80px)] leading-[.85] font-extrabold uppercase text-rust-2',
    label: 'font-semibold text-mute',
  },
  perk: {
    card: 'grid gap-3.5 rounded-2xl border border-[#e5ddcd] bg-white p-5 font-display text-[22px] leading-tight font-extrabold uppercase text-[#1a1f23]',
    icon: 'grid size-9 place-items-center rounded-full bg-rust text-white',
  },
};

// ---------- header / footer ----------
function DropItem({ k, label, links, nav }) {
  const current = links.some(([h]) => nav.pathname.startsWith(`/design-1/${h}`));
  const open = nav.dd === k;
  return (
    <li className="group relative max-lg:border-b max-lg:border-line" data-dd>
      <button
        onClick={() => nav.toggleDd(k)}
        aria-expanded={open}
        className={cx('flex w-full cursor-pointer items-center justify-between gap-1.5 rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition hover:bg-white/5 hover:text-white max-lg:rounded-none max-lg:px-1 max-lg:py-5 max-lg:font-display max-lg:text-[26px] max-lg:uppercase max-lg:hover:bg-transparent', current ? 'text-white lg:shadow-[inset_0_-2px_0_var(--color-rust)]' : 'text-fog')}
      >
        {label}
        <Icon name="chevron" className={cx('size-4 transition duration-300 lg:group-hover:rotate-180', open && 'rotate-180')} />
      </button>
      <div className={cx('lg:invisible lg:absolute lg:top-[calc(100%+10px)] lg:left-1/2 lg:min-w-72 lg:-translate-x-1/2 lg:translate-y-2 lg:rounded-2xl lg:border lg:border-line lg:bg-ink-2 lg:p-2 lg:opacity-0 lg:shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] lg:transition lg:duration-200 lg:before:absolute lg:before:inset-x-0 lg:before:-top-3 lg:before:h-3 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:opacity-100', open ? 'max-lg:block lg:visible lg:translate-y-0 lg:opacity-100' : 'max-lg:hidden')}>
        <ul className="max-lg:pb-3">
          {links.map(([h, text]) => (
            <li key={h}>
              <L to={h} className="group/i flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[15px] font-semibold text-fog transition hover:bg-white/5 hover:text-white max-lg:px-1 max-lg:text-mute">
                {text}<Icon name="arrow" className="size-4 -translate-x-1.5 text-rust-2 opacity-0 transition group-hover/i:translate-x-0 group-hover/i:opacity-100" />
              </L>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function Header() {
  const nav = useNav();
  const scrolled = useScrolled();
  const link = 'block rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition hover:bg-white/5 hover:text-white max-lg:rounded-none max-lg:px-1 max-lg:py-5 max-lg:font-display max-lg:text-[26px] max-lg:uppercase';
  return (
    <>
      <a href="#main" className="absolute -left-[9999px] top-2 z-[999] rounded-lg bg-rust px-4 py-2.5 text-white focus:left-2">Skip to content</a>
      <div className="border-b border-line bg-ink-4 text-[13px] text-mute">
        <Wrap className="flex min-h-10 items-center gap-2.5">
          <span className="size-2 shrink-0 animate-ping-soft rounded-full bg-[#3ddc84]" />
          <span className="max-sm:hidden"><strong className="text-white">24/7 emergency service</strong> · Locally owned &amp; operated</span>
          <span className="ml-auto flex gap-5 max-sm:ml-0 max-sm:w-full max-sm:justify-between">
            <a href={business.mapUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:text-white"><Icon name="pin" className="size-4" />{business.city}</a>
            <a href={business.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white"><Icon name="phone" className="size-4" />{business.phone}</a>
          </span>
        </Wrap>
      </div>
      <header className={cx('sticky top-0 z-50 border-b transition-colors before:absolute before:inset-0 before:-z-10 before:backdrop-blur-xl before:transition', scrolled ? 'border-line before:bg-ink/95' : 'border-transparent before:bg-ink/80', nav.menu && 'before:bg-ink')}>
        <Wrap className="flex h-[72px] items-center gap-7 sm:h-[84px]">
          <L to="" aria-label={`${business.name} home`}><img src={img('logo-white.png')} alt={business.name} width="145" height="85" className="h-11 w-auto sm:h-14" /></L>
          <nav aria-label="Primary" className={cx('ml-auto transition duration-500 ease-out-expo max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:top-[var(--nav-top)] max-lg:m-0 max-lg:overflow-y-auto max-lg:bg-ink max-lg:px-[clamp(18px,5vw,48px)] max-lg:pt-4 max-lg:pb-10', nav.menu ? 'max-lg:visible max-lg:translate-x-0' : 'max-lg:invisible max-lg:translate-x-full')}>
            <ul className="flex items-center gap-1 max-lg:flex-col max-lg:items-stretch max-lg:gap-0">
              <li className="max-lg:border-b max-lg:border-line"><L to="" className={cx(link, nav.pathname === '/design-1/' || nav.pathname === '/design-1' ? 'text-white lg:shadow-[inset_0_-2px_0_var(--color-rust)]' : 'text-fog')}>Home</L></li>
              <DropItem k="services" label="Our Services" links={serviceLinks} nav={nav} />
              <DropItem k="about" label="About Us" links={aboutLinks} nav={nav} />
              <li className="max-lg:border-b max-lg:border-line"><L to="contact" className={cx(link, nav.pathname.startsWith('/design-1/contact') ? 'text-white lg:shadow-[inset_0_-2px_0_var(--color-rust)]' : 'text-fog')}>Contact</L></li>
            </ul>
            <div className="mt-7 grid gap-3 lg:hidden [--h:#fff]">
              <Btn to="contact#book">Book Your Service <Icon name="arrow" /></Btn>
              <Btn to={business.phoneHref} variant="secondary"><Icon name="phone" /> {business.phone}</Btn>
            </div>
          </nav>
          <div className="flex items-center gap-4 max-lg:ml-auto">
            <a href={business.phoneHref} className="hidden flex-col font-display text-xl leading-tight font-extrabold tracking-wide text-white xl:flex">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[.14em] text-rust-2">Call 24/7</span>{business.phone}
            </a>
            <Btn to="contact#book" size="sm" className="max-lg:hidden">Book Service</Btn>
            <button
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-white lg:hidden"
              aria-label={nav.menu ? 'Close menu' : 'Open menu'}
              aria-expanded={nav.menu}
              onClick={(e) => {
                document.documentElement.style.setProperty('--nav-top', `${e.currentTarget.closest('header').getBoundingClientRect().bottom}px`);
                nav.setMenu(!nav.menu);
              }}
            >
              <Icon name={nav.menu ? 'close' : 'menu'} />
            </button>
          </div>
        </Wrap>
      </header>
    </>
  );
}

function Footer() {
  const fab = useScrolled(500);
  const col = 'grid gap-2.5 [&_a]:text-[15px] [&_a]:text-mute [&_a]:transition [&_a:hover]:text-white';
  const h3 = 'mb-4 font-display text-xl font-extrabold uppercase tracking-wide text-white';
  return (
    <>
      <footer className="border-t border-line bg-ink-4 pt-[clamp(70px,9vw,110px)] text-fog [--h:#fff]">
        <Wrap>
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-[clamp(50px,6vw,80px)]">
            <div>
              <p className={t.eyebrow}>Ready when you are</p>
              <h2 className="font-display text-[clamp(44px,6.4vw,92px)] leading-[.88] font-extrabold uppercase text-white">Your home comfort is<br />our <em className={t.accent}>#1 priority.</em></h2>
            </div>
            <div className="flex flex-wrap gap-3 max-sm:w-full max-sm:[&>*]:flex-1">
              <Btn to={business.phoneHref} size="lg"><Icon name="phone" /> {business.phone}</Btn>
              <Btn to="contact#book" variant="secondary" size="lg">Book online <Icon name="arrow" /></Btn>
            </div>
          </div>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <img src={img('logo-white.png')} alt={business.name} loading="lazy" className="mb-5 h-16 w-auto" />
              <p className="max-w-[36ch] text-[15px] text-mute">Superior heating and cooling services with an unmatched client experience — for homes and businesses across the Kerrville area.</p>
              <div className="mt-5 flex flex-wrap gap-2.5">{badges.slice(0, 3).map(([f, a]) => <img key={f} src={img(f)} alt={a} loading="lazy" className="h-10 w-auto rounded-lg bg-white px-1.5 py-1" />)}</div>
            </div>
            <div><h3 className={h3}>Services</h3><ul className={col}>{serviceLinks.map(([h, x]) => <li key={h}><L to={h}>{x}</L></li>)}</ul></div>
            <div><h3 className={h3}>Company</h3><ul className={col}>{aboutLinks.map(([h, x]) => <li key={h}><L to={h}>{x}</L></li>)}<li><L to="contact">Contact Us</L></li></ul></div>
            <div>
              <h3 className={h3}>Visit &amp; Call</h3>
              <ul className={cx(col, 'gap-3.5')}>
                <li className="flex gap-3 text-mute"><Icon name="pin" className="mt-1 size-5 text-rust-2" /><a href={business.mapUrl} target="_blank" rel="noopener">{business.address}<br />Kerrville, TX {business.zip}</a></li>
                <li className="flex gap-3 text-mute"><Icon name="phone" className="mt-1 size-5 text-rust-2" /><a href={business.phoneHref}>{business.phone}</a></li>
                <li className="flex gap-3 text-[15px] text-mute"><Icon name="clock" className="mt-1 size-5 text-rust-2" /><span>{business.hours}</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-6 pb-24 text-sm text-mute sm:pb-9">
            <span>Copyright © {new Date().getFullYear()} {business.name}. All Rights Reserved.</span>
            <L to="privacy-policy" className="hover:text-white">Privacy Policy</L>
          </div>
        </Wrap>
      </footer>
      <a href={business.phoneHref} aria-label={`Call ${business.phone}`} className={cx('fixed right-4 bottom-4 z-60 inline-flex h-14 items-center gap-2.5 rounded-full bg-rust pr-5 pl-2 font-extrabold text-white shadow-[0_16px_40px_-10px_rgba(200,71,42,.9)] transition duration-500 ease-out-expo md:hidden', fab ? 'translate-y-0' : 'translate-y-[120px]')}>
        <span className="grid size-10 place-items-center rounded-full bg-black/20"><Icon name="phone" /></span>Call now
      </a>
    </>
  );
}

function Layout({ children }) {
  return (
    <div className="bg-ink font-body text-base leading-relaxed text-fog">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

// ---------- page hero ----------
function PageHero({ eyebrow, title, accent, intro, image, crumbs }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-[clamp(70px,10vw,140px)] pb-[clamp(60px,8vw,110px)]">
      <div className="absolute inset-0 -z-20 animate-kenburns bg-cover bg-center" style={{ backgroundImage: `url(${img(image)})` }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,19,22,.96),rgba(15,19,22,.72)),linear-gradient(0deg,var(--color-ink),transparent_60%)]" />
      <Wrap>
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-sm text-mute">
          <L to="" className="hover:text-white">Home</L>
          {crumbs.map(([h, x]) => (
            <span key={x} className="flex gap-2"><span>/</span>{h ? <L to={h} className="hover:text-white">{x}</L> : <span aria-current="page" className="text-white">{x}</span>}</span>
          ))}
        </nav>
        {eyebrow && <p className="mb-4 animate-rise text-[13px] font-bold uppercase tracking-[.16em] text-rust-2">{eyebrow}</p>}
        <h1 className={cx(t.pageTitle, 'max-w-[16ch] animate-rise [animation-delay:100ms]')}>{title}{accent && <> <br /><em className={t.accent}>{accent}</em></>}</h1>
        {intro && <p className="m-0 max-w-[62ch] animate-rise text-[clamp(17px,1.4vw,20px)] text-[#c5ccd1] [animation-delay:200ms]">{intro}</p>}
      </Wrap>
    </section>
  );
}

// ---------- home ----------
function Marquee({ words }) {
  // Two identical copies so the -50% translate loops seamlessly.
  return (
    <div className="overflow-hidden border-y border-black/15 bg-rust py-4.5 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8.5">
        {[0, 1].flatMap((n) => words.flatMap((w) => [
          <span key={`${n}${w}`} className="whitespace-nowrap font-display text-[clamp(22px,2.6vw,32px)] leading-none font-extrabold uppercase tracking-wide">{w}</span>,
          <i key={`${n}${w}*`} className="text-[22px] not-italic opacity-55">✱</i>,
        ]))}
      </div>
    </div>
  );
}

function ServicesAccordion() {
  const [open, setOpen] = useState(0);
  const rows = [
    { slug: 'maintenance-plans', href: 'maintenance-plans', title: 'Maintenance Plans', tagline: 'Two tune-ups a year + member savings', image: 'parallax-img.jpg', items: maintenance.benefits.slice(0, 3) },
    ...services.map((s) => ({ ...s, href: `services/${s.slug}`, items: (s.blocks[0].items || s.blocks[0].cards.map((c) => c[0])).slice(0, 3) })),
  ];
  return (
    <div className="border-t border-line">
      {rows.map((s, i) => (
        <div key={s.slug} className="border-b border-line">
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="grid w-full cursor-pointer grid-cols-[34px_minmax(0,1fr)_40px] items-center gap-3 py-6.5 text-left transition-all duration-300 hover:pl-3 md:grid-cols-[70px_minmax(0,1fr)_minmax(0,1fr)_44px] md:gap-5">
            <span className="text-sm font-bold tracking-widest text-rust-2">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-display text-[clamp(26px,3.4vw,44px)] leading-none font-extrabold uppercase text-white">{s.title}</span>
            <span className="text-[15px] text-mute max-md:hidden">{s.tagline}</span>
            <span className={cx('grid size-10 place-items-center rounded-full border border-line transition duration-300 md:size-11', open === i && 'rotate-45 border-rust bg-rust text-white')}><Icon name="plus" className="size-5" /></span>
          </button>
          <div className={cx('collapse-grid', open === i && 'is-open')}>
            <div>
              <div className="grid items-center gap-5 pb-8 md:grid-cols-[70px_300px_minmax(0,1fr)]">
                <span className="max-md:hidden" />
                <img src={img(s.image)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <div className="grid justify-items-start gap-6"><CheckList items={s.items} /><Btn to={s.href} size="sm">Explore {s.title} <Icon name="arrow" className="size-4" /></Btn></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  useTitle('');
  const featured = services.filter((s) => s.featured);
  return (
    <>
      <section className="relative isolate overflow-hidden pt-[clamp(60px,9vw,120px)] [--h:#fff]">
        <div className="absolute inset-0 -z-20 animate-kenburns bg-cover bg-[center_60%]" style={{ backgroundImage: `url(${img('hero-banner-compressed.jpeg')})` }} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,19,22,.97)_0%,rgba(15,19,22,.82)_45%,rgba(15,19,22,.45)_100%),linear-gradient(0deg,var(--color-ink)_0%,transparent_40%)]" />
        <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[.07]" />
        <Wrap className="grid items-end gap-[clamp(30px,5vw,80px)] lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="mb-5 inline-flex animate-rise items-center gap-2 text-[13px] font-bold uppercase tracking-[.16em] text-rust-2"><Icon name="pin" className="size-4" /> Locally owned &amp; operated · Kerrville, TX</p>
            <h1 className="mb-6 animate-rise font-display text-[clamp(52px,8.6vw,124px)] leading-[.88] font-extrabold uppercase text-white [animation-delay:110ms]">Your home comfort is our <em className={t.accent}>#1 priority.</em></h1>
            <p className="mb-8 max-w-[56ch] animate-rise text-[clamp(17px,1.5vw,20px)] text-[#c5ccd1] [animation-delay:220ms]">Superior heating and cooling service for homes and businesses — installation, repair and maintenance on all makes &amp; models, 24 hours a day.</p>
            <div className="flex animate-rise flex-wrap gap-3.5 [animation-delay:330ms] max-sm:[&>*]:flex-[1_1_100%]">
              <Btn to="contact#book" size="lg">Schedule service <Icon name="arrow" /></Btn>
              <Btn to={business.phoneHref} variant="secondary" size="lg"><Icon name="phone" /> {business.phone}</Btn>
            </div>
            <ul className="mt-8 flex animate-rise flex-wrap gap-x-6 gap-y-2.5 text-sm font-semibold text-[#c5ccd1] [animation-delay:440ms]">
              {provides.map((p) => <li key={p} className="inline-flex items-center gap-2"><Icon name="check" className="size-4 text-rust-2" />{p}</li>)}
            </ul>
          </div>
          <L to="promotions" className="group relative flex max-w-md animate-rise flex-col gap-1.5 overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,var(--color-rust-2),var(--color-rust)_45%,var(--color-rust-3))] p-7 text-white shadow-[0_40px_80px_-30px_rgba(200,71,42,.8)] transition duration-500 [animation-delay:330ms] after:absolute after:inset-0 after:animate-shine after:bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,.25)_50%,transparent_70%)] hover:-translate-y-1.5 hover:-rotate-[.6deg]">
            <span className="text-xs font-bold uppercase tracking-[.14em] opacity-90">Take advantage of our offer</span>
            <span className="mt-2.5 mb-1 flex items-start font-display text-[128px] leading-[.8] font-extrabold">15<sup className="mt-1 text-[56px] leading-none">%</sup><small className="mb-2.5 ml-2 self-end text-4xl">OFF</small></span>
            <span className="font-display text-[26px] leading-none font-extrabold uppercase">Your preventive maintenance plan*</span>
            <span className="mt-4 flex items-center justify-between border-t border-white/25 pt-4 text-[13px]">* Conditions apply <span className="inline-flex items-center gap-2 border-b-2 border-white pb-0.5 text-sm font-bold">Learn more <Icon name="arrow" className="size-4" /></span></span>
          </L>
        </Wrap>
        <Wrap>
          <nav aria-label="Featured services" className="mt-[clamp(50px,7vw,90px)] grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {featured.map((s, i) => (
              <L key={s.slug} to={`services/${s.slug}`} className={cx('relative grid gap-1 py-6 pr-3 transition before:absolute before:-top-px before:left-0 before:h-0.5 before:w-0 before:bg-rust before:transition-all before:duration-500 hover:before:w-full sm:py-7 sm:pr-5', i % 2 && 'border-l border-line pl-4 sm:pl-5', i > 0 && 'lg:border-l lg:pl-5', i > 1 && 'max-lg:border-t max-lg:border-line')}>
                <span className="text-[13px] font-bold tracking-widest text-rust-2">0{i + 1}</span>
                <span className="mt-2 font-display text-[21px] leading-none font-extrabold uppercase text-white sm:text-[26px]">{s.short || s.title}</span>
                <span className="text-[13px] text-mute sm:text-sm">{s.tagline}</span>
              </L>
            ))}
          </nav>
        </Wrap>
      </section>

      <Marquee words={['24/7 Emergency Service', 'All Makes & Models', 'NATE-Certified Technicians', 'Free Estimates on New Installs', '30-Day Satisfaction Guarantee', 'Kerrville, TX']} />

      <section className={dark}>
        {featured.map((s, i) => (
          <article key={s.slug} className="grid border-b border-line md:min-h-[560px] md:grid-cols-[1.1fr_1fr]">
            <div className={cx('relative aspect-[16/10] overflow-hidden md:aspect-auto', i % 2 && 'md:order-2')}>
              <img src={img(s.image)} alt={s.title} loading="lazy" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,19,22,.6),transparent_50%)]" />
              <span className="text-outline absolute bottom-2.5 left-7 z-10 font-display text-[clamp(90px,12vw,170px)] leading-[.8] font-extrabold">0{i + 1}</span>
            </div>
            <div className="flex flex-col items-start justify-center bg-ink-2 px-[clamp(24px,6vw,100px)] py-[clamp(50px,7vw,110px)]">
              <Eyebrow><Icon name={s.icon} className="size-4" /> {s.title}</Eyebrow>
              <H2 className="text-[clamp(36px,4.2vw,58px)]!">{s.tagline}.</H2>
              <Lead>{s.intro[0]}</Lead>
              <ArrowLink to={`services/${s.slug}`} className="reveal">Learn more</ArrowLink>
            </div>
          </article>
        ))}
      </section>

      <Section id="services">
        <div className={t.splitHead}>
          <div><Eyebrow>Heating &amp; cooling services</Eyebrow><H2>Complete HVAC solutions for your home or business.</H2></div>
          <Lead className="m-0! max-w-[46ch]">From seasonal tune-ups to emergency repairs and full system installs — one dependable team for every system in your building.</Lead>
        </div>
        <ServicesAccordion />
      </Section>

      <section className="bg-cream text-[#1a1f23] [--h:#1a1f23] [--m:#5d6368]">
        <Wrap className="grid items-center gap-[clamp(40px,6vw,100px)] py-[clamp(70px,9vw,120px)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="reveal">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[.16em] text-rust">Preventative maintenance plan</p>
            <div className="mb-5 flex items-end gap-2.5 font-display text-[clamp(96px,13vw,170px)] leading-[.8] font-extrabold text-ink">
              <small className="mt-3 self-start font-body text-[15px] font-bold uppercase tracking-widest text-[#5d6368]">from</small>$180<span className="mb-3.5 text-[22px] uppercase text-[#5d6368]">/ year</span>
            </div>
            <p className="max-w-[40ch] text-lg text-[#5d6368]">Complete inspection &amp; tune-up of your HVAC equipment <strong className="text-[#1a1f23]">two times per year</strong>.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn to="contact?service=Maintenance%20Plan#book" variant="dark">Join today <Icon name="arrow" /></Btn>
              <Btn to={business.maintenancePdf} variant="secondary"><Icon name="download" /> Plan PDF</Btn>
            </div>
          </div>
          <div className="reveal rounded-[22px] bg-white p-[clamp(26px,4vw,44px)] font-semibold shadow-[0_30px_60px_-40px_rgba(0,0,0,.35)]"><CheckList items={maintenance.benefits} cols /></div>
        </Wrap>
        <Marquee words={['15% off every maintenance plan', 'Priority service', 'One emergency call per year', '20+ point inspection', '10% parts & labor discount']} />
      </section>

      <Section tone="alt">
        <div className="grid items-center gap-[clamp(40px,7vw,110px)] lg:grid-cols-2">
          <div className="reveal relative">
            <img src={img('about-us.jpg')} alt="K&R technician servicing an HVAC system" loading="lazy" className="aspect-[16/11] w-full rounded-[22px] object-cover lg:aspect-[4/5]" />
            <div className="absolute right-3.5 -bottom-8 grid size-36 animate-float place-content-center rounded-full bg-rust p-5 text-center text-white shadow-[0_20px_50px_-15px_rgba(200,71,42,.8)] lg:-right-5 lg:bottom-10 lg:size-44">
              <strong className="font-display text-[32px] leading-[.9] font-extrabold uppercase lg:text-[40px]">30-day</strong>
              <span className="mt-1.5 text-[11px] leading-tight font-bold uppercase tracking-wide">100% satisfaction guarantee</span>
            </div>
          </div>
          <div className="max-lg:mt-6">
            <Eyebrow>Why choose us</Eyebrow>
            <H2 accent="Every single day.">Trust is earned.</H2>
            {whyUs.map((p) => <Lead key={p}>{p}</Lead>)}
            <div className="mt-8 mb-9 grid gap-3 sm:grid-cols-2">
              {[['wrench', provides[0]], ['tag', provides[1]], ['clock', provides[2]], ['shield', provides[3]]].map(([i, x]) => (
                <div key={x} className="reveal flex items-center gap-3.5 rounded-2xl border border-line bg-ink-3 p-4.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-rust"><Icon name={i} className="size-6.5 text-rust-2" />{x}</div>
              ))}
            </div>
            <Btn to="contact#book">Contact us today <Icon name="arrow" /></Btn>
          </div>
        </div>
      </Section>

      <Section>
        <div className={t.splitHead}>
          <div><Eyebrow>Promotions</Eyebrow><H2 accent="easier on your wallet.">Comfort that’s</H2></div>
          <ArrowLink to="promotions" className="reveal">View all promotions</ArrowLink>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{promotions.slice(2, 5).map((p) => <Coupon key={p.title} p={p} />)}</div>
      </Section>

      <ReviewsSection />
      <BadgeStrip />
      <FaqSection />
      <ContactSection />
    </>
  );
}

export const design1 = { base: '/design-1', name: 'Dark & Bold', t, Layout, PageHero, Home };
