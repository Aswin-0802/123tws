"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

/**
 * "Load more" for long galleries. Every item is already in the HTML (good for search engines);
 * items past the first page are `hidden` until requested, so their images do not load early.
 */
export function GalleryMore({ total, step = 24 }: { total: number; step?: number }) {
  const marker = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(step);
  if (shown >= total) return null;

  const more = () => {
    const list = marker.current?.parentElement?.querySelector("ul");
    if (!list) return;
    const next = Math.min(shown + step, total);
    Array.from(list.children)
      .slice(shown, next)
      .forEach((li) => li.removeAttribute("hidden"));
    setShown(next);
    // New items change the page height; re-measure scroll animations below.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <div ref={marker} className="mt-10 flex flex-col items-center gap-3">
      <Button type="button" onClick={more} variant="outline">
        <span className="inline-flex items-center gap-2">
          Load more
          <CaretDown aria-hidden weight="bold" className="size-3.5" />
        </span>
      </Button>
      <p className="text-[13px] text-muted" aria-live="polite">
        Showing {shown} of {total}
      </p>
    </div>
  );
}
