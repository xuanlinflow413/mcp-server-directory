import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";

export const metadata: Metadata = {
  title: "Slack MCP Server vs GitHub MCP Server | BestMCPServers",
  description: "Compare Slack MCP Server and GitHub MCP Server for AI agents, team context, issue triage, PR workflows, permissions, and safer rollout decisions.",
  alternates: { canonical: "https://bestmcpservers.com/compare/slack-mcp-server-vs-github-mcp-server/" },
  openGraph: {
    title: "Slack MCP Server vs GitHub MCP Server | BestMCPServers",
    description: "Compare Slack MCP Server and GitHub MCP Server for AI agents, team context, issue triage, PR workflows, permissions, and safer rollout decisions.",
    url: "https://bestmcpservers.com/compare/slack-mcp-server-vs-github-mcp-server/",
    type: "website",
  },
};

export default function Page() {
  return (
    <McpSeoPage
      config={{
        eyebrow: "MCP Server Comparison",
        h1: "Slack MCP Server vs GitHub MCP Server",
        description: "Slack MCP Server gives agents team conversation context; GitHub MCP Server gives agents repository, issue, and pull request context. Use this comparison to decide which collaboration layer should enter your MCP stack first.",
        primaryCta: { href: "/slack-mcp-server/", label: "Review Slack MCP Server" },
        secondaryCta: { href: "/github-mcp-server/", label: "Review GitHub MCP Server" },
        cards: [
          { title: "Slack MCP Server", text: "Best for support handoffs, team updates, decision history, incident context, and workflows that start in conversation channels." },
          { title: "GitHub MCP Server", text: "Best for code review, issues, pull requests, repository search, and workflows where implementation state matters most." },
          { title: "Best first choice", text: "Choose GitHub first for engineering workflows. Choose Slack first for support, ops, incident, or customer-facing team context." },
        ],
        sections: [
          {
            heading: "When Slack MCP is better",
            body: "Slack MCP is stronger when the agent needs conversation context, team status, incident notes, or support handoff information before taking action.",
            bullets: ["Support triage and escalation", "Incident channel summaries", "Customer handoff context", "Team updates and decision trails"],
          },
          {
            heading: "When GitHub MCP is better",
            body: "GitHub MCP is stronger when the next useful action happens in code, issues, branches, pull requests, or release workflows.",
            bullets: ["Issue-to-PR planning", "Pull request review", "Repository onboarding", "Release and changelog workflows"],
          },
          {
            heading: "Permission and privacy tradeoffs",
            body: "Slack MCP often touches sensitive team conversations, while GitHub MCP can mutate engineering workflows. Both need least-privilege access and clear review gates.",
            bullets: ["Limit Slack channels and history scope", "Avoid exposing private customer data", "Scope GitHub tokens by repo and action", "Require approval before posting or mutating tickets"],
          },
        ],
      }}
    />
  );
}
