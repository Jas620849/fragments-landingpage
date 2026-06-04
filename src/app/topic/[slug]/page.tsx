import { Metadata } from "next";
import Link from "next/link";
import { generateTopicMetadata } from "@/lib/metadata-generator";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import FAQPageSchema from "@/app/components/FAQPageSchema";

interface TopicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Thread {
  slug: string;
  title: string;
  replyCount: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Topic {
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  content: string;
  relatedTopics: string[];
  threads: Thread[];
  faqs: FAQ[];
}

// Sample topic data - In production, this would come from your database
const getTopicData = (slug: string): Topic | null => {
  const topics: Record<string, Topic> = {
    "what-is-electricity": {
      title: "What Is Electricity",
      description: "Electricity is the flow of electric charge. It is a form of energy that powers our modern world, from lighting our homes to running complex machinery. Understanding electricity is fundamental to physics and engineering.",
      category: "physics",
      author: "Dr. Sarah Johnson",
      publishedAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T15:30:00Z",
      content: `
        <h1>What Is Electricity?</h1>
        <p>Electricity is a fundamental force of nature that powers our modern world. At its core, electricity is the flow of electric charge, typically through a conductor such as a wire.</p>
        
        <h2>Understanding Electric Charge</h2>
        <p>Electric charge is a fundamental property of matter. There are two types of electric charges: positive and negative. Like charges repel each other, while opposite charges attract. This interaction is what creates electric fields and enables the flow of electricity.</p>
        
        <h2>How Electricity Flows</h2>
        <p>Electricity flows when there is a difference in electric potential between two points. This difference is called voltage. The flow of electric charge is called current, and it's measured in amperes (amps). The resistance to this flow is called resistance, measured in ohms.</p>
        
        <h2>Types of Electricity</h2>
        <ul>
          <li><strong>Static Electricity:</strong> Caused by the buildup of electric charge on the surface of objects</li>
          <li><strong>Current Electricity:</strong> The flow of electric charge through a conductor</li>
          <li><strong>Direct Current (DC):</strong> Electric charge flows in one direction</li>
          <li><strong>Alternating Current (AC):</strong> Electric charge changes direction periodically</li>
        </ul>
        
        <h2>Applications of Electricity</h2>
        <p>Electricity has countless applications in our daily lives:</p>
        <ul>
          <li>Powering homes and businesses</li>
          <li>Running electronic devices</li>
          <li>Industrial manufacturing</li>
          <li>Transportation (electric vehicles)</li>
          <li>Communication systems</li>
        </ul>
      `,
      relatedTopics: ["atomic-structure", "newton-laws", "quantum-physics-introduction"],
      threads: [
        { slug: "understanding-electricity", title: "Understanding Electricity Basics", replyCount: 15 },
        { slug: "electricity-generation", title: "How Is Electricity Generated?", replyCount: 23 },
      ],
      faqs: [
        {
          question: "What is the difference between AC and DC electricity?",
          answer: "AC (Alternating Current) changes direction periodically, while DC (Direct Current) flows in only one direction. AC is used for power distribution because it can be easily transformed to different voltages, while DC is used for batteries and electronic devices."
        },
        {
          question: "How is electricity measured?",
          answer: "Electricity is measured using several units: voltage (volts) measures electric potential, current (amps) measures flow rate, resistance (ohms) measures opposition to flow, and power (watts) measures the rate of energy transfer."
        },
        {
          question: "What causes electric shock?",
          answer: "Electric shock occurs when electric current passes through the human body. The severity depends on the amount of current, the path it takes through the body, and the duration of exposure. Even small currents can be dangerous if they pass through vital organs."
        },
      ],
    },
    "atomic-structure": {
      title: "Atomic Structure",
      description: "Atoms are the building blocks of matter. Understanding atomic structure is essential for chemistry, physics, and materials science. Learn about protons, neutrons, and electrons.",
      category: "chemistry",
      author: "Prof. Michael Chen",
      publishedAt: "2024-01-16T09:00:00Z",
      updatedAt: "2024-01-21T14:00:00Z",
      content: "<h1>Atomic Structure</h1><p>Atoms are the fundamental units of matter...</p>",
      relatedTopics: ["what-is-electricity", "chemistry-basics"],
      threads: [
        { slug: "what-is-an-electron", title: "What Is an Electron?", replyCount: 42 },
        { slug: "importance-of-neutrons", title: "Importance of Neutrons in Atoms", replyCount: 18 },
      ],
      faqs: [],
    },
  };

  return topics[slug] || null;
};

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicData(slug);
  
  if (!topic) {
    return {
      title: "Topic Not Found | Fragment Trails",
    };
  }

  return generateTopicMetadata({
    title: topic.title,
    slug: slug,
    description: topic.description,
    category: topic.category,
    author: topic.author,
    publishedAt: topic.publishedAt,
    updatedAt: topic.updatedAt,
  });
}

export function generateStaticParams() {
  return [
    { slug: "what-is-electricity" },
    { slug: "atomic-structure" },
  ];
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicData(slug);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-gray-600">The topic you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: topic.category || "Topics", path: `/category/${topic.category || "all"}` },
    { name: topic.title, path: `/topic/${slug}` },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      {topic.faqs.length > 0 && (
        <FAQPageSchema
          faqs={topic.faqs}
          category={topic.category}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          {topic.category && (
            <>
              <Link href={`/category/${topic.category}`} className="hover:text-blue-600 capitalize">
                {topic.category.replace("-", " ")}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900">{topic.title}</span>
        </nav>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{topic.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
            <span>By {topic.author}</span>
            <span>•</span>
            <span>Updated {new Date(topic.updatedAt).toLocaleDateString()}</span>
          </div>
          
          <div 
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        </article>

        {/* Related Topics */}
        {topic.relatedTopics.length > 0 && (
          <section className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Related Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.relatedTopics.map((relatedSlug: string) => (
                <Link
                  key={relatedSlug}
                  href={`/topic/${relatedSlug}`}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg capitalize">
                    {relatedSlug.replace(/-/g, " ")}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Discussion Threads */}
        {topic.threads.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Discussion Threads</h2>
            <div className="space-y-4">
              {topic.threads.map((thread: Thread) => (
                <Link
                  key={thread.slug}
                  href={`/thread/${thread.slug}`}
                  className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg">{thread.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{thread.replyCount} replies</p>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/topic/${slug}/new-thread`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start a Discussion
              </Link>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {topic.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {topic.faqs.map((faq: FAQ, index: number) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
