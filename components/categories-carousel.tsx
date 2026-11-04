"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  LuArrowLeft,
  LuArrowRight,
  LuLaugh,
  LuMusic,
  LuPersonStanding,
  LuShirt,
  LuSoup,
} from "react-icons/lu";
import type { categories } from "@/lib/content";

type Category = (typeof categories)[number];

const icons: Record<Category["icon"], IconType> = {
  music: LuMusic,
  dance: LuPersonStanding,
  comedy: LuLaugh,
  food: LuSoup,
  fashion: LuShirt,
};

/** Pixels per second. Halved when the visitor's OS asks for reduced motion. */
const SPEED = 45;

/** One card (248px) plus its 16px margin: how far an arrow click moves. */
const STEP = 264;

function Card({ category }: { category: Category }) {
  const Icon = icons[category.icon];
  return (
    <article className="group bg-page border-surface-2 hover:bg-orange hover:border-orange mr-4 flex w-[248px] shrink-0 flex-col gap-3 rounded-[22px] border-2 p-5 text-white transition-colors duration-300 hover:text-ink">
      <div className="flex items-center justify-between gap-3">
        <span className="bg-surface-2 text-orange group-hover:bg-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-display bg-surface-2 text-muted group-hover:bg-ink/10 group-hover:text-ink rounded-full px-2.5 py-1 text-[11px] font-bold whitespace-nowrap transition-colors duration-300">
          {category.note}
        </span>
      </div>

      <h3 className="font-display truncate text-[20px] leading-tight font-black tracking-tight">
        {category.name}
      </h3>

      <p className="text-muted group-hover:text-ink/75 text-[13px] leading-snug transition-colors duration-300">
        {category.description}
      </p>
    </article>
  );
}

/** One full set of cards. The copy exists only to close the loop. */
function Strip({
  items,
  copy,
}: {
  items: readonly Category[];
  copy?: boolean;
}) {
  return (
    <div className="flex shrink-0" aria-hidden={copy || undefined}>
      {items.map((category) => (
        <Card key={category.name} category={category} />
      ))}
    </div>
  );
}

/**
 * Auto-running infinite carousel. Two identical strips sit side by side and
 * the track slides left; once it has moved one strip's width it wraps back by
 * exactly that much, so the loop has no seam. Runs from a requestAnimationFrame
 * loop rather than a CSS animation, pauses while a mouse is over it, and idles
 * while off screen or in a background tab.
 */
export function CategoriesCarousel({
  items,
  heading,
}: {
  items: readonly Category[];
  heading: ReactNode;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  /** Pixels an arrow click still has to travel; the frame loop eases it out. */
  const nudge = useRef(0);

  useEffect(() => {
    const vp = viewport.current;
    const el = track.current;
    if (!vp || !el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let loopWidth = el.scrollWidth / 2;
    let offset = 0;
    let last = 0;
    let frame = 0;
    let hovering = false;
    let onScreen = true;

    const tick = (now: number) => {
      // Cap the step so a dropped frame or returning tab doesn't jump.
      const dt = last ? Math.min(now - last, 50) : 0;
      last = now;
      if (loopWidth > 0) {
        const speed = reduced.matches ? SPEED / 2 : SPEED;
        let delta = !hovering && onScreen ? (dt * speed) / 1000 : 0;
        if (Math.abs(nudge.current) > 0.5) {
          const step = nudge.current * Math.min(1, dt / 120);
          nudge.current -= step;
          delta += step;
        } else {
          nudge.current = 0;
        }
        offset = (((offset + delta) % loopWidth) + loopWidth) % loopWidth;
        el.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);

    const resize = new ResizeObserver(() => {
      loopWidth = el.scrollWidth / 2;
    });
    resize.observe(el);

    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    visibility.observe(vp);

    // Mouse only: on touch screens a tap must not stop the loop.
    const enter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovering = true;
    };
    const leave = () => {
      hovering = false;
    };
    vp.addEventListener("pointerenter", enter);
    vp.addEventListener("pointerleave", leave);

    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      visibility.disconnect();
      vp.removeEventListener("pointerenter", enter);
      vp.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-end justify-between gap-6">
        {heading}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            aria-label="Previous categories"
            onClick={() => (nudge.current -= STEP)}
            className="border-surface-2 hover:bg-orange hover:border-orange hover:text-ink active:bg-orange active:border-orange active:text-ink focus-visible:bg-orange focus-visible:border-orange focus-visible:text-ink flex h-12 w-12 items-center justify-center rounded-full border-2 text-white transition-colors"
          >
            <LuArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next categories"
            onClick={() => (nudge.current += STEP)}
            className="border-surface-2 hover:bg-orange hover:border-orange hover:text-ink active:bg-orange active:border-orange active:text-ink focus-visible:bg-orange focus-visible:border-orange focus-visible:text-ink flex h-12 w-12 items-center justify-center rounded-full border-2 text-white transition-colors"
          >
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={viewport}
        role="group"
        aria-label="Categories"
        className="-mx-6 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div ref={track} className="flex w-max will-change-transform">
          <Strip items={items} />
          <Strip items={items} copy />
        </div>
      </div>
    </div>
  );
}
