export function JsonLd() {
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
        publisher: { "@id": "https://kurtisbaker.com/#kurt" },
      },
      {
        "@type": "Person",
        "@id": "https://kurtisbaker.com/#kurt",
        name: "Kurt Baker",
        url: "https://kurtisbaker.com",
        jobTitle: "Keynote Speaker, Private Wealth Manager",
        sameAs: [
          "https://kurtisbaker.com",
          "https://www.linkedin.com/in/kurtisbaker/",
          "https://www.youtube.com/@kurtisbaker",
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
        provider: { "@id": "https://kurtisbaker.com/#kurt" },
        areaServed: { "@type": "Country", name: "United States" },
        description:
          "Kurt Baker delivers keynotes on building businesses, mastering money, and finding purpose for conferences, associations, and corporate events.",
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
