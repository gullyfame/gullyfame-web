/**
 * Scroll effects for the whole site, kept free of React so it can be tested
 * on its own. Called once per page by <SiteMotion />.
 *
 * 1. Header: sets html[data-scrolled] once the page leaves the top, which
 *    fades in a light tint and blur behind the navbar (styled in globals.css).
 * 2. Reveal: elements marked .gf-reveal, plus every block of .gf-prose, slide
 *    and fade into place as they scroll into view. The direction comes from
 *    data-reveal="left | right | up | zoom".
 *
 * Nothing is hidden until this runs, so content is always visible without
 * JavaScript.
 */

/**
 * Where on screen an element has to reach before it animates in, as a share
 * of the viewport height from the top. 0.8 = once it is a fifth of the way up
 * from the bottom edge, so the visitor is looking at it when it moves.
 */
const TRIGGER_LINE = 0.8;

/** Delay between items that arrive together (a row of cards), in ms. */
const STAGGER_MS = 140;
const MAX_STAGGER_STEPS = 5;

export function initMotion(): () => void {
  const root = document.documentElement;
  const supportsObserver = "IntersectionObserver" in window;

  // ---- Reveal setup -----------------------------------------------------
  const targets = supportsObserver
    ? Array.from(
        document.querySelectorAll<HTMLElement>(".gf-reveal, .gf-prose > *"),
      )
    : [];

  // Hide everything that has not yet reached the trigger line, so it animates
  // when the visitor scrolls to it instead of already being there.
  const line = window.innerHeight * TRIGGER_LINE;
  const remaining = new Set(
    targets.filter((el) => el.getBoundingClientRect().top > line),
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
      if (event.target !== el || event.propertyName !== "opacity") return;
      el.removeEventListener("transitionend", onEnd);
      settle(el);
    };
    el.addEventListener("transitionend", onEnd);
    const timer = window.setTimeout(() => {
      el.removeEventListener("transitionend", onEnd);
      settle(el);
      timers.delete(timer);
    }, 2400 + delayMs);
    timers.add(timer);
  };

  if (supportsObserver && remaining.size > 0) {
    observer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // Siblings arriving together cascade in rather than all at once.
          reveal(
            entry.target as HTMLElement,
            Math.min(batch, MAX_STAGGER_STEPS) * STAGGER_MS,
          );
          batch += 1;
        }
      },
      {
        // The observed area stops at the trigger line, not the screen's edge.
        rootMargin: `0px 0px -${Math.round((1 - TRIGGER_LINE) * 100)}% 0px`,
        threshold: 0,
      },
    );
    remaining.forEach((el) => observer?.observe(el));
  }

  // ---- Scroll: header state, skipped content, end of page ---------------
  let ticking = false;
  const onFrame = () => {
    ticking = false;

    const scrolled = window.scrollY > 8;
    if ((root.dataset.scrolled === "true") !== scrolled) {
      root.dataset.scrolled = String(scrolled);
    }

    if (remaining.size === 0) return;

    // A fast jump can carry elements past the trigger line without the
    // observer ever seeing them; reveal anything already above the screen.
    for (const el of remaining) {
      if (el.getBoundingClientRect().bottom < 0) reveal(el, 0);
    }

    // At the very bottom, the last items may never climb to the trigger line
    // because the page cannot scroll further. Reveal them now.
    const atBottom =
      window.scrollY + window.innerHeight >= root.scrollHeight - 4;
    if (atBottom) {
      let step = 0;
      for (const el of remaining) {
        reveal(el, Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS);
        step += 1;
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
