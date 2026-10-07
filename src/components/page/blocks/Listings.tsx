import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { ButtonLink } from "@/components/ui/Button";
import { BlockSection, SectionHeading } from "../SectionHeading";

type Props = Extract<Block, { type: "listings" }>;

/** Openings, internships or courses as cards with a meta pill. */
export function Listings({ heading, intro, items, cta }: Props) {
  return (
    <BlockSection tone="surface">
      <SectionHeading title={heading} intro={intro} />
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <li key={`${it.title}-${i}`} data-reveal="fade-up" data-delay={(i % 2) * 0.06}>
            <article className="card group h-full border-l-4 border-transparent p-7 transition-[border-color,transform,box-shadow] duration-500 ease-expo hover:-translate-y-1 hover:border-accent hover:shadow-[var(--card-shadow-hover)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-[18px] font-semibold text-fg">{it.title}</h3>
                {it.meta && <span className="rounded-full bg-cream px-3 py-1 text-[12.5px] font-semibold text-fg">{it.meta}</span>}
              </div>
              <p className="mt-3 text-[15px] leading-[1.75] text-text">{it.body}</p>
              {it.bullets?.length ? (
                <ul className="mt-4 space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-[1.6] text-text">
                      <CheckCircle aria-hidden weight="fill" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
      {cta && (
        <div data-reveal="fade-up" className="mt-10 text-center">
          <ButtonLink href={cta.href} chevron>
            {cta.label}
          </ButtonLink>
        </div>
      )}
    </BlockSection>
  );
}
