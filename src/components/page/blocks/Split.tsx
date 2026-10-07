import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Block } from "@/lib/pages/types";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { BlockSection } from "../SectionHeading";
import { cn } from "@/lib/cn";

type Props = Extract<Block, { type: "split" }>;

/** Text beside an image (clip-path reveal + parallax) or beside a bullet panel. */
export function Split({ heading, paragraphs, bullets, image, video, reverse }: Props) {
  const hasAside = !!image || !!video || !!bullets?.length;
  return (
    <BlockSection>
      <div className={cn("grid grid-cols-1 items-center gap-10 lg:gap-16", hasAside && "lg:grid-cols-2")}>
        <div className={cn(reverse && "lg:order-2")}>
          <AnimatedText text={heading} className="font-display text-[clamp(1.5rem,2.3vw,2rem)] leading-[1.3] font-semibold text-fg" />
          <span aria-hidden data-reveal="fade" className="mt-4 block h-1 w-16 rounded-full bg-accent" />
          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)} data-reveal="fade-up" className="mt-5 text-[15px] leading-[1.8] text-text md:text-[16px]">
              {p}
            </p>
          ))}
          {(image || video) && bullets?.length ? <Bullets items={bullets} className="mt-6" /> : null}
        </div>

        {image ? (
          <ImageReveal
            src={image.src}
            alt={image.alt}
            fit={image.fit}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={cn("aspect-[4/3] rounded-[20px]", reverse && "lg:order-1")}
            parallax={8}
          />
        ) : video ? (
          <div data-reveal="image" className={cn("overflow-hidden rounded-[20px] shadow-[0_30px_60px_-30px_rgb(43_42_41/0.45)]", reverse && "lg:order-1")}>
            <LiteYouTube id={video.youtubeId} title={video.title} className="rounded-[20px]" />
          </div>
        ) : bullets?.length ? (
          <div data-reveal="box" className="rounded-[20px] bg-cream p-8 md:p-10">
            <Bullets items={bullets} />
          </div>
        ) : null}
      </div>
    </BlockSection>
  );
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((b) => (
        <li key={b} data-reveal="fade-up" className="flex items-start gap-3 text-[15px] leading-[1.7] text-fg">
          <CheckCircle aria-hidden weight="fill" className="mt-0.5 size-5 shrink-0 text-accent" />
          {b}
        </li>
      ))}
    </ul>
  );
}
