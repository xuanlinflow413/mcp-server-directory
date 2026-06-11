import Link from "next/link";
import type { Metadata } from "next";
import BillingCheckout from "@/components/BillingCheckout";
import { topLaunchPacks, workflowPacks } from "@/data/workflowPacks";

const title = "BestMCPServers Pro Pricing | MCP Workflow Packs for AI Coding";
const description = "Upgrade from browsing MCP servers to shipping real AI coding workflows. Get Claude Code, Cursor, Codex, Gemini CLI, and Hermes workflow packs with production-ready MCP stacks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/pricing/" },
  openGraph: {
    title,
    description,
    url: "https://bestmcpservers.com/pricing/",
    type: "website",
    images: [{ url: "https://bestmcpservers.com/og.png", width: 1200, height: 630, alt: "BestMCPServers Pro Pricing" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const faq = [
  {
    q: "What am I paying for if the MCP directory is free?",
    a: "The directory stays free. Pro sells workflow outcomes: repo onboarding, Cursor feature shipping, Codex PR review, secure MCP setup, and copy-ready operating checklists.",
  },
  {
    q: "Do I need a new account?",
    a: "No. BestMCPServers Pro reuses the existing Google OAuth, session, Stripe Billing, and credits infrastructure.",
  },
  {
    q: "Will this lock basic SEO pages?",
    a: "No. Public directory, guides, and tools remain indexable. Paid value is concentrated in production workflow packs and Pro-only implementation details.",
  },
  {
    q: "Which AI coding tools are covered?",
    a: "The first workflow packs cover Claude Code, Cursor, OpenAI Codex, Gemini CLI, and Hermes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BestMCPServers Pro",
  description,
  brand: { "@type": "Brand", name: "BestMCPServers" },
  offers: [
    { "@type": "Offer", name: "Starter", price: "9", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Pro", price: "19", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  ],
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function PricingPage() {
  return (
    <main className="bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">BestMCPServers Pro</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">Stop browsing MCP servers. Start shipping AI workflows.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">The free directory helps you discover MCP servers. Pro helps you choose the right stack, configure it safely, and use it inside Claude Code, Cursor, Codex, Gemini CLI, and Hermes to ship real work.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/workflows/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">View workflow packs</Link>
            <Link href="/pro/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">See Pro benefits</Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold">Starter</h2>
              <p><span className="text-4xl font-bold">$9</span><span className="text-slate-400">/mo</span></p>
            </div>
            <p className="mt-4 text-slate-300">For solo developers who want the fastest path from MCP discovery to one working AI coding workflow.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>✓ Top 3 workflow packs for Claude Code, Cursor, and Codex</li>
              <li>✓ Copy-ready MCP stack recommendations</li>
              <li>✓ Production safety checklist for filesystem, GitHub, browser, and database tools</li>
              <li>✓ Basic Pro updates as the MCP ecosystem changes</li>
            </ul>
            <div className="mt-8"><BillingCheckout plan="starter" label="Start Starter with Google + Stripe" /></div>
          </div>

          <div className="rounded-3xl border border-blue-400/40 bg-blue-500/10 p-8 shadow-2xl ring-1 ring-blue-400/30">
            <div className="flex items-baseline justify-between">
              <div><p className="text-xs font-bold uppercase tracking-widest text-blue-200">Recommended</p><h2 className="mt-1 text-2xl font-bold">Pro</h2></div>
              <p><span className="text-4xl font-bold">$19</span><span className="text-slate-400">/mo</span></p>
            </div>
            <p className="mt-4 text-slate-300">For builders who want the complete operating system for AI coding workflows, QA, security, and launch execution.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>✓ All 10 workflow packs across Claude Code, Cursor, Codex, Gemini CLI, and Hermes</li>
              <li>✓ Pro-only implementation checklists and acceptance steps</li>
              <li>✓ Team-ready MCP security and approval workflow</li>
              <li>✓ Credits-ready path for future generators and premium outputs</li>
            </ul>
            <div className="mt-8"><BillingCheckout plan="pro" label="Start Pro with Google + Stripe" className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-slate-500" /></div>
          </div>
        </div>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">Launch workflow packs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topLaunchPacks.map((pack) => (
              <Link key={pack.slug} href={`/workflows/${pack.slug}/`} className="rounded-2xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-300/60">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{pack.tool}</p>
                <h3 className="mt-3 font-semibold text-white">{pack.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{pack.savedTime}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Why users pay</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              {workflowPacks.slice(0, 5).map((pack) => <p key={pack.slug}><strong className="text-white">{pack.tool}:</strong> {pack.whyPay}</p>)}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => <div key={item.q}><h3 className="font-semibold">{item.q}</h3><p className="mt-1 text-sm text-slate-400">{item.a}</p></div>)}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
