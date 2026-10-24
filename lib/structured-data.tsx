import type { Faq } from "@/lib/content";
import { siteConfig, type SitePage } from "@/lib/seo";

/** JSON-LD for rich results. Rendered from the root layout and the FAQ section. */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/gully-fame-india-logo.webp`,
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

/** FAQPage JSON-LD for the questions shown on a page. Must match what is visible. */
export function faqJsonLd(list: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        // Paragraphs and their points flattened into one plain-text answer.
        text: faq.answer
          .map((block) =>
            block.points
              ? `${block.text} ${block.points.join(" ")}`
              : block.text,
          )
          .join(" "),
      },
    })),
  };
}

const absolute = (path: string) =>
  path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;

/** Home → this page, for the breadcrumb trail in search results. */
export function breadcrumbJsonLd(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: absolute(page.path),
      },
    ],
  };
}

/** The page itself: AboutPage, ContactPage or a plain WebPage. */
export function webPageJsonLd(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    name: page.seoTitle,
    description: page.description,
    url: absolute(page.path),
    inLanguage: siteConfig.language,
    primaryImageOfPage: `${siteConfig.url}${page.ogImage}`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: absolute("/") },
    publisher: { "@type": "Organization", name: siteConfig.name, url: absolute("/") },
  };
}

/** Drop <JsonLd data={...} /> anywhere in a server component. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
