import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import FAQSchema from "../../components/FAQSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faChartBar, faBalanceScale, faUsers } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Scholarship Interview Software | FragmentTrails",
  description: "Streamline scholarship interviews with FragmentTrails. AI-powered interview scoring, structured evaluation, and bias reduction for education institutions and scholarship programs.",
  keywords: [
    "scholarship interview software",
    "scholarship interview platform",
    "interview evaluation platform",
    "candidate scoring system",
    "scholarship assessment platform",
    "scholarship committee tools",
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
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Scholarship Interview Software", path: "/scholarship-interview-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Scholarship Management</p>
          <h1 className="frag-hero-h1 mt-1.5">Scholarship Interview Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Transform your scholarship interview process with AI-powered scoring, structured evaluation, and bias reduction tools designed for education institutions.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Modernizing Scholarship Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Scholarship interviews are critical for identifying deserving candidates, but traditional interview processes often suffer from inconsistency, bias, and administrative burden. Scholarship committees need modern tools to conduct fair, efficient, and insightful interviews.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faMicrophone} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Questions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different committee members ask different questions, making fair comparisons between candidates difficult.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Evaluation Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Unconscious bias can influence interview assessments, potentially disadvantaging qualified candidates from diverse backgrounds.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Coordination Challenges</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating multiple committee members, scheduling interviews, and aggregating feedback creates administrative overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Comprehensive Interview Solution</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a complete scholarship interview platform that addresses every stage of the interview process, from scheduling to final selection decisions.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faMicrophone} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Interview Frameworks</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement standardized interview protocols with pre-approved question banks and scoring rubrics. Ensure every candidate is asked similar questions and evaluated against the same criteria. Customize frameworks for different scholarship types and categories.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Powered Scoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Leverage AI to transcribe interviews, analyze responses, and provide objective scoring insights. Our AI helps identify key themes, assess communication skills, and supplement human evaluation with data-driven insights.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Bias Reduction Tools</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our platform includes bias detection algorithms that flag unusual scoring patterns and potential demographic disparities. Implement blind assessment options where appropriate and calibrate evaluators to ensure fair assessments.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Committee Collaboration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable committee members to collaborate with shared candidate profiles, discussion threads, and consensus-building tools. Streamline committee decision-making with real-time collaboration and documented discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Key Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Interview Scheduling</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Schedule interviews with automated calendar integration, self-service booking for candidates, and conflict resolution. Support multiple interview formats including video and phone.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Scoring</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Score candidates in real-time during interviews with intuitive interfaces. Access rubrics, take notes, and assign scores without disrupting the interview flow.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Candidate Comparison</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Compare candidates side-by-side across evaluation criteria. Visualize score distributions and make data-driven selection decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Comprehensive Reporting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate detailed reports on interview outcomes, committee decisions, and selection rationale. Provide documentation for donors and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Scholarship Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join scholarship programs using FragmentTrails to conduct fair, efficient interviews.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
              className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
            >
              Get Started Free
            </a>
            <a href="/contact/" className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm">
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
