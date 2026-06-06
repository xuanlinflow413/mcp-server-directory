import type { MetadataRoute } from "next";
import { developerTools } from "@/data/developerTools";
import { agents } from "@/data/agents";
import { rspPrompts } from "@/data/rspPrompts";
import { mcpGuides } from "@/data/mcpGuides";

const baseUrl = "https://bestmcpservers.com";
const lastModified = new Date("2026-05-30");

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
    route("/guides/best-mcp-servers-for-claude/", 0.8, "monthly"),
    route("/guides/how-to-install-mcp-servers-in-cursor/", 0.8, "monthly"),
    route("/guides/use-bestmcpservers-api-with-chatgpt/", 0.8, "monthly"),
    route("/guides/use-bestmcpservers-tools-with-cursor/", 0.8, "monthly"),
    route("/guides/browser-mcp-servers/", 0.8, "monthly"),
    route("/guides/veo-prompt-examples/", 0.8, "monthly"),
    route("/guides/veo-cinematic-prompts/", 0.8, "monthly"),
    route("/guides/veo-ad-prompts/", 0.8, "monthly"),
    route("/guides/veo-youtube-shorts-prompts/", 0.8, "monthly"),
    route("/guides/how-to-write-veo-prompts/", 0.8, "monthly"),
    route("/tools/", 0.9, "weekly"),
    route("/tools/api/", 0.8, "monthly"),
    route("/agents/", 0.9, "weekly"),
    route("/rsp/", 0.9, "weekly"),
  ];

  const toolRoutes = developerTools.map((tool) => route(`/tools/${tool.slug}/`, 0.8, "monthly"));
  const mcpGuideRoutes = mcpGuides.map((guide) => route(`/${guide.slug}/`, 0.85, "monthly"));
  const agentRoutes = agents.map((agent) => route(`/agents/${agent.slug}/`, 0.7, "monthly"));
  const rspRoutes = rspPrompts.map((prompt) => route(`/rsp/${prompt.slug}/`, 0.7, "monthly"));

  return [...staticRoutes, ...mcpGuideRoutes, ...toolRoutes, ...agentRoutes, ...rspRoutes];
}
