import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

/**
 * Fixed site header. Transparent over the hero so it reads as part of it; a
 * light tint and blur fade in once the page scrolls (see .gf-header in
 * globals.css and lib/motion.ts).
 */
export function SiteHeader({ active = "/" }: { active?: string }) {
  return (
    <header className="gf-header fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-5 px-6 py-3.5"
      >
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/images/gfi-logo.png"
            alt={`${siteConfig.shortName} — ${siteConfig.name}`}
            width={260}
            height={113}
            sizes="100px"
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="bg-page/55 border-orange/35 font-display hidden flex-wrap gap-1.5 rounded-full border p-1.5 text-[15px] font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.href === active ? "page" : undefined}
              className={`rounded-full px-4.5 py-2.5 transition-colors ${
                link.href === active
                  ? "bg-orange text-ink"
                  : "hover:bg-surface-2 text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#download"
            className="text-ink font-display inline-flex min-h-[46px] items-center gap-2 rounded-full bg-white px-5.5 py-3 text-[15px] font-bold shadow-[4px_4px_0_var(--color-orange)] transition-transform hover:-translate-y-0.5"
          >
            Get the app
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>

          {/* Mobile menu — no JavaScript needed */}
          <details className="gf-menu relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="border-orange/50 bg-page/55 flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-full border"
            >
              <span
                className="gf-menu-bars flex flex-col gap-1.5"
                aria-hidden="true"
              >
                <span className="bg-orange block h-0.5 w-5 rounded-full" />
                <span className="bg-orange block h-0.5 w-5 rounded-full" />
                <span className="bg-orange block h-0.5 w-5 rounded-full" />
              </span>
            </summary>

            <div className="bg-brown border-orange/40 absolute top-full right-0 z-50 mt-3 flex w-56 flex-col gap-1 rounded-2xl border p-2 shadow-[6px_6px_0_var(--color-orange)]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-display hover:bg-surface-2 rounded-xl px-4 py-3 text-[15px] font-medium text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
