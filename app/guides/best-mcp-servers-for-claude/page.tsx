import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "Best MCP Servers for Claude Desktop in 2026 | Curated Picks",
  description:
    "A curated list of the best MCP servers for Claude Desktop. From filesystem access to web search and databases — find servers that actually work with Claude.",
  keywords: [
    "best mcp servers for claude",
    "claude mcp servers",
    "mcp servers claude desktop",
    "claude desktop mcp",
    "model context protocol claude",
    "claude mcp integration",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/guides/best-mcp-servers-for-claude/",
  },
  openGraph: {
    title: "Best MCP Servers for Claude Desktop in 2026 | Curated Picks",
    description:
      "A curated list of the best MCP servers for Claude Desktop. From filesystem access to web search and databases — find servers that actually work with Claude.",
    type: "article",
    url: "https://bestmcpservers.com/guides/best-mcp-servers-for-claude/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Servers for Claude Desktop in 2026 | Curated Picks",
    description:
      "A curated list of the best MCP servers for Claude Desktop. From filesystem access to web search and databases.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Does Claude API support MCP servers?",
    answer:
      "No. MCP servers only work with Claude Desktop, not the Claude API. The Model Context Protocol requires a local runtime that the API does not provide. If you need tool use via API, use Anthropic&apos;s function calling instead.",
  },
  {
    question: "How many MCP servers can I run in Claude Desktop at once?",
    answer:
      "There is no hard limit, but the practical limit is around 5–10 servers depending on complexity. Each server adds startup time and memory overhead. If Claude feels slow, try reducing the number of active servers.",
  },
  {
    question: "Are MCP servers free?",
    answer:
      "Most official MCP servers are open-source and free to use. However, some servers require API keys for third-party services — for example, Brave Search needs a Brave Search API key. Always check the server&apos;s documentation for credential requirements.",
  },
  {
    question: "Why isn&apos;t my MCP server showing up in Claude?",
    answer:
      "Common causes: (1) Wrong config file path — Claude Desktop uses ~/Library/Application Support/Claude/claude_desktop_config.json on macOS. (2) Invalid JSON syntax. (3) npx is not in your PATH. (4) You forgot to restart Claude Desktop after editing the config.",
  },
  {
    question: "Can I build a custom MCP server for Claude?",
    answer:
      "Yes. The Model Context Protocol is open, and Anthropic provides SDKs for TypeScript and Python. A custom server implements the MCP protocol over stdio or HTTP and exposes tools, resources, and prompts that Claude can discover and use.",
  },
];

