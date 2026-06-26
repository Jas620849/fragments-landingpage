import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faRobot,
  faComments,
  faUsers,
  faChartBar,
  faShieldAlt,
  faBolt,
  faCheckCircle,
  faGlobe,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Features | FragmentTrails - AI-Moderated Educational Platform";
const description =
  "Discover the powerful features of FragmentTrails: AI moderation, fragment trails, cohort-based learning, educator recognition, and more.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragments features",
    "AI moderation",
    "fragment trails",
    "cohort-based learning",
    "educator recognition",
    "student engagement",
    "discussion platform",
    "educational technology",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/features/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/features/") : undefined,
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

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features/" },
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
            Features
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Powerful Tools for Modern Education
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            AI-powered moderation, structured discussions, and educator recognition
            designed to transform online learning.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Core Features</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faRobot} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                AI-Powered Moderation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Advanced artificial intelligence analyzes discussions in real-time,
                ensuring quality, fairness, and scholarly discourse standards.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faComments} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Fragment Trails
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Structured discussion paths that guide learning through interconnected
                topics and meaningful scholarly exchanges.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Cohort-Based Learning
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Collaborative learning environments that build community, increase
                engagement, and improve completion rates.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-10 w-10 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Analytics & Insights
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Comprehensive dashboards track participation, discussion quality,
                and learning outcomes for data-driven decisions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Quality Assurance
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Multi-layered quality control with AI moderation, expert review, and
                verified contributor authentication.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBolt} className="h-10 w-10 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Real-Time Feedback
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Immediate quality assessments help students improve their discourse
                skills through constructive guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Features */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">For Educators</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Financial Rewards
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Earn compensation for quality contributions. Turn your expertise into
                  income while helping others learn and grow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Recognition System
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Build your reputation through badges, achievements, and public
                  recognition for teaching excellence and scholarly contributions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Time Savings
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  AI handles routine moderation tasks, freeing educators to focus on
                  high-value teaching and mentorship activities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  Scalable Impact
                </h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                  Reach thousands of students without additional resources. Scale your
                  teaching impact from individual classrooms to global audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Platform Capabilities</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faGlobe} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Global Accessibility
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Accessible from anywhere with an internet connection. Support for
                multiple languages and international educational contexts.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faMobileAlt} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Mobile Responsive
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Fully responsive design works seamlessly on desktop, tablet, and
                mobile devices for learning on the go.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Enterprise Security
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Bank-level security with encryption, compliance with educational data
                privacy regulations, and robust access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Ready to Transform Your Learning?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Join thousands of educators and learners already using FragmentTrails to
            create meaningful educational experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/about/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
