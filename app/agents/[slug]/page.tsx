import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { agents, getAgentBySlug, getRelatedAgents } from "@/data/agents";
import CopyPromptButton from "@/components/CopyPromptButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const agent = getAgentBySlug(params.slug);
  if (!agent) {
    return {
      title: "Agent Not Found",
    };
  }
  return {
    metadataBase: new URL("https://bestmcpservers.com"),
    title: agent.title,
    description: agent.metaDescription,
    keywords: agent.keywords,
    alternates: {
      canonical: `https://bestmcpservers.com/agents/${agent.slug}/`,
    },
    openGraph: {
      title: agent.title,
      description: agent.metaDescription,
      type: "article",
      url: `https://bestmcpservers.com/agents/${agent.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: agent.title,
      description: agent.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AgentPage({ params }: Props) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) {
    notFound();
  }

  const relatedAgents = getRelatedAgents(agent.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: agent.h1,
    description: agent.metaDescription,
    url: `https://bestmcpservers.com/agents/${agent.slug}/`,
    keywords: agent.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestmcpservers.com/agents/${agent.slug}/`,
    },
    author: {
      "@type": "Organization",
      name: "BestMCPServers",
      url: "https://bestmcpservers.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BestMCPServers",
      url: "https://bestmcpservers.com",
    },
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Agents",
        item: "https://bestmcpservers.com/agents/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: agent.h1,
        item: `https://bestmcpservers.com/agents/${agent.slug}/`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold text-slate-900 hover:text-slate-700"
            >
              BestMCPServers
            </Link>
            <span className="hidden sm:inline text-xs text-slate-400 ml-2">
              AI Tools &amp; Developer Resources
            </span>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/agents/"
                className="text-sm font-semibold text-blue-600"
              >
                Agents
              </Link>
              <Link
                href="/tools/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Tools
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/agents/" className="hover:text-slate-900">
                Agents
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">{agent.h1}</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* H1 */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {agent.h1}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{agent.metaDescription}</p>

        {/* Category */}
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {agent.category}
          </span>
        </div>

        {/* What It Does */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">What It Does</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {agent.whatItDoes}
          </p>
        </section>

        {/* When To Use */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">When To Use</h2>
          <ul className="mt-6 space-y-3">
            {agent.whenToUse.map((item, index) => (
              <li key={index} className="flex gap-3">
                <svg
                  className="h-6 w-6 shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Workflow Steps */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Workflow Steps</h2>
          <ol className="mt-6 space-y-4">
            {agent.workflowSteps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* System Prompt */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">System Prompt</h2>
            <CopyPromptButton text={agent.systemPrompt} />
          </div>
          <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
              {agent.systemPrompt}
            </pre>
          </div>
        </section>

        {/* User Prompt Template */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              User Prompt Template
            </h2>
            <CopyPromptButton text={agent.userPromptTemplate} />
          </div>
          <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
              {agent.userPromptTemplate}
            </pre>
          </div>
        </section>

        {/* Inputs Required */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Inputs Required</h2>
          <ul className="mt-6 space-y-3">
            {agent.inputsRequired.map((item, index) => (
              <li key={index} className="flex gap-3">
                <svg
                  className="h-6 w-6 shrink-0 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Outputs Generated */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Outputs Generated
          </h2>
          <ul className="mt-6 space-y-3">
            {agent.outputsGenerated.map((item, index) => (
              <li key={index} className="flex gap-3">
                <svg
                  className="h-6 w-6 shrink-0 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Tools */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Recommended Tools
          </h2>
          <ul className="mt-6 space-y-3">
            {agent.recommendedTools.map((item, index) => (
              <li key={index} className="flex gap-3">
                <svg
                  className="h-6 w-6 shrink-0 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm text-blue-800">
              <strong>Need to format JSON data?</strong>{" "}
              Try our{" "}
              <Link
                href="/tools/json-formatter/"
                className="font-semibold text-blue-700 hover:text-blue-900 underline"
              >
                JSON Formatter
              </Link>{" "}
              — format, validate, and minify JSON instantly in your browser.
            </p>
          </div>
        </section>

        {/* MCP Servers */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">MCP Servers</h2>
          <div className="mt-6 space-y-4">
            {agent.mcpServers.map((server, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {server.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {server.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Common Mistakes
          </h2>
          <div className="mt-6 space-y-4">
            {agent.commonMistakes.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-amber-200 bg-amber-50 p-6"
              >
                <h3 className="text-base font-semibold text-amber-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-amber-800 leading-relaxed">
                  {item.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {agent.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6"
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
        </section>

        {/* Related Agents */}
        {relatedAgents.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Agents
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedAgents.map((related) => (
                <Link
                  key={related.slug}
                  href={`/agents/${related.slug}/`}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {related.h1}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Resources */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">Related Resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/tools/"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                Developer Tools
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Free online utilities including JSON formatter, validator, and minifier.
              </p>
            </Link>
            <Link
              href="/tools/json-formatter/"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                JSON Formatter
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Format, validate, and minify JSON instantly in your browser.
              </p>
            </Link>
            <Link
              href="/guides/"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                Guides
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Step-by-step tutorials for MCP servers, Cursor, and Claude Desktop.
              </p>
            </Link>
            <Link
              href="/rsp/"
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                AI Prompt Library
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Trending AI photo editing prompts and RSP workflows ready to copy.
              </p>
            </Link>
          </div>
        </section>

        {/* Back to agents */}
        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700">
            Browse more AI agent workflows in our{" "}
            <Link
              href="/agents/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Agent Library
            </Link>
            . We add new reusable agent workflows weekly for marketing, growth,
            research, and sales.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; 2026 BestMCPServers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/agents/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Agents
              </Link>
              <Link
                href="/tools/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Tools
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
