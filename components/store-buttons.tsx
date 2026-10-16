import Link from "next/link";
import { AppleIcon, GooglePlayIcon } from "@/components/icons";
import { siteConfig } from "@/lib/seo";

type Props = {
  /** "outline" = bordered on dark, "solid" = filled for the orange CTA panel */
  variant?: "outline" | "solid";
  className?: string;
};

export function StoreButtons({ variant = "outline", className = "" }: Props) {
  const shell =
    variant === "outline"
      ? "bg-page border-2 border-white shadow-[5px_5px_0_var(--color-orange)]"
      : "bg-page shadow-[5px_5px_0_#ffffff]";

  return (
    <div className={`flex flex-wrap gap-3.5 ${className}`}>
      <Link
        href={siteConfig.store.googlePlay}
        aria-label="Get Gully Fame India on Google Play"
        className={`flex min-h-[62px] items-center gap-3 rounded-2xl px-5 py-3 text-white transition-transform hover:-translate-y-0.5 ${shell}`}
      >
        <GooglePlayIcon className="h-7 w-6.5 shrink-0" />
        <span className="flex flex-col text-left leading-tight">
          <span className="font-display text-muted text-[11px]">GET IT ON</span>
          <span className="text-xl font-bold">Google Play</span>
        </span>
      </Link>

      <Link
        href={siteConfig.store.appStore}
        aria-label="Download Gully Fame India on the App Store"
        className={`flex min-h-[62px] items-center gap-3 rounded-2xl px-5 py-3 text-white transition-transform hover:-translate-y-0.5 ${shell}`}
      >
        <AppleIcon className="h-7 w-6 shrink-0" />
        <span className="flex flex-col text-left leading-tight">
          <span className="font-display text-muted text-[11px]">
            Download on the
          </span>
          <span className="text-xl font-bold">App Store</span>
        </span>
      </Link>
    </div>
  );
}
