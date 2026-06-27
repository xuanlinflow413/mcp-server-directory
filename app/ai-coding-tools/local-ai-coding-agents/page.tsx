import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getAiCodingTool } from "@/data/aiCodingTools";

const title = "Local AI Coding Agents 2026 | Private Repo and BYOK Guide";
const description = "Compare local AI coding agents for private repos, BYOK workflows, terminal edits, VS Code approvals, open-source control, and MCP-ready verification.";
const canonical = "https://bestmcpservers.com/ai-coding-tools/local-ai-coding-agents/";

const localAgentSlugs = ["cline", "aider", "continue", "openhands", "claude-code"];

const evaluation = [
  ["Runs near the repo", "Prefer workflows that operate in your local workspace, terminal, IDE, or a controlled self-hosted sandbox."],
  ["BYOK or model choice", "Check whether the tool can use your chosen model provider, local inference, or internal gateway without hard vendor lock-in."],
  ["Private repo controls", "Separate read access, file edits, terminal commands, GitHub access, browser actions, package installs, and deploy permissions."],
  ["Git-visible changes", "Use agents that produce clear diffs, scoped commits, command output, and repeatable verification evidence."],
  ["MCP boundary", "Expose docs, GitHub issues, filesystem paths, logs, and browser checks through least-privilege MCP servers when needed."],
  ["Team rollout", "Document prompts, approval rules, code owner gates, and fallback paths before allowing agents on sensitive repos."],
];

const faqs = [
  {
    question: "What is a local AI coding agent?",
    answer: "A local AI coding agent works from a developer-controlled workspace, terminal, IDE, or self-hosted environment instead of only operating inside a hosted SaaS editor.",
  },
  {
    question: "Which AI coding agents are best for private repos?",
    answer: "Cline, Aider, Continue, OpenHands, and terminal-first Claude Code workflows are strong candidates when private repo control, diffs, approvals, and provider choice matter.",
  },
  {
    question: "Does local mean fully offline?",
    answer: "Not always. Many local agents still call hosted model APIs. For stricter privacy, look for BYOK, local model support, internal gateways, and self-hosted workspaces.",
  },
  {
    question: "Where does MCP help local coding agents?",
    answer: "MCP lets teams expose controlled tools such as filesystem, GitHub, docs, browser QA, logs, and deployment checks without giving every agent broad direct access.",
  },
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
    datePublished: "2026-06-27",
    dateModified: "2026-06-27",
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

export default function LocalAiCodingAgentsPage() {
  const tools = localAgentSlugs.map((slug) => getAiCodingTool(slug)).filter(Boolean);

  return (
    <main className="bg-white">
      {schema.map((item, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Local AI Coding Agents</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">Compare local AI coding agents for private repo work.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Shortlist local, open-source, BYOK, and terminal-first coding agents when privacy, repo control, approval gates, and evidence matter more than a polished hosted demo.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/open-source-ai-coding-agents/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Open-source agents</Link>
            <Link href="/ai-coding-tools/compare/cline-vs-aider/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Cline vs Aider</Link>
            <Link href="/ai-coding-tools/ai-coding-agents-with-mcp-support/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">MCP support</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <table className="w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-5 py-4 font-semibold">Agent</th>
                <th className="px-5 py-4 font-semibold">Local fit</th>
                <th className="px-5 py-4 font-semibold">Model control</th>
                <th className="px-5 py-4 font-semibold">Private repo angle</th>
                <th className="px-5 py-4 font-semibold">MCP fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              {tools.map((tool) => (
                <tr key={tool!.slug}>
                  <td className="px-5 py-4"><Link href={`/ai-coding-tools/tools/${tool!.slug}/`} className="font-semibold text-blue-700 hover:text-blue-900">{tool!.name}</Link></td>
                  <td className="px-5 py-4">{tool!.ideSupport}</td>
                  <td className="px-5 py-4">{tool!.modelSupport}</td>
                  <td className="px-5 py-4">{tool!.privacy}</td>
                  <td className="px-5 py-4">{tool!.mcpSupport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Local agent evaluation checklist</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Treat local coding agents as engineering infrastructure. The winning setup is the one your team can govern and verify.</p>
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
