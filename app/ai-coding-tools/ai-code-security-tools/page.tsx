import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { aiCodingTools } from "@/data/aiCodingTools";

const title = "AI Code Security Tools 2026 | Scan AI-Generated Code";
const description = "Compare AI code security tools for reviewing AI-generated code: Semgrep, Snyk Code, GitHub CodeQL, GitHub Copilot Code Review, and MCP-ready security workflows.";

const securityToolSlugs = ["semgrep", "snyk-code", "github-codeql", "github-copilot-code-review"];
const securityTools = aiCodingTools.filter((tool) => securityToolSlugs.includes(tool.slug));

const securityChecks = [
  ["Scan generated diffs", "Run static analysis and code scanning on the actual pull request diff before merging agent-written changes."],
  ["Separate generation from approval", "Let AI tools propose code, but keep security gates, branch protection, and human approval outside the coding agent."],
  ["Protect secrets and tokens", "Block agents from reading production credentials, writing debug endpoints, or printing environment variables into logs."],
  ["Use least privilege", "Give agents only the repository, issue tracker, docs, browser, and CI access needed for the current task."],
  ["Keep evidence", "Require build logs, scan results, changed file lists, and production smoke checks for high-risk AI coding work."],
  ["Tune rules over time", "Convert repeated review findings into Semgrep rules, CodeQL queries, or CI policies so the next AI change is easier to verify."],
];

const faqs = [
  {
    question: "What are AI code security tools?",
    answer: "AI code security tools are scanners, review assistants, and policy gates that help teams inspect AI-generated code for vulnerabilities, dependency risk, unsafe patterns, and missing review evidence.",
  },
  {
    question: "Should AI-generated code always be scanned?",
    answer: "Yes for production repositories. AI-generated code should pass the same lint, test, dependency, static analysis, and human review gates as human-written code.",
  },
  {
    question: "Which tool should teams start with?",
    answer: "GitHub teams often start with CodeQL or Copilot Code Review. Teams that need custom policy checks usually evaluate Semgrep. Teams that want broader developer security coverage often compare Snyk Code.",
  },
  {
    question: "Where does MCP fit into AI code security?",
    answer: "MCP helps define controlled access to GitHub, files, CI, browsers, and security evidence. The security goal is to give coding agents enough context to work without giving them unnecessary secrets or deployment power.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/ai-coding-tools/ai-code-security-tools/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/ai-coding-tools/ai-code-security-tools/", type: "article" },
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

export default function AiCodeSecurityToolsPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">AI Code Security</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">AI code security tools for generated code</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Compare Semgrep, Snyk Code, GitHub CodeQL, and Copilot Code Review for scanning AI-generated code, enforcing pull request gates, and keeping coding agents inside safe permissions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/compare/semgrep-vs-snyk-code/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Compare Semgrep vs Snyk</Link>
            <Link href="/ai-coding-tools/ai-agent-permissions-checklist/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Agent permissions checklist</Link>
            <Link href="/mcp-server-security/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">MCP security guide</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityTools.map((tool) => (
            <Link key={tool.slug} href={`/ai-coding-tools/tools/${tool.slug}/`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <h2 className="mt-5 text-xl font-bold text-slate-950">{tool.name}</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">{tool.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tool.bestFor}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View security fit <ArrowRight className="h-4 w-4" /></p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Security checklist for AI-generated code</h2>
          <p className="mt-3 max-w-3xl text-slate-600">The winning workflow is not one magic scanner. It is a repeatable chain from agent permissions to pull request evidence.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {securityChecks.map(([heading, body]) => (
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
            <h2 className="text-2xl font-bold text-slate-950">Recommended minimum stack</h2>
            <p className="mt-3 text-slate-600">Use one AI coding assistant, one deterministic scanner, one dependency/security platform when needed, and one review checklist that blocks unsafe permissions or missing evidence.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/tools/semgrep/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Semgrep review</Link>
              <Link href="/ai-coding-tools/tools/github-codeql/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">CodeQL review</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">Best next read</h2>
            <p className="mt-3 text-slate-600">If the risk is not the generated code itself but what the agent can touch, move to the permissions checklist before adding more automation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai-coding-tools/ai-agent-permissions-checklist/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Open checklist</Link>
              <Link href="/ai-coding-tools/ai-code-review-tools/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Review tools</Link>
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
