import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { GhlChatWidget } from "@/app/components/GhlChatWidget";
import { JsonLd } from "@/app/components/JsonLd";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kurtisbakerspeaks.com"),
  title: {
    default: "Kurtis Baker Speaks — Keynote Speaker on Business, Money & Purpose",
    template: "%s · Kurtis Baker Speaks",
  },
  description:
    "Book Kurt Baker (CFP® · CEPA® · AIF®) to speak. Keynotes on building a Freedom Ready Business, mastering your finances, and finding purpose through loss — stories that move audiences to act.",
  keywords: [
    "Kurt Baker speaker",
    "Kurtis Baker keynote",
    "business keynote speaker",
    "financial speaker",
    "entrepreneurship speaker",
    "mental health speaker",
    "Freedom Ready Business",
  ],
  authors: [{ name: "Kurt Baker", url: "https://kurtisbaker.com" }],
  alternates: { canonical: "https://kurtisbakerspeaks.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kurtis Baker Speaks",
    description:
      "Keynotes on building businesses, mastering money, and finding purpose — that leave audiences changed, not just informed.",
    url: "https://kurtisbakerspeaks.com",
    siteName: "Kurtis Baker Speaks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurtis Baker Speaks",
    description: "Book Kurt Baker to speak.",
    creator: "@kurtisbaker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd />
        {children}
        <GhlChatWidget />
      </body>
    </html>
  );
}
