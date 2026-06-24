import type { Metadata } from "next";
import Link from "next/link";
import { aiCodingTools, getAiCodingTool } from "@/data/aiCodingTools";

const title = "Best Claude Code Alternatives for Agentic Coding 2026";
const description = "Compare Claude Code alternatives including Cursor, Cline, Aider, OpenHands, GitHub Copilot, Windsurf, and Devin for terminal, IDE, open-source, and autonomous coding workflows.";
const canonical = "https://bestmcpservers.com/ai-coding-tools/alternatives/claude-code/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const alternativeSlugs = ["cursor", "cline", "aider", "openhands", "github-copilot", "windsurf", "devin"];

export default function ClaudeCodeAlternativesPage() {
  const claudeCode = getAiCodingTool("claude-code");
  const alternatives = alternativeSlugs.map((slug) => getAiCodingTool(slug)).filter(Boolean);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Best Claude Code alternatives for agentic coding</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Claude Code is strong for terminal-first repo work, but some teams need an AI IDE, open-source control, GitHub-native rollout, or a hosted autonomous agent.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {claudeCode && (
          <div className="mb-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">When Claude Code is still the right pick</h2>
            <p className="mt-3 text-slate-700">{claudeCode.bestFor}</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((tool, index) => (
            <Link key={tool!.slug} href={`/ai-coding-tools/tools/${tool!.slug}/`} className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <p className="text-sm font-semibold text-blue-700">Alternative #{index + 1}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{tool!.name}</h2>
              <p className="mt-2 font-medium text-slate-600">{tool!.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool!.bestFor}</p>
              <p className="mt-5 text-sm font-semibold text-blue-700">Read {tool!.name} review</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Need a cheaper or more controllable stack?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Compare open-source agents, IDE-native assistants, and hosted autonomous agents before committing to one workflow.</p>
          </div>
          <Link href="/ai-coding-tools/open-source-ai-coding-agents/" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100">View open-source agents</Link>
        </div>
      </section>
    </main>
  );
}
