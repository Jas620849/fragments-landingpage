import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faShieldAlt, faEye, faCheckCircle, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Fair Selection Platform | FragmentTrails",
  description: "Fair selection platform for scholarship and admission programs. Bias-free evaluation tools for equitable candidate selection.",
  keywords: [
    "fair selection platform",
    "equitable selection software",
    "bias-free selection tools",
    "fair candidate evaluation",
    "transparent selection process",
    "diversity in selection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/fair-selection-platform/") }
    : undefined,
};

export default function FairSelectionPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Fair Selection Platform", path: "/fair-selection-platform/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Equitable Selection</p>
          <h1 className="frag-hero-h1 mt-1.5">Fair Selection Platform</h1>
          <p className="frag-hero-lead max-w-2xl">
            Ensure fair, equitable candidate selection with bias-free evaluation tools. Our platform promotes transparency and consistency in scholarship and admission selection processes.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">The Importance of Fair Selection</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Fair selection processes are essential for educational equity, organizational integrity, and legal compliance. Unfair selection practices can perpetuate inequality, damage reputations, and expose organizations to legal risks.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBalanceScale} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Equity Impact</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Unfair selection perpetuates systemic inequality and denies opportunities to qualified candidates from underrepresented backgrounds.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Legal Risks</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Discriminatory selection practices can lead to legal challenges, regulatory penalties, and damage to institutional reputation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-highlight" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">Trust Erosion</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Perceived unfairness erodes trust in institutions and discourages qualified candidates from applying in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Building Fair Selection Processes</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            FragmentTrails provides the tools and frameworks needed to implement fair, transparent, and legally compliant selection processes.
          </p>
          <div className="mx-auto mt-10 max-w-4xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Standardized Evaluation Criteria</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Implement clear, objective evaluation criteria that are applied consistently to all candidates. Define rubrics with specific descriptors for each score level. Ensure every evaluator uses the same framework for fair comparison.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FontAwesomeIcon icon={faBalanceScale} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Bias Detection & Mitigation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our AI analyzes evaluation patterns to identify potential bias. Flag unusual score distributions, detect demographic disparities in outcomes, and provide alerts when bias patterns emerge. Take corrective action proactively.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Transparent Processes</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Document every step of the selection process. Maintain complete audit trails of evaluations, discussions, and decisions. Provide candidates with clear information about selection criteria and processes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faFileAlt} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Compliance & Reporting</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Generate compliance reports demonstrating fair selection practices. Track diversity metrics, document bias mitigation efforts, and provide evidence for audits or regulatory reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Fairness Features</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Blind Assessment Options</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Implement blind evaluation processes where identifying information is removed from candidate materials. Focus evaluations solely on qualifications and achievements.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Diversity Tracking</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Track diversity metrics across your selection process. Monitor representation at each stage and identify where disparities occur for targeted intervention.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Equal Opportunity Safeguards</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Implement conflict of interest checks, ensure equitable access to opportunities, and provide accommodations for candidates with disabilities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">Appeals & Review</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Establish fair appeal processes for candidates who believe they were treated unfairly. Document review procedures and decisions for transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Build Fair Selection Processes</h2>
          <p className="frag-lead mx-auto mt-4 max-w-2xl">
            Join organizations committed to fair, equitable selection with FragmentTrails.
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
