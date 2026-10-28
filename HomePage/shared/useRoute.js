import { useEffect, useState } from "react";

// A tiny router that reads the page from the address bar path.
// base is the design's folder, e.g. "/design-1/":
//
//   /design-1/                    -> "/"
//   /design-1/services/furnaces   -> "/services/furnaces"
//
// Page links are written as "#/services/furnaces" (see shared/pages.js).
// Clicking one swaps the page without reloading and shows the clean address.
// Hashes that don't start with "#/" (like "#contact") are normal jump links
// to a section, so they leave the current page alone.
// Old addresses (index.html, index.html#/about) are tidied up on load.

function readPath(base) {
  // Old style link, e.g. opened in a new tab: #/about
  const hash = window.location.hash;
  if (hash.startsWith("#/")) {
    return hash.slice(1);
  }

  let path = "/" + window.location.pathname.slice(base.length);
  path = path.replace(/\/index\.html$/, "/");
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

function addressFor(base, path) {
  return base + path.slice(1);
}

function useRoute(base) {
  const [path, setPath] = useState(() => readPath(base));

  useEffect(() => {
    // Show the clean address if the page was opened with an old one
    const { pathname, hash } = window.location;
    const sectionHash = hash.startsWith("#/") ? "" : hash;
    const cleanAddress = addressFor(base, readPath(base)) + sectionHash;
    if (pathname + hash !== cleanAddress) {
      window.history.replaceState(null, "", cleanAddress);
    }

    function goTo(nextPath) {
      const address = addressFor(base, nextPath);
      if (window.location.pathname !== address || window.location.hash) {
        window.history.pushState(null, "", address);
      }
      setPath(nextPath);
      // New page: start at the top (instant, not the smooth section scroll)
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    function handleClick(event) {
      // Let the browser handle new-tab clicks (ctrl, cmd, middle button...)
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = event.target.closest("a");
      const href = link && link.getAttribute("href");
      if (href && href.startsWith("#/")) {
        event.preventDefault();
        goTo(href.slice(1));
      }
    }

    function handleBack() {
      setPath(readPath(base));
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handleBack);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handleBack);
    };
  }, [base]);

  return path;
}

export default useRoute;
