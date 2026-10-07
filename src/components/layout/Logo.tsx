import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * Renders the official logo once `site.logo` is set (file in /public).
 * Until then, a typographic stand-in in the brand red keeps the header balanced.
 */
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  if (site.logo) {
    return (
      <Image
        src={site.logo.src}
        alt={site.name}
        width={site.logo.width}
        height={site.logo.height}
        preload={priority}
        className={cn("h-[52px] w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="sr-only">{site.name}</span>
      <span aria-hidden className="grid h-10 place-items-center rounded-[10px] bg-accent px-2.5 font-display text-[16px] leading-none font-bold text-white">
        123
      </span>
      <span aria-hidden className="font-display text-[14px] leading-[1.1] font-semibold text-fg">
        Total Web
        <br />
        Solutions
      </span>
    </span>
  );
}
