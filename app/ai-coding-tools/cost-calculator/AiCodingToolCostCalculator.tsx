"use client";

import { useMemo, useState } from "react";
import { Calculator, Copy, RotateCcw, Users } from "lucide-react";

type ToolPlan = {
  id: string;
  name: string;
  plan: string;
  monthlyPrice: number;
  seatIncluded: boolean;
  typicalAddOns: string;
  bestFor: string;
};

const toolPlans: ToolPlan[] = [
  { id: "cursor", name: "Cursor", plan: "Pro", monthlyPrice: 20, seatIncluded: true, typicalAddOns: "Usage-based fast requests may affect heavy teams", bestFor: "AI-native IDE adoption" },
  { id: "claude-code", name: "Claude Code", plan: "Pro/Max seat", monthlyPrice: 20, seatIncluded: true, typicalAddOns: "Higher Claude Max tiers for heavy terminal agent work", bestFor: "Terminal-first coding agents" },
  { id: "windsurf", name: "Windsurf", plan: "Pro", monthlyPrice: 15, seatIncluded: true, typicalAddOns: "Cascade credit usage for agentic work", bestFor: "AI IDE workflows" },
  { id: "github-copilot", name: "GitHub Copilot", plan: "Business", monthlyPrice: 19, seatIncluded: true, typicalAddOns: "Enterprise features and premium requests can change budget", bestFor: "Team rollout inside GitHub" },
  { id: "replit-agent", name: "Replit Agent", plan: "Core", monthlyPrice: 25, seatIncluded: true, typicalAddOns: "Hosting and usage charges for deployed apps", bestFor: "Prompt-to-app prototypes" },
  { id: "cline", name: "Cline", plan: "Open source", monthlyPrice: 0, seatIncluded: false, typicalAddOns: "Bring your own model API spend", bestFor: "Open-source VS Code agents" },
  { id: "aider", name: "Aider", plan: "Open source", monthlyPrice: 0, seatIncluded: false, typicalAddOns: "Bring your own model API spend", bestFor: "Git-visible terminal edits" },
  { id: "continue", name: "Continue", plan: "Open source", monthlyPrice: 0, seatIncluded: false, typicalAddOns: "Hosted models or internal inference costs", bestFor: "Customizable internal assistants" },
  { id: "openhands", name: "OpenHands", plan: "Open source", monthlyPrice: 0, seatIncluded: false, typicalAddOns: "Infrastructure, sandboxing, and model/API spend", bestFor: "Autonomous open-source agent workflows" },
];

type UseCase = "ide" | "terminal" | "autonomous" | "open-source";

