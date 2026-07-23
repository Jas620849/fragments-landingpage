import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "FAQ | FragmentTrails - Frequently Asked Questions";
const description =
  "Find answers to common questions about FragmentTrails scholarship interview software, candidate evaluation platform, and educational assessment tools.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails faq",
    "scholarship interview software questions",
    "candidate evaluation platform faq",
    "educational assessment questions",
    "bias reduction tools faq",
    "platform support questions",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/faq/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/faq/") : undefined,
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

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq/" },
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
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Find answers to common questions about FragmentTrails scholarship interview software, candidate evaluation platform, and educational assessment tools.
          </p>
        </div>
      </section>

      {/* General Questions */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">General Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>What is FragmentTrails?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails is a structured discussion and evaluation platform designed for educational institutions. It enables scholarship committees, university admissions offices, and educators to conduct fair, consistent, and defensible assessments through AI-powered tools, structured evaluation frameworks, and collaborative workflows.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>Who uses FragmentTrails?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails is used by universities, colleges, scholarship foundations, government programs, NGOs, and educational institutions worldwide. Our platform serves scholarship committees, admissions offices, classroom educators, and any organization conducting structured educational assessments.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How does FragmentTrails reduce bias?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails reduces bias through structured evaluation criteria, anonymized review processes, AI-powered bias detection, standardized questions, and evidence-based assessment requirements. Our platform provides analytics that identify potential bias patterns and tools for addressing them proactively.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>Is FragmentTrails FERPA compliant?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Yes, FragmentTrails is designed to comply with FERPA and other educational data privacy regulations. Our platform includes comprehensive security measures, data encryption, access controls, audit trails, and privacy features to protect student and candidate information.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Scholarship Evaluation */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Scholarship Evaluation</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How does the scholarship interview process work?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails enables structured scholarship interviews through predefined questions, evaluation rubrics, and AI-assisted scoring. Candidates respond to prompts through our fragment trail methodology, requiring evidence-based responses. Committee members review and score responses independently, with tools for collaboration and consensus-building.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>Can I customize evaluation criteria?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Yes, FragmentTrails allows complete customization of evaluation criteria, rubrics, and scoring weights. Institutions can configure the platform to align with their specific values, scholarship requirements, and assessment philosophies while maintaining structured, consistent evaluation processes.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How do committee members collaborate?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Committee members can review candidates independently, share feedback, discuss evaluations, and reach consensus through our collaboration tools. The platform maintains individual reviewer perspectives while enabling group discussion and calibration to ensure consistent standards across all reviewers.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>What audit trails are available?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails provides complete audit trails including all candidate responses, reviewer scores, feedback comments, decision rationale, and process timestamps. These records support transparency requirements, enable process improvement, and provide documentation for accreditation reviews and legal compliance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Classroom and Educator */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Classroom and Educator</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How does the classroom discussion platform work?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Educators create discussion prompts with fragment trails that students extend through evidence-based responses. The platform structures discussions, tracks participation, provides AI-powered quality feedback, and enables peer learning. Students earn recognition for quality contributions while developing critical thinking skills.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>Can I use FragmentTrails for grading?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Yes, FragmentTrails supports classroom assessment and grading through AI-assisted scoring, rubric-based evaluation, and automated feedback generation. The platform provides consistent grading criteria, detailed feedback for students, and analytics to identify learning gaps and areas for instructional improvement.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How does educator recognition work?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Educators earn recognition through quality badges, performance metrics, and financial rewards based on objective measures of teaching effectiveness. The platform tracks discussion quality, student engagement, and learning outcomes to identify and reward exceptional educators.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>What is cohort-based learning?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Cohort-based learning organizes students into groups that progress through courses together. FragmentTrails supports cohort learning through shared discussions, collaborative projects, peer feedback, and group progress tracking. Cohort-based approaches increase completion rates and build lasting professional networks.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Technical and Support */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Technical and Support</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How do I integrate FragmentTrails with existing systems?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails offers API access, single sign-on integration, and data synchronization capabilities. Our technical team provides integration support for student information systems, CRM platforms, and other institutional databases. Integration documentation and developer resources are available in our resources section.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>What support options are available?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails provides comprehensive support including implementation assistance, user training, technical documentation, and ongoing customer support. Our support team is available through email, phone, and ticketing systems. Enterprise customers receive dedicated account managers and priority support.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>How is data security handled?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                FragmentTrails employs enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with educational privacy regulations. Our infrastructure is hosted on secure cloud platforms with redundancy, backup, and disaster recovery capabilities.
              </p>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white p-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                <span>What is the implementation timeline?</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-slate-500 group-open:hidden" />
                <FontAwesomeIcon icon={faChevronUp} className="h-5 w-5 text-slate-500 hidden group-open:block" />
              </summary>
              <p className="mt-3 text-slate-600">
                Implementation timelines vary based on institutional size and complexity. Typical implementations range from 4-12 weeks including planning, configuration, training, and deployment. Our team works with institutions to develop customized implementation schedules that minimize disruption and ensure successful adoption.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Still Have Questions?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Our support team is here to help. Contact us with any additional questions about FragmentTrails.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Support
            </Link>
            <Link
              href="/resources/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 sm:px-8 sm:py-3.5 sm:text-base"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
