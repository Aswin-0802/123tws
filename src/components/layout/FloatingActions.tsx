"use client";

import { ArrowUp, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { site } from "@/lib/site";
import { scrollToTarget, useLenis } from "@/components/motion/SmoothScroll";

/*
 * Call / WhatsApp / back-to-top stack (as on 123tws.com).
 * Hidden at the top of the page; past 400px the buttons pop in one after another
 * (CSS transition with per-button delay), driven by a data attribute, not React state.
 */
const btn =
  "grid size-10 place-items-center rounded-full md:size-11 text-white shadow-[0_10px_24px_-10px_rgb(43_42_41/0.6)] transition-[transform,opacity] duration-500 ease-expo hover:scale-110 group-data-[shown=false]/fab:pointer-events-none group-data-[shown=false]/fab:translate-x-16 group-data-[shown=false]/fab:opacity-0";

export function FloatingActions() {
  const ref = useRef<HTMLDivElement>(null);
  const lenisRef = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      start: 400,
      end: "max",
      onToggle: (self) => {
        el.dataset.shown = String(self.isActive);
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={ref} data-shown="false" className="group/fab fixed right-3 bottom-4 z-[var(--z-float)] flex flex-col gap-2 md:right-6 md:bottom-6 md:gap-3">
      <a href={site.phones[0].href} aria-label={`Call ${site.phones[0].label}`} className={`${btn} bg-[#e9196b] delay-0`}>
        <Phone aria-hidden weight="fill" className="size-5" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${btn} bg-[#1fa855] delay-75`}
      >
        <WhatsappLogo aria-hidden weight="fill" className="size-6" />
      </a>
      {/* Wrapper owns visibility: the button's own `grid` would override `hidden` */}
      <span className="hidden md:block">
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollToTarget(lenisRef?.current ?? null, "#top")}
          className={`${btn} bg-accent-strong delay-150`}
        >
          <ArrowUp aria-hidden weight="bold" className="size-5" />
        </button>
      </span>
    </div>
  );
}
