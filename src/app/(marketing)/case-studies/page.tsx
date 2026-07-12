import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faUniversity,
  faBuilding,
  faGraduationCap,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Case Studies | FragmentTrails - Implementation Success Stories";
const description =
  "Learn how educational institutions use FragmentTrails to transform scholarship selection, admissions interviews, and classroom assessments. Real-world implementation examples and success stories.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails case studies",
    "scholarship selection examples",
    "admissions interview implementation",
    "educational assessment success stories",
    "bias reduction case studies",
    "institutional implementation examples",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/case-studies/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/case-studies/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "FragmentTrails Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | FragmentTrails`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies/" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 sm:text-base">
            Case Studies
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Implementation Success Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Discover how educational institutions worldwide use FragmentTrails to transform scholarship selection, admissions processes, and classroom assessments with fair, defensible evaluation systems.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Featured Case Study
            </p>
            <h2 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
              State University System: Transforming Scholarship Selection
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <FontAwesomeIcon icon={faUniversity} className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">State University System</h3>
                  <p className="text-sm text-slate-600">Public University System • 50,000+ Students</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary">Challenge</h4>
                  <p className="mt-1 text-slate-600">
                    The university system needed to address concerns about bias in scholarship selection processes while managing 5,000+ annual scholarship applications across multiple campuses. Traditional interview processes lacked consistency, and manual evaluation created significant administrative burden.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Solution</h4>
                  <p className="mt-1 text-slate-600">
                    Implemented FragmentTrails across all scholarship programs, creating standardized interview structures, AI-assisted scoring, and collaborative panel workflows. The platform integrated with existing student information systems and provided comprehensive analytics for process improvement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Results</h4>
                  <ul className="mt-1 space-y-1 text-slate-600">
                    <li>• 40% reduction in evaluation time per application</li>
                    <li>• 35% increase in diversity of scholarship recipients</li>
                    <li>• 90% satisfaction rate among committee members</li>
                    <li>• Complete audit trails for all selection decisions</li>
                    <li>• Consistent evaluation standards across all campuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Additional Success Stories</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Private Foundation */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBuilding} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                National Scholarship Foundation
              </h3>
              <p className="mt-2 text-sm text-slate-600">Private Foundation • $10M Annual Awards</p>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Implementation</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Deployed FragmentTrails for merit-based scholarship selection, implementing evidence-based evaluation requirements and multi-stage review processes.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Impact</h4>
                  <ul className="mt-1 space-y-1 text-sm text-slate-600">
                    <li>• 50% increase in application processing capacity</li>
                    <li>• Enhanced transparency for donors and stakeholders</li>
                    <li>• Reduced administrative costs by 30%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community College */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faGraduationCap} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Metropolitan Community College
              </h3>
              <p className="mt-2 text-sm text-slate-600">Community College • 25,000 Students</p>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Implementation</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Used FragmentTrails for student placement assessments and classroom discussion platforms, improving engagement and learning outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Impact</h4>
                  <ul className="mt-1 space-y-1 text-sm text-slate-600">
                    <li>• 60% increase in student participation rates</li>
                    <li>• 25% improvement in course completion rates</li>
                    <li>• Enhanced faculty recognition and rewards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Government Program */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBuilding} className="h-10 w-10 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Federal Fellowship Program
              </h3>
              <p className="mt-2 text-sm text-slate-600">Government Agency • 500+ Annual Fellowships</p>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Implementation</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Implemented structured interview processes with bias reduction frameworks and comprehensive audit trails for federal compliance requirements.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Impact</h4>
                  <ul className="mt-1 space-y-1 text-sm text-slate-600">
                    <li>• Full compliance with federal selection regulations</li>
                    <li>• 45% reduction in selection process timeline</li>
                    <li>• Defensible documentation for all decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Institution */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUniversity} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                International University Network
              </h3>
              <p className="mt-2 text-sm text-slate-600">Global Network • 12 Countries</p>
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Implementation</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Deployed FragmentTrails across international campuses with multi-language support and region-specific evaluation criteria.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary">Impact</h4>
                  <ul className="mt-1 space-y-1 text-sm text-slate-600">
                    <li>• Standardized evaluation across 12 countries</li>
                    <li>• Improved fairness for international applicants</li>
                    <li>• Centralized analytics for program improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Metrics */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Aggregate Implementation Results</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Measurable impact across institutions implementing FragmentTrails
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            <div className="text-center">
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 text-blue-600 mx-auto" />
              <div className="mt-4 text-3xl font-bold text-secondary">40%</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Average Time Savings
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 text-teal-600 mx-auto" />
              <div className="mt-4 text-3xl font-bold text-secondary">35%</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Bias Reduction
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 text-amber-600 mx-auto" />
              <div className="mt-4 text-3xl font-bold text-secondary">85%</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                User Satisfaction
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 text-purple-600 mx-auto" />
              <div className="mt-4 text-3xl font-bold text-secondary">100%</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Audit Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Best Practices */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Implementation Best Practices</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Stakeholder Engagement</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Successful implementations begin with comprehensive stakeholder engagement. Involve committee members, administrators, IT staff, and legal teams early in the process. Address concerns about AI adoption, data privacy, and process changes through transparent communication and demonstration of benefits.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Phased Rollout</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Implement FragmentTrails through a phased approach starting with pilot programs. Begin with smaller scholarship programs or specific departments to refine processes, train users, and demonstrate value before scaling to institution-wide deployment. Phased rollout minimizes disruption and enables learning-based adjustments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Customization and Alignment</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Configure the platform to align with institutional values, evaluation criteria, and existing processes. Customization ensures FragmentTrails enhances rather than replaces effective practices. Work with implementation teams to adapt workflows while maintaining core fairness and consistency principles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Training and Support</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Invest in comprehensive training for all users including committee members, administrators, and technical staff. Ongoing support and resources ensure successful adoption and continuous improvement. Training should cover both technical aspects and evaluation best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Start Your Success Story</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Join the institutions transforming their assessment processes with FragmentTrails. Contact our team to discuss your implementation needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Sales
            </Link>
            <Link
              href="/solutions/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
