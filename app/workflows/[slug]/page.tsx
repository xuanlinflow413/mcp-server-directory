import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BillingCheckout from "@/components/BillingCheckout";
import { getWorkflowPack, workflowPacks } from "@/data/workflowPacks";

function CopyBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <pre className="mt-4 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

export function generateStaticParams() {
  return workflowPacks.map((pack) => ({ slug: pack.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pack = getWorkflowPack(params.slug);
  if (!pack) return {};
  const url = `https://bestmcpservers.com/workflows/${pack.slug}/`;
  return {
    title: pack.seoTitle,
    description: pack.seoDescription,
    alternates: { canonical: url },
    openGraph: { title: pack.seoTitle, description: pack.seoDescription, url, type: "article" },
    twitter: { card: "summary_large_image", title: pack.seoTitle, description: pack.seoDescription },
  };
}

export default function WorkflowPackPage({ params }: { params: { slug: string } }) {
  const pack = getWorkflowPack(params.slug);
  if (!pack) notFound();

  const faq = [
    { q: `Who is the ${pack.title} for?`, a: pack.audience },
    { q: "What result does this workflow sell?", a: pack.useCase },
    { q: "Why would someone pay for it?", a: pack.whyPay },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pack.seoTitle,
    description: pack.seoDescription,
    url: `https://bestmcpservers.com/workflows/${pack.slug}/`,
    author: { "@type": "Organization", name: "BestMCPServers" },
    mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/workflows/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← All workflow packs</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">{pack.tool} Workflow Pack</p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">{pack.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{pack.subtitle}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">Paid willingness</p><p className="mt-1 font-bold">{pack.willingness}</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">Market size</p><p className="mt-1 font-bold">{pack.marketSize}</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">Time saved</p><p className="mt-1 font-bold">{pack.savedTime}</p></div>
              </div>
            </div>
            <aside className="rounded-3xl border border-blue-300/30 bg-white p-6 text-slate-950 shadow-2xl">
              <p className="text-sm font-semibold text-blue-700">Unlock this workflow</p>
              <h2 className="mt-2 text-2xl font-bold">BestMCPServers Pro</h2>
              <p className="mt-3 text-sm text-slate-600">Get copy-ready MCP stacks, implementation steps, and Pro workflow details.</p>
              <div className="mt-6 space-y-3"><BillingCheckout plan={pack.launchPriority <= 3 ? "builder" : "pro"} label={pack.launchPriority <= 3 ? "Unlock with Builder Pack" : "Unlock with Pro"} /><Link href="/pricing/" className="block rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50">Compare plans</Link></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">User profile</h2>
            <p className="mt-4 text-slate-600">{pack.audience}</p>
            <h2 className="mt-8 text-2xl font-bold text-slate-950">Use case</h2>
            <p className="mt-4 text-slate-600">{pack.useCase}</p>
            <h2 className="mt-8 text-2xl font-bold text-slate-950">Why users pay</h2>
            <p className="mt-4 text-slate-600">{pack.whyPay}</p>
            <p className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-semibold text-blue-900">Price anchor: {pack.priceAnchor}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-950">Recommended MCP combination</h2>
            <div className="mt-5 flex flex-wrap gap-2">{pack.mcpStack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{item}</span>)}</div>
            <h2 className="mt-8 text-2xl font-bold text-slate-950">Workflow</h2>
            <ol className="mt-5 space-y-4">{pack.workflow.map((step, index) => <li key={step} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span><span className="text-slate-700">{step}</span></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Copy-ready Pro assets</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Make this pack useful in 5 minutes</h2>
            <p className="mt-4 text-slate-600">
              Buyers should not receive another article. They should copy the prompt, paste the config into their AI coding tool, connect the minimum MCP stack, and run the agent workflow immediately.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-bold text-amber-950">What the buyer must provide first</h3>
              <ul className="mt-4 space-y-2 text-sm text-amber-900">
                {pack.copyReady.missingContent.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <CopyBlock title="Copy/paste prompt" lines={pack.copyReady.prompt} />
            <CopyBlock title="Claude Code configuration" lines={pack.copyReady.claudeCodeConfig} />
            <CopyBlock title="Cursor configuration" lines={pack.copyReady.cursorConfig} />
            <CopyBlock title="MCP configuration" lines={pack.copyReady.mcpConfig} />
            <CopyBlock title="Agent workflow" lines={pack.copyReady.agentWorkflow} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">FAQ</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{faq.map((item) => <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-slate-950">{item.q}</h3><p className="mt-2 text-sm text-slate-600">{item.a}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
