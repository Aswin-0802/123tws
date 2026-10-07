import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { BlockSection, SectionHeading } from "../SectionHeading";

type Props = Extract<Block, { type: "links" }>;

/** Article / resource rows. Hover slides a red bar in from the left and nudges the arrow. */
export function Links({ heading, intro, items }: Props) {
  return (
    <BlockSection>
      <SectionHeading title={heading} intro={intro} />
      <ul className="mx-auto mt-12 max-w-[960px] divide-y divide-line border-y border-line">
        {items.map((it) => {
          const external = it.href.startsWith("http");
          return (
            <li key={it.href} data-reveal="fade-up">
              <a
                href={it.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex items-center gap-6 overflow-hidden px-2 py-5 md:px-4"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-y-100" />
                <span className="flex-1">
                  <span className="block font-display text-[16px] leading-snug font-semibold text-fg transition-colors group-hover:text-accent-strong md:text-[17px]">{it.title}</span>
                  {it.meta && <span className="mt-1 block text-[13px] text-muted">{it.meta}</span>}
                </span>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 text-accent transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
                {external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </BlockSection>
  );
}
