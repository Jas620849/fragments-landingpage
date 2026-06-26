import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faEye, faChartBar, faUsers, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Bias Free Candidate Evaluation | FragmentTrails",
  description: "Eliminate unconscious bias in candidate evaluations with FragmentTrails. AI-powered bias detection tools help scholarship committees and admissions teams make fair, equitable decisions.",
  keywords: [
    "bias free candidate evaluation",
    "unbiased interview assessment",
    "fair candidate selection",
    "bias reduction software",
    "equitable evaluation tools",
    "unconscious bias training",
    "diversity in selection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/bias-free-candidate-evaluation/") }
    : undefined,
};

export default function BiasFreeCandidateEvaluationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Bias Free Candidate Evaluation", path: "/bias-free-candidate-evaluation/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Fair Selection</p>
          <h1 className="frag-hero-h1 mt-1.5">Bias-Free Candidate Evaluation</h1>
          <p className="frag-hero-lead max-w-2xl">
            Eliminate unconscious bias from your scholarship and admission evaluations. Our AI-powered platform provides structured frameworks, bias detection, and fair assessment tools for equitable candidate selection.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Understanding Unconscious Bias in Selection</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Even well-intentioned evaluators are subject to unconscious biases that can influence their decisions. These biases can affect scholarship awards, college admissions, and hiring decisions, leading to unfair outcomes and reduced diversity.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Affinity Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Evaluators tend to favor candidates who share similar backgrounds, experiences, or characteristics with themselves.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Confirmation Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Evaluators may seek information that confirms their initial impressions while overlooking contradictory evidence.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Halo Effect</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A single positive trait can influence overall perception, causing evaluators to overlook weaknesses in other areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">How FragmentTrails Reduces Bias</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Our platform combines structured evaluation frameworks with AI-powered bias detection to help organizations make more objective, fair decisions.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Evaluation Criteria</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement standardized rubrics that define clear evaluation criteria for all candidates. By establishing objective standards upfront, evaluators focus on relevant qualifications rather than subjective impressions. Weighted criteria ensure consistent evaluation across all reviewers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">AI-Powered Bias Detection</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our machine learning algorithms analyze scoring patterns to identify potential bias. The system flags unusual score distributions, inconsistencies between evaluators, and patterns that may indicate demographic bias. These alerts help committees calibrate their evaluations and address bias proactively.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Blind Assessment Options</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Where appropriate, implement blind evaluation processes that remove identifying information from candidate materials. This allows evaluators to focus solely on qualifications and achievements without being influenced by demographic factors, names, or institutions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Evaluator Calibration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Conduct calibration sessions where evaluators review sample applications and discuss their assessments. This process aligns evaluation standards across the team, reduces individual biases, and ensures consistent application of criteria. Track evaluator performance over time to identify training needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Benefits of Bias-Free Evaluation</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Improved Diversity</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Fair evaluation processes increase diversity among selected candidates, bringing varied perspectives and experiences to your organization or institution.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Enhanced Fairness</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Structured, objective evaluation ensures all candidates are assessed against the same standards, promoting fairness and equity in selection decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Better Decision Quality</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Data-driven, bias-aware evaluations lead to better selection decisions by focusing on relevant qualifications and potential rather than subjective impressions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Legal Compliance</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Documented, fair evaluation processes help demonstrate compliance with anti-discrimination laws and regulations, reducing legal risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Build a Fairer Selection Process</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations committed to eliminating bias and building more diverse, equitable selection processes.
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
