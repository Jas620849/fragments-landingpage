import { hasPublicSiteUrl } from "@/lib/site";

interface SpeakableSchemaProps {
  xpath: string[];
}

/**
 * Speakable schema for voice search optimization
 * Identifies sections of a web page that are best suited for audio playback using text-to-speech (TTS)
 */
export default function SpeakableSchema({ xpath }: SpeakableSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const speakable = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: xpath,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
    />
  );
}
