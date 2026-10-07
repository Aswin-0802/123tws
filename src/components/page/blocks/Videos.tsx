import type { Block } from "@/lib/pages/types";
import { LiteYouTube } from "@/components/ui/LiteYouTube";

type Props = Extract<Block, { type: "videos" }>;

export function Videos({ heading, intro, items }: Props) {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.3] font-bold text-accent">{heading}</h2>
          {intro && <p className="mt-4 text-[15px] leading-[1.8] text-text md:text-[16px]">{intro}</p>}
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((v) => (
            <li key={v.youtubeId} data-reveal="fade-up">
              <LiteYouTube id={v.youtubeId} title={v.title} />
              <h3 className="mt-3 font-display text-[15px] font-semibold text-fg">{v.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
