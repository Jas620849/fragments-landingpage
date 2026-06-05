import { Metadata } from "next";
import Link from "next/link";
import { generateThreadMetadata } from "@/lib/metadata-generator";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import DiscussionForumSchema from "@/app/components/DiscussionForumSchema";
import QAPageSchema from "@/app/components/QAPageSchema";

interface ThreadPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Reply {
  id: number;
  author: string;
  authorUrl: string;
  content: string;
  publishedAt: string;
  upvoteCount: number;
  isAccepted: boolean;
}

interface RelatedThread {
  slug: string;
  title: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Thread {
  title: string;
  topicTitle: string;
  topicSlug: string;
  description: string;
  author: string;
  authorUrl: string;
  publishedAt: string;
  updatedAt: string;
  replyCount: number;
  viewCount: number;
  upvoteCount: number;
  category: string;
  content: string;
  replies: Reply[];
  relatedThreads: RelatedThread[];
  relatedTopics: string[];
  faqs: FAQ[];
}

// Sample thread data - In production, this would come from your database
const getThreadData = (slug: string): Thread | null => {
  const threads: Record<string, Thread> = {
    "understanding-electricity": {
      title: "Understanding Electricity Basics",
      topicTitle: "What Is Electricity",
      topicSlug: "what-is-electricity",
      description: "A comprehensive discussion about the fundamentals of electricity, including electric charge, voltage, current, and resistance.",
      author: "Dr. Sarah Johnson",
      authorUrl: "/user/dr-sarah-johnson",
      publishedAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-20T15:30:00Z",
      replyCount: 15,
      viewCount: 1250,
      upvoteCount: 42,
      category: "physics",
      content: `
        <p>I'm trying to understand the basics of electricity. Can someone explain the relationship between voltage, current, and resistance?</p>
        <p>I know that voltage is like pressure, current is the flow, and resistance opposes the flow, but I'm not sure how they work together in a circuit.</p>
      `,
      replies: [
        {
          id: 1,
          author: "Prof. Michael Chen",
          authorUrl: "/user/prof-michael-chen",
          content: "Great question! The relationship between voltage (V), current (I), and resistance (R) is described by Ohm's Law: V = I × R. This means voltage equals current multiplied by resistance.",
          publishedAt: "2024-01-15T11:00:00Z",
          upvoteCount: 28,
          isAccepted: true,
        },
        {
          id: 2,
          author: "Emily Rodriguez",
          authorUrl: "/user/emily-rodriguez",
          content: "Think of it like water flowing through a pipe. Voltage is the water pressure, current is the flow rate, and resistance is how narrow the pipe is. Higher pressure (voltage) pushes more water (current) through, but a narrower pipe (higher resistance) reduces the flow.",
          publishedAt: "2024-01-15T12:30:00Z",
          upvoteCount: 15,
          isAccepted: false,
        },
        {
          id: 3,
          author: "Dr. Sarah Johnson",
          authorUrl: "/user/dr-sarah-johnson",
          content: "To add to the excellent explanations above, here are some practical examples:\n\n- A 9V battery with a 100Ω resistor would have 0.09A of current (9V ÷ 100Ω = 0.09A)\n- If you increase the voltage to 18V, the current doubles to 0.18A\n- If you increase resistance to 200Ω, the current halves to 0.045A\n\nThis relationship is fundamental to designing and troubleshooting electrical circuits.",
          publishedAt: "2024-01-15T14:00:00Z",
          upvoteCount: 22,
          isAccepted: false,
        },
      ],
      relatedThreads: [
        { slug: "electricity-generation", title: "How Is Electricity Generated?" },
        { slug: "ac-vs-dc", title: "AC vs DC: What's the Difference?" },
      ],
      relatedTopics: ["atomic-structure", "newton-laws"],
      faqs: [
        {
          question: "What is Ohm's Law?",
          answer: "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points, and inversely proportional to the resistance between them. The formula is V = I × R, where V is voltage, I is current, and R is resistance."
        },
        {
          question: "Why is understanding voltage, current, and resistance important?",
          answer: "Understanding these three fundamental concepts is essential for anyone working with electricity, from basic circuit design to complex electrical engineering. They form the foundation for all electrical calculations and circuit analysis."
        },
      ],
    },
    "what-is-an-electron": {
      title: "What Is an Electron?",
      topicTitle: "Atomic Structure",
      topicSlug: "atomic-structure",
      description: "Discussion about electrons, their properties, and their role in atomic structure and electricity.",
      author: "Prof. Michael Chen",
      authorUrl: "/user/prof-michael-chen",
      publishedAt: "2024-01-16T09:00:00Z",
      updatedAt: "2024-01-21T14:00:00Z",
      replyCount: 42,
      viewCount: 2100,
      upvoteCount: 87,
      category: "chemistry",
      content: "<p>Can someone explain what electrons are and why they're important in chemistry and physics?</p>",
      replies: [],
      relatedThreads: [],
      relatedTopics: ["what-is-electricity"],
      faqs: [],
    },
  };

  return threads[slug] || null;
};

export async function generateMetadata({ params }: ThreadPageProps): Promise<Metadata> {
  const { slug } = await params;
  const thread = getThreadData(slug);
  
  if (!thread) {
    return {
      title: "Thread Not Found | Fragment Trails",
    };
  }

  return generateThreadMetadata({
    title: thread.title,
    slug: slug,
    topicTitle: thread.topicTitle,
    topicSlug: thread.topicSlug,
    description: thread.description,
    author: thread.author,
    replyCount: thread.replyCount,
    viewCount: thread.viewCount,
    publishedAt: thread.publishedAt,
    updatedAt: thread.updatedAt,
  });
}

export function generateStaticParams() {
  return [
    { slug: "understanding-electricity" },
    { slug: "what-is-an-electron" },
  ];
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  const { slug } = await params;
  const thread = getThreadData(slug);

  if (!thread) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Thread Not Found</h1>
          <p className="text-gray-600">The discussion thread you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: thread.category || "Topics", path: `/category/${thread.category || "all"}` },
    { name: thread.topicTitle, path: `/topic/${thread.topicSlug}` },
    { name: thread.title, path: `/thread/${slug}` },
  ];

  // Convert replies to QAPage format
  const qaAnswers = thread.replies.map((reply: Reply) => ({
    text: reply.content,
    authorName: reply.author,
    authorUrl: reply.authorUrl,
    upvoteCount: reply.upvoteCount,
    publishedAt: reply.publishedAt,
    isAccepted: reply.isAccepted,
  }));

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <DiscussionForumSchema
        threadUrl={`/thread/${slug}`}
        threadTitle={thread.title}
        threadText={thread.content}
        authorName={thread.author}
        authorUrl={thread.authorUrl}
        publishedAt={thread.publishedAt}
        updatedAt={thread.updatedAt}
        replyCount={thread.replyCount}
        interactionCount={thread.viewCount}
        upvoteCount={thread.upvoteCount}
        category={thread.category}
      />
      <QAPageSchema
        questionUrl={`/thread/${slug}`}
        questionTitle={thread.title}
        questionText={thread.content}
        authorName={thread.author}
        authorUrl={thread.authorUrl}
        publishedAt={thread.publishedAt}
        updatedAt={thread.updatedAt}
        answerCount={thread.replyCount}
        upvoteCount={thread.upvoteCount}
        viewCount={thread.viewCount}
        answers={qaAnswers}
        category={thread.category}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          {thread.category && (
            <>
              <Link href={`/category/${thread.category}`} className="hover:text-blue-600 capitalize">
                {thread.category.replace("-", " ")}
              </Link>
              <span>/</span>
            </>
          )}
          <Link href={`/topic/${thread.topicSlug}`} className="hover:text-blue-600">
            {thread.topicTitle}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{thread.title}</span>
        </nav>

        {/* Thread Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{thread.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span>By {thread.author}</span>
            <span>•</span>
            <span>{thread.replyCount} replies</span>
            <span>•</span>
            <span>{thread.viewCount} views</span>
            <span>•</span>
            <span>Updated {new Date(thread.updatedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
              {thread.category?.replace("-", " ")}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {thread.upvoteCount} upvotes
            </span>
          </div>
        </div>

        {/* Original Question/Post */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {thread.author.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold">{thread.author}</span>
                <span className="text-sm text-gray-600">
                  {new Date(thread.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <div 
                className="prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: thread.content }}
              />
            </div>
          </div>
        </div>

        {/* Replies */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold">Replies ({thread.replyCount})</h2>
          {thread.replies.map((reply: Reply) => (
            <div
              key={reply.id}
              className={`bg-white border rounded-lg p-6 ${reply.isAccepted ? "border-green-500" : ""}`}
            >
              {reply.isAccepted && (
                <div className="mb-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm inline-block">
                  ✓ Accepted Answer
                </div>
              )}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {reply.author.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">{reply.author}</span>
                    <span className="text-sm text-gray-600">
                      {new Date(reply.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div 
                    className="prose prose-blue max-w-none"
                    dangerouslySetInnerHTML={{ __html: reply.content }}
                  />
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                    <span>↑ {reply.upvoteCount} upvotes</span>
                    <button className="hover:text-blue-600">Reply</button>
                    <button className="hover:text-blue-600">Share</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Add Your Reply</h3>
          <textarea
            className="w-full p-4 border rounded-lg min-h-[150px]"
            placeholder="Share your knowledge and contribute to the discussion..."
          />
          <div className="mt-4 flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Submit your reply">
              Submit Reply
            </button>
          </div>
        </div>

        {/* Related Threads */}
        {thread.relatedThreads.length > 0 && (
          <section className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Related Discussions</h2>
            <div className="space-y-4">
              {thread.relatedThreads.map((related: RelatedThread) => (
                <Link
                  key={related.slug}
                  href={`/thread/${related.slug}`}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg">{related.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Topics */}
        {thread.relatedTopics.length > 0 && (
          <section className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Related Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {thread.relatedTopics.map((relatedSlug: string) => (
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

        {/* FAQ Section */}
        {thread.faqs.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {thread.faqs.map((faq: FAQ, index: number) => (
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
