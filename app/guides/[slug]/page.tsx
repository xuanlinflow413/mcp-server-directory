import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";
import { agentSecurityGuides, getAgentSecurityGuide } from "@/data/agentSecurityGuides";

const baseUrl = "https://bestmcpservers.com";
const clusterTitle = "Agent Security Guides";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return agentSecurityGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getAgentSecurityGuide(params.slug);
  if (!guide) return {};

  const url = `${baseUrl}/guides/${guide.slug}/`;
  return {
    metadataBase: new URL(baseUrl),
    title: guide.title,
    description: guide.description,
    keywords: [
      guide.primaryKeyword,
      "agent security",
      "prompt injection",
      "agent monitoring",
      "agent evaluation",
      "agent reliability",
      "AI agents",
      "LLM security",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url,
      siteName: "BestMCPServers",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
    robots: { index: true, follow: true },
  };
}

export default function AgentSecurityGuidePage({ params }: { params: { slug: string } }) {
  const guide = getAgentSecurityGuide(params.slug);
  if (!guide) notFound();

  const url = `${baseUrl}/guides/${guide.slug}/`;
  const siblingGuides = agentSecurityGuides.filter((item) => item.slug !== guide.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides/` },
      { "@type": "ListItem", position: 3, name: guide.h1, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    datePublished: guide.updated,
    dateModified: guide.updated,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "BestMCPServers" },
    publisher: { "@type": "Organization", name: "BestMCPServers" },
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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

      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/guides/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
            ← Back to guides
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-100">
            <ShieldCheck className="h-4 w-4" />
            {guide.eyebrow}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{guide.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{guide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full bg-white/10 px-4 py-2">Updated {guide.updated}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">{guide.readingTime}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Keyword: {guide.primaryKeyword}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <div className="min-w-0">
          <section className="space-y-6">
            {guide.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-slate-700">{paragraph}</p>
            ))}
          </section>

          <section className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-950">Key takeaways</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {guide.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-6 w-6 text-emerald-700" />
              <h2 className="text-3xl font-bold text-slate-950">Implementation checklist</h2>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {guide.checklist.map((item) => (
                <li key={item} className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm leading-6 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-950">FAQ</h2>
            <div className="mt-6 divide-y divide-slate-200">
              {guide.faq.map((item) => (
                <div key={item.question} className="py-5">
                  <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{clusterTitle}</h2>
            <div className="mt-5 space-y-4">
              {siblingGuides.map((item) => (
                <Link key={item.slug} href={`/guides/${item.slug}/`} className="group block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm">
                  <h3 className="font-semibold text-slate-950 group-hover:text-blue-700">{item.h1}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Useful links</h2>
            <div className="mt-5 space-y-3 text-sm font-semibold text-blue-700">
              <Link className="flex items-center justify-between" href="/agents/">Browse AI agents <ArrowRight className="h-4 w-4" /></Link>
              <Link className="flex items-center justify-between" href="/tools/ai-cost-calculator/">AI Cost Calculator <ArrowRight className="h-4 w-4" /></Link>
              <Link className="flex items-center justify-between" href="/tools/">Developer tools <ArrowRight className="h-4 w-4" /></Link>
              <Link className="flex items-center justify-between" href="/guides/">All guides <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}
