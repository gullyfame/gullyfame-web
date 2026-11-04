/** Page content in one place, so copy changes never mean hunting through JSX. */

/** Anchors are prefixed with "/" so they also work from the sub-pages. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Battles", href: "/#battles" },
  { label: "Leaderboard", href: "/#leaderboard" },
  { label: "Categories", href: "/#categories" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Pick a battle",
    body: "Browse weekly battles like Dance-Off Delhi or Gully Chef Wars and tap Participate.",
    tone: "light",
  },
  {
    number: "02",
    title: "Drop your clip",
    body: "Hit the big Upload button, record or pick your best take and send it in.",
    tone: "orange",
  },
  {
    number: "03",
    title: "Climb & win",
    body: "Every vote earns points. Top the leaderboard, win prizes and take the crown.",
    tone: "lilac",
  },
] as const;

export const categories = [
  { name: "Music", note: "Mic-Drop", icon: "music", featured: false, description: "Singing, covers, rap, beatboxing, original songs, and lip-sync videos." },
  { name: "Dance", note: "Dance-Off", icon: "dance", featured: true, description: "Dance challenges, choreography, trending moves, and dance battles." },
  { name: "Comedy", note: "Open Mic", icon: "comedy", featured: false, description: "Relatable jokes, memes, POVs, roasts, and funny skits." },
  { name: "Food", note: "Foodie Mode", icon: "food", featured: false, description: "Street food, recipes, food reviews, and cooking challenges." },
  { name: "Fashion & Beauty", note: "Fit Check", icon: "fashion", featured: false, description: "Outfit transitions, streetwear, GRWM, makeup, and styling tips." },
] as const;

export const battles = [
  {
    rank: "TOP 1",
    title: "Dance-Off",
    highlight: "Delhi",
    meta: "Dance · Hip-Hop · Delhi",
    live: true,
    glow: "#EC9A15",
  },
  {
    rank: "TOP 2",
    title: "Gully",
    highlight: "Chef Wars",
    meta: "Cooking · Street food",
    live: false,
    glow: "#FF6B35",
  },
  {
    rank: "TOP 3",
    title: "Mic-",
    highlight: "Drop",
    meta: "Music · Open mic",
    live: false,
    glow: "#A78BFA",
  },
] as const;

export const leaderboardPoints = [
  "Live ranks for every battle",
  "Your spot, always highlighted",
  "Winners podium when results drop",
] as const;

export const perks = [
  {
    title: "Real prizes",
    body: "Win weekly battles, take home prizes — not just likes.",
    icon: "trophy",
  },
  {
    title: "Your city, your crew",
    body: "City battles from Delhi to Mumbai. Rep your gully.",
    icon: "pin",
  },
  {
    title: "Fair & open ranks",
    body: "Points come from votes. Everyone can see the board.",
    icon: "bars",
  },
  {
    title: "Safe vibes only",
    body: "Moderated battles so the focus stays on talent.",
    icon: "shield",
  },
] as const;

/**
 * Source: "FAQs - GullyFame India", V03.09.2026. Wording follows that
 * document, trimmed for the web and with spelling slips corrected.
 * Also feeds the FAQPage JSON-LD, so answers stay in sync with structured
 * data. An answer is one or more paragraphs, each optionally followed by a
 * list of points.
 */
export type FaqBlock = {
  /** Lead paragraph. */
  text: string;
  /** Points under that paragraph, if any. */
  points?: readonly string[];
};

export type Faq = {
  question: string;
  answer: readonly FaqBlock[];
};