type Recommendation = {
  stack: string;
  why: string;
  href: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function AiCodingToolCostCalculator() {
  const [selectedToolId, setSelectedToolId] = useState("cursor");
  const [developers, setDevelopers] = useState(5);
  const [extraModelSpend, setExtraModelSpend] = useState(150);
  const [reviewHoursSaved, setReviewHoursSaved] = useState(3);
  const [hourlyCost, setHourlyCost] = useState(80);
  const [adoptionRate, setAdoptionRate] = useState(70);
  const [useCase, setUseCase] = useState<UseCase>("ide");
  const [needsLocalModel, setNeedsLocalModel] = useState(false);
  const [needsEnterpriseSecurity, setNeedsEnterpriseSecurity] = useState(false);
  const [prefersOpenSource, setPrefersOpenSource] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy summary");

  const selectedTool = toolPlans.find((tool) => tool.id === selectedToolId) ?? toolPlans[0];

  const result = useMemo(() => {
    const seatCost = selectedTool.monthlyPrice * developers;
    const monthlyToolCost = seatCost + extraModelSpend;
    const adoptedDevelopers = developers * (adoptionRate / 100);
    const monthlyHoursSaved = adoptedDevelopers * reviewHoursSaved * 4.33;
    const monthlyValue = monthlyHoursSaved * hourlyCost;
    const netValue = monthlyValue - monthlyToolCost;
    const costPerDeveloper = developers > 0 ? monthlyToolCost / developers : 0;
    const breakevenHours = hourlyCost > 0 ? monthlyToolCost / hourlyCost : 0;

    return { seatCost, monthlyToolCost, monthlyHoursSaved, monthlyValue, netValue, costPerDeveloper, breakevenHours };
  }, [adoptionRate, developers, extraModelSpend, hourlyCost, reviewHoursSaved, selectedTool.monthlyPrice]);

  const recommendations = useMemo<Recommendation[]>(() => {
    if (prefersOpenSource || needsLocalModel || useCase === "open-source") {
      return [
        { stack: "Cline + Aider", why: "Open-source VS Code approvals plus git-visible terminal edits for local control.", href: "/ai-coding-tools/compare/cline-vs-aider/" },
        { stack: "Continue + local/internal models", why: "Best when the main constraint is custom model routing and internal context providers.", href: "/ai-coding-tools/tools/continue/" },
        { stack: "OpenHands sandbox", why: "Use when you want autonomous open-source agent experiments with explicit workspace controls.", href: "/ai-coding-tools/tools/openhands/" },
      ];
    }

    if (needsEnterpriseSecurity) {
      return [
        { stack: "GitHub Copilot Business + Claude Code", why: "Broad IDE rollout with a terminal agent reserved for verified repo tasks.", href: "/ai-coding-tools/tools/github-copilot/" },
        { stack: "Cursor team pilot", why: "Strong indexed IDE workflow when security review approves editor migration and codebase indexing.", href: "/ai-coding-tools/tools/cursor/" },
        { stack: "MCP-governed tool access", why: "Expose docs, GitHub, browser QA, and deploy checks through least-privilege boundaries.", href: "/guides/agent-identity-permissions-temporary-accounts/" },
      ];
    }

    if (useCase === "terminal") {
      return [
        { stack: "Claude Code + Cursor", why: "Terminal evidence for implementation and an AI IDE for fast local editing.", href: "/ai-coding-tools/compare/claude-code-vs-cursor/" },
        { stack: "Claude Code + Cline", why: "Terminal-first work paired with explicit VS Code tool approvals.", href: "/ai-coding-tools/compare/cline-vs-claude-code/" },
        { stack: "Aider fallback", why: "Low-cost git-visible edits for scripts, small services, and provider experimentation.", href: "/ai-coding-tools/tools/aider/" },
      ];
    }

    if (useCase === "autonomous") {
      return [
        { stack: "Devin + Claude Code", why: "Managed autonomous delegation plus terminal verification for sensitive production changes.", href: "/ai-coding-tools/alternatives/devin/" },
        { stack: "OpenHands + review gates", why: "Open-source autonomous workflows when you can own sandboxing, secrets, and CI gates.", href: "/ai-coding-tools/compare/openhands-vs-devin/" },
        { stack: "Replit Agent", why: "Fast hosted prototypes when the work is closer to prompt-to-app than existing repo maintenance.", href: "/ai-coding-tools/tools/replit-agent/" },
      ];
    }

    return [
      { stack: "Cursor + Claude Code", why: "Strong default for AI-native IDE work plus terminal verification on real repo tasks.", href: "/ai-coding-tools/compare/claude-code-vs-cursor/" },
      { stack: "Windsurf + GitHub Copilot", why: "Good lower-friction comparison set for AI IDE workflows and existing GitHub teams.", href: "/ai-coding-tools/compare/cursor-vs-windsurf/" },
      { stack: "Cost-capped open-source backup", why: "Keep Cline or Aider available for overflow and provider-flexible tasks.", href: "/ai-coding-tools/open-source-ai-coding-agents/" },
    ];
  }, [needsEnterpriseSecurity, needsLocalModel, prefersOpenSource, useCase]);

  const summary = `${selectedTool.name} ${selectedTool.plan}: ${developers} developers, ${formatCurrency(result.monthlyToolCost)}/mo estimated total, ${formatCurrency(result.costPerDeveloper)}/developer, ${result.breakevenHours.toFixed(1)} breakeven hours. Recommended stack: ${recommendations[0].stack}.`;

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Copied");
      window.setTimeout(() => setCopyStatus("Copy summary"), 1800);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus("Copy summary"), 1800);
    }
  };

  const resetSample = () => {
    setSelectedToolId("cursor");
    setDevelopers(5);
    setExtraModelSpend(150);
    setReviewHoursSaved(3);
    setHourlyCost(80);
    setAdoptionRate(70);
    setUseCase("ide");
    setNeedsLocalModel(false);
    setNeedsEnterpriseSecurity(false);
    setPrefersOpenSource(false);
    setCopyStatus("Copy summary");
  };

  return (
    <section id="calculator" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              <Calculator className="h-4 w-4" /> Team budget inputs
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">Estimate monthly AI coding tool cost</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Compare seat pricing with extra model/API spend, adoption, and time saved from agentic coding workflows.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Tool plan</span>
                <select value={selectedToolId} onChange={(event) => setSelectedToolId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4">
                  {toolPlans.map((tool) => (
                    <option key={tool.id} value={tool.id}>{tool.name} — {tool.plan}</option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Primary workflow</span>
                <select value={useCase} onChange={(event) => setUseCase(event.target.value as UseCase)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4">
                  <option value="ide">AI IDE rollout</option>
                  <option value="terminal">Terminal-first agent work</option>
                  <option value="autonomous">Autonomous delegated tickets</option>
                  <option value="open-source">Open-source / self-hosted stack</option>
                </select>
              </label>

              <label className="block"><span className="text-sm font-medium text-slate-700">Developers</span><input type="number" min={1} value={developers} onChange={(event) => setDevelopers(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Extra model/API spend</span><input type="number" min={0} value={extraModelSpend} onChange={(event) => setExtraModelSpend(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Hours saved/dev/week</span><input type="number" min={0} value={reviewHoursSaved} onChange={(event) => setReviewHoursSaved(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Loaded hourly cost</span><input type="number" min={0} value={hourlyCost} onChange={(event) => setHourlyCost(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block sm:col-span-2"><span className="text-sm font-medium text-slate-700">Expected adoption rate (%)</span><input type="number" min={0} max={100} value={adoptionRate} onChange={(event) => setAdoptionRate(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <input type="checkbox" checked={needsLocalModel} onChange={(event) => setNeedsLocalModel(event.target.checked)} className="mt-1" />
                <span><strong className="block text-slate-950">Local model</strong>Need local or internal inference.</span>
              </label>
              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <input type="checkbox" checked={needsEnterpriseSecurity} onChange={(event) => setNeedsEnterpriseSecurity(event.target.checked)} className="mt-1" />
                <span><strong className="block text-slate-950">Enterprise review</strong>Security and permissions matter.</span>
              </label>
              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <input type="checkbox" checked={prefersOpenSource} onChange={(event) => setPrefersOpenSource(event.target.checked)} className="mt-1" />
                <span><strong className="block text-slate-950">Open source</strong>Prefer inspectable agent tooling.</span>
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={resetSample} className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">
                <RotateCcw className="h-4 w-4" /> Reset sample
              </button>
              <button type="button" onClick={copySummary} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Copy className="h-4 w-4" /> {copyStatus}
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-blue-200">
              <Users className="h-4 w-4" /> {selectedTool.name} budget
            </div>
            <h2 className="mt-4 text-2xl font-bold">{selectedTool.name} {selectedTool.plan}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{selectedTool.bestFor}. {selectedTool.typicalAddOns}.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Seat cost</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.seatCost)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Monthly total</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.monthlyToolCost)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Cost / developer</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.costPerDeveloper)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Breakeven hours</p><p className="mt-2 text-3xl font-bold">{result.breakevenHours.toFixed(1)}</p></div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5">
              <p className="text-sm text-blue-200">Estimated monthly value from saved engineering time</p>
              <p className="mt-2 text-4xl font-extrabold">{formatCurrency(result.monthlyValue)}</p>
              <p className="mt-3 text-sm text-slate-300">Net value: {formatCurrency(result.netValue)} after tool and model/API costs.</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-blue-200">Recommended stack</p>
              <div className="mt-4 space-y-4">
                {recommendations.map((item) => (
                  <a key={item.stack} href={item.href} className="block rounded-xl bg-white/10 p-4 hover:bg-white/15">
                    <span className="block font-semibold text-white">{item.stack}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-300">{item.why}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr><th className="px-5 py-4 font-semibold">Tool</th><th className="px-5 py-4 font-semibold">Planning plan</th><th className="px-5 py-4 font-semibold">Seat price</th><th className="px-5 py-4 font-semibold">Budget note</th><th className="px-5 py-4 font-semibold">Best for</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {toolPlans.map((tool) => (
                <tr key={tool.id} className={tool.id === selectedToolId ? "bg-blue-50" : undefined}>
                  <td className="px-5 py-4 font-semibold text-slate-950">{tool.name}</td>
                  <td className="px-5 py-4">{tool.plan}</td>
                  <td className="px-5 py-4">{tool.monthlyPrice === 0 ? "BYO model cost" : `${formatCurrency(tool.monthlyPrice)} / user / mo`}</td>
                  <td className="px-5 py-4">{tool.typicalAddOns}</td>
                  <td className="px-5 py-4">{tool.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
