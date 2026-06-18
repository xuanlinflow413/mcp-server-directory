import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { getTool } from "@/data/developerTools";
import AgentPermissionBuilder from "./AgentPermissionBuilder";

const tool = getTool("agent-permission-builder");

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.canonical },
  openGraph: { title: tool.title, description: tool.description, url: tool.canonical, type: "website" },
};

const relatedLinks = [
  { href: "/tools/prompt-injection-checker/", label: "Prompt Injection Checker" },
  { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator" },
  { href: "/security/", label: "MCP Security Guides" },
  { href: "/workflows/", label: "Agent Workflow Packs" },
  { href: "/tools/mcp-stack-builder/", label: "MCP Stack Builder" },
  { href: "/pricing/", label: "Pro Templates" },
];

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      url: tool.canonical,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description: tool.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Least-privilege permission policy generator", "AI agent tool access risk scoring", "Approval gate recommendations", "MCP security launch checklist"],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: tool.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
      { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://bestmcpservers.com/tools/" },
      { "@type": "ListItem", position: 3, name: tool.name, item: tool.canonical },
    ] },
  ];

  return (
    <main className="min-h-screen bg-white">
      {schema.map((item, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">BestMCPServers</Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/security/" className="text-sm text-slate-600 hover:text-slate-900">Security</Link>
              <Link href="/tools/" className="text-sm font-semibold text-blue-600">Tools</Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300"><LockKeyhole className="h-4 w-4" /> Agent Security Tool</div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{tool.h1}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">{tool.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{tool.tags.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>)}</div>
        </div>
      </section>
      <AgentPermissionBuilder />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {["Turn broad tool access into scoped allowlists and default-deny rules.", "Generate approval gates for shell, payment, database, and MCP actions.", "Create a policy artifact founders and developers can review before launch."].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6"><CheckCircle2 className="h-5 w-5 text-blue-600" /><p className="mt-3 text-sm leading-6 text-slate-700">{item}</p></div>)}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-950">FAQ</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{tool.faqs.map((faq) => <div key={faq.question} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-semibold text-slate-950">{faq.question}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p></div>)}</div></div></section>
      <section className="border-t border-slate-200 bg-slate-50 py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-950">Related tools and guides</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm"><span className="font-semibold text-slate-950 group-hover:text-blue-600">{link.label}</span><ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600" /></Link>)}</div></div></section>
    </main>
  );
}
