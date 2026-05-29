import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for kurtisbakerspeaks.com.",
  alternates: { canonical: "https://kurtisbakerspeaks.com/terms" },
};

const EFFECTIVE = "May 29, 2026";

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl text-ink leading-tight mb-3">{title}</h2>
      <div className="space-y-3 text-ink-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function Terms() {
  return (
    <main className="flex-1 bg-bg">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link href="/" className="text-sm text-ink-muted hover:text-accent transition-colors">
          ← Back to home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-ink tracking-tight mt-6 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-ink-muted mb-12">Effective {EFFECTIVE}</p>
        <div className="text-[15px]">
          <S title="Acceptance">
            <p>
              By using kurtisbakerspeaks.com you agree to these Terms and our{" "}
              <Link href="/privacy" className="text-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the site.
            </p>
          </S>
          <S title="No Financial, Investment, or Tax Advice">
            <p>
              Content here is for general informational and educational purposes
              only and is not financial, investment, tax, or legal advice, nor a
              recommendation or offer regarding any security or strategy. Consult
              a qualified professional about your specific situation. Engaging
              Kurt Baker for speaking or other services is governed by separate
              written agreements, not this site.
            </p>
          </S>
          <S title="Communications Consent">
            <p>
              By submitting a form, booking, or chatting, you consent to be
              contacted by phone, email, and SMS as described in our Privacy
              Policy. Opt out of texts anytime by replying STOP.
            </p>
          </S>
          <S title="Intellectual Property">
            <p>
              All content on this site is the property of Kurt Baker and
              protected by applicable law. Do not reproduce or create derivative
              works without written permission.
            </p>
          </S>
          <S title="Disclaimer & Limitation of Liability">
            <p>
              The site is provided &ldquo;as is&rdquo; without warranties of any
              kind. To the fullest extent permitted by law, Kurt Baker is not
              liable for any indirect, incidental, or consequential damages
              arising from your use of the site.
            </p>
          </S>
          <S title="Changes & Contact">
            <p>
              We may update these Terms; the Effective date reflects the latest
              revision. Questions? Reach Kurt Baker at{" "}
              <a href="https://kurtisbaker.com" className="text-accent underline underline-offset-2">
                kurtisbaker.com
              </a>
              .
            </p>
          </S>
          <p className="text-xs text-ink-muted/80 border-t border-border pt-6 mt-12">
            Provided for general informational purposes; have qualified legal
            counsel review before relying on it.
          </p>
        </div>
      </div>
    </main>
  );
}
