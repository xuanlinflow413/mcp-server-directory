import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "How to Install MCP Servers in Cursor (Step-by-Step Guide)",
  description:
    "A step-by-step guide to installing and configuring MCP servers in Cursor. Covers settings, config file location, and tested server examples.",
  keywords: [
    "how to install mcp servers in cursor",
    "cursor mcp setup",
    "cursor mcp servers",
    "mcp cursor ide",
    "cursor model context protocol",
    "cursor mcp configuration",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/guides/how-to-install-mcp-servers-in-cursor/",
  },
  openGraph: {
    title: "How to Install MCP Servers in Cursor (Step-by-Step Guide)",
    description:
      "A step-by-step guide to installing and configuring MCP servers in Cursor. Covers settings, config file location, and tested server examples.",
    type: "article",
    url: "https://bestmcpservers.com/guides/how-to-install-mcp-servers-in-cursor/",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install MCP Servers in Cursor (Step-by-Step Guide)",
    description:
      "A step-by-step guide to installing and configuring MCP servers in Cursor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What Cursor version do I need for MCP support?",
    answer:
      "MCP support was introduced in Cursor 0.45+. Make sure you are on the latest version. MCP tools only work in Agent mode, not in Chat mode.",
  },
  {
    question: "Where is the MCP config file in Cursor?",
    answer:
      "Cursor looks for ~/.cursor/mcp.json (macOS/Linux) or %USERPROFILE%\.cursor\mcp.json (Windows). Some versions also support a project-level .cursor/mcp.json file. Check Cursor Settings → MCP to see the active config path.",
  },
  {
    question: "Why does my MCP server work in Claude but not in Cursor?",
    answer:
      "The most common reason is path handling differences. Cursor may not inherit your shell&apos;s PATH on all platforms. Try using the absolute path to npx or node in the command field. Also verify you are in Agent mode — MCP tools do not run in regular Chat.",
  },
  {
    question: "Can I use the same MCP servers in Cursor and Claude Desktop?",
    answer:
      "Yes. The servers themselves are identical — they speak the same Model Context Protocol. Only the configuration location and format differ. Claude uses claude_desktop_config.json; Cursor uses mcp.json.",
  },
  {
    question: "Do MCP servers work in Cursor&apos;s Chat mode or only Agent mode?",
    answer:
      "MCP servers only work in Agent mode. In Chat mode, Cursor does not invoke external tools. Switch to Agent mode (Cmd/Ctrl + I) to use MCP capabilities.",
  },
];

