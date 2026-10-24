/**
 * "On this page" list for the long legal pages. Each entry links to the
 * id on its <h2>; clicks glide there through lib/smooth-scroll.ts.
 */
export function LegalContents({
  items,
}: {
  items: readonly { id: string; title: string }[];
}) {
  return (
    <nav
      aria-label="On this page"
      className="bg-surface border-line mb-14 max-w-[72ch] rounded-3xl border p-6 sm:p-8"
    >
      <p className="font-display text-orange mb-4 text-sm font-bold tracking-wider uppercase">
        On this page
      </p>
      <ol className="text-soft grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-2">
            <span className="text-muted font-display w-6 shrink-0 text-right">
              {i + 1}.
            </span>
            <a
              href={`#${item.id}`}
              className="hover:text-orange underline-offset-4 transition-colors hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
