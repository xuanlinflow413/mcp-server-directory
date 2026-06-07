export type McpConfigMode =
  | "claude-desktop"
  | "cursor"
  | "generic-config"
  | "env-template"
  | "security-checklist";

export type McpConfigTool = {
  slug: string;
  mode: McpConfigMode;
  title: string;
  shortName: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  defaultServerName: string;
  defaultCommand: string;
  defaultArgs: string[];
  defaultEnvVars: string[];
  serverTypes: string[];
  relatedLinks: { href: string; label: string; description: string }[];
};

export const mcpConfigTools: McpConfigTool[] = [
  {
    slug: "claude-desktop-mcp-config-generator",
    mode: "claude-desktop",
    title: "Claude Desktop MCP Config Generator",
    shortName: "Claude Config",
    description: "Generate a Claude Desktop MCP config template for local servers, commands, args, and environment variables. Static browser-only tool.",
    primaryKeyword: "claude desktop mcp config generator",
    secondaryKeywords: ["claude desktop mcp config", "claude_desktop_config json", "claude mcp server config", "claude desktop mcp server", "mcp config generator", "model context protocol config"],
    defaultServerName: "filesystem",
    defaultCommand: "npx",
    defaultArgs: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"],
    defaultEnvVars: ["EXAMPLE_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Browser", "Database", "Docs", "Custom"],
    relatedLinks: [
      { href: "/guides/best-mcp-servers-for-claude/", label: "Best MCP Servers for Claude", description: "Pick useful MCP servers before generating a config." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create a safe .env.example template for secret names." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions before enabling a server." },
    ],
  },
  {
    slug: "cursor-mcp-config-generator",
    mode: "cursor",
    title: "Cursor MCP Config Generator",
    shortName: "Cursor Config",
    description: "Generate a Cursor MCP config template for coding workflows, local servers, GitHub tools, filesystem access, and safe setup notes.",
    primaryKeyword: "cursor mcp config generator",
    secondaryKeywords: ["cursor mcp config", "cursor mcp server setup", "mcp config for cursor", "cursor model context protocol", "cursor mcp tools", "cursor ai mcp server"],
    defaultServerName: "github",
    defaultCommand: "npx",
    defaultArgs: ["-y", "@modelcontextprotocol/server-github"],
    defaultEnvVars: ["GITHUB_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Docs", "Browser", "Custom"],
    relatedLinks: [
      { href: "/guides/how-to-install-mcp-servers-in-cursor/", label: "Install MCP Servers in Cursor", description: "Follow the setup guide after generating your draft." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Generate a cross-client config skeleton." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Check coding-agent permissions and write actions." },
    ],
  },
  {
    slug: "mcp-server-config-generator",
    mode: "generic-config",
    title: "MCP Server Config Generator",
    shortName: "MCP Config",
    description: "Generate MCP server config templates for filesystem, GitHub, browser, database, docs, and custom Model Context Protocol servers.",
    primaryKeyword: "mcp server config generator",
    secondaryKeywords: ["mcp server config", "model context protocol config", "mcp server json", "mcp server setup", "mcp config template", "mcp server command args env"],
    defaultServerName: "filesystem",
    defaultCommand: "npx",
    defaultArgs: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/workspace"],
    defaultEnvVars: ["MCP_SERVER_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Browser", "Database", "Search", "Docs", "Memory", "Custom"],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate a Claude-specific config template." },
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Generate a Cursor-oriented coding workflow config." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Plan the full stack before installing servers." },
    ],
  },
  {
    slug: "mcp-env-template-generator",
    mode: "env-template",
    title: "MCP Env Template Generator",
    shortName: "MCP Env",
    description: "Generate safe .env.example templates for MCP servers, including API tokens, database URLs, browser settings, and secret handling notes.",
    primaryKeyword: "mcp env template generator",
    secondaryKeywords: ["mcp env template", "mcp .env example", "mcp server environment variables", "mcp secrets template", "mcp env example", "model context protocol env"],
    defaultServerName: "github",
    defaultCommand: "",
    defaultArgs: [],
    defaultEnvVars: ["GITHUB_TOKEN", "DATABASE_URL", "BROWSER_HEADLESS", "BROWSER_TIMEOUT_MS"],
    serverTypes: ["GitHub", "Database", "Browser", "Filesystem", "Search", "Custom"],
    relatedLinks: [
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Use env names inside a config template." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review secret handling before sharing config." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Connect environment variables to stack planning." },
    ],
  },
  {
    slug: "mcp-security-checklist-generator",
    mode: "security-checklist",
    title: "MCP Security Checklist Generator",
    shortName: "MCP Security",
    description: "Generate an MCP security checklist for server permissions, secrets, prompt injection, logging, approvals, and deployment readiness.",
    primaryKeyword: "mcp security checklist generator",
    secondaryKeywords: ["mcp security checklist", "mcp server security", "model context protocol security", "mcp prompt injection", "mcp tool permissions", "mcp server review checklist"],
    defaultServerName: "filesystem",
    defaultCommand: "",
    defaultArgs: [],
    defaultEnvVars: ["GITHUB_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Browser", "Database", "Docs", "Custom"],
    relatedLinks: [
      { href: "/mcp-security-checklist/", label: "MCP Security Checklist", description: "Read the full static security checklist guide." },
      { href: "/guides/agent-security-guide/", label: "Agent Security Guide", description: "Review broader AI agent operations risks." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create safer secret placeholder files." },
    ],
  },
];

export function getMcpConfigTool(slug: string): McpConfigTool {
  const tool = mcpConfigTools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Unknown MCP config tool: ${slug}`);
  return tool;
}
