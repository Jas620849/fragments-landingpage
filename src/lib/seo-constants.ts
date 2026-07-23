export const SITE_NAME = "FragmentTrails";

export const PRODUCT_NAME = "Fragments";

export const DEFAULT_TITLE =
  "FragmentTrails | Fragments — AI-Moderated Classroom Discussion Platform";

export const DEFAULT_DESCRIPTION =
  "FragmentTrails is home to Fragments, an AI-moderated discussion platform for schools and serious learners. Follow guided fragment trails, keep discourse rigorous, and credit educators who teach with care. Our blog covers fair evaluation practices for scholarships, interviews, and admissions.";

export const DEFAULT_KEYWORDS = [
  "scholarship tracking and review system",
  "scholarship management software",
  "scholarship application tracking",
  "scholarship review workflow",
  "scholarship committee management",
  "scholarship evaluation platform",
  "scholarship applicant review system",
  "scholarship administration software",
  "scholarship selection process",
  "higher education scholarship management",
  "scholarship review dashboard",
  "scholarship interview platform",
  "scholarship interview software",
  "scholarship assessment platform",
  "candidate evaluation software",
  "applicant scoring system",
  "scholarship selection software",
  "student interview platform",
  "admissions interview software",
  "interview evaluation platform",
  "interview moderation software",
  "bias free candidate evaluation",
  "structured interview assessment",
  "scholarship review process",
  "interview panel management",
  "education technology",
  "higher education",
  "scholarship programs",
  "admissions workflow",
  "AI moderation",
  "classroom discussion platform",
  "AI moderated learning",
  "fragment trails",
  "academic discussion software",
  "student engagement platform",
  "educator recognition",
  "cohort based learning",
  "scholarship interview guides",
  "fair candidate evaluation",
  "structured interview practices",
  "FragmentTrails",
  "Fragments",
];

export const TARGET_LOCALES = [
  { code: "en-US", name: "United States", priority: 1 },
  { code: "en-CA", name: "Canada", priority: 1 },
  { code: "en-GB", name: "United Kingdom", priority: 1 },
  { code: "en-AU", name: "Australia", priority: 1 },
  { code: "en-NZ", name: "New Zealand", priority: 1 },
  { code: "de-DE", name: "Germany", priority: 0.8 },
  { code: "nl-NL", name: "Netherlands", priority: 0.8 },
  { code: "sv-SE", name: "Sweden", priority: 0.8 },
  { code: "no-NO", name: "Norway", priority: 0.8 },
  { code: "fr-FR", name: "France", priority: 0.8 },
  { code: "en-SG", name: "Singapore", priority: 0.8 },
  { code: "en-PK", name: "Pakistan", priority: 0.6 },
  { code: "en-IN", name: "India", priority: 0.6 },
  { code: "en-AE", name: "UAE", priority: 0.6 },
];

/** Shared robots directive for thin / doorway / sample pages */
export const NOINDEX_ROBOTS = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
} as const;

/**
 * Demo discussion platform (static preview). Not primary publisher content —
 * keep out of AdSense/index inventory while still allowing link equity out.
 */
export const PLATFORM_DEMO_ROBOTS = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
} as const;

/**
 * Legacy sample forum categories. Routes that use these are noindexed and
 * excluded from the sitemap — they are not primary site content.
 */
export const CONTENT_CATEGORIES = [
  {
    slug: "science",
    name: "Science",
    description: "Explore scientific discussions across physics, chemistry, biology, and more",
    keywords: ["science", "scientific", "research", "experiment", "hypothesis"],
  },
  {
    slug: "physics",
    name: "Physics",
    description: "Discuss mechanics, thermodynamics, quantum physics, and physical phenomena",
    keywords: ["physics", "mechanics", "quantum", "thermodynamics", "electricity"],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    description: "Explore organic chemistry, chemical reactions, molecular structures, and more",
    keywords: ["chemistry", "molecular", "organic", "reactions", "elements"],
  },
  {
    slug: "biology",
    name: "Biology",
    description: "Discuss genetics, ecology, evolution, microbiology, and life sciences",
    keywords: ["biology", "genetics", "ecology", "evolution", "microbiology"],
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    description: "Explore algebra, calculus, statistics, and mathematical theories",
    keywords: ["mathematics", "algebra", "calculus", "statistics", "geometry"],
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    description: "Discuss programming, algorithms, data structures, and software development",
    keywords: ["computer science", "programming", "algorithms", "software", "coding"],
  },
  {
    slug: "programming",
    name: "Programming",
    description: "Share code, discuss languages, and solve programming challenges",
    keywords: ["programming", "coding", "development", "software engineering", "web development"],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    description: "Explore machine learning, neural networks, and AI applications",
    keywords: ["artificial intelligence", "AI", "machine learning", "neural networks", "deep learning"],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    description: "Discuss ML algorithms, models, training, and data science applications",
    keywords: ["machine learning", "ML", "data science", "algorithms", "models"],
  },
  {
    slug: "data-science",
    name: "Data Science",
    description: "Explore data analysis, visualization, statistics, and big data",
    keywords: ["data science", "analytics", "visualization", "big data", "statistics"],
  },
  {
    slug: "engineering",
    name: "Engineering",
    description: "Discuss civil, mechanical, electrical, and software engineering topics",
    keywords: ["engineering", "civil", "mechanical", "electrical", "software engineering"],
  },
  {
    slug: "medicine",
    name: "Medicine",
    description: "Explore medical research, healthcare, and clinical discussions",
    keywords: ["medicine", "healthcare", "clinical", "medical research", "pharmacology"],
  },
  {
    slug: "history",
    name: "History",
    description: "Discuss historical events, civilizations, and historical analysis",
    keywords: ["history", "historical", "civilization", "archaeology", "historical analysis"],
  },
  {
    slug: "economics",
    name: "Economics",
    description: "Explore microeconomics, macroeconomics, and economic theory",
    keywords: ["economics", "microeconomics", "macroeconomics", "economic theory", "finance"],
  },
  {
    slug: "business",
    name: "Business",
    description: "Discuss entrepreneurship, management, marketing, and business strategy",
    keywords: ["business", "entrepreneurship", "management", "marketing", "strategy"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Explore digital marketing, SEO, content marketing, and branding",
    keywords: ["marketing", "digital marketing", "SEO", "content marketing", "branding"],
  },
  {
    slug: "psychology",
    name: "Psychology",
    description: "Discuss cognitive psychology, behavioral science, and mental health",
    keywords: ["psychology", "cognitive", "behavioral", "mental health", "neuroscience"],
  },
  {
    slug: "education",
    name: "Education",
    description: "Explore teaching methods, educational technology, and learning theories",
    keywords: ["education", "teaching", "educational technology", "pedagogy", "learning"],
  },
  {
    slug: "research-methods",
    name: "Research Methods",
    description: "Discuss research design, methodology, and academic writing",
    keywords: ["research methods", "methodology", "research design", "academic writing", "statistics"],
  },
];
