// Small building blocks shared by the sections, so the same look
// is written once: the mono label, the section heading, and common class lists.

// Vertical padding for a full section
export const section = "py-[clamp(72px,9vw,120px)]";

// Intro paragraph under a headline
export const lede = "max-w-[58ch] text-lg text-ink-soft";

// Small print under offers and financing
export const fine = "mt-[22px] text-sm text-muted";

// A ✓ list with dotted rules between items
export const checks = "mt-5 grid gap-x-6 [&>li]:relative [&>li]:border-b [&>li]:border-dotted [&>li]:border-hair [&>li]:py-[9px] [&>li]:pl-[22px] [&>li]:text-[15px] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:font-semibold [&>li]:before:text-rust [&>li]:before:content-['✓']";

// The small uppercase monospace label above headlines.
// light: true on the dark band, where rust turns peach
export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <span className={"inline-block font-mono text-xs/[1.4] font-medium tracking-[0.12em] uppercase " + (light ? "text-peach " : "text-rust-dk ") + className}>
      {children}
    </span>
  );
}

// Section heading: a heavy rule, the mono label, then the headline.
// side: true when the heading sits in a narrow column beside the content
function SectionHead({ label, text, side = false, className = "", children }) {
  let layout = "mb-10 gap-x-10 gap-y-4 lg:mb-16 lg:grid-cols-[220px_1fr]";
  if (side) {
    layout = "gap-y-4";
  }

  return (
    <div className={"grid content-start items-start border-t-2 border-ink pt-[18px] " + layout + " " + className} data-reveal="1">
      <Eyebrow className={side ? "" : "lg:pt-2.5"}>{label}</Eyebrow>
      <h2>{children}</h2>
      {text && <p className={lede + " m-0 " + (side ? "mt-2.5" : "lg:col-start-2")}>{text}</p>}
    </div>
  );
}

export default SectionHead;
