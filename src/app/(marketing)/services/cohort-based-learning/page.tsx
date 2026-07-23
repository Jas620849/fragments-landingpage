import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "Cohort-Based Learning Platform | Fragments";
const description =
  "Enable cohort-based learning with Fragments. Our platform supports collaborative learning, peer engagement, and structured discussions for educational cohorts.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cohort based learning",
    "collaborative learning platform",
    "peer learning software",
    "cohort education tools",
    "group learning technology",
    "fragment trails",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/services/cohort-based-learning/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/services/cohort-based-learning/") : undefined,
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

export default function CohortBasedLearningPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "Cohort-Based Learning", path: "/services/cohort-based-learning/" },
        ]}
      />
      <ServiceSchema
        name="Cohort-Based Learning Platform"
        description="Enable cohort-based learning with Fragments. Our platform supports collaborative learning, peer engagement, and structured discussions for educational cohorts."
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">Cohort-Based Learning Platform</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Support collaborative learning, peer engagement, and structured discussions for educational cohorts with our cohort-based platform.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Why Cohort-Based Learning?</h2>
            <p className="frag-lead mx-auto mt-4 max-w-3xl">
              Cohort-based learning increases completion rates, builds community, and creates lasting professional networks. Unlike self-paced learning where students study in isolation, cohort-based programs create shared experiences that drive motivation, accountability, and deeper learning through peer interaction.
            </p>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Higher Completion</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Students in cohorts are more likely to complete courses and achieve learning objectives. Peer accountability and shared schedules create motivation that self-paced learning cannot match.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Peer Learning</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Collaborative environments enable students to learn from each other&apos;s experiences and perspectives. Diverse cohort backgrounds enrich discussions and provide multiple viewpoints on course material.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Community Building</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Cohorts create lasting professional networks and support systems that extend beyond the course. Students form relationships that continue to provide value long after program completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">Cohort Features</h2>
            <div className="mx-auto mt-8 max-w-4xl space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Group Discussions</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Structured discussion threads that keep cohort conversations organized and on-topic. Fragment trails ensure discussions remain productive and aligned with learning objectives while allowing for organic exploration of ideas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Shared Progress</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Track cohort progress collectively and identify areas where the group needs additional support. Visual progress dashboards show completion rates, engagement levels, and learning milestones for the entire cohort.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Peer Feedback</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Enable peer-to-peer feedback and evaluation to enhance learning outcomes. Structured peer review processes help students develop critical thinking skills and learn from evaluating others&apos; work.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Collaboration Tools</h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                    Built-in collaboration features enable group projects, shared documents, and team assignments. Foster teamwork skills while ensuring individual accountability within group settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Enable Cohort Learning</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              Transform your educational programs with powerful cohort-based learning capabilities.
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
      </div>
    </>
  );
}
