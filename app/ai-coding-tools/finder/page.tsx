import type { Metadata } from "next";
import Link from "next/link";
import { aiCodingTools } from "@/data/aiCodingTools";

const title = "AI Coding Tools Finder | Choose Cursor, Claude Code, Copilot, or Windsurf";
const description = "Answer workflow questions and choose the best AI coding tool for your repo: AI IDE, terminal coding agent, open-source assistant, or PR agent.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/finder/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/finder/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const recommendations = [
  { need: "I can switch editors and want the most AI-native flow", pick: "Cursor", slug: "cursor", reason: "Best balance of AI editor UX, repo chat, tab completion, and agent mode." },
  { need: "I want an agent to inspect the repo and run commands", pick: "Claude Code", slug: "claude-code", reason: "Best fit for terminal-first implementation with verification evidence." },
  { need: "My team already uses GitHub and multiple IDEs", pick: "GitHub Copilot", slug: "github-copilot", reason: "Lowest-friction rollout for teams standardized on GitHub." },
  { need: "I want autonomous IDE work with competitive pricing", pick: "Windsurf", slug: "windsurf", reason: "Cascade is strong for agentic IDE task execution." },
  { need: "I want high-autonomy delegated engineering tickets", pick: "Devin", slug: "devin", reason: "Best fit when the team wants a software engineering agent to attempt scoped tasks asynchronously." },
  { need: "I want to build and deploy small apps from prompts", pick: "Replit Agent", slug: "replit-agent", reason: "Best hosted prompt-to-app path when fast prototypes and demos matter more than local repo control." },
  { need: "I am evaluating agent platforms for an engineering org", pick: "Factory", slug: "factory", reason: "Best fit when the buying question is workflow automation and governance, not only autocomplete." },
  { need: "I want open-source VS Code tool use with approvals", pick: "Cline", slug: "cline", reason: "Best fit for VS Code users who want explicit control over file, terminal, and browser actions." },
  { need: "I prefer open source and terminal control", pick: "Aider", slug: "aider", reason: "Good for git-visible terminal edits with provider flexibility." },
  { need: "I need customizable context and model control", pick: "Continue", slug: "continue", reason: "Best open-source IDE assistant for internal AI platform customization." },
];

export default function AiCodingToolsFinderPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">AI Coding Tools Finder</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Choose the right AI coding tool by workflow, not hype.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Use this static finder to map your team constraints to an AI IDE, terminal coding agent, PR agent, or open-source assistant.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item) => (
            <Link key={item.need} href={`/ai-coding-tools/tools/${item.slug}/`} className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <p className="text-sm font-semibold text-blue-700">If: {item.need}</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">Pick {item.pick}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.reason}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Decision checklist</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Editor policy", "Can the team switch editors, or must the tool work inside VS Code, JetBrains, Vim, or existing workflows?"],
              ["Execution rights", "Can the AI run commands, edit files, access browsers, or only suggest code?"],
              ["Privacy review", "Will code leave the environment, and do you need self-hosted or open-source controls?"],
              ["Verification", "Do you have tests, preview deploys, or review gates that can catch agent mistakes?"],
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
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/ai-coding-tools/best-ai-coding-agent-for-nextjs/" className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg">
            <p className="text-sm font-semibold text-blue-700">Framework use case</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Best AI coding agent for Next.js</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Choose tools for App Router projects, static export checks, Cloudflare Pages deploys, and MCP-backed QA.</p>
          </Link>
          <Link href="/ai-coding-tools/compare/claude-code-vs-cursor/" className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg">
            <p className="text-sm font-semibold text-blue-700">High-intent comparison</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Claude Code vs Cursor</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Compare terminal-first agent workflows with AI-native editor workflows before choosing your default stack.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">All tools covered</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiCodingTools.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="rounded-2xl border border-slate-200 p-5 hover:border-blue-300">
              <h3 className="font-bold text-slate-950">{tool.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{tool.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Need the implementation workflow too?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Use the free finder to choose a tool, then unlock Pro workflow packs for repo onboarding, feature shipping, PR review, and live verification.</p>
          </div>
          <Link href="/pricing/" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100">Compare Pro plans</Link>
          <Link href="/ai-coding-tools/cost-calculator/" className="rounded-xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Estimate team cost</Link>
        </div>
      </section>
    </main>
  );
}
