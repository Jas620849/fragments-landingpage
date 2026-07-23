/**
 * Static discussion platform data for FragmentTrails.
 * Preview / SEO-friendly content — live create/vote/auth lives on the app domain.
 */

export type Community = {
  slug: string;
  name: string;
  description: string;
  members: number;
  weeklyPosts: number;
  icon: string;
  color: string;
};

export type Author = {
  name: string;
  handle: string;
  role: string;
};

export type Discussion = {
  slug: string;
  type: "discussion" | "question";
  title: string;
  body: string;
  excerpt: string;
  author: Author;
  communitySlug: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  upvoteCount: number;
  commentCount: number;
  answerCount?: number;
  viewCount: number;
  isTrending?: boolean;
  hasAcceptedAnswer?: boolean;
  acceptedAnswerId?: string;
};

export type Comment = {
  id: string;
  discussionSlug: string;
  author: Author;
  body: string;
  publishedAt: string;
  upvoteCount: number;
  isAccepted?: boolean;
  parentId?: string;
};

export const COMMUNITIES: Community[] = [
  {
    slug: "classroom-discourse",
    name: "Classroom Discourse",
    description:
      "Structured discussion trails for cohorts—how educators keep rigor without killing curiosity.",
    members: 12840,
    weeklyPosts: 96,
    icon: "CD",
    color: "bg-secondary",
  },
  {
    slug: "scholarship-evaluation",
    name: "Scholarship Evaluation",
    description:
      "Fair selection, bias reduction, and committee workflows for scholarship programs.",
    members: 9420,
    weeklyPosts: 71,
    icon: "SE",
    color: "bg-highlight-dark",
  },
  {
    slug: "interview-rubrics",
    name: "Interview Rubrics",
    description:
      "Scoring frameworks, calibration, and panel practices for admissions and awards.",
    members: 7650,
    weeklyPosts: 58,
    icon: "IR",
    color: "bg-accent-dark",
  },
  {
    slug: "ai-moderation",
    name: "AI Moderation",
    description:
      "Where human judgment and AI review meet—quality flags, scoring, and trust signals.",
    members: 5890,
    weeklyPosts: 44,
    icon: "AI",
    color: "bg-secondary-medium",
  },
  {
    slug: "educator-practice",
    name: "Educator Practice",
    description:
      "Teaching craft, recognition, and cohort design from practitioners in the field.",
    members: 11200,
    weeklyPosts: 83,
    icon: "EP",
    color: "bg-highlight",
  },
  {
    slug: "admissions-ops",
    name: "Admissions Ops",
    description:
      "Operational playbooks for panels, scheduling, and consistent candidate evaluation.",
    members: 4310,
    weeklyPosts: 39,
    icon: "AO",
    color: "bg-secondary-dark",
  },
];

