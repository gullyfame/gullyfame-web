import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { CrownIcon } from "@/components/icons";
import { StoreButtons } from "@/components/store-buttons";

/** Page-load entrance delay, read by .gf-enter in globals.css. */
const delay = (ms: number) => ({ "--gf-delay": `${ms}ms` }) as CSSProperties;

/**
 * A floating sticker. The outer wrapper owns the position and the pop-in
 * entrance (scale); the inner element owns the endless float (transform),
 * so the two animations never fight over the same property.
 */
function Sticker({
  className,
  enterAt,
  tilt,
  floatClass = "",
  children,
  inner,
}: {
  className: string;
  enterAt: number;
  tilt: string;
  floatClass?: string;
  inner: string;
  children: ReactNode;
}) {
  return (
    <div className={`gf-enter gf-enter-pop absolute ${className}`} style={delay(enterAt)}>
      <div
        style={{ "--gf-rest": `rotate(${tilt})` } as CSSProperties}
        className={`gf-float ${floatClass} ${inner}`}
      >
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-brown relative overflow-hidden">
      {/* warm glows, drifting slowly */}
      <div
        aria-hidden="true"
        className="gf-drift pointer-events-none absolute -top-30 -right-40 h-180 w-180 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,154,21,0.45), rgba(236,154,21,0) 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="gf-drift gf-drift-reverse pointer-events-none absolute -bottom-65 -left-50 h-140 w-140 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.18), rgba(167,139,250,0) 65%)",
        }}
      />

      <section className="relative mx-auto flex max-w-[1240px] flex-wrap items-center gap-14 px-6 pt-36 pb-30">
        <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-7">
          <div className="flex flex-wrap gap-2.5">
            <span
              className="bg-page border-orange font-display gf-enter gf-enter-down inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium"
              style={delay(0)}
            >
              <span className="bg-live gf-pulse-dot h-2 w-2 rounded-full" />
              New battles every week
            </span>
            <span
              className="bg-lilac text-ink font-display gf-enter gf-enter-pop inline-flex rotate-3 items-center rounded-full px-3.5 py-2 text-sm font-bold"
              style={delay(260)}
            >
              made in india
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,5.75rem)] leading-[0.95] font-black tracking-[-0.03em] uppercase">
            <span className="gf-enter gf-enter-left block" style={delay(0)}>
              Your gully.
            </span>
            <span className="gf-enter gf-enter-left block" style={delay(110)}>
              Your stage.
            </span>
            <span
              className="font-serif text-orange gf-enter gf-enter-left block tracking-[-0.01em] italic normal-case"
              style={delay(220)}
            >
              your fame.
            </span>
          </h1>

          <p
            className="text-soft gf-enter gf-enter-up max-w-[540px] text-lg leading-relaxed"
            style={delay(360)}
          >
            Join weekly talent battles in music, dance, cooking and comedy. Drop
            your clip, stack up points, top the leaderboard — and win prizes for
            it.
          </p>

          <div className="gf-enter gf-enter-up" style={delay(480)}>
            <StoreButtons />
          </div>
        </div>

        {/* phone + stickers */}
        <div className="relative flex min-h-[700px] min-w-0 flex-1 basis-[420px] items-center justify-center">
          <div
            className="gf-enter gf-enter-right relative w-[300px] rotate-4 rounded-[46px] bg-[#1b1008] p-2.5 shadow-[14px_14px_0_var(--color-orange),0_40px_80px_rgba(0,0,0,0.45)]"
            style={delay(120)}
          >
            <Image
              src="/images/app-home.webp"
              alt="Gully Fame India home screen showing categories and trending battles"
              width={316}
              height={692}
              sizes="300px"
              preload
              className="h-160 w-full rounded-[36px] object-cover object-top"
            />
          </div>

          <Sticker
            className="top-18 left-0"
            enterAt={620}
            tilt="-8deg"
            inner="bg-gold text-ink font-display flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-extrabold shadow-[4px_4px_0_var(--color-ink)]"
          >
            <CrownIcon className="h-5.5 w-5.5" strokeWidth={2.2} />
            #1 this week
          </Sticker>

          <Sticker
            className="top-50 right-0"
            enterAt={760}
            tilt="6deg"
            floatClass="gf-float-delay"
            inner="bg-page border-orange font-display flex flex-col gap-0.5 rounded-2xl border-2 px-4 py-3 shadow-[4px_4px_0_var(--color-orange)]"
          >
            <span className="text-live text-xs font-bold tracking-wider">
              ● LIVE NOW
            </span>
            <span className="text-lg font-extrabold">Dance-Off Delhi</span>
          </Sticker>

          <Sticker
            className="bottom-22 left-5"
            enterAt={900}
            tilt="-4deg"
            floatClass="gf-float-slow"
            inner="bg-lilac text-ink font-display rounded-full px-4.5 py-3.5 text-[22px] font-black shadow-[4px_4px_0_var(--color-ink)]"
          >
            +10 pts
          </Sticker>

          <Sticker
            className="right-5 bottom-10"
            enterAt={1040}
            tilt="12deg"
            floatClass="gf-float-slow gf-float-delay"
            inner="bg-orange text-ink font-display flex h-23 w-23 items-center justify-center rounded-full text-center text-[13px] leading-tight font-black shadow-[4px_4px_0_#ffffff]"
          >
            WIN
            <br />
            REAL
            <br />
            PRIZES
          </Sticker>
        </div>
      </section>
    </div>
  );
}
