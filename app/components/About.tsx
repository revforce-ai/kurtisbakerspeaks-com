import { site } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function About() {
  return (
    <section className="bg-bg-elevated border-y border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
            About Kurt
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-ink"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            Kurt Baker, CFP® · CEPA® · AIF®
          </h2>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">
            Kurt is a private wealth manager, entrepreneur, radio host, and mental
            health advocate. He has spent two decades helping business owners build
            value and meaning, hosts the weekly{" "}
            <em className="text-ink not-italic font-medium">Master Your Finances</em>{" "}
            show, and co-founded Attitudes In Reverse® after the loss of his son
            Kenny. On stage, he blends sharp financial insight with deep humanity —
            and sends audiences home ready to act.
          </p>
          <a
            href={site.hubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-base font-medium text-ink transition-colors hover:text-accent"
          >
            More about Kurt
            <span aria-hidden>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
