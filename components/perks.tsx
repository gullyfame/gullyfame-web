import { perkIcons } from "@/components/icons";
import { perks } from "@/lib/content";

const iconTone = ["text-gold", "text-orange", "text-lilac", "text-live"];

export function Perks() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 pt-28 pb-15">
      <h2 className="gf-reveal font-display text-center text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
        Why the gully&apos;s
        <br />
        <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
          obsessed
        </span>
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk, i) => {
          const Icon = perkIcons[perk.icon];
          return (
            <div
              key={perk.title}
              className="bg-surface border-surface-2 gf-lift gf-reveal flex flex-col gap-3 rounded-3xl border-2 p-6.5"
            >
              <Icon className={`h-8.5 w-8.5 ${iconTone[i]}`} />
              <h3 className="font-display text-[22px] font-extrabold">
                {perk.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {perk.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
