import Link from "next/link";
import type { VeoGuide } from "@/data/veoGuides";

const toolHref = "/tools/veo-prompt-generator/";
const toolUrl = "https://bestmcpservers.com/tools/veo-prompt-generator/";

export default function VeoGuidePage({ guide }: { guide: VeoGuide }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://bestmcpservers.com/guides/" },
      { "@type": "ListItem", position: 3, name: guide.h1, item: guide.url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {[breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-950">Home</Link>
            <Link href="/tools/" className="hover:text-slate-950">Tools</Link>
            <Link href={toolHref} className="font-semibold text-blue-600">Veo Generator</Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides/" className="hover:text-slate-900">Guides</Link></li>
            <li>/</li>
            <li className="font-medium text-slate-900">{guide.h1}</li>
          </ol>
        </nav>

        <div className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{guide.primaryKeyword}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{guide.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{guide.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={toolHref} className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">
              Try the Veo Prompt Generator
            </Link>
            <a href="#examples" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">
              View prompt examples
            </a>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-950">Quick answer</h2>
          <p className="mt-3 leading-8 text-slate-700">
            The best {guide.primaryKeyword} combine a clear subject, one visible action, a specific scene, camera movement, lighting, style, and duration. If you want a faster starting point, open the <Link href={toolHref} className="font-semibold text-blue-700 hover:text-blue-900">Veo Prompt Generator</Link>, fill in those fields, then refine the output using the examples and guidelines below.
          </p>
        </section>

        <aside className="mt-10 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-950">In this Veo prompt cluster</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                {link.title}
              </Link>
            ))}
            <Link href={toolHref} className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Free Veo Prompt Generator
            </Link>
          </div>
        </aside>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 80)} className="mt-4 leading-8 text-slate-700">{paragraph}</p>
            ))}
          </section>
        ))}

        <section id="examples" className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Copyable Veo prompt examples</h2>
          <p className="mt-3 leading-8 text-slate-700">Use these examples as starting points, then customize the subject, scene, camera, lighting, and duration for your own concept.</p>
          <div className="mt-6 space-y-4">
            {guide.examples.map((example, index) => (
              <div key={example} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-blue-600">Example {index + 1}</p>
                <p className="mt-2 leading-7 text-slate-700">{example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-bold">Create Your Own Veo Prompt</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Use the free Veo Prompt Generator to turn your idea into a structured prompt with scene, camera, lighting, style, motion, and duration details. It runs as a static browser tool and does not require a login, database, payment, or API key.
          </p>
          <Link href={toolHref} className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">
            Try the Veo Prompt Generator
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {guide.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{faq.question}</summary>
                <p className="mt-3 leading-8 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-950">Internal links</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li><Link href={toolHref} className="font-semibold text-blue-700 hover:text-blue-900">Veo Prompt Generator</Link></li>
            {guide.links.map((link) => (
              <li key={link.href}><Link href={link.href} className="font-semibold text-blue-700 hover:text-blue-900">{link.title}</Link></li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
