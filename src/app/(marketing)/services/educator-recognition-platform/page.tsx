import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "Educator Recognition Platform | Fragments";
const description =
  "Recognize and reward educators with Fragments. Our platform acknowledges quality teaching, scholarly leadership, and dedication to student success.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "educator recognition platform",
    "teacher rewards system",
    "faculty recognition software",
    "educator appreciation",
    "teaching excellence awards",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/services/educator-recognition-platform/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/services/educator-recognition-platform/") : undefined,
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

export default function EducatorRecognitionPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "Educator Recognition Platform", path: "/services/educator-recognition-platform/" },
        ]}
      />
      <ServiceSchema
        name="Educator Recognition Platform"
        description="Recognize and reward educators with Fragments. Our platform acknowledges quality teaching, scholarly leadership, and dedication to student success."
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">Educator Recognition Platform</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Recognize and reward educators who lead quality discussions, demonstrate scholarly leadership, and dedicate themselves to student success.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Why Recognition Matters</h2>
            <p className="frag-lead mx-auto mt-4 max-w-3xl">
              Recognizing educators improves retention, boosts morale, and encourages continuous improvement in teaching quality. Many institutions struggle to identify and reward teaching excellence systematically. FragmentTrails provides data-driven recognition that highlights genuine contributions to student success.
            </p>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Increased Retention</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Recognized educators are more likely to stay committed to their institution and students. Recognition programs reduce teacher turnover by up to 40% and build institutional loyalty.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Higher Morale</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Appreciation boosts teacher satisfaction and creates a positive learning environment. When educators feel valued, they bring more energy and enthusiasm to their teaching.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Quality Improvement</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Recognition encourages educators to continuously improve their teaching methods. Data-driven recognition identifies best practices that can be shared across the institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Recognition Features</h2>
            <div className="mx-auto mt-8 max-w-4xl space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Quality Badges</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Educators earn badges for leading high-quality discussions and scholarly contributions. Badges are awarded based on objective metrics including discussion quality, student engagement, and learning outcomes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Performance Metrics</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Track and display educator performance metrics to highlight teaching excellence. Comprehensive dashboards show discussion quality scores, student engagement rates, and improvement over time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Rewards System</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Financial rewards and recognition for educators who consistently deliver quality teaching. Implement tiered reward programs that incentivize continuous improvement and celebrate teaching excellence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Peer Recognition</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Enable educators to recognize and appreciate their colleagues&apos; contributions. Build a culture of appreciation where teaching excellence is celebrated by the entire faculty community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Recognize Your Educators</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              Start recognizing and rewarding the educators who make a difference in your institution.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
                className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
              >
                Get Started Free
              </a>
              <a href="/contact/" className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
