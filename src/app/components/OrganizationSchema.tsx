interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs?: string[];
  contactPoint?: {
    type: string;
    telephone: string;
    contactType: string;
    availableLanguage: string;
  };
}

export default function OrganizationSchema({
  name,
  description,
  url,
  logo,
  sameAs,
  contactPoint,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo,
    sameAs: sameAs || [],
    contactPoint: contactPoint
      ? {
          "@type": contactPoint.type,
          telephone: contactPoint.telephone,
          contactType: contactPoint.contactType,
          availableLanguage: contactPoint.availableLanguage,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
