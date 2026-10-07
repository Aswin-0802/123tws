import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { Block } from "@/lib/pages/types";
import { BlockSection, SectionHeading } from "../SectionHeading";
import { GalleryMore } from "./GalleryMore";
import { PageFlip } from "./PageFlip";

const PAGE = 24;

type Props = Extract<Block, { type: "gallery" }>;

/*
 * Project gallery. Image items get the clip-path reveal + hover zoom; items without images
 * render as typographic tiles (client name, category) that fill red on hover.
 */
export function Gallery({ heading, intro, items }: Props) {
  return (
    <BlockSection>
      <SectionHeading title={heading} intro={intro} />
      <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {items.map((it, i) => {
          const external = it.href?.startsWith("http");
          const inner = (
            <>
              {it.image ? (
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[12px] ${it.image.fit === "contain" ? "bg-white shadow-[var(--card-shadow)]" : "bg-surface"}`}>
                  {it.pages?.length ? (
                    <PageFlip pages={[it.image, ...it.pages]} sizes="(min-width: 1024px) 25vw, 50vw" />
                  ) : (
                    <Image
                      src={it.image.src}
                      alt={it.image.alt}
                      fill
                      quality={75}
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className={`${it.image.fit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-[1.2s] ease-expo group-hover:scale-105`}
                    />
                  )}
                </div>
              ) : null}
              <div className={it.image ? "pt-4" : "relative isolate flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[12px] bg-cream p-5 md:min-h-[170px] md:p-6"}>
                {!it.image && (
                  <span aria-hidden className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent transition-transform duration-[650ms] ease-expo group-hover:scale-y-100" />
                )}
                <h3 className="font-display text-[16px] leading-snug font-semibold text-fg transition-colors duration-500 group-hover:text-white md:text-[17px]">
                  {it.title}
                </h3>
                <div className="mt-3 flex items-end justify-between gap-3">
                  {it.caption && <p className="text-[13px] text-text transition-colors duration-500 group-hover:text-white/85">{it.caption}</p>}
                  {it.href && <ArrowUpRight aria-hidden className="size-4 shrink-0 text-accent transition-[transform,color] duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />}
                </div>
              </div>
            </>
          );
          return (
            <li key={`${it.title}-${i}`} data-reveal="fade-up" data-delay={(i % 4) * 0.05} hidden={i >= PAGE || undefined}>
              {it.href ? (
                <a href={it.href} className="group block h-full" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {inner}
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              ) : (
                <div className="group h-full">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
      {items.length > PAGE && <GalleryMore total={items.length} step={PAGE} />}
    </BlockSection>
  );
}
