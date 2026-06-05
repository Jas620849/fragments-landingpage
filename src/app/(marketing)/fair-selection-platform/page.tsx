import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fair Selection Platform | FragmentTrails",
  description: "Fair selection platform for scholarship and admission programs. Bias-free evaluation tools for equitable candidate selection.",
  keywords: [
    "fair selection platform",
    "equitable selection software",
    "bias-free selection tools",
    "fair candidate evaluation",
    "transparent selection process",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/fair-selection-platform/") }
    : undefined,
};

export default function FairSelectionPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Fair Selection Platform
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Ensure fair, equitable candidate selection with bias-free evaluation tools. Our platform promotes transparency and consistency in scholarship and admission selection processes.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Fairness Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Bias detection and mitigation</li>
            <li>• Standardized evaluation criteria</li>
            <li>• Transparent selection processes</li>
            <li>• Equal opportunity safeguards</li>
            <li>• Compliance and audit trails</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
