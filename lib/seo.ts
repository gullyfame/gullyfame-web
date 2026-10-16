import type { Metadata } from "next";
import siteData from "@/site.data.json";

/**
 * Universal SEO config for Gully Fame India.
 *
 * Two places, one source of truth each:
 *  - this file: site-wide settings (name, Twitter handle, social links,
 *    robots, icons) and the helpers that turn page data into metadata;
 *  - site.data.json: every page's title, description, keywords and Open
 *    Graph image. It is JSON so scripts/generate-feeds.mjs can read the
 *    exact same list when it writes sitemap.xml and rss.xml.
 */

// Set NEXT_PUBLIC_SITE_URL in .env.local for staging / production.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? siteData.url;

/** Every route in the site, shared with scripts/generate-feeds.mjs. */
export const sitePages = siteData.pages;

export type SitePage = (typeof sitePages)[number];

/** Look up a page's SEO entry by route; fails loudly if it is missing. */
export function getPage(path: string): SitePage {
  const page = sitePages.find((p) => p.path === path);
  if (!page) {
    throw new Error(
      `No entry for "${path}" in site.data.json — add one to its "pages" list.`,
    );
  }
  return page;
}

const homePage = getPage("/");

export const siteConfig = {
  name: siteData.name,
  shortName: siteData.shortName,
  tagline: "Your gully. Your stage. Your fame.",
  url: SITE_URL,
  locale: "en_IN",
  language: siteData.language,
  themeColor: "#EC9A15",
  backgroundColor: "#2B1A0C",

  title: homePage.seoTitle,
  titleTemplate: "%s | Gully Fame India",
  description: siteData.description,
  shortDescription:
    "Weekly talent battles in music, dance, cooking and comedy. Upload, earn points, win prizes.",

  keywords: [
    "Gully Fame India",
    "talent app India",
    "short video app India",
    "talent competition app",
    "dance battle app",
    "singing competition online",
    "cooking competition app",
    "comedy open mic app",
    "win prizes online India",
    "talent leaderboard",
    "desi talent platform",
  ],

  // Default Open Graph / Twitter share card (1200x630, in /public).
  // Each page's own card is set in site.data.json.
  ogImage: {
    url: homePage.ogImage,
    width: 1200,
    height: 630,
    alt: homePage.ogAlt,
    type: "image/png",
  },

  twitter: {
    handle: "@gullyfameindia", // TODO: confirm the real handle
    cardType: "summary_large_image" as const,
  },

  social: {
    instagram: "https://instagram.com/gullyfameindia",
    youtube: "https://youtube.com/@gullyfameindia",
    x: "https://x.com/gullyfameindia",
  },

  store: {
    googlePlay: "#", // TODO: add the Play Store link
    appStore: "#", // TODO: add the App Store link
  },

  contactEmail: siteData.contactEmail,

  /** Baked in at build time by scripts/generate-feeds.mjs. */
  copyrightYear: siteData.copyrightYear,

  // Search Console etc. Leave blank until you have the codes.
  verification: {
    google: "",
    yandex: "",
  },
} as const;

/**
 * RSS discovery link. Next replaces `alternates` wholesale on child routes,
 * so every page has to declare it again — this keeps it in one place.
 */
function rssAlternate() {
  return {
    "application/rss+xml": [
      { url: "/rss.xml", title: `${siteData.name} updates` },
    ],
  };
}

/** Base metadata applied to every route from the root layout. */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  category: "entertainment",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    types: rssAlternate(),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
        type: siteConfig.ogImage.type,
      },
    ],
  },
  twitter: {
    card: siteConfig.twitter.cardType,
    site: siteConfig.twitter.handle,
    creator: siteConfig.twitter.handle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  ...(siteConfig.verification.google
    ? { verification: { google: siteConfig.verification.google } }
    : {}),
};

/**
 * Metadata for any page, built from its entry in site.data.json.
 *
 *   export const metadata = pageMetadata("/about");
 *
 * Next merges metadata shallowly, so openGraph, twitter and alternates are
 * written out in full here rather than relying on the root layout's.
 */
export function pageMetadata(
  path: string,
  { noIndex = false }: { noIndex?: boolean } = {},
): Metadata {
  const page = getPage(path);
  const fullTitle =
    path === "/"
      ? page.seoTitle
      : siteConfig.titleTemplate.replace("%s", page.seoTitle);
  const image = {
    url: page.ogImage,
    width: 1200,
    height: 630,
    alt: page.ogAlt,
    type: "image/png",
  };

  return {
    title: path === "/" ? { absolute: page.seoTitle } : page.seoTitle,
    description: page.description,
    keywords: [...page.keywords, siteConfig.name],
    alternates: {
      canonical: path,
      types: rssAlternate(),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: fullTitle,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      site: siteConfig.twitter.handle,
      creator: siteConfig.twitter.handle,
      title: fullTitle,
      description: page.description,
      images: [{ url: image.url, alt: image.alt }],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
