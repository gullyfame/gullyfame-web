import type { CSSProperties } from "react";
import Image from "next/image";
import { leaderboardPoints } from "@/lib/content";

export function Leaderboard() {
  return (
    <section
      id="leaderboard"
      className="bg-brown border-ink border-y-[3px]"
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-16 px-6 py-28">
        <div
          data-reveal="left"
          className="gf-reveal flex min-w-0 flex-1 basis-[440px] flex-col gap-6.5"
        >
          <span className="bg-gold text-ink font-display self-start -rotate-3 rounded-full px-3.5 py-2 text-sm font-extrabold">
            the leaderboard
          </span>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
            Who&apos;s ruling
            <br />
            the{" "}
            <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
              gullies
            </span>
            <br />
            right now?
          </h2>

          <p className="text-soft max-w-[480px] text-lg leading-relaxed">
            Every battle has a live leaderboard. Watch your rank move as votes
            roll in, see the podium when results drop, and know exactly how far
            you are from the crown.
          </p>

          <ol className="flex max-w-[460px] flex-col gap-3">
            {leaderboardPoints.map((point, i) => (
              <li
                key={point}
                className={`flex items-center gap-3.5 rounded-2xl px-4.5 py-3.5 ${
                  i === 1
                    ? "bg-orange text-ink translate-x-3.5 font-bold shadow-[4px_4px_0_var(--color-ink)]"
                    : "bg-page font-semibold"
                }`}
              >
                <span
                  className={`font-display w-7 text-xl font-black ${
                    i === 1 ? "" : "text-gold"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="grow">{point}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          data-reveal="right"
          className="gf-reveal relative flex min-h-[680px] min-w-0 flex-1 basis-[520px] items-center justify-center"
        >
          <div className="absolute top-10 left-[6%] w-[260px] -rotate-7 rounded-[40px] bg-[#1b1008] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/app-competition.webp"
              alt="Past competition screen showing the Delhi Dance Championship winners podium"
              width={307}
              height={733}
              sizes="260px"
              className="h-145 w-full rounded-[32px] object-cover object-top"
            />
          </div>

          <div className="absolute top-20 right-[6%] w-[260px] rotate-6 rounded-[40px] bg-[#1b1008] p-2.5 shadow-[10px_10px_0_var(--color-orange),0_30px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/app-leaderboard.webp"
              alt="Full leaderboard screen with the top three podium and ranked entries"
              width={310}
              height={701}
              sizes="260px"
              className="h-145 w-full rounded-[32px] object-cover object-top"
            />
          </div>

          <div style={{ "--gf-rest": "rotate(-3deg)" } as CSSProperties}
            className="bg-page border-orange font-display gf-float absolute bottom-2.5 left-[34%] flex items-center gap-3 rounded-full border-2 px-5 py-3 shadow-[4px_4px_0_var(--color-orange)]">
            <span className="text-orange font-black">#6</span>
            <span className="font-bold">You</span>
            <span className="text-muted">34 pts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
