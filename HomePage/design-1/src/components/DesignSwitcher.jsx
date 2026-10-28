// Floating bar at the bottom to jump between the two designs
function DesignSwitcher() {
  return (
    <nav className="switcher" aria-label="Design switcher">
      <a href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        <span className="sw-long">All designs</span>
      </a>
      <span className="sw-sep"></span>
      <a href="/design-1/" aria-current="page">
        Design 1
      </a>
      <a href="/design-2/">
        Design 2
      </a>
    </nav>
  );
}

export default DesignSwitcher;
