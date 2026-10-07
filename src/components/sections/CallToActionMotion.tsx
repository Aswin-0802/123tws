"use client";

import { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";

/*
 * Scrubbed while the section's top travels from the viewport bottom to 35%:
 *   panel   inset(0 6% round 24px) -> full width, square edges
 *   line 1  x: +5vw -> 0, line 2  x: +10vw -> 0 (a cascade from the right; never clipped by the panel edge)
 *   smiley  rolls in: rotate -180deg -> 0, scale 0.4 -> 1
 * Word masks inside the heading rise via RevealEngine ("lines").
 * Scoped to its own [data-cta] section, so a page can hold more than one.
 */
export function CallToActionMotion() {
  const marker = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const section = marker.current?.closest<HTMLElement>("[data-cta]");
    if (!section) return;
    const q = gsap.utils.selector(section);
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const arrive = { trigger: section, start: "top bottom", end: "top 35%", scrub: true } as const;
      gsap.fromTo(
        q("[data-cta-panel]"),
        { clipPath: "inset(0% 6% 0% 6% round 24px)" },
        { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: arrive },
      );
      gsap.fromTo(q('[data-cta-line="0"]'), { x: "5vw" }, { x: 0, ease: "none", scrollTrigger: arrive });
      gsap.fromTo(q('[data-cta-line="1"]'), { x: "10vw" }, { x: 0, ease: "none", scrollTrigger: arrive });
      gsap.fromTo(q("[data-cta-icon]"), { rotate: -180, scale: 0.4 }, { rotate: 0, scale: 1, ease: "none", scrollTrigger: arrive });
    });

    return () => mm.revert();
  });

  return <span ref={marker} hidden />;
}
