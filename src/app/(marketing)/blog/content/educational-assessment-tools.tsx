import Link from "next/link";

/**
 * Deep rewrite: classroom discussion assessment instead of generic tool roundup.
 */
export default function EducationalAssessmentTools() {
  return (
    <div className="space-y-8">
      <p>
        Most “educational assessment tools” lists mix LMS quizzes, plagiarism checkers,
        and analytics dashboards. Teachers evaluating discussion need a different
        toolkit: ways to see whether students are thinking with evidence over time—not
        whether they clicked submit.
      </p>
      <p>
        This guide focuses on assessing <strong>classroom discussion quality</strong> on
        structured trails: what to look for, how to score it, and common mistakes when
        volume gets mistaken for learning.
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        What “good discussion” looks like on a trail
      </h2>
      <p>
        On a fragment trail, quality shows up as cumulative understanding. A strong
        contribution usually does at least one of these:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Adds a source or clarifies what a source can and cannot support</li>
        <li>Asks a follow-up that advances the question instead of restarting it</li>
        <li>Responds to a peer’s claim with evidence, not status</li>
        <li>Revises an earlier idea when new evidence arrives</li>
      </ul>
      <p>
        Weak contribution is not “short.” Short clarifications can be excellent. Weak
        contribution is off-topic noise, unsupported certainty, or replies that ignore
        the trail already built.
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        A simple discussion rubric teachers can use tomorrow
      </h2>
      <p>Score each dimension 1–4 with short anchors:</p>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Evidence:</strong> no source → named source used accurately → source
          weighed (limits noted)
        </li>
        <li>
          <strong>Responsiveness:</strong> ignores peers → mentions peers → builds on or
          challenges a peer claim
        </li>
        <li>
          <strong>Clarity:</strong> unclear claim → clear claim → clear claim plus why it
          matters to the prompt
        </li>
        <li>
          <strong>Intellectual honesty:</strong> doubles down without reason →
          acknowledges uncertainty → updates when warranted
        </li>
      </ol>
      <p>
        Keep the sheet short. Rubrics that try to score twelve virtues become theater.
        For rubric construction habits that transfer from interviews to classroom work,
        see{" "}
        <Link
          href="/blog/building-evaluation-rubrics/"
          className="text-highlight-dark underline"
        >
          building evaluation rubrics
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        Grade-band considerations
      </h2>
      <p>
        Middle school trails often need tighter prompts and shorter expected replies.
        High school and AP sections can demand source quality and counterargument.
        University seminars can require students to moderate stretches of the trail
        themselves. Adjust anchors—not the core idea that discussion is evidence work.
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        Subject examples
      </h2>
      <p>
        <strong>History:</strong> score whether students distinguish a source’s claim
        from their own inference.
      </p>
      <p>
        <strong>Science:</strong> score experimental design questions and whether
        students separate observation from interpretation.
      </p>
      <p>
        <strong>Literature:</strong> score close reading: does the reply point to a
        line, or only to a vibe about the character?
      </p>

      <h2 className="text-2xl font-bold text-secondary">Pitfalls</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Counting posts instead of scoring the rubric</li>
        <li>Rewarding speed and length over revision</li>
        <li>Invisible moderation rules that students cannot learn from</li>
        <li>Using AI grades as final marks without a human review step</li>
      </ul>

      <h2 className="text-2xl font-bold text-secondary">
        How Fragments supports this assessment
      </h2>
      <p>
        Fragments keeps discussion in an ordered trail with AI + human quality checks, so
        teachers can see how understanding developed and who contributed rigor. It does
        not replace your rubric. It makes the evidence of discussion easier to review.
        Learn more on{" "}
        <Link
          href="/services/classroom-discussion-platform/"
          className="text-highlight-dark underline"
        >
          classroom discussion
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/interview-moderation-explained/"
          className="text-highlight-dark underline"
        >
          discussion moderation
        </Link>
        .
      </p>
    </div>
  );
}
