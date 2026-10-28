import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import DesignSwitcher from "./DesignSwitcher.jsx";

// The parts every page shares: header, footer and the design switcher.
// The page itself goes in the middle (children).
function Layout({ path, children }) {
  return (
    <>
      <a className="sr-only z-[300] rounded-lg bg-navy px-3.5 py-2.5 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2" href="#main">
        Skip to content
      </a>
      <Header path={path} />
      <main id="main">{children}</main>
      <Footer />
      <DesignSwitcher />
    </>
  );
}

export default Layout;
