import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import MyPurchasesClient from "@/components/MyPurchasesClient";
import { workflowPacks } from "@/data/workflowPacks";

const title = "My Purchases | BestMCPServers";
const description = "View your unlocked BestMCPServers Pro workflow packs through BestMCPServers Account.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://bestmcpservers.com/my-purchases/" },
  openGraph: { title, description, url: "https://bestmcpservers.com/my-purchases/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: false, follow: false },
};

export default function MyPurchasesPage() {
  const packs = workflowPacks.map((pack) => ({
    slug: pack.slug,
    title: pack.title,
    tool: pack.tool,
    subtitle: pack.subtitle,
    savedTime: pack.savedTime,
    launchPriority: pack.launchPriority,
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-lg font-bold text-slate-950 hover:text-blue-700">BestMCPServers</Link>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
              <Link href="/workflows/" className="hover:text-slate-950">Workflows</Link>
              <Link href="/pricing/" className="hover:text-slate-950">Pricing</Link>
              <Link href="/pro/" className="hover:text-slate-950">Pro</Link>
              <Link href="/my-purchases/" className="font-semibold text-blue-700">My purchases</Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">BestMCPServers Account</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Your paid workflow access in one branded account center.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            After checkout, return here to see which copy-ready workflow packs are unlocked for your BestMCPServers Account and jump directly to the paid assets.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-slate-400">Google sign-in and Stripe checkout are handled by auth.bestmcpservers.com.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">Loading purchases...</div>}>
          <MyPurchasesClient workflowPacks={packs} />
        </Suspense>
      </section>
    </main>
  );
}
