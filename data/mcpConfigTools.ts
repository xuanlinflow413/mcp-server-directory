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
    title: "Claude Desktop MCP Config Generator for claude_desktop_config.json",
    shortName: "Claude Config",
    description: "Generate a browser-only claude_desktop_config.json MCP template for local servers, args, and env variable names. No login, upload, or real secrets.",
    primaryKeyword: "claude desktop mcp config generator",
    secondaryKeywords: ["claude desktop mcp config", "claude_desktop_config json", "claude mcp server config", "claude desktop mcp server", "mcp config generator", "model context protocol config"],
    defaultServerName: "filesystem",
    defaultCommand: "npx",
    defaultArgs: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"],
    defaultEnvVars: ["EXAMPLE_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Browser", "Database", "Docs", "Custom"],
    relatedLinks: [
      { href: "/guides/how-to-create-claude-desktop-config-json/", label: "How to Create claude_desktop_config.json", description: "Follow the setup guide before copying a Claude Desktop MCP config." },
      { href: "/guides/claude-desktop-mcp-config-examples/", label: "Claude Desktop MCP Config Examples", description: "Compare safe filesystem, GitHub, search, and multi-server config examples before copying JSON." },
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Draft a Cursor MCP setup for coding-agent workflows." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Create a generic mcpServers JSON skeleton." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create a safe .env.example template for secret names." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions before enabling a server." },
      { href: "/guides/best-mcp-servers-for-claude/", label: "Best MCP Servers for Claude", description: "Pick useful MCP servers before generating a config." },
    ],
  },
  {
    slug: "cursor-mcp-config-generator",
    mode: "cursor",
    title: "Cursor MCP Config Generator for Coding Agents",
    shortName: "Cursor Config",
    description: "Create a browser-only Cursor MCP config template for coding agents, repo workflows, GitHub, filesystem, and docs servers. No login or upload.",
    primaryKeyword: "cursor mcp config generator",
    secondaryKeywords: ["cursor mcp config", "cursor mcp server setup", "mcp config for cursor", "cursor model context protocol", "cursor mcp tools", "cursor ai mcp server"],
    defaultServerName: "github",
    defaultCommand: "npx",
    defaultArgs: ["-y", "@modelcontextprotocol/server-github"],
    defaultEnvVars: ["GITHUB_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Docs", "Browser", "Custom"],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate a Claude Desktop claude_desktop_config.json draft." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Generate a cross-client config skeleton." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create safe placeholder env files for Cursor MCP servers." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Check coding-agent permissions and write actions." },
      { href: "/guides/cursor-mcp-config-examples/", label: "Cursor MCP Config Examples", description: "Compare safe filesystem, GitHub, docs, search, and multi-server Cursor config examples before copying JSON." },
      { href: "/guides/how-to-install-mcp-servers-in-cursor/", label: "Install MCP Servers in Cursor", description: "Follow the setup guide after generating your draft." },
    ],
  },
  {
    slug: "mcp-server-config-generator",
    mode: "generic-config",
    title: "MCP Server Config Generator — JSON Config Template",
    shortName: "MCP Config",
    description: "Generate safe MCP server JSON config templates for Claude, Cursor, filesystem, GitHub, browser, database, docs, and custom servers. Browser-only.",
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
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "Compare generic filesystem, GitHub, search, database, and multi-server JSON examples." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create placeholder secret files for generated configs." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions, secrets, and prompt injection risks." },
      { href: "/mcp-server-examples/", label: "MCP Server Examples", description: "Compare filesystem, GitHub, browser, and database examples." },
    ],
  },
  {
    slug: "mcp-env-template-generator",
    mode: "env-template",
    title: "MCP .env.example Template Generator for MCP Servers",
    shortName: "MCP Env",
    description: "Generate a safe .env.example template for MCP servers with placeholder API tokens, database URLs, and secret handling notes. No real secrets needed.",
    primaryKeyword: "mcp env template generator",
    secondaryKeywords: ["mcp env template", "mcp .env example", "mcp server environment variables", "mcp secrets template", "mcp env example", "model context protocol env"],
    defaultServerName: "github",
    defaultCommand: "",
    defaultArgs: [],
    defaultEnvVars: ["GITHUB_TOKEN", "DATABASE_URL", "BROWSER_HEADLESS", "BROWSER_TIMEOUT_MS"],
    serverTypes: ["GitHub", "Database", "Browser", "Filesystem", "Search", "Custom"],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Use env placeholders in Claude Desktop config examples." },
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Use env placeholders in Cursor MCP setup drafts." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Use env names inside a config template." },
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "See how env placeholders appear in config JSON examples." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review secret handling before sharing config." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Connect environment variables to stack planning." },
    ],
  },
  {
    slug: "mcp-security-checklist-generator",
    mode: "security-checklist",
    title: "MCP Security Checklist Generator for Permissions & Secrets",
    shortName: "MCP Security",
    description: "Create a Markdown MCP security checklist for permissions, secrets, prompt injection, logging, approvals, and deployment readiness. Browser-only.",
    primaryKeyword: "mcp security checklist generator",
    secondaryKeywords: ["mcp security checklist", "mcp server security", "model context protocol security", "mcp prompt injection", "mcp tool permissions", "mcp server review checklist"],
    defaultServerName: "filesystem",
    defaultCommand: "",
    defaultArgs: [],
    defaultEnvVars: ["GITHUB_TOKEN"],
    serverTypes: ["Filesystem", "GitHub", "Browser", "Database", "Docs", "Custom"],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate a config draft before reviewing risk." },
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Review coding-agent configs before enabling write tools." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Build the JSON template that this checklist reviews." },
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "Review generic config examples before enabling permissions." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create safer secret placeholder files." },
      { href: "/mcp-security-checklist/", label: "MCP Security Checklist", description: "Read the full static security checklist guide." },
    ],
  },
];

export function getMcpConfigTool(slug: string): McpConfigTool {
  const tool = mcpConfigTools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Unknown MCP config tool: ${slug}`);
  return tool;
}
