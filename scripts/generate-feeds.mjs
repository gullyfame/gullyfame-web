#!/usr/bin/env node
/**
 * Generates public/sitemap.xml and public/rss.xml from site.data.json.
 *
 *   npm run feeds
 *
 * Also runs automatically before `npm run build` (the "prebuild" script).
 * Override the domain with NEXT_PUBLIC_SITE_URL, e.g.
 *   NEXT_PUBLIC_SITE_URL=https://gullyfame.in npm run feeds
 *
 * Sitemap
 *   One <url> per entry in site.data.json "pages", with:
 *   - lastmod: the real last-modified date of that route's page file
 *     (app/about/page.tsx for /about), so search engines only re-crawl
 *     pages that actually changed;
 *   - the page's Open Graph image as an image-sitemap entry.
 *
 * RSS
 *   - every item in "updates" (announcements you write), newest first;
 *   - then every page, dated by when its file last changed.
 *   To post an announcement, add to "updates":
 *     { "title": "Dance-Off Delhi is open", "path": "/",
 *       "description": "Entries close Sunday.",
 *       "publishedAt": "2026-10-20T09:00:00+05:30" }
 */

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");
const DATA_FILE = join(ROOT, "site.data.json");

const data = JSON.parse(readFileSync(DATA_FILE, "utf8"));

// Same order as lib/seo.ts: explicit domain, then Vercel's production address.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || data.url).replace(
  /\/+$/,
  "",
);

/*
 * Keep the footer's copyright year current without reading the clock while a
 * page renders — Next cannot prerender a component that calls new Date().
 * The year is baked into site.data.json here, at build time.
 */
const currentYear = new Date().getFullYear();
if (data.copyrightYear !== currentYear) {
  data.copyrightYear = currentYear;
  writeFileSync(DATA_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`Updated copyrightYear to ${currentYear} in site.data.json`);
}

/** XML-escape text so stray &, <, > or quotes cannot break the feed. */
function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absolute(path) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, "")}`;
}

/** Last time the route's page file changed; falls back to now. */
function lastModified(path) {
  const file =
    path === "/" ? join(ROOT, "app", "page.tsx") : join(ROOT, "app", ...path.split("/").filter(Boolean), "page.tsx");
  return existsSync(file) ? statSync(file).mtime : new Date();
}

const isoDate = (d) => d.toISOString().slice(0, 10);

// ---------------------------------------------------------------- sitemap
function buildSitemap(pages) {
  const urls = pages
    .map((page) => {
      const lines = [
        "  <url>",
        `    <loc>${esc(absolute(page.path))}</loc>`,
        `    <lastmod>${isoDate(lastModified(page.path))}</lastmod>`,
        `    <changefreq>${esc(page.changefreq || "monthly")}</changefreq>`,
        `    <priority>${Number(page.priority ?? 0.5).toFixed(1)}</priority>`,
      ];
      if (page.ogImage) {
        lines.push(
          "    <image:image>",
          `      <image:loc>${esc(`${SITE_URL}${page.ogImage}`)}</image:loc>`,
          "    </image:image>",
        );
      }
      lines.push("  </url>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

// -------------------------------------------------------------------- rss
function buildRss(items, buildDate) {
  const body = items
    .map((item) => {
      const link = absolute(item.path);
      const lines = [
        "    <item>",
        `      <title>${esc(item.title)}</title>`,
        `      <link>${esc(link)}</link>`,
        // Announcements can share a path, so their guid also carries the date.
        `      <guid isPermaLink="${item.permalink ? "true" : "false"}">${esc(item.guid)}</guid>`,
        `      <pubDate>${item.date.toUTCString()}</pubDate>`,
        `      <category>${esc(item.category)}</category>`,
      ];
      if (item.description) lines.push(`      <description>${esc(item.description)}</description>`);
      if (item.image) {
        const file = join(PUBLIC_DIR, ...item.image.split("/").filter(Boolean));
        const bytes = existsSync(file) ? statSync(file).size : 0;
        lines.push(
          `      <enclosure url="${esc(`${SITE_URL}${item.image}`)}" length="${bytes}" type="image/png" />`,
        );
      }
      lines.push("    </item>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(data.name)}</title>
    <link>${esc(`${SITE_URL}/`)}</link>
    <description>${esc(data.description)}</description>
    <language>${esc(data.language)}</language>
    <lastBuildDate>${buildDate.toUTCString()}</lastBuildDate>
    <copyright>© ${data.copyrightYear} ${esc(data.copyrightHolder)}</copyright>
    <ttl>1440</ttl>
    <image>
      <url>${esc(`${SITE_URL}/apple-icon.png`)}</url>
      <title>${esc(data.name)}</title>
      <link>${esc(`${SITE_URL}/`)}</link>
    </image>
    <atom:link href="${esc(`${SITE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />
${body}
  </channel>
</rss>
`;
}

// ------------------------------------------------------------------- run
const now = new Date();
mkdirSync(PUBLIC_DIR, { recursive: true });

writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), buildSitemap(data.pages), "utf8");

const announcements = (data.updates ?? [])
  .map((u) => {
    const date = new Date(u.publishedAt || now);
    return {
      title: u.title,
      path: u.path || "/",
      description: u.description,
      image: u.image,
      date,
      category: "Announcements",
      guid: `${absolute(u.path || "/")}#${date.toISOString()}`,
      permalink: false,
    };
  })
  .sort((a, b) => b.date - a.date);

const pageItems = data.pages
  .map((p) => ({
    title: p.path === "/" ? p.seoTitle : `${p.title} — ${data.name}`,
    path: p.path,
    description: p.description,
    image: p.ogImage,
    date: lastModified(p.path),
    category: "Pages",
    guid: absolute(p.path),
    permalink: true,
  }))
  .sort((a, b) => b.date - a.date);

const items = [...announcements, ...pageItems];
writeFileSync(join(PUBLIC_DIR, "rss.xml"), buildRss(items, now), "utf8");

console.log(
  `Feeds written for ${SITE_URL}\n` +
    `  public/sitemap.xml  ${data.pages.length} URL(s), ${data.pages.filter((p) => p.ogImage).length} image(s)\n` +
    `  public/rss.xml      ${announcements.length} announcement(s) + ${pageItems.length} page(s)`,
);
