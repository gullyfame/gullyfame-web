import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms you agree to when you use the ${siteConfig.name} app and website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell
      path="/terms"
      eyebrow="terms of service"
      title="The rules of"
      accent="the game."
      intro="These terms are the agreement between you and Gully Fame India. By creating an account or entering a battle, you accept them."
      updated="[DD Month 2026]"
    >
      <div className="gf-prose">
        <h2>1. Who we are</h2>
        <p>
          Gully Fame India is operated by [Registered company name], a company
          registered in India at [registered address]. In these terms,
          &quot;we&quot; and &quot;us&quot; mean that company, and
          &quot;you&quot; means the person using the service.
        </p>

        <h2>2. Your account</h2>
        <ul>
          <li>
            You must be at least [minimum age] to hold an account. [State
            whether users under 18 need a parent or guardian to agree on their
            behalf.]
          </li>
          <li>
            Give accurate details and keep your login credentials to yourself.
            You are responsible for what happens on your account.
          </li>
          <li>One person, one account, unless we agree otherwise in writing.</li>
          <li>Tell us promptly if you think someone else has access.</li>
        </ul>

        <h2>3. Your content</h2>
        <p>
          You keep ownership of everything you upload. To run the service, you
          grant us a worldwide, non-exclusive, royalty-free licence to host,
          store, reproduce, adapt for formatting, publish and display your
          content inside Gully Fame India, and to promote the service and the
          battles you enter. [If you want to use winning clips in advertising,
          say so explicitly here.]
        </p>
        <p>
          This licence ends when you delete your content or your account, except
          for copies already shared by others, retained in backups, or kept
          because the law requires it.
        </p>
        <p>You confirm that, for everything you upload:</p>
        <ul>
          <li>You created it or hold the rights to it, including any music.</li>
          <li>
            Everyone identifiable in it has agreed to appear and to be shown
            publicly.
          </li>
          <li>
            It does not break our{" "}
            <Link href="/community-guidelines">Community Guidelines</Link> or
            any law.
          </li>
        </ul>

        <h2>4. Battles, points and prizes</h2>
        <ul>
          <li>
            Each battle has its own theme, entry window, eligibility rules and
            prizes, shown on that battle&apos;s page. Those rules sit alongside
            these terms.
          </li>
          <li>
            Points come from votes cast in the app. We may discount votes we
            believe are automated, bought or otherwise manipulated.
          </li>
          <li>
            Standings are provisional until a battle closes and results are
            confirmed. We may correct a leaderboard if we find manipulation or a
            technical fault.
          </li>
          <li>
            Prizes are awarded to the accounts that meet the published criteria.
            Prizes cannot be exchanged for cash unless the battle says so.
          </li>
          <li>
            Winners may need to verify identity and provide details required for
            tax. Taxes and any charges on a prize are the winner&apos;s
            responsibility unless stated otherwise.
          </li>
          <li>
            Employees of [company name] and their immediate families are not
            eligible to win. [Adjust if this is not your policy.]
          </li>
        </ul>

        <h2>5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break the Community Guidelines or any applicable law.</li>
          <li>
            Interfere with votes, rankings or any other part of the service.
          </li>
          <li>
            Scrape, reverse engineer, or build automated access to the service
            without our permission.
          </li>
          <li>
            Upload malware, or attempt to gain access to accounts or systems that
            are not yours.
          </li>
        </ul>

        <h2>6. Moderation and suspension</h2>
        <p>
          We may remove content, withdraw an entry from a battle, withhold a
          prize, or suspend or close an account that breaks these terms or the
          guidelines. Where it is reasonable to do so, we will tell you why and
          how to appeal.
        </p>

        <h2>7. Our content and marks</h2>
        <p>
          The app, the website, and the Gully Fame India name and logo belong to
          us. You may not copy or use them except as the service allows.
        </p>

        <h2>8. Service availability</h2>
        <p>
          We work to keep the service running but do not promise it will be
          uninterrupted or error free. We may change, pause or discontinue
          features. If we close a battle early for technical reasons, we will
          explain how entries and prizes are handled.
        </p>

        <h2>9. Liability</h2>
        <p>
          To the extent the law allows, we are not liable for indirect or
          consequential loss, lost profits, or lost content. Nothing in these
          terms limits liability that cannot be limited by law. [Have a lawyer
          set the liability cap and any carve-outs for your jurisdiction.]
        </p>

        <h2>10. Ending the agreement</h2>
        <p>
          You can stop using the service and delete your account at any time. We
          may end this agreement if you seriously or repeatedly break these
          terms. Sections that by their nature should survive — content licence
          for already-shared copies, liability and governing law — continue to
          apply.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of India, and the courts of
          [city] have exclusive jurisdiction. [Confirm the city with your
          lawyer.]
        </p>

        <h2>12. Changes to these terms</h2>
        <p>
          We may update these terms. We will change the date at the top and, for
          significant changes, give notice in the app before they take effect.
          Continuing to use the service after that means you accept the new
          terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
