"use client";

import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";

/*
 * Desktop: the section pins at "top top" and vertical scroll pans the track horizontally
 * (distance = track width - viewport, scrub 1). Each card rides a containerAnimation trigger:
 * it lifts 18% and untilts from 4deg as its left edge travels from 100% to 60% of the viewport.
 * A hairline under the track fills with progress.
 * Mobile: plain vertical stack with batched rises.
 */
export function WhyUsMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("[data-pan]");
    if (!section) return;
    const q = gsap.utils.selector(section);
    const wrap = q<HTMLElement>("[data-pan-wrap]")[0];
    const track = q<HTMLElement>("[data-pan-track]")[0];
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      const distance = () => track.scrollWidth - window.innerWidth;
      const pan = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(q("[data-pan-progress]"), {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top top", end: () => `+=${distance()}`, scrub: 1, invalidateOnRefresh: true },
      });

      q<HTMLElement>("[data-pan-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { yPercent: 18, rotate: 4, opacity: 0.35 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: pan,
              start: "left 100%",
              end: "left 60%",
              scrub: true,
            },
          },
        );
        const icon = card.querySelector("[data-pan-icon]");
        if (icon) {
          gsap.fromTo(
            icon,
            { rotate: -90 },
            {
              rotate: 0,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: pan, start: "left 100%", end: "left 40%", scrub: true },
            },
          );
        }
      });
    });

    mm.add(MQ.mobile, () => {
      const cards = q<HTMLElement>("[data-pan-card]");
      gsap.set(cards, { opacity: 0, y: 50 });
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, stagger: 0.1, duration: 1.1, ease: "expo.out" }),
      });
    });

    return () => mm.revert();
  });

  return null;
}
