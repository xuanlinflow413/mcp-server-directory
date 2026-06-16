import type { MetadataRoute } from "next";
import { developerTools } from "@/data/developerTools";
import { agents } from "@/data/agents";
import { rspPrompts } from "@/data/rspPrompts";
import { mcpGuides } from "@/data/mcpGuides";
import { agentSecurityGuides } from "@/data/agentSecurityGuides";
import { seoGuides } from "@/data/seoGuides";
import { workflowPacks } from "@/data/workflowPacks";

const baseUrl = "https://bestmcpservers.com";
const lastModified = new Date("2026-06-08");

function route(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") {
  return {
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    route("/", 1.0, "weekly"),
    route("/ai-prd-generator/", 0.9, "weekly"),
    route("/ai-agent-prd-template/", 0.85, "monthly"),
    route("/mcp-server-prd-template/", 0.85, "monthly"),
    route("/saas-prd-template/", 0.8, "monthly"),
    route("/marketplace-prd-template/", 0.75, "monthly"),
    route("/crm-prd-template/", 0.75, "monthly"),
    route("/chrome-extension-prd-template/", 0.75, "monthly"),
    route("/mobile-app-prd-template/", 0.8, "monthly"),
    route("/guides/", 0.9, "weekly"),
    route("/workflows/", 0.95, "weekly"),
    route("/pricing/", 0.95, "weekly"),
    route("/pro/", 0.9, "weekly"),
    route("/guides/best-mcp-servers-for-claude/", 0.8, "monthly"),
    route("/guides/how-to-install-mcp-servers-in-cursor/", 0.8, "monthly"),
    route("/guides/use-bestmcpservers-api-with-chatgpt/", 0.8, "monthly"),
    route("/guides/use-bestmcpservers-tools-with-cursor/", 0.8, "monthly"),
    route("/guides/browser-mcp-servers/", 0.8, "monthly"),
    route("/mcp-server-directory/", 0.9, "weekly"),
    route("/mcp-servers-for-claude-code/", 0.86, "monthly"),
    route("/mcp-servers-for-cursor/", 0.86, "monthly"),
    route("/mcp-servers-for-codex/", 0.86, "monthly"),
    route("/github-mcp-server/", 0.84, "monthly"),
    route("/filesystem-mcp-server/", 0.84, "monthly"),
    route("/mcp-server-security/", 0.86, "monthly"),
    route("/category/database/", 0.82, "monthly"),
    route("/category/github/", 0.82, "monthly"),
    route("/category/browser/", 0.82, "monthly"),
    route("/category/filesystem/", 0.82, "monthly"),
    route("/category/slack/", 0.82, "monthly"),
    route("/for-claude/", 0.84, "monthly"),
    route("/for-cursor/", 0.84, "monthly"),
    route("/for-vscode/", 0.84, "monthly"),
    route("/for-developers/", 0.84, "monthly"),
    route("/for-ai-agents/", 0.84, "monthly"),
    route("/for-support-agents/", 0.84, "monthly"),
    route("/for-qa-agents/", 0.84, "monthly"),
    route("/for-internal-tools/", 0.84, "monthly"),
    route("/github-mcp-server-for-claude/", 0.84, "monthly"),
    route("/claude-mcp-server/", 0.84, "monthly"),
    route("/cursor-mcp-server/", 0.84, "monthly"),
    route("/vscode-mcp-server/", 0.84, "monthly"),
    route("/database-mcp-server/", 0.84, "monthly"),
    route("/browser-mcp-server/", 0.84, "monthly"),
    route("/slack-mcp-server/", 0.84, "monthly"),
    route("/guides/what-is-mcp-server/", 0.84, "monthly"),
    route("/compare/github-mcp-server-vs-filesystem-mcp-server/", 0.8, "monthly"),
    route("/compare/github-mcp-server-vs-browser-mcp-server/", 0.8, "monthly"),
    route("/compare/database-mcp-server-vs-filesystem-mcp-server/", 0.8, "monthly"),
    route("/compare/slack-mcp-server-vs-github-mcp-server/", 0.8, "monthly"),
    route("/guides/veo-prompt-examples/", 0.8, "monthly"),
    route("/guides/veo-cinematic-prompts/", 0.8, "monthly"),
    route("/guides/veo-ad-prompts/", 0.8, "monthly"),
    route("/guides/veo-youtube-shorts-prompts/", 0.8, "monthly"),
    route("/guides/how-to-write-veo-prompts/", 0.8, "monthly"),
    route("/tools/", 0.9, "weekly"),
    route("/tools/api/", 0.8, "monthly"),
    route("/agents/", 0.9, "weekly"),
    route("/rsp/", 0.9, "weekly"),
    route("/ai-cost/", 0.9, "weekly"),
  ];

  const toolRoutes = developerTools.map((tool) => route(`/tools/${tool.slug}/`, 0.8, "monthly"));
  const mcpGuideRoutes = mcpGuides.map((guide) => route(`/${guide.slug}/`, 0.85, "monthly"));
  const agentSecurityGuideRoutes = agentSecurityGuides.map((guide) => route(`/guides/${guide.slug}/`, 0.85, "monthly"));
  const seoGuideRoutes = seoGuides.map((guide) => route(`/guides/${guide.slug}/`, 0.82, "monthly"));
  const agentRoutes = agents.map((agent) => route(`/agents/${agent.slug}/`, 0.7, "monthly"));
  const rspRoutes = rspPrompts.map((prompt) => route(`/rsp/${prompt.slug}/`, 0.7, "monthly"));
  const workflowRoutes = workflowPacks.map((pack) => route(`/workflows/${pack.slug}/`, 0.86, "monthly"));

  return [...staticRoutes, ...mcpGuideRoutes, ...agentSecurityGuideRoutes, ...seoGuideRoutes, ...toolRoutes, ...agentRoutes, ...rspRoutes, ...workflowRoutes];
}
