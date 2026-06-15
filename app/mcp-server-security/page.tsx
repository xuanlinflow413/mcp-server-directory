import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Server Security Checklist | BestMCPServers",
  description: "Review MCP server permissions, secrets, filesystem access, browser automation, network calls, and production safety before connecting agents.",
  alternates: { canonical: "https://bestmcpservers.com/mcp-server-security/" },
  openGraph: {
    title: "MCP Server Security Checklist | BestMCPServers",
    description: "Review MCP server permissions, secrets, filesystem access, browser automation, network calls, and production safety before connecting agents.",
    url: "https://bestmcpservers.com/mcp-server-security/",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← BestMCPServers</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">MCP Security</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">MCP server security checklist for production agents</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">MCP is powerful because it grants tools to agents. That also means every server should be reviewed for permissions, data access, secret exposure, and failure modes before production use.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/tools/mcp-security-checklist-generator/" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Open Security Checklist Generator</Link>
            <Link href="/pricing/" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Permission scope</h2>
            <p className="mt-4 text-slate-600 leading-7">List exactly what the server can read, write, execute, or send over the network. Default to read-only when the workflow allows it.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Secrets handling</h2>
            <p className="mt-4 text-slate-600 leading-7">Never print tokens, keys, or connection strings into agent logs. Use platform secret stores and verify behavior without exposing values.</p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Operational evidence</h2>
            <p className="mt-4 text-slate-600 leading-7">Before production, run the workflow with test data, capture tool outputs, and document rollback steps for write-capable actions.</p>
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
