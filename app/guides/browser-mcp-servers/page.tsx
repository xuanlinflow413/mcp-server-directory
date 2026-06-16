import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "Browser MCP Servers: Puppeteer, Playwright & Browserbase Compared",
  description:
    "Compare browser MCP servers for AI agents. Puppeteer, Playwright, and Browserbase — features, setup, and which one fits your workflow.",
  keywords: [
    "browser mcp servers",
    "mcp browser automation",
    "puppeteer mcp server",
    "playwright mcp",
    "browserbase mcp",
    "mcp web scraping",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/guides/browser-mcp-servers/",
  },
  openGraph: {
    title: "Browser MCP Servers: Puppeteer, Playwright & Browserbase Compared",
    description:
      "Compare browser MCP servers for AI agents. Puppeteer, Playwright, and Browserbase — features, setup, and which one fits your workflow.",
    type: "article",
    url: "https://bestmcpservers.com/guides/browser-mcp-servers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browser MCP Servers: Puppeteer, Playwright & Browserbase Compared",
    description:
      "Compare browser MCP servers for AI agents. Puppeteer, Playwright, and Browserbase.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Can browser MCP servers handle JavaScript-heavy sites?",
    answer:
      "Yes. Playwright and Browserbase both handle JavaScript-rendered content well. Puppeteer also supports JavaScript execution since it controls a full Chromium instance. For SPAs or sites that load content dynamically, any of these three will work.",
  },
  {
    question: "Do I need a separate browser installed?",
    answer:
      "No. Puppeteer and Playwright download their own browser binaries (Chromium for Puppeteer; Chromium, Firefox, or WebKit for Playwright) on first run. Browserbase is cloud-hosted, so no local browser is needed at all.",
  },
  {
    question: "Are browser MCP servers safe to run?",
    answer:
      "They can navigate arbitrary URLs, so run them in an isolated environment if possible. The Puppeteer and Playwright servers run locally and inherit your network access. Browserbase runs in their cloud infrastructure, which provides additional isolation.",
  },
  {
    question: "Can I take screenshots with a browser MCP server?",
    answer:
      "Yes. All three servers — Puppeteer, Playwright, and Browserbase — support screenshot operations. This is one of the most common use cases: asking Claude to &apos;take a screenshot of example.com&apos; or 'compare the current page to the design mockup&apos;.",
  },
  {
    question: "Which browser MCP server is easiest to set up?",
    answer:
      "Puppeteer is the easiest for local use — one npx command and it downloads Chromium automatically. Browserbase is easiest if you already have an API key and prefer not to manage browsers locally. Playwright requires slightly more setup but offers the most flexibility.",
  },
];

