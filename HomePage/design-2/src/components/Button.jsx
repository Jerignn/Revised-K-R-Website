// One button component for the whole site, so every button has a standard size.
//
// Sizes (height):  "sm" = 44px   "md" = 48px (default)   "lg" = 56px
// Variants:        "primary" (rust, default)   "light" (cream)   "dark" (black)
//
// If you pass href, it renders a link (<a>). Otherwise it renders a <button>.
// external={true} opens the link in a new tab.

function Button({ href, size = "md", variant = "primary", type = "button", external = false, onClick, children }) {
  let className = "btn btn--" + size;
  if (variant !== "primary") {
    className = className + " btn--" + variant;
  }

  if (href && external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
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
