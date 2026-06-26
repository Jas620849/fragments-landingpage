import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faGraduationCap,
  faBuilding,
  faChalkboardTeacher,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Solutions | FragmentTrails - Educational Platform Solutions";
const description =
  "Explore FragmentTrails solutions for universities, scholarship programs, educational institutions, and educators. AI-powered tools for fair evaluation and engagement.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragments solutions",
    "university solutions",
    "scholarship program solutions",
    "educational institution tools",
    "educator platform",
    "AI evaluation",
    "fair selection",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/solutions/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/solutions/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "Fragments Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/" },
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
            Solutions
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tailored Solutions for Every Educational Need
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            From scholarship programs to university admissions, FragmentTrails
            provides AI-powered tools for fair, efficient, and engaging educational
            experiences.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Our Solutions</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Scholarship Programs */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-8 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faGraduationCap} className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                Scholarship Programs
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                Streamline scholarship selection with AI-powered evaluation,
                structured interviews, and bias-free assessment tools. Ensure fair
                and consistent decisions while reducing administrative burden.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  AI-moderated interview evaluations
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  Structured scoring rubrics
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  Bias reduction frameworks
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  Comprehensive analytics
                </li>
              </ul>
              <Link
                href="/services/scholarship-tracking-and-review-system/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn more →
              </Link>
            </div>

            {/* University Admissions */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-8 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUniversity} className="h-12 w-12 text-teal-600" />
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                University Admissions
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                Transform admissions processes with digital interview platforms,
                candidate evaluation frameworks, and data-driven decision-making
                tools for holistic applicant assessment.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  Virtual interview platforms
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  Multi-dimensional evaluation
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  Panel management tools
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  Workflow automation
                </li>
              </ul>
              <Link
                href="/services/admissions-interview-software/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
              >
                Learn more →
              </Link>
            </div>

            {/* Educational Institutions */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-8 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBuilding} className="h-12 w-12 text-amber-600" />
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                Educational Institutions
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                Enhance classroom discussions, improve student engagement, and
                recognize teaching excellence with cohort-based learning platforms
                and AI-moderated educational tools.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  Classroom discussion platforms
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  Student engagement software
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  Educator recognition systems
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  Cohort-based learning
                </li>
              </ul>
              <Link
                href="/services/classroom-discussion-platform/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Learn more →
              </Link>
            </div>

            {/* Educators */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-8 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="h-12 w-12 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-secondary">
                For Educators
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                Monetize your expertise, build your reputation, and reach more
                students with AI-moderated teaching tools that reward quality
                contributions and scholarly discourse.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                  Financial rewards for teaching
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                  Professional recognition
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                  Scalable teaching impact
                </li>
                <li className="flex items-start gap-2 text-sm font-medium text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                  AI-powered moderation
                </li>
              </ul>
              <Link
                href="/services/educator-recognition-platform/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Why Choose FragmentTrails?</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                40%
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Bias Reduction
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                AI-powered evaluation reduces unconscious bias in selection processes
                by up to 40% compared to traditional methods.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-600">
                60%
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Time Savings
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Automate routine evaluation tasks and save up to 60% of administrative
                time while improving decision quality.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl font-bold text-amber-600">
                85%
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Satisfaction Rate
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                85% of educators report improved satisfaction with our platform&apos;s
                fair evaluation and recognition systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Find Your Solution</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Ready to transform your educational processes? Let&apos;s discuss how
            FragmentTrails can meet your specific needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Sales
            </Link>
            <Link
              href="/features/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
