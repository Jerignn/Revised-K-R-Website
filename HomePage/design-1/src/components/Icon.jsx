// Small SVG icons used across the page.
// Usage: <Icon name="arrow" />   or   <Icon name="phone" size={16} />

function Icon({ name, size }) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
      </svg>
    );
  }

  // All the other icons are outlines
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {name === "arrow" && <path d="M5 12h14M13 6l6 6-6 6" />}
      {name === "plus" && <path d="M12 5v14M5 12h14" />}
      {name === "chevron" && <path d="M6 9l6 6 6-6" />}
      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}
      {name === "pin" && (
        <>
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </>
      )}
    </svg>
  );
}

export default Icon;