export default function BestMcpServersForClaudePage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://bestmcpservers.com/guides/" },
            { "@type": "ListItem", position: 3, name: "Best MCP Servers for Claude Desktop in 2026 | Curated Picks", item: "https://bestmcpservers.com/guides/best-mcp-servers-for-claude/" },
          ],
        }) }}
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
                href="/guides/how-to-install-mcp-servers-in-cursor/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Cursor Guide
              </Link>
              <Link
                href="/guides/browser-mcp-servers/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Browser MCP
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
            <li className="font-medium text-slate-900">Guides</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* H1 */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Best MCP Servers for Claude Desktop
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A curated list of MCP servers that work well with Claude Desktop. Each
          server listed here has been verified to install via npx and connect
          correctly to Claude.
        </p>

        {/* H2: What Makes an MCP Server Good for Claude? */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          What Makes an MCP Server Good for Claude?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Not every MCP server works equally well in Claude Desktop. A good
          Claude-compatible server should: (1) install cleanly via npx without
          complex build steps, (2) use stdio transport (the default for Claude
          Desktop), (3) expose tools with clear descriptions so Claude knows
          when to use them, and (4) handle errors gracefully without crashing
          the connection.
        </p>

        {/* H2: Top MCP Servers for Claude Desktop */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          Top MCP Servers for Claude Desktop
        </h2>

        {/* H3: Filesystem */}
        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Filesystem — Local File Access
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The official Filesystem MCP server lets Claude read, write, and search
          files in directories you explicitly allow. This is the most commonly
          used server because it directly addresses Claude&apos;s inability to access
          your local files.
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/dir
          </code>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong>Use case:</strong> Editing code, analyzing logs, batch-renaming
          files, or summarizing documents. The server respects the allowed
          directory boundary — it cannot escape outside the paths you configure.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H3: Brave Search */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Brave Search — Web Search
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Brave Search gives Claude the ability to search the web. Unlike
          training data which has a cutoff date, this server lets Claude retrieve
          current information. You need a free Brave Search API key.
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-brave-search
          </code>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong>Use case:</strong> Researching current events, checking
          documentation for recent API changes, or finding libraries that did not
          exist at training time.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H3: GitHub */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          GitHub — Repository Operations
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The GitHub MCP server enables Claude to read repositories, search code,
          create issues, and manage pull requests. It requires a GitHub personal
          access token with appropriate scopes.
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-github
          </code>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong>Use case:</strong> Reviewing PRs, searching across repos,
          creating issues from conversation context, or analyzing code without
          cloning locally.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H3: PostgreSQL */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          PostgreSQL — Database Queries
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The PostgreSQL server provides read-only database access with schema
          inspection. Claude can list tables, describe columns, and run SELECT
          queries. It does not allow writes by default.
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-postgres
            postgresql://localhost/mydb
          </code>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong>Use case:</strong> Exploring database schemas, writing queries
          from natural language descriptions, or analyzing data without opening a
          SQL client.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H3: Puppeteer */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Puppeteer — Browser Automation
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Puppeteer lets Claude control a headless Chromium browser. It can
          navigate to URLs, click elements, fill forms, take screenshots, and
          extract page content. This is useful when a site blocks simple HTTP
          fetch or requires JavaScript execution.
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-puppeteer
          </code>
        </div>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong>Use case:</strong> Scraping JavaScript-rendered pages,
          taking screenshots for visual comparison, or automating web workflows
          that require interaction.
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H2: How to Install MCP Servers in Claude Desktop */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          How to Install MCP Servers in Claude Desktop
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          All the servers above use the same installation pattern. Open Claude
          Desktop, go to Settings → Developer → Edit Config, and add the server
          to your{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            claude_desktop_config.json
          </code>
          . Here is an example with multiple servers:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/projects"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-key-here"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Save the file and restart Claude Desktop. The servers will appear as
          available tools when you start a new conversation.
        </p>

        {/* H2: Claude Desktop vs. Claude API */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Claude Desktop vs. Claude API: MCP Support
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          This is the most important distinction to understand.{" "}
          <strong>Claude Desktop supports MCP servers.</strong> The Claude API
          does not. If you are building an application that calls the Anthropic
          API directly, you cannot plug in an MCP server. Instead, implement
          function calling with the{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            tools
          </code>{" "}
          parameter.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          MCP is essentially a standardized wrapper around the same concept. The
          protocol defines how tools are discovered and called, but the
          underlying mechanism — the model deciding to invoke an external
          function — is the same.
        </p>

        {/* H2: Troubleshooting Common Issues */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Troubleshooting Common Issues
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Server does not appear in Claude
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Check the config file path. On macOS it is{" "}
              <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
              . On Windows:{" "}
              <code>%APPDATA%/Claude/claude_desktop_config.json</code>. Validate
              your JSON — a trailing comma will break it.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              &quot;npx: command not found&quot;
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Claude Desktop inherits PATH from your shell profile on macOS, but
              not always on Windows. Try using the full path to npx (run{" "}
              <code>which npx</code> or <code>where npx</code> to find it) or
              ensure Node.js is installed system-wide.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Permission denied errors
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              The Filesystem server only accesses directories you explicitly
              list. If you see permission errors, verify the path in the args
              array is correct and that your user has read/write access.
            </p>
          </div>
        </div>

        {/* H2: FAQ */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
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

        {/* Back to directory */}
        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700">
            Browse more MCP servers in our{" "}
            <Link
              href="/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              curated MCP server directory
            </Link>
            . We list servers for Claude, Cursor, and generic clients across
            categories including filesystem, database, web, browser, and more.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 MCP Server Directory. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/modelcontextprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                MCP Protocol
              </a>
              <a
                href="https://github.com/modelcontextprotocol/servers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Official Servers
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
