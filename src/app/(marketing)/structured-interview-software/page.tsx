import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faClipboardList, faBalanceScale, faBrain, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Structured Interview Software | FragmentTrails",
  description: "Structured interview software for consistent, fair candidate evaluation. Standardized questions and scoring for scholarship and admission interviews.",
  keywords: [
    "structured interview software",
    "structured interview platform",
    "standardized interview tools",
    "consistent interview evaluation",
    "interview standardization software",
    "behavioral interview framework",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/structured-interview-software/") }
    : undefined,
};

export default function StructuredInterviewSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Structured Interview Software", path: "/structured-interview-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Interview Standardization</p>
          <h1 className="frag-hero-h1 mt-1.5">Structured Interview Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Implement structured interviews with standardized questions and scoring. Our software ensures consistent, fair evaluation across all scholarship and admission interviews.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Power of Structured Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Research consistently shows that structured interviews are more predictive of job performance and academic success than unstructured interviews. By standardizing questions and evaluation criteria, organizations can reduce bias and improve selection accuracy.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Reduced Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Standardized questions minimize the influence of unconscious bias, ensuring all candidates are evaluated fairly.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardList} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Improved Reliability</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Consistent evaluation criteria across interviewers increases reliability and enables fair candidate comparisons.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBrain} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Better Predictions</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Structured interviews are more predictive of future performance, leading to better selection decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Structured Interview Framework</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a complete framework for implementing structured interviews, from question design to scoring and analysis.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faListCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Question Library Management</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Build and maintain libraries of standardized interview questions organized by competency, skill, or topic. Create behavioral questions, situational judgment tests, and technical assessments. Ensure every candidate is asked questions from the same pool.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Scoring Rubric Design</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Create detailed scoring rubrics with clear criteria for each score level. Define what constitutes excellent, good, average, and poor responses. Provide guidance to interviewers on how to evaluate answers consistently.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Interview Templates</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Design interview templates for different positions, scholarship types, or programs. Specify question order, time allocations, and required competencies. Ensure consistency across all interviews of the same type.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Quality Assurance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Monitor interview adherence to structured frameworks. Track which questions are asked, measure time allocations, and identify deviations from protocols. Provide feedback to interviewers to maintain quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Structured Interview Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Competency-Based Questions</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Design questions targeting specific competencies and skills. Map questions to evaluation criteria to ensure comprehensive assessment.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Behavioral Interview Guides</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Implement STAR method interviews with structured guides. Ensure interviewers probe for specific examples and detailed responses.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Scoring Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Provide interviewers with scoring rubrics and guidance during interviews. Enable real-time scoring without disrupting the interview flow.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Interview Analytics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Analyze interview data to identify patterns, improve questions, and enhance prediction accuracy. Use insights to continuously refine your structured interview process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Implement Structured Interviews</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations using FragmentTrails to implement structured interviews and improve selection accuracy.
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
