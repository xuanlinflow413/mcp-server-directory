export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 MCP Server Directory. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/guides/best-mcp-servers-for-claude/"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Guides
            </a>
            <a
              href="/tools/json-formatter/"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Tools
            </a>
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
  );
}
