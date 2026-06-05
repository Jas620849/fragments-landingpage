import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bias Free Candidate Evaluation | FragmentTrails",
  description: "Achieve bias-free candidate evaluation with AI-powered tools. Reduce unconscious bias in scholarship and admission interviews for fair, equitable selection processes.",
  keywords: [
    "bias free candidate evaluation",
    "unbiased interview assessment",
    "fair candidate selection",
    "bias reduction software",
    "equitable evaluation tools",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/bias-free-candidate-evaluation/") }
    : undefined,
};

export default function BiasFreeCandidateEvaluationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Bias-Free Candidate Evaluation
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Eliminate unconscious bias from your scholarship and admission evaluations. Our AI-powered platform provides structured frameworks, bias detection, and fair assessment tools for equitable candidate selection.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Bias Reduction Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• AI-powered bias detection and flagging</li>
            <li>• Structured, standardized evaluation criteria</li>
            <li>• Blind assessment capabilities where appropriate</li>
            <li>• Evaluator calibration and training tools</li>
            <li>• Analytics for identifying bias patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
