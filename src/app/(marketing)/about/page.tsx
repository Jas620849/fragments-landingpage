"use client";

import Link from "next/link";
import {
  faBook,
  faCertificate,
  faChalkboardUser,
  faComments,
  faDollarSign,
  faLock,
  faRoute,
  faScaleBalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative frag-container">
          <div className="max-w-2xl">
            <p className="frag-hero-eyebrow">About FragmentTrails</p>
            <h1 className="frag-hero-h1 mt-1.5">Who we are and what we build</h1>
            <p className="frag-hero-lead max-w-none">
              FragmentTrails is the public home of Fragments—an AI-moderated discussion
              platform for schools and serious learners—and a publishing space for practical
              guides on fair educational evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container max-w-3xl">
          <h2 className="frag-title">Why FragmentTrails exists</h2>
          <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-slate-700">
            <p>
              Most online discussion tools were designed for attention, not instruction.
              Threads scatter, quality is uneven, and educators who invest careful teaching time
              rarely get durable credit for the work. Fragments was built to fix that shape of
              problem: a <strong>fragment</strong> is a tight piece of teaching; a{" "}
              <strong>trail</strong> is the cumulative path learners build from it.
            </p>
            <p>
              We also publish long-form guides on scholarship interviews, rubrics, bias
              reduction, and selection design. Those articles are written for program staff and
              educators who need operational clarity—not keyword pages. They sit alongside the
              product because fair evaluation and rigorous classroom discourse share the same
              foundation: clear criteria, accountable process, and respect for people doing the
              work.
            </p>
            <p>
              We do not invent testimonials, ratings, or community statistics. Where we share
              pilot themes, we label them as composite feedback. Where content is educational,
              we mark it as guidance, not legal or admissions advice—see our{" "}
              <Link href="/disclaimer/" className="font-semibold text-highlight-dark underline-offset-2 hover:underline">
                disclaimer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Who Fragments is for</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border border-slate-200/90 bg-white p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faBook} className="mx-auto h-9 w-9 text-amber-500" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-amber-700">Educators</span> who want structured
                discussion paths instead of scattered chat, with moderation that protects rigor.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faComments} className="mx-auto h-9 w-9 text-teal-600" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-teal-700">Learners</span> who ask follow-ups,
                bring sources, and extend a trail without competing for the loudest reply.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mx-auto h-9 w-9 text-blue-700"
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-blue-800">Reviewers</span> who help keep published
                fragments accurate and on-standard through transparent human review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">How we approach quality</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Quality is a process, not a slogan. Fragments screens contributions with automation
            first, then human review, so classrooms can move quickly without abandoning standards.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {[
              { icon: faBook, title: "Learn", sub: "Follow readable trails of sourced teaching.", color: "text-blue-700" },
              { icon: faChalkboardUser, title: "Educate", sub: "Publish fragments that invite real thinking.", color: "text-amber-600" },
              { icon: faComments, title: "Discuss", sub: "Extend ideas with evidence and questions.", color: "text-teal-700" },
              { icon: faScaleBalanced, title: "Debate", sub: "Challenge claims without losing the thread.", color: "text-slate-800" },
              { icon: faDollarSign, title: "Recognize", sub: "Credit educators who consistently raise quality.", color: "text-amber-600" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/90 bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100 sm:p-5"
              >
                <FontAwesomeIcon icon={item.icon} className={`mx-auto h-7 w-7 ${item.color}`} />
                <h3 className={`mt-2 text-sm font-bold ${item.color}`}>{item.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-textMuted sm:text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">What you will find on this site</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: faRoute,
                title: "The Fragments product",
                body: "How fragment trails, moderation, and educator recognition work—start with How it works and the classroom discussion service page.",
                href: "/how-it-works/",
                linkLabel: "See how it works",
                border: "border-l-teal-500",
              },
              {
                icon: faUsers,
                title: "Practical evaluation guides",
                body: "Blog articles on interview structure, rubrics, bias reduction, and scholarship program operations for people who run selection processes.",
                href: "/blog/",
                linkLabel: "Browse the blog",
                border: "border-l-amber-500",
              },
              {
                icon: faLock,
                title: "Transparent policies",
                body: "Privacy, cookies, terms, and a clear educational disclaimer so visitors know what we collect and what our content is—and is not.",
                href: "/privacy/",
                linkLabel: "Read the privacy policy",
                border: "border-l-blue-600",
              },
              {
                icon: faCertificate,
                title: "Direct contact",
                body: "Questions about pilots, classrooms, press, or content corrections go through our contact form. We route messages to the right person.",
                href: "/contact/",
                linkLabel: "Contact us",
                border: "border-l-amber-500",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`flex gap-3 rounded-xl border border-slate-200/90 border-l-[3px] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:gap-4 sm:p-5 ${f.border}`}
              >
                <FontAwesomeIcon icon={f.icon} className="mt-0.5 h-7 w-7 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-secondary">{f.title}</h3>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed text-textMuted sm:text-sm">
                    {f.body}
                  </p>
                  <Link
                    href={f.href}
                    className="mt-3 inline-block text-sm font-semibold text-highlight-dark underline-offset-2 hover:underline"
                  >
                    {f.linkLabel} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="frag-container max-w-3xl text-center">
          <h2 className="frag-title">Trust and corrections</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-slate-700">
            If you find an error in a guide, or need clarification about how Fragments handles
            classroom data in a pilot, email{" "}
            <span className="font-semibold text-secondary">support@fragments.com</span> or use
            the{" "}
            <Link href="/contact/" className="font-semibold text-highlight-dark underline-offset-2 hover:underline">
              contact form
            </Link>
            . We update policies and educational pages when practices change.
          </p>
        </div>
      </section>
    </>
  );
}