export const faqs: readonly Faq[] = [
  {
    question: "What is GullyFame India and how does it work?",
    answer: [
      {
        text: "GullyFame India is a mobile-based platform that lets you upload, view, share and interact with user-generated content, including short videos, images, text posts and comments. The app is governed by the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and other applicable Indian laws. Using the app means you accept our Terms of Use, Privacy Policy and Community Guidelines in full.",
      },
    ],
  },
  {
    question: "Who can use this app?",
    answer: [
      {
        text: "The app is intended for Indian residents who are at least 18 years of age or have full legal capacity under law. We may ask for proof of age at any time, and we are not liable for anyone who misrepresents their age or identity.",
      },
    ],
  },
  {
    question: "What do I need to register?",
    answer: [
      {
        text: "A valid mobile number or email address, a secure password, and any verification we ask for, such as an OTP. Everything you tell us must be true, accurate, current and complete. Fake, automated or fraudulent registrations are suspended or permanently deactivated.",
      },
    ],
  },
  {
    question: "What are my responsibilities as a user?",
    answer: [
      {
        text: "Use the app only for lawful purposes and in line with Indian criminal, cyber, data protection and intellectual property law. You agree not to:",
        points: [
          "Post, upload or transmit anything defamatory, obscene, hateful, pornographic, violent or illegal.",
          "Impersonate any person or organisation, or misrepresent your connection to one.",
          "Use the app to spread terrorism, child sexual abuse material, self-harm, dangerous activities or anything else unlawful under the Bharatiya Nyaya Sanhita, 2023, the Information Technology Act, 2000 or other Indian law.",
        ],
      },
      {
        text: "Any violation leads to immediate content removal, account suspension and a report to law enforcement.",
      },
    ],
  },
  {
    question: "What are the rules on AI content and deepfakes?",
    answer: [
      {
        text: "We value authenticity, so anything made, changed or enhanced with AI, deepfake technology, synthetic voice or other manipulation must be labelled and disclosed before you publish it. Use the in-app AI tag when you upload.",
      },
      {
        text: "You must not upload AI-generated media that deceives, impersonates a real person without their consent, defames, spreads misinformation or creates non-consensual explicit images. Editing someone's face or voice without consent to deceive, defame or commit fraud is illegal under Indian law, and that applies to parody and memes too.",
      },
      {
        text: "Unlabelled or harmful synthetic content is removed as soon as we detect it or it is reported, and the account may be permanently terminated. Non-consensual explicit content, serious identity theft and government removal orders are reviewed immediately and can be taken down within three hours.",
      },
      {
        text: "To report a deepfake of yourself, use the in-app Report button and choose “Impersonation / AI Deepfake”, which also gives you the Grievance Officer's contact details. If you believe a takedown was wrong, you can appeal, and escalate to the Grievance Appellate Committee.",
      },
    ],
  },
  {
    question: "Are bots, fake engagement or vote manipulation allowed?",
    answer: [
      {
        text: "No. Artificial or manipulated engagement is strictly prohibited. You must not:",
        points: [
          "Use bots, automated software or third-party services to generate fake likes, views, shares or comments.",
          "Create multiple accounts to manipulate voting, contests, rankings or rewards.",
          "Take part in coordinated engagement schemes or vote tampering.",
        ],
      },
      {
        text: "Any attempt to manipulate rankings or competition outcomes means immediate disqualification, loss of rewards and account termination.",
      },
    ],
  },
  {
    question: "Can I use the app for sponsored or promotional posts?",
    answer: [
      {
        text: "Yes, within our guidelines. Sponsored posts, paid partnerships, affiliate links and promotional material must be clearly labelled and must follow Indian consumer protection law and the Advertising Standards Council of India (ASCI) guidelines.",
      },
      {
        text: "Unauthorised commercial solicitation, spam, phishing, malware, fake reviews, misleading claims and advertising of prohibited goods or services are banned. We may block accounts or remove promotional content that breaks these rules.",
      },
    ],
  },
  {
    question: "Who owns the content I post?",
    answer: [
      {
        text: "You do. You keep full ownership and copyright of the original content you create and upload.",
      },
      {
        text: "By uploading, you grant GullyFame India a worldwide, non-exclusive, royalty-free, transferable and sublicensable licence, for the maximum period permitted by law, to host, store, reproduce, process, adapt, edit, translate, format, publicly perform, publicly display, distribute, communicate, promote and otherwise use your content as reasonably necessary to operate, secure, improve, market and develop the platform and its services.",
      },
      {
        text: "You confirm that you own or hold every right, licence and permission needed for what you upload, including background music, imagery and the likeness of anyone who appears in it.",
      },
    ],
  },
  {
    question: "How is content moderated?",
    answer: [
      {
        text: "GullyFame India is an intermediary under Indian law. We do not monitor every post in real time, but we run automated and human moderation guided by our Community Guidelines. We may restrict, disable access to or permanently remove content that breaks our policies or the law, and report illegal acts to the authorities.",
      },
    ],
  },
  {
    question: "How is my personal data handled under the DPDP Act?",
    answer: [
      {
        text: "We process personal data in compliance with the Digital Personal Data Protection Act, 2023 and the rules under it.",
        points: [
          "What we collect: device information, IP addresses, location data, usage analytics and user identifiers.",
          "Why: to run the service, verify accounts, analyse usage, keep the platform secure and meet legal requirements.",
          "Your rights: access, update, correct or delete your personal data, and withdraw consent at any time through app settings, subject to operational and regulatory requirements.",
        ],
      },
      {
        text: "Our Privacy Policy has the full detail.",
      },
    ],
  },
  {
    question: "How are my privacy and account kept secure?",
    answer: [
      {
        text: "We use commercially reasonable technical and organisational measures to protect your data against unauthorised access, disclosure, alteration or destruction, and we maintain an internal security incident and breach response framework that meets regulatory notification requirements.",
      },
      {
        text: "Keeping your login details confidential is your responsibility. Report any suspected breach or unauthorised access to support immediately.",
      },
    ],
  },
  {
    question: "How do I report abusive or unlawful content?",
    answer: [
      {
        text: "Use the Report button on any piece of content or profile to report objectionable content, harassment, copyright infringement or privacy violations. Reports go straight to our moderation team and Grievance Officer. We may remove content, suspend accounts or escalate to law enforcement.",
      },
    ],
  },
  {
    question: "How do I raise a grievance, and how fast will you reply?",
    answer: [
      {
        text: "Under the IT Act and the Intermediary Guidelines, 2021, we have appointed a Grievance Officer whose contact details are on the app and this website. You can complain about content, privacy or anything else. The Grievance Officer acknowledges your complaint within 24 hours and aims to resolve it within 72 hours.",
      },
    ],
  },
  {
    question: "Which law applies, and where are disputes heard?",
    answer: [
      {
        text: "These FAQs and any dispute about using the app are governed by Indian law, and the courts at New Delhi have exclusive jurisdiction. Statutory consumer remedies and any Indian law that cannot be contractually excluded still apply.",
      },
    ],
  },
  {
    question: "Are there any disclaimers?",
    answer: [
      {
        text: "The app and its services are provided on an “as is” and “as available” basis, and we disclaim all express or implied warranties to the fullest extent Indian law permits. Nothing here limits liabilities or consumer rights that cannot legally be excluded.",
      },
    ],
  },
  {
    question: "Can these FAQs change?",
    answer: [
      {
        text: "Yes. We may amend these FAQs, the Terms of Use and the Privacy Policy at any time, telling you through the app or by email or mobile notification. Continuing to use the app after that notice means you accept the changes, so it is worth checking back from time to time.",
      },
    ],
  },
] as const;

/** The five questions shown on the home page. The full list lives on /faqs. */
const homeFaqQuestions = [
  "What is GullyFame India and how does it work?",
  "Who can use this app?",
  "What do I need to register?",
  "Who owns the content I post?",
  "Are bots, fake engagement or vote manipulation allowed?",
] as const;

export const homeFaqs: readonly Faq[] = homeFaqQuestions.map((question) => {
  const faq = faqs.find((item) => item.question === question);
  if (!faq) throw new Error(`Missing home FAQ: ${question}`);
  return faq;
});

export const footerColumns = [
  {
    heading: "App",
    links: [
      { label: "Battles", href: "/#battles" },
      { label: "Leaderboard", href: "/#leaderboard" },
      { label: "Categories", href: "/#categories" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "RSS Feed", href: "/rss.xml" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Community Guidelines", href: "/community-guidelines" },
    ],
  },
] as const;
