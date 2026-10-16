import Link from "next/link";
import { PlusIcon } from "@/components/icons";
import { faqs } from "@/lib/content";
import { faqJsonLd, JsonLd } from "@/lib/structured-data";

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-14 px-6 pt-20 pb-15"
    >
      <div
        data-reveal="left"
        className="gf-reveal flex min-w-0 flex-1 basis-[340px] flex-col gap-5.5"
      >
        <span className="bg-lilac text-ink font-display self-start -rotate-3 rounded-full px-3.5 py-2 text-sm font-extrabold">
          got questions?
        </span>

        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase">
          FAQs,
          <br />
          <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
            sorted.
          </span>
        </h2>

        <p className="text-muted max-w-[360px] text-[17px] leading-relaxed">
          Still stuck? Drop us a line and the team will get back to you.
        </p>

        <Link
          href="/contact"
          className="text-ink font-display gf-lift inline-flex min-h-[48px] self-start items-center rounded-full bg-white px-5.5 py-3.5 text-[15px] font-bold shadow-[4px_4px_0_var(--color-orange)]"
        >
          Contact support
        </Link>
      </div>

      {/* Native exclusive accordion: only one answer open, first one open on load. */}
      <div className="flex min-w-0 flex-2 basis-[560px] flex-col gap-3.5">
        {faqs.map((faq, i) => (
          <details
            key={faq.question}
            name="gf-faq"
            open={i === 0}
            data-reveal="right"
            className="gf-faq gf-reveal bg-surface border-surface-2 rounded-[22px] border-2 px-6 py-1.5"
          >
            <summary className="font-display flex min-h-16 items-center justify-between gap-4 text-xl font-bold">
              {faq.question}
              <span className="gf-faq-plus bg-orange flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-full text-ink transition-transform duration-200">
                <PlusIcon className="h-4.5 w-4.5" />
              </span>
            </summary>
            <p className="text-soft mb-5 text-base leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <JsonLd data={faqJsonLd} />
    </section>
  );
}
