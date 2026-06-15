import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best MCP Servers for Cursor | BestMCPServers",
  description: "Choose MCP servers for Cursor full-stack feature work, docs lookup, repo navigation, browser QA, and implementation workflows.",
  alternates: { canonical: "https://bestmcpservers.com/mcp-servers-for-cursor/" },
  openGraph: {
    title: "Best MCP Servers for Cursor | BestMCPServers",
    description: "Choose MCP servers for Cursor full-stack feature work, docs lookup, repo navigation, browser QA, and implementation workflows.",
    url: "https://bestmcpservers.com/mcp-servers-for-cursor/",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← BestMCPServers</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Cursor MCP</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Best MCP servers for Cursor development</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Cursor becomes more useful when MCP adds the missing context: docs, local files, GitHub issues, browser evidence, database schemas, and workflow-specific checklists.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/workflows/" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Browse Workflow Packs</Link>
            <Link href="/pricing/" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Full-stack feature work</h2>
            <p className="mt-4 text-slate-600 leading-7">Combine repo, docs, and browser context so Cursor can connect frontend changes to API behavior and live verification.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Reduce copy-paste context</h2>
            <p className="mt-4 text-slate-600 leading-7">Use MCP servers to keep project facts and external docs close to the editor instead of pasting long snippets into every chat.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Keep changes reviewable</h2>
            <p className="mt-4 text-slate-600 leading-7">Use workflow packs and security checklists to constrain agent changes, verify builds, and avoid broad rewrites.</p>
          </section>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">Next steps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Turn discovery into an MCP workflow</h2>
            <p className="mt-4 text-slate-600">Use these pages to pick the right MCP servers, then move into workflow packs, config generators, and pricing when you need implementation assets.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/workflows/" className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm">
              <h3 className="font-bold text-slate-950 group-hover:text-blue-700">MCP workflow packs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Copy-ready runbooks for Claude Code, Cursor, Codex, Claude Desktop, and security audits.</p>
            </Link>
            <Link href="/tools/mcp-server-config-generator/" className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm">
              <h3 className="font-bold text-slate-950 group-hover:text-blue-700">MCP config generator</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Generate server config patterns before wiring tools into your client.</p>
            </Link>
            <Link href="/tools/mcp-security-checklist-generator/" className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm">
              <h3 className="font-bold text-slate-950 group-hover:text-blue-700">MCP security checklist</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Review permissions, secrets, and prompt-injection exposure before production use.</p>
            </Link>
            <Link href="/pricing/" className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm">
              <h3 className="font-bold text-slate-950 group-hover:text-blue-700">Pricing</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Compare Builder Pack lifetime access and Pro workflow access.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
