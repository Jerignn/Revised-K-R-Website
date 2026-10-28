import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '../shared/icons.jsx';
import { useTitle } from '../shared/hooks.jsx';
import { business, services, maintenance, financing, careers, gallery, promotions, reviews, promoMessage, provides, whyUs, img } from '../shared/content.js';
import { useKit, L, Btn, Wrap, Section, Eyebrow, H2, Lead, ArrowLink, Stars, CheckList, ContactForm, CareersForm, ContactInfo, SidebarCall, BadgeStrip, Gallery } from '../shared/ui.jsx';
import { NotFound } from '../shared/pages.jsx';

// Design 2's own page structure: guide-style pages that always end in a booking section.

const cx = (...c) => c.filter(Boolean).join(' ');
const shadow = 'shadow-[0_1px_2px_rgba(29,34,39,.04),0_12px_32px_-12px_rgba(29,34,39,.12)]';
const vars = '[--h:var(--color-char)] [--m:var(--color-dim)] [--line:var(--color-hair)]';
const tintIcon = 'grid place-items-center rounded-[14px] bg-tint text-rust';

// In-page jump link styled as a button (Btn/L would prefix the design's base path).
export function JumpBtn({ to = '#booking', variant = 'primary', size, className, children }) {
  const { t } = useKit();
  return <a href={to} className={cx(t.btn.base, t.btn[variant], size && t.btn[size], className)}>{children}</a>;
}

// ---------- building blocks ----------
export const visitSteps = [
  ['Reach out, any hour', `Call ${business.phone} or book online. Our line is open 24 hours a day, 7 days a week.`],
  ['Get honest options', 'Our technicians don’t earn commissions, so you only hear about what your system actually needs.'],
  ['Comfort, guaranteed', 'All makes & models, and every job is backed by a true 30-day 100% satisfaction guarantee.'],
];

export function Steps({ items = visitSteps }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map(([title, text], i) => (
        <li key={title} className="reveal relative rounded-[24px] border border-hair bg-white p-7 md:after:absolute md:after:top-12 md:after:-right-4 md:after:h-px md:after:w-4 md:after:bg-hair md:last:after:hidden">
          <span className="mb-5 grid size-11 place-items-center rounded-full bg-char text-[15px] font-extrabold text-white">{i + 1}</span>
          <strong className="mb-2 block text-lg tracking-[-.01em] text-char">{title}</strong>
          <p className="m-0 text-[15px] text-dim">{text}</p>
        </li>
      ))}
    </ol>
  );
}

const planRows = [
  ['Two tune-ups a year with a 20+ point inspection', true, false],
  ['10% parts & labor discount', true, false],
  ['Discounts on new equipment', true, false],
  ['Priority service', true, false],
  ['One emergency service call per year', true, false],
  ['One 1″ filter per maintenance check', true, false],
  ['24/7 emergency service', true, true],
  ['30-day 100% satisfaction guarantee', true, true],
];

const Mark = ({ on }) =>
  on
    ? <span className="grid size-7 place-items-center rounded-full bg-rust text-white"><Icon name="check" className="size-4" strokeWidth={3} /><span className="sr-only">Included</span></span>
    : <span className="font-bold text-dim"><span aria-hidden="true">—</span><span className="sr-only">Not included</span></span>;

