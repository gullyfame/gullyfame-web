import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MusicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V5l11-2v13" stroke="currentColor" />
      <circle cx="6.5" cy="18" r="2.5" stroke="currentColor" />
      <circle cx="17.5" cy="16" r="2.5" stroke="currentColor" />
    </svg>
  );
}

export function DanceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13" cy="4" r="2" stroke="currentColor" />
      <path d="M6 9l5-1 3 3 4-2M11 8l-1 6 4 3v5M10 14l-4 7" stroke="currentColor" />
    </svg>
  );
}

export function CookingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6zM2 11h20M9 7c0-1.5 1-1.5 1-3M14 7c0-1.5 1-1.5 1-3"
        stroke="currentColor"
      />
    </svg>
  );
}

export function ComedyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c3 1 13 1 16 0v6a8 8 0 0 1-16 0z" stroke="currentColor" />
      <path d="M8 9.5h2M14 9.5h2M8.5 13.5c1 1.5 6 1.5 7 0" stroke="currentColor" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"
        stroke="currentColor"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" stroke="currentColor" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" />
    </svg>
  );
}

export function BarsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" stroke="currentColor" />
      <path d="M8.5 12l2.5 2.5 4.5-5" stroke="currentColor" />
    </svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" stroke="currentColor" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.6} {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.5} {...props}>
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" />
    </svg>
  );
}

export function GooglePlayIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 26" {...props}>
      <path d="M3 2l12 11L3 24z" stroke="#EC9A15" />
      <path d="M15 13l4-3.5 3 1.8a1.5 1.5 0 0 1 0 2.6l-3 1.8z" stroke="currentColor" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 28" strokeWidth={1.7} {...props}>
      <path
        d="M16 4c-1.5.2-3 1.2-3.5 2.8M18.5 15.5c0-2.6 2-3.6 2-3.6-1.2-1.8-3-2-3.6-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9C7.9 9.9 5 11.4 5 16c0 2.8 1 5.6 2.4 7.4.9 1.1 1.7 2.1 2.9 2 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6 0 0-2.9-1.1-2.9-5.1z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" />
      <path d="M10 9l5 3-5 3z" stroke="currentColor" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" />
    </svg>
  );
}

export const categoryIcons = {
  music: MusicIcon,
  dance: DanceIcon,
  cooking: CookingIcon,
  comedy: ComedyIcon,
} as const;

export const perkIcons = {
  trophy: TrophyIcon,
  pin: PinIcon,
  bars: BarsIcon,
  shield: ShieldIcon,
} as const;
