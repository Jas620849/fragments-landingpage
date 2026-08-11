import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const INDUSTRIES = [
  { code: "universities", name: "Universities", description: "Higher education institutions conducting scholarship and admission interviews" },
  { code: "colleges", name: "Colleges", description: "Colleges and community colleges managing student selection processes" },
  { code: "foundations", name: "Foundations", description: "Private and public scholarship foundations" },
  { code: "government-programs", name: "Government Programs", description: "Government-funded scholarship and fellowship programs" },
  { code: "fellowships", name: "Fellowships", description: "Fellowship and grant programs for research and study" },
  { code: "ngos", name: "NGOs", description: "Non-governmental organizations offering educational scholarships" },
];

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    organization: industry.code,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ organization: string }> }): Promise<Metadata> {
  const { organization } = await params;
  const industry = INDUSTRIES.find((i) => i.code === organization);
  if (!industry) {
    return {
      title: "Scholarship Interview Platform",
      description: "Scholarship interview and candidate evaluation platform for education institutions.",
    };
  }

  return {
    title: `Scholarship Interview Software for ${industry.name} | FragmentTrails`,
    description: `Specialized scholarship interview and candidate evaluation platform for ${industry.name}. AI-powered assessment tools tailored for ${industry.description}.`,
    keywords: [
      `scholarship interview software ${industry.name}`,
      `candidate evaluation platform ${industry.name}`,
      `interview assessment tools ${industry.name}`,
      `scholarship management ${industry.name}`,
      `education technology ${industry.name}`,
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/industry/${industry.code}/`) }
      : undefined,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ organization: string }> }) {
  const { organization } = await params;
  const industry = INDUSTRIES.find((i) => i.code === organization);
  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Scholarship Interview Software for {industry.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          FragmentTrails provides specialized scholarship interview and candidate evaluation solutions for {industry.name}. Our AI-powered platform is designed to meet the unique needs of {industry.description}, offering tailored features that address the specific challenges and requirements of your sector.
        </p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Understanding {industry.name} Needs</h2>
          <p className="mt-4 text-lg text-textDark">
            {industry.name} face unique challenges when it comes to scholarship selection and candidate evaluation. From managing large volumes of applications to ensuring fair and defensible selection processes, the stakes are high and the requirements are complex. Traditional interview and evaluation methods often struggle to keep pace with these demands, leading to inconsistent results and missed opportunities for both institutions and candidates.
          </p>
          <p className="mt-4 text-lg text-textDark">
            FragmentTrails understands these challenges intimately. Our platform is built specifically for the education sector, with features and workflows designed to address the particular needs of {industry.name}. Whether you're managing merit-based scholarships, need-based awards, or specialized fellowship programs, our solution provides the tools you need to make fair, efficient, and data-driven decisions.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Tailored Solutions for {industry.name}</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Customizable Evaluation Criteria</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails enables {industry.name} to create and implement evaluation criteria that align with their specific mission, values, and scholarship objectives. Our flexible rubric system allows for complex, multi-dimensional assessments that capture the full range of candidate qualities relevant to your institution's goals.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">AI-Powered Interview Moderation and Scoring</h3>
              <p className="mt-3 text-textDark">
                Our advanced AI technology assists interview moderators by analyzing responses in real-time, providing insights on candidate performance, and supporting consistent scoring across different evaluators. This technology is particularly valuable for {industry.name} that need to process large numbers of interviews while maintaining quality and fairness.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Bias Reduction for Fair Candidate Selection</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails implements evidence-based bias mitigation strategies that help ensure all candidates are evaluated based on their merits. For {industry.name} committed to diversity, equity, and inclusion, our platform provides the tools needed to identify and address unconscious biases in the selection process.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Collaborative Committee Workflows</h3>
              <p className="mt-3 text-textDark">
                Our platform supports the complex committee structures typical of {industry.name}, enabling multiple stakeholders to participate in the evaluation process while maintaining consistency and transparency. Features include discussion forums, consensus-building tools, and comprehensive audit trails.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Comprehensive Reporting and Analytics</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails provides detailed analytics and reporting capabilities that help {industry.name} demonstrate the effectiveness and fairness of their selection processes to boards, donors, regulators, and other stakeholders. Our dashboards offer insights into evaluator performance, candidate demographics, and outcome metrics.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Key Benefits for {industry.name}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Streamlined Interview Processes</h3>
              <p className="mt-3 text-textDark">
                Reduce administrative burden and improve efficiency with automated scheduling, streamlined evaluation workflows, and integrated document management. This allows {industry.name} to focus resources on candidate engagement rather than administrative tasks.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Consistent and Fair Evaluations</h3>
              <p className="mt-3 text-textDark">
                Standardized evaluation criteria and calibrated scoring ensure that all candidates are assessed consistently regardless of which evaluators review their applications or conduct their interviews, creating a level playing field for all applicants.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Data-Driven Selection Decisions</h3>
              <p className="mt-3 text-textDark">
                Make selection decisions based on comprehensive data and analytics rather than gut feelings or inconsistent impressions. Our platform provides the insights needed to identify the best candidates and demonstrate the rationale behind selection decisions.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Improved Candidate Experience</h3>
              <p className="mt-3 text-textDark">
                Create a professional, transparent, and respectful interview experience for candidates that reflects positively on {industry.name}. Clear communication, timely feedback, and fair processes enhance institutional reputation and attract higher-quality applicants.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Time and Resource Efficiency</h3>
              <p className="mt-3 text-textDark">
                Achieve significant efficiency gains through automation, virtual interview capabilities, and streamlined workflows. This allows {industry.name} to process more applications with the same resources or reduce costs while maintaining selection quality.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Defensible Selection Processes</h3>
              <p className="mt-3 text-textDark">
                Comprehensive documentation, audit trails, and data-driven decision-making provide {industry.name} with selection processes that can withstand scrutiny from stakeholders, regulatory bodies, and legal challenges, protecting institutional reputation and resources.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Industry-Specific Compliance and Standards</h2>
          <p className="mt-4 text-lg text-textDark">
            FragmentTrails is designed to help {industry.name} meet their specific compliance requirements and industry standards. Our platform includes features for data privacy, accessibility, record-keeping, and reporting that align with the regulatory environment specific to your sector. We understand that {industry.name} operate under unique constraints and requirements, and our solution is built to accommodate these needs.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Implementation and Support</h2>
          <p className="mt-4 text-lg text-textDark">
            FragmentTrails offers comprehensive implementation support for {industry.name}, including configuration assistance, evaluator training, technical support, and ongoing optimization. Our team has deep experience working with institutions like yours and can help ensure that the platform is configured to meet your specific requirements and integrated seamlessly with your existing processes.
          </p>
        </div>

        <div className="mt-12 rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-secondary">Transform Your Selection Process</h2>
          <p className="mt-4 text-lg text-textDark">
            Join other leading {industry.name} that are modernizing their scholarship selection and candidate evaluation processes with FragmentTrails. Contact our team to learn how we can help your institution achieve fairer, more efficient, and more effective evaluations.
          </p>
          <div className="mt-6">
            <a
              href="/contact/"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
