import { talks } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Framework() {
  return (
    <section id="talks" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              Signature talks
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Keynotes that fit your stage.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Each talk is tailored to your audience and outcome — from a 20-minute
              keynote to a half-day workshop.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          {talks.map((t, i) => (
            <ScrollReveal key={t.num} delay={0.07 * i}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-8 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_22px_40px_-20px_rgba(15,26,46,0.25)]">
                <span className="font-serif text-4xl text-accent/80 leading-none">
                  {t.num}
                </span>
                <h3 className="font-serif text-2xl text-ink leading-tight mt-4 mb-2">
                  {t.title}
                </h3>
                <p className="text-base text-ink-muted leading-relaxed">
                  {t.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
