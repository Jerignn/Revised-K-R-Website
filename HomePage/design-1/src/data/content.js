// All the text and images for the page live here.
// Edit this file to change content without touching the components.

import acImage from "../../../assets/img/svc-ac.jpg";
import furnaceImage from "../../../assets/img/svc-furnace.jpg";
import commercialImage from "../../../assets/img/svc-commercial.jpg";
import badgeTrane from "../../../assets/img/badge-tcs.png";
import badgeNate from "../../../assets/img/badge-nate.png";
import badgeDuctless from "../../../assets/img/badge-ductless.png";
import badgeGoogle from "../../../assets/img/badge-google.png";

// ---------- Business details ----------
export const business = {
  name: "K&R Heating & Cooling",
  phone: "830-792-3993",
  phoneLink: "tel:8307923993",
  street: "410 Cotton Gin Lane",
  city: "Kerrville, TX 78028",
};

// The header and footer menu lives in shared/pages.js (siteMenu)

// ---------- Scrolling words under the hero ----------
export const marqueeWords = [
  "Air Conditioners",
  "Furnaces",
  "Heat Pumps",
  "Ductless",
  "Commercial HVAC",
  "It's not a gamble",
];

// ---------- Four quick links under the hero ----------
export const quickTiles = [
  { number: "01", title: "Cooling", text: "AC repair, replacement & tune-ups", href: "#cooling" },
  { number: "02", title: "Heating", text: "Furnaces, heat pumps & air handlers", href: "#heating" },
  { number: "03", title: "Ductless", text: "Targeted comfort, no ductwork", href: "#services" },
  { number: "04", title: "Commercial", text: "Install, repair & maintain", href: "#commercial" },
];

// ---------- Image + text feature rows ----------
export const features = [
  {
    id: "cooling",
    number: "01",
    tag: "Cooling",
    eyebrow: "Air conditioning",
    title: "Beat the Hill Country heat.",
    highlight: "Fast.",
    text: "When your AC quits on the hottest day of the summer, we get you cool again — often before noon. Our certified technicians repair and replace all makes and models, and give you honest options, not a sales pitch.",
    checks: ["All makes & models", "Free estimates on new installs", "Free second opinion", "Trane Comfort Specialist"],
    linkText: "Book AC service",
    image: acImage,
    imageAlt: "Trane air conditioner outside a brick home in Kerrville",
    flip: false,
  },
  {
    id: "heating",
    number: "02",
    tag: "Heating",
    eyebrow: "Furnaces & heat pumps",
    title: "Warm all winter.",
    highlight: "Every winter.",
    text: "From furnace repairs to heat pump and air handler installs, we keep your home warm and your system running safely — with combustion, gas pressure and safety-control checks on every visit.",
    checks: ["Furnace repair & replacement", "Heat pumps & air handlers", "Indoor air quality units", "24/7 emergency calls"],
    linkText: "Book heating service",
    image: furnaceImage,
    imageAlt: "Trane gas furnace installed by K&R",
    flip: true,
  },
  {
    id: "commercial",
    number: "03",
    tag: "Commercial",
    eyebrow: "Commercial HVAC",
    title: "Built for business.",
    highlight: "Ready when you are.",
    text: "When heating or cooling fails in a commercial building, every hour counts. We respond quickly with custom solutions for retail stores, restaurants, offices, warehouses, churches and more.",
    checks: ["New installation", "Replacements", "Repairs", "Planned maintenance"],
    linkText: "Talk to our commercial team",
    image: commercialImage,
    imageAlt: "Commercial rooftop HVAC units",
    flip: false,
  },
];

