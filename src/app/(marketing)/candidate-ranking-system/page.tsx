import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Candidate Ranking System | FragmentTrails",
  description: "Objective candidate ranking system for scholarship and admission selection. Data-driven ranking algorithms for fair candidate comparison.",
  keywords: [
    "candidate ranking system",
    "applicant ranking software",
    "candidate comparison platform",
    "scholarship ranking tools",
    "admissions ranking system",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/candidate-ranking-system/") }
    : undefined,
};

export default function CandidateRankingSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Candidate Ranking System
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Rank scholarship and admission candidates objectively with data-driven ranking systems. Our platform provides fair, transparent candidate comparison for selection decisions.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Ranking Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Multi-criteria ranking algorithms</li>
            <li>• Weighted scoring systems</li>
            <li>• Real-time candidate comparison</li>
            <li>• Transparent ranking methodology</li>
            <li>• Customizable ranking criteria</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
