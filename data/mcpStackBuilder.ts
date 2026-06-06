export type AgentGoal = "coding" | "research" | "support" | "data" | "browser" | "knowledge";
export type McpClient = "Claude Desktop" | "Cursor" | "Custom App" | "Local Dev";
export type SecurityLevel = "Local only" | "Read only" | "Production" | "Sensitive data";
export type DeploymentPreference = "Local" | "Cloud" | "Hybrid";

export const agentGoals: { id: AgentGoal; label: string; description: string }[] = [
  { id: "coding", label: "Coding assistant", description: "Code search, repository context, issue triage, and local file edits." },
  { id: "research", label: "Research agent", description: "Browser search, citation capture, summarization, and knowledge notes." },
  { id: "support", label: "Customer support agent", description: "Docs lookup, ticket context, CRM notes, and response drafting." },
  { id: "data", label: "Data analysis agent", description: "Read-only database access, CSV review, notebooks, and reporting." },
  { id: "browser", label: "Browser automation agent", description: "Web workflows, form review, screenshots, and QA checks." },
  { id: "knowledge", label: "Internal knowledge agent", description: "Docs, wiki, drive, Slack, and team knowledge retrieval." },
];

export const clientOptions: McpClient[] = ["Claude Desktop", "Cursor", "Custom App", "Local Dev"];
export const securityLevels: SecurityLevel[] = ["Local only", "Read only", "Production", "Sensitive data"];
export const deploymentPreferences: DeploymentPreference[] = ["Local", "Cloud", "Hybrid"];

export const dataSourceOptions = [
  "Filesystem",
  "GitHub",
  "Browser",
  "Database",
  "Docs or Wiki",
  "Slack or Discord",
  "Calendar or Email",
] as const;

export function buildMcpStack(goal: AgentGoal, client: McpClient, dataSources: string[], securityLevel: SecurityLevel, deployment: DeploymentPreference) {
  const categories = new Set<string>();
  const servers = new Set<string>();
  const steps: string[] = [];
  const checklist: string[] = [];

  if (goal === "coding") {
    categories.add("Repository and filesystem context");
    servers.add("GitHub MCP server");
    servers.add("Filesystem MCP server");
    steps.push("Start with read-only repository access before enabling local write actions.");
  }
  if (goal === "research") {
    categories.add("Browser and search context");
    servers.add("Browser MCP server");
    servers.add("Docs or notes MCP server");
    steps.push("Add browser/search first, then connect notes only after citation format is clear.");
  }
  if (goal === "support") {
    categories.add("Knowledge base and ticket context");
    servers.add("Docs MCP server");
    servers.add("CRM or ticketing MCP server");
    steps.push("Keep customer data read-only until escalation and audit policies are defined.");
  }
  if (goal === "data") {
    categories.add("Read-only analytics context");
    servers.add("Database MCP server");
    servers.add("Filesystem MCP server for CSV exports");
    steps.push("Use a read-only database role and test queries on non-production data first.");
  }
  if (goal === "browser") {
    categories.add("Browser automation context");
    servers.add("Browser MCP server");
    servers.add("Screenshot or QA MCP server");
    steps.push("Limit automation to staging domains before allowing production workflows.");
  }
  if (goal === "knowledge") {
    categories.add("Team knowledge retrieval");
    servers.add("Docs or wiki MCP server");
    servers.add("Slack or Discord MCP server");
    steps.push("Index a small, non-sensitive knowledge area before expanding workspace access.");
  }

  dataSources.forEach((source) => {
    if (source === "Filesystem") servers.add("Filesystem MCP server");
    if (source === "GitHub") servers.add("GitHub MCP server");
    if (source === "Browser") servers.add("Browser MCP server");
    if (source === "Database") servers.add("Database MCP server");
    if (source === "Docs or Wiki") servers.add("Docs or wiki MCP server");
    if (source === "Slack or Discord") servers.add("Slack or Discord MCP server");
    if (source === "Calendar or Email") servers.add("Calendar or email MCP server");
  });

  checklist.push("Use separate dev and production credentials.");
  checklist.push("Never paste API keys or OAuth tokens into generated config examples.");
  checklist.push("Prefer read-only scopes until the workflow has been tested.");
  if (securityLevel === "Production" || securityLevel === "Sensitive data") {
    checklist.push("Add audit logging and a manual approval step for destructive tools.");
    checklist.push("Review every server permission before exposing it to an autonomous agent.");
  }
  if (securityLevel === "Sensitive data") {
    checklist.push("Mask secrets, PII, and customer records before sending context to an LLM.");
  }
  if (deployment !== "Local") {
    checklist.push("Store tokens in managed secrets, not in committed JSON config files.");
  }

  return {
    categories: Array.from(categories),
    servers: Array.from(servers),
    setupSteps: [
      `Choose ${client} as the initial MCP client and test one server at a time.`,
      ...steps,
      `Deploy in ${deployment.toLowerCase()} mode only after local smoke tests pass.`,
      "Document allowed tools, blocked actions, and rollback steps before sharing the stack.",
    ],
    securityChecklist: checklist,
  };
}
