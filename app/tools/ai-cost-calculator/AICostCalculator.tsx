"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw, Trash2 } from "lucide-react";
import { modelPrices, type ModelPrice } from "@/data/aiCostModels";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value >= 100 ? 0 : 2,
    maximumFractionDigits: value >= 100 ? 0 : 4,
  }).format(value);

function calculateCost(model: ModelPrice, inputTokens: number, outputTokens: number, dailyRequests: number) {
  const inputCost = (inputTokens * dailyRequests * model.inputPrice) / 1_000_000;
  const outputCost = (outputTokens * dailyRequests * model.outputPrice) / 1_000_000;
  const daily = inputCost + outputCost;
  return {
    daily,
    monthly: daily * 30,
    yearly: daily * 365,
  };
}

export default function AICostCalculator() {
  const [modelId, setModelId] = useState("gpt-5-5");
  const [inputTokens, setInputTokens] = useState(2500);
  const [outputTokens, setOutputTokens] = useState(800);
  const [dailyRequests, setDailyRequests] = useState(1000);
  const [calculated, setCalculated] = useState(true);

  const selectedModel = modelPrices.find((model) => model.id === modelId) ?? modelPrices[0];

  const result = useMemo(
    () => calculateCost(selectedModel, inputTokens || 0, outputTokens || 0, dailyRequests || 0),
    [selectedModel, inputTokens, outputTokens, dailyRequests],
  );

  const comparisonRows = useMemo(
    () => modelPrices.map((model) => ({ model, cost: calculateCost(model, inputTokens || 0, outputTokens || 0, dailyRequests || 0) })),
    [inputTokens, outputTokens, dailyRequests],
  );

  const clear = () => {
    setInputTokens(0);
    setOutputTokens(0);
    setDailyRequests(0);
    setCalculated(false);
  };

  const sample = () => {
    setModelId("gpt-5-5");
    setInputTokens(2500);
    setOutputTokens(800);
    setDailyRequests(1000);
    setCalculated(true);
  };

  return (
    <section id="calculator" className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Tool Section</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Estimate token spend</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter average tokens per request and daily volume. Prices are shown as USD per 1M tokens for planning.
            </p>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Model</span>
                <select
                  value={modelId}
                  onChange={(event) => setModelId(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
                >
                  {modelPrices.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name} — {model.provider}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Input Tokens</span>
                <input
                  type="number"
                  min={0}
                  value={inputTokens}
                  onChange={(event) => setInputTokens(Number(event.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Output Tokens</span>
                <input
                  type="number"
                  min={0}
                  value={outputTokens}
                  onChange={(event) => setOutputTokens(Number(event.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Daily Requests</span>
                <input
                  type="number"
                  min={0}
                  value={dailyRequests}
                  onChange={(event) => setDailyRequests(Number(event.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Calculator className="h-4 w-4" /> Calculate
              </button>
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Trash2 className="h-4 w-4" /> Clear
              </button>
              <button
                type="button"
                onClick={sample}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"
              >
                <RotateCcw className="h-4 w-4" /> Sample
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Estimated cost</p>
            <h2 className="mt-3 text-2xl font-bold">{selectedModel.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Input {formatCurrency(selectedModel.inputPrice)} / 1M tokens · Output {formatCurrency(selectedModel.outputPrice)} / 1M tokens
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Cost Per Request</p>
                <p className="mt-2 text-3xl font-bold">{calculated ? formatCurrency(result.daily / dailyRequests) : "$0.00"}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Estimated Cost Per Day</p>
                <p className="mt-2 text-3xl font-bold">{calculated ? formatCurrency(result.daily) : "$0.00"}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Estimated Cost Per Month</p>
                <p className="mt-2 text-3xl font-bold">{calculated ? formatCurrency(result.monthly) : "$0.00"}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Estimated Cost Per Year</p>
                <p className="mt-2 text-3xl font-bold">{calculated ? formatCurrency(result.yearly) : "$0.00"}</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Formula: ((input tokens × input price) + (output tokens × output price)) ÷ 1,000,000 × daily requests.
              Monthly estimates use 30 days and yearly estimates use 365 days.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Cost Comparison Table</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">Compare monthly AI model costs</h2>
            </div>
            <p className="text-sm text-slate-500">Based on your token and request assumptions above.</p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead>
                <tr className="text-slate-500">
                  <th className="py-3 pr-4 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Input Price</th>
                  <th className="px-4 py-3 font-semibold">Output Price</th>
                  <th className="py-3 pl-4 font-semibold">Estimated Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map(({ model, cost }) => (
                  <tr key={model.id} className={model.id === modelId ? "bg-blue-50" : undefined}>
                    <td className="py-4 pr-4 font-semibold text-slate-950">{model.name}</td>
                    <td className="px-4 py-4 text-slate-700">{formatCurrency(model.inputPrice)} / 1M</td>
                    <td className="px-4 py-4 text-slate-700">{formatCurrency(model.outputPrice)} / 1M</td>
                    <td className="py-4 pl-4 font-semibold text-slate-950">{formatCurrency(cost.monthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
