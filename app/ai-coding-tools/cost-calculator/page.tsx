import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AiCodingToolCostCalculator from "./AiCodingToolCostCalculator";

const title = "AI Coding Tool Cost Calculator 2026 | Cursor, Claude Code, Copilot";
const description = "Estimate AI coding tool costs for Cursor, Claude Code, Windsurf, GitHub Copilot, Cline, Aider, and Continue. Compare seat pricing, extra model spend, adoption, and engineering time saved.";
const canonical = "https://bestmcpservers.com/ai-coding-tools/cost-calculator/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faq = [
  { question: "What costs should teams include for AI coding tools?", answer: "Include per-seat pricing, higher usage tiers, extra model or API spend, onboarding time, review overhead, and any private deployment or governance costs." },
  { question: "Are open-source AI coding agents free?", answer: "Open-source tools such as Cline, Aider, and Continue can avoid seat fees, but teams still pay for model API usage, hosted inference, or internal infrastructure." },
  { question: "How should a team compare Cursor, Claude Code, Windsurf, and Copilot pricing?", answer: "Compare the monthly seat cost first, then model the workflow value: adoption rate, hours saved per developer, repo verification quality, and whether the tool fits your IDE or terminal workflow." },
  { question: "Is this calculator official pricing?", answer: "No. It is a planning calculator using editable reference values. Always verify current vendor pricing before buying or publishing a budget." },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    url: canonical,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
      { "@type": "ListItem", position: 2, name: "AI Coding Tools", item: "https://bestmcpservers.com/ai-coding-tools/" },
      { "@type": "ListItem", position: 3, name: "AI Coding Tool Cost Calculator", item: canonical },
    ],
  },
];

export default function AiCodingToolCostCalculatorPage() {
  return (
    <main className="bg-white">
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">AI coding tools</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Cost Calculator</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">AI coding tool cost calculator for engineering teams.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Estimate what Cursor, Claude Code, Windsurf, GitHub Copilot, and open-source coding agents may cost once seats, model usage, and adoption are part of the rollout.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calculator" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Use calculator</a>
            <Link href="/ai-coding-tools/finder/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Open finder</Link>
            <Link href="/ai-coding-tools/compare/cursor-vs-claude-code/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Cursor vs Claude Code</Link>
          </div>
        </div>
      </section>

      <AiCodingToolCostCalculator />

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">What this calculator is good for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Shortlist AI coding tools before a team rollout.", "Compare seat fees with actual engineering time saved.", "Spot when open-source agents still need model budget."].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">FAQ</h2>
            <p className="mt-3 text-slate-600">Use the output as a planning baseline, then check vendor pricing before purchase.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Need workflow fit after budget?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Pair cost estimates with use-case comparisons for IDE agents, terminal agents, PR agents, and MCP-ready coding workflows.</p>
          </div>
          <Link href="/ai-coding-tools/" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">Compare tools <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
