import type { McpSeoPageConfig } from "@/components/McpSeoPage";

export const baseUrl = "https://bestmcpservers.com";

export const audiencePages: Record<string, { title: string; description: string; canonical: string; config: McpSeoPageConfig }> = {
  "for-support-agents": {
    title: "Best MCP Servers for Support Agents | Customer Support Tool Stack | BestMCPServers",
    description: "Choose MCP servers for support agents handling tickets, docs, account lookups, browser QA, and safer customer operations.",
    canonical: `${baseUrl}/for-support-agents/`,
    config: {
      eyebrow: "Support Agent MCP Stack",
      h1: "Best MCP Servers for Support Agents",
      description: "Support agents need fast context from docs, tickets, product surfaces, and internal systems without giving an AI agent broad unsupervised power. Use this page to design a safer MCP stack for support workflows.",
      primaryCta: { href: "/workflows/", label: "Browse support-ready workflows" },
      secondaryCta: { href: "/mcp-server-security/", label: "Review MCP security" },
      cards: [
        { title: "Docs and knowledge", text: "Browser, docs, and search servers help support agents find product guidance, troubleshooting steps, and public help-center content quickly." },
        { title: "Customer context", text: "Ticketing, CRM, and internal database servers can help with account context, but early setups should use read-only roles and redacted test data." },
        { title: "Safer support actions", text: "Support workflows need approval boundaries for refunds, account changes, and external messages even when the agent has rich context." },
      ],
      sections: [
        { heading: "Recommended support MCP categories", body: "A practical support stack starts with evidence gathering, then adds controlled action tools only after the workflow proves safe.", bullets: ["Browser servers for live product and help-center checks", "Knowledge-base or docs servers for troubleshooting", "Read-only CRM or database servers for account lookup", "Slack or team-communication servers for escalation"] },
        { heading: "Where support agents get leverage", body: "MCP helps support agents answer faster when they can verify current docs, inspect product state, and collect account context without manual copy-paste.", bullets: ["Ticket triage", "Troubleshooting playbooks", "Escalation preparation", "Account-history summaries"] },
        { heading: "Support safety checklist", body: "Treat support automation as a high-trust workflow. Even read-mostly tools can expose sensitive data if the stack is scoped too broadly.", bullets: ["Use sandbox or redacted accounts first", "Keep refund or mutation flows human-approved", "Separate production and staging credentials", "Log sensitive actions with redaction"] },
      ],
    },
  },
  "for-qa-agents": {
    title: "Best MCP Servers for QA Agents | QA and Testing Tool Stack | BestMCPServers",
    description: "Plan MCP server stacks for QA agents doing browser checks, regression testing, bug reproduction, logs, and release verification.",
    canonical: `${baseUrl}/for-qa-agents/`,
    config: {
      eyebrow: "QA Agent MCP Stack",
      h1: "Best MCP Servers for QA Agents",
      description: "QA agents work best when they can inspect real pages, compare expected and actual behavior, gather logs, and document evidence without being over-permissioned.",
      primaryCta: { href: "/browser-mcp-server/", label: "Review Browser MCP Server" },
      secondaryCta: { href: "/tools/mcp-security-checklist-generator/", label: "Generate a QA security checklist" },
      cards: [
        { title: "Browser-first workflows", text: "Browser MCP servers help QA agents run smoke checks, verify forms, inspect UI state, and gather screenshot-worthy evidence from live pages." },
        { title: "Evidence collection", text: "Filesystem, logs, and issue-tracker servers can help QA agents capture repro steps, diff outputs, and structured bug reports." },
        { title: "Release safety", text: "QA stacks should prefer read-only verification, isolated test accounts, and explicit approvals before any environment-changing action." },
      ],
      sections: [
        { heading: "Recommended QA MCP categories", body: "The strongest QA stacks combine browser evidence with a few structured context tools instead of a large undifferentiated tool list.", bullets: ["Browser servers for UI and workflow checks", "Filesystem servers for logs and artifacts", "GitHub or issue servers for defect tracking", "Database servers only when schema or test data checks are needed"] },
        { heading: "Where QA agents add value", body: "MCP makes QA agents more useful when they can verify live behavior directly instead of reasoning only from source code or test specs.", bullets: ["Regression smoke tests", "Bug reproduction", "Release verification", "Screenshot-backed bug reporting"] },
        { heading: "QA safety checklist", body: "Quality workflows often touch staging, sandboxes, and test data. Keep those boundaries clear so an agent cannot accidentally cross into destructive production actions.", bullets: ["Use dedicated QA accounts", "Separate staging and production credentials", "Treat screenshots and logs as potentially sensitive", "Require review before state-changing test flows"] },
      ],
    },
  },
  "for-internal-tools": {
    title: "Best MCP Servers for Internal Tools | Ops and Internal App Workflows | BestMCPServers",
    description: "Choose MCP servers for internal tools, back-office ops, dashboards, docs, databases, and safer admin workflows.",
    canonical: `${baseUrl}/for-internal-tools/`,
    config: {
      eyebrow: "Internal Tools MCP Stack",
      h1: "Best MCP Servers for Internal Tools",
      description: "Internal tools teams often need MCP servers for dashboards, admin docs, databases, browser checks, and workflow automation. The best stacks stay narrow because internal systems are rich in sensitive context.",
      primaryCta: { href: "/for-developers/", label: "See developer-oriented stacks" },
      secondaryCta: { href: "/mcp-server-directory/", label: "Browse MCP server categories" },
      cards: [
        { title: "Operational context", text: "Filesystem, GitHub, and docs servers help internal teams connect specs, runbooks, dashboards, and implementation details." },
        { title: "Business systems", text: "Database, CRM, and admin-tool servers can unlock powerful workflows, but they should start with read-only roles and the minimum possible scopes." },
        { title: "Controlled automation", text: "Internal tools often touch real business systems. Approval gates and environment separation matter more than broad autonomous reach." },
      ],
      sections: [
        { heading: "Recommended internal-tools MCP categories", body: "Internal tools stacks usually need a mix of engineering context and business-system context, but not every workflow needs every server.", bullets: ["Filesystem and GitHub for implementation context", "Docs and knowledge servers for runbooks", "Read-only database or admin APIs for lookup", "Browser servers for dashboard and admin QA"] },
        { heading: "High-value internal workflows", body: "MCP helps internal tools teams when they need one agent to connect application logic, runbooks, and operational evidence across multiple systems.", bullets: ["Ops dashboard checks", "Admin workflow QA", "Schema-aware debugging", "Incident investigation prep"] },
        { heading: "Internal system safety rules", body: "Because internal tools often reach sensitive systems, you should design the stack around reviewability and blast-radius control from the start.", bullets: ["Use separate credentials per environment", "Prefer read-only first runs", "Keep audit logs for admin actions", "Document rollback paths for any automation"] },
      ],
    },
  },
  "for-customer-success": {
    title: "Best MCP Servers for Customer Success Teams | CS Agent Stack | BestMCPServers",
    description: "Plan MCP server stacks for customer success teams handling account context, product adoption, escalations, renewals, and safer customer operations.",
    canonical: `${baseUrl}/for-customer-success/`,
    config: {
      eyebrow: "Customer Success MCP Stack",
      h1: "Best MCP Servers for Customer Success Teams",
      description: "Customer success teams need account context, product evidence, help-center knowledge, and escalation paths without giving an AI agent broad write access to customer systems. Use this page to design a narrower MCP stack for CS workflows.",
      primaryCta: { href: "/for-support-agents/", label: "Compare support-agent stacks" },
      secondaryCta: { href: "/mcp-server-security/", label: "Review MCP security" },
      cards: [
        { title: "Account context", text: "CRM, database, and docs servers can help CS teams summarize customer state, adoption history, open issues, and relevant product guidance." },
        { title: "Escalation readiness", text: "Slack, GitHub, and issue-tracker servers help customer success agents prepare accurate escalation briefs instead of forwarding fragmented notes." },
        { title: "Renewal-safe workflows", text: "CS automation should keep commercial data and customer communications scoped, logged, and reviewable before any external action." },
      ],
      sections: [
        { heading: "Recommended customer success MCP categories", body: "A strong CS stack connects customer context with product and support evidence while keeping sensitive systems narrow by default.", bullets: ["CRM or customer database servers with read-only roles", "Docs and knowledge servers for adoption guidance", "Slack or team-communication servers for escalations", "Browser servers for product and help-center verification"] },
        { heading: "Where CS teams get leverage", body: "MCP helps customer success teams move faster when an agent can gather the right context before a meeting, QBR, or escalation.", bullets: ["Account health summaries", "Renewal prep", "Implementation follow-up", "Escalation briefs"] },
        { heading: "Customer success safety checklist", body: "CS workflows can expose contract terms, usage data, and private customer notes. Start with retrieval before allowing actions.", bullets: ["Use read-only CRM scopes first", "Redact sensitive customer details in test prompts", "Require approval before sending customer messages", "Log account lookups and generated briefs"] },
      ],
    },
  },
  "for-revenue-ops": {
    title: "Best MCP Servers for Revenue Ops Teams | RevOps Agent Stack | BestMCPServers",
    description: "Choose MCP servers for revenue operations workflows across CRM data, reporting, dashboards, handoffs, and safer go-to-market automation.",
    canonical: `${baseUrl}/for-revenue-ops/`,
    config: {
      eyebrow: "Revenue Ops MCP Stack",
      h1: "Best MCP Servers for Revenue Ops Teams",
      description: "Revenue operations teams need accurate CRM context, reporting workflows, dashboard checks, and handoff automation. MCP can help, but RevOps stacks should be designed around data quality, auditability, and narrow permissions.",
      primaryCta: { href: "/for-internal-tools/", label: "See internal-tools stacks" },
      secondaryCta: { href: "/category/database/", label: "Browse database MCP servers" },
      cards: [
        { title: "CRM and pipeline context", text: "CRM and database servers can support pipeline summaries, account research, field hygiene checks, and handoff preparation." },
        { title: "Reporting workflows", text: "Browser, database, and docs servers help RevOps agents verify dashboards, compile metric explanations, and prepare recurring reports." },
        { title: "Controlled automation", text: "RevOps tools often touch revenue-critical records, so write access should be delayed until the workflow has review gates and audit trails." },
      ],
      sections: [
        { heading: "Recommended RevOps MCP categories", body: "RevOps stacks should start with context and reporting before adding mutation tools for CRM or billing systems.", bullets: ["Read-only CRM or database servers", "Browser servers for dashboard verification", "Docs servers for process and field definitions", "Slack or email-adjacent servers for internal handoffs"] },
        { heading: "Where RevOps teams get leverage", body: "MCP is useful when a revenue operations agent can combine account data, process docs, and dashboard evidence into a clear operational answer.", bullets: ["Pipeline inspection", "Forecast prep", "Territory or routing QA", "Sales-to-CS handoff summaries"] },
        { heading: "Revenue ops safety checklist", body: "Treat RevOps automation as production business infrastructure. Incorrect writes can affect forecasting, routing, and compensation workflows.", bullets: ["Prefer read-only analysis first", "Require review before CRM field updates", "Separate sandbox and production credentials", "Log generated reports and source systems"] },
      ],
    },
  },
  "for-security-teams": {
    title: "Best MCP Servers for Security Teams | Secure MCP Agent Stack | BestMCPServers",
    description: "Design MCP server stacks for security teams reviewing permissions, logs, repositories, browser evidence, and safer agent access.",
    canonical: `${baseUrl}/for-security-teams/`,
    config: {
      eyebrow: "Security Team MCP Stack",
      h1: "Best MCP Servers for Security Teams",
      description: "Security teams need MCP stacks that make evidence collection easier without turning agents into over-privileged operators. Use this guide to choose servers for review, investigation, and secure rollout workflows.",
      primaryCta: { href: "/mcp-server-security/", label: "Open MCP security guide" },
      secondaryCta: { href: "/tools/mcp-security-checklist-generator/", label: "Generate a security checklist" },
      cards: [
        { title: "Evidence collection", text: "GitHub, filesystem, browser, and docs servers help security teams inspect configuration, code, policy, and public evidence in one workflow." },
        { title: "Permission review", text: "Security teams should evaluate every MCP server by scopes, environment access, logging, and whether credentials are isolated per workflow." },
        { title: "Incident support", text: "MCP can help prepare investigation summaries, but high-risk actions should remain human-approved with clear audit trails." },
      ],
      sections: [
        { heading: "Recommended security MCP categories", body: "Security-oriented MCP stacks should prioritize inspection, documentation, and evidence gathering over broad automation.", bullets: ["GitHub servers for repository and pull-request review", "Filesystem servers for local policy and config inspection", "Browser servers for public surface verification", "Docs servers for runbooks and control mapping"] },
        { heading: "Where security teams get leverage", body: "MCP helps security teams when it reduces context switching during reviews and investigations while keeping actions constrained.", bullets: ["MCP rollout reviews", "Access-scope audits", "Incident evidence collection", "Security checklist generation"] },
        { heading: "Security team safety checklist", body: "A security team's MCP stack should model the same least-privilege rules it recommends to the rest of the organization.", bullets: ["Use separate credentials for review workflows", "Avoid production mutation tools by default", "Record tool calls for sensitive investigations", "Keep generated reports free of raw secrets"] },
      ],
    },
  },
  "for-claude": {
    title: "Best MCP Servers for Claude | Claude Desktop MCP Stack | BestMCPServers",
    description: "Find the best MCP servers for Claude Desktop workflows, including filesystem, GitHub, database, browser, and Slack server categories.",
    canonical: `${baseUrl}/for-claude/`,
    config: {
      eyebrow: "Claude MCP Stack",
      h1: "Best MCP Servers for Claude",
      description: "Build a safer Claude Desktop MCP stack with server categories that match real work: local files, repositories, databases, browser research, and team communication.",
      primaryCta: { href: "/guides/best-mcp-servers-for-claude/", label: "Read the Claude MCP guide" },
      secondaryCta: { href: "/guides/claude-desktop-mcp-setup/", label: "Set up Claude Desktop" },
      cards: [
        { title: "Start with local context", text: "Filesystem and GitHub servers help Claude understand docs, repositories, issues, and implementation details without copy-paste." },
        { title: "Add data carefully", text: "Database MCP servers are useful for schema review and reporting, but first tests should use read-only roles or sandbox data." },
        { title: "Keep permissions narrow", text: "Claude workflows work best when each server has a clear purpose, limited scope, and explicit approval for risky actions." },
      ],
      sections: [
        { heading: "Recommended Claude MCP categories", body: "Most Claude Desktop users should begin with a small stack and add servers only when a workflow proves useful.", bullets: ["Filesystem for selected project folders", "GitHub for repositories, pull requests, and issues", "Database servers for read-only schema and query workflows", "Browser servers for research and page inspection"] },
        { heading: "Claude Desktop setup path", body: "Use safe placeholder configs first, verify the server starts, then test one harmless tool call before connecting sensitive data.", bullets: ["Create an mcpServers entry", "Use absolute paths where required", "Keep real tokens in local environment settings", "Restart Claude Desktop after config changes"] },
        { heading: "Internal links for deeper setup", body: "Use the existing Claude and security resources to move from server discovery into a production-safe workflow.", bullets: ["Compare servers in the directory", "Review config examples", "Generate placeholder-only configs", "Run the MCP security checklist before broad access"] },
      ],
    },
  },
  "for-cursor": {
    title: "Best MCP Servers for Cursor | Cursor MCP Workflow Stack | BestMCPServers",
    description: "Plan a Cursor MCP server stack for repository work, GitHub automation, file access, browser research, and developer workflows.",
    canonical: `${baseUrl}/for-cursor/`,
    config: {
      eyebrow: "Cursor MCP Stack",
      h1: "Best MCP Servers for Cursor",
      description: "Use this short Cursor MCP hub to choose the right servers for coding workflows, then continue into the full Cursor MCP setup guide and server recommendations.",
      primaryCta: { href: "/mcp-servers-for-cursor/", label: "Open the full Cursor MCP page" },
      secondaryCta: { href: "/guides/how-to-install-mcp-servers-in-cursor/", label: "Install MCP servers in Cursor" },
      cards: [
        { title: "Repository context", text: "Filesystem and GitHub MCP servers help Cursor reason over files, issues, pull requests, and implementation history." },
        { title: "Research and testing", text: "Browser and web servers can support docs lookup, UI checks, and external research when isolated from destructive tools." },
        { title: "Developer safety", text: "Keep server permissions project-scoped and review generated diffs before accepting writes." },
      ],
      sections: [
        { heading: "Cursor MCP stack order", body: "Install the smallest useful stack first. For most developers that means filesystem, GitHub, and then specialized servers for databases or browser automation.", bullets: ["Start with one project folder", "Add GitHub only with least-privilege tokens", "Use database servers read-only at first", "Separate browser research from write actions"] },
        { heading: "When Cursor needs MCP", body: "MCP is most useful when Cursor needs live tools or structured context beyond plain code search.", bullets: ["Repository onboarding", "Issue-to-PR workflows", "Config and documentation review", "Local automation with explicit boundaries"] },
        { heading: "Existing Cursor resources", body: "This page is intentionally a short hub that points users to the longer Cursor MCP landing page and install guide.", bullets: ["Read the full Cursor server list", "Follow the install guide", "Use config generators with placeholders", "Verify server startup before real work"] },
      ],
    },
  },
  "for-vscode": {
    title: "Best MCP Servers for VS Code | VS Code MCP Workflow Stack | BestMCPServers",
    description: "Plan a VS Code MCP server stack for coding, repositories, databases, browser research, and developer workflows with tighter safety boundaries.",
    canonical: `${baseUrl}/for-vscode/`,
    config: {
      eyebrow: "VS Code MCP Stack",
      h1: "Best MCP Servers for VS Code",
      description: "Build a practical VS Code MCP stack for coding assistants, repo context, files, browser research, and data workflows without starting with broad permissions.",
      primaryCta: { href: "/mcp-server-directory/", label: "Browse MCP servers for VS Code" },
      secondaryCta: { href: "/guides/how-to-install-mcp-server/", label: "Install an MCP server" },
      cards: [
        { title: "Code workspace context", text: "Filesystem and GitHub MCP servers give VS Code assistants project files, repository history, issues, and pull-request context." },
        { title: "Debugging and research", text: "Browser and database servers help with documentation lookup, UI checks, schema review, and read-only debugging workflows." },
        { title: "Safer first setup", text: "A strong VS Code MCP stack starts with one repo, one folder, and least-privilege credentials rather than full-machine access." },
      ],
      sections: [
        { heading: "Recommended VS Code MCP categories", body: "Most VS Code users should begin with repo-aware servers and only add external tools once the workflow clearly needs them.", bullets: ["Filesystem for selected workspaces", "GitHub for repo and PR context", "Database servers for schema-aware debugging", "Browser servers for docs and QA flows"] },
        { heading: "When VS Code benefits from MCP", body: "MCP helps most when the assistant needs structured context beyond text completion: repository history, live docs, issue state, local files, or controlled tool access.", bullets: ["Repo onboarding", "Issue triage with implementation context", "Debugging with local config and docs", "Repeatable coding workflows with review steps"] },
        { heading: "VS Code safety checklist", body: "Treat MCP in VS Code like a real toolchain integration: keep scopes narrow, document setup, and verify one harmless action before trusting the stack.", bullets: ["Use separate credentials per service", "Keep secrets out of committed config", "Review diffs before write actions", "Remove stale or unused servers"] },
      ],
    },
  },
  "github-mcp-server-for-claude": {
    title: "GitHub MCP Server for Claude | Repo Workflows for Claude Desktop | BestMCPServers",
    description: "Learn when GitHub MCP Server is the right fit for Claude Desktop, which workflows it unlocks, and how to keep repository access scoped and reviewable.",
    canonical: `${baseUrl}/github-mcp-server-for-claude/`,
    config: {
      eyebrow: "Claude + GitHub MCP",
      h1: "GitHub MCP Server for Claude",
      description: "Use GitHub MCP Server with Claude when you need pull requests, issues, repo search, and hosted repository context without granting broad local machine access.",
      primaryCta: { href: "/github-mcp-server/", label: "Open GitHub MCP Server guide" },
      secondaryCta: { href: "/for-claude/", label: "See the Claude MCP stack" },
      cards: [
        { title: "Best fit", text: "GitHub MCP Server is strongest for pull requests, issue triage, repository search, and branch-aware coding workflows inside hosted repos." },
        { title: "Why Claude users pick it", text: "Claude benefits from structured repository context when it needs code history, issue state, review threads, and remote file awareness." },
        { title: "Main safety rule", text: "Start with least-privilege repository scopes and require human review before any write-capable action or PR mutation." },
      ],
      sections: [
        { heading: "When Claude should use GitHub MCP", body: "GitHub MCP is useful when Claude needs collaboration context, hosted repository search, or PR state that local filesystem access alone cannot provide.", bullets: ["PR review and issue triage", "Remote repo search", "Branch and file context", "Repository onboarding across teams"] },
        { heading: "How to keep GitHub access narrow", body: "Use a token scoped only to the repositories and actions Claude truly needs. Early setups should bias toward read access and explicit review before state changes.", bullets: ["Limit token scopes", "Use repo-specific access where possible", "Review before comments, labels, or merges", "Keep secrets out of repo-visible artifacts"] },
        { heading: "Related pages", body: "Use this page as the bridge from high-intent Claude search traffic into the broader server directory and comparison content.", bullets: ["GitHub MCP Server overview", "Best MCP Servers for Claude", "Filesystem vs GitHub comparison", "Claude Desktop setup guide"] },
      ],
    },
  },
  "for-developers": {
    title: "Best MCP Servers for Developers | Coding Agent Workflows | BestMCPServers",
    description: "Choose MCP servers for developer workflows: filesystem, GitHub, databases, browser automation, docs, and safe coding-agent operations.",
    canonical: `${baseUrl}/for-developers/`,
    config: {
      eyebrow: "Developer MCP Workflows",
      h1: "Best MCP Servers for Developers",
      description: "Developers can use MCP servers to give AI assistants structured access to repositories, issues, databases, browsers, and documentation without dumping everything into a prompt.",
      primaryCta: { href: "/mcp-server-directory/", label: "Browse the MCP directory" },
      secondaryCta: { href: "/mcp-server-security/", label: "Review MCP security" },
      cards: [
        { title: "Code and repo work", text: "Use filesystem and GitHub servers for codebase inspection, issue triage, repo onboarding, and pull-request preparation." },
        { title: "Data and APIs", text: "Use database, fetch, and cloud servers for read-only debugging and documentation workflows before enabling writes." },
        { title: "Safety by default", text: "Developer MCP stacks should be scoped to one workflow, one repo, or one data source instead of broad machine access." },
      ],
      sections: [
        { heading: "Developer-first server categories", body: "The best MCP stack depends on the job. A coding assistant needs different tools than a research agent or support bot.", bullets: ["Filesystem for local repo reads", "GitHub for issues and PR context", "Database servers for schema-aware debugging", "Browser servers for docs and UI checks"] },
        { heading: "Avoid overpowered first setups", body: "Do not enable every available server at once. Add tools as the workflow earns them, then remove stale servers.", bullets: ["Map each server to a real task", "Use separate credentials per service", "Keep production data out of first tests", "Require review for write-capable tools"] },
        { heading: "From discovery to workflow packs", body: "After choosing servers, turn the stack into repeatable workflows with prompts, setup notes, and verification steps.", bullets: ["Start from server directory pages", "Use config generators for placeholders", "Document setup assumptions", "Add smoke tests for critical tools"] },
      ],
    },
  },
  "for-ai-agents": {
    title: "Best MCP Servers for AI Agents | Agent Tool Stack | BestMCPServers",
    description: "Plan MCP server stacks for AI agents with files, repositories, databases, browsers, communication tools, and permission boundaries.",
    canonical: `${baseUrl}/for-ai-agents/`,
    config: {
      eyebrow: "AI Agent Tool Stack",
      h1: "Best MCP Servers for AI Agents",
      description: "AI agents need tool access, but every tool adds risk. Use MCP servers to assemble focused agent stacks with clear data sources, permissions, and review points.",
      primaryCta: { href: "/guides/how-to-build-an-mcp-stack/", label: "Build an MCP stack" },
      secondaryCta: { href: "/tools/mcp-security-checklist-generator/", label: "Generate a security checklist" },
      cards: [
        { title: "Context servers", text: "Filesystem, GitHub, docs, and search servers provide the context an agent needs to plan useful actions." },
        { title: "Action servers", text: "Slack, Linear, cloud, and browser automation servers can trigger external effects and therefore need stricter approvals." },
        { title: "Control layer", text: "Production agent stacks need least-privilege credentials, logging, redaction, and rollback plans." },
      ],
      sections: [
        { heading: "Agent stack building blocks", body: "Group MCP servers by the role they play in the agent loop: context, planning, execution, or monitoring.", bullets: ["Context: files, docs, repositories, search", "Data: databases and analytics stores", "Action: communication, browser, and cloud tools", "Review: security checklists and approval gates"] },
        { heading: "Permissions before autonomy", body: "Autonomous workflows should not begin with broad write access. Start with read-only evidence gathering, then add reviewed write actions.", bullets: ["Sandbox first runs", "Human approval for external actions", "Separate credentials per environment", "Structured logs with redaction"] },
        { heading: "Recommended next resources", body: "Use the existing BestMCPServers guides to move from a list of servers to a controlled operating model.", bullets: ["How to build an MCP stack", "MCP server security", "MCP permissions checklist", "Workflow packs for repeatable operations"] },
      ],
    },
  },
};

