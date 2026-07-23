import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  faFileAlt,
  faBook,
  faGraduationCap,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const title = "Research | FragmentTrails - Educational Technology Research & Whitepapers";
const description =
  "Access research papers and whitepapers on educational technology, bias reduction in assessment, and evidence-based evaluation methodologies from FragmentTrails.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fragmenttrails research",
    "educational technology whitepapers",
    "bias reduction research",
    "assessment methodology papers",
    "scholarship evaluation research",
    "educational assessment studies",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/research/") }
    : undefined,
  openGraph: {
    title: `${title} | FragmentTrails`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/research/") : undefined,
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

export default function ResearchPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research/" },
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
            Research
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Educational Technology Research
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Explore research papers and whitepapers on bias reduction in assessment, evidence-based evaluation methodologies, and the impact of AI-powered educational tools on scholarship selection and classroom learning.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Research Focus Areas</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faFileAlt} className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Bias Reduction in Assessment
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Research on identifying and mitigating unconscious bias in educational evaluation. Studies on structured interview methodologies, anonymized review processes, and AI-powered bias detection tools.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faBook} className="h-10 w-10 text-teal-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Evidence-Based Evaluation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Research on the effectiveness of evidence-based assessment methodologies. Studies on critical thinking assessment, argumentation quality evaluation, and defensible decision-making processes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faGraduationCap} className="h-10 w-10 text-amber-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                AI in Educational Assessment
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Research on the impact of AI-powered tools on educational assessment quality and efficiency. Studies on machine learning scoring, natural language processing in evaluation, and human-AI collaboration.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <FontAwesomeIcon icon={faChartBar} className="h-10 w-10 text-purple-600" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">
                Learning Outcomes Analytics
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                Research on using analytics to measure and improve learning outcomes. Studies on engagement metrics, performance prediction, and data-driven instructional improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Whitepapers</h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Reducing Bias in Scholarship Selection: A Framework for Fair Evaluation
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This whitepaper presents a comprehensive framework for reducing unconscious bias in scholarship selection processes. Drawing from research on cognitive psychology and organizational behavior, it outlines practical strategies for implementing structured evaluation, anonymized review, and bias detection tools. Case studies from institutions implementing these approaches demonstrate measurable improvements in selection fairness and diversity outcomes.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">24 pages</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Evidence-Based Assessment in Higher Education: Methodologies and Outcomes
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This research paper examines the effectiveness of evidence-based assessment methodologies in higher education contexts. Through comparative analysis of traditional and evidence-based approaches, the study demonstrates significant improvements in assessment validity, reliability, and defensibility. The paper includes practical guidance for implementing evidence requirements in scholarship and admissions evaluations.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">18 pages</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                AI-Powered Educational Assessment: Balancing Efficiency and Human Judgment
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This whitepaper explores the role of artificial intelligence in educational assessment, examining how AI tools can enhance efficiency while maintaining human oversight of critical decisions. The research presents a model for human-AI collaboration that leverages AI for routine tasks while preserving human judgment for nuanced evaluation. Implementation guidelines and case studies illustrate successful applications.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">20 pages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Academic Research Papers</h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Structured Interview Methodologies in Scholarship Selection: A Meta-Analysis
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This meta-analysis examines research on structured interview methodologies in scholarship selection contexts. Synthesizing findings from 47 studies, the paper identifies key components of effective structured interviews and quantifies their impact on selection validity, reliability, and fairness. The analysis provides evidence-based recommendations for institutions implementing structured interview processes.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">32 pages</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                The Impact of Fragment Trail Methodology on Critical Thinking Development
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This research paper investigates the impact of fragment trail methodology on students&apos; critical thinking skills. Through controlled studies across multiple educational contexts, the research demonstrates significant improvements in argumentation quality, evidence evaluation skills, and reasoning abilities among students using fragment trail-based learning platforms.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">28 pages</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
              <h3 className="text-lg font-semibold text-secondary">
                Analytics-Driven Educational Improvement: From Data to Action
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                This paper presents a framework for using learning analytics to drive educational improvement. Research across diverse institutional contexts demonstrates how data-driven insights can inform instructional design, assessment practices, and student support strategies. The framework includes practical tools for implementing analytics-driven improvement cycles.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  PDF Download
                </span>
                <span className="text-sm text-slate-600">22 pages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="frag-title text-center">Research Collaboration</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary">Academic Partnerships</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                FragmentTrails collaborates with educational researchers and institutions to advance understanding of effective assessment practices. We welcome partnerships with researchers interested in studying bias reduction, evidence-based evaluation, AI in education, and learning analytics. Contact our research team to discuss collaboration opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Data Access for Research</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                With appropriate institutional review board approval and data privacy protections, FragmentTrails can provide anonymized data for academic research purposes. Our data includes anonymized evaluation outcomes, engagement metrics, and process analytics that can support research on educational assessment effectiveness and improvement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary">Publication Support</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
                We support researchers in publishing findings related to FragmentTrails implementation and educational assessment innovation. Our team can provide technical documentation, implementation case studies, and subject matter expertise to support rigorous academic research and publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="frag-title">Interested in Research Collaboration?</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Contact our research team to discuss partnership opportunities, data access, or publication support.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Research Team
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
