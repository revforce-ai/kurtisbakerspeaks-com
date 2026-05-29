import { ScrollReveal } from "@/app/components/ScrollReveal";

const stats = [
  { stat: "20+ yrs", label: "Advising & interviewing entrepreneurs" },
  { stat: "Weekly", label: "Host of the Master Your Finances show" },
  { stat: "CFP® · CEPA® · AIF®", label: "Credentialed, fiduciary expertise" },
];

export function Problem() {
  return (
    <section id="why" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
            Why Kurt
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.02em] text-ink"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            A speaker who has lived every story he tells.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink-muted leading-relaxed text-left">
            <p>
              Kurt isn&apos;t a speaker who read about business in a book. He&apos;s
              a CERTIFIED FINANCIAL PLANNER™ who has spent his career inside the
              real decisions of business owners — and as host of the{" "}
              <em className="text-ink not-italic font-medium">Master Your Finances</em>{" "}
              radio show, he&apos;s interviewed everyone from first-time founders
              to billionaires.
            </p>
            <p>
              He also knows loss. After his son Kenny passed, Kurt turned grief
              into purpose by co-founding a national mental-health nonprofit. That
              range — sharp business insight and hard-won humanity — is why
              audiences don&apos;t just take notes. They take action.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.08 * i}>
              <div className="rounded-2xl border border-border bg-bg p-6">
                <p className="font-serif text-2xl text-accent leading-tight">
                  {s.stat}
                </p>
                <p className="text-sm text-ink-muted mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
