import { useState } from 'react';
import { Icon } from '../shared/icons.jsx';
import { useNav, useScrolled, useTitle } from '../shared/hooks.jsx';
import { business, services, promotions, faqs, img, serviceLinks, aboutLinks } from '../shared/content.js';
import { L, Btn, Wrap, Section, Eyebrow, H2, Lead, ArrowLink, Stars, CheckList, Accordion, ContactForm } from '../shared/ui.jsx';
import { pages, JumpBtn, Steps, PlanCompare, SavingsList, ReviewsBlock } from './pages.jsx';

const cx = (...c) => c.filter(Boolean).join(' ');
const pad = 'py-[clamp(72px,9vw,120px)]';
const vars = '[--h:var(--color-char)] [--m:var(--color-dim)] [--line:var(--color-hair)]';
const shadow = 'shadow-[0_1px_2px_rgba(29,34,39,.04),0_12px_32px_-12px_rgba(29,34,39,.12)]';
const shadowLg = 'shadow-[0_2px_4px_rgba(29,34,39,.04),0_30px_60px_-24px_rgba(29,34,39,.22)]';
const shadowLgHover = 'hover:shadow-[0_2px_4px_rgba(29,34,39,.04),0_30px_60px_-24px_rgba(29,34,39,.22)]';
const shadowLgDesktop = 'lg:shadow-[0_2px_4px_rgba(29,34,39,.04),0_30px_60px_-24px_rgba(29,34,39,.22)]';
const tintIcon = 'grid place-items-center rounded-[14px] bg-tint text-rust';