export const comparisonPage = {
  title: "GitHub MCP Server vs Filesystem MCP Server | BestMCPServers",
  description: "Compare GitHub MCP Server and Filesystem MCP Server for coding agents, repository context, local files, setup effort, and security tradeoffs.",
  canonical: `${baseUrl}/compare/github-mcp-server-vs-filesystem-mcp-server/`,
  config: {
    eyebrow: "MCP Server Comparison",
    h1: "GitHub MCP Server vs Filesystem MCP Server",
    description: "Both servers help AI coding assistants understand software projects, but they expose different context and risk. Use this comparison to decide which server belongs in your first MCP stack.",
    primaryCta: { href: "/github-mcp-server/", label: "Review GitHub MCP Server" },
    secondaryCta: { href: "/filesystem-mcp-server/", label: "Review Filesystem MCP Server" },
    cards: [
      { title: "GitHub MCP Server", text: "Best for issues, pull requests, repository metadata, remote files, code search, and collaboration workflows around hosted repositories." },
      { title: "Filesystem MCP Server", text: "Best for local project folders, generated artifacts, docs, config files, and workflows that need direct workspace context." },
      { title: "Best first choice", text: "Use filesystem for local coding context and GitHub for collaboration context. Many serious coding stacks eventually use both with narrow scopes." },
    ],
    sections: [
      { heading: "When GitHub MCP is better", body: "GitHub MCP is stronger when the agent needs repository-level collaboration data rather than raw local files.", bullets: ["Issue triage and PR review", "Remote repository search", "Branch and file context from hosted repos", "Team workflows that live in GitHub"] },
      { heading: "When filesystem MCP is better", body: "Filesystem MCP is stronger when the agent needs fast local context inside one workspace or generated output that is not yet pushed.", bullets: ["Local repo onboarding", "Docs and config inspection", "Static site or build artifact review", "Focused edits inside an allowed project path"] },
      { heading: "Security tradeoffs", body: "Both servers can be safe or risky depending on scopes. GitHub depends on token permissions; filesystem depends on path boundaries and write controls.", bullets: ["Use least-privilege GitHub tokens", "Avoid broad home-directory file access", "Keep production secrets out of both contexts", "Review diffs before accepting writes"] },
    ],
  } satisfies McpSeoPageConfig,
};
