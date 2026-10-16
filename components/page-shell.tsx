import type { CSSProperties, ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";
import { getPage } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  JsonLd,
  webPageJsonLd,
} from "@/lib/structured-data";

type Props = {
  /** Route of this page. Its eyebrow, heading and accent come from site.data.json. */
  path: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
};

const delay = (ms: number) => ({ "--gf-delay": `${ms}ms` }) as CSSProperties;

export function PageShell({ path, intro, updated, children }: Props) {
  const page = getPage(path);

  return (
    <>
      <SiteHeader active={path} />
      <main className="grow overflow-x-clip">
        <div className="bg-brown border-ink relative overflow-hidden border-b-[3px]">
          <div
            aria-hidden="true"
            className="gf-drift pointer-events-none absolute -top-40 -right-30 h-140 w-140 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(236,154,21,0.38), rgba(236,154,21,0) 65%)",
            }}
          />

          <div className="relative mx-auto flex max-w-[1240px] flex-col gap-5 px-6 pt-36 pb-20">
            <span
              className="bg-lilac text-ink font-display gf-enter gf-enter-pop self-start -rotate-3 rounded-full px-3.5 py-2 text-sm font-extrabold"
              style={delay(0)}
            >
              {page.eyebrow}
            </span>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-black tracking-[-0.03em] uppercase">
              <span className="gf-enter gf-enter-left block" style={delay(80)}>
                {page.heading}
              </span>
              <span
                className="font-serif text-orange gf-enter gf-enter-left block tracking-[-0.01em] italic normal-case"
                style={delay(200)}
              >
                {page.accent}
              </span>
            </h1>

            {intro ? (
              <p
                className="text-soft gf-enter gf-enter-up max-w-[640px] text-lg leading-relaxed"
                style={delay(340)}
              >
                {intro}
              </p>
            ) : null}

            {updated ? (
              <p
                className="text-muted font-display gf-enter gf-enter-up text-sm"
                style={delay(440)}
              >
                Last updated: {updated}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-6 py-20">{children}</div>
      </main>
      <SiteFooter />
      <SiteMotion />
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={webPageJsonLd(page)} />
    </>
  );
}
