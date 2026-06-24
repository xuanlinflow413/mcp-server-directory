import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getAiCodingTool } from "@/data/aiCodingTools";

const title = "Open Source AI Coding Agents 2026 | Cline, Aider, Continue, OpenHands";
const description = "Compare open-source AI coding agents including Cline, Aider, Continue, and OpenHands by IDE support, terminal workflow, model flexibility, privacy, and MCP fit.";
const canonical = "https://bestmcpservers.com/ai-coding-tools/open-source-ai-coding-agents/";

const openSourceSlugs = ["cline", "aider", "continue", "openhands"];
const evaluation = [
  ["Repo access", "Decide whether the agent can read the whole repo, selected folders, generated files, secrets, and private docs."],
  ["Model control", "Check whether you can choose hosted models, local models, or internal inference for sensitive code."],
  ["Tool permissions", "Review terminal, browser, filesystem, GitHub, package manager, and deployment permissions separately."],
  ["Review evidence", "Require diffs, command output, tests, and deployment checks before merging agent-authored changes."],
  ["MCP fit", "Use MCP servers to expose docs, GitHub, filesystem, browser QA, and release tools through auditable boundaries."],
  ["Team support", "Plan onboarding, prompt templates, code owner rules, and fallback paths when an agent gets stuck."],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  mainEntityOfPage: canonical,
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: { "@type": "Organization", name: "BestMCPServers" },
  publisher: { "@type": "Organization", name: "BestMCPServers" },
};

export default function OpenSourceAiCodingAgentsPage() {
  const tools = openSourceSlugs.map((slug) => getAiCodingTool(slug)).filter(Boolean);

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Open Source Agents</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">Compare open-source AI coding agents for real repo work.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Shortlist Cline, Aider, Continue, and OpenHands when you need provider flexibility, local control, auditable diffs, or self-hosted agent workflows.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/compare/cline-vs-aider/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Cline vs Aider</Link>
            <Link href="/ai-coding-tools/tools/openhands/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">OpenHands review</Link>
            <Link href="/ai-coding-tools/cost-calculator/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Estimate cost</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link key={tool!.slug} href={`/ai-coding-tools/tools/${tool!.slug}/`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <p className="text-sm font-semibold text-blue-700">{tool!.categories.join(" / ")}</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{tool!.name}</h2>
              <p className="mt-2 font-medium text-slate-600">{tool!.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool!.bestFor}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Read review <ArrowRight className="h-4 w-4" /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Open-source agent evaluation checklist</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Open source reduces vendor lock-in, but it increases responsibility for permissions, model routing, hosting, and verification.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {evaluation.map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="mt-4 font-semibold text-slate-950">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Pair open-source agents with governed tools.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">MCP helps teams expose only the repo, docs, browser checks, and deployment actions an agent needs for a specific workflow.</p>
          </div>
          <Link href="/guides/agent-identity-permissions-temporary-accounts/" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100">Review permissions</Link>
        </div>
      </section>
    </main>
  );
}
