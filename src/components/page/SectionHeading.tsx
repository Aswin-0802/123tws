import { AnimatedText } from "@/components/ui/AnimatedText";
import { cn } from "@/lib/cn";

/** Block heading in the 123tws style: centered red title, optional intro under it. */
export function SectionHeading({ title, intro, align = "center", className }: { title: string; intro?: string; align?: "center" | "left"; className?: string }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-[820px] text-center" : "max-w-[720px]", className)}>
      <AnimatedText text={title} className="font-display text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.3] font-bold text-accent" />
      {intro && (
        <p data-reveal="fade-up" className="mt-4 text-[15px] leading-[1.8] text-text md:text-[16px]">
          {intro}
        </p>
      )}
    </div>
  );
}

/** Standard vertical rhythm for every block. */
export function BlockSection({ children, tone = "white", className }: { children: React.ReactNode; tone?: "white" | "surface" | "mist"; className?: string }) {
  const bg = tone === "surface" ? "bg-surface" : tone === "mist" ? "bg-mist" : "bg-white";
  return (
    <section className={cn("relative py-14 md:py-20", bg, className)}>
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">{children}</div>
    </section>
  );
}
