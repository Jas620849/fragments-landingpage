import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import FAQSchema from "../../components/FAQSchema";

export const metadata: Metadata = {
  title: "Scholarship Interview Software | FragmentTrails",
  description: "Streamline scholarship interviews with FragmentTrails. AI-powered interview scoring, structured evaluation, and bias reduction for education institutions and scholarship programs.",
  keywords: [
    "scholarship interview software",
    "scholarship interview platform",
    "interview evaluation platform",
    "candidate scoring system",
    "scholarship assessment platform",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/scholarship-interview-software/") }
    : undefined,
};

const scholarshipInterviewFAQs = [
  {
    question: "What is scholarship interview software?",
    answer: "Scholarship interview software is a digital platform that helps education institutions conduct, evaluate, and manage scholarship interviews with AI-powered scoring, structured evaluation, and bias reduction tools.",
  },
  {
    question: "How does FragmentTrails reduce bias in scholarship interviews?",
    answer: "FragmentTrails uses AI-powered bias detection algorithms, standardized evaluation rubrics, and structured interview frameworks to minimize unconscious bias and ensure fair candidate assessment.",
  },
  {
    question: "Can universities use this software for admissions interviews?",
    answer: "Yes, FragmentTrails is designed for both scholarship and admissions interviews. Universities, colleges, and educational institutions can use it for any type of candidate evaluation process.",
  },
  {
    question: "How long does it take to implement the scholarship interview software?",
    answer: "Implementation typically takes 1-2 weeks for setup and training. The platform is cloud-based and requires no complex IT infrastructure, allowing for quick deployment.",
  },
];

export default function ScholarshipInterviewSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={scholarshipInterviewFAQs} />
      <div className="min-h-screen bg-gradient-to-b from-primary to-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            Scholarship Interview Software
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-textDark">
            Transform your scholarship interview process with AI-powered scoring, structured evaluation, and bias reduction tools designed for education institutions.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-secondary">Key Features</h2>
            <ul className="mt-4 space-y-2 text-textDark">
              <li>• AI-powered interview moderation and scoring</li>
              <li>• Structured evaluation rubrics for consistency</li>
              <li>• Bias reduction algorithms for fair assessment</li>
              <li>• Real-time candidate comparison and ranking</li>
              <li>• Comprehensive analytics and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
