import Link from "next/link";
import {
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Get in touch with the ${siteConfig.name} team — support, partnerships, press and content reports.`,
  path: "/contact",
});

const channels = [
  {
    label: "Support",
    detail: "Trouble uploading, account issues, anything broken.",
    email: siteConfig.contactEmail,
    subject: "Support request",
  },
  {
    label: "Report content",
    detail: "Flag a clip or an account that breaks our guidelines.",
    email: siteConfig.contactEmail,
    subject: "Content report",
  },
  {
    label: "Partnerships",
    detail: "Brands, sponsors and battle collaborations.",
    email: siteConfig.contactEmail,
    subject: "Partnership enquiry",
  },
  {
    label: "Press",
    detail: "Interviews, media kit and company information.",
    email: siteConfig.contactEmail,
    subject: "Press enquiry",
  },
];

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "X", href: siteConfig.social.x, Icon: XIcon },
];

export default function ContactPage() {
  return (
    <PageShell
      path="/contact"
      eyebrow="contact us"
      title="Talk to the"
      accent="team."
      intro="Pick the channel that fits and we'll come back to you. In-app reports are the fastest route for anything about a specific clip."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={`mailto:${channel.email}?subject=${encodeURIComponent(
              `[${channel.subject}] `,
            )}`}
            className="bg-surface border-surface-2 gf-lift gf-reveal flex flex-col gap-2 rounded-3xl border-2 p-7"
          >
            <span className="font-display flex items-center gap-2 text-xl font-extrabold">
              {channel.label}
              <ArrowUpRightIcon className="text-orange h-4 w-4" />
            </span>
            <span className="text-muted text-[15px] leading-relaxed">
              {channel.detail}
            </span>
            <span className="text-orange font-display mt-2 text-sm font-bold break-all">
              {channel.email}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-12">
        <div className="gf-prose flex-1 basis-[460px]">
          <h2>Response times</h2>
          <p>
            We read everything that comes in. Support and content reports are
            handled first, usually within [X working days]. Partnership and
            press mail can take a little longer.
          </p>

          <h2>Registered address</h2>
          <p>
            [Registered company name]
            <br />
            [Street address]
            <br />
            [City, State, PIN code]
            <br />
            India
          </p>

          <h2>Grievance officer</h2>
          <p>
            In line with Indian intermediary rules, complaints about content on
            Gully Fame India can be sent to our grievance officer:
          </p>
          <p>
            <strong>[Officer name]</strong>
            <br />
            [Grievance email address]
            <br />
            [Contact number, if you publish one]
          </p>
        </div>

        <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-6">
          <div className="bg-brown border-line gf-reveal rounded-3xl border-2 p-7">
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

          <div className="bg-orange text-ink gf-reveal rounded-3xl p-7">
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
