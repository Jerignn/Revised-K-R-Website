import { useEffect } from "react";

// Fades in every element that has a data-reveal attribute
// when it scrolls into view.
// Pass the current page path so it runs again after changing page.
function useScrollReveal(path) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    // Old browsers: just show everything
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    // Stop watching when the page is removed
    return () => observer.disconnect();
  }, [path]);
}

export default useScrollReveal;
