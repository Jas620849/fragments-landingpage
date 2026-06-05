import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Structured Interview Software | FragmentTrails",
  description: "Structured interview software for consistent, fair candidate evaluation. Standardized questions and scoring for scholarship and admission interviews.",
  keywords: [
    "structured interview software",
    "structured interview platform",
    "standardized interview tools",
    "consistent interview evaluation",
    "interview standardization software",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/structured-interview-software/") }
    : undefined,
};

export default function StructuredInterviewSoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Structured Interview Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Implement structured interviews with standardized questions and scoring. Our software ensures consistent, fair evaluation across all scholarship and admission interviews.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Structured Interview Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Standardized question libraries</li>
            <li>• Consistent scoring rubrics</li>
            <li>• Interview workflow templates</li>
            <li>• Evaluator guidance tools</li>
            <li>• Quality assurance monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
