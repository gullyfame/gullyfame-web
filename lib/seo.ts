import type { Metadata } from "next";
import siteData from "@/site.data.json";

/**
 * Universal SEO config for Gully Fame India.
 * Every title, description, Open Graph and Twitter detail lives here.
 * Change it in this file and the whole site follows.
 */

// Set NEXT_PUBLIC_SITE_URL in .env.local for staging / production.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? siteData.url;

/** Every route in the site, shared with scripts/generate-feeds.mjs. */
export const sitePages = siteData.pages;

export const siteConfig = {
  name: siteData.name,
  shortName: siteData.shortName,
  tagline: "Your gully. Your stage. Your fame.",
  url: SITE_URL,
  locale: "en_IN",
  language: siteData.language,
  themeColor: "#EC9A15",
  backgroundColor: "#2B1A0C",

  title: "Gully Fame India — Weekly Talent Battles. Win Prizes. Earn Fame.",
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

  // Open Graph / Twitter share card. 1200x630 lives in /public.
  ogImage: {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Gully Fame India — weekly talent battles. Win prizes. Earn fame.",
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
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${siteData.name} updates` }],
    },
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
 * Build metadata for any other page, falling back to the site defaults.
 * Example: export const metadata = pageMetadata({ title: "Battles", path: "/battles" })
 */
export function pageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage.url,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = siteConfig.titleTemplate.replace("%s", title);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: `${siteConfig.url}${path}`,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      site: siteConfig.twitter.handle,
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
