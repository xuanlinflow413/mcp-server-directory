export type AiCodingTool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  pricing: string;
  rating: number;
  website: string;
  categories: string[];
  strengths: string[];
  limitations: string[];
  workflowFit: string[];
  mcpAngle: string;
};

export type AiCodingComparison = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  verdict: string;
};

export const aiCodingTools: AiCodingTool[] = [
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "AI-first code editor for fast feature work",
    description:
      "Cursor is a VS Code-based AI editor with native chat, tab completion, codebase context, and agent mode for multi-file changes.",
    bestFor: "Developers and small teams who can switch editors and want the deepest AI-native IDE experience.",
    pricing: "Free tier, Pro around $20/month, Business around $40/user/month",
    rating: 4.8,
    website: "https://cursor.com",
    categories: ["AI IDE", "Codebase Chat", "Agent Mode"],
    strengths: ["Native AI workflow", "Strong repo context", "Fast multi-file iteration", "Familiar VS Code base"],
    limitations: ["Requires editor switch", "Enterprise privacy review may be needed", "Extension compatibility can vary"],
    workflowFit: ["Feature implementation", "Refactoring", "Repo Q&A", "Frontend iteration"],
    mcpAngle: "Pairs well with filesystem, GitHub, browser, database, and docs MCP servers when teams want richer project context inside an AI editor.",
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    tagline: "Terminal coding agent for codebase exploration and verified changes",
    description:
      "Claude Code is an agentic terminal workflow for exploring repositories, editing files, running commands, and producing evidence-backed implementation reports.",
    bestFor: "Senior builders who want an autonomous coding agent to work inside an existing repo with tests and command-line verification.",
    pricing: "Available through Anthropic plans and API usage depending on setup",
    rating: 4.7,
    website: "https://www.anthropic.com/claude-code",
    categories: ["Terminal Agent", "Repo Automation", "Test Runner"],
    strengths: ["Strong codebase reasoning", "Natural terminal workflow", "Good for multi-step tasks", "Evidence-first reporting"],
    limitations: ["Requires command-line comfort", "Can be slower than IDE autocomplete", "Needs clear repo guardrails"],
    workflowFit: ["Repo onboarding", "Bug fixing", "Test-backed implementation", "Code review prep"],
    mcpAngle: "MCP servers can expose project docs, issue trackers, browser QA, databases, and deployment tools to make terminal agents safer and more useful.",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "Mainstream AI pair programmer across IDEs",
    description:
      "GitHub Copilot provides inline completions, Copilot Chat, pull request assistance, and GitHub-native context across popular editors.",
    bestFor: "Teams already standardized on GitHub that want broad AI coding adoption without forcing an editor migration.",
    pricing: "Free for some users, Pro around $10/month, Business around $19/user/month, Enterprise around $39/user/month",
    rating: 4.6,
    website: "https://github.com/features/copilot",
    categories: ["IDE Extension", "GitHub Native", "Pair Programmer"],
    strengths: ["Works in existing IDEs", "GitHub ecosystem integration", "Broad language support", "Enterprise controls"],
    limitations: ["Less AI-native than Cursor", "Suggestions can be generic", "Advanced agentic work depends on setup"],
    workflowFit: ["Autocomplete", "PR assistance", "Everyday coding", "Team rollout"],
    mcpAngle: "Copilot becomes more useful when paired with repeatable MCP-backed workflows for GitHub, docs, and repository operations.",
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    tagline: "Agentic IDE with Cascade for autonomous edits",
    description:
      "Windsurf is an agentic IDE from Codeium with Cascade, code completion, web-aware assistance, and multi-step coding task support.",
    bestFor: "Developers who want an IDE agent that can plan, edit, and iterate through larger coding tasks with less manual prompting.",
    pricing: "Free tier, Pro around $10/month, Teams around $20/user/month",
    rating: 4.7,
    website: "https://windsurf.com",
    categories: ["AI IDE", "Autonomous Agent", "Cascade"],
    strengths: ["Strong autonomous workflow", "Competitive pricing", "Good for refactors", "Integrated agent experience"],
    limitations: ["Newer ecosystem", "Agent mistakes still need review", "Less mature enterprise footprint"],
    workflowFit: ["Autonomous implementation", "Refactoring", "Repo exploration", "Prototype shipping"],
    mcpAngle: "MCP can add controlled access to files, issue context, browser checks, and deployment evidence around Windsurf-style autonomous changes.",
  },
  {
    slug: "openai-codex",
    name: "OpenAI Codex",
    tagline: "Cloud and CLI coding agent for PR-oriented work",
    description:
      "OpenAI Codex workflows focus on delegating implementation, code review, tests, and pull-request style development to an agentic coding system.",
    bestFor: "Teams that want AI agents to handle scoped engineering tasks, review diffs, and return implementation evidence.",
    pricing: "Depends on OpenAI plan, API, and product access",
    rating: 4.5,
    website: "https://openai.com/codex",
    categories: ["Coding Agent", "PR Workflow", "Automation"],
    strengths: ["Good task delegation model", "Useful for PR review", "Strong with clear specs", "Fits async engineering workflows"],
    limitations: ["Needs tight task boundaries", "Product access and pricing can change", "Requires verification discipline"],
    workflowFit: ["PR review", "Scoped feature work", "Test fixing", "Async delegation"],
    mcpAngle: "BestMCPServers can help teams choose MCP servers that feed Codex-style agents with repo, issue, documentation, and QA context.",
  },
  {
    slug: "aider",
    name: "Aider",
    tagline: "Open-source AI pair programming in the terminal",
    description:
      "Aider is an open-source terminal pair programmer that edits files in a git repo and works with multiple LLM providers.",
    bestFor: "Developers who prefer local terminal workflows, git-visible edits, and model/provider flexibility.",
    pricing: "Open source; model/API costs depend on provider",
    rating: 4.4,
    website: "https://aider.chat",
    categories: ["Open Source", "Terminal", "Git Workflow"],
    strengths: ["Open-source control", "Git-aware workflow", "Provider flexibility", "Lightweight setup"],
    limitations: ["Less polished than commercial IDEs", "Requires CLI comfort", "Quality depends on chosen model"],
    workflowFit: ["Small repo edits", "Script changes", "CLI-first development", "Provider experimentation"],
    mcpAngle: "MCP-style context and tool routing can complement Aider by standardizing the external resources and checks around terminal coding.",
  },
  {
    slug: "continue",
    name: "Continue",
    tagline: "Open-source AI coding assistant for VS Code and JetBrains",
    description:
      "Continue is an open-source AI coding assistant that lets teams customize models, context providers, prompts, and IDE workflows.",
    bestFor: "Privacy-conscious or platform teams that want customizable AI coding inside existing IDEs.",
    pricing: "Open source; hosted and model costs vary by setup",
    rating: 4.3,
    website: "https://continue.dev",
    categories: ["Open Source", "IDE Extension", "Customizable"],
    strengths: ["Model flexibility", "Custom context providers", "Works in existing IDEs", "Good for internal platforms"],
    limitations: ["Requires configuration", "Less plug-and-play", "Team governance is self-managed"],
    workflowFit: ["Private code assistance", "Internal AI platform", "Custom model rollout", "IDE chat"],
    mcpAngle: "Continue aligns naturally with MCP because both emphasize configurable context and tool access for developer workflows.",
  },
];

