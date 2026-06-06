"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw, Trash2 } from "lucide-react";
import { calculateModelCost, getModelsByProvider, type ModelProvider } from "@/data/aiCostModels";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value >= 100 ? 0 : 2,
    maximumFractionDigits: value >= 100 ? 0 : 4,
  }).format(value);

type Props = {
  provider: ModelProvider;
  defaultModelId: string;
  sample: {
    inputTokens: number;
    outputTokens: number;
    dailyRequests: number;
    label: string;
  };
  copy: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function ProviderCostCalculator({ provider, defaultModelId, sample, copy }: Props) {
  const providerModels = useMemo(() => getModelsByProvider(provider), [provider]);
  const [modelId, setModelId] = useState(defaultModelId);
  const [inputTokens, setInputTokens] = useState(sample.inputTokens);
  const [outputTokens, setOutputTokens] = useState(sample.outputTokens);
  const [dailyRequests, setDailyRequests] = useState(sample.dailyRequests);
  const [calculated, setCalculated] = useState(true);

  const selectedModel = providerModels.find((model) => model.id === modelId) ?? providerModels[0];
  const result = useMemo(
    () => calculateModelCost(selectedModel, inputTokens || 0, outputTokens || 0, dailyRequests || 0),
    [selectedModel, inputTokens, outputTokens, dailyRequests],
  );
  const rows = useMemo(
    () => providerModels.map((model) => ({ model, cost: calculateModelCost(model, inputTokens || 0, outputTokens || 0, dailyRequests || 0) })),
    [providerModels, inputTokens, outputTokens, dailyRequests],
  );

  const clear = () => {
    setInputTokens(0);
    setOutputTokens(0);
    setDailyRequests(0);
    setCalculated(false);
  };

  const applySample = () => {
    setModelId(defaultModelId);
    setInputTokens(sample.inputTokens);
    setOutputTokens(sample.outputTokens);
    setDailyRequests(sample.dailyRequests);
    setCalculated(true);
  };

  return (
    <section id="calculator" className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{copy.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">{copy.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{copy.description}</p>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">{provider} model</span>
                <select
                  value={modelId}
                  onChange={(event) => setModelId(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
                >
                  {providerModels.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Input tokens</span>
                  <input type="number" min={0} value={inputTokens} onChange={(event) => setInputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Output tokens</span>
                  <input type="number" min={0} value={outputTokens} onChange={(event) => setOutputTokens(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Daily requests</span>
                  <input type="number" min={0} value={dailyRequests} onChange={(event) => setDailyRequests(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4" />
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => setCalculated(true)} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                <Calculator className="h-4 w-4" /> Calculate
              </button>
              <button type="button" onClick={clear} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Trash2 className="h-4 w-4" /> Clear
              </button>
              <button type="button" onClick={applySample} className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">
                <RotateCcw className="h-4 w-4" /> {sample.label}
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Estimated {provider} spend</p>
            <h2 className="mt-3 text-2xl font-bold">{selectedModel.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Input {formatCurrency(selectedModel.inputPrice)} / 1M tokens · Output {formatCurrency(selectedModel.outputPrice)} / 1M tokens
            </p>
            {selectedModel.notes ? <p className="mt-3 text-sm leading-6 text-slate-400">{selectedModel.notes}</p> : null}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Per day</p><p className="mt-2 text-2xl font-bold">{calculated ? formatCurrency(result.daily) : "$0.00"}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Per month</p><p className="mt-2 text-2xl font-bold">{calculated ? formatCurrency(result.monthly) : "$0.00"}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Per year</p><p className="mt-2 text-2xl font-bold">{calculated ? formatCurrency(result.yearly) : "$0.00"}</p></div>
              <div className="rounded-2xl bg-white/10 p-5"><p className="text-sm text-slate-300">Per 1k requests</p><p className="mt-2 text-2xl font-bold">{calculated ? formatCurrency(result.perThousandRequests) : "$0.00"}</p></div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              Formula: ((input tokens × input price) + (output tokens × output price)) ÷ 1,000,000 × daily requests. Monthly estimates use 30 days.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Compare {provider} model costs</h2>
          <p className="mt-2 text-sm text-slate-500">Based on your token and request assumptions above. Verify current provider pricing before production budgeting.</p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead><tr className="text-slate-500"><th className="py-3 pr-4 font-semibold">Model</th><th className="px-4 py-3 font-semibold">Input price</th><th className="px-4 py-3 font-semibold">Output price</th><th className="py-3 pl-4 font-semibold">Monthly estimate</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map(({ model, cost }) => (
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
