import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo-constants";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: `Search ${SITE_NAME} | Find Topics, Threads, and Discussions`,
  description: `Search ${SITE_NAME} to find academic topics, discussion threads, and knowledge shared by students, researchers, and educators worldwide.`,
  keywords: ["search", "find topics", "academic search", "discussion search", "knowledge search"],
  openGraph: {
    type: "website",
    title: `Search ${SITE_NAME}`,
    description: `Find academic topics, discussion threads, and knowledge shared by students, researchers, and educators.`,
    url: "/search/",
  },
  alternates: {
    canonical: "/search/",
  },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Search", path: "/search" },
];

// Sample search results - In production, this would come from your search API
const POPULAR_SEARCHES = [
  "What is electricity",
  "Machine learning basics",
  "Quantum physics",
  "Data science",
  "Python programming",
  "Neural networks",
  "Chemical bonds",
  "Newton's laws",
];

const RECENT_TOPICS = [
  { slug: "what-is-electricity", title: "What Is Electricity", category: "Physics", replies: 45 },
  { slug: "machine-learning-basics", title: "Machine Learning Basics", category: "Machine Learning", replies: 124 },
  { slug: "quantum-physics-introduction", title: "Quantum Physics Introduction", category: "Physics", replies: 67 },
  { slug: "data-science-fundamentals", title: "Data Science Fundamentals", category: "Data Science", replies: 89 },
  { slug: "python-programming", title: "Python Programming Guide", category: "Programming", replies: 156 },
];

const RECENT_THREADS = [
  { slug: "understanding-electricity", title: "Understanding Electricity Basics", category: "Physics", replies: 15 },
  { slug: "ml-model-selection", title: "How to Choose the Right ML Model", category: "Machine Learning", replies: 67 },
  { slug: "overfitting-solutions", title: "Solutions for Overfitting in ML", category: "Machine Learning", replies: 58 },
  { slug: "sorting-algorithms", title: "Best Sorting Algorithms", category: "Computer Science", replies: 45 },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Search</span>
        </nav>

        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Search {SITE_NAME}</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find topics, threads, and discussions across all academic disciplines
          </p>

          {/* Search Form */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for topics, threads, or discussions..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              autoFocus
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((search) => (
              <Link
                key={search}
                href={`/search?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {search}
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recent Topics</h2>
          <div className="space-y-4">
            {RECENT_TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topic/${topic.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {topic.category}
                      </span>
                      <span>{topic.replies} replies</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Threads */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {RECENT_THREADS.map((thread) => (
              <Link
                key={thread.slug}
                href={`/thread/${thread.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        {thread.category}
                      </span>
                      <span>{thread.replies} replies</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Search Tips */}
        <section className="mb-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Search Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Use specific keywords for better results</li>
            <li>• Try different variations of your search term</li>
            <li>• Use quotes for exact phrase matches</li>
            <li>• Filter by category to narrow down results</li>
            <li>• Browse categories if you&apos;re not sure what to search for</li>
          </ul>
        </section>

        {/* Browse Categories CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Browse our academic categories
          </p>
          <Link
            href="/categories"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All Categories
          </Link>
        </section>
      </div>
    </div>
  );
}
