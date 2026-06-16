import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";

export const metadata: Metadata = {
  title: "Claude MCP Server: Setup, Use Cases, and Safe Stacks | BestMCPServers",
  description: "Learn what a Claude MCP server does, which servers to start with for Claude Desktop, and how to keep filesystem, GitHub, browser, and database access scoped.",
  alternates: { canonical: "https://bestmcpservers.com/claude-mcp-server/" },
  openGraph: {
    title: "Claude MCP Server: Setup, Use Cases, and Safe Stacks | BestMCPServers",
    description: "Learn what a Claude MCP server does, which servers to start with for Claude Desktop, and how to keep filesystem, GitHub, browser, and database access scoped.",
    url: "https://bestmcpservers.com/claude-mcp-server/",
    type: "website",
  },
};

export default function Page() {
  return (
    <McpSeoPage
      config={{
        eyebrow: "Claude MCP Server",
        h1: "Claude MCP Server",
        description: "A Claude MCP server connects Claude Desktop or Claude-powered workflows to structured tools such as files, GitHub repositories, browsers, databases, and team systems through the Model Context Protocol.",
        primaryCta: { href: "/for-claude/", label: "See the Claude MCP stack" },
        secondaryCta: { href: "/guides/claude-desktop-mcp-setup/", label: "Set up Claude Desktop MCP" },
        cards: [
          { title: "Best first servers", text: "Start with filesystem for selected folders, GitHub for repository context, and browser or database servers only when the workflow proves useful." },
          { title: "Best use cases", text: "Claude MCP servers help with repo review, documentation lookup, file analysis, data questions, support workflows, and repeatable internal operations." },
          { title: "Main safety rule", text: "Do not connect Claude to broad machine, repo, or production-data access before testing one narrow read-only workflow." },
        ],
        sections: [
          {
            heading: "What is a Claude MCP server?",
            body: "A Claude MCP server is a tool bridge that exposes a specific capability to Claude through a standard protocol. Instead of pasting files, database output, or issue text into chat, Claude can request structured context from an approved server.",
            bullets: ["Filesystem servers expose selected local paths", "GitHub servers expose repository and PR context", "Browser servers support research and page inspection", "Database servers support controlled schema and query workflows"],
          },
          {
            heading: "Recommended Claude setup order",
            body: "The safest Claude MCP setup starts small and grows by workflow. Add one server, verify startup, run one harmless tool call, then document what data and actions are allowed.",
            bullets: ["Start with local files or one hosted repo", "Use placeholder configs before real credentials", "Keep tokens in environment or local secrets", "Restart Claude Desktop after config changes"],
          },
          {
            heading: "When to add more servers",
            body: "Add another MCP server only when Claude needs context that the current stack cannot provide. Each extra server should have a clear owner, scope, and rollback path.",
            bullets: ["Browser servers for docs and UI checks", "Slack servers for team context after review", "Database servers for read-only analysis", "Security checks before write-capable actions"],
          },
        ],
      }}
    />
  );
}
