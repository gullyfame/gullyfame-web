/**
 * Navbar scroll-spy: highlights the menu item for the section on screen.
 *
 * Every header link marked [data-nav] that points to a section on this page
 * ("/#battles") is tracked. While scrolling, the section that crosses the
 * "reading line" (about a third of the way down the screen) becomes active
 * and its links get data-active="true" + aria-current="location"; styling
 * lives in globals.css (.gf-nav-link). Above the first tracked section the
 * link to the page itself ("Home") is active. Bands without a menu item, such
 * as the perks strip or the closing call to action, keep the item above them.
 */

/** Where the reading line sits, as a share of the viewport height. */
const READING_LINE = 0.35;

export function initScrollSpy(): () => void {
  const here = window.location;
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a[data-nav]"),
  );
  if (links.length === 0) return () => {};

  // Group links by what they point to: "" = this page's top, "faq" = #faq.
  const byKey = new Map<string, HTMLAnchorElement[]>();
  const sections: { key: string; el: HTMLElement }[] = [];

  for (const link of links) {
    const url = new URL(link.href, here.href);
    if (url.origin !== here.origin || url.pathname !== here.pathname) continue;
    const key = url.hash ? decodeURIComponent(url.hash.slice(1)) : "";
    if (key) {
      const el = document.getElementById(key);
      if (!el) continue;
      if (!byKey.has(key)) sections.push({ key, el });
    }
    byKey.set(key, [...(byKey.get(key) ?? []), link]);
  }
  if (sections.length === 0) return () => {};

  let current: string | null | undefined; // undefined = not computed yet

  const setActive = (key: string | null) => {
    if (key === current) return;
    current = key;
    for (const [k, group] of byKey) {
      const on = k === key;
      for (const link of group) {
        link.dataset.active = String(on);
        if (on) link.setAttribute("aria-current", k ? "location" : "page");
        else link.removeAttribute("aria-current");
      }
    }
  };

  const update = () => {
    const line = window.innerHeight * READING_LINE;
    // The lowest section whose top has passed the line wins, so a band with
    // no menu item of its own keeps the section above it highlighted.
    let active: string | null = byKey.has("") ? "" : null;
    let bestTop = -Infinity;
    for (const { key, el } of sections) {
      const top = el.getBoundingClientRect().top;
      if (top <= line && top > bestTop) {
        bestTop = top;
        active = key;
      }
    }
    setActive(active);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}
