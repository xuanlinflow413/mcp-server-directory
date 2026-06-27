import Link from "next/link";
import type { Metadata } from "next";
import BillingCheckout from "@/components/BillingCheckout";
import { topLaunchPacks, workflowPacks } from "@/data/workflowPacks";

const title = "BestMCPServers Pricing | Free Directory and Pro";
const description = "Choose the BestMCPServers plan that fits your workflow: use the free MCP directory or upgrade to Pro for $19/month to unlock workflow packs, implementation checklists, and ongoing updates.";

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
  twitter: { card: "summary_large_image", title, description, images: ["https://bestmcpservers.com/og.png"] },
};

const faq = [
  {
    q: "What stays free, and what is paid?",
    a: "The directory, guides, and free tools stay free. Pro is $19/month for the full workflow library, implementation checklists, and ongoing updates.",
  },
  {
    q: "Do I need a new account?",
    a: "No separate vendor account is required. BestMCPServers Account uses Google sign-in at auth.bestmcpservers.com and secure Stripe checkout, so you can browse free pages first and upgrade only when you want a paid workflow pack.",
  },
  {
    q: "Will this lock basic SEO pages?",
    a: "No. Public directory, guides, and tools remain indexable. Paid value is concentrated in production workflow packs and Pro-only implementation details.",
  },
  {
    q: "Which AI coding tools are covered?",
    a: "The first workflow packs cover Claude Code, Cursor, OpenAI Codex, Gemini CLI, and Hermes.",
  },
  {
    q: "What makes Pro different from the free security tools?",
    a: "Free tools help you generate a permission plan or visibility check. Pro adds workflow packs, implementation checklists, audit report structure, and repeatable acceptance steps for teams shipping agent workflows.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BestMCPServers Pricing",
  description,
  brand: { "@type": "Brand", name: "BestMCPServers" },
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Pricing</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">Free directory. Pro workflows when you need execution.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Browse MCP servers for free. Upgrade through BestMCPServers Account when you want copy-ready workflow packs, safety checklists, and implementation guidance for Claude Code, Cursor, Codex, Gemini CLI, and Hermes.</p>
          <p className="mt-4 text-sm text-slate-400">Sign-in and checkout run on <span className="font-semibold text-blue-200">auth.bestmcpservers.com</span>, the branded account center for BestMCPServers purchases.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/workflows/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">View workflow packs</Link>
            <Link href="/pro/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">See Pro benefits</Link>
            <Link href="/my-purchases/" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">My purchases</Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-bold">Free</h2>
              <p><span className="text-4xl font-bold">$0</span></p>
            </div>
            <p className="mt-4 text-slate-300">For browsing MCP servers, reading guides, and using free builder tools before you commit to a workflow.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>✓ Public MCP server directory</li>
              <li>✓ Free guides and calculators</li>
              <li>✓ MCP stack builder and config tools</li>
              <li>✓ No checkout required</li>
            </ul>
            <div className="mt-8">
              <Link href="/#servers" className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100">
                Browse free directory
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-400/40 bg-blue-500/10 p-8 shadow-2xl ring-1 ring-blue-400/30">
            <div className="flex items-baseline justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-widest text-blue-200">Recommended</p><h2 className="mt-1 text-2xl font-bold">Pro</h2></div>
              <p><span className="text-4xl font-bold">$19</span><span className="text-slate-400">/mo</span></p>
            </div>
            <p className="mt-4 text-slate-300">For builders who want the complete operating system for AI coding workflows, QA, security, and launch execution.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>✓ All 10 workflow packs across Claude Code, Cursor, Codex, Gemini CLI, and Hermes</li>
              <li>✓ Pro-only implementation checklists and acceptance steps</li>
              <li>✓ MCP security, QA, launch, and production setup workflows</li>
              <li>✓ Agent permission reports and AI search visibility audit workflows</li>
              <li>✓ Updates as workflow packs improve</li>
            </ul>
            <div className="mt-8"><BillingCheckout plan="pro" label="Continue with BestMCPServers Account" className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-slate-500" /></div>
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

        <section className="mt-16 rounded-3xl border border-blue-400/30 bg-blue-500/10 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">Pro audit value</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">From free checker to client-ready report</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The free Agent Permission Builder and AI Search Visibility Checker create the first pass. Pro turns those outputs into repeatable audit workflows: scope review, risk notes, acceptance checks, and launch-ready remediation steps.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="font-bold text-white">Included in Pro workflows</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>✓ Team audit checklist for MCP and agent permissions</li>
                <li>✓ Pro report outline for visibility and security findings</li>
                <li>✓ Acceptance steps before production launch</li>
                <li>✓ No unlimited usage or unimplemented team-seat claims</li>
              </ul>
            </div>
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
