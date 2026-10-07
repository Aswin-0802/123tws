"use client";

import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";

/**
 * Drives every [data-reveal] / [data-parallax] element rendered by server components.
 * Initial hidden states live in CSS behind `.motion-ok`, so nothing is hidden
 * from crawlers, no-JS visitors or reduced-motion users.
 *
 * data-reveal="fade-up" | "fade" | "blur"  batched entrance, staggered by DOM order
 * data-reveal="lines"                       masked line-by-line rise (words grouped by line)
 * data-reveal="image"                       clip-path wipe from bottom + inner settle scale
 * data-reveal="box"                         rounded panel opens from an inset clip
 * data-parallax="12"                        scrubbed yPercent drift (inner of an overflow frame)
 * data-delay="0.2"                          optional extra delay in seconds
 */
export function RevealEngine() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const delayOf = (el: Element) => Number((el as HTMLElement).dataset.delay ?? 0);

      // Batched simple entrances
      const batches: Array<[string, gsap.TweenVars]> = [
        ['[data-reveal="fade-up"]', { opacity: 1, y: 0, duration: 1.2 }],
        ['[data-reveal="fade"]', { opacity: 1, duration: 1.2, ease: "power2.out" }],
        ['[data-reveal="blur"]', { opacity: 1, filter: "blur(0px)", duration: 1.3, ease: "power3.out" }],
      ];
      for (const [selector, vars] of batches) {
        ScrollTrigger.batch(selector, {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              ...vars,
              stagger: 0.09,
              delay: delayOf(els[0]),
              overwrite: true,
            }),
        });
      }

      // Line reveals: group words by their rendered line so each line rises as a unit.
      gsap.utils.toArray<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
        const words = Array.from(el.querySelectorAll<HTMLElement>(".w > span"));
        if (!words.length) return;
        const tl = gsap.timeline({ paused: true });
        const lineOf = new Map<number, HTMLElement[]>();
        words.forEach((w) => {
          const top = Math.round((w.parentElement as HTMLElement).offsetTop);
          if (!lineOf.has(top)) lineOf.set(top, []);
          lineOf.get(top)!.push(w);
        });
        [...lineOf.keys()]
          .sort((a, b) => a - b)
          .forEach((key, i) => {
            tl.to(lineOf.get(key)!, { y: 0, rotate: 0, duration: 1.15, ease: "expo.out" }, i * 0.085);
          });
        ScrollTrigger.create({
          trigger: el,
          start: "top 86%",
          once: true,
          onEnter: () => gsap.delayedCall(delayOf(el), () => tl.play()),
        });
      });

      // Boxes (cream panels): open from an inset rounded clip.
      gsap.utils.toArray<HTMLElement>('[data-reveal="box"]').forEach((box) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(box, { clipPath: "inset(0% 0% 0% 0% round 20px)", opacity: 1, duration: 1.3, ease: "power4.inOut" }),
        });
      });

      // Image reveals: wipe the frame, settle the photo inside it.
      gsap.utils.toArray<HTMLElement>('[data-reveal="image"]').forEach((frame) => {
        const inner = frame.querySelector<HTMLElement>("[data-reveal-inner]");
        if (inner) gsap.set(inner, { scale: 1.3 });
        const tl = gsap.timeline({ paused: true });
        tl.to(frame, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35, ease: "power4.inOut" });
        if (inner) tl.to(inner, { scale: 1, duration: 1.9, ease: "expo.out" }, 0.1);
        ScrollTrigger.create({
          trigger: frame,
          start: "top 85%",
          once: true,
          onEnter: () => gsap.delayedCall(delayOf(frame), () => tl.play()),
        });
      });

      // Reading highlight: each word brightens in sequence as the paragraph scrolls through.
      gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".sw"),
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 48%", scrub: true },
          },
        );
      });

      // Count-up figures. Server HTML holds the final value; animation starts from 0 on entry.
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const fmt = new Intl.NumberFormat("en-IN");
        const state = { v: 0 };
        el.textContent = "0";
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(state, {
              v: target,
              duration: 2.2,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = fmt.format(Math.round(state.v));
              },
            }),
        });
      });

      // Parallax drift inside overflow-hidden frames.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 10;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    // Late layout shifts (fonts, images) move trigger positions.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  });

  return null;
}
