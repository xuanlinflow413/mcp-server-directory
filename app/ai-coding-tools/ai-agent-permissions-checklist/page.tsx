import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";

const title = "AI Agent Permissions Checklist 2026 | Safe Coding Agent Access";
const description = "Use this AI agent permissions checklist to decide what coding agents can access: repos, files, GitHub, browsers, terminals, secrets, CI, deployments, and MCP servers.";

const permissionAreas = [
  {
    icon: ShieldCheck,
    title: "Repository scope",
    items: ["Grant access to the smallest repo or workspace needed", "Block unrelated monorepos and private customer data", "Require a changed-files summary before review"],
  },
  {
    icon: KeyRound,
    title: "Secrets and credentials",
    items: ["Never let agents print tokens or environment variables", "Use write-only secret stores when possible", "Review any new debug endpoint before deploy"],
  },
  {
    icon: LockKeyhole,
    title: "Tool and MCP access",
    items: ["Enable only the MCP servers required for the task", "Separate read-only tools from write/deploy tools", "Log tool calls and verification evidence"],
  },
];

const checklist = [
  ["Files", "Can the agent read and edit only the project files required for this task?"],
  ["Terminal", "Can commands run without unrestricted shell access to secrets or production systems?"],
  ["GitHub", "Can the agent open or update a pull request without bypassing branch protection?"],
  ["Browser", "Can browser checks run against public or staging URLs without exposing admin sessions?"],
  ["Databases", "Is database access read-only, scoped, audited, and separated from production writes?"],
  ["Deployments", "Does deployment require a human-approved command, CI gate, or separate service account?"],
  ["Security scanners", "Do Semgrep, CodeQL, Snyk, or equivalent checks run outside the agent's control?"],
  ["Evidence", "Does the final report include commands run, build output, scan status, URLs checked, and known gaps?"],
];

const faqs = [
  {
    question: "What permissions should an AI coding agent have?",
    answer: "Start with read access to the target repo, scoped file edits, test/build commands, and issue or documentation context. Add GitHub, browser, database, or deployment access only when the task truly needs it.",
  },
  {
    question: "Should coding agents access production secrets?",
    answer: "No by default. Production secrets should live in controlled secret stores and should not be printed, logged, copied into code, or exposed through debug routes for agent convenience.",
  },
  {
    question: "How do MCP servers change agent permissions?",
    answer: "MCP makes tool access explicit. That helps teams grant a coding agent a narrow GitHub, filesystem, browser, docs, or CI capability instead of giving it a broad, unclear execution environment.",
  },
  {
    question: "Who should approve AI agent deployments?",
    answer: "Production deployments should be approved through normal release controls: CI, branch protection, deployment tokens, service accounts, and human review for high-risk changes.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/ai-agent-permissions-checklist/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/ai-agent-permissions-checklist/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AiAgentPermissionsChecklistPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Agent Permissions</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">AI agent permissions checklist for coding teams</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Decide what an AI coding agent can read, edit, run, scan, and deploy before it touches real repositories, secrets, databases, or production workflows.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/ai-code-security-tools/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Security tools</Link>
            <Link href="/ai-coding-tools/ai-code-review-tools/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Review tools</Link>
            <Link href="/mcp-server-security/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">MCP security guide</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {permissionAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-6 w-6 text-blue-600" />
                <h2 className="mt-5 text-xl font-bold text-slate-950">{area.title}</h2>
                <ul className="mt-5 space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Permission questions before enabling a coding agent</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Use these questions during vendor review, internal rollout, or MCP server configuration.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {checklist.map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-950">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">Low-risk starting policy</h2>
            <p className="mt-3 text-slate-600">Allow read access, scoped file edits, tests, builds, and pull request creation. Keep secrets, database writes, billing, and production deploys behind separate approval.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/tools/claude-code/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Claude Code review</Link>
              <Link href="/ai-coding-tools/tools/cline/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Cline review</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">High-risk permissions</h2>
            <p className="mt-3 text-slate-600">Treat production secrets, database mutations, deployment tokens, payment flows, and admin browser sessions as separate capabilities with explicit logging and human approval.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/tools/semgrep/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Semgrep review</Link>
              <Link href="/ai-coding-tools/tools/github-codeql/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">CodeQL review</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
