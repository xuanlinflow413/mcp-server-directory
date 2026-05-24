export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Best MCP Servers for Claude, Cursor & AI Agents
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Browse 20+ curated Model Context Protocol servers. Find, compare, and install the best MCP servers for your AI workflow.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#servers"
              className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Browse Servers
            </a>
            <a
              href="#install"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              How to Install
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
