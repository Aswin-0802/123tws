import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { allPages, pagePath, sectionOrder } from "@/lib/pages";
import { BlockSection } from "../SectionHeading";

/** HTML sitemap: every page grouped by section, in menu order. */
export function SitemapList() {
  const groups = sectionOrder
    .map((section) => ({ section, pages: allPages.filter((p) => p.section === section) }))
    .filter((g) => g.pages.length);
  return (
    <BlockSection>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div data-reveal="fade-up">
          <h2 className="border-b-2 border-accent pb-2 font-display text-[18px] font-semibold text-fg">Home</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="group inline-flex items-start gap-1.5 text-[15px] text-text transition-colors hover:text-accent-strong">
                <CaretDoubleRight aria-hidden weight="bold" className="mt-[6px] size-3 shrink-0 text-accent" />
                Homepage
              </Link>
            </li>
          </ul>
        </div>
        {groups.map((g) => (
          <div key={g.section} data-reveal="fade-up">
            <h2 className="border-b-2 border-accent pb-2 font-display text-[18px] font-semibold text-fg">{g.section}</h2>
            <ul className="mt-4 space-y-2">
              {g.pages.map((p) => (
                <li key={p.slug}>
                  <a href={pagePath(p.slug)} className="group inline-flex items-start gap-1.5 text-[15px] text-text transition-colors hover:text-accent-strong">
                    <CaretDoubleRight aria-hidden weight="bold" className="mt-[6px] size-3 shrink-0 text-accent transition-transform duration-500 ease-expo group-hover:translate-x-0.5" />
                    {p.hero.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlockSection>
  );
}
