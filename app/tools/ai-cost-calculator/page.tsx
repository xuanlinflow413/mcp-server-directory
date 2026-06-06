import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { getTool } from "@/data/developerTools";
import AICostCalculator from "./AICostCalculator";
import { modelPrices } from "@/data/aiCostModels";

const tool = getTool("ai-cost-calculator");

const relatedLinks = [
  { href: "/tools/openai-cost-calculator/", label: "OpenAI Cost Calculator" },
  { href: "/tools/claude-cost-calculator/", label: "Claude Cost Calculator" },
  { href: "/tools/gemini-cost-calculator/", label: "Gemini Cost Calculator" },
  { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator" },
  { href: "/guides/how-to-price-an-ai-saas-product/", label: "How to Price an AI SaaS Product" },
  { href: "/ai-prd-generator/", label: "AI PRD Generator" },
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
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Estimate AI API costs per day, month, and year",
        "Compare OpenAI, Claude, Gemini, DeepSeek, and Kimi model prices",
        "Calculate input token, output token, and daily request usage",
        "Runs as a static browser tool with no API key or backend",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
        { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://bestmcpservers.com/tools/" },
        { "@type": "ListItem", position: 3, name: "AI Cost Calculator", item: tool.canonical },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}

      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">BestMCPServers</Link>
            <span className="hidden text-xs text-slate-400 sm:inline">AI Tools &amp; Developer Utilities</span>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/agents/" className="text-sm text-slate-600 hover:text-slate-900">Agents</Link>
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
            <li><Link href="/tools/" className="hover:text-slate-900">Developer Tools</Link></li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">AI Cost Calculator</li>
          </ol>
        </nav>
      </div>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300">
            <Calculator className="h-4 w-4" /> LLM Cost Calculator
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">AI Cost Calculator</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">Estimate AI API costs before you ship.</p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Forecast OpenAI, Claude, Gemini, DeepSeek, and Kimi token spend before usage scales. Model prices are transparent reference rates per one million tokens for planning and ROI conversations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tool.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <AICostCalculator />

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Compare model economics before picking a provider.",
              "Estimate daily, monthly, and annual cost from token volume.",
              "Keep planning private with no database, login, API key, or backend.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">Reference model prices</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Prices are displayed as USD per 1M input or output tokens. Providers can change pricing, cached-token rules, batch discounts, and enterprise terms, so verify official pricing before committing budget.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modelPrices.map((model) => (
                <div key={model.id} className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950">{model.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{model.provider}</p>
                  <p className="mt-4 text-sm text-slate-700">Input: ${model.inputPrice} / 1M tokens</p>
                  <p className="mt-1 text-sm text-slate-700">Output: ${model.outputPrice} / 1M tokens</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tool.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950">Related Tools</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm">
                <span className="font-semibold text-slate-950 group-hover:text-blue-600">{link.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">&copy; 2026 BestMCPServers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">Home</Link>
            <Link href="/tools/" className="text-sm text-slate-500 hover:text-slate-900">Tools</Link>
            <Link href="/agents/" className="text-sm text-slate-500 hover:text-slate-900">Agents</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