export default function BrowserMcpServersPage() {
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
            { "@type": "ListItem", position: 3, name: "Browser MCP Servers: Puppeteer, Playwright & Browserbase Compared", item: "https://bestmcpservers.com/guides/browser-mcp-servers/" },
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
                href="/guides/best-mcp-servers-for-claude/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Claude Guide
              </Link>
              <Link
                href="/guides/how-to-install-mcp-servers-in-cursor/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Cursor Guide
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
          Browser MCP Servers for AI Agents
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A comparison of browser automation MCP servers. Learn what Puppeteer,
          Playwright, and Browserbase can do, how to set them up, and which one
          fits your use case.
        </p>

        {/* H2: What Can Browser MCP Servers Do? */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          What Can Browser MCP Servers Do?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          A browser MCP server gives Claude or Cursor the ability to control a
          web browser. This means the AI can navigate to URLs, click buttons,
          fill forms, extract text, take screenshots, and execute JavaScript —
          all through natural language prompts. This is useful when:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>A website blocks simple HTTP requests or requires JavaScript</li>
          <li>You need to interact with a page (click, scroll, type) rather than just fetch it</li>
          <li>You want a visual screenshot for comparison or debugging</li>
          <li>You need to automate a multi-step web workflow</li>
        </ul>

        {/* H2: Puppeteer MCP Server */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Puppeteer MCP Server
        </h2>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          What It Does
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          The official Puppeteer MCP server from Anthropic controls a headless
          Chromium browser. It exposes tools for navigation, clicking, typing,
          screenshot capture, and JavaScript evaluation. It is the simplest
          browser server to get running.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Setup & Config
        </h3>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @modelcontextprotocol/server-puppeteer
          </code>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Add to your <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">claude_desktop_config.json</code> or <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">mcp.json</code>:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          On first run, Puppeteer downloads a compatible Chromium binary
          automatically. No separate browser installation is required.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Limitations
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
          <li>Only Chromium — no Firefox or WebKit support</li>
          <li>Runs locally, consuming your machine&apos;s RAM and CPU</li>
          <li>Some sites detect headless Chromium and block it</li>
          <li>No built-in session persistence across restarts</li>
        </ul>
        <p className="mt-3">
          <a
            href="https://github.com/modelcontextprotocol/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H2: Playwright MCP Server */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Playwright MCP Server
        </h2>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          What It Does
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Microsoft&apos;s Playwright MCP server offers multi-browser support
          (Chromium, Firefox, WebKit) and a more robust automation engine. It is
          designed for end-to-end testing and handles edge cases like file
          uploads, downloads, and mobile viewport emulation better than
          Puppeteer.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Setup & Config
        </h3>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @playwright/mcp-server
          </code>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Add to your configuration:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp-server"]
    }
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Playwright downloads browser binaries on first run. You can specify
          which browser to use via environment variables if needed.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Limitations
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
          <li>Larger download size due to multiple browser binaries</li>
          <li>Slightly slower startup than Puppeteer</li>
          <li>Still runs locally with the same resource constraints</li>
        </ul>
        <p className="mt-3">
          <a
            href="https://github.com/microsoft/playwright-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H2: Browserbase MCP Server */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Browserbase MCP Server
        </h2>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          What It Does
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Browserbase is a cloud-hosted browser automation platform. Unlike
          Puppeteer and Playwright which run browsers on your machine,
          Browserbase runs them in the cloud. This eliminates local resource
          usage and provides features like session recording, stealth mode, and
          proxy rotation.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Setup & Config
        </h3>
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <code className="text-sm text-slate-300">
            npx -y @browserbasehq/mcp-server-browserbase
          </code>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          You need a Browserbase API key. Add to your configuration:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": ["-y", "@browserbasehq/mcp-server-browserbase"],
      "env": {
        "BROWSERBASE_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
          </pre>
        </div>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          When to Choose Browserbase
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
          <li>You want to avoid managing local browser infrastructure</li>
          <li>You need stealth mode to avoid bot detection</li>
          <li>You want session recording and debugging tools</li>
          <li>You run MCP servers on a low-resource machine (e.g., cloud VM)</li>
        </ul>
        <p className="mt-3">
          <a
            href="https://github.com/browserbase/mcp-server-browserbase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            View on GitHub →
          </a>
        </p>

        {/* H2: Comparison Table */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Comparison Table
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 border-b border-slate-200">
                  Feature
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 border-b border-slate-200">
                  Puppeteer
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 border-b border-slate-200">
                  Playwright
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 border-b border-slate-200">
                  Browserbase
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">Hosting</td>
                <td className="px-4 py-3 text-slate-600">Local</td>
                <td className="px-4 py-3 text-slate-600">Local</td>
                <td className="px-4 py-3 text-slate-600">Cloud</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Browsers</td>
                <td className="px-4 py-3 text-slate-600">Chromium</td>
                <td className="px-4 py-3 text-slate-600">Chromium, Firefox, WebKit</td>
                <td className="px-4 py-3 text-slate-600">Chromium</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">API Key Required</td>
                <td className="px-4 py-3 text-slate-600">No</td>
                <td className="px-4 py-3 text-slate-600">No</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Screenshot</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Stealth Mode</td>
                <td className="px-4 py-3 text-slate-600">Limited</td>
                <td className="px-4 py-3 text-slate-600">Limited</td>
                <td className="px-4 py-3 text-slate-600">Built-in</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Setup Difficulty</td>
                <td className="px-4 py-3 text-slate-600">Easiest</td>
                <td className="px-4 py-3 text-slate-600">Easy</td>
                <td className="px-4 py-3 text-slate-600">Medium (needs API key)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Best For</td>
                <td className="px-4 py-3 text-slate-600">Quick local automation</td>
                <td className="px-4 py-3 text-slate-600">Multi-browser testing</td>
                <td className="px-4 py-3 text-slate-600">Production, stealth</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H2: Which One Should You Use? */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Which One Should You Use?
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Choose Puppeteer if...
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              You want the fastest setup, only need Chromium, and are running on
              a machine with sufficient RAM. Good for personal workflows and
              quick experiments.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Choose Playwright if...
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              You need cross-browser support (Firefox/WebKit testing) or want
              the most robust automation engine. Slightly more overhead but
              handles edge cases better.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Choose Browserbase if...
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              You want zero local browser management, need stealth capabilities,
              or run on a server without a display. Requires a Browserbase
              account and API key.
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
            Browse all browser and web automation servers in our{" "}
            <Link
              href="/mcp-server-directory/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              MCP server directory
            </Link>
            . We also list web scraping servers like Fetch and Firecrawl that
            complement browser automation tools. If this browser access will be
            used by Claude, Cursor, or Codex workflows, review the{" "}
            <Link
              href="/mcp-server-security/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              MCP server security checklist
            </Link>{" "}
            and the relevant workflow pack before giving an agent broad web access.
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
