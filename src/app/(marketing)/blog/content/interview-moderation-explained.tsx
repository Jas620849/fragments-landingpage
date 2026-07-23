import Link from "next/link";

/**
 * Deep rewrite: bridges scholarship "moderation" keyword to Fragments' real
 * classroom discussion moderation model.
 */
export default function InterviewModerationExplained() {
  return (
    <div className="space-y-8">
      <p>
        In scholarship interviews, “moderation” usually means a chair who keeps time,
        stops panelists from hijacking the room, and protects a consistent question set.
        In classroom discussion—the work Fragments is built for—moderation means something
        adjacent but more continuous: keeping a <strong>trail</strong> readable, sourced,
        and on standard while many people extend it over days.
      </p>
      <p>
        This guide explains both jobs briefly, then focuses on classroom trail moderation:
        what to check first, what humans still own, and how to evaluate discussion quality
        without rewarding volume.
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        Interview chairs vs discussion moderators
      </h2>
      <p>
        An interview chair protects fairness in a short, high-stakes conversation. They
        enforce the script, manage probes, and stop score contamination when panelists
        talk before scoring. That work pairs with{" "}
        <Link
          href="/blog/how-to-reduce-bias-in-scholarship-interviews/"
          className="text-highlight-dark underline"
        >
          panel practices
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/how-to-reduce-bias-in-scholarship-interviews/"
          className="text-highlight-dark underline"
        >
          bias reduction
        </Link>
        .
      </p>
      <p>
        A classroom discussion moderator protects a longer learning arc. Students do not
        get one timed answer; they stack questions, counterpoints, and clarifications.
        Without moderation, trails turn into chat: off-topic branches, unsupported claims,
        and uneven participation that is hard to assess.
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        What Fragments means by a moderated trail
      </h2>
      <p>
        A <strong>fragment</strong> is a tight teaching move: context, sources in line, and
        a real question. A <strong>trail</strong> is the ordered path of follow-ups. Before
        a fragment goes wide, Fragments uses a two-step check: automation first for
        plagiarism and basic validity signals, then human review for judgment calls. Gold
        badges mark a passed first check; repeated human flags can remove a fragment. The
        full rule set lives on{" "}
        <Link href="/how-it-works/" className="text-highlight-dark underline">
          How it works
        </Link>
        .
      </p>
      <p>
        That model is deliberately boring. It is not “AI grades the student.” It is “keep
        low-quality posts from flooding the room so teachers can spend time on teaching.”
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        Classroom scenario: a history trail that stays usable
      </h2>
      <p>
        Imagine an honors U.S. history section. The educator opens with a fragment on a
        primary source and asks which claim the source can actually support. Students
        extend the trail with counter-evidence and clarifications. Moderation here looks
        like:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Rejecting posts that dump an unsourced hot take with no question</li>
        <li>Flagging replies that attack peers instead of claims</li>
        <li>Leaving rigorous disagreement visible so the class can see the argument develop</li>
        <li>
          Not deleting every imperfect answer—imperfect answers are often where learning
          starts
        </li>
      </ul>
      <p>
        Teachers can then assess contribution quality: Did the student cite? Did they
        respond to a peer’s evidence? Did they change a claim when challenged? That is
        different from counting posts. See{" "}
        <Link
          href="/blog/educational-assessment-tools/"
          className="text-highlight-dark underline"
        >
          assessing classroom discussion quality
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-secondary">
        A practical moderation checklist
      </h2>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Define “on standard” before the trail opens.</strong> Share the rubric
          dimensions: evidence, clarity, respect, responsiveness.
        </li>
        <li>
          <strong>Separate first-pass checks from judgment.</strong> Automation can catch
          empty posts and plagiarism signals; humans decide edge cases.
        </li>
        <li>
          <strong>Make flags transparent.</strong> Students should understand why a post
          was flagged—not guess at invisible rules.
        </li>
        <li>
          <strong>Protect the trail’s readability.</strong> Prefer one ordered path over
          ten disconnected chats about the same prompt.
        </li>
        <li>
          <strong>Review outcomes, not vibes.</strong> After a unit, ask: Did quieter
          students get space? Did disagreement stay evidence-based?
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-secondary">Common pitfalls</h2>
      <p>
        Over-moderation kills discussion: if every imperfect draft disappears, students
        stop risking ideas. Under-moderation kills learning: if harassment and
        evidence-free claims dominate, serious students leave. The middle path is
        consistent, published standards plus human review that can explain itself.
      </p>
      <p>
        Another pitfall is treating AI as the teacher. Automation is a screening layer.
        Credit, grades, and pedagogical redirects still belong to educators—and Fragments
        is designed around that division of labor.
      </p>

      <h2 className="text-2xl font-bold text-secondary">If you run interviews instead</h2>
      <p>
        If you landed here looking for scholarship interview chairs, keep these three
        moves: lock the question set, score independently before discussion, and assign a
        chair who protects time and equity. Then read{" "}
        <Link
          href="/blog/structured-vs-unstructured-interviews/"
          className="text-highlight-dark underline"
        >
          structured vs unstructured interviews
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/evaluator-calibration-methods/"
          className="text-highlight-dark underline"
        >
          calibration methods
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-secondary">Where Fragments fits</h2>
      <p>
        Fragments is a classroom discussion platform with guided trails and two-step
        moderation—not a scholarship scoring SaaS. If you want discussion that stays
        rigorous without turning teaching into feed management, start with{" "}
        <Link
          href="/services/classroom-discussion-platform/"
          className="text-highlight-dark underline"
        >
          the classroom discussion overview
        </Link>{" "}
        or{" "}
        <Link href="/contact/" className="text-highlight-dark underline">
          contact us
        </Link>{" "}
        about a pilot.
      </p>
    </div>
  );
}
