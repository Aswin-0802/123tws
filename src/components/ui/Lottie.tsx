"use client";

import type { AnimationItem } from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Path to the Lottie JSON in /public. */
  src: string;
  /** Accessible description of the illustration. */
  label: string;
  /** Intrinsic size, used to reserve space before load (no layout shift). */
  width: number;
  height: number;
  className?: string;
  loop?: boolean;
};

/*
 * Lottie illustration (the live site's own animations).
 *  - The player (lottie_light, SVG renderer) and the JSON load only when the element nears the
 *    viewport, during idle time, so they never compete with first paint.
 *  - Plays while visible; pauses when scrolled away.
 *  - Inside an element marked [data-active] (the homepage services stage), it only plays while
 *    that ancestor is data-active="true", so stacked animations never run at the same time.
 *  - Reduced motion: shows a single still frame.
 */
export function Lottie({ src, label, width, height, className, loop = true }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);
  const [near, setNear] = useState(false);

  // 1. Wait until close to the viewport.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 2. Load player + data when idle, then play/pause by visibility and [data-active].
  useEffect(() => {
    const el = box.current;
    if (!near || !el) return;
    let cancelled = false;
    let visible = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scope = el.closest<HTMLElement>("[data-active]");
    const sync = () => {
      const a = anim.current;
      if (!a || reduce) return;
      const active = !scope || scope.dataset.active === "true";
      if (visible && active) a.play();
      else a.pause();
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      sync();
    });
    io.observe(el);
    const mo = scope ? new MutationObserver(sync) : null;
    mo?.observe(scope!, { attributes: true, attributeFilter: ["data-active"] });

    const start = async () => {
      const [{ default: lottie }, data] = await Promise.all([
        import("lottie-web/build/player/lottie_light"),
        fetch(src).then((r) => r.json()),
      ]);
      if (cancelled || !box.current) return;
      anim.current = lottie.loadAnimation({
        container: box.current,
        renderer: "svg",
        loop,
        autoplay: false,
        animationData: data,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
      });
      if (reduce) anim.current.goToAndStop(Math.floor(anim.current.totalFrames * 0.6), true);
      else sync();
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
    const handle = idle(() => void start());

    return () => {
      cancelled = true;
      (window.cancelIdleCallback ?? window.clearTimeout)(handle as number);
      io.disconnect();
      mo?.disconnect();
      anim.current?.destroy();
      anim.current = null;
    };
  }, [near, src, loop]);

  return (
    <div
      ref={box}
      role="img"
      aria-label={label}
      className={cn("relative [&>svg]:block", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    />
  );
}
