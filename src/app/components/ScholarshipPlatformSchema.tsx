export default function ScholarshipPlatformSchema() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FragmentTrails",
      url: "https://fragmenttrails.com",
      logo: "https://fragmenttrails.com/logo-no-bg.png",
      description: "Scholarship interview and candidate evaluation platform with AI-powered moderation, structured scoring, and bias reduction tools for education institutions.",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FragmentTrails",
      url: "https://fragmenttrails.com",
      description: "Scholarship interview and candidate evaluation platform for education institutions.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://fragmenttrails.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FragmentTrails",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier available for scholarship interview management",
      },
      description: "Scholarship interview and candidate evaluation platform with AI-powered moderation, structured scoring, and bias reduction tools for education institutions.",
      featureList: [
        "AI-powered interview moderation",
        "Structured candidate evaluation",
        "Bias reduction algorithms",
        "Interview scoring system",
        "Scholarship selection workflow",
        "Admissions interview management",
        "Interview panel coordination",
        "Candidate comparison tools",
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Education institutions, scholarship programs, universities",
      },
      provider: {
        "@type": "Organization",
        name: "FragmentTrails",
        url: "https://fragmenttrails.com",
      },
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