// Tailwind class map consumed by the shared components.
const t = {
  wrap: 'mx-auto w-full max-w-[1328px] px-[clamp(18px,5vw,64px)]',
  section: {
    base: cx('bg-paper text-slate', vars, pad),
    alt: cx('border-y border-hair bg-white text-slate', vars, pad),
    paper: cx('bg-paper text-slate', vars, pad),
  },
  eyebrow: 'mb-3 inline-flex items-center gap-2 text-sm font-bold text-rust',
  h2: 'mb-4.5 text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-.02em] text-char',
  accent: 'not-italic text-rust',
  accentBreak: 'hidden',
  h3: 'mb-4 text-[clamp(21px,2.2vw,26px)] font-bold leading-tight tracking-[-.02em] text-char',
  lead: 'mb-4 max-w-[60ch] text-[clamp(16px,1.25vw,18px)] text-dim',
  leadXl: 'text-[clamp(21px,2vw,27px)] font-semibold leading-normal tracking-[-.01em] text-char',
  body: 'mb-4 text-slate',
  linkArrow: 'inline-flex items-center gap-2 font-bold text-rust transition-all hover:gap-3',
  pageTitle: 'mb-4.5 text-[clamp(38px,5vw,62px)] font-extrabold leading-[1.04] tracking-[-.035em] text-char',
  splitHead: 'mb-[clamp(36px,5vw,56px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6 [&_h2]:mb-0',
  btn: {
    base: 'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] border-transparent px-5.5 text-[15px] font-bold transition duration-200 active:scale-[.97]',
    primary: 'bg-rust text-white hover:bg-rust-dk hover:shadow-[0_10px_24px_-10px_rgba(200,71,42,.6)]',
    secondary: 'border-hair bg-white text-char hover:border-char',
    dark: 'bg-rust text-white hover:bg-rust-dk',
    sm: 'min-h-10 px-4 text-sm',
    lg: 'min-h-13.5 px-6.5 text-base',
  },
  check: {
    list: 'grid gap-3',
    cols2: 'gap-x-7 sm:grid-cols-2',
    item: 'flex items-start gap-3 font-medium text-char',
    icon: 'mt-0.5 grid size-[22px] shrink-0 place-items-center rounded-full bg-tint text-rust',
  },
  callout: {
    box: 'mt-3 flex items-start gap-4 rounded-[20px] bg-tint p-6 text-char [&_a]:font-bold [&_a]:text-rust-dk [&_a]:underline',
    icon: 'grid size-10 shrink-0 place-items-center rounded-xl bg-white text-rust',
    text: '[&_p]:m-0',
  },
  stars: 'inline-flex gap-0.5 text-[#f2a93b]',
  acc: {
    list: 'grid gap-2.5',
    item: cx('rounded-[14px] border border-hair bg-white transition'),
    itemOpen: shadow,
    btn: 'grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_32px] items-center gap-3.5 px-5.5 py-5 text-left text-[17px] font-bold leading-snug text-char',
    num: 'hidden',
    icon: 'grid size-8 place-items-center rounded-full bg-soft transition duration-300',
    iconOpen: 'rotate-45 bg-rust text-white',
    panel: 'px-5.5 pb-5.5 text-dim [&_p]:mb-4',
    h4: 'mt-5 mb-3 text-base font-bold text-char',
  },
  reviewsTone: 'base',
  reviewsAccent: false,
  faqTone: 'base',
  contactTone: 'alt',
  review: {
    track: 'no-scrollbar -m-1 grid snap-x snap-mandatory auto-cols-[86%] grid-flow-col gap-4 overflow-x-auto p-1 pb-6 sm:auto-cols-[minmax(300px,380px)]',
    card: cx('m-0 flex snap-start flex-col gap-4 rounded-[20px] border border-hair bg-white p-7', shadow),
    quote: 'hidden',
    text: 'm-0 flex-1 text-[15.5px] text-slate',
    author: 'flex items-center gap-3 font-bold text-char',
    avatar: 'grid size-9.5 place-items-center rounded-full bg-tint font-extrabold text-rust',
    small: 'ml-auto text-xs font-medium text-dim',
    scoreText: 'my-2 text-dim',
  },
  roundBtn: 'grid size-11.5 cursor-pointer place-items-center rounded-full border border-hair bg-white text-char transition hover:border-char',
  coupon: {
    card: 'flex flex-col items-start rounded-[20px] border-[1.5px] border-dashed border-[#ddd3c3] bg-paper px-6.5 py-7 transition duration-300 hover:-translate-y-1 hover:border-rust',
    cardLight: 'bg-white',
    amt: 'mb-2.5 flex items-baseline gap-1.5 text-rust',
    big: 'text-5xl leading-none font-extrabold tracking-[-.04em]',
    unit: 'text-[15px] font-bold',
    small: 'text-[15px] font-bold text-dim',
    title: 'mb-2 text-[19px] font-bold text-char',
    fine: 'mb-5 flex-1 text-[13px] text-dim',
  },
  info: {
    list: 'mt-7 grid gap-3',
    listCards: 'mt-0',
    item: 'flex items-center gap-3.5 rounded-[14px] border border-hair bg-paper px-4.5 py-4',
    itemCard: 'bg-white',
    icon: 'grid size-10.5 shrink-0 place-items-center rounded-xl bg-tint text-rust',
    small: 'block text-[13px] font-semibold text-dim',
    value: 'font-bold text-char [&_a:hover]:text-rust',
  },
  map: 'mt-4 aspect-[4/3] overflow-hidden rounded-[20px] border border-hair',
  sideCall: {
    box: 'flex items-center gap-3.5 rounded-[20px] border border-hair bg-white px-5 py-4.5 text-[22px] font-extrabold tracking-[-.02em] text-char transition hover:border-rust',
    icon: 'grid size-11 place-items-center rounded-full bg-rust text-white',
    small: 'block text-xs font-semibold tracking-normal text-dim',
  },
  cta: {
    section: 'bg-paper py-[clamp(56px,7vw,90px)] [--h:var(--color-char)]',
    box: 'flex flex-wrap items-center justify-between gap-7 rounded-[28px] bg-tint p-[clamp(28px,4vw,52px)]',
    eyebrow: 'mb-2 text-sm font-bold text-rust-dk',
    title: 'mb-2 max-w-[20ch] text-[clamp(26px,3vw,36px)] leading-tight font-bold tracking-[-.02em] text-char',
    lead: 'm-0 text-slate',
    primary: 'primary',
    secondary: 'secondary',
  },
  fin: {
    section: 'border-t border-hair bg-paper',
    inner: 'flex flex-wrap items-center gap-4.5 py-6.5',
    icon: 'grid size-12 place-items-center rounded-full bg-tint text-rust',
    title: 'text-lg font-bold text-char',
    text: 'text-dim',
  },
  badges: {
    section: 'border-y border-hair bg-white py-7',
    label: 'm-0 w-full text-center font-bold text-char sm:w-auto',
    img: 'h-10 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-13.5',
  },
  svcCard: {
    card: cx('group relative grid gap-1 rounded-[20px] border border-hair bg-paper p-5.5 transition duration-300 hover:-translate-y-0.5 hover:bg-white', shadowLgHover),
    icon: cx('mb-2.5 size-11', tintIcon),
    title: 'text-[17px] font-bold text-char',
    text: 'text-sm text-dim',
    arrow: 'absolute top-5.5 right-5.5 size-5 text-dim transition group-hover:translate-x-1 group-hover:text-rust',
  },
  gallery: {
    item: 'group relative mb-3.5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[20px]',
    overlay: 'absolute inset-0 grid place-items-center bg-char/25 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100',
    plus: 'size-12 rounded-full bg-white p-3 text-char',
    lightbox: 'fixed inset-0 z-[200] grid place-items-center bg-paper/95 px-3 py-20 backdrop-blur-sm sm:px-20',
    lbBtn: 'absolute grid size-12 cursor-pointer place-items-center rounded-full border border-hair bg-white text-char transition hover:border-char',
  },
  form: {
    card: cx('relative grid gap-3.5 rounded-3xl border border-hair bg-white p-[clamp(22px,3vw,34px)] text-char', shadowLg),
    title: 'mb-1 text-2xl font-bold tracking-[-.02em]',
    sub: 'm-0 text-dim',
    label: 'text-sm font-semibold text-char',
    req: 'text-rust',
    hint: 'ml-1 font-medium text-dim',
    input: 'w-full appearance-none rounded-xl border-[1.5px] border-hair bg-white px-3.5 py-3 text-base font-medium text-char transition focus:border-rust focus:shadow-[0_0_0_4px_rgba(200,71,42,.12)] focus:outline-none',
    inputError: 'border-[#c62828]! bg-[#fffafa]',
    select: 'select-chevron',
    fieldError: 'text-[13px] font-semibold text-[#c62828]',
    row: 'grid gap-3.5 sm:grid-cols-2',
    file: 'flex cursor-pointer items-center gap-3 rounded-xl border-[1.5px] border-dashed border-[#d8cfbf] bg-paper p-4 font-semibold text-dim transition hover:border-rust focus-within:outline-2 focus-within:outline-rust',
    fileActive: 'border-solid border-rust text-char',
    fileIcon: 'size-5 text-rust',
    status: 'm-0 text-sm font-semibold text-[#c62828]',
    note: 'm-0 text-center text-[13px] text-dim',
    noteLink: 'font-bold text-rust',
    successIcon: 'mb-1 grid size-18 place-items-center rounded-full bg-tint text-rust',
  },
  block: 'border-t border-hair py-8',
  figure: 'mb-9 overflow-hidden rounded-3xl',
  miniCard: {
    card: 'rounded-[14px] border border-hair bg-white p-5.5',
    num: 'text-[13px] font-bold text-rust',
    title: 'my-2 text-[17px] font-bold text-char',
    text: 'm-0 text-[15px] text-dim',
  },
  pdf: {
    card: 'mb-4.5 flex flex-wrap items-center gap-4 rounded-[20px] border border-hair bg-white p-5 sm:flex-nowrap',
    icon: cx('size-11.5 shrink-0', tintIcon),
    sub: 'text-sm text-dim',
  },
  inspection: {
    item: 'flex gap-3.5 border-b border-hair py-3 font-medium text-char',
    num: 'min-w-6 pt-0.5 text-[13px] font-bold text-rust',
  },
  stats: {
    section: 'border-y border-hair bg-white',
    item: 'grid gap-1 border-hair px-4.5 py-10 text-center',
    divider: 'border-l',
    rowDivider: 'max-md:border-t',
    value: 'text-[clamp(34px,4vw,48px)] leading-tight font-extrabold tracking-[-.03em] text-rust',
    label: 'text-[15px] font-medium text-dim',
  },
  perk: {
    card: 'grid gap-3 rounded-[14px] border border-hair bg-white p-5 font-bold text-char',
    icon: 'grid size-8 place-items-center rounded-full bg-tint text-rust',
  },
};

