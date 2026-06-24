import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GitPullRequest } from "lucide-react";
import { aiCodingTools } from "@/data/aiCodingTools";

const title = "AI Code Review Tools 2026 | PR Review for AI-Generated Code";
const description = "Compare AI code review tools and workflows for pull requests, generated code, security scanning, review evidence, and GitHub-native AI coding teams.";

const reviewToolSlugs = ["github-copilot-code-review", "semgrep", "github-codeql", "snyk-code", "openai-codex", "claude-code"];
const reviewTools = aiCodingTools.filter((tool) => reviewToolSlugs.includes(tool.slug));

const reviewPatterns = [
  ["Human reviewer plus AI reviewer", "Use Copilot Code Review or a similar assistant to catch common issues, but keep code owners responsible for final approval."],
  ["Security gate after generation", "Run Semgrep, CodeQL, Snyk, or equivalent CI checks after the AI agent creates a pull request."],
  ["Evidence-backed agent report", "Ask terminal or PR agents to include changed files, commands run, tests passed, and known gaps in the pull request summary."],
  ["Small diff policy", "Limit high-autonomy agents to scoped changes so reviewers can understand every file touched."],
  ["No secret exposure", "Reject reviews that require printing tokens, adding debug credential routes, or granting broad production access."],
  ["Deploy smoke before done", "Treat build success as only one gate; production URL, sitemap, canonical, and core user flow checks still matter."],
];

const faqs = [
  {
    question: "What is an AI code review tool?",
    answer: "An AI code review tool uses AI, static analysis, semantic analysis, or automated policy checks to help reviewers evaluate pull requests and AI-generated changes.",
  },
  {
    question: "Can AI review replace human review?",
    answer: "No. AI review is best used as a first-pass assistant and evidence collector. Human reviewers still own architecture, product intent, security judgment, and merge approval.",
  },
  {
    question: "What should teams review in AI-generated code?",
    answer: "Review correctness, tests, security, dependency changes, permissions, data handling, generated files, deployment behavior, and whether the agent actually verified its claims.",
  },
  {
    question: "Which tools are best for GitHub pull requests?",
    answer: "GitHub Copilot Code Review, CodeQL, Semgrep, and Snyk Code are natural options for GitHub-centered teams because they fit pull request, branch protection, and CI workflows.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/ai-code-review-tools/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/ai-code-review-tools/", type: "article" },
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

export default function AiCodeReviewToolsPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">AI Code Review</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">AI code review tools for pull requests</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Compare AI-assisted review, code scanning, and agent verification workflows for teams that ship AI-generated code through GitHub pull requests.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/tools/github-copilot-code-review/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Copilot Code Review</Link>
            <Link href="/ai-coding-tools/compare/github-copilot-code-review-vs-codeql/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Copilot vs CodeQL</Link>
            <Link href="/ai-coding-tools/ai-code-security-tools/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Security tools</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewTools.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <GitPullRequest className="h-6 w-6 text-blue-600" />
              <h2 className="mt-5 text-xl font-bold text-slate-950">{tool.name}</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool.bestFor}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View review fit <ArrowRight className="h-4 w-4" /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Review workflow for AI-generated pull requests</h2>
          <p className="mt-3 max-w-3xl text-slate-600">AI code review works when assistants, scanners, CI, and human reviewers each have a clear job.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviewPatterns.map(([heading, body]) => (
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
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Recommended path</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950">Start with PR review, then add security gates.</h2>
              <p className="mt-3 max-w-3xl text-slate-700">Use AI review for speed, deterministic scanners for risk, and agent permissions rules so reviewers know what the agent was allowed to do.</p>
            </div>
            <Link href="/ai-coding-tools/ai-agent-permissions-checklist/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Open permissions checklist</Link>
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
