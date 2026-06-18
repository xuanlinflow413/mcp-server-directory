export type TrendWatchItem = {
  topic: string;
  status: "watch" | "validate" | "ship";
  window: string;
  intent: string;
  signals: string[];
  nextAction: string;
  landingPageFit: string;
};

export const trendWatchPool: TrendWatchItem[] = [
  {
    topic: "AI CAD",
    status: "watch",
    window: "3-5 days",
    intent: "Monitor whether AI-assisted CAD and design agents create search demand for engineering workflow pages.",
    signals: [
      "New AI CAD product launches or funding announcements",
      "Search/social mentions around CAD agent, engineering copilot, and design automation",
      "Evidence that users compare CAD agents with general coding or website agents"
    ],
    nextAction: "If demand persists, draft a guide that compares AI CAD agents with agent workflow tools and MCP-style tool access.",
    landingPageFit: "Potential informational guide, not a core BestMCPServers workflow page yet."
  },
  {
    topic: "AI Sovereignty",
    status: "watch",
    window: "3-5 days",
    intent: "Track interest in private, local, and organization-controlled AI agent infrastructure.",
    signals: [
      "Queries around sovereign AI agents, private AI workflow, and local agent infrastructure",
      "Enterprise or government announcements about data residency and AI control",
      "Developer discussions about self-hosted MCP, local models, and restricted tool scopes"
    ],
    nextAction: "If signals stay strong, add a guide connecting AI sovereignty to MCP server permissions, audit logs, and local tool boundaries.",
    landingPageFit: "Strong fit for security cluster and Pro audit positioning."
  },
  {
    topic: "Agent Workflow",
    status: "validate",
    window: "3-5 days",
    intent: "Validate the broader shift from single prompts to repeatable agent workflows with planning, execution, review, and launch evidence.",
    signals: [
      "Mentions of AI agent workflow tools, coding agent CLI, no-code website agents, and agent planning loops",
      "Specific examples such as Swytchcode CLI, Deep Work Plan-style planning, and Framer Agents",
      "Search demand around agent workflow templates, permission checklists, and implementation evidence"
    ],
    nextAction: "Use /guides/best-ai-agent-workflow-tools/ as the first validation page and update internal links after live performance data appears.",
    landingPageFit: "Immediate fit; guide has been added to the data-driven guide system."
  }
];
