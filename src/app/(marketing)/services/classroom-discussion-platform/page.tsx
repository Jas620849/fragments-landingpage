import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const title = "Classroom Discussion Platform | Fragments";
const description =
  "Fragments is an AI-moderated classroom discussion platform: guided fragment trails, two-step review, and recognition for educators who keep discourse rigorous.";

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
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl()
      ? canonicalUrl("/services/classroom-discussion-platform/")
      : undefined,
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
    title: `${title} | FragmentTrails`,
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
          { name: "Services", path: "/services/classroom-discussion-platform/" },
          {
            name: "Classroom Discussion Platform",
            path: "/services/classroom-discussion-platform/",
          },
        ]}
      />
      <ServiceSchema
        name="Classroom Discussion Platform"
        description={description}
      />
      <div className="min-h-screen">
        <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
          <div className="frag-container">
            <p className="frag-hero-eyebrow">Services</p>
            <h1 className="frag-hero-h1 mt-1.5">Classroom Discussion Platform</h1>
            <p className="frag-hero-lead mx-auto !max-w-2xl text-balance">
              Fragments helps classes run discussions that stay readable, sourced, and on
              standard—without turning teaching into feed management.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container max-w-3xl">
            <h2 className="frag-title">The problem with classroom chat tools</h2>
            <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-slate-700">
              <p>
                Generic forums and messaging apps optimize for speed and volume. In a classroom,
                that often means answers buried under noise, uneven participation, and no durable
                record of how understanding developed. Educators end up repeating the same
                clarification in twelve threads—or abandoning public discussion altogether.
              </p>
              <p>
                Fragments is built around a different unit of work: a <strong>fragment</strong>{" "}
                (a tight piece of teaching with context and a real question) and a{" "}
                <strong>trail</strong> (the ordered path of follow-ups, counterpoints, and
                clarifications that students and reviewers add). The goal is cumulative learning
                the class can revisit, not a scoreboard of likes.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
          <div className="frag-container">
            <h2 className="frag-title text-center">What you get with Fragments</h2>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Guided trails</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Keep discussion in one readable path so evidence, questions, and corrections
                  stay attached to the original teaching move.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">AI + human review</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  New fragments are screened first by automation, then by trained human
                  reviewers, so quality checks scale without pretending AI alone is enough.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-secondary">Educator recognition</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                  Teaching that raises the room&apos;s standard deserves visibility. Fragments
                  is designed to credit consistent, rigorous contribution—not content farming.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
          <div className="frag-container max-w-3xl">
            <h2 className="frag-title">How a trail typically runs</h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-base font-medium leading-relaxed text-slate-700">
              <li>
                An educator posts an opening fragment: sources in line, context, and a question
                that invites thinking—not a wall of text or a drive-by take.
              </li>
              <li>
                Learners extend the trail with follow-ups, counter-evidence, and clarifications.
                The path stays ordered, so the class can see how understanding evolved.
              </li>
              <li>
                Review workflows flag concerns transparently. Repeated quality failures can
                remove a fragment; strong work remains visible for the cohort.
              </li>
            </ol>
            <p className="mt-6 text-base font-medium leading-relaxed text-slate-700">
              For the full moderation rules and recognition model, see{" "}
              <Link
                href="/how-it-works/"
                className="font-semibold text-highlight-dark underline-offset-2 hover:underline"
              >
                How it works
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
          <div className="frag-container max-w-3xl">
            <h2 className="frag-title">Who it fits</h2>
            <ul className="mt-6 space-y-3 text-base font-medium leading-relaxed text-slate-700">
              <li>
                • High school and AP sections that need visible rigor for students and families
              </li>
              <li>• University seminars and lecture courses that want structured discourse</li>
              <li>
                • Independent educators and tutors who refuse platforms that treat teaching like
                disposable content
              </li>
              <li>
                • Cohorts and pilots where participation should be observable without turning
                discussion into surveillance theater
              </li>
            </ul>
            <p className="mt-6 text-base font-medium leading-relaxed text-slate-700">
              Looking for selection and interview design guidance rather than classroom software?
              Start with our{" "}
              <Link
                href="/blog/"
                className="font-semibold text-highlight-dark underline-offset-2 hover:underline"
              >
                evaluation guides
              </Link>
              —including{" "}
              <Link
                href="/blog/how-to-reduce-bias-in-scholarship-interviews/"
                className="font-semibold text-highlight-dark underline-offset-2 hover:underline"
              >
                reducing bias in scholarship interviews
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/structured-vs-unstructured-interviews/"
                className="font-semibold text-highlight-dark underline-offset-2 hover:underline"
              >
                structured vs unstructured interviews
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="frag-container text-center">
            <h2 className="frag-title">Ready to try Fragments?</h2>
            <p className="frag-lead mx-auto mt-3 max-w-2xl">
              Create an account to explore public trails, or contact us about a classroom or
              district pilot.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`${process.env.NEXT_PUBLIC_FRONTEND_APP_URL || "https://app.fragmenttrails.com"}/auth/register`}
                className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
              >
                Get started
              </a>
              <Link
                href="/contact/"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:min-w-[11rem] sm:text-sm"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
