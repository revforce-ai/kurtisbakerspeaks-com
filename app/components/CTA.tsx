import { site } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function CTA() {
  return (
    <section id="start" className="relative bg-bg overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        <ScrollReveal>
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(167,123,58,0.35), transparent 70%)",
            }}
          />
          <h2
            className="relative font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.02em] text-ink"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Bring Kurt to your stage.
          </h2>
          <p className="relative mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl mx-auto">
            Tell us about your event and audience. We&apos;ll find the talk that
            fits — and make your event one your audience remembers.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-bg shadow-[0_4px_14px_rgba(15,26,46,0.18)] transition-all hover:bg-accent hover:-translate-y-0.5"
          >
            Book Kurt to speak
            <span aria-hidden>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
