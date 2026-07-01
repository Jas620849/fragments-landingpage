import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faEye, faChartBar, faUsers, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Bias Free Candidate Evaluation | FragmentTrails - Structured Bias Mitigation Frameworks",
  description: "Implement systematic bias reduction in candidate evaluation with FragmentTrails. Our platform provides structured frameworks, blind assessment options, bias detection algorithms, and calibration tools for equitable selection processes.",
  keywords: [
    "bias free candidate evaluation",
    "structured bias mitigation",
    "blind assessment tools",
    "bias detection algorithms",
    "equitable evaluation frameworks",
    "unconscious bias reduction",
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
    Implement systematic bias reduction through structured evaluation frameworks, blind assessment options, and continuous bias monitoring. Our platform provides the tools and methodologies needed to achieve equitable candidate selection.
  </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Science of Evaluation Bias</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    Research in psychology and organizational behavior has identified numerous cognitive biases that affect evaluation decisions. From affinity bias and halo effects to confirmation bias and stereotyping, these unconscious influences systematically disadvantage certain candidates while advantaging others. Without structured mitigation, even well-intentioned evaluators perpetuate inequities.
  </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Affinity Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Evaluators unconsciously favor candidates who share similar backgrounds, experiences, or characteristics, creating homogeneity in selection outcomes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Confirmation Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Once evaluators form initial impressions, they selectively seek information that confirms their assumptions while discounting contradictory evidence.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Halo Effect</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A single positive trait or impressive credential causes evaluators to overlook weaknesses in other areas, inflating overall assessments disproportionately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Structured Bias Mitigation Framework</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    FragmentTrails implements a comprehensive, evidence-based approach to bias reduction. Rather than relying on awareness training alone, our platform provides structural changes to evaluation processes, blind assessment options, algorithmic bias detection, and continuous monitoring to systematically reduce bias impact.
  </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Blind Assessment Protocols</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement blind review options where identifying information is hidden from evaluators during initial assessments. Redact names, demographics, schools, and other potentially biasing information. Reveal identifying information only after preliminary scores are submitted, ensuring initial evaluations focus solely on merit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faChartBar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Algorithmic Bias Detection</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Machine learning algorithms analyze scoring patterns for demographic disparities, unusual score distributions, and potential bias incidents. The system flags when evaluator scores show statistically significant bias against protected groups, enabling intervention and recalibration.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Structured Question Design</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Use evidence-based question frameworks that minimize bias triggers. Implement behavioral interview questions focused on specific past actions rather than hypothetical scenarios. Avoid questions that disadvantage candidates from non-traditional backgrounds or require cultural knowledge not relevant to the evaluation criteria.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Diverse Evaluator Panels</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Ensure evaluation panels reflect diverse perspectives by intentionally assigning evaluators from varied backgrounds, experiences, and demographics. The system tracks panel composition and flags when panels lack diversity, recommending adjustments to bring multiple perspectives to candidate assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Bias Reduction Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Bias Impact Reporting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Generate reports showing demographic breakdowns of scores, selection rates, and evaluation outcomes. Identify where bias may be influencing decisions and track improvement over time. Provide transparency to stakeholders about equity in selection processes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Intervention Workflows</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                When bias is detected, the system triggers intervention workflows requiring secondary review, committee discussion, or recusal of affected evaluators. Document all bias incidents and interventions for compliance and continuous improvement.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Continuous Bias Monitoring</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Establish ongoing monitoring of evaluation processes with regular bias audits. Track evaluator performance over time, identify patterns of bias emergence, and schedule refresher training when bias metrics indicate need. Make bias reduction a continuous improvement process rather than one-time intervention.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Compliance Documentation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Document all bias mitigation efforts for regulatory compliance and accreditation requirements. Generate reports showing structured frameworks, blind assessment protocols, bias detection results, and intervention history. Demonstrate commitment to equitable selection to oversight bodies.
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
