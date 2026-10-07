import { stats } from "@/lib/content";

const fmt = new Intl.NumberFormat("en-IN");

/** Cream counter box (as on 123tws.com). The box wipes open, then each figure counts up (RevealEngine). */
export function Stats() {
  return (
    <section aria-label="Company figures" className="bg-white pb-12 md:pb-16">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <dl data-reveal="box" className="grid grid-cols-2 gap-y-10 rounded-[20px] bg-cream px-6 py-12 md:px-14 md:py-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} data-reveal="fade-up" className="flex flex-col-reverse items-center gap-3 text-center">
              <dt className="text-[15px] text-text">{s.label}</dt>
              <dd className="font-display text-[clamp(2.4rem,4vw,3.25rem)] leading-none font-semibold text-fg tabular-nums">
                <span data-count={s.value}>{fmt.format(s.value)}</span>
                <span className="text-accent">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