export const aiCodingComparisons: AiCodingComparison[] = [
  {
    slug: "cursor-vs-claude-code",
    title: "Cursor vs Claude Code",
    description: "Compare an AI-first IDE with a terminal coding agent for repo onboarding, feature work, tests, and verification.",
    tools: ["cursor", "claude-code"],
    verdict: "Choose Cursor for fast in-editor iteration. Choose Claude Code when you want a terminal agent to inspect, edit, run tests, and report evidence.",
  },
  {
    slug: "cursor-vs-github-copilot",
    title: "Cursor vs GitHub Copilot",
    description: "Compare Cursor's AI-native IDE experience with GitHub Copilot's broad IDE and GitHub ecosystem coverage.",
    tools: ["cursor", "github-copilot"],
    verdict: "Choose Cursor if you can switch editors for deeper AI workflows. Choose Copilot for lower-friction team rollout inside existing IDEs.",
  },
  {
    slug: "claude-code-vs-openai-codex",
    title: "Claude Code vs OpenAI Codex",
    description: "Compare two agentic coding workflows for scoped implementation, PR review, tests, and asynchronous engineering delegation.",
    tools: ["claude-code", "openai-codex"],
    verdict: "Choose Claude Code for hands-on terminal workflows. Choose Codex for PR-oriented delegation where task boundaries and review loops are clear.",
  },
];

export const aiCodingFaqs = [
  {
    question: "What is an agentic AI coding tool?",
    answer:
      "An agentic AI coding tool can inspect a codebase, plan changes, edit multiple files, run commands or tests, and iterate toward a goal instead of only suggesting one-line completions.",
  },
  {
    question: "How is this different from a normal AI code assistant?",
    answer:
      "Traditional assistants focus on autocomplete and chat. Agentic tools add task execution: repo exploration, file edits, terminal commands, browser checks, pull-request review, and evidence reports.",
  },
  {
    question: "Where does MCP fit into AI coding tools?",
    answer:
      "MCP servers provide structured access to files, GitHub, browsers, databases, docs, and internal tools. That makes AI coding agents more useful and easier to govern.",
  },
  {
    question: "Should teams buy one tool or combine several?",
    answer:
      "Most teams start with one primary IDE assistant, then add a terminal or PR agent for deeper tasks. The right stack depends on editor constraints, privacy, test coverage, and review process.",
  },
];

export function getAiCodingTool(slug: string) {
  return aiCodingTools.find((tool) => tool.slug === slug);
}

export function getAiCodingComparison(slug: string) {
  return aiCodingComparisons.find((comparison) => comparison.slug === slug);
}
