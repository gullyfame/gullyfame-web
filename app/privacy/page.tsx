import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, shares and protects your personal data.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell
      path="/privacy"
      eyebrow="privacy policy"
      title="Your data,"
      accent="in plain words."
      intro="This policy explains what we collect when you use the Gully Fame India app and website, why we collect it, and what control you have over it."
      updated="[DD Month 2026]"
    >
      <div className="gf-prose">
        <p>
          This policy applies to the Gully Fame India mobile app and this
          website, operated by [Registered company name] (&quot;we&quot;,
          &quot;us&quot;). [Confirm the legal entity and add its CIN or
          registration number if you publish one.]
        </p>

        <h2>What we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Account details</strong> — name or username, email address
            or phone number, password, and your profile photo if you add one.
          </li>
          <li>
            <strong>Content</strong> — the videos you upload, captions, comments
            and the battles you enter.
          </li>
          <li>
            <strong>Communications</strong> — anything you send to support, a
            report you file, or a prize claim.
          </li>
          <li>
            <strong>Prize details</strong> — if you win, the information needed
            to deliver a prize and meet tax rules. [List exactly what you ask
            for, for example PAN and bank details.]
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device and app data</strong> — device model, operating
            system, app version, language and a device identifier.
          </li>
          <li>
            <strong>Usage data</strong> — clips you watch, votes you cast,
            battles you open, and crash or performance logs.
          </li>
          <li>
            <strong>Approximate location</strong> — derived from your IP
            address, or precise location only if you grant permission for city
            battles. [Confirm which applies.]
          </li>
        </ul>

        <h2>Why we use it</h2>
        <ul>
          <li>To run your account and show your entries in battles.</li>
          <li>To count votes, build leaderboards and award prizes.</li>
          <li>To recommend clips and battles you are likely to care about.</li>
          <li>
            To moderate content, enforce our{" "}
            <Link href="/community-guidelines">Community Guidelines</Link> and
            detect vote manipulation.
          </li>
          <li>To fix bugs, measure performance and improve the product.</li>
          <li>
            To send service messages, and marketing messages only where you have
            opted in.
          </li>
          <li>To meet legal obligations and respond to lawful requests.</li>
        </ul>
        <p>
          [If you rely on the Digital Personal Data Protection Act, 2023, state
          the legal basis you use for each purpose — consent, or a legitimate
          use.]
        </p>

        <h2>Who we share it with</h2>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who host, stream, analyse or
            support the app on our behalf. [Name your hosting, analytics,
            payment and messaging providers.]
          </li>
          <li>
            <strong>Other users</strong> — your username, profile photo, clips,
            points and leaderboard position are public inside the app.
          </li>
          <li>
            <strong>Authorities</strong> where the law requires it, or to
            protect the safety of users.
          </li>
          <li>
            <strong>A buyer</strong> if the business is sold or merged, under
            the same protections.
          </li>
        </ul>

        <h2>Where it is stored</h2>
        <p>
          Your data is stored on servers in [region or country]. [If data leaves
          India, name the destinations and the safeguards you use.]
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep account data while your account is open. If you delete your
          account we remove or anonymise your personal data within [X days],
          except where we must keep records longer for tax, prize or legal
          reasons. Clips removed for breaking the guidelines may be retained for
          [X months] to enforce repeat-offence rules.
        </p>

        <h2>Your rights</h2>
        <p>
          Subject to the law that applies to you, you can ask us to access,
          correct, or delete your data, withdraw consent, or object to certain
          processing. Write to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>{" "}
          and we will respond within [X days]. You can also complain to the
          relevant data protection authority.
        </p>

        <h2>Children</h2>
        <p>
          Gully Fame India is not intended for children under [minimum age]. We
          do not knowingly collect data from them, and we remove such accounts
          when we find them. [Describe your parental-consent process if you
          allow users under 18.]
        </p>

        <h2>Security</h2>
        <p>
          We use encryption in transit, access controls and regular reviews to
          protect your data. No service can promise perfect security, but we
          will tell you and the authorities about a breach where the law
          requires it.
        </p>

        <h2>Cookies and similar technology</h2>
        <p>
          This website uses only the storage needed to make it work. [If you add
          analytics or advertising tags, describe them here and add a consent
          banner.]
        </p>

        <h2>Changes</h2>
        <p>
          If we change this policy we will update the date at the top and, for
          significant changes, tell you in the app before they take effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy go to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          , or to our grievance officer listed on the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </PageShell>
  );
}
