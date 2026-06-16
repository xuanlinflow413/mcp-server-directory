import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";

export const metadata: Metadata = {
  title: "VS Code MCP Server: Setup, Use Cases, and Safe Tooling | BestMCPServers",
  description: "Choose MCP servers for VS Code coding assistants, including filesystem, GitHub, browser, and database workflows with safer setup boundaries.",
  alternates: { canonical: "https://bestmcpservers.com/vscode-mcp-server/" },
  openGraph: {
    title: "VS Code MCP Server: Setup, Use Cases, and Safe Tooling | BestMCPServers",
    description: "Choose MCP servers for VS Code coding assistants, including filesystem, GitHub, browser, and database workflows with safer setup boundaries.",
    url: "https://bestmcpservers.com/vscode-mcp-server/",
    type: "website",
  },
};

export default function Page() {
  return (
    <McpSeoPage
      config={{
        eyebrow: "VS Code MCP Server",
        h1: "VS Code MCP Server",
        description: "A VS Code MCP server connects coding assistants in VS Code-style workflows to tools such as local files, GitHub repositories, browser research, and databases through scoped protocol integrations.",
        primaryCta: { href: "/for-vscode/", label: "See VS Code MCP stack" },
        secondaryCta: { href: "/mcp-server-directory/", label: "Browse MCP directory" },
        cards: [
          { title: "Workspace access", text: "Filesystem MCP servers can expose selected VS Code workspaces, docs, configs, generated outputs, and local project context." },
          { title: "Repository context", text: "GitHub MCP servers add issues, pull requests, branch context, and hosted repository search to coding workflows." },
          { title: "Controlled expansion", text: "Add browser or database servers only after the basic code workflow is stable and permissions are documented." },
        ],
        sections: [
          {
            heading: "What a VS Code MCP server does",
            body: "A VS Code MCP server is not a whole IDE replacement. It is a scoped tool integration that lets an assistant request structured context from files, services, or systems that matter to the current coding task.",
            bullets: ["Expose selected workspace paths", "Retrieve GitHub issues and PR context", "Inspect docs or web pages through browser tools", "Review schemas and query outputs with read-only data access"],
          },
          {
            heading: "Recommended setup order",
            body: "For VS Code users, the best first setup is usually local files plus GitHub. Add specialized servers after you know which repetitive tasks actually benefit from live tool access.",
            bullets: ["One workspace path first", "One repository or organization scope", "One harmless smoke test per server", "Document allowed actions and rollback steps"],
          },
          {
            heading: "Risks to avoid",
            body: "The main risk is giving an assistant more access than the task needs. Avoid broad folder access, admin credentials, production data, and unreviewed write actions in early setups.",
            bullets: ["Do not expose the whole home directory", "Do not commit server configs with secrets", "Do not start with production database writes", "Do not skip review for generated changes"],
          },
        ],
      }}
    />
  );
}
