// One button component for the whole site, so every button has a standard size.
//
// Sizes (height):  "sm" = 44px   "md" = 48px (default)   "lg" = 56px
// Variants:        "primary" (ink, default)   "ghost" (outline)
// 44px is the minimum touch target size recommended by WCAG and Apple.
//
// If you pass href, it renders a link (<a>). Otherwise it renders a <button>.
// className adds extra classes (e.g. "w-full").

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 border border-ink font-semibold no-underline transition-colors active:translate-y-px [&_svg]:size-4 [&_svg]:transition-transform hover:[&_svg]:translate-x-[3px]";

const sizes = {
  sm: "min-h-11 px-[18px] text-base",
  md: "min-h-12 px-6 text-[17px]",
  lg: "min-h-14 px-[30px] text-lg",
};

const variants = {
  primary: "bg-ink text-paper hover:border-rust hover:bg-rust hover:text-white",
  ghost: "bg-transparent text-ink hover:bg-ink hover:text-paper hover:[&_svg]:translate-x-0",
};

function Button({ href, size = "md", variant = "primary", type = "button", className = "", onClick, children }) {
  const classes = base + " " + sizes[size] + " " + variants[variant] + " " + className;

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
