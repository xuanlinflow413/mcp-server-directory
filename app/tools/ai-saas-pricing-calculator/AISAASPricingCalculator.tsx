"use client";

import { useMemo, useState } from "react";
import { DollarSign, RotateCcw, TrendingUp } from "lucide-react";
import { calculateModelCost, modelPrices } from "@/data/aiCostModels";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value >= 100 ? 0 : 2,
    maximumFractionDigits: value >= 100 ? 0 : 4,
  }).format(value);

export default function AISAASPricingCalculator() {
  const [modelId, setModelId] = useState("gpt-5-mini");
  const [activeUsers, setActiveUsers] = useState(1000);
  const [requestsPerUserPerDay, setRequestsPerUserPerDay] = useState(8);
  const [inputTokens, setInputTokens] = useState(1200);
  const [outputTokens, setOutputTokens] = useState(500);
  const [targetMargin, setTargetMargin] = useState(80);
  const [fixedCosts, setFixedCosts] = useState(150);
  const [paidConversion, setPaidConversion] = useState(5);

  const model = modelPrices.find((item) => item.id === modelId) ?? modelPrices[0];

  const result = useMemo(() => {
    const dailyRequests = activeUsers * requestsPerUserPerDay;
    const cost = calculateModelCost(model, inputTokens, outputTokens, dailyRequests);
    const monthlyAiCost = cost.monthly;
    const paidUsers = Math.max(1, Math.round(activeUsers * (paidConversion / 100)));
    const totalMonthlyCost = monthlyAiCost + fixedCosts;
    const costPerActiveUser = activeUsers > 0 ? totalMonthlyCost / activeUsers : 0;
    const costPerPaidUser = totalMonthlyCost / paidUsers;
    const costRatio = Math.max(0.01, (100 - targetMargin) / 100);
    const minimumProPrice = costPerPaidUser / costRatio;
    const starterPrice = Math.max(9, Math.ceil(minimumProPrice * 0.55));
    const proPrice = Math.max(19, Math.ceil(minimumProPrice));
    const revenueAtPro = paidUsers * proPrice;
    const grossMarginAtPro = revenueAtPro > 0 ? ((revenueAtPro - totalMonthlyCost) / revenueAtPro) * 100 : 0;
    return { dailyRequests, monthlyAiCost, totalMonthlyCost, paidUsers, costPerActiveUser, costPerPaidUser, minimumProPrice, starterPrice, proPrice, grossMarginAtPro };
  }, [activeUsers, fixedCosts, inputTokens, model, outputTokens, paidConversion, requestsPerUserPerDay, targetMargin]);

  const sample = () => {
    setModelId("gpt-5-mini");
    setActiveUsers(1000);
    setRequestsPerUserPerDay(8);
    setInputTokens(1200);
    setOutputTokens(500);
    setTargetMargin(80);
    setFixedCosts(150);
    setPaidConversion(5);
  };

  const freePlanRisk = result.monthlyAiCost > 500 || requestsPerUserPerDay > 20;

  return (
    <section id="calculator" className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pricing inputs</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Model your AI SaaS unit economics</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Estimate usage cost, conversion pressure, and minimum paid plan pricing before promising unlimited AI usage.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2"><span className="text-sm font-medium text-slate-700">Model</span><select value={modelId} onChange={(event) => setModelId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4">{modelPrices.map((item) => <option key={item.id} value={item.id}>{item.name} — {item.provider}</option>)}</select></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Active users</span><input type="number" min={0} value={activeUsers} onChange={(event) => setActiveUsers(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Requests/user/day</span><input type="number" min={0} value={requestsPerUserPerDay} onChange={(event) => setRequestsPerUserPerDay(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Input tokens/request</span><input type="number" min={0} value={inputTokens} onChange={(event) => setInputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Output tokens/request</span><input type="number" min={0} value={outputTokens} onChange={(event) => setOutputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Target gross margin (%)</span><input type="number" min={1} max={95} value={targetMargin} onChange={(event) => setTargetMargin(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block"><span className="text-sm font-medium text-slate-700">Paid conversion (%)</span><input type="number" min={1} max={100} value={paidConversion} onChange={(event) => setPaidConversion(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
              <label className="block sm:col-span-2"><span className="text-sm font-medium text-slate-700">Fixed monthly costs</span><input type="number" min={0} value={fixedCosts} onChange={(event) => setFixedCosts(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" /></label>
            </div>

            <button type="button" onClick={sample} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"><RotateCcw className="h-4 w-4" /> Reset sample</button>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Recommended pricing</p>
            <h2 className="mt-3 text-2xl font-bold">Price above usage cost</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Monthly AI cost</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.monthlyAiCost)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Total monthly cost</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.totalMonthlyCost)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Cost per active user</p><p className="mt-2 text-3xl font-bold">{formatCurrency(result.costPerActiveUser)}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Paid users needed</p><p className="mt-2 text-3xl font-bold">{result.paidUsers}</p></div>
            </div>
            <div className="mt-6 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5">
              <p className="text-sm text-blue-200">Minimum Pro price at {targetMargin}% target margin</p>
              <p className="mt-2 text-4xl font-extrabold">{formatCurrency(result.minimumProPrice)}</p>
              <p className="mt-3 text-sm text-slate-300">Suggested tiers: Starter {formatCurrency(result.starterPrice)} · Pro {formatCurrency(result.proPrice)} · estimated Pro margin {result.grossMarginAtPro.toFixed(1)}%</p>
            </div>
            {freePlanRisk ? <div className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-400/10 p-5 text-sm leading-6 text-amber-100">Warning: this workload can make a generous free plan expensive. Add credits, daily caps, or a fair-use limit before launch.</div> : null}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Use credits instead of vague unlimited plans.", "Separate free usage from Pro usage caps.", "Watch output tokens because long generations often dominate cost."].map((tip) => (
            <div key={tip} className="rounded-2xl border border-slate-200 bg-white p-6"><TrendingUp className="h-5 w-5 text-blue-600" /><p className="mt-3 text-sm leading-6 text-slate-700">{tip}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
