import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";

type Props = {
  eyebrow: string;
  title: string;
  /** Rendered in italic serif under the title, as on the home page. */
  accent?: string;
  intro?: string;
  updated?: string;
  /** Route of this page, so the nav does not highlight Home. */
  path?: string;
  children: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  accent,
  intro,
  updated,
  path,
  children,
}: Props) {
  return (
    <>
      <SiteHeader active={path} />
      <main className="grow overflow-x-clip">
        <div className="bg-brown border-ink relative overflow-hidden border-b-[3px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-30 h-140 w-140 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(236,154,21,0.38), rgba(236,154,21,0) 65%)",
            }}
          />
          <div className="relative mx-auto flex max-w-[1240px] flex-col gap-5 px-6 pt-36 pb-20">
            <span className="bg-lilac text-ink font-display self-start -rotate-3 rounded-full px-3.5 py-2 text-sm font-extrabold">
              {eyebrow}
            </span>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-black tracking-[-0.03em] uppercase">
              {title}
              {accent ? (
                <>
                  <br />
                  <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
                    {accent}
                  </span>
                </>
              ) : null}
            </h1>

            {intro ? (
              <p className="text-soft max-w-[640px] text-lg leading-relaxed">
                {intro}
              </p>
            ) : null}

            {updated ? (
              <p className="text-muted font-display text-sm">
                Last updated: {updated}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-6 py-20">
          {children}
        </div>
      </main>
      <SiteFooter />
      <SiteMotion />
    </>
  );
}
