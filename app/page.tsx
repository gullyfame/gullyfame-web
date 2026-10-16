import { Battles } from "@/components/battles";
import { Categories } from "@/components/categories";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Leaderboard } from "@/components/leaderboard";
import { Marquee } from "@/components/marquee";
import { Perks } from "@/components/perks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="grow overflow-x-clip">
        <Hero />
        <Marquee />
        <HowItWorks />
        <Categories />
        <Battles />
        <Leaderboard />
        <Perks />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
      <SiteMotion />
    </>
  );
}
