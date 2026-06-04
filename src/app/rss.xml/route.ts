import { getSiteUrl } from "@/lib/site";
import { SITE_NAME } from "@/lib/seo-constants";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

// Sample topics and threads - In production, this would come from your database
const RECENT_TOPICS = [
  {
    slug: "what-is-electricity",
    title: "What Is Electricity",
    description: "Electricity is the flow of electric charge. It is a form of energy that powers our modern world.",
    author: "Dr. Sarah Johnson",
    publishedAt: "2024-01-15T10:00:00Z",
    category: "Physics",
  },
  {
    slug: "machine-learning-basics",
    title: "Machine Learning Basics",
    description: "Learn the fundamentals of machine learning, including algorithms, models, and practical applications.",
    author: "Prof. Michael Chen",
    publishedAt: "2024-01-19T09:00:00Z",
    category: "Machine Learning",
  },
  {
    slug: "quantum-physics-introduction",
    title: "Quantum Physics Introduction",
    description: "Explore the fascinating world of quantum physics and its implications for our understanding of reality.",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2024-01-21T14:00:00Z",
    category: "Physics",
  },
  {
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    description: "Comprehensive guide to data science, covering statistics, programming, and machine learning.",
    author: "Prof. James Wilson",
    publishedAt: "2024-01-22T11:00:00Z",
    category: "Data Science",
  },
];

const RECENT_THREADS = [
  {
    slug: "understanding-electricity",
    title: "Understanding Electricity Basics",
    description: "A comprehensive discussion about the fundamentals of electricity, including electric charge, voltage, current, and resistance.",
    author: "Dr. Sarah Johnson",
    publishedAt: "2024-01-15T10:00:00Z",
    category: "Physics",
  },
  {
    slug: "ml-model-selection",
    title: "How to Choose the Right ML Model",
    description: "Discussion on selecting the appropriate machine learning model for different use cases and datasets.",
    author: "Prof. Michael Chen",
    publishedAt: "2024-01-20T15:00:00Z",
    category: "Machine Learning",
  },
];

export async function GET() {
  const base = getSiteUrl();
  if (!base) {
    return new Response("Site URL not configured", { status: 500 });
  }

  const siteUrl = base.replace(/\/$/, "");

  // Combine topics and threads, sort by date
  const allItems = [...RECENT_TOPICS, ...RECENT_THREADS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const rssItems = allItems.map((item) => {
    const isTopic = RECENT_TOPICS.some((t) => t.slug === item.slug);
    const itemUrl = isTopic ? `${siteUrl}/topic/${item.slug}` : `${siteUrl}/thread/${item.slug}`;

    return `
      <item>
        <title><![CDATA[${item.title}]]></title>
        <description><![CDATA[${item.description}]]></description>
        <link>${itemUrl}</link>
        <guid isPermaLink="true">${itemUrl}</guid>
        <author>${item.author}</author>
        <category>${item.category}</category>
        <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
      </item>
    `;
  }).join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_NAME} - Latest Discussions]]></title>
    <description><![CDATA[Latest topics and discussions from ${SITE_NAME}, the academic discussion platform for students, researchers, and educators.]]></description>
    <link>${siteUrl}/</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
