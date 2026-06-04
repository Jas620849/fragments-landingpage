import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, CONTENT_CATEGORIES } from "@/lib/seo-constants";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: `Browse Categories | ${SITE_NAME}`,
  description: `Explore all academic discussion categories on ${SITE_NAME}. Find topics in Science, Technology, Engineering, Mathematics, and more.`,
  keywords: ["categories", "academic disciplines", "subjects", "browse topics", "discussion categories"],
  openGraph: {
    type: "website",
    title: `Browse Categories | ${SITE_NAME}`,
    description: `Explore all academic discussion categories on ${SITE_NAME}`,
    url: "/categories/",
  },
  alternates: {
    canonical: "/categories/",
  },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
];

// Group categories by field
const SCIENCE_CATEGORIES = CONTENT_CATEGORIES.filter((c) =>
  ["science", "physics", "chemistry", "biology", "mathematics"].includes(c.slug)
);

const TECHNOLOGY_CATEGORIES = CONTENT_CATEGORIES.filter((c) =>
  ["computer-science", "programming", "artificial-intelligence", "machine-learning", "data-science"].includes(c.slug)
);

const ENGINEERING_CATEGORIES = CONTENT_CATEGORIES.filter((c) =>
  ["engineering", "medicine"].includes(c.slug)
);

const SOCIAL_SCIENCES_CATEGORIES = CONTENT_CATEGORIES.filter((c) =>
  ["history", "economics", "business", "marketing", "psychology", "education", "research-methods"].includes(c.slug)
);

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Categories</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Browse Categories</h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore academic discussion categories across all disciplines
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
              {CONTENT_CATEGORIES.length} Categories
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
              1000+ Topics
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
              5000+ Discussions
            </span>
          </div>
        </div>

        {/* Science Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Science & Mathematics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCIENCE_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technology Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technology & Computing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGY_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Engineering Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Engineering & Medicine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Social Sciences Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Social Sciences & Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_SCIENCES_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Categories List */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">All Categories A-Z</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTENT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Start Discussion CTA */}
        <section className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Find Your Category?</h2>
          <p className="text-lg mb-6">
            Suggest a new category or start a discussion in an existing one
          </p>
          <div className="flex space-x-4">
            <Link
              href="/suggest-category"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Suggest Category
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Search Topics
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
