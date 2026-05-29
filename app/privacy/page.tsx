import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for kurtisbakerspeaks.com.",
  alternates: { canonical: "https://kurtisbakerspeaks.com/privacy" },
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

export default function Privacy() {
  return (
    <main className="flex-1 bg-bg">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link href="/" className="text-sm text-ink-muted hover:text-accent transition-colors">
          ← Back to home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-ink tracking-tight mt-6 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-ink-muted mb-12">Effective {EFFECTIVE}</p>
        <div className="text-[15px]">
          <S title="Overview">
            <p>
              This Privacy Policy explains how Kurt Baker (&ldquo;we&rdquo;)
              collects, uses, and protects information you provide through
              kurtisbakerspeaks.com. By using the site or submitting your
              information, you agree to these practices.
            </p>
          </S>
          <S title="Information We Collect">
            <p>
              Information you provide — name, email, phone, and message details —
              when you book a call, start a chat, or contact us; plus limited
              technical data (device, browser, pages visited) to operate and
              improve the site.
            </p>
          </S>
          <S title="How We Use It">
            <p>
              To respond to inquiries, schedule meetings, send reminders and
              follow-ups, operate and improve the site, and meet legal
              obligations.
            </p>
          </S>
          <S title="SMS / Text Messaging Consent">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                By providing your number and submitting a form or booking, you
                authorize us to contact you by SMS regarding your inquiry.
              </li>
              <li>Message frequency varies; message &amp; data rates may apply.</li>
              <li>Reply STOP to opt out, HELP for help.</li>
              <li>Consent is not a condition of any purchase.</li>
              <li>
                Mobile opt-in data is not shared with third parties for marketing.
              </li>
            </ul>
          </S>
          <S title="Sharing, Cookies, Retention & Security">
            <p>
              We don&apos;t sell your information. We use trusted service providers
              (hosting, CRM/messaging) bound by confidentiality. The site may use
              cookies; you can control these in your browser. We retain
              information as needed and use reasonable safeguards, though no method
              is fully secure.
            </p>
          </S>
          <S title="Your Choices & Contact">
            <p>
              Opt out of email via unsubscribe links, texts via STOP, or contact
              us to access, correct, or delete your information. Questions? Reach
              Kurt Baker at{" "}
              <a href="https://kurtisbaker.com" className="text-accent underline underline-offset-2">
                kurtisbaker.com
              </a>
              .
            </p>
          </S>
          <p className="text-xs text-ink-muted/80 border-t border-border pt-6 mt-12">
            Provided for general informational purposes; have qualified legal
            counsel confirm it meets requirements for your jurisdiction.
          </p>
        </div>
      </div>
    </main>
  );
}
