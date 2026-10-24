import Link from "next/link";
import { LegalContents } from "@/components/legal-contents";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/privacy");

/*
 * Source: "PRIVACY POLICY - GullyFame India", V03.09.2026 (version 1.0).
 * Wording follows that document; only spelling slips were corrected.
 * Bracketed [ ] items are details the document leaves blank — fill them in
 * before publishing.
 */

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "scope", title: "Scope" },
  { id: "definitions", title: "Definitions" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "purposes", title: "Purposes of processing" },
  { id: "lawful-basis", title: "Lawful basis, notice and consent" },
  { id: "personalisation", title: "Personalisation, analytics and advertising" },
  { id: "creator-content", title: "Creator content and platform rights" },
  { id: "payments-kyc", title: "Payments, KYC and creator monetisation" },
  { id: "competitions", title: "Competitions, rewards and integrity" },
  { id: "ai-content", title: "AI, deepfakes and synthetic content" },
  { id: "sharing", title: "Sharing and disclosure" },
  { id: "retention", title: "Data retention" },
  { id: "deletion", title: "Data deletion and account closure" },
  { id: "user-rights", title: "User rights" },
  { id: "security", title: "Data security" },
  { id: "breaches", title: "Data breaches and incident response" },
  { id: "cross-border", title: "Cross-border transfers" },
  { id: "grievance-officer", title: "Grievance officer and contact" },
  { id: "changes", title: "Changes to this policy" },
  { id: "governing-law", title: "Governing law" },
  { id: "related-policies", title: "Related policies" },
] as const;

const h = (n: number) => ({ id: sections[n - 1].id });
const alpha = { listStyleType: "lower-alpha" } as const;

