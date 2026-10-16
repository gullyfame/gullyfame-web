/**
 * Scroll effects for the whole site, kept free of React so it can be tested
 * on its own. Called once per page by <SiteMotion />.
 *
 * 1. Header: sets html[data-scrolled] once the page leaves the top, which
 *    fades in a light tint and blur behind the navbar (styled in globals.css).
 * 2. Reveal: elements marked .gf-reveal, plus every block of .gf-prose, fade
 *    and rise into place as they scroll into view.
 *
 * Nothing is hidden until this runs, so content is always visible without
 * JavaScript, and only elements below the fold are ever hidden — nothing on
 * screen flickers on load.
 */
export function initMotion(): () => void {
  const root = document.documentElement;
  const supportsObserver = "IntersectionObserver" in window;

  // ---- Reveal setup -----------------------------------------------------
  const targets = supportsObserver
    ? Array.from(
        document.querySelectorAll<HTMLElement>(".gf-reveal, .gf-prose > *"),
      )
    : [];

  // Only hide what the visitor cannot see yet.
  const fold = window.innerHeight * 0.92;
  const remaining = new Set(
    targets.filter((el) => el.getBoundingClientRect().top > fold),
  );
  remaining.forEach((el) => el.classList.add("gf-reveal-pending"));

  const timers = new Set<number>();

  const settle = (el: HTMLElement) => {
    el.classList.remove("gf-reveal-pending", "gf-reveal-in");
    el.style.removeProperty("transition-delay");
  };

  let observer: IntersectionObserver | null = null;

  const reveal = (el: HTMLElement, delayMs: number) => {
    if (!remaining.delete(el)) return; // already revealed
    observer?.unobserve(el);

    el.style.transitionDelay = `${delayMs}ms`;
    el.classList.add("gf-reveal-in");
    el.classList.remove("gf-reveal-pending");

    // Hand the element back to its own hover transitions afterwards.
    const onEnd = (event: TransitionEvent) => {
      if (event.target !== el) return;
      el.removeEventListener("transitionend", onEnd);
      settle(el);
    };
    el.addEventListener("transitionend", onEnd);
    const timer = window.setTimeout(() => {
      el.removeEventListener("transitionend", onEnd);
      settle(el);
      timers.delete(timer);
    }, 1800);
    timers.add(timer);
  };

  if (supportsObserver && remaining.size > 0) {
    observer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // Siblings arriving together cascade in rather than all at once.
          reveal(entry.target as HTMLElement, Math.min(batch, 5) * 90);
          batch += 1;
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    remaining.forEach((el) => observer?.observe(el));
  }

  // ---- Scroll: header state + anything a fast jump skipped over --------
  let ticking = false;
  const onFrame = () => {
    ticking = false;

    const scrolled = window.scrollY > 8;
    if ((root.dataset.scrolled === "true") !== scrolled) {
      root.dataset.scrolled = String(scrolled);
    }

    // A jump (End key, an anchor link) can carry elements from below the
    // viewport to above it without them ever intersecting, so the observer
    // never fires. Reveal anything that is now fully above the viewport.
    if (remaining.size > 0) {
      for (const el of remaining) {
        if (el.getBoundingClientRect().bottom < 0) reveal(el, 0);
      }
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onFrame);
    }
  };
  onFrame();
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    observer?.disconnect();
    timers.forEach((t) => window.clearTimeout(t));
    targets.forEach(settle);
  };
}
