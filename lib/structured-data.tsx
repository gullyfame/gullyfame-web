import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

/** JSON-LD for rich results. Rendered from the root layout and the FAQ section. */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/gully-fame-india-logo.png`,
  email: siteConfig.contactEmail,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.youtube,
    siteConfig.social.x,
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
};

export const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: siteConfig.name,
  applicationCategory: "EntertainmentApplication",
  operatingSystem: "Android, iOS",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/** Drop <JsonLd data={...} /> anywhere in a server component. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
