import { FaqList } from "@/components/faq-list";
import { PageShell } from "@/components/page-shell";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { faqJsonLd, JsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata("/faqs");

export default function FaqsPage() {
  return (
    <PageShell
      path="/faqs"
      intro="Everything about using GullyFame India: who can join, how voting and content rules work, your data, and how to raise a grievance."
    >
      <div className="flex flex-wrap gap-14">
        <FaqList items={faqs} />
      </div>

      <JsonLd data={faqJsonLd(faqs)} />
    </PageShell>
  );
}
