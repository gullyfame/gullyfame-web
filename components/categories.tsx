import Link from "next/link";
import { categoryIcons } from "@/components/icons";
import { categories } from "@/lib/content";

export function Categories() {
  return (
    <section id="categories" className="bg-brown border-ink border-t-[3px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            data-reveal="left"
            className="gf-reveal font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
            What&apos;s your
            <br />
            <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
              thing?
            </span>
          </h2>
          <Link
            href="#battles"
            data-reveal="right"
            className="gf-reveal font-display border-orange border-b-2 pb-1 text-base font-bold text-white"
          >
            View all categories →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Link
                key={category.name}
                href="#battles"
                data-reveal="zoom"
                className={`gf-lift gf-reveal flex flex-col gap-10 rounded-[28px] border-2 p-7 ${
                  category.featured
                    ? "bg-orange border-orange text-ink -rotate-2 shadow-[6px_6px_0_var(--color-ink)]"
                    : "bg-page border-surface-2 text-white"
                }`}
              >
                <span
                  className={`flex h-23 w-23 items-center justify-center rounded-full ${
                    category.featured ? "bg-ink text-orange" : "bg-surface-2 text-orange"
                  }`}
                >
                  <Icon className="h-11 w-11" />
                </span>
                <span className="flex items-end justify-between gap-2">
                  <span className="font-display text-[34px] leading-none font-black tracking-tight">
                    {category.name}
                  </span>
                  <span
                    className={`font-display text-[13px] ${
                      category.featured ? "font-bold" : "text-muted"
                    }`}
                  >
                    {category.note}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
