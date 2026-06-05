import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scholarship Review Process | FragmentTrails",
  description: "Streamline your scholarship review process with AI-powered tools. Efficient candidate evaluation, collaborative workflows, and data-driven decision making for scholarship programs.",
  keywords: [
    "scholarship review process",
    "scholarship evaluation workflow",
    "scholarship committee software",
    "scholarship assessment process",
    "scholarship selection workflow",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-review-process/") }
    : undefined,
};

export default function ScholarshipReviewProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Scholarship Review Process
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Modernize your scholarship review process with AI-powered tools. Streamline candidate evaluation, enable collaborative committee workflows, and make data-driven selection decisions.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Process Optimization</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Automated application screening and triage</li>
            <li>• Collaborative committee evaluation workflows</li>
            <li>• Standardized review criteria and scoring</li>
            <li>• Real-time progress tracking and reporting</li>
            <li>• Integration with scholarship management systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