export const DISCUSSIONS: Discussion[] = [
  {
    slug: "how-do-you-calibrate-interview-panels",
    type: "question",
    title: "How do you calibrate interview panels without slowing decisions?",
    body: `We run scholarship interviews across three campuses. Scores drift week to week—especially on “leadership potential.”

What calibration rituals actually stick? We’re open to async review, shared exemplars, or short live sessions.

Constraints: committees won’t sit through long workshops, and we need something that scales to ~40 reviewers.`,
    excerpt:
      "Scores drift across campuses on leadership potential. Looking for calibration rituals that scale to ~40 reviewers.",
    author: {
      name: "Maya Chen",
      handle: "maya-chen",
      role: "Program Director",
    },
    communitySlug: "interview-rubrics",
    tags: ["calibration", "panels", "scoring"],
    publishedAt: "2026-07-20T14:20:00Z",
    upvoteCount: 128,
    commentCount: 24,
    answerCount: 9,
    viewCount: 3120,
    isTrending: true,
    hasAcceptedAnswer: true,
    acceptedAnswerId: "c-cal-1",
  },
  {
    slug: "structured-prompts-beat-open-discussion",
    type: "discussion",
    title: "Structured prompts beat open discussion for first-year seminars",
    body: `After two semesters of “talk about the reading,” we switched to fragment-style trails: one claim, evidence, counterpoint, then synthesis.

Participation became more even. Quiet students had a clear entry. Dominant voices still contributed—but inside the structure.

Curious whether others have seen similar shifts, or if open discussion still wins for upper-level seminars.`,
    excerpt:
      "Fragment-style trails made first-year seminar participation more even than open discussion.",
    author: {
      name: "Jordan Hale",
      handle: "jordan-hale",
      role: "Faculty",
    },
    communitySlug: "classroom-discourse",
    tags: ["seminars", "structure", "equity"],
    publishedAt: "2026-07-21T09:05:00Z",
    upvoteCount: 96,
    commentCount: 31,
    viewCount: 2840,
    isTrending: true,
  },
  {
    slug: "reducing-halo-effect-in-scholarship-interviews",
    type: "question",
    title: "What’s the simplest way to reduce halo effect in scholarship interviews?",
    body: `Our interviewers often score the whole candidate from one strong opening answer.

We’ve tried separate score sheets per criterion. Still seeing correlation spikes.

What’s the lightest change that moved the needle for your program?`,
    excerpt:
      "Interviewers still score the whole candidate from one strong answer. Looking for lightest effective fix.",
    author: {
      name: "Priya Nair",
      handle: "priya-nair",
      role: "Scholarship Chair",
    },
    communitySlug: "scholarship-evaluation",
    tags: ["bias", "halo-effect", "interviews"],
    publishedAt: "2026-07-18T16:40:00Z",
    upvoteCount: 87,
    commentCount: 18,
    answerCount: 7,
    viewCount: 2210,
    isTrending: true,
  },
  {
    slug: "when-ai-flags-should-humans-override",
    type: "discussion",
    title: "When AI flags a post, when should humans override—and how do you document it?",
    body: `We’re piloting AI first-pass review on student fragments. The gold-badge / red-flag model is clear, but override policy isn’t.

If a human dismisses a flag, do you require a written rationale? Who can see it? How do you audit consistency?

Sharing our draft policy in the comments—would value pushback.`,
    excerpt:
      "Piloting AI first-pass review; need a clear, auditable human override policy for flags.",
    author: {
      name: "Sam Okonkwo",
      handle: "sam-okonkwo",
      role: "Learning Technologist",
    },
    communitySlug: "ai-moderation",
    tags: ["moderation", "policy", "trust"],
    publishedAt: "2026-07-19T11:15:00Z",
    upvoteCount: 74,
    commentCount: 22,
    viewCount: 1980,
  },
  {
    slug: "recognizing-educators-without-gamifying-teaching",
    type: "question",
    title: "How do you recognize educators without turning teaching into a points chase?",
    body: `We want to credit faculty who design strong discussion trails—without leaderboard theater.

What recognition patterns have felt meaningful (and durable) in your institutions?`,
    excerpt:
      "Want meaningful educator recognition without leaderboard theater. What’s worked?",
    author: {
      name: "Elena Rossi",
      handle: "elena-rossi",
      role: "Dean of Teaching",
    },
    communitySlug: "educator-practice",
    tags: ["recognition", "culture", "faculty"],
    publishedAt: "2026-07-17T08:30:00Z",
    upvoteCount: 112,
    commentCount: 27,
    answerCount: 11,
    viewCount: 3560,
    hasAcceptedAnswer: true,
    acceptedAnswerId: "c-rec-1",
  },
  {
    slug: "async-panels-vs-live-interviews",
    type: "discussion",
    title: "Async panels vs live interviews: what we kept after a year of hybrid",
    body: `We ran hybrid scholarship interviews for a year: async recorded answers + live follow-ups for finalists.

What we kept: async for first round (bias reduction + scheduling). What we dropped: async for finalist deliberations—nuance suffered.

Happy to share rubrics and timing templates.`,
    excerpt:
      "After a year of hybrid interviews: async for first round, live for finalist deliberation.",
    author: {
      name: "Chris Alvarez",
      handle: "chris-alvarez",
      role: "Admissions Lead",
    },
    communitySlug: "admissions-ops",
    tags: ["async", "hybrid", "ops"],
    publishedAt: "2026-07-15T13:00:00Z",
    upvoteCount: 65,
    commentCount: 14,
    viewCount: 1670,
  },
  {
    slug: "best-criteria-for-leadership-potential",
    type: "question",
    title: "What criteria actually predict leadership potential in student interviews?",
    body: `“Leadership” is the fuzziest row on our rubric. We want observable behaviors, not vibes.

If you’ve rewritten this criterion successfully, what behaviors do you score—and what do you refuse to score?`,
    excerpt:
      "Leadership is the fuzziest rubric row. Looking for observable behaviors, not vibes.",
    author: {
      name: "Aisha Rahman",
      handle: "aisha-rahman",
      role: "Committee Member",
    },
    communitySlug: "interview-rubrics",
    tags: ["leadership", "rubrics", "behavior"],
    publishedAt: "2026-07-14T10:10:00Z",
    upvoteCount: 91,
    commentCount: 20,
    answerCount: 8,
    viewCount: 2450,
  },
  {
    slug: "trail-length-sweet-spot",
    type: "discussion",
    title: "The sweet spot for trail length: 4 steps vs 8 vs open-ended",
    body: `Shorter trails get completion. Longer trails get depth. We’ve landed on 5–6 steps for undergrad cohorts.

Curious what lengths work for graduate seminars and workplace learning cohorts.`,
    excerpt:
      "Undergrad cohorts thrive at 5–6 steps. What’s the sweet spot elsewhere?",
    author: {
      name: "Noah Park",
      handle: "noah-park",
      role: "Instructional Designer",
    },
    communitySlug: "classroom-discourse",
    tags: ["trails", "design", "completion"],
    publishedAt: "2026-07-12T15:45:00Z",
    upvoteCount: 53,
    commentCount: 16,
    viewCount: 1420,
  },
];

