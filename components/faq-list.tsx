import { PlusIcon } from "@/components/icons";
import type { Faq } from "@/lib/content";

/** Native exclusive accordion: only one answer open, first one open on load. */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3.5">
      {items.map((faq, i) => (
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
          <div className="text-soft mb-5 flex flex-col gap-3 text-base leading-relaxed">
            {faq.answer.map((block) => (
              <div key={block.text} className="flex flex-col gap-2">
                <p>{block.text}</p>
                {block.points ? (
                  <ul className="flex list-disc flex-col gap-1.5 pl-5">
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
