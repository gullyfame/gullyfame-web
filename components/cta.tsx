import { StoreButtons } from "@/components/store-buttons";
import { siteConfig } from "@/lib/seo";

export function Cta() {
  return (
    <section
      id="download"
      data-reveal="zoom"
      className="gf-reveal mx-auto max-w-[1240px] px-6 pt-15 pb-28"
    >
      <div className="bg-orange text-ink border-ink relative flex flex-col items-center gap-6.5 overflow-hidden rounded-[36px] border-[3px] px-8 py-20 text-center shadow-[12px_12px_0_#ffffff]">
        <span
          aria-hidden="true"
          className="border-ink absolute top-[12%] left-[5%] h-30 w-30 rounded-full border-[3px] border-dashed opacity-35"
        />
        <span
          aria-hidden="true"
          className="bg-gold absolute right-[6%] bottom-[10%] h-40 w-40 rounded-full opacity-60"
        />

        <span className="bg-ink text-orange font-display relative -rotate-3 rounded-full px-4 py-2 text-sm font-extrabold">
          join the movement
        </span>

        <h2 className="font-display relative text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[0.95] font-black tracking-[-0.03em] uppercase">
          Stop scrolling.
          <br />
          <span className="font-serif tracking-[-0.01em] italic normal-case">
            start battling.
          </span>
        </h2>

        <p className="relative max-w-[520px] text-[19px] leading-relaxed">
          Download {siteConfig.name} and enter this week&apos;s battle.
        </p>

        <StoreButtons variant="solid" className="relative justify-center" />
      </div>
    </section>
  );
}
