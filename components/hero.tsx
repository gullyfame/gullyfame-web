import type { CSSProperties } from "react";
import Image from "next/image";
import { CrownIcon } from "@/components/icons";
import { StoreButtons } from "@/components/store-buttons";

export function Hero() {
  return (
    <div className="bg-brown relative overflow-hidden">
      {/* warm glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-30 -right-40 h-180 w-180 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,154,21,0.45), rgba(236,154,21,0) 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-65 -left-50 h-140 w-140 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.18), rgba(167,139,250,0) 65%)",
        }}
      />

      <section className="relative mx-auto flex max-w-[1240px] flex-wrap items-center gap-14 px-6 pt-36 pb-30">
        <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-7">
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-page border-orange font-display inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium">
              <span className="bg-live gf-pulse-dot h-2 w-2 rounded-full" />
              New battles every week
            </span>
            <span className="bg-lilac text-ink font-display inline-flex rotate-3 items-center rounded-full px-3.5 py-2 text-sm font-bold">
              made in india
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,5.75rem)] leading-[0.95] font-black tracking-[-0.03em] uppercase">
            Your gully.
            <br />
            Your stage.
            <br />
            <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
              your fame.
            </span>
          </h1>

          <p className="text-soft max-w-[540px] text-lg leading-relaxed">
            Join weekly talent battles in music, dance, cooking and comedy. Drop
            your clip, stack up points, top the leaderboard — and win prizes for
            it.
          </p>

          <StoreButtons />
        </div>

        {/* phone + stickers */}
        <div className="relative flex min-h-[700px] min-w-0 flex-1 basis-[420px] items-center justify-center">
          <div className="relative w-[300px] rotate-4 rounded-[46px] bg-[#1b1008] p-2.5 shadow-[14px_14px_0_var(--color-orange),0_40px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/app-home.png"
              alt="Gully Fame India home screen showing categories and trending battles"
              width={316}
              height={692}
              sizes="300px"
              priority
              className="h-160 w-full rounded-[36px] object-cover object-top"
            />
          </div>

          <div style={{ "--gf-rest": "rotate(-8deg)" } as CSSProperties}
            className="bg-gold text-ink font-display gf-float absolute top-18 left-0 flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-extrabold shadow-[4px_4px_0_var(--color-ink)]">
            <CrownIcon className="h-5.5 w-5.5" strokeWidth={2.2} />
            #1 this week
          </div>

          <div style={{ "--gf-rest": "rotate(6deg)" } as CSSProperties}
            className="bg-page border-orange font-display gf-float gf-float-delay absolute top-50 right-0 flex flex-col gap-0.5 rounded-2xl border-2 px-4 py-3 shadow-[4px_4px_0_var(--color-orange)]">
            <span className="text-live text-xs font-bold tracking-wider">
              ● LIVE NOW
            </span>
            <span className="text-lg font-extrabold">Dance-Off Delhi</span>
          </div>

          <div style={{ "--gf-rest": "rotate(-4deg)" } as CSSProperties}
            className="bg-lilac text-ink font-display gf-float gf-float-slow absolute bottom-22 left-5 rounded-full px-4.5 py-3.5 text-[22px] font-black shadow-[4px_4px_0_var(--color-ink)]">
            +10 pts
          </div>

          <div style={{ "--gf-rest": "rotate(12deg)" } as CSSProperties}
            className="bg-orange text-ink font-display gf-float gf-float-slow gf-float-delay absolute right-5 bottom-10 flex h-23 w-23 items-center justify-center rounded-full text-center text-[13px] leading-tight font-black shadow-[4px_4px_0_#ffffff]">
            WIN
            <br />
            REAL
            <br />
            PRIZES
          </div>
        </div>
      </section>
    </div>
  );
}
