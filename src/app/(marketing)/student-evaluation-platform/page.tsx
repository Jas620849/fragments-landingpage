import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Evaluation Platform | FragmentTrails",
  description: "Student evaluation platform for universities and scholarship programs. Comprehensive assessment tools for fair, consistent student evaluation.",
  keywords: [
    "student evaluation platform",
    "student assessment software",
    "education evaluation platform",
    "student performance tracking",
    "academic assessment tools",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/student-evaluation-platform/") }
    : undefined,
};

export default function StudentEvaluationPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Student Evaluation Platform
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Comprehensive student evaluation platform for universities and scholarship programs. Streamline assessment processes with AI-powered tools for fair, consistent student evaluation.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Platform Capabilities</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Holistic student assessment frameworks</li>
            <li>• Performance tracking and analytics</li>
            <li>• Multi-criteria evaluation systems</li>
            <li>• Collaborative evaluator workflows</li>
            <li>• Integration with academic systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