export function PlanCompare() {
  const row = 'grid grid-cols-[minmax(0,1fr)_84px_84px] sm:grid-cols-[minmax(0,1fr)_140px_140px]';
  return (
    <div className={cx('reveal overflow-hidden rounded-[28px] border border-hair bg-white', shadow)}>
      <div className={cx(row, 'items-stretch border-b border-hair')}>
        <span className="self-end p-5 text-sm font-semibold text-dim sm:px-6">What you get</span>
        <span className="bg-tint px-2 py-5 text-center sm:px-4"><strong className="block text-sm leading-tight text-rust-dk sm:text-base">Plan member</strong><span className="text-xs whitespace-nowrap text-dim sm:text-sm">from $180/yr</span></span>
        <span className="px-2 py-5 text-center sm:px-4"><strong className="block text-sm leading-tight text-char sm:text-base">No plan</strong><span className="text-xs whitespace-nowrap text-dim sm:text-sm">pay per visit</span></span>
      </div>
      {planRows.map(([label, member, none]) => (
        <div key={label} className={cx(row, 'border-b border-hair last:border-0')}>
          <span className="px-5 py-4 text-[15px] leading-snug font-semibold text-char sm:px-6">{label}</span>
          <span className="grid place-items-center bg-tint/50"><Mark on={member} /></span>
          <span className="grid place-items-center"><Mark on={none} /></span>
        </div>
      ))}
    </div>
  );
}

export function SavingsList({ items = promotions }) {
  return (
    <ul className="grid gap-3">
      {items.map((p) => (
        <li key={p.title} className="reveal grid items-center gap-4 rounded-[22px] border border-hair bg-white p-4 sm:grid-cols-[150px_minmax(0,1fr)_auto] sm:gap-6 sm:pr-6">
          <div className="flex items-baseline gap-1.5 rounded-[16px] bg-tint px-4 py-5 text-rust sm:justify-center">
            {p.prefix && <small className="text-sm font-bold text-dim">{p.prefix}</small>}
            <strong className="text-4xl leading-none font-extrabold tracking-[-.04em]">{p.amount}</strong>
            {p.unit && <span className="text-sm font-bold">{p.unit}</span>}
          </div>
          <div>
            <strong className="block text-lg leading-snug text-char">{p.title}</strong>
            <span className="text-sm text-dim">Offer subject to restrictions. Expires {p.expires}.{p.note ? ` ${p.note}` : ''}</span>
          </div>
          <Btn to={`contact?message=${encodeURIComponent(promoMessage(p))}#book`} size="sm" className="justify-self-start">Claim offer <Icon name="arrow" className="size-4" /></Btn>
        </li>
      ))}
    </ul>
  );
}

