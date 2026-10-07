"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Img } from "@/lib/pages/types";
import { cn } from "@/lib/cn";

/*
 * Multi-page tile (e.g. a brochure): shows the first page; while hovered or focused it crossfades
 * through every page (1.1s per page, 0.6s fade). Small dots show which page is visible.
 * Extra pages only load after the first hover. Reduced motion: no auto-advance; dots still switch pages.
 */
export function PageFlip({ pages, sizes }: { pages: Img[]; sizes: string }) {
  const [index, setIndex] = useState(0);
  const [armed, setArmed] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => window.clearInterval(timer.current);
  }, []);

  const start = () => {
    setArmed(true);
    if (reduce.current || pages.length < 2) return;
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % pages.length), 1100);
  };
  const stop = () => {
    window.clearInterval(timer.current);
    setIndex(0);
  };

  return (
    <div className="absolute inset-0" onPointerEnter={start} onPointerLeave={stop} onFocus={start} onBlur={stop}>
      {pages.map((p, i) =>
        i === 0 || armed ? (
          <Image
            key={p.src}
            src={p.src}
            alt={i === 0 ? p.alt : ""}
            fill
            quality={75}
            sizes={sizes}
            className={cn(
              "p-4 transition-opacity duration-[600ms] ease-out",
              p.fit === "cover" ? "object-cover" : "object-contain",
              i === index ? "opacity-100" : "opacity-0",
            )}
          />
        ) : null,
      )}
      {pages.length > 1 && (
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {pages.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show page ${i + 1} of ${pages.length}`}
              onClick={(e) => {
                e.preventDefault();
                setArmed(true);
                setIndex(i);
              }}
              className={cn("h-1.5 rounded-full transition-[width,background-color] duration-500", i === index ? "w-4 bg-accent" : "w-1.5 bg-fg/25")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
