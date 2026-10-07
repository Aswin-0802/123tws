import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { BlockSection, SectionHeading } from "../SectionHeading";

type Props = Extract<Block, { type: "related" }>;

/** Related pages as cards: red fill sweeps in on hover, arrow travels. */
export function Related({ heading, links }: Props) {
  return (
    <BlockSection>
      <SectionHeading title={heading} />
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l, i) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.href} data-reveal="fade-up" data-delay={(i % 3) * 0.05}>
              <a
                href={l.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative isolate flex items-center justify-between gap-4 overflow-hidden rounded-[12px] border border-line bg-white px-6 py-5 transition-colors duration-500 hover:border-accent"
              >
                <span aria-hidden className="absolute inset-0 -z-10 origin-left scale-x-0 bg-accent transition-transform duration-[650ms] ease-expo group-hover:scale-x-100" />
                <span className="font-display text-[15.5px] font-semibold text-fg transition-colors duration-500 group-hover:text-white">{l.label}</span>
                <ArrowRight aria-hidden weight="bold" className="size-4 shrink-0 text-accent transition-[transform,color] duration-500 ease-expo group-hover:translate-x-1 group-hover:text-white" />
              </a>
            </li>
          );
        })}
      </ul>
    </BlockSection>
  );
}
