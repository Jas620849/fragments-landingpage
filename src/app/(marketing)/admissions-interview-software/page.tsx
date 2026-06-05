import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions Interview Software | FragmentTrails",
  description: "Complete admissions interview software for colleges and universities. AI-powered evaluation, scheduling, and candidate management for higher education institutions.",
  keywords: [
    "admissions interview software",
    "college admissions interview platform",
    "university interview software",
    "admissions evaluation system",
    "higher education interview tools",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/admissions-interview-software/") }
    : undefined,
};

export default function AdmissionsInterviewSoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Admissions Interview Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Transform your college and university admissions process with comprehensive interview software. AI-powered tools help evaluate candidates fairly and efficiently at scale.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Admissions Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• End-to-end interview workflow management</li>
            <li>• AI-assisted candidate evaluation and scoring</li>
            <li>• Integration with existing admissions systems</li>
            <li>• Collaborative committee evaluation tools</li>
            <li>• Analytics for enrollment decision support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
