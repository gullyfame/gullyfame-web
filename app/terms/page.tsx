import Link from "next/link";
import { LegalContents } from "@/components/legal-contents";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/terms");

/*
 * Source: "Terms of Service - GullyFame India", V03.09.2026.
 * Wording follows that document; only spelling slips were corrected.
 * Bracketed [ ] items are details the document leaves blank — fill them in
 * before publishing.
 */

const sections = [
  { id: "agreement", title: "Agreement and scope" },
  { id: "eligibility", title: "Eligibility, age and accounts" },
  { id: "platform-rights", title: "Platform rights and operational discretion" },
  { id: "intermediary", title: "Intermediary status and no liability" },
  { id: "user-content", title: "User content – ownership and licence" },
  { id: "content-representations", title: "Content representations and creator responsibility" },
  { id: "public-content", title: "Public content and platform promotion" },
  { id: "prohibited-conduct", title: "Prohibited conduct" },
  { id: "moderation", title: "Moderation, safety and enforcement" },
  { id: "competitions", title: "Competitions, contests, rankings and rewards" },
  { id: "monetisation", title: "Monetisation, creator earnings and payments" },
  { id: "virtual-items", title: "Virtual items, tips and platform credits" },
  { id: "payments", title: "Payments, subscriptions, commerce and refunds" },
  { id: "advertising", title: "Advertising, brand collaborations and sponsored content" },
  { id: "live", title: "GullyFame Live" },
  { id: "intellectual-property", title: "Intellectual property of GullyFame" },
  { id: "third-party", title: "Third-party services" },
  { id: "privacy", title: "Privacy and data" },
  { id: "disclaimer", title: "Disclaimer of warranties" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "termination", title: "Suspension and termination" },
  { id: "changes", title: "Changes to the terms" },
  { id: "grievance", title: "Grievance redressal" },
  { id: "governing-law", title: "Governing law and dispute resolution" },
  { id: "general", title: "General provisions" },
  { id: "contact", title: "Contact and grievance redressal details" },
] as const;

const h = (n: number) => ({ id: sections[n - 1].id });

