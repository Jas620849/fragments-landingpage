import { Metadata } from "next";
import { CONTENT_CATEGORIES } from "@/lib/seo-constants";
import { generateCategoryMetadata } from "@/lib/metadata-generator";
import { canonicalUrl } from "@/lib/site";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Sample topics per category - In production, this would come from your database
const getCategoryTopics = (categorySlug: string) => {
  const categoryTopics: Record<string, any[]> = {
    "physics": [
      { slug: "what-is-electricity", title: "What Is Electricity", replyCount: 45, viewCount: 2300 },
      { slug: "atomic-structure", title: "Atomic Structure", replyCount: 32, viewCount: 1800 },
      { slug: "newton-laws", title: "Newton Laws Explained", replyCount: 28, viewCount: 1500 },
      { slug: "quantum-physics-introduction", title: "Quantum Physics Introduction", replyCount: 67, viewCount: 3200 },
    ],
    "chemistry": [
      { slug: "chemical-bonds", title: "Chemical Bonds", replyCount: 38, viewCount: 1900 },
      { slug: "periodic-table", title: "Understanding the Periodic Table", replyCount: 52, viewCount: 2800 },
    ],
    "computer-science": [
      { slug: "algorithms-basics", title: "Algorithms Basics", replyCount: 89, viewCount: 4500 },
      { slug: "data-structures", title: "Data Structures Explained", replyCount: 76, viewCount: 3900 },
      { slug: "complexity-theory", title: "Computational Complexity Theory", replyCount: 41, viewCount: 2100 },
    ],
    "machine-learning": [
      { slug: "machine-learning-basics", title: "Machine Learning Basics", replyCount: 124, viewCount: 6200 },
      { slug: "neural-networks", title: "Neural Networks Explained", replyCount: 98, viewCount: 5100 },
      { slug: "supervised-learning", title: "Supervised vs Unsupervised Learning", replyCount: 87, viewCount: 4600 },
    ],
  };

  return categoryTopics[categorySlug] || [];
};

// Sample threads per category - In production, this would come from your database
const getCategoryThreads = (categorySlug: string) => {
  const categoryThreads: Record<string, any[]> = {
    "physics": [
      { slug: "understanding-electricity", title: "Understanding Electricity Basics", replyCount: 15, viewCount: 1250 },
      { slug: "electron-behavior", title: "How Do Electrons Behave in Circuits?", replyCount: 23, viewCount: 1800 },
    ],
    "chemistry": [
      { slug: "bond-types", title: "Types of Chemical Bonds Explained", replyCount: 31, viewCount: 2100 },
    ],
    "computer-science": [
      { slug: "sorting-algorithms", title: "Best Sorting Algorithms for Large Datasets", replyCount: 45, viewCount: 3200 },
      { slug: "big-o-notation", title: "Understanding Big O Notation", replyCount: 52, viewCount: 3800 },
    ],
    "machine-learning": [
      { slug: "ml-model-selection", title: "How to Choose the Right ML Model", replyCount: 67, viewCount: 4500 },
      { slug: "overfitting-solutions", title: "Solutions for Overfitting in ML", replyCount: 58, viewCount: 4100 },
    ],
  };

  return categoryThreads[categorySlug] || [];
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = CONTENT_CATEGORIES.find((c) => c.slug === params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found | Fragment Trails",
    };
  }

  return generateCategoryMetadata({
    slug: category.slug,
    name: category.name,
    description: category.description,
    topicCount: getCategoryTopics(category.slug).length,
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = CONTENT_CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const topics = getCategoryTopics(category.slug);
  const threads = getCategoryThreads(category.slug);
  const topicCount = topics.length;
  const threadCount = threads.length;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: category.name, path: `/category/${category.slug}` },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/categories" className="hover:text-blue-600">Categories</a>
          <span>/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{category.description}</p>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
              {topicCount} Topics
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
              {threadCount} Discussions
            </span>
          </div>
        </div>

        {/* Keywords Tags */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular Topics in {category.name}</h2>
          <div className="flex flex-wrap gap-2">
            {category.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Topics */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Featured Topics</h2>
            <a href={`/category/${category.slug}/topics`} className="text-blue-600 hover:underline">
              View All Topics →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.slice(0, 4).map((topic) => (
              <a
                key={topic.slug}
                href={`/topic/${topic.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{topic.replyCount} replies</span>
                  <span>•</span>
                  <span>{topic.viewCount} views</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Threads */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Popular Discussions</h2>
            <a href={`/category/${category.slug}/threads`} className="text-blue-600 hover:underline">
              View All Discussions →
            </a>
          </div>
          <div className="space-y-4">
            {threads.slice(0, 5).map((thread) => (
              <a
                key={thread.slug}
                href={`/thread/${thread.slug}`}
                className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{thread.replyCount} replies</span>
                  <span>•</span>
                  <span>{thread.viewCount} views</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Suggested Reading */}
        <section className="mb-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Suggested Reading</h2>
          <p className="text-gray-700 mb-4">
            Explore these related categories to deepen your understanding:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTENT_CATEGORIES
              .filter((c) => c.slug !== category.slug)
              .slice(0, 3)
              .map((relatedCategory) => (
                <a
                  key={relatedCategory.slug}
                  href={`/category/${relatedCategory.slug}`}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg">{relatedCategory.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{relatedCategory.description}</p>
                </a>
              ))}
          </div>
        </section>

        {/* Start a Discussion CTA */}
        <section className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Start a Discussion in {category.name}</h2>
          <p className="text-lg mb-6">
            Share your knowledge, ask questions, and connect with the community
          </p>
          <div className="flex space-x-4">
            <a
              href={`/category/${category.slug}/new-topic`}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create New Topic
            </a>
            <a
              href={`/category/${category.slug}/new-thread`}
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Discussion
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                What topics can I discuss in {category.name}?
              </h3>
              <p className="text-gray-700">
                You can discuss any topic related to {category.name.toLowerCase()}, including theories,
                applications, research findings, and practical questions. Our community welcomes both
                beginners and experts.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                How do I get my questions answered?
              </h3>
              <p className="text-gray-700">
                Simply create a thread with your question, and our community of experts and enthusiasts
                will provide detailed answers. Be specific and provide context for the best responses.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Can I share my research or papers?
              </h3>
              <p className="text-gray-700">
                Absolutely! We encourage sharing research, papers, and academic content. Create a topic
                with your work and invite discussions around it.
              </p>
            </div>
          </div>
        </section>

        {/* All Categories Link */}
        <section className="text-center py-8">
          <a
            href="/categories"
            className="inline-block px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Browse All Categories
          </a>
        </section>
      </div>
    </div>
  );
}
