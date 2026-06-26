import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClipboardList, faUsers, faBrain } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Interview Scoring System | FragmentTrails",
  description: "Standardized interview scoring system for scholarship and admission interviews. AI-assisted evaluation with consistent rubrics and bias reduction for fair assessments.",
  keywords: [
    "interview scoring system",
    "interview evaluation software",
    "candidate scoring platform",
    "structured interview assessment",
    "interview rubric software",
    "consistent interview evaluation",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/interview-scoring-system/") }
    : undefined,
};

export default function InterviewScoringSystemPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Interview Scoring System", path: "/interview-scoring-system/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Interview Assessment</p>
          <h1 className="frag-hero-h1 mt-1.5">Interview Scoring System</h1>
          <p className="frag-hero-lead max-w-2xl">
            Standardize your interview evaluations with a comprehensive scoring system. AI-assisted tools ensure consistency, reduce bias, and provide actionable insights for decision-makers.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Problem with Traditional Interview Scoring</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Interview evaluations often suffer from inconsistency, subjectivity, and lack of standardization. Different interviewers may use different criteria, score differently, or be influenced by unconscious bias, making it difficult to compare candidates fairly.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardList} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Criteria</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Interviewers often evaluate candidates based on different criteria, making fair comparisons nearly impossible.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Evaluator Variance</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Some interviewers are naturally more lenient or strict, creating unfair advantages or disadvantages for candidates.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBrain} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Unconscious Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without structured frameworks, interviews can be influenced by affinity bias, confirmation bias, and other cognitive biases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Structured Interview Scoring Framework</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a comprehensive interview scoring system that standardizes evaluations across all interviewers while capturing the nuances of each candidate&apos;s performance.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Standardized Scoring Rubrics</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Define clear scoring criteria for each interview question or competency area. Create rating scales with detailed descriptions for each score level. Ensure every interviewer uses the same framework, enabling consistent evaluation across all candidates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faStar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Multi-Dimensional Assessment</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Score candidates across multiple dimensions including communication skills, technical knowledge, problem-solving ability, cultural fit, and leadership potential. Combine these scores into a comprehensive assessment while maintaining visibility into each dimension.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Evaluator Calibration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement calibration sessions where interviewers review sample interviews and discuss their scoring. Track individual interviewer tendencies and provide feedback to align scoring across the team. Adjust for systematic differences between evaluators.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Powered Consistency Checks</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our AI analyzes interview transcripts and scores to identify patterns that may indicate bias or inconsistency. Flag unusual score distributions, detect when interviewers deviate from rubrics, and provide real-time feedback to maintain evaluation quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Scoring System Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Scoring Interface</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Score candidates in real-time during interviews with an intuitive interface. Access rubrics, take notes, and assign scores without interrupting the interview flow.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Comparative Benchmarking</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Compare candidate scores against historical averages, peer groups, or predefined benchmarks. Understand how a candidate performs relative to others in the pool.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Score Normalization</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Automatically adjust scores to account for interviewer leniency or strictness. Ensure fair comparison by normalizing scores across different evaluators.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Detailed Score Reports</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate comprehensive score reports showing breakdowns by dimension, interviewer comments, and comparative analysis. Provide actionable insights for decision-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Standardize Your Interview Process</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations using FragmentTrails to make consistent, fair interview evaluations.
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
