"use client";

import { gsap, useGSAP, MQ } from "@/lib/gsap";

/*
 * Curtain-style reveal: footer content starts 20% lower and catches up as the footer scrolls
 * into view, so it reads as being uncovered rather than scrolled in. Columns rise via RevealEngine.
 */
export function FooterMotion() {
  useGSAP(() => {
    const footer = document.querySelector<HTMLElement>("[data-footer]");
    if (!footer) return;
    const q = gsap.utils.selector(footer);
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      gsap.fromTo(
        q("[data-footer-inner]"),
        { yPercent: -20 },
        { yPercent: 0, ease: "none", scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom bottom", scrub: true } },
      );
    });

    return () => mm.revert();
  });

  return null;
}
