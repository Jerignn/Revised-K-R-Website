// One button component for the whole site, so every button has a standard size.
//
// Sizes (height):  "sm" = 44px   "md" = 48px (default)   "lg" = 56px
// Variants:        "primary" (rust, default)   "light" (white)   "dark" (navy)   "outline"
// 44px is the minimum touch target size recommended by WCAG and Apple.
//
// If you pass href, it renders a link (<a>). Otherwise it renders a <button>.
// external={true} opens the link in a new tab. className adds extra classes.

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[10px] border border-transparent font-semibold no-underline transition duration-200 hover:-translate-y-px active:translate-y-0 [&_svg]:size-4 [&_svg]:transition-transform hover:[&_svg]:translate-x-[3px]";

const sizes = {
  sm: "min-h-11 px-[18px] text-sm",
  md: "min-h-12 px-[22px] text-[15px]",
  lg: "min-h-14 px-7 text-base",
};

const variants = {
  primary: "bg-rust text-white hover:bg-rust-hi hover:shadow-[0_6px_16px_rgb(186_68_38/0.28)]",
  light: "border-line bg-white text-navy hover:bg-surface hover:shadow-card",
  dark: "bg-navy text-white hover:bg-navy-2 hover:shadow-[0_6px_16px_rgb(16_38_61/0.28)]",
  outline: "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
};

function Button({ href, size = "md", variant = "primary", type = "button", external = false, className = "", onClick, children }) {
  const classes = base + " " + sizes[size] + " " + variants[variant] + " " + className;

  if (href && external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

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
