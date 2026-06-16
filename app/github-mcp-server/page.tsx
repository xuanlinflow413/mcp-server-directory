import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";

export const metadata: Metadata = {
  title: "GitHub MCP Server: Setup, Use Cases, and Safety | BestMCPServers",
  description: "Understand GitHub MCP server use cases, permissions, Claude and Cursor config patterns, safety risks, and alternatives before connecting AI agents.",
  alternates: { canonical: "https://bestmcpservers.com/github-mcp-server/" },
  openGraph: {
    title: "GitHub MCP Server: Setup, Use Cases, and Safety | BestMCPServers",
    description: "Understand GitHub MCP server use cases, permissions, Claude and Cursor config patterns, safety risks, and alternatives before connecting AI agents.",
    url: "https://bestmcpservers.com/github-mcp-server/",
    type: "website",
  },
};

export default function Page() {
  return (
    <McpSeoPage
      config={{
        eyebrow: "GitHub MCP Server",
        h1: "GitHub MCP Server",
        description: "A GitHub MCP server lets Claude, Cursor, Codex-style agents, and internal assistants inspect repositories, issues, pull requests, checks, and project activity through typed tools.",
        primaryCta: { href: "/workflows/openai-codex-pr-review-pack/", label: "Use the PR Review Pack" },
        secondaryCta: { href: "/mcp-server-security/", label: "Review Security Checklist" },
        cards: [
          { title: "Use cases", text: "Read issues, summarize pull requests, inspect failing checks, prepare review notes, and connect implementation work to repository context." },
          { title: "Permissions", text: "Start with read-only repository and issue access. Add comments, labels, branch writes, or workflow actions only when the user task requires them." },
          { title: "Alternatives", text: "For simple read-only research, a docs index, GitHub search, or manual PR diff may be enough. Use MCP when the workflow is repeated." },
        ],
        sections: [
          {
            heading: "Best GitHub MCP server use cases",
            body: "The highest-value GitHub MCP workflows are repeatable engineering loops where the agent needs repository facts plus GitHub metadata, not one-off browsing.",
            bullets: ["PR review with linked issue and check context", "Repo onboarding for new Claude Code or Cursor sessions", "Triage summaries for issues and discussions", "Release note drafts from merged pull requests"],
          },
          {
            heading: "Claude and Cursor config considerations",
            body: "The exact command depends on the server you choose, but the config should make permissions and token source obvious. Keep tokens in the client or platform secret store, not in pasted prompts.",
            bullets: ["Use explicit server names such as github-readonly", "Scope tokens to required repositories where possible", "Avoid broad org admin tokens for assistant workflows", "Document whether the server can write comments or mutate repo state"],
          },
          {
            heading: "Risks to check before production use",
            body: "GitHub access can expose private code, secrets in historical files, issue attachments, CI logs, and deployment controls. Review the server before giving it write actions.",
            bullets: ["Can the server read private repositories?", "Can it create comments, labels, branches, or workflow runs?", "Does it redact tokens and secrets from logs?", "Is there a rollback path for accidental writes?"],
          },
        ],
      }}
    />
  );
}
