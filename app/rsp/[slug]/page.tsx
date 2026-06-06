import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyPromptButton from "@/components/CopyPromptButton";
import { rspPrompts, getPromptBySlug, getRelatedPrompts } from "@/data/rspPrompts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return rspPrompts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) {
    return {
      title: "Prompt Not Found",
    };
  }
  return {
    metadataBase: new URL("https://bestmcpservers.com"),
    title: prompt.title,
    description: prompt.metaDescription,
    keywords: prompt.keywords,
    alternates: {
      canonical: `https://bestmcpservers.com/rsp/${prompt.slug}/`,
    },
    openGraph: {
      title: prompt.title,
      description: prompt.metaDescription,
      type: "article",
      url: `https://bestmcpservers.com/rsp/${prompt.slug}/`,
      images: [
        {
          url: `https://bestmcpservers.com${prompt.previewImage}`,
          width: 1200,
          height: 675,
          alt: `Preview of ${prompt.h1}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prompt.title,
      description: prompt.metaDescription,
      images: [`https://bestmcpservers.com${prompt.previewImage}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PromptPage({ params }: Props) {
  const prompt = getPromptBySlug(params.slug);
  if (!prompt) {
    notFound();
  }

  const relatedPrompts = getRelatedPrompts(prompt.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prompt.h1,
    description: prompt.metaDescription,
    url: `https://bestmcpservers.com/rsp/${prompt.slug}/`,
    keywords: prompt.keywords.join(", "),
    wordCount: prompt.wordCount,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestmcpservers.com/rsp/${prompt.slug}/`,
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
    mainEntity: prompt.faqs.map((faq) => ({
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
        name: "Prompt Library",
        item: "https://bestmcpservers.com/rsp/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: prompt.h1,
        item: `https://bestmcpservers.com/rsp/${prompt.slug}/`,
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
                href="/rsp/"
                className="text-sm font-semibold text-blue-600"
              >
                Prompt Library
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
              <Link href="/rsp/" className="hover:text-slate-900">
                Prompt Library
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">{prompt.h1}</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* H1 */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {prompt.h1}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{prompt.metaDescription}</p>

        {/* Preview Image */}
        <div className="mt-8 aspect-video rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
          <img
            src={prompt.previewImage}
            alt={`Preview of ${prompt.h1} — AI photo editing result`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Copy Prompt */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Prompt</h2>
            <CopyPromptButton text={prompt.promptText} />
          </div>
          <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
              {prompt.promptText}
            </pre>
          </div>
        </div>

        {/* How to Use */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">How to Use</h2>
          <ol className="mt-6 space-y-4">
            {prompt.howToUse.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* When This Works Best */}
        {prompt.whenWorksBest && prompt.whenWorksBest.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">When This Prompt Works Best</h2>
            <ul className="mt-6 space-y-3">
              {prompt.whenWorksBest.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="h-6 w-6 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Mistakes */}
        {prompt.commonMistakes && prompt.commonMistakes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
            <ul className="mt-6 space-y-3">
              {prompt.commonMistakes.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="h-6 w-6 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lighting Tips */}
        {prompt.lightingTips && prompt.lightingTips.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Lighting Tips</h2>
            <ul className="mt-6 space-y-3">
              {prompt.lightingTips.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="h-6 w-6 shrink-0 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* When To Use This Prompt */}
        {prompt.whenToUse && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">When To Use This Prompt</h2>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {prompt.whenToUse}
              </p>
            </div>
          </div>
        )}

        {/* Best Results Tips */}
        {prompt.bestResultsTips && prompt.bestResultsTips.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Best Results Tips</h2>
            <ul className="mt-6 space-y-3">
              {prompt.bestResultsTips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="h-6 w-6 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600 leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Before You Generate */}
        {prompt.beforeYouGenerate && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Before You Generate</h2>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {prompt.beforeYouGenerate}
              </p>
            </div>
          </div>
        )}

        {/* Prompt Variations */}
        {prompt.promptVariations && prompt.promptVariations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">Prompt Variations</h2>
            <p className="mt-2 text-slate-600">Try these related versions for different creative directions.</p>
            <div className="mt-6 space-y-6">
              {prompt.promptVariations.map((variation, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{variation.name}</h3>
                    <CopyPromptButton text={variation.prompt} />
                  </div>
                  <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {variation.prompt}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {prompt.faqs.map((faq, index) => (
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
        </div>

        {/* Related Prompts */}
        {relatedPrompts.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Prompts
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPrompts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/rsp/${related.slug}/`}
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
          </div>
        )}

        {/* Back to library */}
        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700">
            Browse more AI photo editing prompts in our{" "}
            <Link
              href="/rsp/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              AI Prompt Library
            </Link>
            . We add new RSP prompts weekly for cinematic, aesthetic, anime, and
            creative photo transformations.
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
                href="/rsp/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Prompt Library
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