export default function PrivacyPage() {
  return (
    <PageShell
      path="/privacy"
      intro="What personal data GullyFame India collects, why we collect it, how we use and share it, how long we keep it, and the rights you have over it."
      updated="3 September 2026 · Version 1.0"
    >
      <LegalContents items={sections} />

      <div className="gf-prose">
        <h2 {...h(1)} className="mt-0!">1. Introduction</h2>
        <p>
          GullyFame India (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
          the &quot;Company&quot;) operates the GullyFame India mobile
          application and related services (collectively, the
          &quot;Platform&quot;). We respect your privacy and are committed to
          protecting personal data in accordance with applicable Indian law,
          including the Digital Personal Data Protection Act, 2023 (&quot;DPDP
          Act&quot;), the Digital Personal Data Protection Rules, 2025, to the
          extent applicable and in force, the Information Technology Act, 2000
          and applicable rules, and other applicable privacy, cybersecurity and
          intermediary requirements.
        </p>
        <p>
          This Privacy Policy (&quot;Policy&quot;) explains what personal data
          we collect, why we collect it, how we use and share it, how long we
          retain it, the choices and rights available to you, and how you can
          contact us.
        </p>

        <h2 {...h(2)}>2. Scope</h2>
        <p>
          This Policy applies to personal data processed through the Platform,
          including the mobile application, websites, APIs, integrations,
          creator tools, competitions, payments, support channels and related
          services. Where a feature has a separate privacy notice or specific
          terms, that notice will apply together with this Policy.
        </p>

        <h2 {...h(3)}>3. Definitions</h2>
        <p>For the purposes of this Policy:</p>
        <ul>
          <li>
            <strong>&quot;Personal Data&quot;</strong> means data about an
            identifiable individual, as defined by applicable law.
          </li>
          <li>
            <strong>&quot;Data Principal&quot;</strong> means the individual to
            whom the personal data relates, where that term applies under the
            DPDP Act.
          </li>
          <li>
            <strong>&quot;Consent&quot;</strong> means a lawful, informed,
            specific and unambiguous indication of the individual&apos;s wishes,
            where the consent is the applicable basis of processing.
          </li>
          <li>
            <strong>&quot;User Content&quot;</strong> means photos, videos,
            audio, text, comments, messages and other material submitted or
            shared through the Platform.
          </li>
        </ul>

        <h2 {...h(4)}>4. Information we collect</h2>
        <p>
          We collect only information reasonably necessary for the purposes
          described in this Policy and as permitted by applicable law.
        </p>

        <h3>4.1 Information you provide</h3>
        <ul>
          <li>
            <strong>Identity data:</strong> name, date of birth, gender and
            profile photograph.
          </li>
          <li>
            <strong>Contact data:</strong> mobile number, email address and,
            where required, address/city/state/PIN code.
          </li>
          <li>
            <strong>Account data:</strong> username, password and
            account-security information.
          </li>
          <li>
            <strong>User Content:</strong> photos, videos, audio, text posts,
            comments, messages and other content you upload or share.
          </li>
          <li>
            <strong>Communications:</strong> support requests, feedback, surveys
            and correspondence.
          </li>
          <li>
            <strong>Payment/KYC data:</strong> bank account details, IFSC, UPI
            ID, payment information and, where legally/operationally necessary,
            government identification such as PAN or other permitted KYC
            information.
          </li>
        </ul>

        <h3>4.2 Sensitive/high-risk information</h3>
        <p>
          Where the Platform uses biometric authentication or processes other
          information that is specially regulated or otherwise high-risk, we
          will provide the required notice and obtain consent or rely on another
          lawful basis where permitted. We will not collect such information
          merely because it is listed in a generic category; collection will
          depend on the feature you use.
        </p>

        <h3>4.3 Information collected automatically</h3>
        <p>
          We may collect device and technical information such as device model,
          operating-system version, app version, identifiers permitted by law,
          IP address, logs, crash reports, performance information, timestamps
          and security signals. We may collect approximate or precise location
          only where enabled by you, required for a feature, or otherwise
          permitted by law, if needed.
        </p>

        <h3>4.4 Information from third parties</h3>
        <p>
          We may receive information from connected accounts, payment
          providers, KYC providers, fraud-prevention services, analytics
          providers, business partners and other lawful sources, subject to
          applicable law and the permissions or consents required.
        </p>

        <h2 {...h(5)}>5. Purposes of processing</h2>
        <p>We may process personal data to:</p>
        <ol style={alpha}>
          <li>create and manage accounts;</li>
          <li>authenticate users and recover accounts;</li>
          <li>provide, maintain and improve the Platform;</li>
          <li>personalise feeds, recommendations and features;</li>
          <li>
            enable creator tools, competitions, rewards, tipping, commerce and
            payouts;
          </li>
          <li>
            process payments, refunds, KYC and tax-related requirements;
          </li>
          <li>
            communicate service updates, security alerts and support responses;
          </li>
          <li>
            send marketing or promotional communications where required with
            consent or another lawful basis;
          </li>
          <li>
            detect fraud, spam, abuse, manipulation and security threats;
          </li>
          <li>moderate and protect the Platform and its community;</li>
          <li>analyse usage, troubleshoot and develop products; and</li>
          <li>
            comply with applicable law, court orders and lawful government
            requests.
          </li>
        </ol>

        <h2 {...h(6)}>6. Lawful basis, notice and consent</h2>
        <p>
          We process personal data on the basis permitted by applicable law,
          including consent where required, specified legitimate uses/lawful
          purposes where available, compliance with legal obligations, and
          other permitted grounds. Where consent is required, we will provide an
          appropriate notice and seek consent in a manner required by law.
        </p>
        <p>
          You may withdraw consent where processing is based on consent.
          Withdrawal may affect features that require that processing, and we
          may continue processing where permitted or required by law, including
          for security, fraud prevention, dispute resolution, accounting, tax or
          legal compliance.
        </p>

        <h2 {...h(7)}>7. Personalisation, analytics and advertising</h2>
        <p>
          We may use technical, usage and preference information to understand
          how the Platform is used, improve products, measure performance,
          prevent abuse and personalise content or recommendations.
        </p>
        <p>
          Where advertising is offered, we may use information to deliver
          contextual advertising and, where permitted, personalised advertising.
          We may work with advertising or measurement providers subject to
          applicable law and required permissions. We do not sell personal data
          in the ordinary course of business.
        </p>

        <h2 {...h(8)}>8. Creator content and platform rights</h2>
        <p>
          You retain ownership of original content that you create and submit,
          subject to any separate agreement you enter into. By uploading or
          sharing User Content, you grant GullyFame the permissions reasonably
          necessary to host, store, reproduce, display, transmit, distribute,
          format, technically modify and make the content available through the
          Platform and to promote the Platform using your content, subject to
          the <Link href="/terms">Terms of Use</Link> and applicable law.
        </p>
        <p>
          You grant GullyFame a worldwide, non-exclusive, royalty-free,
          transferable and sublicensable licence, for the maximum period
          permitted by law, to host, store, reproduce, process, adapt, edit,
          translate, format, publicly perform, publicly display, distribute,
          communicate, promote and otherwise use Your Content as reasonably
          necessary to operate, secure, improve, market and develop the Platform
          and its services.
        </p>
        <p>
          Any separate commercial licensing, brand usage, creator monetisation
          arrangement or third-party exploitation of creator content will be
          governed by the applicable Terms, Creator &amp; Monetisation Policy,
          competition rules or separate agreement. We will not interpret this
          Privacy Policy as granting GullyFame unlimited ownership of your
          original content.
        </p>

        <h2 {...h(9)}>9. Payments, KYC and creator monetisation</h2>
        <p>
          If you use tipping, creator payouts, competitions with monetary
          prizes, commerce or other paid features, we may process payment and
          KYC information necessary to provide the service, prevent fraud,
          comply with tax and financial obligations, verify eligibility and make
          lawful payouts.
        </p>
        <p>
          Payment and KYC information may be processed by payment gateways,
          banks, KYC providers and other service providers acting on our
          behalf. We may retain financial/KYC records for the period required by
          applicable law, accounting, tax, fraud-prevention or
          dispute-resolution requirements.
        </p>

        <h2 {...h(10)}>10. Competitions, rewards and integrity</h2>
        <p>
          Where the Platform operates competitions or rewards, we may process
          account, content, engagement, voting, judging, referral, payment and
          verification information to administer the competition, detect
          manipulation, verify eligibility, determine winners, make payouts and
          handle disputes.
        </p>
        <p>
          We may use automated systems and human review to detect bots,
          purchased engagement, multiple-account abuse, coordinated or automated
          voting, fraudulent referrals and other manipulation. We may restrict,
          suspend, disqualify or withhold rewards where permitted under the
          applicable competition rules.
        </p>

        <h2 {...h(11)}>11. AI, deepfakes and synthetic content</h2>
        <p>
          GullyFame may process content and technical signals to identify or
          manage AI-generated, synthetically generated or materially manipulated
          content where required for safety, transparency, legal compliance or
          Platform integrity.
        </p>
        <p>
          Users must comply with applicable requirements concerning disclosure,
          labelling or other treatment of synthetically generated information as
          detailed in the <Link href="/#faq">FAQs</Link>. Content that
          impersonates a real person, deceives users, facilitates fraud, or
          otherwise violates applicable law or Platform rules may be labelled,
          restricted or removed.
        </p>
        <p>
          GullyFame may use automated detection, provenance or moderation
          technologies and may require additional disclosures or verification
          where appropriate. Specific AI-content rules will also be set out in
          the <Link href="/community-guidelines">Community Guidelines</Link> and{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
        <p>
          Any violation will lead to immediate content deletion, temporary
          account suspension, or permanent termination, along with forfeiture of
          account rights.
        </p>
        <p>
          Upon receiving actual knowledge, court orders or government notices,
          the Platform reserves the right to remove or disable access to
          unlawful content within 3 hours, without prior notice. GullyFame is
          legally obligated to cooperate with law enforcement (under Sections 78
          and 80 of the IT Act) and may preserve and share user logs, metadata,
          or device information during criminal investigations.
        </p>

        <h2 {...h(12)}>12. Sharing and disclosure</h2>
        <p>We may share personal data with:</p>
        <ol style={alpha}>
          <li>
            hosting, cloud, analytics, moderation, customer-support, payment,
            KYC and security service providers acting on our behalf;
          </li>
          <li>affiliates where permitted and necessary for operations;</li>
          <li>
            business partners for features you choose to use, subject to
            applicable requirements;
          </li>
          <li>advertising or measurement providers as permitted by law; and</li>
          <li>
            law-enforcement, regulators, courts or government authorities where
            legally required or permitted.
          </li>
        </ol>
        <p>
          We require appropriate contractual, technical or organisational
          safeguards from relevant processors/service providers where required.
          We do not sell personal data in the ordinary course of business.
        </p>

        <h2 {...h(13)}>13. Data retention</h2>
        <p>
          We retain personal data only for as long as reasonably necessary for
          the purposes for which it was collected, for the operation and
          security of the Platform, and for applicable legal, tax, accounting,
          fraud-prevention, dispute-resolution and enforcement requirements.
        </p>
        <p>
          Retention varies by category. Account data may be retained while an
          account is active and for a limited period thereafter; payment/KYC and
          tax records may be retained for periods required by law; security and
          fraud logs may be retained for as long as reasonably necessary to
          protect the Platform; and support or dispute records may be retained
          for a reasonable period to resolve and evidence the matter.
        </p>
        <p>
          When retention is no longer necessary and no legal exception applies,
          we will delete or anonymise the relevant personal data.
        </p>

        <h2 {...h(14)}>14. Data deletion and account closure</h2>
        <p>
          Where the Platform provides account deletion, you may initiate
          deletion through the account/settings process or by contacting us
          through the privacy contact below. Deletion may not immediately remove
          information that must be retained by law or is required for security,
          fraud prevention, financial records, disputes or legal claims.
        </p>
        <p>
          Public content, competition records, transaction records or
          information already lawfully shared with third parties may be subject
          to separate deletion, retention or archival rules described in the
          relevant terms.
        </p>

        <h2 {...h(15)}>15. User rights</h2>
        <p>
          Subject to applicable law, users may have rights to access information
          about processing, request correction or updating, request erasure
          where applicable, withdraw consent where consent is the basis,
          exercise nomination rights where applicable, and raise grievances with
          GullyFame and/or the competent authority as provided by law.
        </p>
        <p>
          Requests should be made through the contact details below. We may need
          to verify identity before completing a request and may decline or
          limit a request where permitted by law.
        </p>

        <h2 {...h(16)}>16. Data security</h2>
        <p>
          We implement reasonable and appropriate technical and organisational
          safeguards designed to protect personal data against unauthorised
          access, alteration, disclosure, loss, misuse and destruction. Measures
          may include encryption in transit and at rest where appropriate,
          access controls, authentication, logging, monitoring, vulnerability
          management, incident response and vendor due diligence.
        </p>
        <p>
          No electronic system is completely secure. Users are responsible for
          protecting their passwords, devices and account credentials and should
          promptly report suspected unauthorised access.
        </p>

        <h2 {...h(17)}>17. Data breaches and incident response</h2>
        <p>
          If a personal-data breach occurs, GullyFame will assess and respond in
          accordance with applicable law, including required notifications to
          affected users, authorities or other parties where legally required.
          We may take immediate measures such as account restrictions,
          credential resets, content restrictions or other security controls to
          contain an incident.
        </p>

        <h2 {...h(18)}>18. Cross-border transfers</h2>
        <p>
          Where personal data is processed or transferred outside India,
          GullyFame will do so in accordance with applicable Indian law,
          including any restrictions, safeguards or government requirements that
          apply to the relevant transfer or recipient.
        </p>

        <h2 {...h(19)}>19. Grievance officer and contact</h2>
        <p>
          For privacy-related queries, complaints, or requests, contact:
        </p>
        <p>
          <strong>Data Protection Officer / Privacy Officer</strong>
          <br />
          Name: [Name of Data Protection Officer]
          <br />
          Email: [Privacy contact email]
          <br />
          Address: [Postal address]
        </p>
        <p>
          GullyFame India will acknowledge and address grievances within
          timelines prescribed by applicable law and the applicable Grievance
          Redressal Policy.
        </p>

        <h2 {...h(20)}>20. Changes to this policy</h2>
        <p>
          We may update this Policy to reflect changes in law, technology,
          Platform features or business practices. Where required, we will
          provide notice of material changes and obtain consent where legally
          necessary. The latest version will be made available through the
          Platform or other appropriate channel.
        </p>

        <h2 {...h(21)}>21. Governing law</h2>
        <p>
          This Policy is intended to operate under the laws of India and
          applicable rules and regulations. Any dispute relating specifically to
          privacy will be handled in accordance with applicable law and the
          Platform&apos;s <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2 {...h(22)}>22. Related policies</h2>
        <p>
          This Privacy Policy should be read together with the GullyFame India{" "}
          <Link href="/terms">Terms of Use</Link>,{" "}
          <Link href="/community-guidelines">Community Guidelines</Link>,
          Grievance Redressal Policy, Content Removal Policy, Creator &amp;
          Monetisation Policy, Competition &amp; Rewards Policy and Copyright /
          IP Policy, as applicable.
        </p>
      </div>
    </PageShell>
  );
}
