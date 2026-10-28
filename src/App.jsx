import { NavLink, Route, Routes } from 'react-router-dom';
import { Icon } from './shared/icons.jsx';
import { PageEffects } from './shared/hooks.jsx';
import { KitContext } from './shared/ui.jsx';
import * as sharedPages from './shared/pages.jsx';
import HomePage from './HomePage/HomePage.jsx';
import { design1 } from './design-1/Design1.jsx';
import { design2 } from './design-2/Design2.jsx';

// Floating bar to jump between the two concepts and the overview page.
function DesignSwitcher() {
  const item = ({ isActive }) =>
    `flex items-center gap-1.5 rounded-full px-3 py-2 transition ${isActive ? 'bg-white text-[#1d2227]' : 'text-white/80 hover:text-white'}`;
  return (
    <nav aria-label="Design switcher" className="fixed bottom-4 left-4 z-[70] flex items-center gap-1 rounded-full bg-[#1d2227]/90 p-1 font-jakarta text-xs font-semibold shadow-xl backdrop-blur max-md:bottom-20">
      <NavLink to="/" end className={item}><Icon name="grid" className="size-3.5" /><span className="max-sm:hidden">All designs</span></NavLink>
      <NavLink to="/design-1/" className={item}><b className="sm:hidden">1</b><span className="max-sm:hidden">Design 1</span></NavLink>
      <NavLink to="/design-2/" className={item}><b className="sm:hidden">2</b><span className="max-sm:hidden">Design 2</span></NavLink>
    </nav>
  );
}

function DesignSite({ kit }) {
  const { Layout, Home } = kit;
  // A design can replace any shared inner page with its own (kit.pages).
  const { ServicePage, MaintenancePage, AboutPage, CareersPage, FinancingPage, WorkPage, PromotionsPage, ContactPage, PrivacyPage, NotFound } = { ...sharedPages, ...kit.pages };
  return (
    <KitContext.Provider value={kit}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="maintenance-plans" element={<MaintenancePage />} />
          <Route path="about-us-2" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="financing" element={<FinancingPage />} />
          <Route path="our-work" element={<WorkPage />} />
          <Route path="promotions" element={<PromotionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <DesignSwitcher />
    </KitContext.Provider>
  );
}

export default function App() {
  return (
    <>
      <PageEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-1/*" element={<DesignSite kit={design1} />} />
        <Route path="/design-2/*" element={<DesignSite kit={design2} />} />
        <Route path="*" element={<KitContext.Provider value={design2}><design2.Layout><sharedPages.NotFound /></design2.Layout></KitContext.Provider>} />
      </Routes>
    </>
  );
}
