import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { agentSecurityGuides } from "@/data/agentSecurityGuides";

const baseUrl = "https://bestmcpservers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Guides — Agent Security, MCP & AI Tools | BestMCPServers",
  description:
    "Practical guides for agent security, prompt injection, agent monitoring, MCP servers, AI-callable developer tools, ChatGPT Actions, and Cursor workflows.",
  alternates: { canonical: `${baseUrl}/guides/` },
  openGraph: {
    title: "Guides — Agent Security, MCP & AI Tools | BestMCPServers",
    description: "Learn agent security, prompt injection defense, monitoring, evaluation, MCP servers, AI tool APIs, Cursor, and ChatGPT Actions.",
    type: "website",
    url: `${baseUrl}/guides/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "BestMCPServers Guides",
    description: "Agent security, MCP, AI tools, ChatGPT Actions, Cursor, and Veo prompt guides.",
  },
};

const guides = [
  ...agentSecurityGuides.map((guide) => ({
    title: guide.h1,
    href: `/guides/${guide.slug}/`,
    description: guide.description,
    tag: "Agent Security",
  })),
  {
    title: "MCP Server Examples",
    href: "/mcp-server-examples/",
    description: "Practical MCP server examples for files, databases, browser automation, APIs, documentation, memory, search, and developer workflows.",
    tag: "MCP Examples",
  },
  {
    title: "MCP Tutorial for Beginners",
    href: "/mcp-tutorial-for-beginners/",
    description: "Learn Model Context Protocol basics: clients, servers, tools, resources, setup flow, safety, and first prompts.",
    tag: "MCP Tutorial",
  },
  {
    title: "Claude MCP Server Config",
    href: "/claude-mcp-server-config/",
    description: "Understand Claude Desktop MCP server config entries, command paths, env values, safe setup, and troubleshooting.",
    tag: "Claude MCP",
  },
  {
    title: "MCP Security Best Practices",
    href: "/mcp-security-best-practices/",
    description: "Review practical MCP security rules for permissions, secrets, approvals, validation, logging, and server documentation.",
    tag: "MCP Security",
  },
  {
    title: "Python MCP Server Example",
    href: "/python-mcp-server-example/",
    description: "Plan and test a simple Python MCP server with a narrow tool contract, client config notes, prompts, and safety checks.",
    tag: "MCP Python",
  },
  {
    title: "Node.js MCP Server Example",
    href: "/node-js-mcp-server-example/",
    description: "Build a practical Node.js MCP server with tool design, client config notes, prompts, and safety guardrails.",
    tag: "MCP Node.js",
  },
  {
    title: "MCP Security Checklist",
    href: "/mcp-security-checklist/",
    description: "Review permissions, tools, secrets, logging, approvals, dependencies, and deployment risks before trusting an MCP server.",
    tag: "MCP Security",
  },
  {
    title: "How to Host an MCP Server",
    href: "/how-to-host-mcp-server/",
    description: "Compare local, private, and remote MCP hosting models with practical deployment and safety checks.",
    tag: "MCP Hosting",
  },
  {
    title: "MCP Server vs API",
    href: "/mcp-server-vs-api/",
    description: "Understand how MCP servers differ from APIs, how wrappers work, and when to build each interface.",
    tag: "MCP Concepts",
  },
  {
    title: "MCP Hosting on Cloudflare",
    href: "/mcp-hosting-cloudflare/",
    description: "Explore Workers-oriented MCP hosting patterns, authentication, secrets, rate limits, and production tradeoffs.",
    tag: "MCP Hosting",
  },
  {
    title: "AI PRD Generator and Product-Specific PRD Templates",
    href: "/ai-prd-generator/",
    description: "Generate structured product requirements documents and browse templates for AI agents, MCP servers, SaaS, mobile apps, CRM, marketplaces, and Chrome extensions.",
    tag: "AI PRD",
  },
  {
    title: "Use BestMCPServers Tool API with ChatGPT Actions",
    href: "/guides/use-bestmcpservers-api-with-chatgpt/",
    description: "Import the OpenAPI spec into ChatGPT Actions and call JSON, Base64, and JWT tools.",
    tag: "ChatGPT Actions",
  },
  {
    title: "Use BestMCPServers Tools with Cursor and MCP",
    href: "/guides/use-bestmcpservers-tools-with-cursor/",
    description: "Connect Cursor workflows to public HTTP endpoints today and future MCP tools later.",
    tag: "Cursor MCP",
  },
  {
    title: "How to Install MCP Servers in Cursor",
    href: "/guides/how-to-install-mcp-servers-in-cursor/",
    description: "Step-by-step MCP server setup for Cursor IDE.",
    tag: "MCP Setup",
  },
  {
    title: "Best MCP Servers for Claude",
    href: "/guides/best-mcp-servers-for-claude/",
    description: "Recommended MCP servers and usage patterns for Claude.",
    tag: "Claude MCP",
  },
  {
    title: "Veo Prompt Examples",
    href: "/guides/veo-prompt-examples/",
    description: "Copyable Google Veo prompt examples for cinematic, ad, and social videos.",
    tag: "Veo Prompts",
  },
  {
    title: "How to Write Veo Prompts",
    href: "/guides/how-to-write-veo-prompts/",
    description: "Learn the subject, camera, lighting, scene, style, and duration pattern for better Veo outputs.",
    tag: "Veo Guide",
  },
];

export default function GuidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides/` },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/tools/" className="hover:text-slate-950">Tools</Link>
            <Link href="/agents/" className="hover:text-slate-950">Agents</Link>
            <Link href="/guides/" className="font-semibold text-blue-600">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
            <BookOpen className="h-4 w-4" />
            MCP and AI tool guides
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">BestMCPServers Guides</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Practical guides for agent security, prompt injection defense, agent monitoring, evaluation, MCP servers, AI-callable developer tools, ChatGPT Actions, Cursor workflows, and Google Veo prompt generation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{guide.tag}</span>
                <h2 className="mt-4 text-lg font-bold text-slate-950 group-hover:text-blue-700">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Read guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
