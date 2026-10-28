// Small SVG icons used across the page.
// Usage: <Icon name="arrow" />   or   <Icon name="shield" size={18} />

function Icon({ name, size }) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.5l4.5 4.5L19 7" />
      </svg>
    );
  }

  if (name === "chevron") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
  }

  // All the other icons are simple outlines
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
      {name === "heart" && <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />}
      {name === "tools" && <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />}
      {name === "calendar" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </>
      )}
      {name === "building" && <path d="M4 21V5l8-3v19M12 8h8v13M8 7v.01M8 11v.01M8 15v.01M16 12v.01M16 16v.01M2 21h20" />}
      {name === "snow" && <path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7M9 4l3 3 3-3M9 20l3-3 3 3" />}
      {name === "flame" && <path d="M12 21c-3.9 0-7-2.8-7-6.6 0-3.1 2-5.2 3.6-7.1.5 1.9 1.5 3.1 2.6 3.7C11 7.6 12.4 4.6 15 3c-.2 3 1.4 4.7 2.6 6.3A7.2 7.2 0 0 1 19 14.4C19 18.2 15.9 21 12 21z" />}
      {name === "fan" && (
        <>
          <circle cx="12" cy="12" r="2" />
          <path d="M12 10c0-4 1-7 4-7 2.5 0 3 3-1 5.5M14 12c4 0 7 1 7 4 0 2.5-3 3-5.5-1M12 14c0 4-1 7-4 7-2.5 0-3-3 1-5.5M10 12c-4 0-7-1-7-4 0-2.5 3-3 5.5 1" />
        </>
      )}
      {name === "tag" && (
        <>
          <path d="M3 12V3h9l9 9-9 9-9-9z" />
          <circle cx="7.5" cy="7.5" r="1.5" />
        </>
      )}
    </svg>
  );
}

export default Icon;
