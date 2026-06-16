import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServerCard from "@/components/ServerCard";
import { categories, servers, type Category } from "@/data/servers";

const baseUrl = "https://bestmcpservers.com";

type CategoryPageConfig = {
  label: string;
  category: Category;
  featuredIds?: string[];
  title: string;
  description: string;
  intro: string;
};

const categoryPages: Record<string, CategoryPageConfig> = {
  database: {
    label: "Database",
    category: "database" as Category,
    title: "Database MCP Servers | BestMCPServers",
    description: "Find database MCP servers for PostgreSQL, SQLite, Redis, schema inspection, read-only queries, and safer AI data workflows.",
    intro: "Database MCP servers help Claude, Cursor, and AI agents inspect schemas, query sandbox data, and reason about product data with explicit access boundaries.",
  },
  github: {
    label: "GitHub",
    category: "devtools" as Category,
    featuredIds: ["github"],
    title: "GitHub MCP Servers | BestMCPServers",
    description: "Find GitHub MCP servers and developer-tool servers for repositories, pull requests, issues, search, and coding-agent workflows.",
    intro: "GitHub MCP workflows connect AI assistants to repository context, issues, pull requests, and collaboration tasks without pasting everything into chat.",
  },
  browser: {
    label: "Browser",
    category: "browser" as Category,
    title: "Browser MCP Servers | BestMCPServers",
    description: "Compare browser MCP servers for web automation, page inspection, scraping, testing, and AI agent research workflows.",
    intro: "Browser MCP servers let agents inspect pages, automate flows, and collect web evidence, but they should be isolated from destructive tools and secrets.",
  },
  filesystem: {
    label: "Filesystem",
    category: "file-system" as Category,
    title: "Filesystem MCP Servers | BestMCPServers",
    description: "Find filesystem MCP servers for local project folders, documentation, repository inspection, and safer AI coding workflows.",
    intro: "Filesystem MCP servers give AI clients controlled access to local files. The safest setups use explicit project roots and review generated diffs before writes.",
  },
  slack: {
    label: "Slack",
    category: "communication" as Category,
    featuredIds: ["slack"],
    title: "Slack MCP Servers | BestMCPServers",
    description: "Find Slack MCP servers and communication MCP tools for team messages, support workflows, agent notifications, and collaboration automation.",
    intro: "Slack MCP servers can help agents read or send team messages, but production workflows need clear channel scopes, approval rules, and redacted logs.",
  },
} as const;

type CategorySlug = keyof typeof categoryPages;

export function generateStaticParams() {
  return Object.keys(categoryPages).map((slug) => ({ slug }));
}

function getCategoryPage(slug: string) {
  return categoryPages[slug as CategorySlug];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getCategoryPage(params.slug);
  if (!page) return {};
  const canonical = `${baseUrl}/category/${params.slug}/`;

  return {
    metadataBase: new URL(baseUrl),
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: { title: page.title, description: page.description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const page = getCategoryPage(params.slug);
  if (!page) notFound();

  const categoryLabel = categories.find((category) => category.value === page.category)?.label ?? page.label;
  const pageServers = servers.filter((server) => {
    if ("featuredIds" in page && page.featuredIds?.includes(server.id)) return true;
    return server.category === page.category;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/mcp-server-directory/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← MCP Server Directory</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">{categoryLabel} MCP Servers</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{page.label} MCP Servers</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{page.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/mcp-server-directory/" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">Browse all MCP servers</Link>
            <Link href="/tools/mcp-server-config-generator/" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Generate MCP config</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Recommended {page.label.toLowerCase()} servers</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Start with the servers below, then review permissions, credentials, and client-specific setup before connecting production resources.</p>
          </div>
          <Link href="/mcp-server-security/" className="text-sm font-semibold text-blue-700 hover:text-blue-900">Review security checklist →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pageServers.map((server) => <ServerCard key={server.id} server={server} />)}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Best first use case</h2>
            <p className="mt-4 leading-7 text-slate-600">Use this category when the agent has a clear task that needs structured access, not as a default permission bundle for every chat.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Setup checklist</h2>
            <p className="mt-4 leading-7 text-slate-600">Install one server, confirm the client can discover tools, run a harmless test, and document any tokens or paths as placeholders only.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Safety boundary</h2>
            <p className="mt-4 leading-7 text-slate-600">Prefer read-only access first, avoid broad production credentials, and require review before write-capable or external-facing actions.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