// ---------- Services accordion ----------
export const services = [
  {
    title: "Air Conditioners",
    text: "Repair, replacement and seasonal tune-ups for central air systems. We check refrigerant charge, coils, capacitors and electrical connections so your AC runs cool and efficient.",
    list: ["AC repair", "New AC installation", "Seasonal tune-ups"],
  },
  {
    title: "Furnaces",
    text: "Safe, reliable heat. We repair and replace gas furnaces and check combustion, gas pressures and every safety control.",
    list: ["Furnace repair", "Furnace replacement", "Safety inspections"],
  },
  {
    title: "Heat Pumps",
    text: "Efficient year-round heating and cooling in one system, installed and maintained by certified technicians.",
    list: ["Heat pump installation", "Repair & diagnostics", "High-efficiency upgrades"],
  },
  {
    title: "Ductless Systems",
    text: "Targeted heating and cooling without ductwork — ideal for additions, garages and single rooms. K&R is a Ductless Preferred Pro.",
    list: ["Mini-split installation", "Multi-zone systems", "Ductless service"],
  },
  {
    title: "Air Handlers",
    text: "The part of your system that moves the air. We repair, replace and seal air handlers for quieter, more even comfort.",
    list: ["Air handler replacement", "Motor & blower service", "Leak sealing"],
  },
  {
    title: "Indoor Air Quality",
    text: "Cleaner, healthier air at home. We install indoor air quality units and keep ductwork clean and sealed.",
    list: ["Air quality units", "Ductwork inspection", "Filter service"],
  },
  {
    title: "Commercial HVAC",
    text: "Custom heating and cooling for businesses of every size, with quick response so you can keep working as usual.",
    list: ["Retail & restaurants", "Offices & warehouses", "Churches & more"],
  },
  {
    title: "Maintenance Plans",
    text: "Two complete tune-ups a year with a 20+ point inspection — for lower utility bills, fewer breakdowns and longer equipment life.",
    list: ["10% parts & labor discount", "Priority service", "One emergency call per year"],
  },
];

// ---------- How it works ----------
export const steps = [
  { title: "Call or book online", text: "Tell us what's going on. We answer 24 hours a day, 7 days a week." },
  { title: "Get honest options", text: "A certified technician diagnoses the problem and walks you through repair and replacement options." },
  { title: "Enjoy the comfort", text: "We get it done right — backed by our true 30-day, 100% satisfaction guarantee." },
];

// ---------- Why K&R ----------
export const badges = [
  { image: badgeTrane, alt: "Trane Comfort Specialist" },
  { image: badgeNate, alt: "NATE certified technicians" },
  { image: badgeDuctless, alt: "Ductless Preferred Pro" },
  { image: badgeGoogle, alt: "Google Reviews" },
];

export const stats = [
  { value: "24/7", label: "Emergency service, Monday – Sunday" },
  { value: "30-Day", label: "100% satisfaction guarantee" },
  { value: "All", label: "Makes & models serviced" },
  { value: "Free", label: "Estimates on new installations" },
  { value: "20+", label: "Point inspection on every tune-up" },
  { value: "Local", label: "Owned & operated in Kerrville" },
];

// ---------- Reviews (the first one is shown big) ----------
export const reviews = [
  { name: "Stacy F.", text: "Beyond impressed. He was thorough, honest and helpful. The other company went straight to ‘need to replace’ — K&R came in with options and got it running." },
  { name: "Hayden W.", text: "Ben was prompt, polite, and proficient. We were cool again before noon on one of the hottest days of summer so far. Highly recommend." },
  { name: "Shawn C.", text: "K&R is simply the best! Fast, reliable service at a fair price. You can trust them with all of your heating and cooling needs." },
  { name: "Ellysa W.", text: "Reliable & communicative. Reasonably priced and better than the ones you can get at the boxed stores locally!" },
  { name: "Kuhler", text: "Had a complete system replacement. Very pleased with the entire process. Very professional and timely." },
];

// ---------- Promotions ----------
export const offers = [
  { price: "$85", title: "Seasonal tune-up", text: "Keep your system running at its best this season." },
  { price: "$180", title: "Maintenance plans", text: "From $180/year for two visits." },
  { price: "Free", title: "Second opinion", text: "Told you need a new system? Let us take a look." },
  { price: "Free", title: "Maintenance package", text: "Included with complete system installs." },
];

// ---------- FAQ ----------
export const faqs = [
  { title: "Do you offer 24/7 emergency service?", text: "Yes. We're open 24 hours a day, Monday through Sunday, for heating and cooling emergencies." },
  { title: "Which brands do you work on?", text: "We service all makes and models. We're also a Trane Comfort Specialist and a Ductless Preferred Pro for new installations." },
  { title: "What's included in a maintenance plan?", text: "Two complete tune-ups a year, each with a 20+ point inspection, plus a 10% parts & labor discount, discounts on new equipment, priority service, one emergency service call per year and a 1″ filter at every check." },
  { title: "Do you offer financing?", text: "Yes. We offer simple, affordable financing on new heating and cooling systems, with flexible options, competitive rates and monthly payments." },
  { title: "What if I'm not happy with the work?", text: "We back all of our work with a true 30-day, 100% satisfaction guarantee. When you call K&R, it's not a gamble." },
];

// ---------- Contact form dropdown ----------
export const serviceOptions = [
  "Air Conditioners",
  "Furnaces",
  "Heat Pumps",
  "Ductless",
  "Air Handlers",
  "Indoor Air Quality",
  "Commercial HVAC",
  "Maintenance Plan",
];
