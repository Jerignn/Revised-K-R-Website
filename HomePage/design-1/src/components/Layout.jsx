import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import DesignSwitcher from "./DesignSwitcher.jsx";

// The parts every page shares: top bar, header, footer and the design switcher.
// The page itself goes in the middle (children).
function Layout({ path, children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopBar />
      <Header path={path} />
      <main id="main">{children}</main>
      <Footer />
      <DesignSwitcher />
    </>
  );
}

export default Layout;
