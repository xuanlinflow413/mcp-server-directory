import Link from "next/link";
import { ArrowRight, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import { getTool } from "@/data/developerTools";
import ModelRoutingSavingsCalculator from "./ModelRoutingSavingsCalculator";

const tool = getTool("model-routing-savings-calculator");

const relatedLinks = [
  { href: "/tools/ai-cost-calculator/", label: "AI Cost Calculator" },
  { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator" },
  { href: "/guides/agent-cost-management/", label: "Agent Cost Management" },
  { href: "/guides/agent-evaluation-framework/", label: "Agent Evaluation Framework" },
  { href: "/ai-cost/", label: "AI Cost Calculator Hub" },
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
        "Compare all-premium model spend against a routed model mix",
        "Estimate monthly and yearly routing savings before implementation",
        "Adjust token assumptions and workload percentages in the browser",
        "Runs as a static planning tool with no API key or backend",
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
        { "@type": "ListItem", position: 3, name: "Model Routing Savings Calculator", item: tool.canonical },
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
              <Link href="/ai-cost/" className="text-sm text-slate-600 hover:text-slate-900">AI Cost</Link>
              <Link href="/tools/" className="text-sm font-semibold text-emerald-600">Tools</Link>
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
            <li className="font-medium text-slate-900">Model Routing Savings Calculator</li>
          </ol>
        </nav>
      </div>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
            <ArrowRightLeft className="h-4 w-4" /> AI Cost Control
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Model Routing Savings Calculator</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">Estimate how much cheaper a tiered LLM workflow can be.</p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Compare an all-premium model baseline against a routing mix that sends easy work to cheaper models and reserves premium reasoning for hard tasks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tool.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <ModelRoutingSavingsCalculator />

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Quantify whether routing rules are worth implementing before building fallback logic.",
              "Show founders and engineers the budget gap between all-premium traffic and a realistic model mix.",
              "Keep planning private with no database, login, API key, or backend.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
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
              <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-300 hover:shadow-sm">
                <span className="font-semibold text-slate-950 group-hover:text-emerald-600">{link.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-600" />
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
            <Link href="/ai-cost/" className="text-sm text-slate-500 hover:text-slate-900">AI Cost</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
