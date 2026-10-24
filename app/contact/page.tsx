import Link from "next/link";
import {
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata("/contact");

const supportEmail = "admin@gullyfameindia.com";

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "X", href: siteConfig.social.x, Icon: XIcon },
];

export default function ContactPage() {
  return (
    <PageShell
      path="/contact"
      intro="Email our support team and we'll come back to you. In-app reports are the fastest route for anything about a specific clip."
    >
      <a
        href={`mailto:${supportEmail}?subject=${encodeURIComponent("[Support request] ")}`}
        data-reveal="left"
        className="bg-surface border-surface-2 gf-lift gf-reveal flex flex-col gap-2 rounded-3xl border-2 p-7"
      >
        <span className="font-display flex items-center gap-2 text-xl font-extrabold">
          Support
          <ArrowUpRightIcon className="text-orange h-4 w-4" />
        </span>
        <span className="text-muted text-[15px] leading-relaxed">
          Trouble uploading, account issues, content reports, partnerships and
          press.
        </span>
        <span className="text-orange font-display mt-2 text-sm font-bold break-all">
          {supportEmail}
        </span>
      </a>

      <div className="mt-14 flex flex-wrap gap-12">
        <div className="gf-prose flex-1 basis-[460px]">
          <h2>Response times</h2>
          <p>
            We read everything that comes in. Support and content reports are
            handled first, usually within [X working days]. Partnership and
            press mail can take a little longer.
          </p>

          <h2>Office address</h2>
          <p>
            <strong>GULLY FAME INDIA PRIVATE LIMITED</strong>
            <br />
            CIN: U62099DL2025PTC455455
            <br />
            House 55B, Ground Floor, Najafgarh Road,
            <br />
            (West Delhi) Delhi - 110015
            <br />
            India
            <br />
            Mobile: +91 98212 34605
          </p>

        </div>

        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6">
          <div data-reveal="right" className="bg-brown border-line gf-reveal rounded-3xl border-2 p-7">
            <h2 className="font-display text-xl font-extrabold">Follow along</h2>
            <p className="text-muted mt-2 text-[15px]">
              Battle announcements and winners go out here first.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-surface hover:bg-surface-2 flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div data-reveal="right" className="bg-orange text-ink gf-reveal rounded-3xl p-7">
            <h2 className="font-display text-xl font-extrabold">
              Reporting a clip?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed">
              Use the report button on the video itself. It sends us the exact
              entry and battle, which gets it reviewed far quicker than an
              email.
            </p>
            <Link
              href="/community-guidelines"
              className="font-display mt-4 inline-block text-sm font-bold underline underline-offset-4"
            >
              What we remove →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
