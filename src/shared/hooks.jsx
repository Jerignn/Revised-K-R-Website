import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

// Mobile menu + dropdown state shared by both designs' headers.
export function useNav() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const [dd, setDd] = useState(null);
  useEffect(() => { setMenu(false); setDd(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && (setMenu(false), setDd(null));
    const onClick = (e) => !e.target.closest('[data-dd]') && setDd(null);
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick); };
  }, [menu]);
  return { menu, setMenu, dd, toggleDd: (k) => setDd((cur) => (cur === k ? null : k)), pathname };
}

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | K&R Heating & Cooling` : 'K&R Heating & Cooling | Kerrville, TX HVAC Services';
  }, [title]);
}

// Scrolls to the top (or to #hash) on navigation and fades in `.reveal` elements as they enter the viewport.
export function PageEffects() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) return void requestAnimationFrame(() => el.scrollIntoView());
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, search]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          io.unobserve(en.target);
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    const observe = () =>
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 70}ms`;
        io.observe(el);
      });
    observe();
    // Catch elements rendered after mount (e.g. accordion content, form success states).
    const mo = new MutationObserver(observe);
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);

  return null;
}
