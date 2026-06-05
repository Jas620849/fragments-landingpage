import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scholarship Selection Software | FragmentTrails",
  description: "AI-powered scholarship selection software for fair, data-driven candidate evaluation. Streamline your scholarship program with structured assessment tools.",
  keywords: [
    "scholarship selection software",
    "scholarship selection platform",
    "scholarship assessment software",
    "candidate ranking system",
    "scholarship decision support",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-selection-software/") }
    : undefined,
};

export default function ScholarshipSelectionSoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Scholarship Selection Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Make data-driven scholarship decisions with AI-powered selection software. Reduce bias, improve consistency, and identify the most deserving candidates efficiently.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Selection Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Automated candidate screening and ranking</li>
            <li>• Customizable selection criteria and weights</li>
            <li>• Bias detection and mitigation tools</li>
            <li>• Collaborative selection committee workflows</li>
            <li>• Audit trails and compliance reporting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
