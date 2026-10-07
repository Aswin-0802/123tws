"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";

/*
 * Rail: scaleY 0 -> 1 scrubbed while the step list travels from 70% to 40% of the viewport.
 * Dots: fill red with white numerals as each step crosses the viewport middle (and revert above it).
 */
export function StepsMotion() {
  const marker = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = marker.current?.parentElement?.querySelector<HTMLElement>("[data-steps]");
    if (!root) return;
    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const list = q("ol")[0];
      gsap.fromTo(
        q("[data-steps-rail]"),
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: list, start: "top 70%", end: "bottom 40%", scrub: true } },
      );
      q<HTMLElement>("[data-step]").forEach((step) => {
        const dot = step.querySelector<HTMLElement>("[data-step-dot]");
        if (!dot) return;
        ScrollTrigger.create({
          trigger: step,
          start: "top 55%",
          onEnter: () => gsap.to(dot, { backgroundColor: "#e84748", color: "#fff", scale: 1.08, duration: 0.5, ease: "back.out(2)" }),
          onLeaveBack: () => gsap.to(dot, { backgroundColor: "#fff", color: "#e84748", scale: 1, duration: 0.4, ease: "power2.out" }),
        });
      });
    });

    return () => mm.revert();
  });

  return <span ref={marker} hidden />;
}
