import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";
import { footerColumns } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

const socials = [
  { label: "Instagram (@gullyfame)", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Instagram (@gullyfameindia)", href: siteConfig.social.instagramIndia, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "X", href: siteConfig.social.x, Icon: XIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep border-orange border-t-[3px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 pt-16 pb-7">
        <div data-reveal="up" className="gf-reveal flex flex-wrap justify-between gap-12">
          <div className="flex flex-1 basis-[260px] flex-col gap-4">
            <Image
              src="/images/gully-fame-india-logo.webp"
              alt={siteConfig.name}
              width={560}
              height={244}
              sizes="260px"
              className="-ml-3 w-[260px]"
            />
            <p className="text-muted text-sm">
              Join weekly talent battles. Win prizes. Earn fame.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-surface hover:bg-surface-2 flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3 text-sm">
              <span className="font-display text-base font-bold">
                {column.heading}
              </span>
              {column.links.map((link) =>
                link.href.endsWith(".xml") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted hover:text-orange transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}

          <form className="flex flex-1 basis-[280px] flex-col gap-3">
            <label htmlFor="gf-email" className="font-display text-base font-bold">
              Get battle drops in your inbox
            </label>
            <div className="bg-surface border-line flex items-center rounded-full border-2 py-1 pr-1 pl-4.5">
              <input
                id="gf-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                className="placeholder:text-muted min-h-10 w-full min-w-0 grow bg-transparent text-sm text-white outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-orange text-ink flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full"
              >
                <ArrowRightIcon className="h-4.5 w-4.5" />
              </button>
            </div>
          </form>
        </div>

        <div className="border-surface-2 text-muted border-t pt-5.5 text-center text-[13px]">
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
