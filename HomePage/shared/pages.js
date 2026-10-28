// Content for the inner pages (Our Services, About Us, Our Work, Promotions, Contact Us).
// Both designs import this file, so the text only lives in one place.
// Each design's own content.js still holds its homepage text.

import acImage from "../assets/img/svc-ac.jpg";
import furnaceImage from "../assets/img/svc-furnace.jpg";
import ductlessImage from "../assets/img/svc-ductless.jpg";
import commercialImage from "../assets/img/svc-commercial.jpg";
import heroImage from "../assets/img/hero.jpg";

// ---------- Main menu (header + footer) ----------
// Links start with "#/" — that is a page. Links like "#contact" jump to a section on the same page.
export const siteMenu = [
  {
    label: "Our Services",
    href: "#/services",
    children: [
      { label: "Air Conditioners", href: "#/services/air-conditioners" },
      { label: "Furnaces", href: "#/services/furnaces" },
      { label: "Heat Pumps", href: "#/services/heat-pumps" },
      { label: "Ductless Systems", href: "#/services/ductless" },
      { label: "Air Handlers", href: "#/services/air-handlers" },
      { label: "Indoor Air Quality", href: "#/services/indoor-air-quality" },
      { label: "Commercial HVAC", href: "#/services/commercial" },
      { label: "Maintenance Plans", href: "#/services/maintenance-plans" },
    ],
  },
  {
    label: "About Us",
    href: "#/about",
    children: [
      { label: "Our Story", href: "#/about" },
      { label: "Reviews", href: "#/about/reviews" },
      { label: "Financing", href: "#/about/financing" },
      { label: "FAQ", href: "#/about/faq" },
    ],
  },
  { label: "Our Work", href: "#/our-work" },
  { label: "Promotions", href: "#/promotions" },
  { label: "Contact Us", href: "#/contact" },
];

// ---------- Service pages (one page per item, at #/services/<slug>) ----------
export const servicePages = [
  {
    slug: "air-conditioners",
    title: "Air Conditioners",
    short: "Repair, replacement & tune-ups",
    intro: "When your AC quits on the hottest day of the summer, we get you cool again — fast. Our certified technicians repair and replace all makes and models, and give you honest options, not a sales pitch.",
    image: acImage,
    imageAlt: "Trane air conditioner outside a brick home",
    includes: ["AC repair", "New AC installation", "Seasonal tune-ups", "Free second opinion", "Free estimates on new installs", "Refrigerant & coil service"],
    signs: ["Warm air from the vents", "Higher energy bills than usual", "Strange noises or smells", "Water leaking around the unit"],
  },
  {
    slug: "furnaces",
    title: "Furnaces",
    short: "Safe, dependable heat",
    intro: "Safe, reliable heat for Hill Country winters. We repair and replace gas furnaces and check combustion, gas pressures and every safety control on every visit.",
    image: furnaceImage,
    imageAlt: "Trane gas furnace installed by K&R",
    includes: ["Furnace repair", "Furnace replacement", "Safety inspections", "Combustion & gas pressure checks", "Thermostat calibration", "24/7 emergency calls"],
    signs: ["Not enough heat, or none at all", "Pilot light or ignition problems", "Short cycling on and off", "Rising gas bills"],
  },
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    short: "Year-round efficiency",
    intro: "Efficient year-round heating and cooling in one system, installed and maintained by certified technicians. A heat pump can lower your energy bills in both seasons.",
    image: acImage,
    imageAlt: "Outdoor heat pump unit",
    includes: ["Heat pump installation", "Repair & diagnostics", "High-efficiency upgrades", "Defrost & reversing valve service"],
    signs: ["Ice that stays on the outdoor unit", "System runs constantly", "Uneven temperatures between rooms", "Loud grinding or squealing"],
  },
  {
    slug: "ductless",
    title: "Ductless Systems",
    short: "Comfort without ductwork",
    intro: "Targeted heating and cooling without ductwork — ideal for additions, garages, workshops and that one room that never feels right. K&R is a Ductless Preferred Pro.",
    image: ductlessImage,
    imageAlt: "Ductless mini-split unit on a wall",
    includes: ["Mini-split installation", "Multi-zone systems", "Ductless service & cleaning", "Energy-efficient upgrades"],
    signs: ["A room that's always too hot or cold", "A new addition or garage conversion", "An older home with no ductwork", "Wanting room-by-room control"],
  },
  {
    slug: "air-handlers",
    title: "Air Handlers",
    short: "Even, quiet airflow",
    intro: "The air handler is the part of your system that moves the air. We repair, replace and seal air handlers for quieter, more even comfort in every room.",
    image: furnaceImage,
    imageAlt: "Indoor air handler unit",
    includes: ["Air handler replacement", "Motor & blower service", "Leak sealing", "Drain line cleaning"],
    signs: ["Weak airflow from the vents", "Rattling or buzzing indoors", "Musty smells when the system runs", "Water around the indoor unit"],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    short: "Cleaner, healthier air",
    intro: "Cleaner, healthier air for the people you love. We install indoor air quality units and keep your ductwork clean and sealed.",
    image: heroImage,
    imageAlt: "Comfortable, bright living room",
    includes: ["Air quality units", "Ductwork inspection", "Filter service", "Humidity control"],
    signs: ["Dust building up quickly", "Allergies worse indoors", "Stale or musty air", "Rooms that feel too humid"],
  },
  {
    slug: "commercial",
    title: "Commercial HVAC",
    short: "Built for business",
    intro: "When heating or cooling fails in a commercial building, every hour counts. We respond quickly with custom solutions for retail stores, restaurants, offices, warehouses, churches and more.",
    image: commercialImage,
    imageAlt: "Commercial rooftop HVAC units",
    includes: ["New installation", "Replacements", "Repairs", "Planned maintenance", "Rooftop units", "Fast response"],
    signs: ["Customers or staff complaining about temperature", "Rising utility costs", "Frequent breakdowns", "Equipment over 10–15 years old"],
  },
  {
    slug: "maintenance-plans",
    title: "Maintenance Plans",
    short: "Two tune-ups a year",
    intro: "Two complete tune-ups a year with a 20+ point inspection — for lower utility bills, fewer breakdowns and longer equipment life. Plans start at $180 per year.",
    image: acImage,
    imageAlt: "Technician servicing an outdoor unit",
    includes: ["10% parts & labor discount", "Discounts on new equipment", "Priority service", "One emergency service call per year", "A 1″ filter at every check", "20+ point inspection"],
    signs: ["Your system hasn't been checked in a year", "You want fewer surprise repairs", "You want lower energy bills", "You want priority scheduling"],
  },
];

