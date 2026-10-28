// All the text and images for the page live here.
// Edit this file to change content without touching the components.

import acImage from "../../../assets/img/svc-ac.jpg";
import furnaceImage from "../../../assets/img/svc-furnace.jpg";
import ductlessImage from "../../../assets/img/svc-ductless.jpg";
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
  reviewsLink: "https://www.google.com/search?q=K%26R+Heating+%26+Cooling+Kerrville+reviews",
};

// ---------- Header menu ----------
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Maintenance", href: "#plan" },
  { label: "Reviews", href: "#reviews" },
];

// ---------- Hero: "What can we help you with today?" ----------
// Each card jumps to a section. If it has a message, that text is put into the contact form.
export const helpOptions = [
  {
    icon: "tools",
    title: "Something isn't working",
    text: "No heat, no cooling, strange noises or leaks.",
    linkText: "Request a repair",
    link: "#contact",
    message: "My heating or cooling system isn't working.",
  },
  {
    icon: "calendar",
    title: "Time for a tune-up",
    text: "Two visits a year and member discounts with our plan.",
    linkText: "Compare the plan",
    link: "#plan",
  },
  {
    icon: "tag",
    title: "Replace or upgrade",
    text: "Free estimates on new installs, with financing available.",
    linkText: "Get a free estimate",
    link: "#contact",
    message: "I'd like a free estimate on a new system.",
  },
  {
    icon: "building",
    title: "Help for my business",
    text: "Installs, repairs and maintenance for commercial buildings.",
    linkText: "Commercial HVAC",
    link: "#commercial",
  },
];

// ---------- Service tabs ----------
export const serviceTabs = [
  {
    id: "cool",
    label: "Cooling",
    title: "Cool, quiet summers.",
    text: "Texas heat doesn't wait, and neither do we. From quick AC repairs to complete system replacements, our certified techs get you comfortable again — with honest options, not pressure.",
    pills: ["AC repair", "New installations", "Seasonal tune-ups", "Free second opinion"],
    buttonText: "Book cooling service",
    buttonLink: "#contact",
    image: acImage,
    imageAlt: "Trane air conditioner installed by K&R",
  },
  {
    id: "heat",
    label: "Heating",
    title: "Warm, safe winters.",
    text: "Furnaces, heat pumps and air handlers — repaired, replaced and tuned up with full safety checks, so your home stays cozy when the Hill Country nights turn cold.",
    pills: ["Furnaces", "Heat pumps", "Air handlers", "Combustion checks"],
    buttonText: "Book heating service",
    buttonLink: "#contact",
    image: furnaceImage,
    imageAlt: "Trane gas furnace",
  },
  {
    id: "duct",
    label: "Ductless",
    title: "Comfort, room by room.",
    text: "Ductless mini-splits deliver targeted heating and cooling without ductwork — perfect for additions, workshops and that one room that never feels right. We're a Ductless Preferred Pro.",
    pills: ["Mini-splits", "Multi-zone", "No ductwork needed", "Energy efficient"],
    buttonText: "Ask about ductless",
    buttonLink: "#contact",
    image: ductlessImage,
    imageAlt: "Ductless mini-split unit on a wall",
  },
  {
    id: "comm",
    label: "Commercial",
    title: "Keep business running.",
    text: "When HVAC fails at work, we respond quickly so you can carry on as usual. Custom installs, replacements, repairs and maintenance for every kind of business.",
    pills: ["Installation", "Replacements", "Repairs", "Maintenance"],
    buttonText: "Commercial HVAC",
    buttonLink: "#commercial",
    image: commercialImage,
    imageAlt: "Commercial HVAC units on a rooftop",
  },
];

// ---------- Why K&R ----------
export const valueChips = [
  { icon: "tools", text: "All makes & models" },
  { icon: "tag", text: "Free install estimates" },
  { icon: "clock", text: "24/7 emergency service" },
  { icon: "shield", text: "Certified technicians" },
  { icon: "heart", text: "30-day 100% guarantee" },
];

export const badges = [
  { image: badgeTrane, alt: "Trane Comfort Specialist" },
  { image: badgeNate, alt: "NATE certified technicians" },
  { image: badgeDuctless, alt: "Ductless Preferred Pro" },
  { image: badgeGoogle, alt: "Google Reviews" },
];

// ---------- Commercial ----------
export const businessTypes = ["Retail stores", "Restaurants", "Offices", "Warehouses", "Churches", "And more"];

// ---------- Maintenance plan: member vs. no plan ----------
// Each row: what you get, included for plan members?, included without a plan?
export const planRows = [
  { text: "Two tune-ups a year with a 20+ point inspection", member: true, noPlan: false },
  { text: "10% parts & labor discount", member: true, noPlan: false },
  { text: "Discounts on new equipment", member: true, noPlan: false },
  { text: "Priority service", member: true, noPlan: false },
  { text: "One emergency service call per year", member: true, noPlan: false },
  { text: "A 1″ filter at every maintenance check", member: true, noPlan: false },
  { text: "24/7 emergency service", member: true, noPlan: true },
  { text: "30-day 100% satisfaction guarantee", member: true, noPlan: true },
];

// ---------- Reviews ----------
export const reviews = [
  { name: "Stacy F.", text: "Beyond impressed. Thorough, honest and helpful. K&R came in with options and got it running." },
  { name: "Hayden W.", text: "Ben was prompt, polite, and proficient. Got us up and running in a jiffy. Highly recommend." },
  { name: "Shawn C.", text: "K&R is simply the best! Fast, reliable service at a fair price." },
  { name: "Ellysa W.", text: "Reliable & communicative. Reasonably priced and better than the boxed stores locally!" },
  { name: "Lynda A.", text: "They take great care of our air-conditioners and heaters during the annual maintenance checks." },
  { name: "Kuhler", text: "Complete system replacement. Very pleased with the entire process. Very professional and timely." },
];

// ---------- FAQ ----------
export const faqs = [
  { title: "Do you really answer 24/7?", text: "Yes. We're open 24 hours, Monday through Sunday, for heating and cooling emergencies." },
  { title: "Will you work on my brand of system?", text: "We service all makes and models. For new systems, we're a Trane Comfort Specialist and a Ductless Preferred Pro." },
  { title: "What does a tune-up include?", text: "A 20+ point inspection: refrigerant charge, safety controls, coils, voltages, capacitors, gas pressures, drain lines, thermostat calibration, electrical connections, combustion and more." },
  { title: "Can I finance a new system?", text: "Yes — simple, affordable financing with flexible options, competitive rates, monthly payments and a fast application." },
  { title: "Another company said I need a new unit. Can you check?", text: "Absolutely. We offer a free second opinion, and we'll always walk you through your repair and replacement options honestly." },
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
