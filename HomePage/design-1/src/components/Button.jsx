// One button component for the whole site, so every button has a standard size.
//
// Sizes (height):  "sm" = 44px   "md" = 48px (default)   "lg" = 56px
// Variants:        "primary" (rust, default)   "ghost" (outline)
//
// If you pass href, it renders a link (<a>). Otherwise it renders a <button>.

function Button({ href, size = "md", variant = "primary", type = "button", onClick, children }) {
  let className = "btn btn--" + size;
  if (variant === "ghost") {
    className = className + " btn--ghost";
  }

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
