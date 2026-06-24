import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "AI Cost Calculators — Free LLM Pricing Tools | BestMCPServers",
  description:
    "Free AI cost calculators for OpenAI GPT, Claude, Gemini, DeepSeek, and Kimi. Estimate token spend, compare model prices, and plan API budgets before shipping.",
  keywords: [
    "ai cost calculator",
    "llm pricing calculator",
    "openai cost calculator",
    "claude cost calculator",
    "gemini cost calculator",
    "deepseek cost calculator",
    "kimi cost calculator",
    "token cost calculator",
    "api cost estimator",
    "ai api pricing",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/ai-cost/",
  },
  openGraph: {
    title: "AI Cost Calculators — Free LLM Pricing Tools | BestMCPServers",
    description:
      "Estimate AI API costs for GPT, Claude, Gemini, DeepSeek, and Kimi. Compare model prices and plan budgets with free browser-based calculators.",
    type: "website",
    url: "https://bestmcpservers.com/ai-cost/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cost Calculators — Free LLM Pricing Tools",
    description:
      "Free AI cost calculators for OpenAI, Claude, Gemini, DeepSeek, and Kimi. Plan API budgets before you ship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const calculators = [
  {
    href: "/tools/ai-cost-calculator/",
    name: "AI Cost Calculator",
    description: "Compare all major LLM providers in one place. Estimate costs across OpenAI, Claude, Gemini, DeepSeek, and Kimi models.",
    icon: Calculator,
    tag: "All-in-One",
    color: "bg-blue-600",
  },
  {
    href: "/tools/openai-cost-calculator/",
    name: "GPT Cost Calculator",
    description: "Estimate OpenAI API costs for GPT-5, GPT-5 Mini, GPT-4o, and legacy models. Plan token budgets for chatbots and AI apps.",
    icon: DollarSign,
    tag: "OpenAI",
    color: "bg-green-600",
  },
  {
    href: "/tools/claude-cost-calculator/",
    name: "Claude Cost Calculator",
    description: "Forecast Anthropic Claude API spend for Sonnet, Opus, and Haiku models. Ideal for research agents and coding assistants.",
    icon: Calculator,
    tag: "Anthropic",
    color: "bg-orange-600",
  },
  {
    href: "/tools/gemini-cost-calculator/",
    name: "Gemini Cost Calculator",
    description: "Calculate Google Gemini API costs for Pro and Flash models. Plan long-context and multimodal app budgets.",
    icon: Calculator,
    tag: "Google",
    color: "bg-purple-600",
  },
  {
    href: "/tools/ai-cost-calculator/",
    name: "Kimi Cost Calculator",
    description: "Estimate Moonshot AI Kimi API costs. Compare pricing for long-context Chinese LLM workloads.",
    icon: Calculator,
    tag: "Moonshot AI",
    color: "bg-red-600",
  },
  {
    href: "/tools/ai-cost-calculator/",
    name: "DeepSeek Cost Calculator",
    description: "Calculate DeepSeek API costs. One of the most cost-efficient options for high-volume AI applications.",
    icon: Calculator,
    tag: "DeepSeek",
    color: "bg-teal-600",
  },
];

const faqs = [
  {
    question: "Which AI cost calculator should I use?",
    answer:
      "Use the All-in-One AI Cost Calculator to compare all providers side by side. If you know your provider, use the dedicated calculator for more detailed model comparisons.",
  },
  {
    question: "Are these calculators free?",
    answer:
      "Yes. All calculators are free browser-based tools. No signup, no API key, no data sent to servers.",
  },
  {
    question: "How accurate are the cost estimates?",
    answer:
      "Estimates are based on reference pricing per 1M tokens. Actual costs may vary due to caching, batch discounts, and provider pricing changes. Always verify current pricing before budgeting.",
  },
  {
    question: "What is a token in LLM pricing?",
    answer:
      "A token is a unit of text processed by the model. In English, one token is roughly 3-4 characters. Input tokens are your prompt; output tokens are the model's response.",
  },
  {
    question: "How do I reduce AI API costs?",
    answer:
      "Trim prompts, cache repeated responses, route simple tasks to cheaper models, limit max output tokens, and monitor daily request volume.",
  },
  {
    question: "Do these calculators call AI APIs?",
    answer:
      "No. These are static browser calculators. They do not call any API, require an API key, or upload your data.",
  },
];

export default function AICostHubPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "AI Cost Calculators",
      url: "https://bestmcpservers.com/ai-cost/",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description:
        "Free AI cost calculators for OpenAI GPT, Claude, Gemini, DeepSeek, and Kimi. Estimate token spend and compare model prices.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Compare all major LLM provider costs",
        "Estimate daily, monthly, and annual API spend",
        "Calculate per-1k-request pricing",
        "Browser-only, no API calls or data upload",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
        { "@type": "ListItem", position: 2, name: "AI Cost Calculators", item: "https://bestmcpservers.com/ai-cost/" },
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
            <Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">
              BestMCPServers
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/agents/" className="text-sm text-slate-600 hover:text-slate-900">Agents</Link>
              <Link href="/tools/" className="text-sm text-slate-600 hover:text-slate-900">Tools</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">AI Cost Calculators</li>
          </ol>
        </nav>
      </div>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300">
            <TrendingUp className="h-4 w-4" /> LLM Pricing Tools
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Cost Calculators
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            Free calculators for OpenAI, Claude, Gemini, DeepSeek, and Kimi.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Estimate API costs before you ship. Compare token pricing across all major LLM providers.
            No signup, no API key, no data sent to servers.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link
                  key={calc.name}
                  href={calc.href}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center gap-1.5 rounded-full ${calc.color} px-2.5 py-1 text-xs font-medium text-white`}>
                      {calc.tag}
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {calc.name}
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {calc.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950">Why use AI cost calculators?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Compare model economics before picking a provider for your AI app.",
              "Estimate daily, monthly, and annual cost from token volume and request counts.",
              "Keep planning private with no database, login, API key, or backend.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
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
            {[
              { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator" },
              { href: "/guides/how-to-price-an-ai-saas-product/", label: "How to Price an AI SaaS Product" },
              { href: "/ai-prd-generator/", label: "AI PRD Generator" },
              { href: "/guides/agent-cost-management/", label: "Agent Cost Management Guide" },
              { href: "/guides/ai-cost-governance-checklist/", label: "AI Cost Governance Checklist" },
              { href: "/guides/ai-coding-agent-security-checklist/", label: "AI Coding Agent Security Checklist" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm"
              >
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
