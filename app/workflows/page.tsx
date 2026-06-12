import type { Metadata } from "next";
import TrackableLink from "@/components/TrackableLink";
import { paidScenarios, workflowPacks } from "@/data/workflowPacks";

const title = "MCP Workflow Packs for Claude Code, Cursor, Codex, Gemini CLI, and Hermes";
const description = "Production-ready MCP workflow packs that help developers onboard repos, ship features, review PRs, audit security, and operate AI coding agents.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/workflows/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/workflows/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faq = [
  { q: "Are these just MCP server lists?", a: "No. Each pack defines the user outcome, MCP combination, step-by-step workflow, saved time, and reason to pay." },
  { q: "Which packs should I start with?", a: "For the 72-hour MVP, start with Claude Code Repo Onboarding, Cursor Full-Stack Feature, and OpenAI Codex PR Review." },
  { q: "Can I use these without changing my existing account system?", a: "Yes. The paid entry points reuse the existing Google OAuth, Stripe Billing, and session infrastructure." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: "https://bestmcpservers.com/workflows/",
  mainEntity: workflowPacks.map((pack) => ({ "@type": "CreativeWork", name: pack.title, description: pack.subtitle, url: `https://bestmcpservers.com/workflows/${pack.slug}/` })),
};

export default function WorkflowsPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Workflow Packs</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Buy the outcome, not the directory.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">BestMCPServers Pro turns MCP discovery into repeatable workflows for Claude Code, Cursor, OpenAI Codex, Gemini CLI, and Hermes.</p>
          <div className="mt-8 flex gap-3"><TrackableLink href="/pricing/" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500" eventProps={{ page: "/workflows/", cta: "upgrade_to_pro", destination: "/pricing/" }}>Upgrade to Pro</TrackableLink><TrackableLink href="/pro/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10" eventProps={{ page: "/workflows/", cta: "view_pro", destination: "/pro/" }}>View Pro</TrackableLink></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div><h2 className="text-3xl font-bold tracking-tight text-slate-950">Top 10 paid workflow packs</h2><p className="mt-2 text-slate-600">Sorted by launch priority, paid willingness, market size, and implementation difficulty.</p></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflowPacks.map((pack) => (
            <TrackableLink key={pack.slug} href={`/workflows/${pack.slug}/`} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl" eventProps={{ page: "/workflows/", cta: "workflow_pack_card", workflow: pack.slug }}>
              <div className="flex items-center justify-between"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">#{pack.launchPriority} {pack.tool}</span><span className="text-xs text-slate-500">{pack.difficulty} build</span></div>
              <h3 className="mt-5 text-xl font-bold text-slate-950 group-hover:text-blue-700">{pack.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{pack.subtitle}</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Saves: {pack.savedTime}</p>
              <p className="mt-2 text-sm text-slate-500">{pack.whyPay}</p>
            </TrackableLink>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Top 10 reasons users pay</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {paidScenarios.map((item) => (
              <div key={item.rank} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold text-blue-700">#{item.rank} · {item.willingness} willingness · {item.marketSize} market · {item.difficulty} build</p>
                <h3 className="mt-2 font-bold text-slate-950">{item.scenario}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">FAQ</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {faq.map((item) => <div key={item.q} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-semibold text-slate-950">{item.q}</h3><p className="mt-2 text-sm text-slate-600">{item.a}</p></div>)}
        </div>
      </section>
    </main>
  );
}
