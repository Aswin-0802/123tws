import Image from "next/image";
import type { Block } from "@/lib/pages/types";
import { pageIcons } from "../icons";
import { BlockSection, SectionHeading } from "../SectionHeading";

type Props = Extract<Block, { type: "features" }>;

/** Icon cards. Cards rise in a stagger; hover lifts the card, tilts the icon and draws a red base line. */
export function Features({ heading, intro, items }: Props) {
  const cols = items.length === 4 || items.length === 8 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <BlockSection>
      <SectionHeading title={heading} intro={intro} />
      <ul className={`mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 ${cols}`}>
        {items.map((it, i) => {
          const Icon = pageIcons[it.icon] ?? pageIcons.check;
          return (
            <li key={it.title} data-reveal="fade-up" data-delay={(i % 3) * 0.05}>
              <article className="card group relative h-full overflow-hidden p-7 transition-[transform,box-shadow] duration-500 ease-expo hover:-translate-y-1.5 hover:shadow-[var(--card-shadow-hover)]">
                {it.iconSrc ? (
                  <Image
                    src={it.iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    unoptimized={it.iconSrc.endsWith(".svg")}
                    className="size-14 object-contain transition-transform duration-700 ease-expo group-hover:-rotate-6 group-hover:scale-110"
                  />
                ) : (
                  <span className="relative grid size-14 place-items-center rounded-full bg-accent/10">
                    <Icon aria-hidden weight="light" className="size-7 text-accent transition-transform duration-700 ease-expo group-hover:-rotate-6 group-hover:scale-110" />
                  </span>
                )}
                <h3 className="mt-5 font-display text-[17px] font-semibold text-fg">{it.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-text">{it.body}</p>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-expo group-hover:scale-x-100" />
              </article>
            </li>
          );
        })}
      </ul>
    </BlockSection>
  );
}
