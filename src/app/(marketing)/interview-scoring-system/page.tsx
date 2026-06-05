import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interview Scoring System | FragmentTrails",
  description: "Standardized interview scoring system for scholarship and admission interviews. AI-assisted evaluation with consistent rubrics and bias reduction.",
  keywords: [
    "interview scoring system",
    "interview evaluation software",
    "candidate scoring platform",
    "structured interview assessment",
    "interview rubric software",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-scoring-system/") }
    : undefined,
};

export default function InterviewScoringSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Interview Scoring System
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Standardize your interview evaluations with a comprehensive scoring system. AI-assisted tools ensure consistency, reduce bias, and provide actionable insights for decision-makers.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Scoring Capabilities</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Customizable scoring rubrics and criteria</li>
            <li>• Real-time scoring during interviews</li>
            <li>• AI-powered consistency checks</li>
            <li>• Multi-dimensional candidate assessment</li>
            <li>• Comparative scoring and benchmarking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
