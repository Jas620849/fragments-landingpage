import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interview Panel Management Software | FragmentTrails",
  description: "Comprehensive interview panel management software for scholarship and admission interviews. Coordinate evaluators, standardize scoring, and streamline panel workflows.",
  keywords: [
    "interview panel management software",
    "interview panel coordination",
    "evaluator management system",
    "committee interview software",
    "panel evaluation tools",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-panel-management/") }
    : undefined,
};

export default function InterviewPanelManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Interview Panel Management Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Coordinate and manage interview panels efficiently. Our software helps schedule evaluators, standardize scoring across panel members, and streamline collaborative decision-making for scholarship and admission interviews.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Panel Management Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Evaluator scheduling and assignment</li>
            <li>• Standardized scoring across panel members</li>
            <li>• Real-time collaboration and discussion tools</li>
            <li>• Consensus-building and voting mechanisms</li>
            <li>• Panel performance analytics and calibration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
