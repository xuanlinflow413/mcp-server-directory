"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Copy, SearchCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import BillingCheckout from "@/components/BillingCheckout";

const checks = [
  { key: "entity", label: "Clear entity definition", terms: ["is a", "helps", "for", "platform", "tool", "directory"] },
  { key: "useCases", label: "Concrete use cases", terms: ["use case", "workflow", "example", "helps teams", "for developers", "for founders"] },
  { key: "proof", label: "Proof points", terms: ["data", "benchmark", "case study", "customer", "review", "tested", "comparison"] },
  { key: "faq", label: "FAQ coverage", terms: ["faq", "question", "answer", "what is", "how to", "why"] },
  { key: "steps", label: "Step-by-step structure", terms: ["step", "first", "second", "finally", "checklist", "guide"] },
  { key: "citations", label: "Citation-friendly snippets", terms: ["summary", "key takeaway", "best for", "pricing", "features", "limitations"] },
];

function countMatches(text: string, terms: string[]) {
  const lower = text.toLowerCase();
  return terms.filter((term) => lower.includes(term)).length;
}

export default function AISearchVisibilityChecker() {
  const [pageText, setPageText] = useState("BestMCPServers is a curated directory of MCP servers for Claude, Cursor, and AI agents. It helps developers compare MCP servers by category, use case, pricing notes, setup steps, and security guidance. The page includes FAQs, related tools, and workflow examples for agent builders.");
  const [pageType, setPageType] = useState("Landing page");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const words = pageText.trim().split(/\s+/).filter(Boolean).length;
    const signals = checks.map((check) => {
      const matches = countMatches(pageText, check.terms);
      return { ...check, matches, passed: matches >= 2 };
    });
    let score = signals.reduce((total, signal) => total + Math.min(signal.matches, 3) * 8, 0);
    if (words >= 120) score += 10;
    if (words >= 300) score += 8;
    if (/\b(price|pricing|cost|free|paid)\b/i.test(pageText)) score += 8;
    if (/\b(faq|what is|how to|why|when should)\b/i.test(pageText)) score += 8;
    score = Math.min(score, 100);
    const label = score >= 80 ? "Strong" : score >= 60 ? "Promising" : score >= 40 ? "Needs work" : "Weak";
    const missing = signals.filter((signal) => !signal.passed).map((signal) => signal.label);
    return { words, signals, score, label, missing };
  }, [pageText]);

  const report = useMemo(() => {
    return `# AI Search Visibility Report\n\nPage type: ${pageType}\nScore: ${result.score}/100 (${result.label})\nWord count: ${result.words}\n\nPassed signals:\n${result.signals.filter((signal) => signal.passed).map((signal) => `- ${signal.label}`).join("\n") || "- None yet"}\n\nMissing or weak signals:\n${result.missing.map((item) => `- ${item}`).join("\n") || "- No major gaps detected"}\n\nRecommended fixes:\n- Add a one-sentence entity definition near the top\n- Include 3-5 concrete use cases with users and jobs-to-be-done\n- Add proof points, comparisons, or tested examples\n- Add FAQ questions written like real search prompts\n- Use short answer blocks that AI answer engines can quote\n- Link to related tools, guides, and category pages`;
  }, [pageType, result]);

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Free checker</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Paste page copy or outline</h2>
            <label className="mt-6 block text-sm font-semibold text-slate-700">Page type
              <select value={pageType} onChange={(event) => setPageType(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm">
                <option>Landing page</option>
                <option>Directory listing</option>
                <option>Tool page</option>
                <option>Docs page</option>
                <option>Comparison page</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold text-slate-700">Content to audit
              <textarea value={pageText} onChange={(event) => setPageText(event.target.value)} rows={16} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6" />
            </label>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <SearchCheck className="h-7 w-7 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">AI visibility score</p>
                  <h3 className="text-4xl font-bold text-slate-950">{result.score}/100</h3>
                </div>
              </div>
              <p className="mt-3 text-lg font-semibold text-blue-700">{result.label}</p>
              <p className="mt-2 text-sm text-slate-600">{result.words} words analyzed locally in your browser.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {result.signals.map((signal) => (
                  <div key={signal.key} className={`rounded-2xl border p-4 ${signal.passed ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
                    <div className="flex items-center gap-2">
                      {signal.passed ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <AlertCircle className="h-4 w-4 text-amber-600" />}
                      <p className="text-sm font-semibold text-slate-900">{signal.label}</p>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{signal.matches} signal matches</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">Action report</h3>
                <button type="button" onClick={() => { navigator.clipboard.writeText(report); setCopied(true); }} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"><Copy className="h-4 w-4" />{copied ? "Copied" : "Copy"}</button>
              </div>
              <pre className="mt-5 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-6 text-slate-100">{report}</pre>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Paid report layer</p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">Want exportable AI search reports and page matrices?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">Upgrade to unlock richer templates for AEO/GEO audits, page matrices, and implementation workflows.</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:min-w-64">
            <BillingCheckout plan="pro" label="Unlock Pro reports" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700" />
            <Link href="/pricing/" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">Compare plans</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
