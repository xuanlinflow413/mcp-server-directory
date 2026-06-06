import type { Metadata } from "next";
import Link from "next/link";
import { prdTemplates } from "@/data/prdTemplates";

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
      { "@type": "Question", name: "Can I use these PRD templates without an account?", acceptedAnswer: { "@type": "Answer", text: "Yes. The template pages are free to read and can be used as planning references for product teams, founders, and builders." } },
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
    </main>
  );
}
