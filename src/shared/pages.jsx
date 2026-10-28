import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from './icons.jsx';
import { useTitle } from './hooks.jsx';
import { business, services, maintenance, provides, whyUs, financing, careers, gallery, promotions, privacy, img } from './content.js';
import {
  useKit, Section, Eyebrow, H2, H3, Lead, Btn, L, CheckList, Callout, Accordion, ReviewsSection, Coupon,
  ContactInfo, ContactForm, CareersForm, SidebarCall, ProjectCta, FinancingBand, BadgeStrip, ServiceCards, Gallery,
} from './ui.jsx';

const cx = (...c) => c.filter(Boolean).join(' ');

function WithSidebar({ source, service, children }) {
  return (
    <Section tone="paper">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <div>{children}</div>
        <aside className="grid gap-4 lg:sticky lg:top-28">
          <ContactForm source={source} service={service} />
          <SidebarCall />
        </aside>
      </div>
    </Section>
  );
}

function Block({ b }) {
  const { t } = useKit();
  return (
    <div className={cx(t.block, 'reveal')}>
      <H3>{b.heading}</H3>
      {(b.text || []).map((p) => <p key={p} className={t.body}>{p}</p>)}
      {b.items && <CheckList items={b.items} cols={b.items.length > 4} />}
      {b.cards && (
        <div className="grid gap-3.5 md:grid-cols-3">
          {b.cards.map(([title, d], i) => (
            <div key={title} className={t.miniCard.card}>
              <span className={t.miniCard.num}>0{i + 1}</span>
              <h4 className={t.miniCard.title}>{title}</h4>
              <p className={t.miniCard.text}>{d}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Figure({ src, alt }) {
  const { t } = useKit();
  return <figure className={cx(t.figure, 'reveal')}><img src={img(src)} alt={alt} className="aspect-[16/8] w-full object-cover" /></figure>;
}

function OtherServices({ exclude }) {
  const { t } = useKit();
  return (
    <Section tone="base">
      <div className={t.splitHead}><div><Eyebrow>Explore more</Eyebrow><H2>Other heating &amp; cooling services</H2></div></div>
      <ServiceCards exclude={exclude} />
    </Section>
  );
}

export function ServicePage() {
  const { slug } = useParams();
  const { PageHero, t } = useKit();
  const s = services.find((x) => x.slug === slug);
  useTitle(s?.title || 'Page Not Found');
  if (!s) return <NotFound />;
  return (
    <>
      <PageHero eyebrow="Our services" title={s.title} intro={s.intro[0]} image={s.image} crumbs={[['#services', 'Services'], [null, s.title]]} />
      <WithSidebar source={s.title} service={s.title}>
        {s.intro.slice(1).map((p) => <Lead key={p}>{p}</Lead>)}
        <Figure src={s.image} alt={s.title} />
        {s.blocks.map((b) => <Block key={b.heading} b={b} />)}
        {s.closing && <Callout icon="shield"><p>{s.closing}</p></Callout>}
      </WithSidebar>
      <OtherServices exclude={s.slug} />
      <ProjectCta />
      <ReviewsSection />
      <FinancingBand />
    </>
  );
}

export function MaintenancePage() {
  const { PageHero, t } = useKit();
  useTitle('Maintenance Plans');
  return (
    <>
      <PageHero eyebrow="Our services" title="Maintenance Plans" intro={maintenance.intro} image="parallax-img.jpg" crumbs={[['#services', 'Services'], [null, 'Maintenance Plans']]} />
      <WithSidebar source="Maintenance Plans" service="Maintenance Plan">
        <div className={cx(t.pdf.card, 'reveal')}>
          <span className={t.pdf.icon}><Icon name="download" className="size-6" /></span>
          <div className="grid flex-1"><strong>Download or print a copy of our Maintenance Plan</strong><span className={t.pdf.sub}>PDF · full plan details &amp; terms</span></div>
          <Btn to={business.maintenancePdf} size="sm">Open PDF</Btn>
        </div>
        <Block b={{ heading: 'Benefits include', items: maintenance.benefits }} />
        <div className={cx(t.block, 'reveal')}>
          <H3>Each tune-up includes a 20+ point inspection</H3>
          <ol className="grid gap-x-7 sm:grid-cols-2">
            {maintenance.checklist.map((c, i) => (
              <li key={c} className={t.inspection.item}><span className={t.inspection.num}>{String(i + 1).padStart(2, '0')}</span>{c}</li>
            ))}
          </ol>
        </div>
        <Callout icon="tag"><p>Plans start from <strong>$180/year for 2 visits</strong> — and right now you can save 15% on every preventative maintenance plan. <L to="promotions">See promotions</L>.</p></Callout>
      </WithSidebar>
      <ProjectCta />
      <ReviewsSection />
      <FinancingBand />
    </>
  );
}

export function AboutPage() {
  const { PageHero, t } = useKit();
  useTitle('About Us');
  return (
    <>
      <PageHero eyebrow="About us" title="Earning your trust," accent="one home at a time." intro="Locally owned & operated heating and cooling experts serving Kerrville, TX." image="about-us.jpg" crumbs={[[null, 'About Us']]} />
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <p className={cx(t.leadXl, 'reveal')}>At K&amp;R Heating &amp; Cooling our priority is to earn the trust of the community by delivering superior heating and cooling services with an unmatched client experience.</p>
          <div>
            <p className={cx(t.body, 'reveal')}>We strive to meet and exceed the expectations of our customers, resulting in the highest levels of respect from our community and a rewarding environment for our employees to succeed.</p>
            <p className={cx(t.body, 'reveal')}>{whyUs[1]}</p>
            <H3 className="mt-8">K&amp;R Heating &amp; Cooling is happy to provide:</H3>
            <CheckList items={provides} cols />
            <div className="mt-8"><Callout icon="shield"><p>When you call K&amp;R Heating &amp; Cooling, it’s not a gamble. We back up all of our work with a true 30-day 100% satisfaction guarantee. You can be confident knowing that your home comfort is our #1 priority!</p></Callout></div>
          </div>
        </div>
      </Section>
      <section className={t.stats.section}>
        <div className={cx(t.wrap, 'grid grid-cols-2 md:grid-cols-4')}>
          {[['24/7', 'Emergency service'], ['30-day', '100% satisfaction guarantee'], ['All', 'Makes & models serviced'], ['NATE', 'Certified technicians']].map(([a, b], i) => (
            <div key={a} className={cx(t.stats.item, i % 2 && t.stats.divider, i > 0 && 'md:border-l', i > 1 && t.stats.rowDivider, 'reveal')}>
              <strong className={t.stats.value}>{a}</strong><span className={t.stats.label}>{b}</span>
            </div>
          ))}
        </div>
      </section>
      <ReviewsSection />
      <BadgeStrip />
      <ProjectCta />
    </>
  );
}

export function CareersPage() {
  const { PageHero, t } = useKit();
  const [position, setPosition] = useState('');
  useTitle('Careers');
  return (
    <>
      <PageHero eyebrow="Careers" title="Now hiring" accent="HVAC technicians." intro={careers.intro[0]} image="careers.png" crumbs={[['about-us-2', 'About'], [null, 'Careers']]} />
      <Section tone="paper" className="!pb-10">
        <p className={cx(t.leadXl, 'reveal max-w-4xl')}>{careers.intro[1]}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {careers.perks.map((p) => (
            <div key={p} className={cx(t.perk.card, 'reveal')}><span className={t.perk.icon}><Icon name="check" className="size-4" strokeWidth={3} /></span>{p}</div>
          ))}
        </div>
      </Section>
      <Section tone="paper" className="!pt-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
          <div>
            <Eyebrow>Available positions</Eyebrow>
            <H2>We are currently hiring for the following opportunities.</H2>
            <Accordion
              items={careers.positions.map((p) => ({
                title: p.title,
                content: (
                  <>
                    {p.text.map((x) => <p key={x}>{x}</p>)}
                    <h4 className={t.acc.h4}>Key responsibilities include</h4>
                    <div className="mb-6"><CheckList items={p.duties} /></div>
                    <Btn size="sm" onClick={() => { setPosition(p.title); document.getElementById('apply')?.scrollIntoView(); }}>Apply for this role <Icon name="arrow" className="size-4" /></Btn>
                  </>
                ),
              }))}
            />
          </div>
          <aside className="lg:sticky lg:top-28"><CareersForm positions={careers.positions} position={position} /></aside>
        </div>
      </Section>
    </>
  );
}

export function FinancingPage() {
  const { PageHero, t } = useKit();
  useTitle('Financing');
  return (
    <>
      <PageHero eyebrow="Financing" title="Simple, affordable" accent="financing." intro={financing.intro[0]} image="financing.jpg" crumbs={[['about-us-2', 'About'], [null, 'Financing']]} />
      <WithSidebar source="Financing">
        <Lead>{financing.intro[1]}</Lead>
        <Figure src="financing.jpg" alt="Homeowners relaxing in a comfortable home" />
        <div className={cx(t.block, 'reveal')}>
          <H3>Benefits of financing your new heating or cooling system</H3>
          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
            {financing.benefits.map((b, i) => (
              <div key={b} className={t.miniCard.card}><span className={t.miniCard.num}>0{i + 1}</span><p className={cx(t.miniCard.title, 'mt-2')}>{b}</p></div>
            ))}
          </div>
        </div>
        <Callout icon="dollar"><p>Contact us today to find out more about your financing options. Call <a href={business.phoneHref}>{business.phone}</a> or send us a request.</p></Callout>
      </WithSidebar>
      <ProjectCta />
      <ReviewsSection />
    </>
  );
}

export function WorkPage() {
  const { PageHero } = useKit();
  useTitle('Our Work');
  return (
    <>
      <PageHero eyebrow="Our work" title="Recent installs" accent="& projects." intro="A look at residential and commercial heating and cooling work completed by the K&R team." image="image-3.jpg" crumbs={[['about-us-2', 'About'], [null, 'Our Work']]} />
      <Section tone="paper"><Gallery images={gallery} /></Section>
      <ProjectCta />
      <ReviewsSection />
      <FinancingBand />
    </>
  );
}

export function PromotionsPage() {
  const { PageHero } = useKit();
  useTitle('Promotions');
  return (
    <>
      <PageHero eyebrow="Promotions" title="Current offers" accent="& savings." intro="Save on maintenance, tune-ups and new system installs. Offers subject to restrictions — call for details." image="parallax-img.jpg" crumbs={[['about-us-2', 'About'], [null, 'Promotions']]} />
      <Section tone="paper">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{promotions.map((p) => <Coupon key={p.title} p={p} light />)}</div>
      </Section>
      <ProjectCta />
      <ReviewsSection />
      <FinancingBand />
    </>
  );
}

export function ContactPage() {
  const { PageHero, t } = useKit();
  useTitle('Contact Us');
  return (
    <>
      <PageHero eyebrow="Contact us" title="We’re here" accent="24 hours a day." intro="Need help with your heating or cooling? Get in touch with us today by filling out the form or giving us a call. We look forward to helping you get back to comfort!" image="hero-banner-compressed.jpeg" crumbs={[[null, 'Contact']]} />
      <Section tone="paper">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ContactInfo cards />
            <div className={cx(t.map, 'reveal')}><iframe title={`Map to ${business.name}`} src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full border-0" /></div>
          </div>
          <div className="reveal" id="c-form"><ContactForm source="Contact page" /></div>
        </div>
      </Section>
      <ReviewsSection />
      <FinancingBand />
    </>
  );
}

export function PrivacyPage() {
  const { PageHero, t } = useKit();
  useTitle('Privacy Policy');
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image="privacy-policy.jpg" crumbs={[[null, 'Privacy Policy']]} />
      <Section tone="paper">
        <div className="max-w-3xl">
          {privacy.map(([h, text]) => (
            <div key={h || 'intro'}>
              {h && <H3 className="mt-10">{h}</H3>}
              {text.split('\n\n').map((p) => <p key={p} className={t.body}>{p}</p>)}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export function NotFound() {
  const { t } = useKit();
  useTitle('Page Not Found');
  return (
    <Section tone="base" className="text-center">
      <div className="mx-auto max-w-2xl py-16">
        <p className={t.eyebrow}>Error 404</p>
        <h1 className={t.pageTitle}>This page went <em className={t.accent}>cold.</em></h1>
        <p className={cx(t.lead, 'mx-auto mb-8')}>We couldn’t find the page you were looking for. Try one of our services or give us a call.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Btn to="" size="lg">Back to home <Icon name="arrow" /></Btn>
          <Btn to={business.phoneHref} variant="secondary" size="lg"><Icon name="phone" /> {business.phone}</Btn>
        </div>
      </div>
    </Section>
  );
}
