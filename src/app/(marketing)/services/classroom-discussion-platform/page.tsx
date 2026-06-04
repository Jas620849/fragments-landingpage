import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "Classroom Discussion Platform | Fragments";
const description =
  "Transform your classroom discussions with Fragments - an AI-moderated platform that encourages scholarly discourse, rewards educators, and ensures quality learning at scale.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "classroom discussion platform",
    "online discussion tools",
    "academic discourse software",
    "student engagement platform",
    "education technology",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/services/classroom-discussion-platform/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/services/classroom-discussion-platform/") : undefined,
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

export default function ClassroomDiscussionPlatformPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "Classroom Discussion Platform", path: "/services/classroom-discussion-platform/" },
        ]}
      />
      <ServiceSchema
        name="Classroom Discussion Platform"
        description="Transform your classroom discussions with Fragments - an AI-moderated platform that encourages scholarly discourse, rewards educators, and ensures quality learning at scale."
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">Classroom Discussion Platform</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Transform your classroom discussions with AI-moderated fragment trails that encourage scholarly discourse and reward quality contributions.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Why Choose Fragments?</h2>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">AI-Moderated Discussions</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Advanced AI ensures quality, fairness, and meaningful engagement in every classroom discussion.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Educator Recognition</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Reward knowledgeable and dedicated educators who lead quality discussions in their classrooms.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Quality at Scale</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Maintain high standards across cohorts and classrooms with our fragment trail system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Key Features</h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Quality Assurance</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    AI-powered moderation ensures discussions remain scholarly and productive.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Rewards & Recognition</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Educators earn recognition and rewards for leading quality discussions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Scalable for Cohorts</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Perfect for individual classrooms, district-wide implementations, and cohort-based learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Ready to Transform Your Classroom?</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              Join educators who are already using Fragments to create better classroom discussions.
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
