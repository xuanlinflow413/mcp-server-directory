import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const title = "Long-Horizon Coding Agents 2026 | Workflow Guide";
const description = "Compare long-horizon coding agents for multi-step repo work, issue delegation, tests, review gates, permissions, and MCP-backed engineering workflows.";
const canonical = "https://bestmcpservers.com/ai-coding-tools/long-horizon-coding-agents/";

const agentPatterns = [
  {
    name: "Terminal coding agents",
    examples: "Claude Code, Aider, Codex CLI-style workflows",
    fit: "Best when the agent must inspect a repo, edit files, run commands, and return evidence.",
    href: "/ai-coding-tools/tools/claude-code/",
  },
  {
    name: "AI-native IDE agents",
    examples: "Cursor, Windsurf, Cline",
    fit: "Best when the user stays in the editor and wants fast multi-file iteration with visible diffs.",
    href: "/ai-coding-tools/tools/cursor/",
  },
  {
    name: "PR and ticket agents",
    examples: "OpenAI Codex, Devin, Factory-style platforms",
    fit: "Best when tasks are scoped as issues, reviewed as diffs, and measured by tests or deployment checks.",
    href: "/ai-coding-tools/tools/openai-codex/",
  },
];

const checklist = [
  ["Task boundary", "Write a narrow issue with success criteria, files in scope, constraints, and non-goals."],
  ["Repo context", "Give the agent docs, test commands, deploy constraints, and relevant architecture notes before edits."],
  ["Permission tier", "Start with read, branch edits, and tests; keep merge, deploy, secrets, and billing as approvals."],
  ["Verification loop", "Require build output, test results, screenshots, URL checks, or diff evidence before accepting work."],
  ["Human review", "Treat long-horizon agents as implementation assistants, not unreviewed production owners."],
  ["Monitoring", "Log tool calls, command output, cost, failures, approval decisions, and final artifacts."],
];

const faqs = [
  { question: "What is a long-horizon coding agent?", answer: "A long-horizon coding agent works through multi-step engineering tasks such as repo investigation, edits, tests, fixes, and reporting instead of only completing a single line or short prompt." },
  { question: "Which AI coding tools are best for long-horizon tasks?", answer: "Claude Code, OpenAI Codex-style workflows, Devin, Factory, Cursor, Windsurf, Cline, and Aider can all fit long-horizon work depending on whether the team prefers terminal, IDE, cloud workspace, or PR-based delegation." },
  { question: "How do MCP servers help long-horizon coding agents?", answer: "MCP servers can provide controlled access to GitHub issues, docs, filesystem context, browser QA, deployment checks, and logs so the agent has useful evidence without broad uncontrolled access." },
  { question: "Are long-horizon coding agents safe for production repos?", answer: "They can be useful, but production repos need scoped permissions, branch isolation, test requirements, human review, and explicit approvals for merge, deploy, destructive, or credential-related actions." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    datePublished: "2026-06-23",
    dateModified: "2026-06-23",
    author: { "@type": "Organization", name: "BestMCPServers" },
    publisher: { "@type": "Organization", name: "BestMCPServers" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function LongHorizonCodingAgentsPage() {
  return (
    <main className="bg-white">
      {schema.map((item, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Long-Horizon Coding Agents</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">Choose long-horizon coding agents for real repo work.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use this guide to compare terminal agents, IDE agents, PR agents, and MCP-backed workflows for tasks that span files, commands, tests, review, and deployment evidence.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/finder/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Use the finder</Link>
            <Link href="/guides/agent-identity-permissions-temporary-accounts/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Permission guide</Link>
            <Link href="/ai-coding-tools/cost-calculator/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Estimate cost</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {agentPatterns.map((pattern) => (
            <Link key={pattern.name} href={pattern.href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <p className="text-sm font-semibold text-blue-700">{pattern.examples}</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{pattern.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{pattern.fit}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View example <ArrowRight className="h-4 w-4" /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Long-horizon workflow checklist</h2>
          <p className="mt-3 max-w-3xl text-slate-600">The winning tool is the one that keeps scope, permissions, and verification visible while the agent works through the task.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checklist.map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="mt-4 font-semibold text-slate-950">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">Best default for solo builders</h2>
            <p className="mt-3 text-slate-600">Use Cursor or Windsurf for fast editor iteration, then use Claude Code or Aider when the task needs terminal evidence, build output, and deployment checks.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/tools/cursor/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Cursor</Link>
              <Link href="/ai-coding-tools/tools/claude-code/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Claude Code</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">Best default for teams</h2>
            <p className="mt-3 text-slate-600">Start with issue templates, branch isolation, code owners, CI checks, and approval rules before increasing autonomy for PR or cloud coding agents.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/tools/openai-codex/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">OpenAI Codex</Link>
              <Link href="/guides/agent-security-guide/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Agent security</Link>
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
