import Link from "next/link";
import type { PrdTemplate } from "@/data/prdTemplates";

const baseUrl = "https://bestmcpservers.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-14"> <h2 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h2>{children}</section>;
}

export default function PrdTemplatePage({ template }: { template: PrdTemplate }) {
  const canonical = `${baseUrl}/${template.slug}/`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "AI PRD Generator", item: `${baseUrl}/ai-prd-generator/` },
      { "@type": "ListItem", position: 3, name: template.name, item: canonical },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faq.map((faq) => ({
      "@type": "Question",
      name: faq[0],
      acceptedAnswer: { "@type": "Answer", text: faq[1] },
    })),
  };
  const related = template.links.filter((href) => href !== "/ai-prd-generator/");

  return (
    <main className="min-h-screen bg-white">
      {[breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/ai-prd-generator/" className="font-semibold text-blue-600">AI PRD Generator</Link>
            <Link href="/guides/" className="hover:text-slate-950">Guides</Link>
            <Link href="/tools/" className="hover:text-slate-950">Tools</Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li><li>/</li>
            <li><Link href="/ai-prd-generator/" className="hover:text-slate-900">AI PRD Generator</Link></li><li>/</li>
            <li className="font-medium text-slate-900">{template.name}</li>
          </ol>
        </nav>

        <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{template.priority} PRD template</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{template.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{template.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/ai-prd-generator/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">Generate a PRD with AI</Link>
            <a href="#template" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">Read the template</a>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-950">Keyword focus</h2>
          <p className="mt-3 leading-8 text-slate-700">Primary keyword: <strong>{template.primary}</strong>. Secondary terms include {template.secondary.join(", ")}. This page is written for people who want a practical product requirements document, not a thin download page or a vague definition.</p>
        </section>

        <Section title={`What Is a ${template.name}?`}>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Definition and purpose</h3>
          <p className="mt-3 leading-8 text-slate-700">A {template.name} is a structured planning document for a {template.product}. It explains what the product should accomplish, who it is for, which workflows matter most, what the first version must include, and how the team will decide whether the launch is successful. A strong PRD is not only a feature list. It is a decision document that connects customer problems, product scope, design requirements, engineering constraints, launch risks, and measurable outcomes.</p>
          <p className="mt-4 leading-8 text-slate-700">This template is especially useful for {template.audience}. It helps teams avoid the common mistake of jumping straight into implementation before the user problem, success criteria, and acceptance tests are clear. For a {template.product}, the risk is that {template.problem}. A PRD gives the team a shared language before design mockups, tickets, or code are created.</p>
          <h3 className="mt-7 text-xl font-semibold text-slate-900">When to use this template</h3>
          <p className="mt-3 leading-8 text-slate-700">Use it when you are validating an MVP, preparing a build brief, comparing multiple product ideas, or asking an AI tool to generate a first PRD draft. It also works as a review checklist for an existing document. If a section feels difficult to complete, that is a signal that the product decision may still be unclear and should be discussed before implementation.</p>
        </Section>

        <Section title={`${template.name} Overview`}>
          <h3 id="template" className="mt-6 text-xl font-semibold text-slate-900">Recommended PRD sections</h3>
          <p className="mt-3 leading-8 text-slate-700">Start with a one-paragraph product summary that states the user, the problem, the proposed solution, and the expected outcome. Then describe the target personas, the main use cases, the in-scope features, the out-of-scope features, and the metrics that will define success. Keep the language direct. The goal is to help a teammate understand what to build, why it matters, and what tradeoffs are acceptable.</p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700">
            {template.sections.map((section) => <li key={section}><strong>{section}</strong>: define what matters, what is out of scope, and how the team will verify it.</li>)}
          </ul>
          <p className="mt-5 leading-8 text-slate-700">A useful PRD should include constraints as well as requirements. If the product cannot use a database, must ship as a static page, must avoid third-party services, or must follow a strict security model, write that directly in the requirements. Clear constraints prevent scope creep and help engineering choose the simplest architecture that satisfies the launch goal.</p>
        </Section>

        <Section title={`Core Requirements for a ${template.product}`}>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Functional requirements</h3>
          <p className="mt-3 leading-8 text-slate-700">Functional requirements describe what users can do. For this template, each requirement should have a user goal, a trigger, the expected behavior, edge cases, and acceptance criteria. Avoid writing requirements such as “the product should be easy to use.” Instead, define the exact task the user should complete, the inputs they provide, the output they receive, and the state the product should show when something goes wrong.</p>
          <p className="mt-4 leading-8 text-slate-700">For a {template.product}, the most important functional requirements usually sit around {template.sections.slice(0,3).join(", ")}. These areas should be written with enough detail for design and engineering to estimate complexity. If a feature is experimental, mark it as an assumption and describe how the team will validate it after launch.</p>
          <h3 className="mt-7 text-xl font-semibold text-slate-900">Non-functional requirements</h3>
          <p className="mt-3 leading-8 text-slate-700">Non-functional requirements describe quality, reliability, performance, privacy, accessibility, observability, and maintainability. Many early PRDs skip these topics, but they often become the difference between a demo and a usable product. Include performance expectations, data handling rules, logging requirements, browser or device support, fallback behavior, and any security boundaries that affect implementation.</p>
          <h3 className="mt-7 text-xl font-semibold text-slate-900">Acceptance criteria</h3>
          <p className="mt-3 leading-8 text-slate-700">Acceptance criteria should be testable. A reviewer should be able to look at the shipped product and decide whether each requirement passed or failed. Use concrete statements: the user can complete the primary workflow, invalid inputs show a clear error, the system does not store prohibited data, the generated output can be copied, and the page remains indexable for search engines.</p>
        </Section>

        <Section title={`${template.name} Example`}>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Example product ideas</h3>
          <p className="mt-3 leading-8 text-slate-700">The fastest way to use this template is to start with a concrete example and replace the details with your own product. Example directions include {template.examples.join(", ")}. Each example should define one primary persona, one painful workflow, one MVP promise, and one measurable outcome. The PRD should not attempt to cover every possible feature in the category.</p>
          <h3 className="mt-7 text-xl font-semibold text-slate-900">Example PRD summary</h3>
          <p className="mt-3 leading-8 text-slate-700">“We are building a {template.product} for a specific user who struggles with a repeated workflow. The MVP will focus on the smallest version of the workflow that proves demand. The product will include the core requirements listed in this PRD, exclude advanced admin and enterprise features from v1, and measure success by activation, repeated usage, and qualitative feedback from early users.”</p>
          <p className="mt-4 leading-8 text-slate-700">That summary is intentionally simple. A PRD becomes useful when the team adds real constraints: what platforms are supported, what data is required, which states are out of scope, what must be manually reviewed, and what launch threshold justifies more investment. The examples should help the team make decisions rather than decorate the page with generic product language.</p>
        </Section>

        <Section title="How to Use This Template with AI">
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Prompt the AI with constraints</h3>
          <p className="mt-3 leading-8 text-slate-700">Do not only ask an AI model to “write a PRD.” Give it the product type, target user, problem, must-have features, constraints, launch timeline, and known risks. Ask it to return a structured PRD with assumptions clearly labeled. Then use this page as a review checklist. The strongest AI-generated PRDs come from specific inputs and careful human editing.</p>
          <p className="mt-4 leading-8 text-slate-700">A good prompt might say: “Create a {template.name} for a {template.product}. Target users are early adopters. Keep the MVP narrow. Include problem statement, personas, use cases, functional requirements, non-functional requirements, analytics, risks, acceptance criteria, and launch checklist. Mark unknowns as assumptions.”</p>
          <h3 className="mt-7 text-xl font-semibold text-slate-900">Generate the first draft</h3>
          <p className="mt-3 leading-8 text-slate-700">Use the <Link href="/ai-prd-generator/" className="font-semibold text-blue-700 hover:text-blue-900">AI PRD Generator</Link> to generate the first draft, then refine it with stakeholder feedback. The generator is most valuable when it saves blank-page time and reveals missing sections. It should not replace product judgment, customer research, technical review, or legal and security review where those are required.</p>
        </Section>

        <Section title={`${template.name} Checklist`}>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Before you hand this PRD to engineering</h3>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700">
            <li>The target user and primary problem are specific enough to guide scope.</li>
            <li>The MVP includes one core workflow, not a full platform disguised as a first release.</li>
            <li>Every major requirement has acceptance criteria and at least one edge case.</li>
            <li>Out-of-scope features are listed so the team can avoid accidental expansion.</li>
            <li>Security, privacy, performance, analytics, and launch requirements are included.</li>
            <li>The page links back to the <Link href="/ai-prd-generator/" className="font-semibold text-blue-700 hover:text-blue-900">AI PRD Generator</Link> so users can generate a tailored draft.</li>
          </ul>
          <p className="mt-5 leading-8 text-slate-700">If the checklist exposes gaps, treat that as useful product discovery. The purpose of a PRD is not to pretend every answer is known. The purpose is to make known decisions visible, mark assumptions, and create a focused plan that can be reviewed before time is spent on design and code.</p>
        </Section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Related PRD Templates and Tools</h2>
          <p className="mt-3 leading-8 text-slate-700">Continue through the PRD template cluster or generate a custom document from your own product idea.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/ai-prd-generator/" className="rounded-xl border border-blue-200 bg-white p-4 font-semibold text-blue-700 hover:bg-blue-50">AI PRD Generator</Link>
            {related.map((href) => <Link key={href} href={href} className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 hover:border-blue-300">{href.replaceAll("/", "").replaceAll("-", " ")}</Link>)}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">FAQ</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {template.faq.map((faq, index) => (
              <details key={faq[0]} open={index === 0} className="p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{faq[0]}</summary>
                <p className="mt-3 leading-8 text-slate-700">{faq[1]}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
