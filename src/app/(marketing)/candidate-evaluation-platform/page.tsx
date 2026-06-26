import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faStar, faUsers, faChartLine, faLock } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Candidate Evaluation Platform | FragmentTrails",
  description: "Comprehensive candidate evaluation platform for scholarship programs and admissions. Structured scoring, bias reduction, and AI-powered assessment tools for fair decisions.",
  keywords: [
    "candidate evaluation platform",
    "candidate evaluation software",
    "applicant scoring system",
    "scholarship assessment platform",
    "interview scoring system",
    "holistic candidate review",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/candidate-evaluation-platform/") }
    : undefined,
};

export default function CandidateEvaluationPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Candidate Evaluation Platform", path: "/candidate-evaluation-platform/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Assessment Tools</p>
          <h1 className="frag-hero-h1 mt-1.5">Candidate Evaluation Platform</h1>
          <p className="frag-hero-lead max-w-2xl">
            Evaluate scholarship and admission candidates with structured assessment tools, AI-powered scoring, and bias reduction algorithms for fair, consistent decisions.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Need for Structured Evaluation</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Traditional candidate evaluation methods often rely on subjective assessments, inconsistent criteria, and manual processes that can compromise fairness and efficiency. Scholarship programs and admissions offices need tools that enable structured, objective evaluation while capturing the full picture of each candidate.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Standards</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different evaluators apply different criteria, making it difficult to compare candidates fairly and consistently.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Collaboration Challenges</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Coordinating multiple evaluators, sharing feedback, and reaching consensus becomes complex without proper tools.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Limited Insights</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual evaluation processes lack the analytics needed to identify patterns, improve processes, and demonstrate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Comprehensive Evaluation Capabilities</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a complete candidate evaluation platform that supports every stage of the assessment process, from initial screening to final selection decisions.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Customizable Evaluation Rubrics</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Create tailored evaluation criteria for different programs, scholarships, or positions. Define weighted categories, scoring scales, and qualitative assessment guidelines. Ensure every evaluator uses the same framework for consistent assessment across all candidates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faStar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Multi-Dimensional Scoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Evaluate candidates across multiple dimensions including academic achievement, extracurricular activities, leadership potential, personal statements, and interview performance. Combine quantitative scores with qualitative assessments for holistic evaluation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Evaluation Workflows</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable multiple evaluators to assess candidates independently or collaboratively. Share candidate profiles, discuss assessments within the platform, and build consensus through structured decision-making processes. Track evaluator participation and contributions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faLock} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Secure & Compliant</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Protect candidate information with enterprise-grade security. Maintain complete audit trails of all evaluations for compliance and review. Control access permissions to ensure appropriate confidentiality throughout the evaluation process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Platform Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">AI-Assisted Scoring</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Leverage AI to analyze written responses, essays, and interview transcripts. Get objective insights that supplement human evaluation while maintaining final decision authority with your team.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Candidate Comparison Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Compare candidates side-by-side across evaluation criteria. Visualize score distributions, identify top performers, and make data-driven selection decisions with comprehensive comparison dashboards.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Automated Screening</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Set minimum qualification thresholds and automatically screen candidates. Focus evaluator time on qualified applicants while ensuring no promising candidate is overlooked.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Reporting & Analytics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate detailed reports on evaluation outcomes, evaluator performance, and selection decisions. Use analytics to continuously improve your evaluation process and demonstrate impact to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Your Evaluation Process</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations using FragmentTrails to make fairer, more consistent candidate evaluations.
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
