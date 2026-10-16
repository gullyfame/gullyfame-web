import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { StoreButtons } from "@/components/store-buttons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about");

const values = [
  {
    title: "Talent over following",
    body: "You do not need an audience to start. Every battle begins at zero, so a first-time creator and a seasoned one share the same stage.",
  },
  {
    title: "Open scoring",
    body: "Points come from votes, and the leaderboard is visible to everyone while the battle runs. No hidden ranking, no pay-to-win.",
  },
  {
    title: "Local first",
    body: "Battles are built around cities and neighbourhoods, because the best talent in India rarely sits in a studio.",
  },
  {
    title: "Safe by default",
    body: "Entries are moderated and anyone can report a clip. We would rather lose a video than lose a creator's trust.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      path="/about"
      intro="Gully Fame India turns everyday talent into weekly competition — with real scores, real rankings and real prizes."
    >
      <div className="flex flex-wrap gap-14">
        <div className="gf-prose flex-1 basis-[520px]">
          <h2>Why we started</h2>
          <p>
            India is full of people who can sing, dance, cook and make a room
            laugh — and almost none of them get a fair shot at being seen. The
            usual route is to post into a feed, hope an algorithm notices and
            start again tomorrow.
          </p>
          <p>
            We wanted something with a beginning, a middle and an end. A battle
            opens, you enter, votes come in, and at the close there is a
            leaderboard and a winner. Everybody can see where they stand and
            why.
          </p>

          <h2>How it works</h2>
          <ol>
            <li>
              A battle opens with a theme, a city and a closing date — for
              example Dance-Off Delhi or Gully Chef Wars.
            </li>
            <li>
              You record or upload a clip from the app and submit it before the
              deadline.
            </li>
            <li>
              Viewers watch and vote. Each vote adds points, and the leaderboard
              moves while the battle is live.
            </li>
            <li>
              When the battle closes, the top three take the podium and the
              prizes listed on that battle&apos;s page.
            </li>
          </ol>

          <h2>What we care about</h2>
          <p>
            Four things guide most of the decisions we make about the product.
          </p>
        </div>

        <aside className="flex min-w-0 flex-1 basis-[360px] flex-col gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              data-reveal="right"
              className="bg-surface border-surface-2 gf-lift gf-reveal rounded-3xl border-2 p-6"
            >
              <h3 className="font-display text-lg font-extrabold">
                {value.title}
              </h3>
              <p className="text-muted mt-2 text-[15px] leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </aside>
      </div>

      <div data-reveal="zoom"
        className="bg-brown border-line gf-reveal mt-16 flex flex-wrap items-center justify-between gap-8 rounded-[32px] border-2 p-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-black uppercase">
            Think you&apos;ve got it?
          </h2>
          <p className="text-muted max-w-[420px]">
            This week&apos;s battles are already running. Get the app and enter
            one.
          </p>
          <Link
            href="/community-guidelines"
            className="text-orange font-display w-fit text-sm font-bold underline underline-offset-4"
          >
            Read the community guidelines first →
          </Link>
        </div>
        <StoreButtons />
      </div>
    </PageShell>
  );
}
