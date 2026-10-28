import { useEffect, useState } from "react";

// A tiny router that reads the page from the address bar hash.
//
//   index.html#/                    -> "/"
//   index.html#/services/furnaces   -> "/services/furnaces"
//
// Hashes that don't start with "#/" (like "#contact") are normal jump links
// to a section, so they leave the current page alone.
// The hash keeps everything working when the built site is opened from any folder.

function readPath() {
  const hash = window.location.hash;
  if (hash.startsWith("#/")) {
    return hash.slice(1);
  }
  return null;
}

function useRoute() {
  const [path, setPath] = useState(() => readPath() || "/");

  useEffect(() => {
    function handleHashChange() {
      const nextPath = readPath();
      if (nextPath !== null) {
        setPath(nextPath);
        // New page: start at the top (instant, not the smooth section scroll)
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return path;
}

export default useRoute;
