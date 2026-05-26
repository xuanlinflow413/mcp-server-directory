import Link from "next/link";

const guides = [
  {
    slug: "best-mcp-servers-for-claude",
    title: "Best MCP Servers for Claude Desktop",
    description:
      "A curated list of the best MCP servers for Claude Desktop. From filesystem access to web search and databases.",
  },
  {
    slug: "how-to-install-mcp-servers-in-cursor",
    title: "How to Install MCP Servers in Cursor",
    description:
      "A step-by-step guide to installing and configuring MCP servers in Cursor IDE.",
  },
  {
    slug: "browser-mcp-servers",
    title: "Browser MCP Servers Compared",
    description:
      "Puppeteer, Playwright, and Browserbase — features, setup, and which one fits your workflow.",
  },
];

export default function GuidesSection() {
  return (
    <section className="bg-white py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Guides
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Step-by-step tutorials and comparisons to help you get the most out of MCP servers.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}/`}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {guide.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
