import { faqs } from "@/app/data/site";

/**
 * JSON-LD structured data for SEO + GEO + AEO.
 *
 * The Person node shares the canonical @id (https://kurtisbaker.com/#kurt) used
 * across all three Baker sites. It is deliberately identity-rich — full name,
 * Princeton/NJ location, employer, credentials, wide sameAs — to disambiguate
 * this Kurt Baker from the unrelated entertainment-industry "Kurt Baker" that
 * currently wins "Kurt Baker keynote speaker." FAQPage mirrors the on-page
 * accordion (see Faq + data/site faqs).
 */
export function JsonLd() {
  const personId = "https://kurtisbaker.com/#kurt";

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kurtisbakerspeaks.com/#website",
        url: "https://kurtisbakerspeaks.com",
        name: "Kurtis Baker Speaks",
        description:
          "Keynote speaking by Kurt Baker on building a Freedom Ready Business, mastering your finances, and finding purpose through loss.",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Kurtis 'Kurt' Baker",
        givenName: "Kurtis",
        familyName: "Baker",
        alternateName: ["Kurt Baker", "Kurtis Baker"],
        url: "https://kurtisbaker.com",
        jobTitle: "Keynote Speaker, Private Wealth Manager",
        description:
          "Princeton, NJ keynote speaker, private wealth manager (CFP® · CEPA® · AIF®), host of the Master Your Finances radio show, and co-founder of Attitudes In Reverse®. Speaks on building businesses, mastering money, and finding purpose.",
        homeLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Princeton",
            addressRegion: "NJ",
            addressCountry: "US",
          },
        },
        worksFor: {
          "@type": "Organization",
          name: "Certified Wealth Management & Investment LLC",
          url: "https://www.cwmi.us",
        },
        sameAs: [
          "https://kurtisbaker.com",
          "https://www.linkedin.com/in/kurtisbaker/",
          "https://www.youtube.com/@kurtisbaker",
          "https://masteryourfinances.us/",
          "https://cwmi.us/team/kurt-baker/",
          "https://money.usnews.com/financial-advisors/advisor/kurtis-baker-2868097",
          "https://www.air.ngo/dt_team/kurtis-baker/",
        ],
        knowsAbout: [
          "Entrepreneurship",
          "Personal Finance",
          "Exit Planning",
          "Mental Health Advocacy",
          "Leadership",
        ],
      },
      {
        "@type": "Service",
        name: "Keynote Speaking",
        serviceType: "Keynote and conference speaking",
        provider: { "@id": personId },
        areaServed: { "@type": "Country", name: "United States" },
        description:
          "Kurt Baker delivers keynotes on building businesses, mastering money, and finding purpose for conferences, associations, and corporate events.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://kurtisbakerspeaks.com/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
