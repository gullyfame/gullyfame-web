const ITEMS = [
  "Music",
  "Dance",
  "Cooking",
  "Comedy",
  "Weekly battles",
  "Win prizes",
  "Earn fame",
];

/**
 * Seamless infinite marquee.
 * Two identical copies sit side by side with no flex gap — spacing lives inside
 * each copy — so translateX(-50%) lands exactly on the start of copy two and the
 * loop has no visible seam.
 *
 * The band is wider than the page so its tilted ends never show; <main> clips
 * that with `overflow-x: clip`, which trims sideways only and leaves the band's
 * top and bottom edges intact.
 */
function Strip() {
  return (
    <span className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex shrink-0 items-center">
          <span className="px-4">{item}</span>
          <span aria-hidden="true" className="px-1">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="bg-orange text-ink border-ink relative z-2 -mt-12 -ml-[10%] w-[120%] -rotate-2 overflow-hidden border-y-[3px] py-4.5"
    >
      <div className="gf-marquee-track font-display flex w-max text-3xl font-black tracking-tight whitespace-nowrap uppercase">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
