import { audience } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Audience() {
  return (
    <section id="who" className="bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              Perfect for
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              The right voice for your audience.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-5">
              {audience.map((a) => (
                <li key={a} className="flex gap-4 text-lg text-bg/85 leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
