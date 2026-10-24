"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  LuCpu,
  LuDumbbell,
  LuGamepad2,
  LuGraduationCap,
  LuLaugh,
  LuMusic,
  LuPalette,
  LuPersonStanding,
  LuPlane,
  LuShirt,
  LuSoup,
  LuSparkles,
} from "react-icons/lu";
import type { categories } from "@/lib/content";

type Category = (typeof categories)[number];

const icons: Record<Category["icon"], IconType> = {
  music: LuMusic,
  dance: LuPersonStanding,
  comedy: LuLaugh,
  food: LuSoup,
  fashion: LuShirt,
  lifestyle: LuSparkles,
  travel: LuPlane,
  gaming: LuGamepad2,
  fitness: LuDumbbell,
  tech: LuCpu,
  college: LuGraduationCap,
  art: LuPalette,
};

/** Pixels per second. Halved when the visitor's OS asks for reduced motion. */
const SPEED = 45;

function Card({ category }: { category: Category }) {
  const Icon = icons[category.icon];
  const featured = category.featured;
  return (
    <article
      className={`mr-4 flex w-[248px] shrink-0 flex-col gap-3 rounded-[22px] border-2 p-5 transition-colors duration-300 ${
        featured
          ? "bg-orange border-orange text-ink"
          : "bg-page border-surface-2 hover:border-orange text-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
            featured ? "bg-ink text-orange" : "bg-surface-2 text-orange"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span
          className={`font-display rounded-full px-2.5 py-1 text-[11px] font-bold whitespace-nowrap ${
            featured ? "bg-ink/10 text-ink" : "bg-surface-2 text-muted"
          }`}
        >
          {category.note}
        </span>
      </div>

      <h3 className="font-display truncate text-[20px] leading-tight font-black tracking-tight">
        {category.name}
      </h3>

      <p
        className={`text-[13px] leading-snug ${
          featured ? "text-ink/75" : "text-muted"
        }`}
      >
        {category.description}
      </p>
    </article>
  );
}

/** One full set of cards. The copy exists only to close the loop. */
function Strip({ items, copy }: { items: readonly Category[]; copy?: boolean }) {
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
export function CategoriesCarousel({ items }: { items: readonly Category[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

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
      if (!hovering && onScreen && loopWidth > 0) {
        const speed = reduced.matches ? SPEED / 2 : SPEED;
        offset = (offset + (dt * speed) / 1000) % loopWidth;
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
  );
}
