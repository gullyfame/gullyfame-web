import { steps } from "@/lib/content";

const tones = {
  light: {
    card: "bg-white text-ink shadow-[8px_8px_0_var(--color-orange)] -rotate-1",
    number: "text-orange",
    body: "text-[#5a4631]",
  },
  orange: {
    card: "bg-orange text-ink shadow-[8px_8px_0_#ffffff] rotate-1",
    number: "text-ink",
    body: "text-brown",
  },
  lilac: {
    card: "bg-lilac text-ink shadow-[8px_8px_0_var(--color-orange)] -rotate-1",
    number: "text-ink",
    body: "text-ink",
  },
} as const;

export function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 pt-30 pb-20">
      <div className="gf-reveal flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
          3 steps to
          <br />
          <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
            gully-famous
          </span>
        </h2>
        <p className="text-muted basis-[360px] text-[17px] leading-relaxed">
          No followers needed to get started. Every week is a fresh shot at the
          top.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => {
          const tone = tones[step.tone];
          return (
            <div
              key={step.number}
              className={`gf-lift gf-reveal flex flex-col gap-4 rounded-[28px] p-8 ${tone.card}`}
            >
              <span
                className={`font-display text-[72px] leading-none font-black tracking-[-0.04em] ${tone.number}`}
              >
                {step.number}
              </span>
              <h3 className="font-display text-[28px] font-extrabold">
                {step.title}
              </h3>
              <p className={`text-base leading-relaxed ${tone.body}`}>
                {step.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
