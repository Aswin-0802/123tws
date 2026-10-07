import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
 * Matches the 123tws.com button: solid brand red, 12px radius, Livvic 600 16px, 14px x 40px.
 * Topbar pills use the "pill" size (full radius).
 *
 * Hover choreography (CSS only, 600ms expo):
 *  - a fill layer rises from below with a curved leading edge that flattens as it lands
 *  - the label rolls up and a copy rolls in from beneath
 *  - the chevron slides right
 */
type Variant = "primary" | "outline" | "light" | "blue";
type Size = "md" | "sm" | "pill";

const base =
  "group/btn relative isolate inline-flex items-center justify-center overflow-hidden font-sans font-semibold whitespace-nowrap transition-[transform,color,border-color] duration-500 ease-expo active:scale-[0.97]";

const sizes: Record<Size, string> = {
  md: "h-[54px] gap-2 rounded-[12px] px-10 text-[16px]",
  sm: "h-11 gap-1.5 rounded-[10px] px-6 text-[14px]",
  pill: "h-8 gap-1 rounded-full px-4 text-[13px]",
};

const variants: Record<Variant, { root: string; fill: string }> = {
  primary: { root: "bg-accent-strong text-white", fill: "bg-fg" },
  outline: { root: "border border-accent-strong text-accent-strong hover:text-white", fill: "bg-accent-strong" },
  light: { root: "bg-white text-accent-strong hover:text-white", fill: "bg-fg" },
  blue: { root: "bg-blue text-white", fill: "bg-fg" },
};

function Inner({ children, variant, chevron }: { children: ReactNode; variant: Variant; chevron: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 translate-y-[101%] rounded-[50%_50%_0_0/60%_60%_0_0] transition-[transform,border-radius] duration-[650ms] ease-expo group-hover/btn:translate-y-0 group-hover/btn:rounded-none group-focus-visible/btn:translate-y-0 group-focus-visible/btn:rounded-none",
          variants[variant].fill,
        )}
      />
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-[600ms] ease-expo group-hover/btn:-translate-y-full">{children}</span>
        <span aria-hidden className="absolute inset-0 block translate-y-full transition-transform duration-[600ms] ease-expo group-hover/btn:translate-y-0">
          {children}
        </span>
      </span>
      {chevron && (
        <CaretRight aria-hidden weight="bold" className="size-3.5 transition-transform duration-500 ease-expo group-hover/btn:translate-x-1" />
      )}
    </>
  );
}

type Common = { variant?: Variant; size?: Size; chevron?: boolean };

export function ButtonLink({
  variant = "primary",
  size = "md",
  chevron = false,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"a"> & Common & { href: string }) {
  return (
    <a className={cn(base, sizes[size], variants[variant].root, className)} {...rest}>
      <Inner variant={variant} chevron={chevron}>
        {children}
      </Inner>
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  chevron = false,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"button"> & Common) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant].root, "disabled:pointer-events-none disabled:opacity-60", className)}
      {...rest}
    >
      <Inner variant={variant} chevron={chevron}>
        {children}
      </Inner>
    </button>
  );
}
