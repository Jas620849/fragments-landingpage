import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faQuoteLeft,
  faStar,
  faUniversity,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Testimonials | FragmentTrails - Customer Success Stories";
const description =
  "Read testimonials from educational institutions using FragmentTrails. Success stories from universities, scholarship foundations, and schools transforming their assessment processes.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails testimonials",
    "customer success stories",
    "scholarship committee reviews",
    "university testimonials",
    "educational institution reviews",
    "assessment platform testimonials",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/testimonials/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/testimonials/") : undefined,
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

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials/" },
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
            Testimonials
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Customer Success Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Hear from educational institutions transforming their assessment processes with FragmentTrails. Real stories from universities, scholarship foundations, and educators achieving measurable results.
          </p>
        </div>
      </section>

      {/* University Testimonials */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">University Success Stories</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "FragmentTrails transformed our scholarship selection process. We reduced evaluation time by 40% while significantly improving the diversity of our scholarship recipients. The structured evaluation framework gave us confidence that every decision was fair and defensible."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faUniversity} className="h-10 w-10 text-blue-600" />
                <div>
                  <p className="font-semibold text-secondary">Dr. Sarah Chen</p>
                  <p className="text-sm text-slate-600">Director of Scholarships, State University</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-teal-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "The bias reduction features alone made FragmentTrails worth implementing. Our committee members now have tools to identify and address unconscious bias in real-time. The analytics dashboard provides the transparency our stakeholders demand."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faUniversity} className="h-10 w-10 text-teal-600" />
                <div>
                  <p className="font-semibold text-secondary">Prof. Michael Rodriguez</p>
                  <p className="text-sm text-slate-600">Dean of Admissions, Metropolitan College</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Testimonials */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Foundation & Organization Stories</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-amber-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "As a private foundation managing $10M in annual awards, we needed defensible selection processes that would satisfy our donors and board. FragmentTrails provided the audit trails and evidence-based evaluation we required. Our donor confidence has never been higher."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faBuilding} className="h-10 w-10 text-amber-600" />
                <div>
                  <p className="font-semibold text-secondary">Jennifer Williams</p>
                  <p className="text-sm text-slate-600">Executive Director, National Scholarship Foundation</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-purple-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "Our federal fellowship program required complete compliance with selection regulations. FragmentTrails delivered with comprehensive documentation, standardized processes, and audit trails that satisfied our legal team and oversight bodies. Implementation was smooth and support was exceptional."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faBuilding} className="h-10 w-10 text-purple-600" />
                <div>
                  <p className="font-semibold text-secondary">Robert Kim</p>
                  <p className="text-sm text-slate-600">Program Director, Federal Fellowship Program</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Testimonials */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Educator Experiences</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-green-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "The classroom discussion platform revolutionized how I teach. Student participation increased by 60%, and the quality of discussions improved dramatically. The AI-powered feedback helps students improve their critical thinking skills in real-time. I can&apos;t imagine teaching without it now."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faGraduationCap} className="h-10 w-10 text-green-600" />
                <div>
                  <p className="font-semibold text-secondary">Dr. Emily Thompson</p>
                  <p className="text-sm text-slate-600">Professor of Political Science, Community College</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-blue-600" />
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-600">
                "Being recognized through FragmentTrails&apos; educator rewards system has been incredibly validating. The platform acknowledges quality teaching through objective metrics, not just popularity. I&apos;ve earned financial rewards while building my reputation as an effective educator."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <FontAwesomeIcon icon={faGraduationCap} className="h-10 w-10 text-blue-600" />
                <div>
                  <p className="font-semibold text-secondary">James Anderson</p>
                  <p className="text-sm text-slate-600">Senior Lecturer, Business School</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Aggregate Customer Impact</h2>
          <p className="frag-lead mx-auto mt-4 max-w-3xl">
            Measurable results from institutions using FragmentTrails
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Institutions Served
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600">2M+</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Evaluations Conducted
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">95%</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Customer Retention
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">4.8/5</div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Average Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Join Our Success Stories</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Become the next institution to transform your assessment processes with FragmentTrails. Contact our team to start your success story.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/case-studies/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Read Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
