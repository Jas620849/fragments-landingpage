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
          Transform scholarship interviews and candidate evaluations in {countryData.name} with FragmentTrails. AI-powered assessment tools designed for universities, colleges, and scholarship programs across {countryData.region}.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Why FragmentTrails in {countryData.name}</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• AI-powered interview moderation and scoring</li>
            <li>• Bias reduction for fair candidate evaluation</li>
            <li>• Structured assessment frameworks</li>
            <li>• Multi-language support capabilities</li>
            <li>• Compliance with regional education standards</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary">Ideal For</h2>
          <ul className="mt-4 space-y-2 text-textDark">
            <li>• Universities and colleges in {countryData.name}</li>
            <li>• Government scholarship programs</li>
            <li>• Private scholarship foundations</li>
            <li>• NGO fellowship programs</li>
            <li>• International education institutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
