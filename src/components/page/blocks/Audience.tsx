import Image from "next/image";
import type { Block } from "@/lib/pages/types";
import { pageIcons } from "../icons";
import { BlockSection, SectionHeading } from "../SectionHeading";

type Props = Extract<Block, { type: "audience" }>;

/** Industry / audience cards (same look as the homepage industry grid): red fill rises on hover. */
export function Audience({ heading, intro, items }: Props) {
  return (
    <BlockSection>
      <SectionHeading title={heading} intro={intro} />
      <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = pageIcons[it.icon] ?? pageIcons.check;
          return (
            <li key={it.title} data-reveal="fade-up" data-delay={(i % 4) * 0.05}>
              <div className="card group relative isolate flex h-full flex-col items-center overflow-hidden px-4 py-7 text-center transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)]">
                <span aria-hidden className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent transition-transform duration-[650ms] ease-expo group-hover:scale-y-100" />
                {it.iconSrc ? (
                  <Image
                    src={it.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    unoptimized={it.iconSrc.endsWith(".svg")}
                    className="icon-invert size-11 object-contain group-hover:scale-110 group-hover:rotate-[-8deg]"
                  />
                ) : (
                  <Icon aria-hidden weight="light" className="size-11 text-accent transition-[color,transform] duration-500 ease-expo group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:text-white" />
                )}
                <h3 className="mt-3 font-display text-[15px] font-semibold text-fg transition-colors duration-500 group-hover:text-white">{it.title}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </BlockSection>
  );
}
