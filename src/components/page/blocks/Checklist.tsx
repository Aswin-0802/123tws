import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { BlockSection, SectionHeading } from "../SectionHeading";
import { cn } from "@/lib/cn";

type Props = Extract<Block, { type: "checklist" }>;

/** Spec / checklist columns on a cream panel that opens with the "box" reveal. */
export function Checklist({ heading, intro, columns }: Props) {
  const cols = columns.length >= 3 ? "md:grid-cols-3" : columns.length === 2 ? "md:grid-cols-2" : "";
  return (
    <BlockSection>
      <SectionHeading title={heading} intro={intro} />
      <div data-reveal="box" className={cn("mt-12 grid grid-cols-1 gap-10 rounded-[20px] bg-cream p-8 md:p-12", cols)}>
        {columns.map((c, ci) => (
          <div key={c.title ?? ci}>
            {c.title && <h3 className="mb-4 font-display text-[17px] font-semibold text-fg">{c.title}</h3>}
            <ul className="space-y-3">
              {c.items.map((it) => (
                <li key={it} data-reveal="fade-up" className="flex items-start gap-3 text-[15px] leading-[1.65] text-fg">
                  <CheckCircle aria-hidden weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlockSection>
  );
}
