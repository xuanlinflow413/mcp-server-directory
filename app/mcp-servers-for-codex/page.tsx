import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";

export const metadata: Metadata = {
  title: "Best MCP Servers for OpenAI Codex | BestMCPServers",
  description: "Choose MCP servers for OpenAI Codex PR review, repo inspection, GitHub context, browser QA, docs lookup, and secure coding workflows.",
  alternates: { canonical: "https://bestmcpservers.com/mcp-servers-for-codex/" },
  openGraph: {
    title: "Best MCP Servers for OpenAI Codex | BestMCPServers",
    description: "Choose MCP servers for OpenAI Codex PR review, repo inspection, GitHub context, browser QA, docs lookup, and secure coding workflows.",
    url: "https://bestmcpservers.com/mcp-servers-for-codex/",
    type: "website",
  },
};

export default function Page() {
  return (
    <McpSeoPage
      config={{
        eyebrow: "Codex MCP",
        h1: "Best MCP Servers for OpenAI Codex",
        description: "Use MCP servers to give Codex-style coding agents the right repo, GitHub, docs, browser, and security context before asking for implementation or PR review.",
        primaryCta: { href: "/workflows/openai-codex-pr-review-pack/", label: "Open Codex PR Review Pack" },
        secondaryCta: { href: "/mcp-server-directory/", label: "Browse MCP Directory" },
        cards: [
          { title: "PR review context", text: "Combine GitHub, filesystem, and docs servers so Codex can inspect changed files, linked issues, and project conventions before reviewing." },
          { title: "Evidence-first QA", text: "Add browser and testing context when the review depends on UI behavior, live routes, or generated artifacts rather than static diffs only." },
          { title: "Controlled write access", text: "Keep write-capable servers behind approval. Codex workflows should separate read-only review from patch, commit, deploy, and comment actions." },
        ],
        sections: [
          {
            heading: "Recommended MCP stack for Codex PR review",
            body: "A practical Codex stack starts with read-only repository access, then adds GitHub metadata, documentation lookup, and browser evidence only when the workflow needs it.",
            bullets: ["Filesystem server for targeted file reads and search", "GitHub server for issues, PR metadata, checks, and review context", "Docs/search server for framework or internal documentation", "Browser server for UI smoke checks and screenshots"],
          },
          {
            heading: "When to upgrade from manual prompts",
            body: "If you repeatedly paste diffs, failing logs, package scripts, or review guidelines into Codex, MCP can make the workflow more repeatable and less error-prone.",
            bullets: ["Repo onboarding takes more than a few minutes", "Reviews require cross-file dependency tracing", "UI changes need browser verification", "Security reviews need consistent permission checks"],
          },
          {
            heading: "Safety rules for Codex MCP workflows",
            body: "Treat Codex as a coding agent with tool boundaries. A server that can edit files, push commits, or call deployment APIs should have a clear approval gate and rollback path.",
            bullets: ["Prefer read-only servers for first pass review", "Do not expose raw secrets through logs or tool output", "Run builds/tests before accepting changes", "Keep production deploys separate from review-only workflows"],
          },
        ],
      }}
    />
  );
}
