import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortNumericDown, faBalanceScale, faChartBar, faFilter, faListOl } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Candidate Ranking System | FragmentTrails",
  description: "Objective candidate ranking system for scholarship and admission selection. Data-driven ranking algorithms for fair candidate comparison and transparent decisions.",
  keywords: [
    "candidate ranking system",
    "applicant ranking software",
    "candidate comparison platform",
    "scholarship ranking tools",
    "admissions ranking system",
    "objective candidate scoring",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/candidate-ranking-system/") }
    : undefined,
};

export default function CandidateRankingSystemPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Candidate Ranking System", path: "/candidate-ranking-system/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Selection Tools</p>
          <h1 className="frag-hero-h1 mt-1.5">Candidate Ranking System</h1>
          <p className="frag-hero-lead max-w-2xl">
            Rank scholarship and admission candidates objectively with data-driven ranking systems. Our platform provides fair, transparent candidate comparison for selection decisions.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Challenge of Candidate Ranking</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Ranking candidates for scholarships, admissions, or competitive programs is inherently complex. Traditional methods often rely on gut feelings, inconsistent criteria, or manual calculations that can introduce bias and errors. Selection committees need transparent, data-driven ranking systems that ensure fair outcomes.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Subjective Comparisons</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Without objective criteria, comparing candidates becomes subjective and influenced by unconscious biases.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faFilter} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Complex Trade-offs</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Balancing multiple criteria like academics, leadership, and financial need requires sophisticated weighting systems.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Transparency Issues</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual ranking processes lack documentation, making it difficult to explain decisions to stakeholders or candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Data-Driven Ranking Methodology</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails implements a sophisticated ranking system that combines multiple evaluation dimensions into objective, comparable scores while maintaining transparency and flexibility.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faListOl} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Multi-Criteria Weighting</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Define weighted criteria that reflect your program&apos;s priorities. Assign different weights to academic achievement, extracurricular activities, leadership potential, financial need, and interview performance. The system automatically calculates composite scores based on your specified weights.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faSortNumericDown} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Normalized Scoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Raw scores are normalized to account for different evaluation scales and evaluator tendencies. This ensures fair comparison across different criteria and evaluators, preventing any single factor from disproportionately influencing rankings.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Bias Adjustment Algorithms</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our ranking algorithms include bias detection and adjustment mechanisms. The system identifies patterns that may indicate demographic bias or evaluator inconsistency and applies corrections to ensure rankings remain objective and fair.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faFilter} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Dynamic Filtering & Segmentation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Filter and segment candidates based on specific criteria before ranking. Create separate rankings for different scholarship categories, majors, or demographic groups while maintaining overall consistency and fairness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Ranking System Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Real-Time Ranking Updates</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Rankings update automatically as evaluators submit scores. See real-time changes in candidate positions as new evaluations are completed, enabling dynamic decision-making.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Transparent Methodology</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every ranking calculation is fully documented. Generate reports showing how each candidate&apos;s score was calculated, which criteria contributed most, and how rankings were determined.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Scenario Analysis</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Test different weighting scenarios to understand how changing criteria priorities affects rankings. Make informed decisions about which criteria matter most for your selection process.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Tie-Breaking Rules</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Define custom tie-breaking rules for candidates with identical scores. Specify secondary criteria or manual review processes to handle ties consistently and transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Implement Fair Ranking Systems</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join selection committees using FragmentTrails to make data-driven, transparent ranking decisions.
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
