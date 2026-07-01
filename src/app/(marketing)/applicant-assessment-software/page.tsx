import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faUsers, faBrain, faChartBar } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Applicant Assessment Software | FragmentTrails - Multi-Stage Candidate Evaluation",
  description: "Streamline multi-stage applicant assessment with FragmentTrails. From initial screening to final selection, our software supports holistic review across academic achievements, extracurricular activities, essays, and interviews for scholarship and admission programs.",
  keywords: [
    "applicant assessment software",
    "multi-stage candidate evaluation",
    "holistic applicant review",
    "scholarship assessment tools",
    "admissions assessment platform",
    "candidate screening workflow",
    "portfolio-based assessment",
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
            Manage the complete applicant assessment lifecycle from initial screening through final selection. Our software supports multi-stage evaluation workflows, portfolio review, and holistic assessment for scholarship and admission programs.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Complexity of Multi-Stage Assessment</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Modern applicant assessment requires managing multiple evaluation stages: initial eligibility screening, document review, qualitative assessment, interviews, and final selection. Each stage demands different criteria, evaluators, and workflows. Without integrated software, coordinating these stages becomes fragmented and error-prone.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardCheck} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Stage Fragmentation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Different assessment stages often use disconnected systems, causing data loss, communication gaps, and difficulty tracking applicant progress through the pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Workflow Bottlenecks</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual handoffs between stages create delays, lost applications, and unclear responsibilities. Applicants fall through cracks when processes lack automation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Pipeline Visibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without centralized tracking, administrators cannot see where applicants are in the process, identify bottlenecks, or predict completion timelines for decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Integrated Multi-Stage Assessment</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails unifies all assessment stages into a single platform, from automated screening through final selection. Each stage feeds into the next, maintaining data continuity and providing complete visibility into applicant progress.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Automated Screening Stage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Configure automated eligibility screening based on GPA thresholds, test scores, residency requirements, or custom criteria. Automatically advance qualified applicants to review stages while flagging edge cases for manual review. Reduce initial screening workload by up to 80%.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Document Review Stage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Centralize all applicant documents including transcripts, essays, recommendations, and portfolios. Enable reviewers to access complete materials with annotation tools, comparison views, and version tracking. Track which documents have been reviewed by which evaluators.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Qualitative Assessment Stage</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement structured rubric-based evaluation for essays, personal statements, and qualitative materials. Support multiple reviewers per applicant with automated score aggregation and outlier detection. Enable blind review options to reduce bias in subjective assessments.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Interview Stage Integration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Seamlessly integrate interview scheduling, conduct, and scoring into the assessment pipeline. Interview scores automatically feed into composite candidate evaluations. Support multiple interview formats with consistent evaluation criteria across all stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Pipeline Management Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Stage Transition Automation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Configure automated transitions between assessment stages based on completion criteria, score thresholds, or committee decisions. Eliminate manual status updates and ensure applicants progress smoothly through the pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Pipeline Analytics Dashboard</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Visualize applicant flow through all assessment stages with real-time dashboards. Identify bottlenecks, track stage conversion rates, and predict completion timelines. Allocate resources based on pipeline volume and velocity.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Cross-Stage Data Continuity</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                All assessment data flows seamlessly between stages. Screening results inform document review, which feeds into qualitative assessment and interview scoring. Build comprehensive applicant profiles that accumulate insights across the entire pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Final Selection Stage</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Aggregate all assessment data for final selection decisions. Support committee voting, ranking exercises, and consensus-building tools. Generate selection reports documenting the complete assessment journey for each selected candidate.
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
