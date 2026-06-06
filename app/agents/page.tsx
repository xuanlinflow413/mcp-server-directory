import type { Metadata } from "next";
import Link from "next/link";
import { agents } from "@/data/agents";
import AgentLibraryClient from "@/components/AgentLibraryClient";
import {
  Zap,
  ArrowRight,
  Wrench,
  BookOpen,
  Sparkles,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "AI Agent Workflow Library — Reusable AI Agents | BestMCPServers",
  description:
    "Browse reusable AI agent workflows for SEO, Reddit marketing, X growth, research, outreach, and startup validation. Copy prompts and adapt them.",
  keywords: [
    "ai agent workflow",
    "ai agent library",
    "reusable ai agents",
    "seo agent",
    "reddit marketing agent",
    "x growth agent",
    "linkedin outreach agent",
    "startup validation agent",
    "ai workflow template",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/agents/",
  },
  openGraph: {
    title: "AI Agent Workflow Library — Reusable AI Agents | BestMCPServers",
    description:
      "Browse reusable AI agent workflows for SEO, Reddit marketing, X growth, research, outreach, and startup validation. Copy prompts and adapt them.",
    type: "website",
    url: "https://bestmcpservers.com/agents/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Workflow Library — Reusable AI Agents | BestMCPServers",
    description:
      "Browse reusable AI agent workflows for SEO, Reddit marketing, X growth, research, outreach, and startup validation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What is an AI agent workflow?",
    answer:
      "An AI agent workflow is a structured process that combines system prompts, user prompt templates, and step-by-step instructions to help you complete a specific task with an AI assistant. Unlike one-off prompts, workflows are reusable frameworks you can apply repeatedly to get consistent, high-quality results.",
  },
  {
    question: "How do I use these agent workflows?",
    answer:
      "Each agent page includes a system prompt, a user prompt template, and a detailed workflow. Copy the system prompt into your AI client (Claude, Cursor, or ChatGPT), fill in the user prompt template with your specific details, and follow the workflow steps. The agents are designed to work with any major AI assistant.",
  },
  {
    question: "Do I need MCP servers to use these agents?",
    answer:
      "No. The agents work with any AI assistant out of the box. However, some agents recommend specific MCP servers (like Brave Search or Filesystem) that can enhance the workflow by giving the AI access to external tools and data sources.",
  },
  {
    question: "Can I customize the prompts for my use case?",
    answer:
      "Absolutely. The prompts are designed as starting points. You should adapt the voice, examples, and constraints to match your specific situation. The best results come from prompts that reflect your unique context and goals.",
  },
  {
    question: "What makes these agents different from generic AI prompts?",
    answer:
      "These agents are battle-tested workflows built around real-world tasks. They include error handling (common mistakes and fixes), input requirements, expected outputs, and recommended tools. They are designed for execution, not just inspiration.",
  },
  {
    question: "How often are new agents added?",
    answer:
      "We add new agents based on community demand and emerging use cases. If you have a workflow that works well and want to share it, reach out. The best agents come from practitioners who have refined their process through repetition.",
  },
  {
    question: "Are these agents free to use?",
    answer:
      "Yes. All agent workflows, prompts, and guides on this site are free to use and modify. Some recommended tools or MCP servers may have their own pricing, but the core workflows are open and reusable.",
  },
  {
    question: "Which AI client works best with these agents?",
    answer:
      "Claude Desktop and Cursor are excellent choices because they support MCP servers, which some agents recommend. However, the prompts work with ChatGPT, Gemini, and any other AI assistant that accepts custom instructions. Choose the client that fits your workflow.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Agent Workflow Library",
  description:
    "Browse reusable AI agent workflows for SEO, Reddit marketing, X growth, research, outreach, and startup validation.",
  url: "https://bestmcpservers.com/agents/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: agents.map((agent, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: agent.h1,
      url: `https://bestmcpservers.com/agents/${agent.slug}/`,
      description: agent.whatItDoes,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bestmcpservers.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agent Library",
      item: "https://bestmcpservers.com/agents/",
    },
  ],
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb UI */}
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">Agent Library</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 mb-6">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Reusable AI Workflows</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              AI Agent Library
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Browse our collection of battle-tested AI agent workflows. Each
              agent includes system prompts, user templates, step-by-step guides,
              and real-world advice on what works and what does not. Filter by
              category to find the right workflow for your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                {agents.length} agents available
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
                4 categories
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Free to use
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side interactive area */}
      <AgentLibraryClient />

      {/* Related Resources */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Related Resources
          </h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Explore more tools and content from BestMCPServers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/rsp/"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="inline-flex rounded-lg p-3 bg-purple-50 text-purple-600">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                AI Prompt Library
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Trending AI photo editing prompts and RSP workflows ready to copy.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                Browse prompts <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/tools/"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="inline-flex rounded-lg p-3 bg-emerald-50 text-emerald-600">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                Developer Tools
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Free online utilities including JSON formatter, validator, and minifier.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                Explore tools <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/tools/json-formatter/"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="inline-flex rounded-lg p-3 bg-blue-50 text-blue-600">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                JSON Formatter
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Format, validate, and minify JSON instantly in your browser.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                Open tool <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/guides/"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="inline-flex rounded-lg p-3 bg-amber-50 text-amber-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                Guides
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Step-by-step tutorials for MCP servers, Cursor, and Claude Desktop.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                Read guides <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about using our AI agent workflows, from
            getting started to customizing prompts for your specific use case.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to put these agents to work?
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Pick an agent, copy the prompts, and start getting better results
            from your AI assistant today. Every workflow is free, reusable, and
            designed for real-world execution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <Server className="h-4 w-4" />
              Browse MCP Servers
            </Link>
            <Link
              href="/guides/how-to-install-mcp-servers-in-cursor/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Installation Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
