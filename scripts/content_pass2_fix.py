from pathlib import Path
import re

dir = Path("src/app/(marketing)/blog/content")
for p in dir.glob("*.tsx"):
    t = p.read_text()
    orig = t
    if 'import Link from "next/link";' in t and "<Link" not in t:
        t = t.replace('import Link from "next/link";\n', "")
    if t.startswith("/* eslint-disable react/no-unescaped-entities */\n"):
        if not re.search(r">[^<]*'[a-z]", t) and "\\'" not in t:
            t = t[len("/* eslint-disable react/no-unescaped-entities */\n") :]
    if t != orig:
        p.write_text(t)
        print("fixed", p.name)

# Training opening
p = Path("src/app/(marketing)/blog/content/interviewer-training-best-practices.tsx")
t = p.read_text()
if "import Link" not in t:
    if t.startswith("/* eslint-disable"):
        t = t.replace(
            "/* eslint-disable react/no-unescaped-entities */\n",
            '/* eslint-disable react/no-unescaped-entities */\nimport Link from "next/link";\n',
            1,
        )
    else:
        t = 'import Link from "next/link";\n' + t

start = t.find('<h2 className="text-2xl font-bold text-secondary">The Critical Role of Interviewer Training</h2>')
end = t.find('<h2 className="text-2xl font-bold text-secondary">Core Components of Interviewer Training</h2>')
if start >= 0 and end > start:
    replacement = '''<h2 className="text-2xl font-bold text-secondary">Train interviewers to use the sheet—not their gut</h2>
      <p>
        A rubric without training becomes optional decoration. Interviewers need practice
        asking the locked questions, scoring against anchors, and catching their own
        shortcuts. This guide is a training outline: what to cover in the first session,
        which drills change behavior, and how often to recalibrate. Pair it with{" "}
        <Link href="/blog/evaluator-calibration-methods/" className="text-highlight-dark underline">
          calibration methods
        </Link>{" "}
        and{" "}
        <Link href="/blog/common-interview-scoring-mistakes/" className="text-highlight-dark underline">
          scoring mistakes
        </Link>
        .
      </p>

      '''
    t = t[:start] + replacement + t[end:]
    p.write_text(t)
    print("rewrote training opening")
else:
    print("training markers missing", start, end)

# Equity opening
p = Path("src/app/(marketing)/blog/content/scholarship-equity-inclusion.tsx")
t = p.read_text()
if "import Link" not in t:
    t = 'import Link from "next/link";\n' + t
start = t.find('<h2 className="text-2xl font-bold text-secondary">Advancing Equity and Inclusion in Scholarship Programs</h2>')
end = t.find('<h2 className="text-2xl font-bold text-secondary">Understanding Equity vs. Equality</h2>')
if start >= 0 and end > start:
    replacement = '''<h2 className="text-2xl font-bold text-secondary">Equity shows up in the process—not the brochure</h2>
      <p>
        Equity work in scholarship selection is concrete: which criteria you publish, who
        sits on the panel, whether outreach reaches beyond the usual feeder schools, and
        whether score gaps get reviewed after the cycle. Slogans do not change outcomes;
        process design does. For interview-level bias controls, read{" "}
        <Link href="/blog/how-to-reduce-bias-in-scholarship-interviews/" className="text-highlight-dark underline">
          how to reduce bias in scholarship interviews
        </Link>
        .
      </p>

      '''
    t = t[:start] + replacement + t[end:]
    p.write_text(t)
    print("rewrote equity opening")
else:
    print("equity markers missing", start, end)
