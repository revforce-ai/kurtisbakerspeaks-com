import { site } from "@/app/data/site";

const items = [
  { href: "#why", label: "Why Kurt" },
  { href: "#talks", label: "Signature Talks" },
  { href: "#who", label: "Perfect For" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/75 border-b border-border/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl tracking-tight text-ink hover:text-accent transition-colors"
          style={{ fontVariationSettings: '"opsz" 36' }}
        >
          Kurtis Baker Speaks
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-ink transition-colors">
              {i.label}
            </a>
          ))}
        </div>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-all hover:bg-accent hover:-translate-y-0.5"
        >
          Book Kurt
        </a>
      </nav>
    </header>
  );
}
