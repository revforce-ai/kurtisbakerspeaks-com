import { site } from "@/app/data/site";
import { MeshBackground } from "@/app/components/MeshBackground";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <MeshBackground />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-24 md:pt-36 md:pb-32 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-6">
            Keynote Speaker · CFP® · Entrepreneur · Advocate
          </p>
          <h1
            className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.98] tracking-[-0.025em] text-ink mx-auto max-w-4xl"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 30' }}
          >
            Stories that move audiences to{" "}
            <span className="italic text-accent">act.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Kurt Baker brings two decades of conversations — from first-time
            founders to billionaires — to the stage. Talks on building businesses,
            mastering money, and finding purpose through loss that leave audiences
            changed, not just informed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-bg shadow-[0_4px_14px_rgba(15,26,46,0.18)] transition-all hover:bg-accent hover:-translate-y-0.5"
            >
              Book Kurt to speak
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#talks"
              className="inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated/70 backdrop-blur px-6 py-3 text-base font-medium text-ink transition-all hover:border-ink hover:-translate-y-0.5"
            >
              See signature talks
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
