import type { Metadata } from "next";
import Link from "next/link";
import { aiCodingComparisons, aiCodingFaqs, aiCodingTools } from "@/data/aiCodingTools";

const title = "Agentic AI Coding Tools Directory 2026 | BestMCPServers";
const description = "Compare the best agentic AI coding tools: Cursor, Claude Code, GitHub Copilot, Windsurf, OpenAI Codex, Devin, Replit Agent, Factory, Cline, Aider, and Continue. Find IDE agents, terminal agents, PR agents, and MCP-ready workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: "https://bestmcpservers.com/ai-coding-tools/",
  mainEntity: aiCodingTools.map((tool) => ({
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    url: `https://bestmcpservers.com/ai-coding-tools/tools/${tool.slug}/`,
  })),
};

export default function AiCodingToolsPage() {
  const topTools = aiCodingTools.slice(0, 5);

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Agentic AI Coding Tools</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
            Find the best AI coding tool for your repo, editor, and agent workflow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare Cursor, Claude Code, GitHub Copilot, Windsurf, OpenAI Codex, Aider, and Continue by workflow fit, pricing, autonomy, and MCP context strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/tools/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Browse tools</Link>
            <Link href="/ai-coding-tools/finder/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Use the finder</Link>
            <Link href="/ai-coding-tools/cost-calculator/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Cost calculator</Link>
            <Link href="/ai-coding-tools/compare/claude-code-vs-cursor/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Claude Code vs Cursor</Link>
            <Link href="/ai-coding-tools/best-ai-coding-agent-for-nextjs/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Best for Next.js</Link>
            <Link href="/ai-coding-tools/long-horizon-coding-agents/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Long-horizon agents</Link>
            <Link href="/ai-coding-tools/large-codebase-ai-coding-agent/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Large codebases</Link>
            <Link href="/ai-coding-tools/ai-code-security-tools/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Code security</Link>
            <Link href="/ai-coding-tools/ai-code-review-tools/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Code review</Link>
            <Link href="/ai-coding-tools/ai-agent-permissions-checklist/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Agent permissions</Link>
            <Link href="/ai-coding-tools/open-source-ai-coding-agents/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Open source agents</Link>
            <Link href="/ai-coding-tools/alternatives/claude-code/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Claude Code alternatives</Link>
            <Link href="/ai-coding-tools/alternatives/devin/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Devin alternatives</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          {topTools.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">★ {tool.rating}</span>
                <span className="text-xs text-slate-500">{tool.categories[0]}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-950">{tool.name}</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Choose by workflow</h2>
            <p className="mt-3 text-slate-600">The best agentic AI coding tool depends less on benchmark hype and more on where the agent is allowed to work.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
            {[
              ["AI-native IDE", "Cursor and Windsurf are best when developers can live inside an AI-first editor."],
              ["Terminal coding agent", "Claude Code and Aider fit repo-level tasks where command output and tests matter."],
              ["Team rollout", "GitHub Copilot is easiest when the team already uses GitHub and existing IDEs."],
              ["PR delegation", "OpenAI Codex-style workflows work best with scoped tickets, tests, and review gates."],
              ["Budget planning", "Use the AI coding tool cost calculator before rolling seats out across an engineering team."],
            ].map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-950">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Use-case guide</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950">Securing AI-generated code?</h2>
              <p className="mt-3 max-w-3xl text-slate-700">Compare code security tools, AI review workflows, and agent permission rules before giving coding agents repository, GitHub, CI, or deployment access.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/ai-code-security-tools/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Security tools</Link>
              <Link href="/ai-coding-tools/ai-code-review-tools/" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Review tools</Link>
              <Link href="/ai-coding-tools/ai-agent-permissions-checklist/" className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">Permissions</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Popular comparisons</h2>
            <p className="mt-2 text-slate-600">Compare agentic tools by context, execution model, and MCP fit.</p>
          </div>
          <Link href="/ai-coding-tools/tools/" className="text-sm font-semibold text-blue-700 hover:text-blue-900">View all tools →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {aiCodingComparisons.map((comparison) => (
            <Link key={comparison.slug} href={`/ai-coding-tools/compare/${comparison.slug}/`} className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-950">{comparison.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{comparison.description}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700">Read comparison →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {aiCodingFaqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
