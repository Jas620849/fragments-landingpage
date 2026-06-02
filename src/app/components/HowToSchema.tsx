import { absoluteAsset, hasPublicSiteUrl } from "@/lib/site";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

/**
 * HowTo schema for step-by-step instructions
 */
export default function HowToSchema({
  name,
  description,
  steps,
}: HowToSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          url: absoluteAsset(step.image),
        },
      }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
    />
  );
}
