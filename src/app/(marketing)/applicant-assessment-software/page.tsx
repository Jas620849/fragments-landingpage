import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Applicant Assessment Software | FragmentTrails",
  description: "Comprehensive applicant assessment software for scholarship and admission programs. AI-powered evaluation, scoring, and candidate comparison tools.",
  keywords: [
    "applicant assessment software",
    "candidate assessment platform",
    "applicant evaluation software",
    "scholarship assessment tools",
    "admissions assessment platform",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/applicant-assessment-software/") }
    : undefined,
};

export default function ApplicantAssessmentSoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Applicant Assessment Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Evaluate scholarship and admission applicants with comprehensive assessment software. AI-powered tools provide structured evaluation, fair scoring, and data-driven candidate comparisons.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Assessment Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Multi-dimensional candidate assessment</li>
            <li>• AI-powered scoring and evaluation</li>
            <li>• Customizable assessment criteria</li>
            <li>• Real-time candidate comparison</li>
            <li>• Comprehensive reporting and analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
