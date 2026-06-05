import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Interview Management System | FragmentTrails",
  description: "Complete student interview management for universities and scholarship programs. Schedule, conduct, and evaluate interviews with AI-powered tools.",
  keywords: [
    "student interview management system",
    "student interview platform",
    "admissions interview software",
    "scholarship interview software",
    "interview workflow automation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/student-interview-management/") }
    : undefined,
};

export default function StudentInterviewManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Student Interview Management System
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Streamline your entire student interview process from scheduling to evaluation. AI-powered tools help universities and scholarship programs make better admission decisions.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">System Capabilities</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Automated interview scheduling and coordination</li>
            <li>• Real-time interview moderation and scoring</li>
            <li>• Centralized candidate data management</li>
            <li>• Collaborative evaluator workflows</li>
            <li>• Integration with existing admissions systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
