import type { Metadata } from "next";
import Link from "next/link";
import { aiCodingTools } from "@/data/aiCodingTools";

const title = "Best AI Coding Tools List 2026 | Cursor, Claude Code, Copilot";
const description = "Browse agentic AI coding tools by category, pricing, workflow fit, rating, and MCP context strategy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/tools/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/tools/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AiCodingToolsListPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Tools Directory</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Best AI coding tools list</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A curated directory of AI IDEs, terminal agents, PR agents, open-source coding assistants, and MCP-ready developer workflows.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiCodingTools.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">★ {tool.rating}</span>
                <span className="text-xs text-slate-500">{tool.categories.join(" · ")}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-950 group-hover:text-blue-700">{tool.name}</h2>
              <p className="mt-2 font-medium text-slate-600">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.workflowFit.slice(0, 3).map((fit) => (
                  <span key={fit} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{fit}</span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-blue-700">Read review →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
