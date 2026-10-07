import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RevealEngine } from "@/components/motion/RevealEngine";

/** Shared frame for every page: header, footer, floating actions, smooth scroll and reveal animations. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main id="main" tabIndex={-1} className="relative outline-none">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      {/* Must mount after the page content so pinned sections are measured first */}
      <RevealEngine />
    </SmoothScroll>
  );
}
