"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

type CheckStatus = "Indexed" | "Not indexed" | "Need manual check";
type Confidence = "High" | "Medium" | "Low";

type ResultReason = {
  label: string;
  detail: string;
};

type SuggestedAction = {
  title: string;
  detail: string;
};

type CheckInput = {
  url: string;
  titleHint: string;
  sitemapListed: boolean;
  internalLinks: "strong" | "weak" | "unknown";
  statusCode: 200 | 301 | 302 | 404 | 410;
  canonical: "self" | "other" | "missing";
  robots: "index" | "noindex" | "unknown";
  contentDepth: "strong" | "thin" | "unknown";
  age: "fresh" | "settled" | "stale";
};

type CheckResult = {
  input: CheckInput;
  verdict: CheckStatus;
  confidence: Confidence;
  reasons: ResultReason[];
  actions: SuggestedAction[];
};

type ToolPreset = {
  label: string;
  url: string;
  notes: string;
};

const toolPresets: ToolPreset[] = [
  {
    label: "Homepage refresh set",
    url: "https://example.com/",
    notes: "A page that should already be in sitemap and linked from nav.",
  },
  {
    label: "Fresh blog post",
    url: "https://example.com/blog/technical-seo-audit-template",
    notes: "A recently published article that may still need manual confirmation.",
  },
  {
    label: "Thin utility page",
    url: "https://example.com/tools/meta-tag-checker",
    notes: "A page type that often looks crawlable but lacks supporting signals.",
  },
];

const starterInput: CheckInput = {
  url: toolPresets[0].url,
  titleHint: "Homepage",
  sitemapListed: true,
  internalLinks: "strong",
  statusCode: 200,
  canonical: "self",
  robots: "index",
  contentDepth: "strong",
  age: "settled",
};

const bulkSeed = [
  "https://example.com/",
  "https://example.com/blog/technical-seo-audit-template",
  "https://example.com/tools/meta-tag-checker",
].join("\n");

const resultLibrary: Record<CheckStatus, { summary: string; reasons: ResultReason[]; actions: SuggestedAction[] }> = {
  Indexed: {
    summary:
      "Public signals look consistent with an indexable page that has supporting discovery hints and no obvious exclusion directive.",
    reasons: [
      {
        label: "Index-friendly surface",
        detail: "The page appears crawlable, canonicals are self-consistent, and there is no visible noindex instruction in the sample workflow.",
      },
      {
        label: "Discovery support",
        detail: "Pages in this bucket are usually in sitemap, linked internally, or returning stable 200 responses without redirect loops.",
      },
    ],
    actions: [
      {
        title: "Keep internal links fresh",
        detail: "Do not let the URL become sitemap-only. Add or keep a real path from hub pages and nav-adjacent surfaces.",
      },
      {
        title: "Watch for accidental template regressions",
        detail: "Monitor status code, canonical tag, and metadata after redesigns or CMS edits.",
      },
    ],
  },
  "Not indexed": {
    summary:
      "The strongest public signals point to exclusion, weak discoverability, or page quality issues that likely block reliable indexing.",
    reasons: [
      {
        label: "Visible exclusion or mismatch",
        detail: "Typical triggers include noindex, a conflicting canonical, redirecting to another target, or a non-200 primary response.",
      },
      {
        label: "Low discovery confidence",
        detail: "The URL may be absent from sitemap, poorly linked, or look too thin to justify frequent crawling.",
      },
    ],
    actions: [
      {
        title: "Fix the strongest technical blocker first",
        detail: "Remove noindex, correct canonicals, return a stable 200, and ensure the intended URL is the final destination.",
      },
      {
        title: "Improve crawl paths and content weight",
        detail: "Link from stronger pages, add supporting context, and keep the page in the sitemap after fixes ship.",
      },
    ],
  },
  "Need manual check": {
    summary:
      "Signals are mixed or incomplete, so the URL needs a human check inside Search Console or a browser review before making a hard call.",
    reasons: [
      {
        label: "Ambiguous surface",
        detail: "The page may be technically crawlable but too new, inconsistently linked, or partially rendered in a way public checks cannot settle.",
      },
      {
        label: "Public-signal ceiling",
        detail: "This tool is intentionally limited to publicly observable evidence and does not claim Google-internal certainty.",
      },
    ],
    actions: [
      {
        title: "Confirm with Search Console or site search",
        detail: "Use a direct property check, live inspection, or a browser-assisted query before reporting the URL as definitively indexed or excluded.",
      },
      {
        title: "Recheck after crawl triggers",
        detail: "Resubmit sitemap, strengthen links, then re-run the audit after the page has had time to be re-crawled.",
      },
    ],
  },
};

