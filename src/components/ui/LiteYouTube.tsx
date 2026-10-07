"use client";

import { Play } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

/** Click-to-load YouTube embed: only a thumbnail ships until the visitor presses play (privacy + performance). */
export function LiteYouTube({ id, title, className }: { id: string; title: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-[12px] bg-fg", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 size-full" aria-label={`Play video: ${title}`}>
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover opacity-90 transition-[transform,opacity] duration-700 ease-expo group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-accent-strong text-white shadow-lg transition-transform duration-500 ease-expo group-hover:scale-110">
              <Play aria-hidden weight="fill" className="size-6" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