export function ReviewWall() {
  const [first, ...rest] = reviews;
  return (
    <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
      <figure className="reveal m-0 flex flex-col gap-8 rounded-[28px] bg-char p-[clamp(28px,3.5vw,44px)] text-white lg:sticky lg:top-28">
        <Icon name="quote" className="size-10 text-rust-2" />
        <blockquote className="m-0 text-[clamp(19px,1.7vw,23px)] leading-snug font-semibold tracking-[-.01em]">“{first.text}”</blockquote>
        <figcaption className="flex items-center gap-3 font-bold">
          <span className="grid size-10 place-items-center rounded-full bg-white/10">{first.name[0]}</span>
          {first.name}
          <Stars className="ml-auto h-4" />
        </figcaption>
      </figure>
      <div className="columns-1 gap-4 sm:columns-2">
        {rest.map((r) => (
          <figure key={r.name} className="reveal m-0 mb-4 break-inside-avoid rounded-[22px] border border-hair bg-white p-6">
            <Stars className="h-3.5" />
            <blockquote className="my-3 text-[15px] text-slate">{r.text}</blockquote>
            <figcaption className="text-sm font-bold text-char">{r.name} <span className="font-medium text-dim">· Google review</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function ReviewsBlock({ tone = 'alt' }) {
  const { t } = useKit();
  return (
    <Section tone={tone} id="customer-reviews">
      <div className={t.splitHead}>
        <div><Eyebrow>Real reviews from real customers</Eyebrow><H2>What our customers have to say.</H2></div>
        <ArrowLink to={business.reviewsUrl} className="reveal">See all of our Google reviews</ArrowLink>
      </div>
      <ReviewWall />
    </Section>
  );
}

const nextSteps = [
  ['Send your request', 'Tell us what’s going on and what works for you.'],
  ['We get back to you', 'A member of the K&R team will contact you shortly.'],
  ['A certified tech takes care of it', 'All makes & models, backed by our 30-day guarantee.'],
];

// Every Design 2 page ends here: what happens next, the phone line, and the booking form.
export function BookingSection({ eyebrow = 'Ready when you are', title = 'Book a visit', source = '', service = '', tone = 'alt' }) {
  return (
    <Section tone={tone} id="booking">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{title}</H2>
          <Lead>Send a request below, or call and talk to a person right away. We answer 24/7.</Lead>
          <ol className="mt-8 grid gap-5">
            {nextSteps.map(([h, d], i) => (
              <li key={h} className="reveal flex gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border-[1.5px] border-rust text-sm font-extrabold text-rust">{i + 1}</span>
                <div><strong className="block text-char">{h}</strong><span className="text-[15px] text-dim">{d}</span></div>
              </li>
            ))}
          </ol>
          <div className="reveal mt-9"><SidebarCall /></div>
        </div>
        <div className="reveal"><ContactForm title="Request a visit" sub="We’ll be in touch shortly to confirm the details." source={source} service={service} /></div>
      </div>
    </Section>
  );
}

// Content area under a page header, on the paper background.
function Body({ className, children }) {
  return <section className={cx('bg-paper pb-[clamp(72px,9vw,120px)] text-slate', vars)}><Wrap className={className}>{children}</Wrap></section>;
}

// ---------- service guide ----------
function GuideBlock({ b, n }) {
  const { t } = useKit();
  return (
    <section id={b.id} className="reveal border-t border-hair py-9">
      <p className="mb-2 text-sm font-bold text-rust">{String(n).padStart(2, '0')}</p>
      <h2 className={t.h3}>{b.heading}</h2>
      {(b.text || []).map((p) => <p key={p} className={t.body}>{p}</p>)}
      {b.items && <CheckList items={b.items} cols={b.items.length > 4} />}
      {b.cards && (
        <div className="grid gap-3.5 md:grid-cols-3">
          {b.cards.map(([title, d]) => (
            <div key={title} className={t.miniCard.card}><h3 className={cx(t.miniCard.title, 'mt-0')}>{title}</h3><p className={t.miniCard.text}>{d}</p></div>
          ))}
        </div>
      )}
    </section>
  );
}

function OtherSystems({ exclude }) {
  return (
    <section className="border-t border-hair bg-paper py-12">
      <Wrap className="flex flex-wrap items-center gap-2.5">
        <strong className="mr-2 text-char">Other systems we work on:</strong>
        {services.filter((x) => x.slug !== exclude).map((x) => (
          <L key={x.slug} to={`services/${x.slug}`} className="inline-flex items-center gap-2 rounded-full border border-hair bg-white px-4 py-2 text-sm font-semibold text-char transition hover:border-rust hover:text-rust">
            <Icon name={x.icon} className="size-4 text-rust" />{x.short || x.title}
          </L>
        ))}
      </Wrap>
    </section>
  );
}

export function ServicePage() {
  const { slug } = useParams();
  const { PageHero, t } = useKit();
  const s = services.find((x) => x.slug === slug);
  useTitle(s?.title || 'Page Not Found');
  if (!s) return <NotFound />;
  const parts = s.blocks.map((b, i) => ({ ...b, id: `part-${i + 1}` }));
  return (
    <>
      <PageHero icon={s.icon} eyebrow="Service guide" title={s.title} intro={s.intro[0]} crumbs={[['#services', 'Services'], [null, s.title]]} actions chips={provides} />
      <Body className="grid items-start gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 max-lg:hidden">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-dim">On this page</p>
          <ul className="grid border-l border-hair">
            {[...parts.map((b) => [b.id, b.heading]), ['booking', 'Book a visit']].map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="-ml-px block border-l-2 border-transparent py-2 pl-4 text-[15px] leading-snug font-medium text-dim transition hover:border-rust hover:text-char">{label}</a></li>
            ))}
          </ul>
          <a href={business.phoneHref} className="mt-8 block rounded-[20px] bg-tint p-5 transition hover:bg-[#f8dfd6]">
            <span className="block text-sm font-semibold text-rust-dk">Need it fixed now?</span>
            <strong className="text-xl tracking-[-.02em] text-char">{business.phone}</strong>
          </a>
        </nav>
        <article className="max-w-[780px]">
          <img src={img(s.image)} alt={s.title} className="reveal mb-10 aspect-[16/9] w-full rounded-[28px] object-cover" />
          {s.intro.slice(1).map((p) => <p key={p} className={cx(t.lead, 'reveal')}>{p}</p>)}
          {parts.map((b, i) => <GuideBlock key={b.id} b={b} n={i + 1} />)}
          {s.closing && <blockquote className="reveal mt-4 rounded-[24px] border-l-4 border-rust bg-white p-7 text-[17px] font-medium text-char">{s.closing}</blockquote>}
        </article>
      </Body>
      <BookingSection eyebrow={s.title} source={s.title} service={s.title} />
      <OtherSystems exclude={s.slug} />
    </>
  );
}

// ---------- maintenance ----------
export function MaintenancePage() {
  const { PageHero, t } = useKit();
  useTitle('Maintenance Plans');
  return (
    <>
      <PageHero icon="calendar" eyebrow="Maintenance plan" title="Two tune-ups a year," accent="handled." intro={maintenance.intro} crumbs={[['#services', 'Services'], [null, 'Maintenance Plans']]} actions bookLabel="Join the plan" />
      <Body className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <PlanCompare />
        <aside className={cx('reveal grid gap-5 rounded-[28px] border border-hair bg-white p-[clamp(24px,3vw,36px)] lg:sticky lg:top-28', shadow)}>
          <span className="inline-flex justify-self-start rounded-full bg-tint px-3.5 py-1.5 text-sm font-semibold text-rust-dk">Save 15% on every plan right now</span>
          <div className="flex flex-wrap items-baseline gap-2.5">
            <small className="text-[15px] font-semibold text-dim">From</small>
            <strong className="text-[clamp(56px,6vw,72px)] leading-none font-extrabold tracking-[-.04em] text-char">$180</strong>
            <span className="font-semibold text-dim">/ year · 2 visits</span>
          </div>
          <p className="m-0 text-dim">A complete inspection and tune-up of your HVAC equipment, twice a year, plus member discounts.</p>
          <div className="grid gap-2.5">
            <JumpBtn>Join the plan <Icon name="arrow" /></JumpBtn>
            <Btn to={business.maintenancePdf} variant="secondary"><Icon name="download" /> Plan details (PDF)</Btn>
          </div>
        </aside>
      </Body>
      <Section tone="alt">
        <div className="mb-10 max-w-[640px]"><Eyebrow>Every visit</Eyebrow><H2>A 20+ point inspection, each time.</H2></div>
        <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {maintenance.checklist.map((c, i) => (
            <li key={c} className={t.inspection.item}><span className={t.inspection.num}>{String(i + 1).padStart(2, '0')}</span>{c}</li>
          ))}
        </ol>
      </Section>
      <BookingSection eyebrow="Maintenance plan" title="Join the plan" source="Maintenance Plans" service="Maintenance Plan" tone="base" />
    </>
  );
}

// ---------- about ----------
const promises = [
  ['tag', 'No commissions, ever', 'Our technicians are not salespeople, so we’ll never sell you something you don’t need.'],
  ['shield', '30-day guarantee', 'Every job is backed by a true 30-day 100% satisfaction guarantee.'],
  ['clock', 'Open 24/7', 'Our line is open Monday – Sunday, 24 hours a day, for emergencies and questions.'],
  ['wrench', 'All makes & models', 'NATE-certified technicians, fully trained to service any brand.'],
];

export function AboutPage() {
  const { PageHero, t } = useKit();
  useTitle('About Us');
  return (
    <>
      <PageHero eyebrow="About us" title="Earning your trust," accent="one home at a time." intro="Locally owned & operated heating and cooling experts serving Kerrville, TX." crumbs={[[null, 'About Us']]} />
      <Body className="grid items-center gap-[clamp(36px,6vw,90px)] lg:grid-cols-2">
        <img src={img('about-us.jpg')} alt="K&R technician servicing an HVAC system" className="reveal aspect-[4/3.4] w-full rounded-[28px] object-cover" />
        <div>
          <p className={cx(t.leadXl, 'reveal mb-6')}>{whyUs[0]}</p>
          <p className={cx(t.body, 'reveal')}>We strive to meet and exceed the expectations of our customers, resulting in the highest levels of respect from our community and a rewarding environment for our employees to succeed.</p>
          <p className={cx(t.body, 'reveal')}>{whyUs[1]}</p>
        </div>
      </Body>
      <Section tone="alt">
        <div className="mb-10 max-w-[640px]"><Eyebrow>Our promises</Eyebrow><H2>What you can count on.</H2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(([icon, h, d]) => (
            <div key={h} className="reveal rounded-[24px] border border-hair bg-paper p-6">
              <span className={cx('mb-5 size-12', tintIcon)}><Icon name={icon} className="size-6" /></span>
              <strong className="mb-1.5 block text-lg text-char">{h}</strong>
              <p className="m-0 text-[15px] text-dim">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <ReviewsBlock tone="base" />
      <BadgeStrip />
      <BookingSection />
    </>
  );
}

// ---------- financing ----------
export function FinancingPage() {
  const { PageHero, t } = useKit();
  useTitle('Financing');
  return (
    <>
      <PageHero icon="dollar" eyebrow="Financing" title="Simple, affordable" accent="financing." intro={financing.intro[0]} crumbs={[['about-us-2', 'About'], [null, 'Financing']]} actions bookLabel="Ask about financing" />
      <Body className="grid items-center gap-[clamp(36px,6vw,90px)] lg:grid-cols-2">
        <img src={img('financing.jpg')} alt="Homeowners relaxing in a comfortable home" className="reveal aspect-[4/3.4] w-full rounded-[28px] object-cover" />
        <div>
          <p className={cx(t.leadXl, 'reveal mb-8')}>{financing.intro[1]}</p>
          <ul className="grid gap-3">
            {financing.benefits.map((b, i) => (
              <li key={b} className="reveal flex items-center gap-4 rounded-[18px] border border-hair bg-white px-5 py-4 font-semibold text-char">
                <span className="text-sm font-bold text-rust">0{i + 1}</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </Body>
      <BookingSection eyebrow="Financing" title="Find out about your options" source="Financing" />
    </>
  );
}

// ---------- promotions ----------
export function PromotionsPage() {
  const { PageHero } = useKit();
  useTitle('Promotions');
  return (
    <>
      <PageHero icon="tag" eyebrow="Savings" title="Current offers" accent="& savings." intro="Save on maintenance, tune-ups and new system installs. Offers subject to restrictions — call for details." crumbs={[['about-us-2', 'About'], [null, 'Promotions']]} />
      <Body className="max-w-[1000px]!"><SavingsList /></Body>
      <BookingSection eyebrow="Claim an offer" title="Book and save" source="Promotions" />
    </>
  );
}

// ---------- our work ----------
export function WorkPage() {
  const { PageHero } = useKit();
  useTitle('Our Work');
  return (
    <>
      <PageHero eyebrow="Our work" title="Recent installs" accent="& projects." intro="A look at residential and commercial heating and cooling work completed by the K&R team." crumbs={[['about-us-2', 'About'], [null, 'Our Work']]} />
      <Body><Gallery images={gallery} /></Body>
      <BookingSection eyebrow="Your project next" title="Get a free estimate" source="Our Work" />
    </>
  );
}

// ---------- contact ----------
export function ContactPage() {
  const { PageHero, t } = useKit();
  useTitle('Contact Us');
  const ways = [
    ['phone', 'Call us 24/7', business.phone, business.phoneHref, 'Fastest for emergencies'],
    ['mail', 'Book online', 'Send a request', '#book', 'We’ll contact you shortly'],
    ['pin', 'Visit the office', business.address, business.mapUrl, `${business.city} ${business.zip}`],
  ];
  return (
    <>
      <PageHero eyebrow="Contact us" title="We’re here" accent="24 hours a day." intro="Need help with your heating or cooling? Pick the way that suits you. We look forward to helping you get back to comfort!" crumbs={[[null, 'Contact']]} />
      <Body className="grid gap-4 md:grid-cols-3">
        {ways.map(([icon, label, value, href, note]) => (
          <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})} className="reveal group flex flex-col rounded-[24px] border border-hair bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-rust">
            <span className={cx('mb-6 size-12 transition group-hover:bg-rust group-hover:text-white', tintIcon)}><Icon name={icon} className="size-6" /></span>
            <span className="text-sm font-semibold text-dim">{label}</span>
            <strong className="mb-1 text-xl tracking-[-.02em] text-char">{value}</strong>
            <span className="text-sm text-dim">{note}</span>
          </a>
        ))}
      </Body>
      <Section tone="alt" id="booking">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal"><ContactForm source="Contact page" /></div>
          <div>
            <ContactInfo cards />
            <div className={cx(t.map, 'reveal')}><iframe title={`Map to ${business.name}`} src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full border-0" /></div>
          </div>
        </div>
      </Section>
    </>
  );
}

// ---------- careers ----------
export function CareersPage() {
  const { PageHero, t } = useKit();
  const [position, setPosition] = useState('');
  useTitle('Careers');
  return (
    <>
      <PageHero eyebrow="Careers" title="Now hiring" accent="HVAC technicians." intro={careers.intro[0]} crumbs={[['about-us-2', 'About'], [null, 'Careers']]} chips={careers.perks} />
      <Body className="grid gap-4 lg:grid-cols-2">
        {careers.positions.map((p) => (
          <article key={p.title} className={cx('reveal flex flex-col rounded-[28px] border border-hair bg-white p-[clamp(24px,3vw,36px)]', shadow)}>
            <span className="mb-3 inline-flex justify-self-start self-start rounded-full bg-tint px-3 py-1 text-xs font-bold text-rust-dk">Open position</span>
            <h2 className={t.h3}>{p.title}</h2>
            {p.text.map((x) => <p key={x} className="mb-3 text-[15px] text-dim">{x}</p>)}
            <details className="group mt-2 mb-6 rounded-[16px] bg-paper px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-char [&::-webkit-details-marker]:hidden">
                Key responsibilities <Icon name="chevron" className="size-4 transition group-open:rotate-180" />
              </summary>
              <div className="pt-4"><CheckList items={p.duties} /></div>
            </details>
            <Btn size="sm" className="mt-auto self-start" onClick={() => { setPosition(p.title); document.getElementById('apply')?.scrollIntoView(); }}>Apply for this role <Icon name="arrow" className="size-4" /></Btn>
          </article>
        ))}
      </Body>
      <Section tone="alt">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <Eyebrow>Apply</Eyebrow>
            <H2>Grow your career with K&amp;R.</H2>
            <Lead>{careers.intro[1]}</Lead>
          </div>
          <div className="reveal"><CareersForm positions={careers.positions} position={position} /></div>
        </div>
      </Section>
    </>
  );
}

export const pages = { ServicePage, MaintenancePage, AboutPage, FinancingPage, PromotionsPage, WorkPage, ContactPage, CareersPage };