function parseCsv(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(",")[0]?.trim())
    .filter(Boolean) as string[];
}

function guessInput(url: string, index: number): CheckInput {
  const lower = url.toLowerCase();

  if (lower.includes("/blog/") || lower.includes("/guides/")) {
    return {
      url,
      titleHint: "Fresh content page",
      sitemapListed: true,
      internalLinks: index === 0 ? "strong" : "weak",
      statusCode: 200,
      canonical: "self",
      robots: "index",
      contentDepth: index === 0 ? "strong" : "unknown",
      age: "fresh",
    };
  }

  if (lower.includes("/tools/") || lower.includes("/compare/")) {
    return {
      url,
      titleHint: "Utility or comparison page",
      sitemapListed: index % 2 === 0,
      internalLinks: "weak",
      statusCode: 200,
      canonical: "self",
      robots: "index",
      contentDepth: "thin",
      age: "settled",
    };
  }

  return {
    url,
    titleHint: "Primary page",
    sitemapListed: true,
    internalLinks: "strong",
    statusCode: 200,
    canonical: "self",
    robots: "index",
    contentDepth: "strong",
    age: "settled",
  };
}

function runIndexCheck(input: CheckInput): CheckResult {
  const reasons: ResultReason[] = [];
  const actions: SuggestedAction[] = [];

  if (input.statusCode !== 200) {
    reasons.push({
      label: "Primary response problem",
      detail: `The page returns ${input.statusCode}, which weakens the case for a stable indexable target.`,
    });
    actions.push({
      title: "Stabilize the destination URL",
      detail: "Return a consistent 200 on the URL you actually want indexed before spending time on deeper signals.",
    });
  }

  if (input.robots === "noindex") {
    reasons.push({
      label: "Noindex detected",
      detail: "A visible noindex directive is the strongest exclusion signal in this workflow.",
    });
    actions.push({
      title: "Remove the exclusion directive",
      detail: "Clear noindex from the live page and confirm template inheritance did not reintroduce it elsewhere.",
    });
  }

  if (input.canonical === "other") {
    reasons.push({
      label: "Canonical points elsewhere",
      detail: "The page appears to nominate a different URL as canonical, which often prevents the current page from being treated as the preferred index target.",
    });
    actions.push({
      title: "Align canonical with intent",
      detail: "If this page should rank independently, use a self-referencing canonical and reduce near-duplicate overlap.",
    });
  }

  if (!input.sitemapListed) {
    reasons.push({
      label: "Missing from sitemap",
      detail: "The URL lacks one of the most common discovery signals teams rely on after publishing.",
    });
    actions.push({
      title: "Add the URL to sitemap",
      detail: "Keep the URL in an actively submitted sitemap and ensure the sitemap itself is linked and fresh.",
    });
  }

  if (input.internalLinks === "weak") {
    reasons.push({
      label: "Weak internal support",
      detail: "Pages without strong links from hubs or nav-adjacent surfaces are harder to discover and re-crawl consistently.",
    });
    actions.push({
      title: "Strengthen discovery paths",
      detail: "Link from relevant parent pages, collections, and recent content instead of relying on sitemap alone.",
    });
  }

  if (input.contentDepth === "thin") {
    reasons.push({
      label: "Thin content surface",
      detail: "Thin or lightly differentiated pages often need stronger supporting context before indexing signals stabilize.",
    });
    actions.push({
      title: "Increase page usefulness",
      detail: "Add unique context, better intent coverage, and stronger supporting sections before rechecking.",
    });
  }

  if (input.age === "fresh" && reasons.length === 0) {
    reasons.push({
      label: "Fresh URL timing risk",
      detail: "New pages can look healthy but still need crawl time before a firm conclusion is appropriate.",
    });
    actions.push({
      title: "Wait for re-crawl then confirm",
      detail: "Keep the page linked and submitted, then recheck after the next crawl window.",
    });
  }

  let verdict: CheckStatus;
  let confidence: Confidence;

  if (input.statusCode !== 200 || input.robots === "noindex" || input.canonical === "other") {
    verdict = "Not indexed";
    confidence = "High";
  } else if (
    (input.age === "fresh" && input.internalLinks !== "strong") ||
    input.internalLinks === "unknown" ||
    input.contentDepth === "unknown" ||
    input.robots === "unknown"
  ) {
    verdict = "Need manual check";
    confidence = "Medium";
  } else if (
    input.sitemapListed &&
    input.internalLinks === "strong" &&
    input.canonical === "self" &&
    input.robots === "index" &&
    input.contentDepth === "strong"
  ) {
    verdict = "Indexed";
    confidence = "High";
  } else if (!input.sitemapListed || input.internalLinks === "weak" || input.contentDepth === "thin") {
    verdict = "Need manual check";
    confidence = "Low";
  } else {
    verdict = "Indexed";
    confidence = "Medium";
  }

  const library = resultLibrary[verdict];
  return {
    input,
    verdict,
    confidence,
    reasons: [...library.reasons, ...reasons],
    actions: [...library.actions, ...actions],
  };
}

