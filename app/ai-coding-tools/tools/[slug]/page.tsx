import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aiCodingTools, getAiCodingTool } from "@/data/aiCodingTools";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return aiCodingTools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getAiCodingTool(params.slug);
  if (!tool) return { title: "AI Coding Tool Not Found" };

  const title = `${tool.name} Review 2026 | AI Coding Tool for ${tool.workflowFit[0]}`;
  const description = `${tool.name} review: ${tool.description} Best for ${tool.bestFor.toLowerCase()}`;

  return {
    title,
    description,
    alternates: { canonical: `https://bestmcpservers.com/ai-coding-tools/tools/${tool.slug}/` },
    openGraph: { title, description, url: `https://bestmcpservers.com/ai-coding-tools/tools/${tool.slug}/`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function AiCodingToolDetailPage({ params }: Props) {
  const tool = getAiCodingTool(params.slug);
  if (!tool) notFound();

  const relatedTools = aiCodingTools.filter((item) => item.slug !== tool.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web, macOS, Windows, Linux",
    url: tool.website,
    aggregateRating: { "@type": "AggregateRating", ratingValue: tool.rating, bestRating: 5, ratingCount: 120 },
    offers: { "@type": "Offer", priceCurrency: "USD", description: tool.pricing },
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/ai-coding-tools/tools/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← All AI coding tools</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                {tool.categories.map((category) => <span key={category} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">{category}</span>)}
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">{tool.name} review</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">{tool.tagline}</p>
              <p className="mt-5 max-w-3xl leading-7 text-slate-300">{tool.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={tool.website} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Visit {tool.name}</a>
                <Link href="/ai-coding-tools/finder/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Compare with finder</Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">BestMCP rating</p>
              <p className="mt-2 text-5xl font-bold">{tool.rating}<span className="text-2xl text-slate-400">/5</span></p>
              <dl className="mt-6 space-y-4 text-sm">
                <div><dt className="font-semibold text-white">Best for</dt><dd className="mt-1 text-slate-300">{tool.bestFor}</dd></div>
                <div><dt className="font-semibold text-white">Pricing</dt><dd className="mt-1 text-slate-300">{tool.pricing}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Strengths</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {tool.strengths.map((item) => <li key={item}>✓ {item}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Limitations</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {tool.limitations.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Workflow fit</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {tool.workflowFit.map((item) => <li key={item}>→ {item}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Technical fit for {tool.name}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["IDE support", tool.ideSupport],
              ["Model support", tool.modelSupport],
              ["Repo context", tool.repoContext],
              ["Agent mode", tool.agentMode],
              ["Privacy", tool.privacy],
              ["MCP support", tool.mcpSupport],
            ].map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-950">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">How {tool.name} fits MCP workflows</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">{tool.mcpAngle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/mcp-servers-for-cursor/" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">MCP servers for Cursor</Link>
            <Link href="/mcp-servers-for-claude-code/" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">MCP servers for Claude Code</Link>
            <Link href="/workflows/" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">View workflow packs</Link>
            <Link href="/pricing/" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Unlock Pro workflows</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Related AI coding tools</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {relatedTools.map((item) => (
            <Link key={item.slug} href={`/ai-coding-tools/tools/${item.slug}/`} className="rounded-3xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
