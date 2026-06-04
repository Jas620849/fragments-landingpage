export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  read: string;
  excerpt: string;
  /** ISO 8601 for structured data and Open Graph */
  publishedISO: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "welcome-to-fragments",
    title: "Welcome to Fragments",
    description:
      "Why Fragments exists: scholarly trails, educator recognition, and quality at scale.",
    date: "April 12, 2026",
    read: "4 min read",
    excerpt:
      "Why we built a discussion platform that treats educators like partners, not an afterthought.",
    publishedISO: "2026-04-12",
  },
  {
    slug: "fragment-trails-explained",
    title: "Fragment trails, explained",
    description:
      "How fragment trails keep class discussions structured, cumulative, and easy to follow.",
    date: "April 5, 2026",
    read: "6 min read",
    excerpt:
      "A quick tour of how trails stay rigorous, readable, and worth your class time.",
    publishedISO: "2026-04-05",
  },
  {
    slug: "how-ai-moderation-transforms-classroom-discussions",
    title: "How AI Moderation Transforms Classroom Discussions",
    description: "Discover how AI-powered moderation is revolutionizing classroom discussions by ensuring quality, fairness, and meaningful engagement.",
    date: "January 15, 2026",
    read: "5 min read",
    excerpt: "AI moderation brings consistency and quality assurance to classroom discussions at scale.",
    publishedISO: "2026-01-15T00:00:00Z",
  },
  {
    slug: "boosting-student-engagement-with-fragment-trails",
    title: "Boosting Student Engagement with Fragment Trails",
    description: "Learn how fragment trails increase student participation and create more engaging learning environments.",
    date: "January 10, 2026",
    read: "4 min read",
    excerpt: "Fragment trails provide structured pathways that keep students motivated and engaged throughout discussions.",
    publishedISO: "2026-01-10T00:00:00Z",
  },
  {
    slug: "the-future-of-cohort-based-learning",
    title: "The Future of Cohort-Based Learning",
    description: "Explore how cohort-based learning is evolving and why it's becoming the preferred model for online education.",
    date: "January 5, 2026",
    read: "6 min read",
    excerpt: "Cohort-based learning builds community and increases completion rates in online education programs.",
    publishedISO: "2026-01-05T00:00:00Z",
  },
  {
    slug: "recognizing-educators-who-lead-quality-discussions",
    title: "Recognizing Educators Who Lead Quality Discussions",
    description: "Why educator recognition matters and how platforms like Fragments are rewarding teaching excellence.",
    date: "December 28, 2025",
    read: "5 min read",
    excerpt: "Recognition systems improve educator retention and encourage continuous improvement in teaching quality.",
    publishedISO: "2025-12-28T00:00:00Z",
  },
  {
    slug: "building-scholarly-discourse-in-digital-classrooms",
    title: "Building Scholarly Discourse in Digital Classrooms",
    description: "Strategies for fostering academic discussions and scholarly discourse in online learning environments.",
    date: "December 20, 2025",
    read: "7 min read",
    excerpt: "Digital classrooms can foster scholarly discourse when equipped with the right tools and strategies.",
    publishedISO: "2025-12-20T00:00:00Z",
  },
  {
    slug: "quality-assurance-in-online-education",
    title: "Quality Assurance in Online Education",
    description: "How AI and human review systems work together to maintain quality standards in online learning.",
    date: "December 15, 2025",
    read: "6 min read",
    excerpt: "Combining AI moderation with human review creates robust quality assurance for online education.",
    publishedISO: "2025-12-15T00:00:00Z",
  },
  {
    slug: "increasing-retention-through-engagement",
    title: "Increasing Retention Through Engagement",
    description: "The link between student engagement and retention rates in online learning programs.",
    date: "December 10, 2025",
    read: "5 min read",
    excerpt: "Higher engagement directly correlates with better retention and completion rates in online courses.",
    publishedISO: "2025-12-10T00:00:00Z",
  },
  {
    slug: "gamification-in-education-best-practices",
    title: "Gamification in Education: Best Practices",
    description: "How to effectively use gamification elements like badges and rewards to motivate students.",
    date: "December 5, 2025",
    read: "6 min read",
    excerpt: "Well-designed gamification can significantly boost student motivation and learning outcomes.",
    publishedISO: "2025-12-05T00:00:00Z",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
