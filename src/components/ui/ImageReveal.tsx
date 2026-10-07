import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  /** yPercent drift while scrolling; 0 disables. */
  parallax?: number;
  delay?: number;
  imgClassName?: string;
  preload?: boolean;
  /** "contain" shows illustrations whole on a transparent frame. */
  fit?: "cover" | "contain";
};

/**
 * Media frame that wipes open from the bottom while the photo settles from 1.3x.
 * The frame owns the aspect ratio, so space is reserved before the image loads (no CLS).
 */
export function ImageReveal({ src, alt, sizes, className, parallax = 8, delay, imgClassName, preload, fit = "cover" }: Props) {
  return (
    <div data-reveal="image" data-delay={delay} className={cn("relative overflow-hidden rounded-[10px]", fit === "cover" && "bg-surface", className)}>
      <div data-reveal-inner className="absolute inset-0 will-change-transform">
        <div data-parallax={(fit === "cover" && parallax) || undefined} className={cn("absolute inset-x-0", fit === "cover" && parallax ? "-inset-y-[10%]" : "inset-y-0")}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            quality={80}
            preload={preload}
            className={cn(fit === "contain" ? "object-contain" : "object-cover", imgClassName)}
          />
        </div>
      </div>
    </div>
  );
}
