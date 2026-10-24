import { CategoriesCarousel } from "@/components/categories-carousel";
import { categories } from "@/lib/content";

export function Categories() {
  return (
    <section id="categories" className="bg-brown border-ink border-t-[3px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-24">
        <div data-reveal="up" className="gf-reveal">
          <CategoriesCarousel
            items={categories}
            heading={
              <h2
                className="gf-reveal font-display text-[clamp(2.5rem,5vw,4rem)] leading-none font-black tracking-[-0.03em] uppercase"
                data-reveal="left"
              >
                What&apos;s your
                <br />
                <span className="font-serif text-orange tracking-[-0.01em] italic normal-case">
                  thing?
                </span>
              </h2>
            }
          />
        </div>
      </div>
    </section>
  );
}
