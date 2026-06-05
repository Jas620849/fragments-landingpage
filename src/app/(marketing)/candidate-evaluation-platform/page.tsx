import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Candidate Evaluation Platform | FragmentTrails",
  description: "Comprehensive candidate evaluation platform for scholarship programs and admissions. Structured scoring, bias reduction, and AI-powered assessment tools.",
  keywords: [
    "candidate evaluation platform",
    "candidate evaluation software",
    "applicant scoring system",
    "scholarship assessment platform",
    "interview scoring system",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/candidate-evaluation-platform/") }
    : undefined,
};

export default function CandidateEvaluationPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Candidate Evaluation Platform
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Evaluate scholarship and admission candidates with structured assessment tools, AI-powered scoring, and bias reduction algorithms for fair, consistent decisions.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Platform Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Standardized evaluation rubrics and scoring criteria</li>
            <li>• AI-assisted candidate assessment and ranking</li>
            <li>• Bias detection and reduction tools</li>
            <li>• Multi-evaluator collaboration and calibration</li>
            <li>• Detailed analytics and decision support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
