import type { Metadata } from "next";
import Link from "next/link";
import { prdTemplates } from "@/data/prdTemplates";
import AI_PRD_Generator from "./AI_PRD_Generator";

const baseUrl = "https://bestmcpservers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "AI PRD Generator — Create Product Requirements Documents with AI",
  description: "Generate structured product requirements documents for SaaS, AI agents, MCP servers, marketplaces, CRM products, Chrome extensions, and mobile apps.",
  alternates: { canonical: `${baseUrl}/ai-prd-generator/` },
  openGraph: {
    title: "AI PRD Generator — Create Product Requirements Documents with AI",
    description: "Generate structured PRDs and start from product-specific templates for SaaS, AI agents, MCP servers, marketplaces, CRM, extensions, and mobile apps.",
    type: "website",
    url: `${baseUrl}/ai-prd-generator/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PRD Generator",
    description: "Create structured PRDs with AI and product-specific templates.",
  },
};

export default function AiPrdGeneratorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "AI PRD Generator", item: `${baseUrl}/ai-prd-generator/` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is an AI PRD Generator?", acceptedAnswer: { "@type": "Answer", text: "An AI PRD Generator helps turn a product idea into a structured product requirements document with sections for users, problems, features, constraints, acceptance criteria, and launch metrics." } },
      { "@type": "Question", name: "Why does this AI PRD Generator live on BestMCPServers?", acceptedAnswer: { "@type": "Answer", text: "BestMCPServers focuses on AI builder tools, MCP server planning, agent workflows, developer utilities, cost estimation, and product requirements for software teams." } },
      { "@type": "Question", name: "Can I use these PRD templates without an account?", acceptedAnswer: { "@type": "Answer", text: "Yes. The generator and template pages are free to use in the browser with no account, database, login, payment, or API key." } },
      { "@type": "Question", name: "Should I use the AI Cost Calculator with the AI PRD Generator?", acceptedAnswer: { "@type": "Answer", text: "Yes. Use the AI PRD Generator first to define scope, workflows, and requirements. Then use the AI Cost Calculator to estimate model and API costs for the product you plan to build." } },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {[breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600"><Link href="/guides/" className="hover:text-slate-950">Guides</Link><Link href="/tools/" className="hover:text-slate-950">Tools</Link><Link href="/agents/" className="hover:text-slate-950">Agents</Link></nav>
        </div>
      </header>
      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">AI product planning</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">AI PRD Generator</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Create a structured product requirements document from a product idea, or start with a focused PRD template for SaaS, AI agents, MCP servers, marketplaces, CRM software, Chrome extensions, and mobile apps.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#tool" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">Generate a PRD</a>
            <Link href="/tools/mcp-stack-builder/" className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">Build MCP stack</Link>
            <Link href="/tools/ai-cost-calculator/" className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">Estimate AI costs</Link>
          </div>
        </div>
      </section>
      <section id="tool" className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Generate an AI-ready PRD</h2>
            <p className="mt-4 leading-8 text-slate-700">Product requirements for AI builders need clear users, workflows, feature boundaries, cost assumptions, security constraints, evaluation notes, and launch criteria. Fill in the fields below, generate a Markdown PRD, then refine it with the related templates and guides.</p>
          </div>
          <AI_PRD_Generator />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">PRD Templates for Different Product Types</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">Choose the template closest to your product, then use it as a checklist for your AI-generated PRD. The AI Agent and MCP Server templates are prioritized because agentic AI and Model Context Protocol products need clearer requirements around tools, permissions, schemas, and evaluation.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {prdTemplates.map((template) => (
              <Link key={template.slug} href={`/${template.slug}/`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{template.priority}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-950 group-hover:text-blue-700">{template.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{template.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Related builder tools and guides</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">Use the AI PRD Generator with BestMCPServers guides and tools to move from product idea to build plan, cost estimate, and safer agent design.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "MCP Stack Builder", href: "/tools/mcp-stack-builder/", description: "Plan MCP server categories, setup order, and security checks after the PRD defines your agent workflow." },
              { title: "AI SaaS Pricing Calculator", href: "/tools/ai-saas-pricing-calculator/", description: "Turn PRD usage assumptions into Starter and Pro pricing ranges." },
              { title: "AI Cost Calculator", href: "/tools/ai-cost-calculator/", description: "Estimate AI API costs before you commit to a product architecture or usage model." },
              { title: "How to Build an MCP Stack", href: "/guides/how-to-build-an-mcp-stack/", description: "Learn how to choose MCP clients, data sources, server categories, and security boundaries." },
              { title: "How to Price an AI SaaS Product", href: "/guides/how-to-price-an-ai-saas-product/", description: "Use model costs, gross margin, and paid conversion to plan AI SaaS pricing." },
              { title: "AI Agent PRD Template", href: "/ai-agent-prd-template/", description: "Plan agent goals, tools, permissions, memory, evaluation, and failure handling." },
              { title: "MCP Server PRD Template", href: "/mcp-server-prd-template/", description: "Define MCP server use cases, exposed tools, auth needs, schemas, risks, and launch criteria." },
              { title: "Agent Security Guide", href: "/guides/agent-security-guide/", description: "Review prompt injection, tool permissions, monitoring, and reliability risks before shipping agents." },
              { title: "Agent Directory", href: "/agents/", description: "Browse agent examples and use cases when shaping your PRD requirements." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
                <h3 className="font-bold text-slate-950 group-hover:text-blue-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
