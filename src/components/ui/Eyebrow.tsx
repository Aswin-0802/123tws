import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Red rule + small caps label, as used above section headings on 123tws.com. The rule draws in on reveal. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p data-reveal="fade" className={cn("flex items-center gap-3 text-[13px] font-semibold tracking-[0.08em] text-accent-strong uppercase", className)}>
      <span aria-hidden className="flex items-center gap-1.5">
        <span className="h-0.5 w-2.5 rounded-full bg-accent" />
        <span className="h-0.5 w-9 rounded-full bg-accent" />
      </span>
      {children}
    </p>
  );
}
