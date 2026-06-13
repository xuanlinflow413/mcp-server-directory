import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { getTool } from "@/data/developerTools";
import AIPricingCostPackExportGate from "@/components/AIPricingCostPackExportGate";
import AISAASPricingCalculator from "./AISAASPricingCalculator";

const tool = getTool("ai-saas-pricing-calculator");

const featureList = ["Estimate AI cost per active user and paid user", "Turn token spend into Starter and Pro pricing ranges", "Spot free-plan risk before unlimited usage burns budget"];
const useCases = ["Indie AI SaaS launches", "AI wrapper and agent products", "Credit-based Pro plan design", "Free plan and fair-use planning"];
const tips = ["Avoid unlimited free usage until you understand power-user behavior.", "Use credits or monthly caps for expensive generation features.", "Price Pro plans from paid-user cost, not average active-user cost alone."];
const relatedLinks = [{ href: "/guides/how-to-price-an-ai-saas-product/", label: "How to Price an AI SaaS Product" }, { href: "/guides/how-to-estimate-openai-api-costs/", label: "Estimate OpenAI API Costs" }, { href: "/guides/claude-api-cost-guide/", label: "Claude API Cost Guide" }, { href: "/guides/gemini-api-cost-guide/", label: "Gemini API Cost Guide" }, { href: "/ai-prd-generator/", label: "AI PRD Generator" }];

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
      featureList,
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
        { "@type": "ListItem", position: 3, name: tool.name, item: tool.canonical },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between"><Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">BestMCPServers</Link><nav className="flex gap-6"><Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link><Link href="/agents/" className="text-sm text-slate-600 hover:text-slate-900">Agents</Link><Link href="/tools/" className="text-sm font-semibold text-blue-600">Tools</Link></nav></div></div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><ol className="flex items-center gap-2"><li><Link href="/" className="hover:text-slate-900">Home</Link></li><li className="text-slate-300">/</li><li><Link href="/tools/" className="hover:text-slate-900">Developer Tools</Link></li><li className="text-slate-300">/</li><li className="font-medium text-slate-900">{tool.name}</li></ol></nav></div>
      <section className="bg-slate-950 py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300"><Calculator className="h-4 w-4" /> AI SaaS Unit Economics</div><h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{tool.h1}</h1><p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">{tool.intro}</p><p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">{tool.description} Everything runs as a static browser tool with no login, database, or AI API call.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{tool.tags.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>)}</div><div className="mt-8"><Link href="#calculator" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Use the tool <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <AISAASPricingCalculator />

      <AIPricingCostPackExportGate />

      <section className="border-t border-slate-200 bg-slate-50 py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{featureList.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6"><CheckCircle2 className="h-5 w-5 text-blue-600" /><p className="mt-3 text-sm leading-6 text-slate-700">{item}</p></div>)}</div></div></section>
      <section className="py-12"><div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-2xl font-bold text-slate-950">Use cases</h2><div className="mt-5 grid gap-3">{useCases.map((item) => <div key={item} className="rounded-xl border border-slate-200 p-4 text-sm text-slate-700">{item}</div>)}</div></div><div><h2 className="text-2xl font-bold text-slate-950">Best practices</h2><div className="mt-5 grid gap-3">{tips.map((item) => <div key={item} className="rounded-xl border border-slate-200 p-4 text-sm text-slate-700">{item}</div>)}</div></div></div></section>
      <section className="border-t border-slate-200 py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-950">FAQ</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{tool.faqs.map((faq) => <div key={faq.question} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-semibold text-slate-950">{faq.question}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p></div>)}</div></div></section>
      <section className="border-t border-slate-200 bg-slate-50 py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-950">Related tools</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm"><span className="font-semibold text-slate-950 group-hover:text-blue-600">{link.label}</span><ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600" /></Link>)}</div></div></section>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8"><p className="text-sm text-slate-500">&copy; 2026 BestMCPServers. All rights reserved.</p><div className="flex gap-6"><Link href="/" className="text-sm text-slate-500 hover:text-slate-900">Home</Link><Link href="/tools/" className="text-sm text-slate-500 hover:text-slate-900">Tools</Link><Link href="/agents/" className="text-sm text-slate-500 hover:text-slate-900">Agents</Link></div></div></footer>
    </main>
  );
}

