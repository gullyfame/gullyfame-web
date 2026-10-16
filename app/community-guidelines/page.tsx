import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Community Guidelines",
  description: `What is welcome and what is not on ${siteConfig.name}, how we moderate battles, and how to report a clip.`,
  path: "/community-guidelines",
});

export default function CommunityGuidelinesPage() {
  return (
    <PageShell
      path="/community-guidelines"
      eyebrow="community guidelines"
      title="Compete hard."
      accent="keep it clean."
      intro="These rules apply to every clip, comment, profile and battle entry on Gully Fame India."
      updated="[DD Month 2026]"
    >
      <div className="gf-prose">
        <h2>The short version</h2>
        <p>
          Show your own talent, respect the people watching, and do not try to
          game the leaderboard. Almost everything below follows from those three
          things.
        </p>

        <h2>Post your own work</h2>
        <ul>
          <li>
            Upload clips you created or have permission to use, including the
            music in them.
          </li>
          <li>
            Do not re-upload someone else&apos;s entry, a clip from another
            platform, or anything passed off as yours.
          </li>
          <li>
            Everyone visible in your clip should know they are being filmed and
            agree to it.
          </li>
        </ul>

        <h2>What we remove</h2>
        <p>
          Entries containing any of the following are taken down, and repeat
          accounts are removed:
        </p>
        <ul>
          <li>
            Sexual content, nudity, or any sexualised content involving a minor.
          </li>
          <li>
            Violence, threats, or content that encourages people to harm
            themselves or others.
          </li>
          <li>
            Hate or harassment aimed at caste, religion, region, gender,
            sexuality, disability or any other identity.
          </li>
          <li>
            Dangerous stunts or challenges presented as something to copy.
          </li>
          <li>
            Illegal activity, including drug sales, weapons and fraud.
          </li>
          <li>
            Private information about anyone — phone numbers, addresses, IDs or
            financial details.
          </li>
          <li>
            Impersonating another creator, a brand, or Gully Fame India.
          </li>
          <li>Spam, scams and misleading links.</li>
        </ul>

        <h2>Fair play on the leaderboard</h2>
        <p>
          Points decide who wins, so we treat manipulation seriously. The
          following void an entry and may cost you the battle:
        </p>
        <ul>
          <li>Buying votes, or trading them in bulk with other accounts.</li>
          <li>
            Voting from multiple accounts you control, or using bots and scripts.
          </li>
          <li>
            Entering the same clip into several battles to farm points.
          </li>
          <li>
            Pressuring or paying viewers in exchange for votes.
          </li>
        </ul>

        <h2>Minors</h2>
        <p>
          Accounts must meet the minimum age in our{" "}
          <Link href="/terms">Terms of Service</Link>. [Confirm your minimum age
          and whether parental consent is required for creators under 18, then
          state it here.] Clips featuring children must be posted by a parent or
          guardian and must never be sexualised in any way.
        </p>

        <h2>How moderation works</h2>
        <p>
          Entries are checked automatically when uploaded and reviewed by a
          person when something is flagged. Depending on what we find, we may
          remove the clip, remove it from a battle while leaving it on your
          profile, restrict the account, or remove the account entirely.
        </p>
        <p>
          If a battle has already closed, removing a winning entry can change
          the final standings. We will say so publicly on that battle when it
          happens.
        </p>

        <h2>Reporting and appeals</h2>
        <p>
          The fastest way to report something is the report button on the clip
          itself — it tells us exactly which entry and battle you mean. You can
          also write to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
        <p>
          If you think we got a decision wrong, reply to the notification you
          received and ask for a review. [State your appeal window, for example
          14 days.] Our grievance officer&apos;s details are on the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </PageShell>
  );
}