export const COMMENTS: Comment[] = [
  {
    id: "c-cal-1",
    discussionSlug: "how-do-you-calibrate-interview-panels",
    author: {
      name: "Dr. Lena Ortiz",
      handle: "lena-ortiz",
      role: "Assessment Lead",
    },
    body: `We use a 20-minute async calibration every two weeks:

1. Same 3 anonymized clips
2. Each reviewer scores independently
3. Dashboard shows variance by criterion
4. One 10-minute sync only if variance > threshold

Documented exemplars for “3” and “5” on leadership cut drift by ~40% in a term. No full workshops.`,
    publishedAt: "2026-07-20T16:05:00Z",
    upvoteCount: 86,
    isAccepted: true,
  },
  {
    id: "c-cal-2",
    discussionSlug: "how-do-you-calibrate-interview-panels",
    author: {
      name: "Tom Nguyen",
      handle: "tom-nguyen",
      role: "Committee Chair",
    },
    body: `Agree on exemplars. We also rotate a “shadow scorer” each week—someone who scores but doesn’t vote—to surface blind spots without slowing decisions.`,
    publishedAt: "2026-07-20T18:22:00Z",
    upvoteCount: 31,
  },
  {
    id: "c-cal-2a",
    discussionSlug: "how-do-you-calibrate-interview-panels",
    author: {
      name: "Maya Chen",
      handle: "maya-chen",
      role: "Program Director",
    },
    body: `Shadow scorer is clever—we’ll try that for the leadership row specifically.`,
    publishedAt: "2026-07-20T19:01:00Z",
    upvoteCount: 12,
    parentId: "c-cal-2",
  },
  {
    id: "c-rec-1",
    discussionSlug: "recognizing-educators-without-gamifying-teaching",
    author: {
      name: "Prof. Diane Cole",
      handle: "diane-cole",
      role: "Faculty Senate",
    },
    body: `What worked for us: public case studies, not points. Once a month we publish a short “trail that worked” write-up with the educator’s framing. Optional stipend for the write-up time—not for “winning.”

Peer nomination + editorial curation beats raw engagement metrics.`,
    publishedAt: "2026-07-17T12:40:00Z",
    upvoteCount: 94,
    isAccepted: true,
  },
  {
    id: "c-struct-1",
    discussionSlug: "structured-prompts-beat-open-discussion",
    author: {
      name: "Riley Brooks",
      handle: "riley-brooks",
      role: "Graduate Instructor",
    },
    body: `Same pattern in a methods course. Structure helped first years; for PhD seminars we loosen after week 4 once norms are set.`,
    publishedAt: "2026-07-21T11:20:00Z",
    upvoteCount: 28,
  },
  {
    id: "c-halo-1",
    discussionSlug: "reducing-halo-effect-in-scholarship-interviews",
    author: {
      name: "Hannah Kim",
      handle: "hannah-kim",
      role: "Research Analyst",
    },
    body: `Force criterion-by-criterion scoring *before* an overall rating is visible. Hide the total until all rows are locked. Small UX change, big correlation drop.`,
    publishedAt: "2026-07-18T20:10:00Z",
    upvoteCount: 52,
  },
];

export function getCommunity(slug: string): Community | undefined {
  return COMMUNITIES.find((c) => c.slug === slug);
}

export function getDiscussion(slug: string): Discussion | undefined {
  return DISCUSSIONS.find((d) => d.slug === slug);
}

export function getDiscussionsByCommunity(communitySlug: string): Discussion[] {
  return DISCUSSIONS.filter((d) => d.communitySlug === communitySlug);
}

export function getTrendingDiscussions(limit = 8): Discussion[] {
  return [...DISCUSSIONS]
    .sort((a, b) => b.upvoteCount - a.upvoteCount)
    .slice(0, limit);
}

export function getLatestDiscussions(limit = 12): Discussion[] {
  return [...DISCUSSIONS]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getQuestions(limit = 12): Discussion[] {
  return getLatestDiscussions(50)
    .filter((d) => d.type === "question")
    .slice(0, limit);
}

export function getCommentsForDiscussion(slug: string): Comment[] {
  return COMMENTS.filter((c) => c.discussionSlug === slug).sort(
    (a, b) =>
      Number(Boolean(b.isAccepted)) - Number(Boolean(a.isAccepted)) ||
      b.upvoteCount - a.upvoteCount,
  );
}

export function getAuthor(handle: string): Author | undefined {
  const fromPosts = DISCUSSIONS.find((d) => d.author.handle === handle)?.author;
  if (fromPosts) return fromPosts;
  return COMMENTS.find((c) => c.author.handle === handle)?.author;
}

export function getAuthorHandles(): string[] {
  const handles = new Set<string>();
  for (const d of DISCUSSIONS) handles.add(d.author.handle);
  for (const c of COMMENTS) handles.add(c.author.handle);
  return [...handles];
}

export function getDiscussionsByAuthor(handle: string): Discussion[] {
  return DISCUSSIONS.filter((d) => d.author.handle === handle).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}

export function formatRelativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const hours = Math.max(1, Math.round((now - then) / (1000 * 60 * 60)));
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
