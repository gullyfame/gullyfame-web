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
  { name: "Music", note: "Mic-Drop", icon: "music", featured: false },
  { name: "Dance", note: "Dance-Off", icon: "dance", featured: true },
  { name: "Cooking", note: "Chef Wars", icon: "cooking", featured: false },
  { name: "Comedy", note: "Open mic", icon: "comedy", featured: false },
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

/** Also feeds the FAQPage JSON-LD, so answers stay in sync with structured data. */
export const faqs = [
  {
    question: "What is Gully Fame India?",
    answer:
      "A talent app for weekly battles in music, dance, cooking and comedy. Show your skill, earn points and win prizes.",
  },
  {
    question: "How do I join a battle?",
    answer:
      "Pick a battle, tap Participate, then hit Upload to send your clip before the deadline.",
  },
  {
    question: "How are winners decided?",
    answer:
      "Entries earn points during the battle. When it closes, the top three on the leaderboard win.",
  },
  {
    question: "What can I win?",
    answer:
      "Each battle has its own prizes, listed on the battle page — plus bragging rights on the podium.",
  },
  {
    question: "Is it free to join?",
    answer: "Yes. Downloading the app and entering battles is free.",
  },
  {
    question: "Who can take part?",
    answer:
      "Anyone with talent and a phone. Check each battle's rules for age or city limits.",
  },
  {
    question: "Is my content safe?",
    answer:
      "Yes. Battles are moderated, and you can report anything that breaks our Community Guidelines.",
  },
] as const;

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
