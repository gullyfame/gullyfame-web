import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { homeFaqs } from "@/lib/content";
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

      <div className="flex min-w-0 flex-2 basis-[560px] flex-col gap-6">
        <FaqList items={homeFaqs} />

        <Link
          href="/faqs"
          data-reveal="right"
          className="gf-reveal text-ink font-display gf-lift inline-flex min-h-[48px] self-end items-center rounded-full bg-orange px-5.5 py-3.5 text-[15px] font-bold shadow-[4px_4px_0_var(--color-ink)]"
        >
          See all FAQs →
        </Link>
      </div>

      <JsonLd data={faqJsonLd(homeFaqs)} />
    </section>
  );
}