export default function CursorInstallGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold text-slate-900 hover:text-slate-700"
            >
              BestMCPServers.com
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Directory
              </Link>
              <Link
                href="/guides/best-mcp-servers-for-claude/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Claude Guide
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

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* H1 */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Install MCP Servers in Cursor
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A complete step-by-step guide to configuring MCP servers in Cursor IDE.
          Covers the config file location, format differences from Claude Desktop,
          and working examples you can copy.
        </p>

        {/* H2: Does Cursor Support MCP? */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          Does Cursor Support MCP?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Yes. Cursor added MCP support in version 0.45+. However, there are two
          important caveats: (1) MCP tools only work in{" "}
          <strong>Agent mode</strong>, not in regular Chat mode. (2) The
          configuration format is slightly different from Claude Desktop. This
          guide covers both.
        </p>

        {/* H2: Where to Add MCP Server Configuration in Cursor */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          Where to Add MCP Server Configuration in Cursor
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Cursor reads MCP configuration from a JSON file. The location depends
          on your operating system:
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm font-medium text-slate-900">macOS / Linux</p>
            <code className="mt-1 block text-sm text-slate-700">
              ~/.cursor/mcp.json
            </code>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm font-medium text-slate-900">Windows</p>
            <code className="mt-1 block text-sm text-slate-700">
              %USERPROFILE%\.cursor\mcp.json
            </code>
          </div>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Some Cursor versions also support a project-level config at{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            .cursor/mcp.json
          </code>{" "}
          inside your project root. To verify which config is active, open
          Cursor Settings → MCP.
        </p>

        {/* H2: Step-by-Step Installation */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Step-by-Step Installation
        </h2>

        {/* H3: Step 1 */}
        <h3 className="mt-8 text-xl font-semibold text-slate-900">
          Step 1 — Open Cursor Settings
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Open Cursor and navigate to Settings. You can use the keyboard shortcut{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Cmd + ,
          </kbd>{" "}
          (macOS) or{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Ctrl + ,
          </kbd>{" "}
          (Windows/Linux). In the Settings panel, look for the MCP section to
          confirm your version supports it.
        </p>

        {/* H3: Step 2 */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Step 2 — Add MCP Server Config
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Create or edit the{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcp.json
          </code>{" "}
          file. The format is similar to Claude Desktop but uses a top-level{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcpServers
          </code>{" "}
          key. Here is a working example with the Filesystem server:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/your/project"]
    }
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Important difference from Claude Desktop: Cursor&apos;s{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcp.json
          </code>{" "}
          does not support the{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">env</code>{" "}
          key at the server level in all versions. If you need environment
          variables (e.g., for GitHub or Brave Search), set them in your shell
          profile or use a wrapper script.
        </p>

        {/* H3: Step 3 */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Step 3 — Restart Cursor / Reload Agent
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          After saving the config file, reload the Cursor window with{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Cmd + R
          </kbd>{" "}
          (macOS) or{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Ctrl + R
          </kbd>{" "}
          (Windows/Linux). Then open Agent mode with{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Cmd + I
          </kbd>{" "}
          or{" "}
          <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono">
            Ctrl + I
          </kbd>
          .
        </p>

        {/* H3: Step 4 */}
        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Step 4 — Verify the Server Is Active
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          In Agent mode, ask Cursor to list available tools. A simple prompt like
          &quot;What tools do you have access to?&quot; should return the tools exposed by
          your configured MCP servers. If the server does not appear, check the
          Output panel → MCP for error messages.
        </p>

        {/* H2: Example: Installing the Filesystem MCP Server */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Example: Installing the Filesystem MCP Server
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          The Filesystem server is the best starting point because it requires no
          API keys. Add this to your{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcp.json
          </code>
          :
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/projects"]
    }
  }
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Replace{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            /Users/you/projects
          </code>{" "}
          with the actual directory you want Cursor to access. You can add
          multiple directories by including more entries in the args array.
        </p>

        {/* H2: Example: Installing the GitHub MCP Server */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Example: Installing the GitHub MCP Server
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          The GitHub server requires a personal access token. Because Cursor&apos;s{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcp.json
          </code>{" "}
          may not support inline env vars, export the token in your shell before
          launching Cursor:
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`# macOS/Linux — add to ~/.zshrc or ~/.bashrc
export GITHUB_PERSONAL_ACCESS_TOKEN="ghp_xxxxxxxx"

# Then restart Cursor from the terminal:
open -a Cursor  # macOS`}</code>
          </pre>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Then add the server to{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            mcp.json
          </code>
          :
        </p>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`}</code>
          </pre>
        </div>

        {/* H2: Cursor-Specific Limitations */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Cursor-Specific Limitations to Know
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Agent mode only
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              MCP tools are not available in Chat mode. You must use Agent mode
              (Cmd/Ctrl + I) for the AI to invoke external tools.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              Environment variable handling
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Not all Cursor versions support the{" "}
              <code>env</code> key inside mcp.json. Export variables in your
              shell profile as a workaround.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-semibold text-slate-900">
              PATH inheritance
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              On some platforms, Cursor does not inherit your shell&apos;s PATH. If
              npx is not found, use the absolute path (e.g.,{" "}
              <code>/usr/local/bin/npx</code>).
            </p>
          </div>
        </div>

        {/* H2: Troubleshooting */}
        <h2 className="mt-14 text-2xl font-bold text-slate-900">
          Troubleshooting
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h4 className="font-semibold text-slate-900">
              &quot;Failed to connect to MCP server&quot;
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Check the MCP output panel in Cursor for the exact error. Common
              causes: npx not in PATH, invalid JSON syntax, or the server
              package is not installed globally.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h4 className="font-semibold text-slate-900">
              Tools not showing in Agent mode
            </h4>
            <p className="mt-2 text-sm text-slate-600">
              Ensure you are actually in Agent mode (the input box should say
              &quot;Agent&quot;). Also verify the config file is at the correct path and
              Cursor has reloaded since your last edit.
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
            Ready to add more servers? Browse our{" "}
            <Link
              href="/"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              full MCP server directory
            </Link>{" "}
            to find browser, database, web, and communication servers compatible
            with Cursor.
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
