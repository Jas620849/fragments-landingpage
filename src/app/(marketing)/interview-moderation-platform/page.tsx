import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interview Moderation Platform | FragmentTrails",
  description: "AI-powered interview moderation platform for fair, structured scholarship and admission interviews. Bias reduction and quality assurance for education institutions.",
  keywords: [
    "interview moderation platform",
    "interview moderation software",
    "AI interview moderation",
    "bias free interview platform",
    "structured interview moderation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-moderation-platform/") }
    : undefined,
};

export default function InterviewModerationPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Interview Moderation Platform
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Ensure fair, consistent interviews with AI-powered moderation. Our platform reduces bias, maintains quality standards, and provides structured frameworks for scholarship and admission interviews.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Moderation Features</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Real-time AI-powered content moderation</li>
            <li>• Bias detection and flagging systems</li>
            <li>• Structured interview question frameworks</li>
            <li>• Quality assurance and compliance monitoring</li>
            <li>• Evaluator training and calibration tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
