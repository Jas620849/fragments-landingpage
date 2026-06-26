import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faBook,
  faVideo,
  faFileAlt,
  faQuestionCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Resources | FragmentTrails - Educational Resources & Guides";
const description =
  "Access educational resources, guides, documentation, and support materials for FragmentTrails. Learn best practices for AI-moderated learning and fair evaluation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragments resources",
    "educational guides",
    "documentation",
    "best practices",
    "tutorials",
    "support materials",
    "learning resources",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/resources/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/resources/") : undefined,
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

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
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
            Resources
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Learning Resources & Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Access guides, documentation, tutorials, and best practices to maximize
            your success with FragmentTrails.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Resource Categories</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Documentation */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Documentation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Comprehensive guides on platform features, setup, and configuration
                for administrators and educators.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                View guides →
              </Link>
            </div>

            {/* Video Tutorials */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faVideo} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Video Tutorials
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Step-by-step video walkthroughs for common tasks, from basic setup
                to advanced features and workflows.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
              >
                Watch tutorials →
              </Link>
            </div>

            {/* Blog Articles */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faFileAlt} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Blog Articles
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                In-depth articles on scholarship evaluation, interview best
                practices, bias reduction, and educational innovation.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Read articles →
              </Link>
            </div>

            {/* FAQ */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faQuestionCircle} className="h-10 w-10 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                FAQ
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Frequently asked questions about platform features, pricing,
                integration, and support options.
              </p>
              <Link
                href="/contact/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700"
              >
                Get answers →
              </Link>
            </div>

            {/* Best Practices */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faLightbulb} className="h-10 w-10 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Best Practices
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Proven strategies and methodologies for effective scholarship
                evaluation and fair selection processes.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                Learn best practices →
              </Link>
            </div>

            {/* Support */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100 transition-transform hover:scale-105">
              <FontAwesomeIcon icon={faQuestionCircle} className="h-10 w-10 text-green-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Support Center
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Get help from our support team, access technical documentation, and
                submit support requests.
              </p>
              <Link
                href="/contact/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
              >
                Contact support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Featured Resources</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Getting Started Guide
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                A comprehensive introduction to FragmentTrails, covering account
                setup, basic features, and first steps for educators and
                administrators.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Read guide →
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Interview Evaluation Best Practices
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Learn proven methodologies for conducting fair, consistent, and
                effective scholarship and admissions interviews.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Read guide →
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Bias Reduction Framework
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Implement structured approaches to minimize unconscious bias in
                evaluation processes and ensure fair outcomes.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Read guide →
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Platform Integration Guide
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Technical documentation for integrating FragmentTrails with your
                existing systems and workflows.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Read guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Need More Help?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Our support team is here to help you succeed. Reach out with questions
            or requests for additional resources.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Support
            </Link>
            <Link
              href="/blog/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Browse Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
