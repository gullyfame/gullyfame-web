import Link from "next/link";
import { battles } from "@/lib/content";

export function Battles() {
  return (
    <section id="battles" className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 pt-28 pb-20">
      <div className="gf-reveal flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
          Battles
          <br />
          <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
            trending now
          </span>
        </h2>
        <p className="text-muted basis-[360px] text-[17px] leading-relaxed">
          Fresh city battles drop every week. Jump in before entries close.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {battles.map((battle, i) => (
          <article
            key={battle.highlight}
            className={`bg-surface gf-lift gf-reveal flex flex-col overflow-hidden rounded-[28px] border-2 ${
              i === 0
                ? "border-orange shadow-[8px_8px_0_var(--color-orange)]"
                : "border-surface-2"
            }`}
          >
            <div
              className="flex h-60 flex-col justify-between p-6"
              style={{
                background: `radial-gradient(circle at 50% 110%, ${battle.glow}, #3c2610 60%, #2b1a0c)`,
              }}
            >
              <div className="flex justify-between">
                <span
                  className={`font-display rounded-lg px-3 py-1.5 text-[13px] font-black ${
                    i === 0 ? "bg-orange text-ink" : "text-ink bg-white"
                  }`}
                >
                  {battle.rank}
                </span>
                {battle.live && (
                  <span className="bg-page text-live font-display rounded-full px-3 py-1.5 text-xs font-bold">
                    ● LIVE
                  </span>
                )}
              </div>
              <h3 className="font-display text-[46px] leading-[0.92] font-black tracking-[-0.03em] uppercase">
                {battle.title}
                <br />
                <span className="text-gold">{battle.highlight}</span>
              </h3>
            </div>

            <div className="flex items-center justify-between gap-3 px-6 py-5.5">
              <span className="font-display text-muted text-sm">
                {battle.meta}
              </span>
              <Link
                href="#download"
                className="bg-orange text-ink font-display inline-flex min-h-[44px] items-center rounded-full px-4.5 py-3 text-sm font-extrabold"
              >
                Participate
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
