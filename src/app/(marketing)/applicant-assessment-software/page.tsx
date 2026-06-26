import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faUsers, faBrain, faChartBar } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Applicant Assessment Software | FragmentTrails",
  description: "Comprehensive applicant assessment software for scholarship and admission programs. AI-powered evaluation, scoring, and candidate comparison tools.",
  keywords: [
    "applicant assessment software",
    "candidate assessment platform",
    "applicant evaluation software",
    "scholarship assessment tools",
    "admissions assessment platform",
    "holistic applicant review",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/applicant-assessment-software/") }
    : undefined,
};

export default function ApplicantAssessmentSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Applicant Assessment Software", path: "/applicant-assessment-software/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Assessment Tools</p>
          <h1 className="frag-hero-h1 mt-1.5">Applicant Assessment Software</h1>
          <p className="frag-hero-lead max-w-2xl">
            Evaluate scholarship and admission applicants with comprehensive assessment software. AI-powered tools provide structured evaluation, fair scoring, and data-driven candidate comparisons.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Challenge of Applicant Assessment</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Assessing applicants for scholarships and admissions requires evaluating diverse qualifications, experiences, and potential. Traditional assessment methods often struggle with consistency, bias, and the complexity of holistic review processes.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Inconsistent Criteria</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different evaluators apply different standards, making fair comparisons across applicants challenging.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Holistic Complexity</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Evaluating academics, extracurriculars, essays, and interviews requires sophisticated assessment frameworks.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Limited Insights</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual assessment lacks the analytics needed to identify patterns, improve processes, or demonstrate outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Comprehensive Assessment Framework</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides a complete applicant assessment platform that supports holistic evaluation across all dimensions of candidate qualifications.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Multi-Dimensional Evaluation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Assess applicants across multiple dimensions including academic achievement, extracurricular involvement, leadership experience, personal statements, and interview performance. Combine quantitative and qualitative assessments for holistic review.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Customizable Assessment Criteria</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Design assessment rubrics tailored to your program&apos;s priorities. Define weighted criteria for different scholarship types or admission tracks. Ensure consistency while maintaining flexibility for diverse applicant pools.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Collaborative Assessment Workflows</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Enable multiple evaluators to assess applicants independently or collaboratively. Share observations, discuss assessments, and reach consensus through structured workflows. Track evaluator participation and ensure balanced perspectives.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Assisted Evaluation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Leverage AI to analyze written responses, essays, and interview transcripts. Get objective insights that supplement human evaluation while maintaining final decision authority with your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Assessment Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Automated Screening</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Set minimum qualification thresholds and automatically screen applicants. Focus evaluator time on qualified candidates while ensuring no promising applicant is overlooked.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Candidate Comparison</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Compare applicants side-by-side across evaluation criteria. Visualize score distributions, identify top performers, and make data-driven selection decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Portfolio Assessment</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Support portfolio-based assessment where applicants showcase their best work. Enable holistic review of achievements, projects, and capabilities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Reporting & Analytics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate detailed reports on assessment outcomes, evaluator performance, and selection decisions. Use analytics to improve your assessment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Transform Applicant Assessment</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations using FragmentTrails for comprehensive, fair applicant assessment.
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
