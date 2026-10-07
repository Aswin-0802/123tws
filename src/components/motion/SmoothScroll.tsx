"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/** Access the shared Lenis instance (null when reduced motion disables it). */
export function useLenis() {
  return useContext(LenisContext);
}

/** Scroll to an in-page target, through Lenis when available. */
export function scrollToTarget(lenis: Lenis | null, hash: string) {
  const el = hash === "#top" ? document.body : document.querySelector<HTMLElement>(hash);
  if (!el) return;
  const offset = hash === "#top" ? 0 : -16;
  if (lenis) {
    // The mobile menu stops Lenis; a link inside it closes the menu in the same click.
    if (lenis.isStopped) lenis.start();
    lenis.scrollTo(hash === "#top" ? 0 : el, { offset, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "auto", block: "start" });
  }
  // Move focus for keyboard and screen reader users without a second jump.
  if (hash !== "#top") {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }
  history.replaceState(null, "", hash);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    (window as Window & { __animReady?: boolean }).__animReady = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    if (!reduce) {
      // Lerp 0.11 keeps the glide without feeling sluggish; touch keeps native momentum.
      lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Route every in-page anchor through Lenis so offsets and easing match.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      e.preventDefault();
      scrollToTarget(lenisRef.current, hash);
    };
    document.addEventListener("click", onClick);

    // Fonts change line breaks; re-measure all triggers once they land.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      document.removeEventListener("click", onClick);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
