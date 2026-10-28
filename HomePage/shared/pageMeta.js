import { useEffect } from "react";
import { findServicePage } from "./pages.js";

// The browser-tab title and search-result description for each page.
// Titles stay under 60 characters and descriptions under 160, so Google shows them in full.
// The home page keeps the title and description written in index.html.

const brand = "K&R Heating & Cooling";

const pageMeta = {
  "/services": {
    title: "HVAC Services in Kerrville, TX",
    description: "AC, furnace, heat pump, ductless and commercial HVAC service in Kerrville, TX. All makes and models, free install estimates. Call 830-792-3993.",
  },
  "/about": {
    title: "About Us | Locally Owned in Kerrville",
    description: "Locally owned and operated heating and cooling in Kerrville, TX, backed by a true 30-day, 100% satisfaction guarantee.",
  },
  "/about/reviews": {
    title: "Customer Reviews",
    description: "Read what Kerrville homeowners and businesses say about K&R Heating & Cooling's repairs, installs and maintenance.",
  },
  "/about/financing": {
    title: "HVAC Financing",
    description: "Simple, affordable financing on new heating and cooling systems in Kerrville, TX, with flexible terms and monthly payments.",
  },
  "/about/faq": {
    title: "HVAC FAQ",
    description: "Answers about 24/7 service, brands we work on, maintenance plans, financing and our 30-day satisfaction guarantee.",
  },
  "/our-work": {
    title: "Our Work | Recent HVAC Projects",
    description: "Recent AC, furnace, ductless and commercial HVAC installs and replacements around Kerrville and the Hill Country.",
  },
  "/promotions": {
    title: "HVAC Specials & Promotions",
    description: "Current deals on tune-ups, maintenance plans, second opinions and new heating and cooling systems in Kerrville, TX.",
  },
  "/contact": {
    title: "Contact Us | 24/7 HVAC Service",
    description: "Call 830-792-3993 any time or send a message to book heating and cooling service in Kerrville, TX. Open 24/7.",
  },
};

// Works out the title and description for an address, or null for the home page
function metaFor(path) {
  if (path.startsWith("/services/")) {
    const service = findServicePage(path.slice("/services/".length));
    if (service) {
      return {
        title: service.title + " in Kerrville, TX",
        description: service.title + " in Kerrville, TX: " + service.short.toLowerCase() + ". All makes and models, 24/7 emergency service. Call 830-792-3993.",
      };
    }
    return { title: "Page not found", description: "" };
  }
  if (path === "/") {
    return null;
  }
  return pageMeta[path] || { title: "Page not found", description: "" };
}

// Updates the tab title and meta description whenever the page changes
function usePageMeta(path) {
  useEffect(() => {
    const descriptionTag = document.querySelector('meta[name="description"]');

    // Remember what index.html set, so the home page can go back to it
    if (!usePageMeta.home) {
      usePageMeta.home = { title: document.title, description: descriptionTag ? descriptionTag.content : "" };
    }

    const meta = metaFor(path) || usePageMeta.home;
    document.title = meta === usePageMeta.home ? meta.title : meta.title + " | " + brand;
    if (descriptionTag && meta.description) {
      descriptionTag.content = meta.description;
    }
  }, [path]);
}

export default usePageMeta;
