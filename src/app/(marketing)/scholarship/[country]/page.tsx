import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const COUNTRIES = [
  { code: "pakistan", name: "Pakistan", region: "South Asia" },
  { code: "usa", name: "United States", region: "North America" },
  { code: "canada", name: "Canada", region: "North America" },
  { code: "uk", name: "United Kingdom", region: "Europe" },
  { code: "australia", name: "Australia", region: "Oceania" },
  { code: "india", name: "India", region: "South Asia" },
  { code: "germany", name: "Germany", region: "Europe" },
  { code: "france", name: "France", region: "Europe" },
  { code: "uae", name: "United Arab Emirates", region: "Middle East" },
  { code: "saudi-arabia", name: "Saudi Arabia", region: "Middle East" },
];

export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    country: country.code,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const countryData = COUNTRIES.find((c) => c.code === country);
  if (!countryData) {
    return {
      title: "Scholarship Interview Platform",
      description: "Scholarship interview and candidate evaluation platform for education institutions.",
    };
  }

  return {
    title: `Scholarship Interview Software in ${countryData.name} | FragmentTrails`,
    description: `Leading scholarship interview and candidate evaluation platform for ${countryData.name}. AI-powered assessment tools for universities, colleges, and scholarship programs in ${countryData.region}.`,
    keywords: [
      `scholarship interview software ${countryData.name}`,
      `candidate evaluation platform ${countryData.name}`,
      `scholarship assessment tools ${countryData.name}`,
      `admissions interview software ${countryData.name}`,
      `education technology ${countryData.name}`,
    ],
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/scholarship/${countryData.code}/`) }
      : undefined,
  };
}

export default async function ScholarshipCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const countryData = COUNTRIES.find((c) => c.code === country);
  if (!countryData) {
    return <div>Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
        <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
          Scholarship Interview Software in {countryData.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-textDark">
          Transform scholarship interviews and candidate evaluations in {countryData.name} with FragmentTrails. Our AI-powered assessment tools are specifically designed for universities, colleges, and scholarship programs across {countryData.region}, helping institutions modernize their selection processes while ensuring fairness, efficiency, and compliance with regional standards.
        </p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">The Scholarship Landscape in {countryData.name}</h2>
          <p className="mt-4 text-lg text-textDark">
            {countryData.name} has a diverse and competitive scholarship ecosystem, with opportunities ranging from government-funded national programs to private institutional awards and international fellowships. As the demand for higher education continues to grow, scholarship providers face increasing pressure to select the most deserving candidates efficiently and fairly while managing large application volumes.
          </p>
          <p className="mt-4 text-lg text-textDark">
            Traditional interview and evaluation methods often struggle to keep pace with these demands. Manual processes, inconsistent evaluation criteria, and unconscious biases can lead to suboptimal selection decisions that neither serve the institutions' goals nor provide equitable opportunities for all candidates. FragmentTrails addresses these challenges with modern technology designed specifically for the {countryData.name} education context.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Why FragmentTrails in {countryData.name}</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">AI-Powered Interview Moderation and Scoring</h3>
              <p className="mt-3 text-textDark">
                Our platform leverages advanced artificial intelligence to moderate interviews, analyze responses, and assist with scoring. The system provides real-time insights to evaluators while maintaining human oversight for final decisions. This technology is particularly valuable in {countryData.name}, where scholarship programs often receive thousands of applications and need efficient ways to identify top candidates.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Bias Reduction for Fair Candidate Evaluation</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails implements evidence-based bias mitigation strategies that help ensure all candidates are evaluated based on their merits rather than demographic factors, personal characteristics, or unconscious preferences. This is crucial for institutions in {countryData.name} committed to diversity, equity, and inclusion in their scholarship programs.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Structured Assessment Frameworks</h3>
              <p className="mt-3 text-textDark">
                Our platform enables institutions to implement standardized evaluation rubrics and structured interview protocols that align with their specific scholarship criteria and institutional values. This ensures consistency across evaluators and provides transparent, defensible selection processes that can withstand scrutiny from stakeholders and regulatory bodies.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Multi-Language Support Capabilities</h3>
              <p className="mt-3 text-textDark">
                Recognizing the linguistic diversity within {countryData.name} and the international nature of many scholarship programs, FragmentTrails offers multi-language support for both candidates and evaluators. This ensures that language barriers do not disadvantage qualified candidates and that evaluations can be conducted in the most appropriate language for each context.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Compliance with Regional Education Standards</h3>
              <p className="mt-3 text-textDark">
                FragmentTrails is designed to comply with education regulations and data protection requirements relevant to {countryData.name} and {countryData.region}. Our platform includes features for data privacy, accessibility, and audit trails that help institutions meet their legal and regulatory obligations while improving their selection processes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Ideal For Institutions in {countryData.name}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Universities and Colleges</h3>
              <p className="mt-3 text-textDark">
                Higher education institutions in {countryData.name} can use FragmentTrails to streamline their scholarship selection processes, improve the quality of their decisions, and provide better experiences for prospective students. Our platform helps manage merit-based, need-based, and specialized scholarship programs efficiently.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Government Scholarship Programs</h3>
              <p className="mt-3 text-textDark">
                National and regional government scholarship programs can benefit from FragmentTrails's ability to handle large-scale evaluations while ensuring transparency, fairness, and compliance with government procurement and accountability requirements. Our platform supports the complex workflows typical of public sector programs.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Private Scholarship Foundations</h3>
              <p className="mt-3 text-textDark">
                Private foundations and philanthropic organizations can use FragmentTrails to ensure their scholarship awards achieve their intended impact. Our platform helps these organizations demonstrate effectiveness to donors and stakeholders while making the selection process more efficient and fair.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">NGO Fellowship Programs</h3>
              <p className="mt-3 text-textDark">
                Non-governmental organizations offering fellowships and educational grants can leverage FragmentTrails to implement selection processes that align with their mission and values. Our platform supports the holistic evaluation approaches often used by NGOs while providing structure and consistency.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">International Education Institutions</h3>
              <p className="mt-3 text-textDark">
                Institutions recruiting students from {countryData.name} or offering international programs can use FragmentTrails to conduct virtual interviews and evaluations efficiently, regardless of geographic location. This expands their reach while maintaining rigorous selection standards.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary">Corporate Education Programs</h3>
              <p className="mt-3 text-textDark">
                Companies in {countryData.name} that sponsor education scholarships or learning programs can use FragmentTrails to manage their selection processes professionally, ensuring that their investments in education achieve the desired outcomes and align with corporate social responsibility goals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Regional Considerations for {countryData.name}</h2>
          <p className="mt-4 text-lg text-textDark">
            The education sector in {countryData.name} has unique characteristics that scholarship providers must consider. FragmentTrails is designed to accommodate these regional factors, including local academic calendars, qualification frameworks, cultural considerations in interviews, and specific regulatory requirements. Our platform can be customized to align with the specific needs of institutions operating in the {countryData.name} context.
          </p>
          <p className="mt-4 text-lg text-textDark">
            Whether you're managing a small institutional scholarship program or a national initiative with thousands of applicants, FragmentTrails provides the scalability, flexibility, and intelligence needed to make selection processes both efficient and equitable. Our team understands the local education landscape and can help configure the platform to meet your specific requirements.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-secondary">Implementation and Support</h2>
          <p className="mt-4 text-lg text-textDark">
            FragmentTrails offers comprehensive implementation support for institutions in {countryData.name}, including configuration assistance, evaluator training, technical support, and ongoing optimization. Our team can work with you to ensure the platform aligns with your existing processes and achieves your specific goals for scholarship selection and candidate evaluation.
          </p>
        </div>

        <div className="mt-12 rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-secondary">Transform Scholarship Selection in {countryData.name}</h2>
          <p className="mt-4 text-lg text-textDark">
            Join leading institutions across {countryData.region} that are modernizing their scholarship selection processes with FragmentTrails. Contact our team to learn how we can help your institution achieve fairer, more efficient, and more effective scholarship evaluations.
          </p>
          <div className="mt-6">
            <a
              href="/contact/"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Request a Demo for {countryData.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
