#!/usr/bin/env node
/**
 * Generates public/sitemap.xml and public/rss.xml from site.data.json.
 *
 *   node scripts/generate-feeds.mjs
 *
 * Runs automatically before `npm run build` (see the "prebuild" script).
 * Override the domain with NEXT_PUBLIC_SITE_URL, e.g.
 *   NEXT_PUBLIC_SITE_URL=https://gullyfame.in node scripts/generate-feeds.mjs
 *
 * To publish an RSS item, add an entry to "updates" in site.data.json:
 *   { "title": "...", "path": "/blog/my-post", "description": "...",
 *     "publishedAt": "2026-10-20T09:00:00+05:30" }
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");

const DATA_FILE = join(ROOT, "site.data.json");
const data = JSON.parse(readFileSync(DATA_FILE, "utf8"));

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

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || data.url).replace(
  /\/+$/,
  "",
);

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
  return `${SITE_URL}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;
}

function buildSitemap(pages, lastmod) {
  const urls = pages
    .map((page) =>
      [
        "  <url>",
        `    <loc>${esc(absolute(page.path))}</loc>`,
        `    <lastmod>${page.lastmod || lastmod}</lastmod>`,
        `    <changefreq>${esc(page.changefreq || "monthly")}</changefreq>`,
        `    <priority>${Number(page.priority ?? 0.5).toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRss(updates, buildDate) {
  const items = updates
    .map((item) => {
      const link = absolute(item.path);
      const pubDate = new Date(item.publishedAt || buildDate).toUTCString();
      return [
        "    <item>",
        `      <title>${esc(item.title)}</title>`,
        `      <link>${esc(link)}</link>`,
        `      <guid isPermaLink="true">${esc(link)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        item.description
          ? `      <description>${esc(item.description)}</description>`
          : null,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(data.name)}</title>
    <link>${esc(SITE_URL)}</link>
    <description>${esc(data.description)}</description>
    <language>${esc(data.language)}</language>
    <lastBuildDate>${new Date(buildDate).toUTCString()}</lastBuildDate>
    <copyright>© ${data.copyrightYear} ${esc(data.copyrightHolder)}</copyright>
    <atom:link href="${esc(`${SITE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

const now = new Date();
const today = now.toISOString().slice(0, 10);

mkdirSync(PUBLIC_DIR, { recursive: true });

const sitemap = buildSitemap(data.pages, today);
writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");

const rss = buildRss(data.updates ?? [], now);
writeFileSync(join(PUBLIC_DIR, "rss.xml"), rss, "utf8");

console.log(
  `Feeds written for ${SITE_URL}\n` +
    `  public/sitemap.xml  ${data.pages.length} URL(s)\n` +
    `  public/rss.xml      ${(data.updates ?? []).length} item(s)`,
);
