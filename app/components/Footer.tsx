import { site } from "@/app/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-serif text-lg text-ink">Kurtis Baker Speaks</p>
          <p className="text-xs text-ink-muted mt-1">
            Keynotes by Kurt Baker ·{" "}
            <a href={site.hubUrl} className="hover:text-accent transition-colors">
              kurtisbaker.com
            </a>
          </p>
        </div>
        <div className="text-xs text-ink-muted text-center sm:text-right">
          <div className="flex gap-4 sm:justify-end">
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
          <p className="mt-2">© {year} Kurt Baker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
