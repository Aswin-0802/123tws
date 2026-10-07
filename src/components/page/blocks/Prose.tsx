import type { Block } from "@/lib/pages/types";

type Props = Extract<Block, { type: "prose" }>;

/** Long-form text (policies, terms). Comfortable measure, numbered-free headings, subtle reveals. */
export function Prose({ sections, updated }: Props) {
  return (
    <section className="bg-white py-14 md:py-20">
      <article className="mx-auto max-w-[820px] px-4 md:px-6">
        {updated && (
          <p data-reveal="fade" className="mb-10 inline-block rounded-full bg-cream px-4 py-1.5 text-[13px] font-semibold text-fg">
            Last updated: {updated}
          </p>
        )}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading ?? i} data-reveal="fade-up">
              {s.heading && <h2 className="font-display text-[clamp(1.25rem,1.8vw,1.5rem)] font-semibold text-fg">{s.heading}</h2>}
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[16px] leading-[1.85] text-text">
                  {p}
                </p>
              ))}
              {s.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.75] text-text marker:text-accent">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
