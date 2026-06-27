"use client";

import { useMemo, useState } from "react";
import { ArrowRightLeft, RotateCcw, Trash2 } from "lucide-react";
import { calculateModelCost, modelPrices } from "@/data/aiCostModels";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value >= 100 ? 0 : 2,
    maximumFractionDigits: value >= 100 ? 0 : 4,
  }).format(value);

const premiumDefault = "claude-sonnet";
const midDefault = "gpt-5-mini";
const lowDefault = "gpt-4o-mini";

function percentShare(value: number): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  if (value >= 100) return 1;
  return value / 100;
}

export default function ModelRoutingSavingsCalculator() {
  const [premiumModelId, setPremiumModelId] = useState(premiumDefault);
  const [midModelId, setMidModelId] = useState(midDefault);
  const [lowModelId, setLowModelId] = useState(lowDefault);
  const [inputTokens, setInputTokens] = useState(2200);
  const [outputTokens, setOutputTokens] = useState(700);
  const [dailyRequests, setDailyRequests] = useState(1200);
  const [premiumShare, setPremiumShare] = useState(20);
  const [midShare, setMidShare] = useState(30);
  const [lowShare, setLowShare] = useState(50);

  const premiumModel = modelPrices.find((model) => model.id === premiumModelId) ?? modelPrices[0];
  const midModel = modelPrices.find((model) => model.id === midModelId) ?? modelPrices[0];
  const lowModel = modelPrices.find((model) => model.id === lowModelId) ?? modelPrices[0];

  const shares = useMemo(() => {
    const premium = percentShare(premiumShare);
    const mid = percentShare(midShare);
    const low = percentShare(lowShare);
    const total = premium + mid + low;
    return {
      premium,
      mid,
      low,
      total,
    };
  }, [premiumShare, midShare, lowShare]);

  const baseline = useMemo(
    () => calculateModelCost(premiumModel, inputTokens || 0, outputTokens || 0, dailyRequests || 0),
    [premiumModel, inputTokens, outputTokens, dailyRequests],
  );

  const routing = useMemo(() => {
    const premiumCost = calculateModelCost(premiumModel, inputTokens || 0, outputTokens || 0, (dailyRequests || 0) * shares.premium);
    const midCost = calculateModelCost(midModel, inputTokens || 0, outputTokens || 0, (dailyRequests || 0) * shares.mid);
    const lowCost = calculateModelCost(lowModel, inputTokens || 0, outputTokens || 0, (dailyRequests || 0) * shares.low);

    const daily = premiumCost.daily + midCost.daily + lowCost.daily;
    return {
      premiumCost,
      midCost,
      lowCost,
      daily,
      monthly: daily * 30,
      yearly: daily * 365,
    };
  }, [premiumModel, midModel, lowModel, inputTokens, outputTokens, dailyRequests, shares]);

  const savings = useMemo(() => {
    const monthly = baseline.monthly - routing.monthly;
    const yearly = baseline.yearly - routing.yearly;
    const percent = baseline.monthly > 0 ? (monthly / baseline.monthly) * 100 : 0;
    return { monthly, yearly, percent };
  }, [baseline, routing]);

  const reset = () => {
    setPremiumModelId(premiumDefault);
    setMidModelId(midDefault);
    setLowModelId(lowDefault);
    setInputTokens(2200);
    setOutputTokens(700);
    setDailyRequests(1200);
    setPremiumShare(20);
    setMidShare(30);
    setLowShare(50);
  };

  const clear = () => {
    setInputTokens(0);
    setOutputTokens(0);
    setDailyRequests(0);
    setPremiumShare(0);
    setMidShare(0);
    setLowShare(0);
  };

  return (
    <section id="calculator" className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Routing Inputs</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Set your workload mix</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Model the same workflow twice: once as all-premium traffic and once as a three-tier routing mix.
            </p>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Premium model for hard tasks</span>
                <select value={premiumModelId} onChange={(event) => setPremiumModelId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4">
                  {modelPrices.map((model) => (
                    <option key={model.id} value={model.id}>{model.name} — {model.provider}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Mid-tier model</span>
                <select value={midModelId} onChange={(event) => setMidModelId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4">
                  {modelPrices.map((model) => (
                    <option key={model.id} value={model.id}>{model.name} — {model.provider}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Low-cost model for simple tasks</span>
                <select value={lowModelId} onChange={(event) => setLowModelId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4">
                  {modelPrices.map((model) => (
                    <option key={model.id} value={model.id}>{model.name} — {model.provider}</option>
                  ))}
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Average input tokens</span>
                  <input type="number" min={0} value={inputTokens} onChange={(event) => setInputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Average output tokens</span>
                  <input type="number" min={0} value={outputTokens} onChange={(event) => setOutputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4" />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Daily requests</span>
                <input type="number" min={0} value={dailyRequests} onChange={(event) => setDailyRequests(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-100 focus:border-emerald-500 focus:ring-4" />
              </label>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Premium share</span>
                  <span className="text-sm font-semibold text-slate-950">{premiumShare}%</span>
                </div>
                <input type="range" min={0} max={100} value={premiumShare} onChange={(event) => setPremiumShare(Number(event.target.value))} className="mt-3 w-full accent-emerald-600" />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Mid-tier share</span>
                  <span className="text-sm font-semibold text-slate-950">{midShare}%</span>
                </div>
                <input type="range" min={0} max={100} value={midShare} onChange={(event) => setMidShare(Number(event.target.value))} className="mt-3 w-full accent-sky-600" />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Low-cost share</span>
                  <span className="text-sm font-semibold text-slate-950">{lowShare}%</span>
                </div>
                <input type="range" min={0} max={100} value={lowShare} onChange={(event) => setLowShare(Number(event.target.value))} className="mt-3 w-full accent-violet-600" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                <RotateCcw className="h-4 w-4" /> Sample
              </button>
              <button type="button" onClick={clear} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Trash2 className="h-4 w-4" /> Clear
              </button>
            </div>

            <div className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${shares.total === 1 ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-amber-200 bg-amber-50 text-amber-800"}`}>
              Routing share total: {(shares.total * 100).toFixed(0)}%. {shares.total === 1 ? "This mix is valid." : "Adjust the three percentages so they add up to 100%."}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Savings Snapshot</p>
            <h2 className="mt-3 text-2xl font-bold">All-premium vs routed workflow</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Baseline assumes every request uses {premiumModel.name}. Routed cost applies your premium, mid-tier, and low-cost traffic mix.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Baseline monthly cost</p>
                <p className="mt-2 text-3xl font-bold">{formatCurrency(baseline.monthly)}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Routed monthly cost</p>
                <p className="mt-2 text-3xl font-bold">{formatCurrency(routing.monthly)}</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/15 p-5 ring-1 ring-emerald-400/30">
                <p className="text-sm text-emerald-100">Monthly savings</p>
                <p className="mt-2 text-3xl font-bold text-emerald-300">{formatCurrency(savings.monthly)}</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/15 p-5 ring-1 ring-emerald-400/30">
                <p className="text-sm text-emerald-100">Yearly savings</p>
                <p className="mt-2 text-3xl font-bold text-emerald-300">{formatCurrency(savings.yearly)}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Savings rate: <span className="font-semibold text-white">{Number.isFinite(savings.percent) ? `${savings.percent.toFixed(1)}%` : "0.0%"}</span>. This is the gap between sending every request to the premium model and routing by task difficulty.
            </div>

            <div className="mt-6 grid gap-4">
              {[
                { label: `Premium lane · ${premiumModel.name}`, share: premiumShare, value: routing.premiumCost.monthly },
                { label: `Mid-tier lane · ${midModel.name}`, share: midShare, value: routing.midCost.monthly },
                { label: `Low-cost lane · ${lowModel.name}`, share: lowShare, value: routing.lowCost.monthly },
              ].map((lane) => (
                <div key={lane.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white">{lane.label}</p>
                    <span className="text-sm text-slate-300">{lane.share}%</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Estimated monthly spend: <span className="font-semibold text-white">{formatCurrency(lane.value)}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Decision Guide</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">When routing usually makes sense</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <ArrowRightLeft className="h-4 w-4" /> Model routing plan
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Route extraction, tagging, formatting, and simple support replies to lower-cost models first.",
              "Keep premium models for ambiguous planning, high-stakes reasoning, and final review steps.",
              "Use validation and fallback logic so low-cost routing does not silently reduce quality.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