export default function TermsPage() {
  return (
    <PageShell
      path="/terms"
      intro="The agreement between you and GullyFame India for using the app, the website and everything on them — your account, your content, competitions, rewards and the rules everyone plays by."
      updated="3 September 2026"
    >
      <LegalContents items={sections} />

      <div className="gf-prose">
        <p className="mt-0!">Welcome to GullyFame India.</p>

        <h2 {...h(1)}>1. Agreement and scope</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) constitute a legally
          binding agreement between you and GullyFame India, a company
          incorporated under the laws of India having its registered office at
          [Registered office address] (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), governing your access to and use of the GullyFame
          India mobile application, website, software, features, content,
          tools, and related services (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          By registering, accessing, browsing, or using the Platform, you agree
          to these Terms, the <Link href="/privacy">Privacy Policy</Link> and
          any additional terms displayed for a particular feature, competition,
          promotion, creator programme or transaction service. If you do not
          agree, you must not use the Platform.
        </p>
        <p>
          If you wish to use our Services, please ensure that you are permitted
          to do so in your jurisdiction. You are required to follow certain
          rules while you use our Platform. We have listed these rules in this
          document. Please read these Terms and all other hyperlinks mentioned
          here carefully. Please note that by using our Platform, you agree to
          these Terms. Also, if you are using these services outside India,
          please comply with your local laws.
        </p>
        <p>
          Where a feature has separate terms, those terms apply to that feature
          and prevail to the extent of any inconsistency.
        </p>

        <h2 {...h(2)}>2. Eligibility, age and accounts</h2>
        <p>
          You must satisfy the age and other eligibility requirements applicable
          to the Platform and the particular feature you use. The Platform is
          not intended for children below 18 years.
        </p>
        <p>
          You must provide accurate, complete and current information and must
          not impersonate another person or create an account for an unlawful
          or deceptive purpose.
        </p>
        <p>
          You are responsible for your account credentials and activity
          occurring through your account, except to the extent caused by
          GullyFame&apos;s own legally actionable fault. You must promptly
          notify us of suspected unauthorised access.
        </p>
        <p>
          We may refuse registration, impose eligibility conditions, or suspend
          or terminate an account where reasonably necessary for safety, fraud
          prevention, legal compliance, platform integrity or enforcement of
          these Terms.
        </p>

        <h2 {...h(3)}>3. Platform rights and operational discretion</h2>
        <p>
          GullyFame may, at its discretion and subject to applicable law, add,
          modify, suspend, restrict, discontinue or replace any feature,
          service, interface, algorithm, ranking mechanism, creator programme,
          competition, reward, monetisation facility or commercial offering.
        </p>
        <p>
          GullyFame does not guarantee that any feature will remain available,
          that content will receive a particular number of views or
          engagements, or that any user or creator will be selected, promoted,
          ranked, recommended, monetised or commercially successful.
        </p>
        <p>
          Availability may vary by geography, device, account status, age,
          safety settings, legal requirements, technical capacity and other
          operational considerations.
        </p>

        <h2 {...h(4)}>4. Intermediary status and no liability</h2>
        <p>
          We are an intermediary as defined under the Information Technology
          Act, 2000 and the Information Technology (Intermediary Guidelines and
          Digital Media Ethics Code) Rules, 2021. These Terms are published in
          accordance with the provisions of Rule 3(1) of the Information
          Technology (Intermediary Guidelines and Digital Media Ethics Code)
          Rules, 2021 that require publishing of the rules and regulations, the
          Privacy Policy, and Terms of Use for accessing and using our Platform.
          Our role is limited to providing a platform for users to upload, share
          and display content, created or shared by you and other users.
        </p>
        <p>
          We do not control what you or other people may or may not do on the
          Platform and are thus not responsible for the consequences of such
          actions (whether online or offline). We are not responsible for
          services and features offered by others, even if you access them
          through our Services. Our responsibility for anything that happens on
          our Platform is strictly governed by the laws of India and is limited
          to that extent. You agree that we will not be responsible for any loss
          of profits, revenues, information, or data, or consequential, special,
          indirect, exemplary, punitive, or incidental damages arising to you or
          any other person related to these Terms, even if we know they are
          possible. This includes when we delete your content, information, or
          account.
        </p>
        <p>
          We are an intermediary under Indian law. We do not control what people
          post on our Platform but we expect everyone to comply with the Content
          and <Link href="/community-guidelines">Community Guidelines</Link>.
        </p>

        <h2 {...h(5)}>5. User content – ownership and licence</h2>
        <p>
          You retain ownership of content that you lawfully own and upload to
          the Platform (&quot;Your Content&quot;). GullyFame does not acquire
          ownership merely because you upload or publish Your Content.
        </p>
        <p>
          When you publish any User Content on the Platform, you retain whatever
          ownership rights in that content you had to begin with. However, you
          grant us a licence to use that content. Any User Content will be
          considered non-confidential. You must not post any User Content that
          you consider to be confidential or belonging to third parties, or in
          violation of applicable laws.
        </p>
        <p>
          By submitting, uploading, posting, streaming or otherwise making Your
          Content available, you grant GullyFame a worldwide, non-exclusive,
          royalty-free, transferable and sublicensable licence, for the maximum
          period permitted by law, to host, store, reproduce, process, adapt,
          edit, translate, format, publicly perform, publicly display,
          distribute, communicate, promote and otherwise use Your Content as
          reasonably necessary to operate, secure, improve, market and develop
          the Platform and its services. This licence includes creating
          thumbnails, previews, compilations, promotional extracts and technical
          adaptations; making content available across Platform surfaces and
          supported devices; and permitting service providers, technology
          partners, advertisers and other authorised partners to perform
          functions on GullyFame&apos;s behalf.
        </p>
        <p>
          If you only own the rights in and to a sound recording, but not to the
          underlying musical works embodied in such sound recordings, then you
          must not post such sound recordings to the Services unless you have
          all permissions, clearances from, or are authorised by, the owner of
          any part of the content to submit it to the Services.
        </p>
        <p>
          You grant us a worldwide, royalty-free, sublicensable, and
          transferable licence to host, store, use, display, reproduce, modify,
          adapt, edit, publish, and distribute any User Content. This licence is
          for the limited purpose of operating, developing, providing,
          promoting, and improving the Services and researching and developing
          new ones. You also grant us a perpetual licence to create derivative
          works from, promote, exhibit, broadcast, syndicate, publicly perform,
          and publicly display User Content in any form and in any/all media or
          distribution methods (currently known or later developed).
        </p>
        <p>
          To the extent it is necessary, when you appear in, create, upload,
          post, or send User Content, you also grant us an unrestricted,
          worldwide, perpetual right and licence to use your name, likeness, and
          voice, including in connection with commercial or sponsored content.
          This means, among other things, that you will not be entitled to any
          compensation if your data is used by us for marketing, advertising, or
          improving our services.
        </p>
        <p>
          Where Your Content is submitted to a competition, creator programme,
          campaign, brand collaboration or other special programme, the
          applicable programme rules may provide additional rights, permissions
          or commercial terms and will govern that participation.
        </p>
        <p>
          Except where expressly stated in applicable programme terms, GullyFame
          does not claim ownership of Your Content and does not promise payment
          merely because Your Content is hosted, displayed, recommended or used
          on the Platform.
        </p>
        <p>
          You further acknowledge and agree that we may generate revenues,
          increase goodwill or otherwise increase our value from your use of the
          Services, including, by way of example and not limitation, through the
          sale of advertising, sponsorships, promotions and usage data, and
          except as specifically permitted by us in these Terms or in another
          agreement you enter into with us, you will have no right to share in
          any such revenue, goodwill or value whatsoever.
        </p>
        <p>
          You may use our Services only if you are capable of forming a binding
          agreement with us and are legally permitted to use our Services. If
          you are accepting these Terms on behalf of a company or any legal
          person, then you represent and warrant that you have the authority to
          bind such entity to these Terms and effectively &quot;you&quot; and
          &quot;your&quot; shall refer to the company.
        </p>
        <p>Please ensure that you are allowed to use our services under the law.</p>

        <h2 {...h(6)}>6. Content representations and creator responsibility</h2>
        <p>
          You represent and warrant that you have all rights, permissions,
          licences and consents necessary for Your Content and its use by
          GullyFame under these Terms.
        </p>
        <p>
          You are responsible for obtaining permissions relating to music,
          performances, images, brands, locations, third-party likenesses,
          confidential material and other rights contained in Your Content.
        </p>
        <p>
          You must not upload content that infringes intellectual-property,
          privacy, publicity, contractual or other rights, or that violates
          applicable law or Platform policies.
        </p>

        <h2 {...h(7)}>7. Public content and platform promotion</h2>
        <p>
          Content you choose to make public may be viewed, shared, embedded,
          copied or otherwise interacted with by other users depending on
          Platform functionality and your settings.
        </p>
        <p>
          To the extent permitted by law, GullyFame may use public profile
          information, creator names or handles, public content previews and
          performance statistics to operate discovery, recommendations,
          leaderboards, competitions, editorial features, promotional campaigns
          and Platform marketing.
        </p>
        <p>
          Removal of content from your profile may not immediately remove
          copies, cached versions, lawful reposts, analytics records or content
          already incorporated into completed promotional materials, subject to
          applicable law and the <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2 {...h(8)}>8. Prohibited conduct</h2>
        <p>
          You must not use the Platform for fraud, deception, impersonation,
          harassment, stalking, abuse or unlawful discrimination; upload malware
          or harmful code; interfere with Platform operations; scrape or harvest
          data without written authorisation; reverse engineer except where
          legally permitted; access another account without authority;
          manipulate rankings, views, likes, followers, votes or competitions;
          use bots or automated engagement; conduct scams or unauthorised
          commercial solicitations; transmit unlawful, defamatory, threatening
          or obscene material; or otherwise violate applicable law or Platform
          rules.
        </p>
        <p>
          GullyFame may investigate suspected violations and take action it
          considers reasonably appropriate, including content restriction,
          demonetisation, loss of rewards, removal, account limitation,
          suspension or termination.
        </p>
        <p>
          You agree to not interfere with, or use non-public areas of our
          Platform, Services, and our technical delivery system. You will not
          introduce any trojans, viruses, any other malicious software, any bots
          or scrape our Platform for any user information. Additionally, you
          will not probe, scan, or test the vulnerability of any system,
          security or authentication measures implemented by us. If you tamper
          or attempt to tamper with our technological design and architecture,
          we will terminate your user profile and ban you from using our
          services. We may further report such actions to the appropriate law
          enforcement authorities and proceed against you with legal actions for
          claiming damages.
        </p>

        <h2 {...h(9)}>9. Moderation, safety and enforcement</h2>
        <p>
          GullyFame may use automated tools, human review and third-party
          systems to detect spam, fraud, abuse, unlawful content, copyright
          issues, manipulation, unsafe behaviour and other policy violations.
        </p>
        <p>
          We may review, rank, label, restrict, age-gate, demonetise, remove or
          disable access to content and may preserve or disclose information
          where required or permitted by law.
        </p>
        <p>
          Enforcement decisions may consider severity, recurrence, user safety,
          legal obligations, evidence available to us and Platform integrity. We
          do not guarantee that every violation will be detected or acted upon.
          Takedowns will be in accordance with the timelines applicable under
          Indian law.
        </p>
        <p>
          Where applicable, users may use the grievance or appeal process
          provided by GullyFame, subject to applicable law and procedure.
        </p>
        <p>
          Our aim is to foster a positive and inclusive community and provide
          amazing social experiences for all users. For this, we need you to
          agree that:
        </p>
        <ul>
          <li>
            You will not use the Services for any purpose that is fraudulent,
            misleading, illegal or prohibited in these Terms.
          </li>
          <li>
            You will not use any robot, spider, crawler, scraper, or other
            automated means or interface to access the Services or extract other
            users&apos; information.
          </li>
          <li>
            You will not use or develop any third-party applications that
            interact with the Services or other users&apos; content or
            information without our written consent.
          </li>
          <li>
            You will not use the Services in a way that could interfere with,
            disrupt, negatively affect, or inhibit other users from fully
            enjoying the Services, or that could damage, disable, overburden, or
            impair the functioning of the Services.
          </li>
          <li>
            You will not post content that can be considered to infringe any
            intellectual property rights of any third party.
          </li>
          <li>
            You will not falsely represent yourself as another person or
            representative of another person to use our Services.
          </li>
          <li>
            You will not use or attempt to use another user&apos;s account,
            username, or password without their permission.
          </li>
          <li>You will not solicit login credentials from another user.</li>
          <li>
            You will not post content that may be considered as harmful to
            minors. Please refer to the Content and{" "}
            <Link href="/community-guidelines">Community Guidelines</Link>{" "}
            regarding the same.
          </li>
          <li>
            You will not post content that contains or links to pornography,
            graphic violence, threats, hate speech, or incitements to violence.
          </li>
          <li>
            You will not upload viruses or other malicious code or otherwise
            compromise the security of the Services.
          </li>
          <li>
            You will not attempt to circumvent any content-filtering techniques
            we employ or attempt to access areas or features of the Services
            that you are not authorised to access.
          </li>
          <li>
            You will not probe, scan, or test the vulnerability of our Services
            or any system or network.
          </li>
          <li>
            You will not post any content that in any way or form threatens the
            unity, integrity, defence, security or sovereignty of India, friendly
            relations with foreign states, or public order or causes incitement
            to the commission of any cognisable offence or prevents investigation
            of any offence or is insulting any other nation.
          </li>
          <li>
            You will not encourage or promote any activity that violates these
            Terms.
          </li>
          <li>
            You will not circumvent any feature, action, measure, or policy
            implemented/imposed by us. For example, in the event you are banned
            from using the Services, you will not try to circumvent any account
            suspension or similar measures we may take against you.
          </li>
        </ul>
        <p>
          In addition to the above, please note that we may share your
          information with appropriate law enforcement authorities if we have a
          good-faith belief that it is reasonably necessary to share your
          personal data or information in order to comply with any legal
          obligation or any government request; or to protect the rights or
          prevent any harm to our property or safety, our customers, or the
          public; or to detect, prevent or otherwise address public safety,
          fraud, security or technical issues. You understand, however, that we
          cannot be held responsible for any actions done by or to you by a
          third party or user by way of using our Platform.
        </p>
        <p>
          We have developed a platform for people to engage in amazing social
          experiences; please do not share any content which is illegal or
          causes any harm to the well-being of members of the society or
          community.
        </p>

        <h2 {...h(10)}>10. Competitions, contests, rankings and rewards</h2>
        <p>
          Competitions, contests, challenges, voting mechanisms, rankings,
          prizes and creator programmes are governed by their specific rules,
          which may include eligibility, deadlines, judging criteria, voting
          mechanics, verification, disqualification, tax, prize delivery and
          other conditions.
        </p>
        <p>
          GullyFame may disqualify entries or withhold, cancel or recover
          rewards where there is suspected fraud, manipulation, cheating, breach
          of rules, ineligibility or other circumstances permitted by the
          applicable rules.
        </p>
        <p>
          Rankings, recommendations, votes, views, engagement metrics and
          automated scores may be affected by algorithms, moderation, fraud
          detection, technical corrections and other factors. No particular
          ranking or outcome is guaranteed.
        </p>
        <p>
          Unless expressly promised in writing, participation does not create
          any employment, agency, partnership, endorsement or guaranteed
          commercial relationship with GullyFame.
        </p>

        <h2 {...h(11)}>11. Monetisation, creator earnings and payments</h2>
        <p>
          Where monetisation is offered, eligibility, rates, revenue shares,
          minimum payout thresholds, deductions, taxes, payment schedules,
          verification requirements and payment methods may be specified in
          separate creator or payment terms.
        </p>
        <p>
          GullyFame may change or discontinue monetisation programmes
          prospectively, subject to applicable law and any non-waivable
          contractual obligations.
        </p>
        <p>
          Amounts may be withheld, adjusted, reversed or set off where
          reasonably necessary to address refunds, chargebacks, fraud, duplicate
          credits, payment errors, taxes, regulatory requirements or violations
          of applicable programme rules.
        </p>
        <p>
          You are responsible for your own taxes and statutory reporting except
          for amounts GullyFame is legally required to withhold or collect.
        </p>

        <h2 {...h(12)}>12. Virtual items, tips and platform credits</h2>
        <p>
          If the Platform offers tips, virtual gifts, credits, tokens or similar
          digital features, they are platform functionality and are not cash,
          bank deposits or a promise of monetary value unless expressly stated
          otherwise.
        </p>
        <p>
          Unused virtual items may be subject to expiry, non-transferability,
          restrictions, refund rules or other conditions stated at purchase or
          within the relevant feature.
        </p>
        <p>
          Users must not sell, exchange, transfer or commercially exploit
          Platform credits or virtual items except through an expressly
          authorised GullyFame mechanism.
        </p>

        <h2 {...h(13)}>13. Payments, subscriptions, commerce and refunds</h2>
        <p>
          Paid services, subscriptions, commerce transactions and other charges
          are subject to applicable checkout terms, payment-provider rules and
          refund or cancellation policies.
        </p>
        <p>
          Prices, taxes, fees, subscription benefits and billing periods may
          change prospectively with appropriate notice where required by law.
        </p>
        <p>
          Refunds and cancellations will be handled in accordance with
          applicable service terms, payment-provider rules and mandatory Indian
          consumer law. Nothing in these Terms excludes a right that cannot
          lawfully be excluded.
        </p>

        <h2 {...h(14)}>14. Advertising, brand collaborations and sponsored content</h2>
        <p>
          GullyFame may display advertisements, sponsored listings, affiliate
          content, brand collaborations, offers and promotional material.
        </p>
        <p>
          Creators participating in paid or sponsored campaigns must comply with
          applicable disclosure, advertising, consumer-protection and
          brand-safety requirements and campaign-specific terms.
        </p>
        <p>
          We will not, however, be liable to pay you any revenue share if you
          purchase any products advertised to you. We do not endorse any
          products or vouch for the authenticity of the products. Merely
          advertising of products by the users on our Platform does not amount
          to an endorsement by us.
        </p>
        <p>
          GullyFame may reject, pause, modify or remove advertising or branded
          content where it reasonably believes the material creates legal,
          safety, reputational or Platform-integrity concerns.
        </p>

        <h2 {...h(15)}>15. GullyFame Live</h2>
        <p>We do not give any assurances stating that:</p>
        <ul>
          <li>
            the Livestream feature will be error-free or always available for
            your use;
          </li>
          <li>
            all functionalities of the Livestream feature will be available at
            all times;
          </li>
          <li>
            any content posted by other users using the Livestream feature will
            be accurate.
          </li>
        </ul>
        <p>
          Please note that we will temporarily record and store your Livestream
          for a duration of twenty-one (21) days for purposes of compliance with
          applicable rules and regulations as well as incident investigations.
          We may delete these recordings after the twenty-one (21) day period,
          provided there are no reports on the Livestream. However, we may still
          store the same for a longer period of time in order to cooperate with
          legal authorities and law enforcement mechanisms.
        </p>

        <h2 {...h(16)}>16. Intellectual property of GullyFame</h2>
        <p>
          All rights, title and interest in the Platform and GullyFame&apos;s
          software, algorithms, interfaces, designs, logos, trademarks, trade
          dress, databases, systems, compilations and proprietary materials
          belong to GullyFame or its licensors.
        </p>
        <p>
          Except as expressly permitted, you may not copy, modify, distribute,
          sell, lease, sublicense, publicly display, reverse engineer, create
          derivative works from or commercially exploit GullyFame&apos;s
          proprietary materials.
        </p>
        <p>
          Feedback and suggestions you voluntarily provide may be used by
          GullyFame without restriction, attribution or payment, provided that
          this does not transfer ownership of Your Content.
        </p>

        <h2 {...h(17)}>17. Third-party services</h2>
        <p>
          The Platform may integrate with app stores, payment gateways,
          analytics providers, cloud providers, advertising networks, social
          networks and other third-party services. GullyFame does not control
          and, to the maximum extent permitted by law, is not responsible for
          third-party services, their availability, content, policies or acts
          and omissions.
        </p>
        <p>
          Your use of third-party services is subject to their applicable terms
          and privacy policies.
        </p>

        <h2 {...h(18)}>18. Privacy and data</h2>
        <p>
          Use of personal data is governed by GullyFame&apos;s{" "}
          <Link href="/privacy">Privacy Policy</Link>. GullyFame may process
          information for account administration, service delivery, safety,
          fraud prevention, analytics, personalisation, support, legal
          compliance and other purposes described in the Privacy Policy, subject
          to applicable law.
        </p>
        <p>
          Where consent is required, applicable consent and withdrawal
          mechanisms will apply. Withdrawal may affect access to features where
          processing is necessary to provide the service or where retention is
          legally required.
        </p>

        <h2 {...h(19)}>19. Disclaimer of warranties</h2>
        <p>
          To the maximum extent permitted by law, the Platform is provided on an
          &quot;as is&quot; and &quot;as available&quot; basis. GullyFame does
          not warrant uninterrupted, error-free, secure or continuously
          available operation.
        </p>
        <p>
          GullyFame does not guarantee the accuracy, completeness, legality,
          quality, suitability, availability or performance of user-generated
          content, third-party content, recommendations, rankings, advertising,
          creator opportunities or commercial outcomes.
        </p>
        <p>
          GullyFame is not responsible for user conduct, user content or
          third-party acts except to the extent liability cannot lawfully be
          excluded.
        </p>

        <h2 {...h(20)}>20. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, GullyFame and its
          directors, officers, employees, agents, affiliates, licensors and
          service providers will not be liable for indirect, incidental,
          special, consequential, exemplary or punitive damages, or for loss of
          profits, revenue, goodwill, business opportunities, data or
          anticipated savings arising from or related to use of the Platform.
        </p>
        <p>
          To the maximum extent permitted by law, GullyFame&apos;s aggregate
          liability for claims arising from a user&apos;s use of a particular
          paid service will not exceed the amount actually paid by that user to
          GullyFame for that service during the three months immediately
          preceding the event giving rise to the claim.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot
          lawfully be excluded or limited under applicable Indian law.
        </p>

        <h2 {...h(21)}>21. Indemnity</h2>
        <p>
          To the maximum extent permitted by law, you agree to indemnify and
          hold harmless GullyFame and its affiliates, directors, officers,
          employees, agents, licensors and service providers from claims,
          losses, liabilities, damages, penalties, costs and reasonable expenses
          arising from or relating to your breach of these Terms, Your Content,
          your unlawful conduct, your misuse of the Platform, or your
          infringement of another person&apos;s rights.
        </p>
        <p>
          This obligation does not apply to the extent a claim is finally
          determined to have resulted solely from GullyFame&apos;s own wilful
          misconduct or liability that cannot legally be shifted to you.
        </p>

        <h2 {...h(22)}>22. Suspension and termination</h2>
        <p>
          You may stop using the Platform at any time and may delete your
          account where the relevant functionality is available.
        </p>
        <p>
          GullyFame may suspend, restrict, demonetise or terminate access, with
          or without prior notice where permitted by law, if you breach these
          Terms, create safety or legal risk, engage in fraud or manipulation,
          misuse Platform systems, fail verification, or where action is
          reasonably necessary to protect users, GullyFame or third parties.
        </p>
        <p>
          Upon termination, obligations that by their nature should survive
          will continue, including intellectual property, content licences to
          the extent already granted, payment obligations, indemnity,
          disclaimers, limitation of liability and dispute provisions.
        </p>

        <h2 {...h(23)}>23. Changes to the terms</h2>
        <p>
          Our Platform is dynamic and may change rapidly. GullyFame may update
          these Terms to reflect changes in services, technology, law, security,
          commercial models or operational requirements. Where required by law,
          we will provide appropriate notice of material changes.
        </p>
        <p>
          Unless a different effective date is specified, updated Terms become
          effective when posted or otherwise communicated. Continued use after
          the effective date constitutes acceptance to the extent permitted by
          law.
        </p>
        <p>
          Visit this page to see any changes that we may make and services that
          we may add or modify, from time to time.
        </p>

        <h2 {...h(24)}>24. Grievance redressal</h2>
        <p>
          GullyFame will publish and maintain the details of the applicable
          grievance officer and grievance mechanism as required by Indian law.
          Complaints may relate to unlawful content, privacy, account issues,
          intellectual property, transactions or other Platform concerns.
        </p>
        <p>
          Users should provide sufficient information to allow the complaint to
          be investigated. Statutory timelines and remedies will apply where
          required.
        </p>

        <h2 {...h(25)}>25. Governing law and dispute resolution</h2>
        <p>
          These Terms are governed by the laws of India, subject to mandatory
          rights and remedies available under applicable law.
        </p>
        <p>
          The parties will first attempt in good faith to resolve a dispute
          through written notice and discussion. Where appropriate and legally
          permissible, the dispute may be referred to mediation under applicable
          law.
        </p>
        <p>
          Any disputes shall be dealt with in accordance with the laws applicable
          and prevalent in India, and the courts at New Delhi shall have
          exclusive jurisdiction to adjudicate and decide the same.
        </p>
        <p>
          Nothing prevents either party from seeking urgent interim, injunctive
          or equitable relief from a court of competent jurisdiction. Mandatory
          consumer or statutory remedies remain available where applicable.
        </p>

        <h2 {...h(26)}>26. General provisions</h2>
        <p>
          If any provision is held invalid or unenforceable, the remaining
          provisions will continue in effect.
        </p>
        <p>
          GullyFame&apos;s failure to enforce a provision is not a waiver of its
          right to enforce it later.
        </p>
        <p>
          You may not assign or transfer your rights or obligations under these
          Terms without GullyFame&apos;s prior written consent, except where
          prohibited by law. GullyFame may assign or transfer its rights and
          obligations in connection with a merger, acquisition, restructuring,
          financing, sale of assets or similar transaction, subject to
          applicable law.
        </p>
        <p>
          These Terms, together with the{" "}
          <Link href="/privacy">Privacy Policy</Link> and applicable
          feature-specific terms, constitute the agreement governing use of the
          Platform.
        </p>

        <h2 {...h(27)}>27. Contact and grievance redressal details</h2>
        <p>
          <strong>Legal entity:</strong> Gully Fame India Private Limited
          <br />
          <strong>CIN:</strong> U62099DL2025PTC455455
          <br />
          <strong>Registered office:</strong> House 55B, Ground Floor,
          Najafgarh Road, (West Delhi) Delhi - 110015
          <br />
          <strong>Grievance office:</strong> House 55B, Ground Floor,
          Najafgarh Road, (West Delhi) Delhi - 110015
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:admin@gullyfame.com">admin@gullyfame.com</a>
          <br />
          <strong>Phone:</strong> <a href="tel:+919821234605">+91 98212 34605</a>
          <br />
          <strong>Response/acknowledgement:</strong> As prescribed by applicable
          law.
        </p>
      </div>
    </PageShell>
  );
}
