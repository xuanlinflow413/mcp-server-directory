import Link from "next/link";

export type McpSeoPageConfig = {
  eyebrow: string;
  h1: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  cards: Array<{ title: string; text: string }>;
  sections: Array<{ heading: string; body: string; bullets: string[] }>;
};

export function McpSeoPage({ config }: { config: McpSeoPageConfig }) {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← BestMCPServers</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">{config.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{config.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{config.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={config.primaryCta.href} className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              {config.primaryCta.label}
            </Link>
            {config.secondaryCta ? (
              <Link href={config.secondaryCta.href} className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                {config.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {config.cards.map((card) => (
          <section key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
          </section>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {config.sections.map((section) => (
            <article key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
              <p className="mt-4 leading-7 text-slate-600">{section.body}</p>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Next step</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Turn server research into a safer MCP workflow</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Use the directory and security checklist to choose a stack, then move into workflow packs when you need prompts, config notes, verification steps, and implementation guidance.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/mcp-server-directory/" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100">Browse MCP Server Directory</Link>
            <Link href="/mcp-server-security/" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Review MCP Server Security</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
