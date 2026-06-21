import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aiCodingComparisons, getAiCodingComparison, getAiCodingTool } from "@/data/aiCodingTools";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return aiCodingComparisons.map((comparison) => ({ slug: comparison.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const comparison = getAiCodingComparison(params.slug);
  if (!comparison) return { title: "AI Coding Tools Comparison Not Found" };

  return {
    title: `${comparison.title} 2026 | Agentic AI Coding Tools Compared`,
    description: comparison.description,
    alternates: { canonical: `https://bestmcpservers.com/ai-coding-tools/compare/${comparison.slug}/` },
    openGraph: { title: comparison.title, description: comparison.description, url: `https://bestmcpservers.com/ai-coding-tools/compare/${comparison.slug}/`, type: "article" },
    twitter: { card: "summary_large_image", title: comparison.title, description: comparison.description },
  };
}

export default function AiCodingComparisonPage({ params }: Props) {
  const comparison = getAiCodingComparison(params.slug);
  if (!comparison) notFound();

  const tools = comparison.tools.map((slug) => getAiCodingTool(slug)).filter(Boolean);
  if (tools.length < 2) notFound();

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← AI coding tools</Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{comparison.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{comparison.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <table className="w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-5 py-4 font-semibold">Category</th>
                {tools.map((tool) => <th key={tool!.slug} className="px-5 py-4 font-semibold">{tool!.name}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Best for</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.bestFor}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Pricing</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.pricing}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Rating</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">★ {tool!.rating}/5</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Workflow fit</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.workflowFit.join(", ")}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">IDE support</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.ideSupport}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Agent mode</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.agentMode}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">Privacy</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.privacy}</td>)}</tr>
              <tr><td className="px-5 py-4 font-semibold text-slate-950">MCP angle</td>{tools.map((tool) => <td key={tool!.slug} className="px-5 py-4">{tool!.mcpAngle}</td>)}</tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">Verdict</h2>
          <p className="mt-3 text-slate-700">{comparison.verdict}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/ai-coding-tools/finder/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Use the finder</Link>
            <Link href="/workflows/" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">View MCP workflow packs</Link>
            <Link href="/pricing/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Compare Pro plans</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