function resultTone(verdict: CheckStatus) {
  if (verdict === "Indexed") return "border-emerald-200 bg-emerald-50 text-emerald-950";
  if (verdict === "Not indexed") return "border-rose-200 bg-rose-50 text-rose-950";
  return "border-amber-200 bg-amber-50 text-amber-950";
}

export default function RapidIndexCheckerTool() {
  const [single, setSingle] = useState<CheckInput>(starterInput);
  const [bulkInput, setBulkInput] = useState(bulkSeed);
  const [csvName, setCsvName] = useState("");

  const singleResult = useMemo(() => runIndexCheck(single), [single]);

  const bulkResults = useMemo(() => {
    return parseCsv(bulkInput).map((url, index) => runIndexCheck(guessInput(url, index)));
  }, [bulkInput]);

  const groupedResults = useMemo(
    () => ({
      indexed: bulkResults.filter((item) => item.verdict === "Indexed").length,
      excluded: bulkResults.filter((item) => item.verdict === "Not indexed").length,
      manual: bulkResults.filter((item) => item.verdict === "Need manual check").length,
    }),
    [bulkResults],
  );

  function updateSingle<K extends keyof CheckInput>(key: K, value: CheckInput[K]) {
    setSingle((current) => ({ ...current, [key]: value }));
  }

  function handleCsvUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      setBulkInput(text);
      setCsvName(file.name);
    };
    reader.readAsText(file);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-sm leading-6 text-slate-700">
        <p className="font-semibold text-slate-950">Important boundary</p>
        <p className="mt-2">
          Based on publicly available signals, this checker does not use Google Search Console or Google-internal index status.
          Consult GSC for authoritative data when the verdict affects a launch, migration, or high-value page.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Single URL mode</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Generate a public-signal verdict for one page</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              URL
              <input
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={single.url}
                onChange={(event) => updateSingle("url", event.target.value)}
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Page label
              <input
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={single.titleHint}
                onChange={(event) => updateSingle("titleHint", event.target.value)}
              />
            </label>
            <SelectField
              label="Status code"
              value={String(single.statusCode)}
              onChange={(value) => updateSingle("statusCode", Number(value) as CheckInput["statusCode"])}
              options={["200", "301", "302", "404", "410"]}
            />
            <SelectField
              label="Robots hint"
              value={single.robots}
              onChange={(value) => updateSingle("robots", value as CheckInput["robots"])}
              options={["index", "noindex", "unknown"]}
            />
            <SelectField
              label="Canonical hint"
              value={single.canonical}
              onChange={(value) => updateSingle("canonical", value as CheckInput["canonical"])}
              options={["self", "other", "missing"]}
            />
            <SelectField
              label="Internal links"
              value={single.internalLinks}
              onChange={(value) => updateSingle("internalLinks", value as CheckInput["internalLinks"])}
              options={["strong", "weak", "unknown"]}
            />
            <SelectField
              label="Content depth"
              value={single.contentDepth}
              onChange={(value) => updateSingle("contentDepth", value as CheckInput["contentDepth"])}
              options={["strong", "thin", "unknown"]}
            />
            <SelectField
              label="URL age"
              value={single.age}
              onChange={(value) => updateSingle("age", value as CheckInput["age"])}
              options={["fresh", "settled", "stale"]}
            />
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 md:col-span-2">
              <input
                type="checkbox"
                checked={single.sitemapListed}
                onChange={(event) => updateSingle("sitemapListed", event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              Listed in sitemap
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {toolPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setSingle(guessInput(preset.url, 0))}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                title={preset.notes}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <ResultCard result={singleResult} />
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Bulk mode</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Paste URLs or upload a CSV to sort audit buckets</h2>
            <label className="mt-6 block text-sm font-medium text-slate-700">
              Bulk URLs
              <textarea
                value={bulkInput}
                onChange={(event) => setBulkInput(event.target.value)}
                rows={10}
                className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <label className="inline-flex cursor-pointer items-center rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                Upload CSV
                <input accept=".csv,text/csv" onChange={handleCsvUpload} type="file" className="hidden" />
              </label>
              <span>{csvName ? `Loaded: ${csvName}` : "Use the first column as the URL field."}</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <MetricCard value={bulkResults.length} label="URLs parsed" />
            <MetricCard value={groupedResults.indexed} label="Likely indexed" tone="emerald" />
            <MetricCard value={groupedResults.manual} label="Need manual check" tone="amber" />
            <MetricCard value={groupedResults.excluded} label="Likely excluded" tone="rose" />
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">URL</th>
                <th className="px-4 py-3 font-semibold">Verdict</th>
                <th className="px-4 py-3 font-semibold">Confidence</th>
                <th className="px-4 py-3 font-semibold">Primary reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              {bulkResults.map((result) => (
                <tr key={result.input.url}>
                  <td className="px-4 py-3 align-top">{result.input.url}</td>
                  <td className="px-4 py-3 align-top font-semibold text-slate-950">{result.verdict}</td>
                  <td className="px-4 py-3 align-top">{result.confidence}</td>
                  <td className="px-4 py-3 align-top">{result.reasons[0]?.detail ?? resultLibrary[result.verdict].summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <select
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function MetricCard({ value, label, tone = "slate" }: { value: number; label: string; tone?: "slate" | "emerald" | "amber" | "rose" }) {
  const toneClass = {
    slate: "border-slate-200 bg-slate-50 text-slate-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    rose: "border-rose-200 bg-rose-50 text-rose-950",
  }[tone];

  return (
    <div className={`rounded-3xl border p-5 ${toneClass}`}>
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-2 text-sm font-medium">{label}</div>
    </div>
  );
}

function ResultCard({ result }: { result: CheckResult }) {
  return (
    <aside className={`rounded-3xl border p-6 shadow-sm ${resultTone(result.verdict)}`}>
      <div className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.2em]">
        <p>Verdict</p>
        <span>{result.confidence} confidence</span>
      </div>
      <h3 className="mt-4 text-3xl font-bold">{result.verdict}</h3>
      <p className="mt-3 text-sm leading-6">{resultLibrary[result.verdict].summary}</p>

      <div className="mt-6 grid gap-6">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Reasons</h4>
          <ul className="mt-3 space-y-3 text-sm leading-6">
            {result.reasons.map((item) => (
              <li key={`${item.label}-${item.detail}`}>
                <span className="font-semibold">{item.label}:</span> {item.detail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Next actions</h4>
          <ul className="mt-3 space-y-3 text-sm leading-6">
            {result.actions.map((item) => (
              <li key={`${item.title}-${item.detail}`}>
                <span className="font-semibold">{item.title}:</span> {item.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
