import type { Metadata } from "next";
import Link from "next/link";
import { aiCodingTools, getAiCodingTool } from "@/data/aiCodingTools";

const title = "Best Cursor Alternatives for Agentic AI Coding 2026";
const description = "Compare the best Cursor alternatives: Claude Code, GitHub Copilot, Windsurf, OpenAI Codex, Aider, and Continue for AI coding workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/alternatives/cursor/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/alternatives/cursor/", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function CursorAlternativesPage() {
  const cursor = getAiCodingTool("cursor");
  const alternatives = aiCodingTools.filter((tool) => tool.slug !== "cursor");

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← AI coding tools</Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Best Cursor alternatives for agentic AI coding</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Cursor is a strong AI-first IDE, but some teams need a terminal agent, GitHub-native rollout, open-source control, or a different autonomy model.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {cursor && (
          <div className="mb-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">When Cursor is still the right pick</h2>
            <p className="mt-3 text-slate-700">{cursor.bestFor}</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <p className="text-sm font-semibold text-blue-700">Alternative #{alternatives.indexOf(tool) + 1}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{tool.name}</h2>
              <p className="mt-2 font-medium text-slate-600">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool.bestFor}</p>
              <p className="mt-5 text-sm font-semibold text-blue-700">Read {tool.name} review →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Turn the alternative shortlist into an implementation workflow.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">BestMCPServers Pro adds copy-ready workflow packs for Claude Code, Cursor, Codex, PR review, browser QA, and production verification.</p>
          </div>
          <Link href="/pricing/" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100">Unlock workflow packs</Link>
        </div>
      </section>
    </main>
  );
}
