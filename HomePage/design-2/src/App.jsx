import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import FinancingPage from "./pages/FinancingPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import OurWorkPage from "./pages/OurWorkPage.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import useRoute from "../../shared/useRoute.js";
import usePageMeta from "../../shared/pageMeta.js";
import useScrollReveal from "./hooks/useScrollReveal.js";

// Every page, by its address (/design-2/about, /design-2/promotions...)
const pages = {
  "/": HomePage,
  "/services": ServicesPage,
  "/about": AboutPage,
  "/about/reviews": ReviewsPage,
  "/about/financing": FinancingPage,
  "/about/faq": FaqPage,
  "/our-work": OurWorkPage,
  "/promotions": PromotionsPage,
  "/contact": ContactPage,
};

// App is the top of the component tree: it picks the page for the current address.
function App() {
  const path = useRoute("/design-2/");
  useScrollReveal(path);
  usePageMeta(path);

  let page;
  if (path.startsWith("/services/")) {
    // One page per service, e.g. /design-2/services/furnaces
    page = <ServiceDetailPage slug={path.slice("/services/".length)} />;
  } else {
    const Page = pages[path] || NotFoundPage;
    page = <Page />;
  }

  return (
    <Layout path={path} key={path}>
      {page}
    </Layout>
  );
}

export default App;
