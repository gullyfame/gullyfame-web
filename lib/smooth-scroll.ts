/**
 * Smooth scrolling for the whole site — no dependencies.
 *
 * 1. Link glide (every device): clicking a link to a section on the same page
 *    — the navbar, "Get the app", footer links — glides
 *    there with an ease-in-out curve instead of jumping. Clicking a link to the
 *    current page with no #section (e.g. Home while on the home page) glides
 *    back to the top. Links to other pages are left to Next.js.
 *
 * 2. Wheel glide (mouse and trackpad only): each wheel notch moves a target
 *    position and the page eases toward it, so scrolling slides instead of
 *    stepping. Phones keep their native momentum scrolling.
 *
 * Pressing a key, a mouse button or touching the screen stops any glide at
 * once, so the browser's own scrolling (keys, scrollbar, touch) always wins.
 * Anything inside an element that scrolls itself, or marked
 * [data-native-scroll], is left alone.
 */

/** Wheel glide: share of the remaining distance covered per 60 fps frame. */
const WHEEL_SMOOTHNESS = 0.1;
const WHEEL_SMOOTHNESS_REDUCED = 0.22;

/** Link glide duration: grows with distance, within these bounds (ms). */
const LINK_MIN_MS = 900;
const LINK_MAX_MS = 1800;
const LINK_MS_PER_PX = 0.32;
/** Reduced-motion visitors get a slightly shorter glide. */
const LINK_REDUCED_FACTOR = 0.85;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function canScrollItself(start: EventTarget | null, deltaY: number): boolean {
  let el = start instanceof Element ? start : null;
  while (el && el !== document.body && el !== document.documentElement) {
    if (el instanceof HTMLElement) {
      if (el.dataset.nativeScroll !== undefined) return true;
      const { overflowY } = getComputedStyle(el);
      const scrolls =
        (overflowY === "auto" || overflowY === "scroll") &&
        el.scrollHeight > el.clientHeight;
      if (scrolls) {
        const atTop = el.scrollTop <= 0;
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
      }
    }
    el = el.parentElement;
  }
  return false;
}

export function initSmoothScroll(): () => void {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
  const clampY = (y: number) => Math.max(0, Math.min(maxScroll(), y));
  const jumpTo = (y: number) => window.scrollTo({ top: y, behavior: "instant" });

  // ---- Shared state: only one glide runs at a time ----------------------
  let frame = 0;
  let mode: "idle" | "wheel" | "link" = "idle";

  // wheel glide
  let target = window.scrollY;
  let current = window.scrollY;
  let lastSet = window.scrollY;
  let lastTime = 0;

  const stop = () => {
    window.cancelAnimationFrame(frame);
    mode = "idle";
    target = current = lastSet = window.scrollY;
  };

  // ---- 1. Link glide ------------------------------------------------------
  const glideTo = (destination: number, onDone?: () => void) => {
    stop();
    const from = window.scrollY;
    const to = clampY(destination);
    const distance = Math.abs(to - from);
    if (distance < 2) {
      onDone?.();
      return;
    }

    let duration = Math.min(
      LINK_MAX_MS,
      Math.max(LINK_MIN_MS, 300 + distance * LINK_MS_PER_PX),
    );
    if (reduced.matches) duration *= LINK_REDUCED_FACTOR;

    mode = "link";
    const start = performance.now();
    const tick = (now: number) => {
      if (mode !== "link") return;
      const t = Math.min(1, (now - start) / duration);
      jumpTo(from + (to - from) * easeInOutCubic(t));
      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        stop();
        onDone?.();
      }
    };
    frame = window.requestAnimationFrame(tick);
  };

  const scrollPaddingTop = () =>
    parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;

  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link =
      event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href]")
        : null;
    if (!link || link.hasAttribute("download")) return;
    if (link.target && link.target !== "_self") return;

    const url = new URL(link.href, window.location.href);
    const here = window.location;
    // Other pages, other sites and query changes belong to Next.js.
    if (url.origin !== here.origin || url.pathname !== here.pathname) return;
    if (url.search !== here.search) return;

    let destination: number;
    let section: HTMLElement | null = null;

    if (url.hash && url.hash !== "#") {
      section = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!section) return;
      destination =
        section.getBoundingClientRect().top + window.scrollY - scrollPaddingTop();
    } else {
      destination = 0; // same page, no section: back to the top
    }

    // Take the click from Next.js so it does not jump there first.
    event.preventDefault();
    event.stopPropagation();

    // Close the mobile menu if the link was inside it.
    link.closest("details.gf-menu")?.removeAttribute("open");

    // Keep the address bar (and the back button) in step with the section.
    const clean = section ? `${url.pathname}${url.hash}` : url.pathname;
    if (new URL(clean, here.href).href !== here.href) {
      window.history.pushState(window.history.state, "", clean);
    }

    glideTo(destination, () => {
      // Move keyboard and screen-reader focus to where the page now is.
      if (!section) return;
      if (!section.hasAttribute("tabindex")) section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    });
  };

  // ---- 2. Wheel glide -----------------------------------------------------
  const wheelStep = (now: number) => {
    if (mode !== "wheel") return;
    // Something else moved the page: hand over instead of fighting it.
    if (Math.abs(window.scrollY - lastSet) > 2) {
      stop();
      return;
    }

    const dt = lastTime ? Math.min(now - lastTime, 64) : 16.7;
    lastTime = now;
    const base = reduced.matches ? WHEEL_SMOOTHNESS_REDUCED : WHEEL_SMOOTHNESS;
    const k = 1 - Math.pow(1 - base, dt / 16.7); // same feel at 60 and 144 Hz
    current += (target - current) * k;
    if (Math.abs(target - current) < 0.5) current = target;

    jumpTo(current);
    lastSet = window.scrollY;

    if (current === target) stop();
    else frame = window.requestAnimationFrame(wheelStep);
  };

  const onWheel = (event: WheelEvent) => {
    if (event.defaultPrevented || event.ctrlKey || event.shiftKey) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (canScrollItself(event.target, event.deltaY)) return;

    let delta = event.deltaY;
    if (event.deltaMode === 1) delta *= 16; // lines
    else if (event.deltaMode === 2) delta *= window.innerHeight; // pages

    event.preventDefault();

    if (mode !== "wheel") {
      stop(); // also cancels a link glide in progress
      mode = "wheel";
      lastTime = 0;
      frame = window.requestAnimationFrame(wheelStep);
    }
    target = clampY(target + delta);
  };

  // ---- Hand-over and wiring -----------------------------------------------
  const interrupt = () => {
    if (mode !== "idle") stop();
  };
  const onResize = () => {
    target = clampY(target);
  };

  window.addEventListener("click", onClick, true); // capture: before Next.js
  window.addEventListener("keydown", interrupt);
  window.addEventListener("mousedown", interrupt);
  window.addEventListener("touchstart", interrupt, { passive: true });
  window.addEventListener("resize", onResize);
  const wheelOn = finePointer.matches;
  if (wheelOn) window.addEventListener("wheel", onWheel, { passive: false });

  return () => {
    window.cancelAnimationFrame(frame);
    mode = "idle";
    window.removeEventListener("click", onClick, true);
    window.removeEventListener("keydown", interrupt);
    window.removeEventListener("mousedown", interrupt);
    window.removeEventListener("touchstart", interrupt);
    window.removeEventListener("resize", onResize);
    if (wheelOn) window.removeEventListener("wheel", onWheel);
  };
}
