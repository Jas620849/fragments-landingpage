export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  read: string;
  excerpt: string;
  /** ISO 8601 for structured data and Open Graph */
  publishedISO: string;
  /** ISO 8601 last editorial update */
  updatedISO?: string;
};

/**
 * Final live catalog after third content-quality pass.
 * Focus: classroom discussion + transferable evaluation craft.
 */
export const BLOG_POSTS: BlogPostMeta[] = [
  {
    "slug": "interview-moderation-explained",
    "title": "Discussion Moderation for Classroom Trails",
    "description": "How moderation works in rigorous classroom discussion: AI first-pass checks, human review, and keeping a fragment trail readable.",
    "date": "May 22, 2026",
    "read": "12 min read",
    "excerpt": "Moderation is not censorship theater\u2014it is how discussion stays on standard at scale.",
    "publishedISO": "2026-05-22",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "educational-assessment-tools",
    "title": "Assessing Classroom Discussion Quality",
    "description": "How teachers can evaluate discussion quality on fragment trails: evidence use, follow-ups, and contribution\u2014not volume.",
    "date": "May 13, 2026",
    "read": "11 min read",
    "excerpt": "Grade the thinking trail, not who typed the most.",
    "publishedISO": "2026-05-13",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "ai-powered-interview-evaluation",
    "title": "AI in Discussion Quality Checks: What Helps and What Does Not",
    "description": "How AI screening can support classroom discussion quality without replacing teacher judgment\u2014and where automated scoring claims go wrong.",
    "date": "June 1, 2026",
    "read": "11 min read",
    "excerpt": "Use automation for first-pass quality signals; keep humans accountable for fairness and context.",
    "publishedISO": "2026-06-01",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "building-evaluation-rubrics",
    "title": "Building Evaluation Rubrics",
    "description": "Step-by-step rubric design with anchors teachers and evaluators can actually use in real time.",
    "date": "May 23, 2026",
    "read": "12 min read",
    "excerpt": "Build dimensions, write anchors, pilot on sample answers, then lock the sheet.",
    "publishedISO": "2026-05-23",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "how-to-reduce-bias-in-scholarship-interviews",
    "title": "How to Reduce Bias in Structured Evaluations",
    "description": "Practical ways to reduce affinity, confirmation, halo, and contrast bias using structure, rubrics, and calibration.",
    "date": "June 5, 2026",
    "read": "14 min read",
    "excerpt": "Define competencies, lock the question set, score against a shared rubric, and calibrate before decisions harden.",
    "publishedISO": "2026-06-05",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "structured-vs-unstructured-interviews",
    "title": "Structured vs Unstructured Interviews",
    "description": "A clear comparison of structured and unstructured interview formats\u2014and when each helps or hurts fairness.",
    "date": "June 3, 2026",
    "read": "12 min read",
    "excerpt": "When structure helps, when flexibility still matters, and how to design a hybrid that stays fair.",
    "publishedISO": "2026-06-03",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "common-interview-scoring-mistakes",
    "title": "Common Scoring Mistakes (and How to Catch Them)",
    "description": "Halo, contrast, central tendency, and notes that do not match the number\u2014plus how to catch them in calibration.",
    "date": "May 29, 2026",
    "read": "10 min read",
    "excerpt": "Most scoring problems are predictable. Catch them before they decide outcomes.",
    "publishedISO": "2026-05-29",
    "updatedISO": "2026-07-23"
  },
  {
    "slug": "evaluator-calibration-methods",
    "title": "Evaluator Calibration Methods",
    "description": "Concrete calibration drills so raters score the same evidence the same way\u2014plus a short training outline.",
    "date": "May 16, 2026",
    "read": "10 min read",
    "excerpt": "Watch a sample together, score independently, then reconcile out loud.",
    "publishedISO": "2026-05-16",
    "updatedISO": "2026-07-23"
  }
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