// Find one service page by its slug (returns undefined if there is no match)
export function findServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}

// ---------- About Us ----------
export const aboutStory = [
  "K&R Heating & Cooling is locally owned and operated in Kerrville, Texas. We started with a simple idea: treat every home like it's our own, and give people honest options instead of a sales pitch.",
  "Our priority is to earn the trust of the community by delivering superior heating and cooling service with an unmatched client experience. We never accept past performance as good enough — we strive every day for new levels of excellence.",
  "Today our certified technicians service all makes and models for homes and businesses across the Hill Country, 24 hours a day, 7 days a week.",
];

export const aboutValues = [
  { title: "Honest options", text: "We explain what's wrong and walk you through repair and replacement choices — no pressure." },
  { title: "Done right", text: "Certified, NATE-trained technicians who get it right the first time." },
  { title: "Always here", text: "Open 24/7, Monday through Sunday, for heating and cooling emergencies." },
  { title: "Guaranteed", text: "Every job is backed by our true 30-day, 100% satisfaction guarantee." },
];

// ---------- Financing ----------
export const financingPoints = [
  { title: "Flexible options", text: "Choose the plan and term that fits your budget." },
  { title: "Competitive rates", text: "Affordable rates on new heating and cooling systems." },
  { title: "Monthly payments", text: "Spread the cost of a new system into easy monthly payments." },
  { title: "Fast application", text: "A quick application with a fast answer, so you're not left waiting." },
];

// ---------- Our Work (project gallery) ----------
// Replace these with real job photos when you have them.
export const projects = [
  { title: "Complete system replacement", place: "Kerrville, TX", type: "Residential", image: acImage, imageAlt: "New Trane AC outdoor unit" },
  { title: "Gas furnace install", place: "Ingram, TX", type: "Residential", image: furnaceImage, imageAlt: "New gas furnace installed in a utility closet" },
  { title: "Multi-zone ductless", place: "Center Point, TX", type: "Ductless", image: ductlessImage, imageAlt: "Ductless mini-split on a living room wall" },
  { title: "Rooftop unit replacement", place: "Kerrville, TX", type: "Commercial", image: commercialImage, imageAlt: "Commercial rooftop HVAC units" },
  { title: "Whole-home comfort upgrade", place: "Comfort, TX", type: "Residential", image: heroImage, imageAlt: "Bright living room kept comfortable" },
  { title: "Heat pump changeout", place: "Hunt, TX", type: "Residential", image: acImage, imageAlt: "Heat pump outdoor unit" },
];

// ---------- Promotions ----------
export const promotions = [
  { price: "$85", title: "Seasonal tune-up", text: "A complete 20+ point inspection to keep your system running at its best this season." },
  { price: "$180", title: "Maintenance plans", text: "From $180/year for two visits, plus discounts and priority service." },
  { price: "Free", title: "Second opinion", text: "Told you need a new system? Let us take a look before you decide." },
  { price: "Free", title: "Maintenance package", text: "Included with every complete system install." },
  { price: "Free", title: "Install estimates", text: "Free, no-pressure estimates on new heating and cooling systems." },
  { price: "Easy", title: "Special financing", text: "Special financing available on new systems for qualified buyers." },
];

export const promoFinePrint =
  "Offers subject to restrictions. Expire December 31, 2026. Call for details. Special financing available on new systems for qualified buyers.";
