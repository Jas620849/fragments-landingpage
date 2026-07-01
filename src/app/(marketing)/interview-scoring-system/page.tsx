import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClipboardList, faUsers, faBrain } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Interview Scoring System | FragmentTrails - Evaluator Calibration & Normalization",
  description: "Achieve consistent interview scoring with FragmentTrails. Our system features evaluator calibration, score normalization, bias detection, and statistical adjustment for fair candidate comparison across scholarship and admission interviews.",
  keywords: [
    "interview scoring system",
    "evaluator calibration",
    "score normalization",
    "interview bias detection",
    "statistical interview adjustment",
    "consistent interview evaluation",
    "interview rubric software",
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
    Achieve consistent, defensible interview scores through evaluator calibration and statistical normalization. Our system addresses interviewer variance, bias patterns, and scoring inconsistencies for fair candidate comparison.
  </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Challenge of Interviewer Variance</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    Research shows that interviewer variance accounts for significant score differences in structured interviews. Some evaluators are naturally lenient, others strict, and unconscious biases influence scoring patterns. Without calibration and normalization, interview scores cannot be fairly compared across different interviewers.
  </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faClipboardList} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Leniency Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Some interviewers consistently score higher or lower than average, creating unfair advantages or disadvantages for candidates based on assignment rather than performance.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Central Tendency Bias</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Interviewers avoid extreme scores, clustering ratings around the middle of the scale. This compression reduces score differentiation and makes top candidates harder to identify.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBrain} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Halo Effect</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A single positive trait or strong response influences overall scoring, causing interviewers to overlook weaknesses in other areas and inflate total scores disproportionately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Calibration-Based Scoring Methodology</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
    FragmentTrails implements a scientifically-grounded scoring methodology that combines structured rubrics with statistical calibration. Our system measures interviewer tendencies, applies normalization algorithms, and provides continuous feedback to achieve consistent scoring across all evaluators.
  </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Baseline Evaluator Profiling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Before live interviews, evaluators complete calibration exercises using sample responses. The system profiles each interviewer&apos;s scoring tendencies, identifies bias patterns, and establishes baseline metrics for later normalization. This pre-interview calibration reduces variance before candidate evaluation begins.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faStar} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Real-Time Score Normalization</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  As interviewers submit scores, the system applies statistical normalization based on their established profiles. Lenient interviewers&apos; scores are adjusted downward, strict evaluators&apos; scores upward, ensuring fair comparison across all candidates. Normalization happens transparently without disrupting the interview workflow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Bias Pattern Detection</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Machine learning algorithms analyze scoring patterns for demographic bias, question-level inconsistencies, and unusual score distributions. The system flags potential bias incidents in real-time, allowing intervention before scores are finalized. All bias detection is documented for compliance and improvement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Continuous Calibration Feedback</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Provide interviewers with ongoing feedback on their scoring patterns compared to team averages. Show how their scores normalize, highlight areas where they deviate from rubrics, and offer targeted training resources. This continuous improvement loop steadily reduces evaluator variance over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Statistical Scoring Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Z-Score Standardization</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Apply statistical z-score standardization to compare scores across different interviewers and question sets. This method accounts for both mean differences and variance, creating truly comparable scores regardless of who conducted the interview.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Inter-Rater Reliability Metrics</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track inter-rater reliability statistics including Cohen&apos;s kappa and intra-class correlation. Monitor how well interviewers agree on candidate assessments and identify when reliability falls below acceptable thresholds requiring intervention.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Outlier Detection & Review</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Automatically flag scores that deviate significantly from expected patterns based on interviewer profiles and candidate performance. Require secondary review for outlier scores before finalization, preventing single extreme ratings from unduly influencing decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Calibration Analytics Dashboard</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Visualize interviewer calibration metrics, score distributions, and normalization adjustments. Track improvement over time and identify evaluators who need additional training or support. Use data to continuously improve scoring quality.
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
