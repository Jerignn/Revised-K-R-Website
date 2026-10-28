// Small building blocks shared by the sections, so the same look
// is written once: the kicker label, the section heading, and common class lists.

// Vertical padding for a full section
export const section = "py-[clamp(72px,9vw,112px)]";

// Intro paragraph under a headline
export const lede = "max-w-[56ch] text-lg text-soft";

// Small print under offers and financing
export const fine = "mt-5 text-sm text-soft";

// A white bordered card
export const card = "rounded-2xl border border-line bg-white";

// Lift a card on hover
export const lift = "transition duration-250 ease-soft hover:-translate-y-1 hover:border-transparent hover:shadow-lift";

// The small blue uppercase label above headlines.
// light: true on navy backgrounds
export function Kicker({ children, light = false, className = "" }) {
  return (
    <span className={"mb-3.5 inline-block text-[13px]/none font-bold tracking-[0.08em] uppercase " + (light ? "text-sky " : "text-blue ") + className}>
      {children}
    </span>
  );
}

// Section heading: kicker and headline, with an optional intro on the right.
// center: true to centre it above the content
function Head({ kicker, text, center = false, children }) {
  return (
    <div
      className={"mb-12 flex flex-wrap items-end gap-x-12 gap-y-5 " + (center ? "justify-center text-center" : "justify-between")}
      data-reveal="1"
    >
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className={"max-w-[20ch] " + (center ? "mx-auto" : "")}>{children}</h2>
      </div>
      {text && <p className={lede + " max-w-[44ch]"}>{text}</p>}
    </div>
  );
}

export default Head;
