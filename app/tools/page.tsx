import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, FileJson, ArrowRight, ShieldCheck, Binary, KeyRound, Link2, Hash, Video, PlugZap, Code2, Database, Eye, Calculator, FileText, DollarSign, Network, Settings } from "lucide-react";
import { developerTools } from "@/data/developerTools";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "Developer Tools — Free Online Utilities | BestMCPServers",
  description:
    "Free online developer tools and AI builder utilities: AI PRD generator, OpenAI cost calculator, Claude cost calculator, Gemini cost calculator, AI SaaS pricing calculator, MCP stack builder, MCP config generators, JSON formatter, Base64 converter, JWT decoder, URL encoder, UUID generator, AI cost calculator, HTML, SQL, and Markdown utilities.",
  keywords: [
    "developer tools",
    "AI PRD generator",
    "product requirements document",
    "json formatter",
    "json validator online",
    "base64 encoder decoder",
    "jwt decoder",
    "url encoder decoder",
    "uuid generator",
    "html formatter",
    "sql formatter",
    "markdown previewer",
    "ai cost calculator",
    "openai cost calculator",
    "claude cost calculator",
    "gemini cost calculator",
    "ai saas pricing calculator",
    "mcp stack builder",
    "mcp config generator",
    "claude desktop mcp config generator",
    "cursor mcp config generator",
    "mcp env template generator",
    "mcp security checklist generator",
    "llm cost calculator",
    "token cost calculator",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/tools/",
  },
  openGraph: {
    title: "Developer Tools — Free Online Utilities | BestMCPServers",
    description:
      "Free online developer and AI builder utilities for AI PRDs, JSON, Base64, JWT, URLs, UUIDs, AI costs, HTML, SQL, and Markdown. No signup, no backend, no data sent to servers.",
    type: "website",
    url: "https://bestmcpservers.com/tools/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Tools — Free Online Utilities | BestMCPServers",
    description:
      "Free browser-only developer tools for AI PRDs, JSON, Base64, JWT, URLs, UUIDs, AI costs, HTML, SQL, and Markdown.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const iconMap = {
  "json-formatter": FileJson,
  "json-validator": ShieldCheck,
  "base64-encoder-decoder": Binary,
  "jwt-decoder": KeyRound,
  "url-encoder-decoder": Link2,
  "uuid-generator": Hash,
  "html-formatter": Code2,
  "sql-formatter": Database,
  "markdown-previewer": Eye,
  "ai-cost-calculator": Calculator,
  "openai-cost-calculator": Calculator,
  "claude-cost-calculator": Calculator,
  "gemini-cost-calculator": Calculator,
  "ai-saas-pricing-calculator": DollarSign,
  "mcp-stack-builder": Network,
  "claude-desktop-mcp-config-generator": Settings,
  "cursor-mcp-config-generator": Code2,
  "mcp-server-config-generator": Network,
  "mcp-env-template-generator": KeyRound,
  "mcp-security-checklist-generator": ShieldCheck,
  "veo-prompt-generator": Video,
  "prompt-injection-checker": ShieldCheck,
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
              { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://bestmcpservers.com/tools/" },
            ],
          }),
        }}
      />

      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">
              BestMCPServers
            </Link>
            <span className="hidden sm:inline text-xs text-slate-400 ml-2">
              AI Tools &amp; Developer Resources
            </span>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/rsp/" className="text-sm text-slate-600 hover:text-slate-900">Prompt Library</Link>
              <Link href="/tools/" className="text-sm font-semibold text-blue-600">Tools</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">Developer Tools</li>
          </ol>
        </nav>
      </div>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm text-blue-400 mb-6">
            <Wrench className="w-4 h-4" />
            Developer Utilities
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Free Online Developer Tools
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            A growing collection of browser utilities and public API endpoints for AI agents.
            Use the web tools directly, or call JSON, Base64, and JWT endpoints from scripts and OpenAPI clients.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Developer Utilities</h2>
            <p className="mt-2 text-slate-600">
              Generate AI-ready PRDs, estimate OpenAI, Claude, Gemini, and general LLM costs, plan AI SaaS pricing,
              build MCP stacks, generate MCP configs and env templates, format JSON, validate syntax, encode Base64, decode JWTs, encode URLs,
              generate UUID v4 values, format HTML and SQL, and preview Markdown without sending data to a server.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/ai-prd-generator/"
              className="group relative rounded-2xl border border-blue-200 bg-blue-50 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-blue-600 p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                AI PRD Generator
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Turn a product idea into a structured product requirements document for SaaS, AI agents, MCP servers, marketplaces, CRM tools, Chrome extensions, and mobile apps.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Product Planning", "AI PRD", "MCP"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-2.5 py-0.5 text-xs text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
            {developerTools.map((tool) => {
              const Icon = iconMap[tool.slug];
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}/`}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-blue-50 p-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            href="/tools/api/"
            className="mt-6 flex items-center justify-between rounded-2xl border border-blue-200 bg-blue-50 p-6 hover:border-blue-300 hover:bg-blue-100 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-600 p-3">
                <PlugZap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Tool API for AI Agents</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Call JSON, Base64, and JWT utilities through public HTTP endpoints and OpenAPI docs.
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">&copy; 2026 BestMCPServers. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
              <Link href="/rsp/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Prompt Library</Link>
              <Link href="/tools/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Tools</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