// ---------- header / footer ----------
const navLink = 'flex w-full cursor-pointer items-center justify-between gap-1.5 rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition hover:bg-soft hover:text-char max-lg:rounded-none max-lg:px-1 max-lg:py-4 max-lg:text-xl max-lg:font-bold max-lg:text-char max-lg:hover:bg-transparent';
const panelShow = 'lg:invisible lg:opacity-0 lg:transition lg:duration-200 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:opacity-100';

function DropItem({ k, label, links, nav }) {
  const current = links.some(([h]) => nav.pathname.startsWith(`/design-2/${h}`));
  const open = nav.dd === k;
  return (
    <li className="group relative max-lg:border-b max-lg:border-hair" data-dd>
      <button onClick={() => nav.toggleDd(k)} aria-expanded={open} className={cx(navLink, current ? 'text-rust' : 'text-slate')}>
        {label}
        <Icon name="chevron" className={cx('size-4 transition duration-300 lg:group-hover:rotate-180', open && 'rotate-180')} />
      </button>
      <div className={cx('lg:absolute lg:top-[calc(100%+8px)] lg:left-1/2 lg:min-w-60 lg:-translate-x-1/2 lg:rounded-[14px] lg:border lg:border-hair lg:bg-white lg:p-1.5 lg:before:absolute lg:before:inset-x-0 lg:before:-top-2.5 lg:before:h-2.5', panelShow, shadowLgDesktop, open ? 'max-lg:block lg:visible lg:opacity-100' : 'max-lg:hidden')}>
        <ul className="max-lg:pb-3">
          {links.map(([h, text]) => (
            <li key={h}>
              <L to={h} className="group/i flex items-center justify-between rounded-[10px] px-3 py-2.5 text-[15px] font-medium transition hover:bg-soft hover:text-char max-lg:px-1 max-lg:text-dim">
                {text}<Icon name="arrow" className="size-4 text-rust opacity-0 transition group-hover/i:opacity-100" />
              </L>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// Full-width services panel: every system with its tagline, plus the maintenance plan.
function MegaItem({ nav }) {
  const current = nav.pathname.startsWith('/design-2/services');
  const open = nav.dd === 'services';
  return (
    <li className="group max-lg:border-b max-lg:border-hair" data-dd>
      <button onClick={() => nav.toggleDd('services')} aria-expanded={open} className={cx(navLink, current ? 'text-rust' : 'text-slate')}>
        Services
        <Icon name="chevron" className={cx('size-4 transition duration-300 lg:group-hover:rotate-180', open && 'rotate-180')} />
      </button>
      <div className={cx('lg:absolute lg:inset-x-0 lg:top-full lg:border-y lg:border-hair lg:bg-white lg:before:absolute lg:before:inset-x-0 lg:before:-top-5 lg:before:h-5', panelShow, shadowLgDesktop, open ? 'max-lg:block lg:visible lg:opacity-100' : 'max-lg:hidden')}>
        <Wrap className="grid gap-x-6 gap-y-2 max-lg:px-0! max-lg:pb-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-7">
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <L to={`services/${s.slug}`} className="flex items-start gap-3 rounded-[14px] p-3 transition hover:bg-soft max-lg:px-1">
                  <span className={cx('size-10', tintIcon)}><Icon name={s.icon} className="size-5" /></span>
                  <span><strong className="block text-[15px] leading-snug text-char">{s.title}</strong><span className="text-[13px] leading-snug text-dim">{s.tagline}</span></span>
                </L>
              </li>
            ))}
          </ul>
          <L to="maintenance-plans" className="group/m flex flex-col rounded-[20px] bg-tint p-6">
            <span className="text-sm font-bold text-rust-dk">Save 15% on every plan</span>
            <strong className="my-2 flex-1 text-xl leading-tight tracking-[-.02em] text-char">Maintenance plans from $180/year</strong>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-rust">See the plan <Icon name="arrow" className="size-4 transition group-hover/m:translate-x-1" /></span>
          </L>
        </Wrap>
      </div>
    </li>
  );
}

function Header() {
  const nav = useNav();
  const scrolled = useScrolled();
  const at = (p) => (p ? nav.pathname.startsWith(`/design-2/${p}`) : nav.pathname === '/design-2/' || nav.pathname === '/design-2');
  const top = (p) => cx('block rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition hover:bg-soft hover:text-char max-lg:rounded-none max-lg:px-1 max-lg:py-4 max-lg:text-xl max-lg:font-bold max-lg:text-char max-lg:hover:bg-transparent', at(p) ? 'text-rust' : 'text-slate');
  return (
    <>
      <a href="#main" className="absolute -left-[9999px] top-2 z-[999] rounded-lg bg-char px-4 py-2.5 text-white focus:left-2">Skip to content</a>
      <div className="border-b border-hair text-[13px] text-dim">
        <Wrap className="flex min-h-9.5 items-center gap-2.5">
          <span className="size-2 shrink-0 animate-ping-soft rounded-full bg-[#2fb36d]" />
          <span className="max-sm:hidden"><strong className="font-semibold text-char">Open now</strong> · A real person answers 24/7</span>
          <span className="ml-auto flex gap-5 max-sm:ml-0 max-sm:w-full max-sm:justify-between">
            <a href={business.mapUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:text-char"><Icon name="pin" className="size-4" />{business.city}</a>
            <a href={business.phoneHref} className="inline-flex items-center gap-1.5 hover:text-char"><Icon name="phone" className="size-4" />{business.phone}</a>
          </span>
        </Wrap>
      </div>
      <header className={cx('sticky top-0 z-50 border-b transition-colors before:absolute before:inset-0 before:-z-10 before:bg-paper/90 before:backdrop-blur-md', scrolled ? 'border-hair' : 'border-transparent', nav.menu && 'before:bg-paper')}>
        <Wrap className="flex h-[68px] items-center gap-6 sm:h-[78px]">
          <L to="" aria-label={`${business.name} home`}><img src={img('logo.png')} alt={business.name} width="186" height="109" className="h-10.5 w-auto sm:h-12.5" /></L>
          <nav aria-label="Primary" className={cx('ml-auto transition duration-300 max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:top-[var(--nav-top)] max-lg:m-0 max-lg:overflow-y-auto max-lg:bg-paper max-lg:px-[clamp(18px,5vw,64px)] max-lg:pt-3 max-lg:pb-10', nav.menu ? 'max-lg:visible max-lg:translate-y-0 max-lg:opacity-100' : 'max-lg:invisible max-lg:-translate-y-2 max-lg:opacity-0')}>
            <ul className="flex items-center gap-0.5 max-lg:flex-col max-lg:items-stretch">
              <MegaItem nav={nav} />
              <li className="max-lg:border-b max-lg:border-hair"><L to="maintenance-plans" className={top('maintenance-plans')}>Maintenance</L></li>
              <li className="max-lg:border-b max-lg:border-hair"><L to="promotions" className={top('promotions')}>Savings</L></li>
              <DropItem k="about" label="About" links={aboutLinks.filter(([h]) => h !== 'promotions')} nav={nav} />
              <li className="max-lg:border-b max-lg:border-hair"><L to="contact" className={top('contact')}>Contact</L></li>
            </ul>
            <div className="mt-6 grid gap-2.5 lg:hidden">
              <Btn to="contact#book">Book a visit <Icon name="arrow" /></Btn>
              <Btn to={business.phoneHref} variant="secondary"><Icon name="phone" /> {business.phone}</Btn>
            </div>
          </nav>
          <div className="flex items-center gap-3.5 max-lg:ml-auto">
            <a href={business.phoneHref} className="hidden items-center gap-2.5 rounded-full border border-hair bg-white py-1.5 pr-4 pl-1.5 text-[15px] font-bold text-char transition hover:border-char xl:flex">
              <span className="grid size-8 place-items-center rounded-full bg-tint text-rust"><Icon name="phone" className="size-4" /></span>{business.phone}
            </a>
            <Btn to="contact#book" size="sm" className="max-lg:hidden">Book a visit</Btn>
            <button
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-hair bg-white text-char lg:hidden"
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
  const col = 'grid gap-2.5 [&_a]:text-[15px] [&_a]:text-dim [&_a]:transition [&_a:hover]:text-rust';
  const h3 = 'mb-4 text-[15px] font-bold text-char';
  return (
    <>
      <footer className="border-t border-hair bg-white pt-[clamp(56px,7vw,90px)] text-slate">
        <Wrap>
          <div className="flex flex-wrap items-end justify-between gap-7 border-b border-hair pb-[clamp(44px,5vw,64px)]">
            <div>
              <p className={t.eyebrow}>Heating or cooling trouble?</p>
              <h2 className="text-[clamp(32px,4.4vw,54px)] leading-[1.05] font-extrabold tracking-[-.035em] text-char">A real person picks up, <em className={t.accent}>24/7.</em></h2>
            </div>
            <div className="flex flex-wrap gap-2.5 max-sm:w-full max-sm:[&>*]:flex-1">
              <Btn to={business.phoneHref} size="lg"><Icon name="phone" /> {business.phone}</Btn>
              <Btn to="contact#book" variant="secondary" size="lg">Book online <Icon name="arrow" /></Btn>
            </div>
          </div>
          <div className="grid gap-9 py-13 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <img src={img('logo.png')} alt={business.name} loading="lazy" className="mb-4 h-14.5 w-auto" />
              <p className="max-w-[34ch] text-[15px] text-dim">Friendly, honest heating and cooling service for homes and businesses across the Kerrville area.</p>
              <div className="mt-4 flex flex-wrap gap-2.5">{badges3()}</div>
            </div>
            <div><h3 className={h3}>Services</h3><ul className={col}>{serviceLinks.map(([h, x]) => <li key={h}><L to={h}>{x}</L></li>)}</ul></div>
            <div><h3 className={h3}>Company</h3><ul className={col}>{aboutLinks.map(([h, x]) => <li key={h}><L to={h}>{x}</L></li>)}<li><L to="contact">Contact Us</L></li></ul></div>
            <div>
              <h3 className={h3}>Visit &amp; call</h3>
              <ul className={cx(col, 'gap-3.5')}>
                <li className="flex gap-3"><Icon name="pin" className="mt-1 size-4.5 text-rust" /><a href={business.mapUrl} target="_blank" rel="noopener">{business.address}<br />Kerrville, TX {business.zip}</a></li>
                <li className="flex gap-3"><Icon name="phone" className="mt-1 size-4.5 text-rust" /><a href={business.phoneHref}>{business.phone}</a></li>
                <li className="flex gap-3 text-[15px] text-dim"><Icon name="clock" className="mt-1 size-4.5 text-rust" /><span>{business.hours}</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3.5 border-t border-hair pt-5.5 pb-24 text-sm text-dim sm:pb-7.5">
            <span>Copyright © {new Date().getFullYear()} {business.name}. All Rights Reserved.</span>
            <L to="privacy-policy" className="hover:text-char">Privacy Policy</L>
          </div>
        </Wrap>
      </footer>
      <a href={business.phoneHref} aria-label={`Call ${business.phone}`} className={cx('fixed right-4 bottom-4 z-60 inline-flex h-13.5 items-center gap-2 rounded-full bg-rust pr-5 pl-2 font-bold text-white shadow-[0_14px_30px_-10px_rgba(200,71,42,.7)] transition duration-400 ease-out-expo md:hidden', fab ? 'translate-y-0' : 'translate-y-[120px]')}>
        <span className="grid size-9.5 place-items-center rounded-full bg-white/20"><Icon name="phone" className="size-4.5" /></span>Call now
      </a>
    </>
  );
}

const badges3 = () =>
  [['nate-1.png', 'NATE Certified'], ['ductless-preferred-pro-comp-270x103.png', 'Trane Ductless Preferred Pro'], ['tcs-new.png', 'Trane Comfort Specialist']].map(([f, a]) => (
    <img key={f} src={img(f)} alt={a} loading="lazy" className="h-9.5 w-auto opacity-70 grayscale" />
  ));

function Layout({ children }) {
  return (
    <div className="bg-paper font-jakarta text-base leading-[1.7] text-slate">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

// ---------- page header ----------
// Text-only header: breadcrumbs, title, intro, and optionally book/call buttons and fact chips.
// Images live in the page body in this design, so `image` is ignored.
function PageHero({ eyebrow, title, accent, intro, crumbs, icon, actions, bookLabel = 'Book a visit', chips }) {
  return (
    <section className="bg-paper pt-[clamp(36px,5vw,64px)] pb-[clamp(40px,5vw,64px)]">
      <Wrap>
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-dim">
          <L to="" className="hover:text-char">Home</L>
          {crumbs.map(([h, x]) => (
            <span key={x} className="flex gap-2"><span>/</span>{h ? <L to={h} className="hover:text-char">{x}</L> : <span aria-current="page" className="font-semibold text-char">{x}</span>}</span>
          ))}
        </nav>
        <div className="max-w-[860px]">
          {eyebrow && (
            <p className="mb-4 inline-flex animate-rise items-center gap-2.5 text-sm font-bold text-rust">
              {icon && <span className={cx('size-9 rounded-xl', tintIcon)}><Icon name={icon} className="size-5" /></span>}{eyebrow}
            </p>
          )}
          <h1 className={cx(t.pageTitle, 'animate-rise [animation-delay:80ms]')}>{title}{accent && <> <em className={t.accent}>{accent}</em></>}</h1>
          {intro && <p className="m-0 max-w-[62ch] animate-rise text-[clamp(16px,1.3vw,19px)] text-dim [animation-delay:160ms]">{intro}</p>}
          {actions && (
            <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:220ms] max-sm:[&>*]:flex-[1_1_100%]">
              <JumpBtn size="lg">{bookLabel} <Icon name="arrow" /></JumpBtn>
              <Btn to={business.phoneHref} variant="secondary" size="lg"><Icon name="phone" /> {business.phone}</Btn>
            </div>
          )}
        </div>
        {chips && (
          <ul className="mt-8 flex animate-rise flex-wrap gap-2 [animation-delay:280ms]">
            {chips.map((c) => <li key={c} className="inline-flex items-center gap-2 rounded-full border border-hair bg-white px-3.5 py-1.5 text-sm font-semibold text-slate"><Icon name="check" className="size-3.5 text-rust" strokeWidth={3} />{c}</li>)}
          </ul>
        )}
      </Wrap>
    </section>
  );
}

// ---------- home ----------
const ask = (message) => `contact?message=${encodeURIComponent(message)}#book`;
const helpOptions = [
  ['wrench', 'Something isn’t working', 'No heat, no cooling, strange noises or leaks.', ask('My heating or cooling system isn’t working.'), 'Request a repair'],
  ['calendar', 'Time for a tune-up', 'Two visits a year and member discounts with our plan.', 'maintenance-plans', 'See the plan'],
  ['tag', 'Replace or upgrade', 'Free estimates on new installs, with financing available.', ask('I’d like a free estimate on a new system.'), 'Get a free estimate'],
  ['building', 'Help for my business', 'Installs, repairs and maintenance for commercial buildings.', 'services/commercial-hvac-services', 'Commercial HVAC'],
];

// Pick a system on the left, see what we do for it on the right.
function SystemExplorer() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const items = (s.blocks.find((b) => b.items)?.items || []).slice(0, 4);
  return (
    <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
      <div className="no-scrollbar -mx-[clamp(18px,5vw,64px)] flex gap-2 overflow-x-auto px-[clamp(18px,5vw,64px)] lg:mx-0 lg:flex-col lg:px-0">
        {services.map((x, i) => (
          <button
            key={x.slug}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={cx('group flex shrink-0 cursor-pointer items-center gap-3 rounded-[16px] border px-4 py-3.5 text-left text-[15px] font-bold transition', i === active ? 'border-char bg-char text-white' : 'border-hair bg-white text-char hover:border-char')}
          >
            <Icon name={x.icon} className={cx('size-5', i === active ? 'text-rust-2' : 'text-rust')} />
            {x.short || x.title}
            <Icon name="arrow" className={cx('ml-auto size-4 transition max-lg:hidden', i === active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60')} />
          </button>
        ))}
      </div>
      <div key={s.slug} aria-live="polite" className={cx('grid animate-rise overflow-hidden rounded-[28px] border border-hair bg-white md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]', shadow)}>
        <img src={img(s.image)} alt={s.title} className="aspect-[16/10] size-full object-cover md:aspect-auto md:min-h-[440px]" />
        <div className="flex flex-col p-[clamp(24px,3vw,40px)]">
          <p className="mb-2 text-sm font-bold text-rust">{s.tagline}</p>
          <h3 className={t.h3}>{s.title}</h3>
          <p className="mb-6 line-clamp-4 text-[15px] text-dim">{s.intro[0]}</p>
          {items.length > 0 && <CheckList items={items} />}
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <Btn to={`services/${s.slug}`} size="sm">Read the guide <Icon name="arrow" className="size-4" /></Btn>
            <Btn to={`contact?service=${encodeURIComponent(s.title)}#book`} variant="secondary" size="sm">Book this service</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  useTitle('');
  return (
    <>
      <section id="help" className="pt-[clamp(44px,6vw,84px)] pb-[clamp(60px,8vw,104px)]">
        <Wrap>
          <div className="mx-auto max-w-[860px] text-center">
            <p className="mb-6 inline-flex animate-rise items-center gap-2.5 rounded-full border border-hair bg-white px-3.5 py-1.5 text-sm font-semibold text-slate">
              <span className="size-2 animate-ping-soft rounded-full bg-[#2fb36d]" />Open now · 24/7 in Kerrville, TX
            </p>
            <h1 className="mb-5.5 animate-rise text-[clamp(40px,6vw,76px)] leading-[1.03] font-extrabold tracking-[-.035em] text-char [animation-delay:90ms]">What can we help you with <em className={t.accent}>today?</em></h1>
            <p className="mx-auto max-w-[54ch] animate-rise text-[clamp(17px,1.4vw,20px)] text-dim [animation-delay:180ms]">Pick what fits and we’ll take it from there. Friendly, honest heating and cooling service for homes and businesses, on all makes &amp; models.</p>
          </div>
          <ul className="mt-[clamp(36px,5vw,56px)] grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {helpOptions.map(([icon, title, text, to, cta], i) => (
              <li key={title} className="animate-rise" style={{ animationDelay: `${240 + i * 80}ms` }}>
                <L to={to} className={cx('group flex h-full flex-col rounded-[24px] border border-hair bg-white p-4.5 transition duration-300 hover:-translate-y-1 hover:border-rust sm:p-6', shadowLgHover)}>
                  <span className={cx('mb-5 size-11 transition sm:mb-7 sm:size-13 group-hover:bg-rust group-hover:text-white', tintIcon)}><Icon name={icon} className="size-6" /></span>
                  <strong className="mb-1.5 text-base leading-snug tracking-[-.01em] text-char sm:text-lg">{title}</strong>
                  <span className="mb-5 flex-1 text-sm leading-normal text-dim sm:mb-6 sm:text-[15px]">{text}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-rust">{cta} <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" /></span>
                </L>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex animate-rise flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[22px] bg-soft px-6 py-4.5 text-sm [animation-delay:560ms]">
            <a href={business.phoneHref} className="inline-flex items-center gap-2.5 font-bold text-char hover:text-rust">
              <span className="grid size-9 place-items-center rounded-full bg-rust text-white"><Icon name="phone" className="size-4.5" /></span>Rather talk? Call {business.phone}
            </a>
            <span className="inline-flex items-center gap-2 font-semibold text-slate"><Stars className="h-3.5" /> Loved on Google</span>
            <span className="inline-flex items-center gap-2 font-semibold text-slate"><Icon name="shield" className="size-4 text-rust" /> 30-day satisfaction guarantee</span>
            <span className="inline-flex items-center gap-2 font-semibold text-slate"><Icon name="check" className="size-4 text-rust" strokeWidth={2.6} /> NATE-certified technicians</span>
          </div>
        </Wrap>
      </section>

      <Section tone="alt">
        <div className="mx-auto mb-[clamp(36px,5vw,56px)] max-w-[640px] text-center">
          <Eyebrow>How a visit works</Eyebrow>
          <H2>Simple from the very first call.</H2>
        </div>
        <Steps />
      </Section>

      <Section id="services">
        <div className={t.splitHead}>
          <div><Eyebrow>Find your system</Eyebrow><H2>What are you working with?</H2></div>
          <Lead className="m-0! max-w-[44ch]">Choose a system to see what we do for it, then read the full guide or book a visit.</Lead>
        </div>
        <SystemExplorer />
      </Section>

      <Section tone="alt">
        <div className="grid items-start gap-[clamp(36px,5vw,70px)] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Maintenance plan</Eyebrow>
            <H2>Is the plan worth it? Here’s the difference.</H2>
            <Lead>Two complete tune-ups a year, plus discounts and priority service whenever you need us.</Lead>
            <div className="reveal mt-2 mb-7 flex flex-wrap items-baseline gap-2.5">
              <small className="text-[15px] font-semibold text-dim">From</small>
              <strong className="text-[clamp(52px,6vw,68px)] leading-none font-extrabold tracking-[-.04em] text-char">$180</strong>
              <span className="font-semibold text-dim">/ year · 2 visits</span>
              <span className="ml-1 rounded-full bg-tint px-3 py-1 text-sm font-semibold text-rust-dk">Save 15% now</span>
            </div>
            <div className="reveal flex flex-wrap gap-3">
              <Btn to="contact?service=Maintenance%20Plan#book">Join the plan <Icon name="arrow" /></Btn>
              <Btn to="maintenance-plans" variant="secondary">See the 20+ point checklist</Btn>
            </div>
          </div>
          <PlanCompare />
        </div>
      </Section>

      <ReviewsBlock tone="base" />

      <Section tone="alt">
        <div className="grid items-start gap-[clamp(36px,5vw,70px)] lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)]">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Current savings</Eyebrow>
            <H2>Comfort that’s easier on your wallet.</H2>
            <Lead>Offers on maintenance, tune-ups and new system installs.</Lead>
            <ArrowLink to="promotions" className="reveal">View all promotions</ArrowLink>
          </div>
          <SavingsList items={promotions.slice(0, 4)} />
        </div>
      </Section>

      <Section id="contact">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <H2>Good questions, straight answers.</H2>
            <div className="mt-8"><Accordion items={faqs.map(([q, a]) => ({ title: q, content: <p>{a}</p> }))} /></div>
          </div>
          <div className="reveal lg:sticky lg:top-28"><ContactForm title="Still need help?" sub="Send a request and a member of the K&R team will contact you shortly." source="Home page" /></div>
        </div>
      </Section>
    </>
  );
}

export const design2 = { base: '/design-2', name: 'Light & Friendly', t, Layout, PageHero, Home, pages };
