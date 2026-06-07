export type SeoGuide = {
  slug: string;
  category: "AI Cost & Pricing" | "MCP & Agent Setup";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  updated: string;
  readingTime: string;
  intro: string[];
  keyTakeaways: string[];
  sections: Array<{ heading: string; body: string[]; bullets?: string[]; code?: string }>;
  checklist: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string; description: string }>;
  primaryCta: { href: string; label: string };
};

const updated = "2026-06-06";

export const seoGuides: SeoGuide[] = [
  {
    slug: "how-to-estimate-openai-api-costs",
    category: "AI Cost & Pricing",
    title: "How to Estimate OpenAI API Costs Before You Launch",
    description: "Learn how to estimate OpenAI API costs from input tokens, output tokens, request volume, and model pricing before your AI app scales.",
    h1: "How to Estimate OpenAI API Costs Before You Launch",
    eyebrow: "OpenAI cost planning",
    primaryKeyword: "how to estimate openai api costs",
    secondaryKeywords: ["openai api cost estimate", "openai token cost", "gpt api cost estimate", "openai monthly cost", "openai cost calculator"],
    updated,
    readingTime: "8 min read",
    intro: [
      "OpenAI API cost is mostly a usage planning problem. Before you choose a subscription price, a free plan, or an agent architecture, you need a simple way to estimate how many input tokens, output tokens, and requests your product will create.",
      "This guide explains the estimating method behind the OpenAI Cost Calculator. It is written for founders and developers who need a practical monthly budget before an AI writing app, chatbot, coding assistant, or agent workflow reaches production traffic."
    ],
    keyTakeaways: [
      "Estimate input tokens, output tokens, and request volume separately instead of guessing a single monthly number.",
      "Output tokens can dominate cost when your product generates long answers, PRDs, reports, or drafts.",
      "Use provider-specific calculators for planning estimates, then verify official OpenAI pricing before launch."
    ],
    sections: [
      { heading: "What drives OpenAI API cost?", body: ["OpenAI API cost is driven by model choice, input token volume, output token volume, and request count. A small model used often can cost more than a larger model used rarely, so the right estimate starts with real product behavior rather than a model name alone.", "For each feature, write down the average prompt size, how much context you attach, how long the generated answer should be, and how often a normal user triggers it. Those assumptions become the calculator inputs."], bullets: ["Model price per 1M input tokens", "Model price per 1M output tokens", "Average input tokens per request", "Average output tokens per request", "Daily request volume"] },
      { heading: "Input tokens vs output tokens", body: ["Input tokens include the user message, system prompt, examples, retrieved documents, chat history, and hidden context you send to the model. Output tokens are the generated response. Long context retrieval increases input cost, while long drafts, reports, and explanations increase output cost.", "Many teams underestimate output tokens because demos use short answers. If your app creates cover letters, code reviews, PRDs, or summaries, measure output length early and add a safety margin."], bullets: ["Short chatbot answer: lower output cost", "Long report generation: higher output cost", "RAG workflow: higher input cost", "Agent loop: repeated requests multiply both sides"] },
      { heading: "How to estimate monthly OpenAI spend", body: ["Use this formula: ((input tokens × input price) + (output tokens × output price)) ÷ 1,000,000 × daily requests × 30. Run the estimate for each major feature, then add them together.", "For SaaS planning, also divide the monthly cost by active users and paid users. That shows whether your proposed free plan or Pro price can support real usage."], bullets: ["Estimate one feature at a time", "Use daily requests, then multiply by 30", "Separate free users from paid users", "Add a buffer for power users"] },
      { heading: "Example: AI writing app cost estimate", body: ["Imagine an AI writing app with 2,000 daily generations. Each request sends 1,500 input tokens and returns 600 output tokens. On a lower-cost GPT model, this may look affordable. On a flagship model, the same workload can become several times more expensive.", "The important lesson is not the exact price. The important lesson is that token length and request volume should shape your free plan, regeneration limits, and Pro pricing before launch."], bullets: ["Limit free regenerations", "Use smaller models for drafts", "Reserve expensive models for optimization", "Track usage by feature"] },
      { heading: "How to reduce OpenAI API costs", body: ["Cost reduction usually comes from smaller prompts, shorter outputs, caching, model routing, and usage caps. Do not wait for a large invoice to add these controls. Include them in your MVP requirements.", "If the user only needs classification, routing, or template cleanup, use a cheaper model. If the user needs deep reasoning or long structured output, use a stronger model but cap retries and output length."], bullets: ["Trim repeated system prompts", "Cache common answers", "Summarize chat history", "Route easy tasks to cheaper models", "Add monthly credits"] },
      { heading: "Use the OpenAI Cost Calculator", body: ["The OpenAI Cost Calculator turns these assumptions into daily, monthly, yearly, and per-1,000-request estimates. It runs in the browser and does not call OpenAI or require an API key."] }
    ],
    checklist: ["List every AI feature before estimating", "Measure average input and output tokens", "Estimate free and paid usage separately", "Cap outputs and regenerations", "Verify official provider pricing before launch"],
    faq: [
      { question: "How do I estimate OpenAI API costs?", answer: "Estimate average input tokens, output tokens, daily requests, and model prices, then calculate daily and monthly spend." },
      { question: "Are output tokens more expensive?", answer: "Many OpenAI models price output tokens higher than input tokens, so long generated answers can dominate cost." },
      { question: "Should I estimate cost per user?", answer: "Yes. AI SaaS pricing should use cost per active user and cost per paid user, not only total monthly spend." },
      { question: "Does the calculator call OpenAI?", answer: "No. It is a static planning tool and does not call an API or upload your assumptions." },
      { question: "Are prices guaranteed current?", answer: "No. Use the numbers for planning and verify official OpenAI pricing before production budgeting." }
    ],
    relatedLinks: [
      { href: "/tools/openai-cost-calculator/", label: "OpenAI Cost Calculator", description: "Estimate GPT API spend from token and request assumptions." },
      { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator", description: "Turn model costs into subscription pricing ranges." },
      { href: "/tools/claude-cost-calculator/", label: "Claude Cost Calculator", description: "Compare Anthropic workloads against OpenAI assumptions." },
      { href: "/tools/gemini-cost-calculator/", label: "Gemini Cost Calculator", description: "Estimate Google AI API spend for similar workloads." }
    ],
    primaryCta: { href: "/tools/openai-cost-calculator/", label: "Use the OpenAI Cost Calculator" }
  },
  {
    slug: "claude-api-cost-guide",
    category: "AI Cost & Pricing",
    title: "Claude API Cost Guide — Estimate Anthropic Usage Costs",
    description: "Understand how Claude API costs work for Sonnet, Opus, and Haiku-style workloads, including token usage, long context, and monthly budgeting.",
    h1: "Claude API Cost Guide",
    eyebrow: "Anthropic cost planning",
    primaryKeyword: "claude api cost guide",
    secondaryKeywords: ["claude api cost calculator", "anthropic api pricing", "claude sonnet cost", "claude opus cost", "claude token cost"],
    updated,
    readingTime: "8 min read",
    intro: ["Claude API cost planning matters most when your product sends long documents, large repository context, or multi-step research tasks. These workflows can create much larger input and output token totals than a simple chat product.", "This guide explains how to estimate Claude spend, when Sonnet-style models are enough, and when expensive reasoning models should be reserved for specific high-value steps."],
    keyTakeaways: ["Long context is useful, but every document and chat history chunk increases input token cost.", "Use Sonnet-style models for most production workflows and reserve Opus-class models for hard reasoning tasks.", "Calculate cost per feature before you promise unlimited research, coding, or document analysis."],
    sections: [
      { heading: "What affects Claude API cost?", body: ["Claude cost is shaped by model price, input tokens, output tokens, and request volume. Research agents and document tools often have high input token counts because they attach source material, summaries, and previous context.", "The safest estimate separates each workflow. A document summary, a coding assistant answer, and a research synthesis have different token profiles and should not share a single guess."], bullets: ["Model tier", "Document length", "Chat history", "Generated answer length", "Agent loop count"] },
      { heading: "Claude Sonnet vs Opus cost planning", body: ["Sonnet-style models are usually the balanced choice for production products. Opus-class models may be valuable for difficult reasoning, but they can change your unit economics quickly if every request uses them.", "A practical architecture routes default drafts, summaries, and formatting to a balanced model, then reserves expensive reasoning for review, planning, or high-stakes analysis."], bullets: ["Default to balanced models", "Escalate only hard tasks", "Measure quality difference", "Add user-visible limits"] },
      { heading: "Why long context can increase spend", body: ["Long context makes Claude useful for documents and repositories, but every token sent as context has a cost. If you attach full documents on every turn, monthly spend can rise even when user count is modest.", "Summarization, chunking, retrieval limits, and context reuse reduce cost while preserving enough information for useful answers."], bullets: ["Chunk documents", "Summarize previous turns", "Attach only relevant sections", "Avoid repeated full-document prompts"] },
      { heading: "Example: research agent cost estimate", body: ["A research agent might send 8,000 input tokens and receive 1,500 output tokens per task. At hundreds of daily tasks, monthly spend becomes material. Estimate one task, then multiply by daily active researchers and tasks per user.", "If the product has a free tier, model free users separately from paid users. Heavy research workflows are rarely safe to make unlimited without fair-use controls."], bullets: ["Estimate tasks per user", "Separate free and paid plans", "Cap reports per month", "Offer higher tiers for heavy research"] },
      { heading: "Use the Claude Cost Calculator", body: ["The Claude Cost Calculator filters to Anthropic models and estimates daily, monthly, yearly, and per-1,000-request spend. It runs locally in the browser with no Anthropic API call."] }
    ],
    checklist: ["Choose the likely Claude model tier", "Estimate document and output length", "Model research tasks separately", "Route hard tasks intentionally", "Verify current Anthropic pricing"],
    faq: [
      { question: "How do Claude API costs work?", answer: "Claude costs are estimated from input token price, output token price, selected model, and request volume." },
      { question: "Why can Claude document workflows be expensive?", answer: "They often send long documents or repository context as input tokens on each request." },
      { question: "Should I use Opus for every request?", answer: "Usually no. Reserve expensive models for tasks where quality lift justifies the cost." },
      { question: "Does the calculator call Anthropic?", answer: "No. It is a static browser calculator with no API call." },
      { question: "How can I reduce Claude spend?", answer: "Chunk documents, summarize context, cap output, cache repeated analysis, and route simpler tasks to lower-cost models." }
    ],
    relatedLinks: [
      { href: "/tools/claude-cost-calculator/", label: "Claude Cost Calculator", description: "Estimate Anthropic API costs for Sonnet, Opus, and Haiku-style workloads." },
      { href: "/guides/best-mcp-servers-for-claude/", label: "Best MCP Servers for Claude", description: "Plan useful Claude Desktop MCP workflows." },
      { href: "/tools/openai-cost-calculator/", label: "OpenAI Cost Calculator", description: "Compare GPT costs with Claude workloads." },
      { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator", description: "Convert Claude costs into pricing tiers." }
    ],
    primaryCta: { href: "/tools/claude-cost-calculator/", label: "Use the Claude Cost Calculator" }
  },
  {
    slug: "gemini-api-cost-guide",
    category: "AI Cost & Pricing",
    title: "Gemini API Cost Guide — Estimate Google AI Usage",
    description: "Plan Gemini API costs from token volume, request usage, long-context prompts, and monthly AI app traffic assumptions.",
    h1: "Gemini API Cost Guide",
    eyebrow: "Google AI cost planning",
    primaryKeyword: "gemini api cost guide",
    secondaryKeywords: ["gemini api cost calculator", "google gemini pricing", "gemini token cost", "google ai api cost", "long context ai cost"],
    updated,
    readingTime: "7 min read",
    intro: ["Gemini cost planning is especially useful for long-context assistants, Google ecosystem workflows, and multimodal product ideas. Even when a model looks inexpensive per token, long prompts and frequent requests can change the monthly budget.", "This guide gives a practical way to estimate Gemini spend before launch and connect that estimate to SaaS pricing and product limits."],
    keyTakeaways: ["Long context can raise input token spend quickly.", "Flash-style models are often better for high-volume simple tasks.", "Estimate Gemini cost before setting free-plan limits or Pro pricing."],
    sections: [
      { heading: "What affects Gemini API cost?", body: ["Gemini cost is shaped by model choice, input tokens, output tokens, and request volume. Long-context prompts, retrieved documents, and chat history increase input tokens, while detailed reports and generated plans increase output tokens.", "Estimate each product feature separately, especially if some workflows use long context and others only need short answers."], bullets: ["Model tier", "Prompt length", "Retrieved context", "Generated answer length", "Daily traffic"] },
      { heading: "Token usage and long-context workflows", body: ["Long context is useful when your product needs to inspect documents, conversations, or multi-step instructions. The tradeoff is that every retained or retrieved token can become part of your input cost.", "Reduce waste by summarizing older turns, limiting retrieval size, and using explicit max output settings for generated answers."], bullets: ["Summarize chat history", "Limit retrieved chunks", "Avoid sending full documents repeatedly", "Set max output length"] },
      { heading: "Gemini Pro vs Flash-style planning", body: ["A Pro-style model may be useful for complex reasoning or long-context tasks, while Flash-style models are often better for high-volume, lower-latency flows. Use cost estimates to decide which tasks need quality and which need efficiency.", "The best architecture may use multiple models. Route simple classification, extraction, or formatting to cheaper models, then reserve heavier models for complex synthesis."], bullets: ["Use Flash-style models for simple tasks", "Use Pro-style models for complex context", "Measure quality differences", "Route by workflow value"] },
      { heading: "Example: long-context assistant cost estimate", body: ["A long-context assistant might send 8,000 input tokens and receive 1,000 output tokens per request. At 800 daily requests, monthly cost depends heavily on model selection and whether the app repeatedly sends the same context.", "If this assistant is part of a paid SaaS plan, compare cost per active user and cost per paid user before setting pricing."], bullets: ["Estimate context size", "Multiply by daily requests", "Separate free users from paid users", "Add fair-use caps"] },
      { heading: "Use the Gemini Cost Calculator", body: ["The Gemini Cost Calculator focuses on Google AI model assumptions and calculates daily, monthly, yearly, and per-1,000-request cost. It runs locally without calling Google APIs."] }
    ],
    checklist: ["Estimate long-context token size", "Choose Pro or Flash-style model assumptions", "Cap output tokens", "Compare against OpenAI and Claude", "Use AI SaaS pricing after cost planning"],
    faq: [
      { question: "How do I estimate Gemini API cost?", answer: "Estimate model price, input tokens, output tokens, and request volume, then calculate daily and monthly spend." },
      { question: "Does long context increase Gemini cost?", answer: "Yes. Larger prompts, retrieved documents, and retained chat history increase input token usage." },
      { question: "Should I use Flash-style models?", answer: "They can be a good fit for high-volume or simpler tasks where cost and speed matter." },
      { question: "Does the calculator call Google APIs?", answer: "No. It runs in the browser with static reference prices." },
      { question: "Is Gemini pricing always current here?", answer: "No. Use the estimate for planning and verify official Google AI pricing before launch." }
    ],
    relatedLinks: [
      { href: "/tools/gemini-cost-calculator/", label: "Gemini Cost Calculator", description: "Estimate Google AI API costs from token and request assumptions." },
      { href: "/tools/openai-cost-calculator/", label: "OpenAI Cost Calculator", description: "Compare GPT cost assumptions." },
      { href: "/tools/claude-cost-calculator/", label: "Claude Cost Calculator", description: "Compare Anthropic workloads." },
      { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator", description: "Turn Gemini cost into plan pricing." }
    ],
    primaryCta: { href: "/tools/gemini-cost-calculator/", label: "Use the Gemini Cost Calculator" }
  },
  {
    slug: "how-to-price-an-ai-saas-product",
    category: "AI Cost & Pricing",
    title: "How to Price an AI SaaS Product Without Losing Money",
    description: "Learn how to price an AI SaaS product using model costs, usage caps, free-plan risk, gross margin, and paid conversion assumptions.",
    h1: "How to Price an AI SaaS Product Without Losing Money",
    eyebrow: "AI SaaS pricing",
    primaryKeyword: "how to price an ai saas product",
    secondaryKeywords: ["ai saas pricing", "ai app pricing", "price ai product", "ai gross margin", "ai subscription pricing"],
    updated,
    readingTime: "10 min read",
    intro: ["AI SaaS pricing is different from normal SaaS because every generation, rewrite, report, or agent step can create marginal cost. A generous free plan can be useful for growth, but only if usage caps and conversion assumptions protect your gross margin.", "This guide explains how to connect token costs, active users, paid conversion, and target margin before you choose Starter, Pro, or credit-based pricing."],
    keyTakeaways: ["Calculate model cost per active user and per paid user before choosing plan prices.", "Unlimited AI usage should usually mean fair-use limits, not unbounded model calls.", "Credit packs and monthly caps are easier to control than vague unlimited promises."],
    sections: [
      { heading: "Why AI SaaS pricing is different", body: ["Traditional SaaS often has low marginal cost for each extra user action. AI SaaS can have a visible model cost every time a user generates, optimizes, rewrites, summarizes, or runs an agent workflow.", "This means product pricing must include usage controls. Without them, a small number of power users can erase the profit from many normal users."], bullets: ["Model cost per generation", "Power-user behavior", "Free-plan abuse risk", "Retry and regeneration loops", "Long output features"] },
      { heading: "Calculate AI cost per user", body: ["Start by estimating requests per user per day, average input tokens, average output tokens, and selected model. Multiply by active users and convert the result into monthly AI cost.", "Then divide by active users and paid users separately. Cost per active user shows product burden. Cost per paid user shows pricing pressure when most users are free."], bullets: ["Requests per user per day", "Input and output tokens", "Active users", "Paid conversion", "Fixed monthly costs"] },
      { heading: "Model free users and paid conversion", body: ["Free users are not free if they can trigger expensive AI calls. Model a realistic free-to-paid conversion rate and decide how many generations, credits, or exports belong in the free plan.", "If paid conversion is low, the paid users must carry the AI cost of the whole product. That usually means higher Pro pricing, stricter free limits, or one-time credit packs."], bullets: ["Daily free credits", "Monthly Pro credits", "Fair-use wording", "One-time packs", "Power-user monitoring"] },
      { heading: "Set target gross margin", body: ["Choose a target gross margin and calculate the minimum paid price required to support it. If the number is too high for your market, reduce usage, switch models, or narrow the AI feature scope.", "Do not treat the first estimate as final. Pricing is an operating model: change inputs, compare tiers, and test whether users understand the limits."], bullets: ["70-90% target margin scenarios", "Starter and Pro plan split", "Cost buffer", "Usage-based add-ons"] },
      { heading: "Use the AI SaaS Pricing Calculator", body: ["The AI SaaS Pricing Calculator turns usage assumptions into estimated monthly AI cost, cost per user, paid-user pressure, and suggested plan prices. It does not connect to Stripe or store data."] }
    ],
    checklist: ["Estimate model cost by feature", "Separate free and paid usage", "Set monthly credits", "Calculate gross margin", "Add fair-use wording", "Revisit pricing after launch data"],
    faq: [
      { question: "How should I price an AI SaaS product?", answer: "Start with model cost per user, paid conversion, target margin, and usage limits, then set plan prices above paid-user cost." },
      { question: "Should AI SaaS offer unlimited usage?", answer: "Usually only with fair-use limits. Unbounded model calls can create unpredictable cost." },
      { question: "Are credits better than unlimited?", answer: "Credits are often easier to control and explain for early AI products." },
      { question: "What gross margin should I target?", answer: "Many SaaS products aim for high gross margins, but AI products should validate real usage before promising aggressive margins." },
      { question: "Is this financial advice?", answer: "No. It is planning guidance. Verify real costs, fees, taxes, and market willingness to pay." }
    ],
    relatedLinks: [
      { href: "/tools/ai-saas-pricing-calculator/", label: "AI SaaS Pricing Calculator", description: "Estimate pricing tiers from model cost and margin targets." },
      { href: "/tools/ai-cost-calculator/", label: "AI Cost Calculator", description: "Estimate general LLM token costs." },
      { href: "/tools/openai-cost-calculator/", label: "OpenAI Cost Calculator", description: "Plan GPT API spend." },
      { href: "/ai-prd-generator/", label: "AI PRD Generator", description: "Define the product before setting pricing." }
    ],
    primaryCta: { href: "/tools/ai-saas-pricing-calculator/", label: "Use the AI SaaS Pricing Calculator" }
  },
  {
    slug: "how-to-build-an-mcp-stack",
    category: "MCP & Agent Setup",
    title: "How to Build an MCP Stack for AI Agents",
    description: "Learn how to plan an MCP stack for Claude, Cursor, and AI agents, including data sources, server categories, setup order, and security checks.",
    h1: "How to Build an MCP Stack for AI Agents",
    eyebrow: "MCP stack planning",
    primaryKeyword: "how to build an mcp stack",
    secondaryKeywords: ["mcp stack builder", "mcp server stack", "model context protocol stack", "mcp servers for ai agents", "mcp setup planner"],
    updated,
    readingTime: "10 min read",
    intro: ["An MCP stack is the set of clients, servers, data sources, and safety rules that let an AI agent use external context and tools. A good stack starts narrow: one workflow, one client, one or two read-only servers, and clear permissions.", "This guide explains how to plan an MCP stack for Claude Desktop, Cursor, custom apps, and local development before you install servers or expose sensitive data."],
    keyTakeaways: ["Start with the agent workflow, not with a random list of MCP servers.", "Choose data sources and permissions before enabling write actions.", "Security boundaries are part of the stack, not a task to add after launch."],
    sections: [
      { heading: "What is an MCP stack?", body: ["An MCP stack combines an MCP client, one or more MCP servers, data sources, credentials, and safety rules. The client is where the model operates. The servers expose tools and context. The safety rules define what the agent can read, write, or request approval for.", "A stack is not just configuration. It is an operating boundary for an AI agent."], bullets: ["Client: Claude Desktop, Cursor, or custom app", "Servers: filesystem, GitHub, browser, database, docs", "Data sources: files, repos, docs, tickets, messages", "Controls: scopes, approvals, logs, secrets"] },
      { heading: "Choose your MCP client", body: ["The client shapes the user experience and deployment model. Claude Desktop works well for local productivity. Cursor is useful for coding workflows. Custom apps need more engineering but can integrate with product-specific permissions and UI.", "Pick one client for the first version. Testing multiple clients before the workflow is clear creates avoidable complexity."], bullets: ["Claude Desktop for personal workflows", "Cursor for coding and repository context", "Custom apps for productized agents", "Local dev for experiments"] },
      { heading: "Choose data sources", body: ["Data source selection should follow the agent goal. A coding assistant may need filesystem and GitHub. A research agent may need browser and notes. A support agent may need docs and tickets. Each data source adds risk and setup work.", "Start with read-only access. Add write tools only after you know exactly which actions the agent should perform and how users approve them."], bullets: ["Filesystem", "GitHub", "Browser", "Database", "Docs or wiki", "Slack or Discord", "Calendar or email"] },
      { heading: "Design security boundaries", body: ["MCP security starts with least privilege. Use narrow scopes, separate dev and production credentials, avoid secrets in config files, and require human approval for destructive actions.", "Treat browser pages, documents, issues, and messages as untrusted content. They can contain prompt injection attempts that should not change tool permissions or reveal secrets."], bullets: ["Read-only first", "Separate credentials", "No committed secrets", "Approval for writes", "Audit tool calls"] },
      { heading: "Example MCP stack for a coding agent", body: ["A coding agent stack might use Cursor, GitHub, and filesystem servers. The first version should read repository context, search issues, and inspect files. Write access should be restricted until review and rollback steps are defined."], bullets: ["Cursor client", "GitHub server", "Filesystem server", "Read-only initial scope", "Pull request review workflow"] },
      { heading: "Use the MCP Stack Builder", body: ["The MCP Stack Builder asks for your goal, client, data sources, security level, and deployment preference, then returns recommended server categories, setup steps, security checks, and a config skeleton. It is static and does not connect accounts or call AI." ] }
    ],
    checklist: ["Define the agent goal", "Choose one MCP client", "Select only needed data sources", "Start read-only", "Separate secrets", "Document approval and rollback steps"],
    faq: [
      { question: "What is an MCP stack?", answer: "It is the client, servers, data sources, credentials, and safety rules that let an AI agent use external tools and context." },
      { question: "How do I choose MCP servers?", answer: "Start from the workflow and data sources, then select only the server categories needed for that task." },
      { question: "Should I enable write tools immediately?", answer: "Usually no. Start read-only and add write tools after approval, logging, and rollback are clear." },
      { question: "Can I use this for Claude Desktop?", answer: "Yes. The planning method applies to Claude Desktop, Cursor, custom apps, and local development." },
      { question: "Does the MCP Stack Builder install servers?", answer: "No. It is a static planner and does not install packages, connect accounts, or store data." }
    ],
    relatedLinks: [
      { href: "/tools/mcp-stack-builder/", label: "MCP Stack Builder", description: "Plan a static MCP stack from workflow and security inputs." },
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate Claude Desktop mcpServers config templates." },
      { href: "/guides/how-to-create-claude-desktop-config-json/", label: "How to Create claude_desktop_config.json", description: "Create the Claude Desktop config file before copying server entries." },
      { href: "/guides/claude-desktop-mcp-config-examples/", label: "Claude Desktop MCP Config Examples", description: "Use concrete Claude Desktop examples after choosing stack servers and permissions." },
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Generate Cursor-oriented MCP setup drafts." },
      { href: "/guides/cursor-mcp-config-examples/", label: "Cursor MCP Config Examples", description: "Use concrete Cursor examples after choosing stack servers and permissions." },
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Build generic MCP server config skeletons." },
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "Use generic JSON examples after planning clients, servers, and permissions." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Create a Markdown review checklist before enabling servers." }
    ],
    primaryCta: { href: "/tools/mcp-server-config-generator/", label: "Generate an MCP Config Template" }
  },
  {
    slug: "how-to-create-claude-desktop-config-json",
    category: "MCP & Agent Setup",
    title: "How to Create a claude_desktop_config.json File",
    description: "Learn how to create a claude_desktop_config.json file for Claude Desktop MCP servers, including file location, JSON structure, environment variables, and common fixes.",
    h1: "How to Create a claude_desktop_config.json File",
    eyebrow: "Claude Desktop MCP setup",
    primaryKeyword: "create claude_desktop_config.json",
    secondaryKeywords: ["claude_desktop_config.json file", "Claude Desktop MCP config", "MCP server configuration", "Claude Desktop config file location", "MCP JSON config", "add MCP server to Claude Desktop", "MCP environment variables"],
    updated,
    readingTime: "9 min read",
    intro: [
      "The claude_desktop_config.json file tells Claude Desktop which MCP servers to start and what settings each server needs. If you want to connect tools like GitHub, filesystem access, databases, browsers, or local scripts through MCP, this local JSON file is where those server definitions go.",
      "This independent guide explains what the file does, where to create it, how the JSON is structured, and how to avoid common mistakes. It is not affiliated with or endorsed by Anthropic or Claude.",
      "If you want a faster starting point, use the Claude Desktop MCP Config Generator, then review the output before adding it to your own local Claude Desktop setup. The generator runs in the browser and uses placeholder environment variable names instead of real secrets."
    ],
    keyTakeaways: [
      "Create the file locally in the Claude Desktop config folder for your operating system.",
      "Use a top-level mcpServers object, then add one named MCP server entry at a time.",
      "Keep public examples safe by using placeholders such as ${GITHUB_TOKEN} instead of real API keys."
    ],
    sections: [
      {
        heading: "What is claude_desktop_config.json?",
        body: [
          "claude_desktop_config.json is a local configuration file used by Claude Desktop to define MCP servers. Each server entry tells Claude Desktop which command to run, which arguments to pass, and which environment variables the server needs.",
          "A basic file contains a top-level mcpServers object. Each key inside that object is the local name of one MCP server. Choose names that are short, descriptive, and unique."
        ],
        bullets: ["Server name", "Command", "Command arguments", "Environment variables", "Optional working directory"],
        code: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    }\n  }\n}"
      },
      {
        heading: "Where to create the file",
        body: [
          "The config file is created on your own computer, not inside a website. If the file does not exist yet, create it manually with a plain text editor and save it with the exact filename claude_desktop_config.json.",
          "Common locations are the Claude application support folder on macOS and the Claude app data folder on Windows. Paths can vary by installation, so verify against your local Claude Desktop version if the folder is missing."
        ],
        bullets: ["macOS: ~/Library/Application Support/Claude/claude_desktop_config.json", "Windows: %APPDATA%\\Claude\\claude_desktop_config.json", "Use plain text, not rich text", "Restart Claude Desktop after saving"]
      },
      {
        heading: "Basic file structure",
        body: [
          "The smallest valid config has an mcpServers object. Add one server entry inside it, then validate the JSON before adding more servers.",
          "The command field is the executable Claude Desktop should run. The args field must be an array, not a single string. Use cwd only when a server explicitly needs a working directory."
        ],
        bullets: ["command: executable name or path", "args: ordered command-line arguments", "env: optional key-value variables", "cwd: optional working directory"],
        code: "{\n  \"mcpServers\": {\n    \"example-server\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"example-mcp-server\"]\n    }\n  }\n}"
      },
      {
        heading: "Add environment variables safely",
        body: [
          "Some MCP servers require tokens, API keys, database URLs, or local settings. In shared examples, generated previews, screenshots, or documentation, use placeholder values instead of real secrets.",
          "For your private local file, follow the server documentation for how it expects secrets. A static browser tool can generate a template, but it should not upload, store, or log your credentials."
        ],
        bullets: ["Use ${GITHUB_TOKEN} in public examples", "Use ${DATABASE_URL} for database placeholders", "Do not commit real claude_desktop_config.json secrets", "Separate dev and production credentials"]
      },
      {
        heading: "Example config with multiple MCP servers",
        body: [
          "You can define more than one MCP server in the same file. Keep each server entry separate so failures are easier to debug.",
          "Start with one read-only server, restart Claude Desktop, and confirm it works before adding filesystem, browser, database, or write-capable tools."
        ],
        bullets: ["Add one server at a time", "Prefer read-only scopes first", "Keep names descriptive", "Review permissions before enabling write actions"],
        code: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    },\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/Users/your-name/Documents\"]\n    }\n  }\n}"
      },
      {
        heading: "Step-by-step setup flow",
        body: [
          "Choose the MCP servers you want to use, find the documented command and arguments for each server, then create or edit the Claude Desktop config file. Validate the JSON before saving and restart Claude Desktop after every change.",
          "If you use a browser-based generator, copy the generated JSON, review it, replace placeholders with your local environment setup where appropriate, and save it manually on your own machine."
        ],
        bullets: ["Choose servers", "Collect command, args, and env names", "Create the file", "Validate JSON", "Restart Claude Desktop", "Test one server before adding more"]
      },
      {
        heading: "Common mistakes to check",
        body: [
          "Most Claude Desktop MCP config problems are simple JSON, path, or dependency issues. Check the basics before replacing the whole file.",
          "JSON does not allow comments, trailing commas, smart quotes, or unquoted keys. File paths must exist on your machine, and runtime dependencies such as Node.js must be installed if the command uses npx."
        ],
        bullets: ["Trailing commas", "Wrong filename", "Wrong config folder", "Smart quotes", "Missing Node.js", "Env names that do not match the server docs", "Real secrets in shared screenshots"]
      }
    ],
    checklist: [
      "The filename is exactly claude_desktop_config.json",
      "The file is in the correct Claude Desktop config folder",
      "The JSON has a top-level mcpServers object",
      "Each server has a unique local name",
      "Each server has the correct command",
      "args is an array, not a plain string",
      "Public examples use placeholders instead of real secrets",
      "The JSON has no trailing commas",
      "Claude Desktop was restarted after saving changes"
    ],
    faq: [
      { question: "What does claude_desktop_config.json do?", answer: "It defines which MCP servers Claude Desktop should run locally. Each server entry tells Claude Desktop the command, arguments, and optional environment variables needed to start that MCP server." },
      { question: "Do I need to create claude_desktop_config.json manually?", answer: "If the file does not already exist, yes. You can create it with any plain text editor. A browser-based generator can help produce the JSON, but the file still needs to be saved locally in the correct Claude Desktop config folder." },
      { question: "Can I use real API keys in the config file?", answer: "For your private local file, some MCP servers may require real tokens or keys. For public examples, generated previews, screenshots, or documentation, never use real secrets. Use placeholders like ${GITHUB_TOKEN} or ${API_KEY}." },
      { question: "Why is my MCP server not showing up?", answer: "Common causes include invalid JSON, the wrong file location, a misspelled command, missing dependencies, or forgetting to restart Claude Desktop after editing the file. Start with one server, validate the JSON, then add more." },
      { question: "Can a static website create the config file automatically?", answer: "A static, browser-only site can generate JSON for you to copy or download, but it should not directly modify files on your computer. You still need to review the output and place the file in the correct local Claude Desktop config folder." }
    ],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate a browser-only claude_desktop_config.json template with safe placeholders." },
      { href: "/guides/claude-desktop-mcp-config-examples/", label: "Claude Desktop MCP Config Examples", description: "Compare safe filesystem, GitHub, search, and multi-server examples before copying JSON." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create a companion .env.example file for secret names." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions, secrets, and prompt injection risks before enabling servers." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Plan clients, servers, data sources, and safety boundaries before configuring Claude Desktop." },
      { href: "/guides/best-mcp-servers-for-claude/", label: "Best MCP Servers for Claude", description: "Choose useful server categories before writing the config file." }
    ],
    primaryCta: { href: "/tools/claude-desktop-mcp-config-generator/", label: "Generate a Claude Desktop MCP Config" }
  },
  {
    slug: "claude-desktop-mcp-config-examples",
    category: "MCP & Agent Setup",
    title: "Claude Desktop MCP Config Examples: Filesystem, GitHub & Search",
    description: "Copy practical Claude Desktop MCP config examples for filesystem, GitHub, search, and multiple servers with safe placeholders and troubleshooting notes.",
    h1: "Claude Desktop MCP Config Examples",
    eyebrow: "Claude Desktop MCP examples",
    primaryKeyword: "Claude Desktop MCP config examples",
    secondaryKeywords: ["Claude Desktop MCP config JSON", "Claude Desktop mcpServers examples", "MCP server config examples", "Claude Desktop filesystem MCP config", "Claude Desktop GitHub MCP config", "Claude Desktop search MCP config", "Claude Desktop multiple MCP servers", "Claude Desktop MCP troubleshooting"],
    updated,
    readingTime: "10 min read",
    intro: [
      "Use these Claude Desktop MCP config examples as starting points for common local setups: filesystem access, GitHub tools, browser or search access, and multiple MCP servers in one config file.",
      "Replace placeholder paths and environment variables with your own local values, then restart Claude Desktop after saving the file. These examples are independent reference snippets for practical setup work and are not official Anthropic or Claude documentation.",
      "For a safer first draft, generate a placeholder-based config in the Claude Desktop MCP Config Generator, then compare it with the examples below before copying anything into your local file."
    ],
    keyTakeaways: [
      "Start with one MCP server example, confirm it works, then add additional servers.",
      "Keep public examples safe by using placeholders such as ${GITHUB_TOKEN} and ${BRAVE_API_KEY}.",
      "Limit filesystem paths and token scopes instead of giving Claude Desktop broad access on the first setup."
    ],
    sections: [
      {
        heading: "Before you copy a config example",
        body: [
          "Claude Desktop reads MCP server definitions from a local JSON config file. The important top-level key is mcpServers. Each server gets a unique name, a command, optional arguments, and optional environment variables.",
          "Keep the JSON valid, avoid trailing commas, and never paste real API keys into public code or screenshots. Use placeholders such as ${GITHUB_TOKEN} in examples, then handle real values only in your private local setup."
        ],
        bullets: ["Use one top-level mcpServers object", "Give each server a clear local name", "Keep args as an array", "Use placeholders in public examples", "Restart Claude Desktop after changes"]
      },
      {
        heading: "Filesystem MCP config example",
        body: [
          "Use a filesystem server when you want Claude Desktop to read or work with files in specific local folders. Limit access to only the directories you actually need.",
          "Do not point a filesystem server at your entire home folder unless you understand the privacy and security tradeoffs. A narrow Documents or project path is safer for an initial test."
        ],
        bullets: ["Best for local documents and projects", "Use explicit folder paths", "Avoid broad home-directory access", "Test with a harmless folder first"],
        code: "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Documents\",\n        \"/Users/your-name/Projects\"\n      ]\n    }\n  }\n}"
      },
      {
        heading: "GitHub MCP config example",
        body: [
          "Use a GitHub server when you want Claude Desktop to inspect repositories, issues, pull requests, or other GitHub data through MCP tools.",
          "Create a token with the minimum scopes needed for your workflow. Do not hard-code a real token in shared examples, commits, screenshots, support tickets, or client-side pages."
        ],
        bullets: ["Use a narrow token scope", "Prefer read-only access for first tests", "Use ${GITHUB_TOKEN} in examples", "Review write actions before enabling them"],
        code: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    }\n  }\n}"
      },
      {
        heading: "Browser or search MCP config example",
        body: [
          "Use a search server when you want Claude Desktop to look up web results through a supported MCP server. This example uses a placeholder search API key.",
          "Keep API keys outside static site code and only show placeholder values in browser-rendered documentation. Search results and web pages can contain untrusted instructions, so pair browser or search servers with a security checklist."
        ],
        bullets: ["Use placeholder API keys in examples", "Treat web content as untrusted", "Avoid sending private prompts to unknown services", "Document which search provider the server calls"],
        code: "{\n  \"mcpServers\": {\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    }\n  }\n}"
      },
      {
        heading: "Multiple MCP servers in one Claude Desktop config",
        body: [
          "Claude Desktop can load more than one MCP server from the same config file. Give each server a clear, unique key under mcpServers.",
          "Start with one server, confirm it works, then add the next server. This makes troubleshooting easier when a command, path, package, or token is wrong."
        ],
        bullets: ["Keep server names unique", "Add one server at a time", "Separate filesystem, GitHub, and search capabilities", "Remove unused servers instead of leaving stale entries enabled"],
        code: "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Documents\",\n        \"/Users/your-name/Projects\"\n      ]\n    },\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    },\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    }\n  }\n}"
      },
      {
        heading: "Common Claude Desktop MCP config mistakes",
        body: [
          "Most config issues come from invalid JSON, wrong file location, missing Node.js or npx, unavailable server packages, incorrect local paths, or environment variables that are not set.",
          "If Claude Desktop does not show the expected tools, validate the JSON first, confirm the command runs in your terminal, then restart Claude Desktop. Add servers one at a time instead of pasting a large config all at once."
        ],
        bullets: ["Trailing commas", "Wrong config folder", "Missing Node.js or npx", "Bad local folder path", "Missing environment variable", "Token scope too broad or too narrow"]
      },
      {
        heading: "Use examples with a browser-only generator",
        body: [
          "For a static, browser-only site, keep examples as copyable documentation snippets. Do not collect, store, or render real user secrets.",
          "A config generator should generate placeholder-based JSON in the browser and let users copy it locally. Avoid sending tokens, local paths, private repository names, or config contents to a backend service."
        ],
        bullets: ["Generate placeholders, not real secrets", "Copy locally", "Review before saving", "Pair config examples with a security checklist"]
      }
    ],
    checklist: [
      "Choose the MCP server you want to configure first",
      "Confirm Node.js and npx are installed locally",
      "Copy only one server example into Claude Desktop config at first",
      "Replace example folder paths with real local paths you want to allow",
      "Use placeholder environment variables in public examples",
      "Validate the JSON before saving",
      "Restart Claude Desktop after editing the config file",
      "Check whether the new MCP tools appear in Claude Desktop",
      "If something fails, remove other servers and test the failing server by itself",
      "Never publish real tokens, private paths, or private repository names in shared configs"
    ],
    faq: [
      { question: "Can I use more than one MCP server in Claude Desktop?", answer: "Yes. Add each server as a separate entry under the same mcpServers object. Use clear names such as filesystem, github, and brave-search." },
      { question: "Why is my Claude Desktop MCP config not working?", answer: "Common causes include invalid JSON, a missing comma, a trailing comma, the wrong config file location, a missing command such as npx, a bad local folder path, or a missing API token. Validate the JSON and test one server at a time." },
      { question: "Should I put real API keys in the config file?", answer: "Only use real secrets in your private local setup. Do not publish them in documentation, static pages, GitHub commits, screenshots, or support requests. Public examples should use placeholders like ${GITHUB_TOKEN}." },
      { question: "Can a static website safely generate Claude Desktop MCP config JSON?", answer: "Yes, if generation happens entirely in the browser and no secrets are sent to a backend. A static generator should output copyable JSON with placeholders and let users edit sensitive values locally." },
      { question: "Do I need to restart Claude Desktop after changing the config?", answer: "Yes. After editing the config file, restart Claude Desktop so it can reload the MCP server definitions." }
    ],
    relatedLinks: [
      { href: "/tools/claude-desktop-mcp-config-generator/", label: "Claude Desktop MCP Config Generator", description: "Generate a browser-only claude_desktop_config.json template from safe placeholders." },
      { href: "/guides/how-to-create-claude-desktop-config-json/", label: "How to Create claude_desktop_config.json", description: "Create the Claude Desktop config file before copying example server entries." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Plan clients, servers, data sources, and permissions before configuring examples." },
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "Compare generic mcpServers JSON examples before copying client-specific entries." },
      { href: "/guides/cursor-mcp-config-examples/", label: "Cursor MCP Config Examples", description: "Compare similar MCP config examples for Cursor coding workflows." },
      { href: "/guides/best-mcp-servers-for-claude/", label: "Best MCP Servers for Claude", description: "Choose useful server categories before adding Claude Desktop config examples." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create companion .env.example placeholders for config secrets." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions and secret handling before enabling MCP servers." }
    ],
    primaryCta: { href: "/tools/claude-desktop-mcp-config-generator/", label: "Generate a Claude Desktop MCP Config" }
  },
  {
    slug: "cursor-mcp-config-examples",
    category: "MCP & Agent Setup",
    title: "Cursor MCP Config Examples for Developers",
    description: "Copy practical Cursor MCP config examples for filesystem, GitHub, docs, search, and multiple MCP servers with safe placeholders and setup checks.",
    h1: "Cursor MCP Config Examples for Developers",
    eyebrow: "Cursor MCP examples",
    primaryKeyword: "Cursor MCP config examples",
    secondaryKeywords: ["Cursor MCP config JSON", "Cursor mcp.json examples", "Cursor MCP server config", "Cursor filesystem MCP config", "Cursor GitHub MCP config", "Cursor search MCP config", "Cursor multiple MCP servers", "Cursor MCP setup", "Cursor MCP troubleshooting"],
    updated,
    readingTime: "10 min read",
    intro: ["Use these Cursor MCP config examples as practical starting points for developer workflows: local repository access, GitHub context, documentation or search tools, and multiple MCP servers in one config file.", "These snippets are independent examples for developers and are not official Cursor documentation. Always verify the current Cursor MCP settings screen and each MCP server maintainer's instructions before using a config locally.", "For a safer first draft, use the Cursor MCP Config Generator to create placeholder-based JSON in your browser, then review it before copying anything into your local Cursor setup."],
    keyTakeaways: ["Cursor MCP configs usually define servers under a top-level mcpServers object in a local mcp.json file.", "Start with one narrow, read-oriented server before combining filesystem, GitHub, docs, and search tools.", "Keep static examples safe by using placeholders such as ${GITHUB_TOKEN}, ${BRAVE_API_KEY}, and ${NOTION_API_KEY} instead of real secrets."],
    sections: [
      { heading: "Before you copy a Cursor MCP config example", body: ["Cursor can use MCP servers to give coding agents access to local files, repository context, GitHub issues, docs, search, and other developer tools. A config entry usually includes a local server name, the command to run, command-line arguments, and optional environment variables.", "Treat every snippet below as a starting template, not a finished setup. Replace generic paths with your own allowed folders, validate the JSON, check Cursor Settings → MCP for the active config location, and test one server before adding more."], bullets: ["Use one top-level mcpServers object", "Give each server a short, unique local name", "Keep args as an array", "Use placeholders in public examples", "Avoid committing local mcp.json files with secrets", "Test MCP tools in Cursor Agent mode"] },
      { heading: "Cursor MCP config file location", body: ["Cursor setup details can vary by version and workspace. Many setups use an mcp.json file through Cursor Settings → MCP, and some teams keep separate user-level and project-level configs.", "Do not assume a public example knows your exact local path. Open Cursor Settings → MCP, confirm where your active config is loaded from, then copy only the server entries you need."], bullets: ["Check Cursor Settings → MCP first", "Confirm whether you are editing a user or project config", "Restart or reload Cursor after changing config", "Keep private workspace paths out of screenshots and commits"] },
      { heading: "Filesystem MCP config example for Cursor", body: ["Use a filesystem server when you want Cursor to inspect a local project, documentation folder, or sandbox directory through MCP tools.", "Limit access to specific folders instead of your entire home directory. For a first test, point the server at a harmless project or sample repo before using it with production code."], bullets: ["Best for local repositories and docs folders", "Use explicit project paths", "Avoid broad home-directory access", "Start read-only where the server supports it"], code: "{\n  \"mcpServers\": {\n    \"repo-files\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Projects/example-app\",\n        \"/Users/your-name/Projects/example-app/docs\"\n      ]\n    }\n  }\n}" },
      { heading: "GitHub MCP config example for Cursor", body: ["Use a GitHub MCP server when Cursor needs repository, issue, pull request, or organization context from GitHub.", "Create a token with only the scopes your workflow needs. Some Cursor versions and server launch methods handle environment variables differently, so verify server-level env support in your local Cursor version and the server documentation before relying on it."], bullets: ["Use a narrow GitHub token scope", "Prefer read-only access for first tests", "Use ${GITHUB_TOKEN} in examples", "Review write-capable tools before enabling them", "Confirm env handling in your Cursor version"], code: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    }\n  }\n}" },
      { heading: "Docs and search MCP config example for Cursor", body: ["Use docs and search servers when Cursor needs external reference material for development tasks, API exploration, or documentation lookup.", "Search results and docs pages can contain untrusted instructions. Keep these tools separate from destructive actions, use placeholder API keys in static examples, and avoid sending private repository details to services you have not reviewed."], bullets: ["Use placeholders for API keys", "Treat web and docs content as untrusted", "Keep docs/search tools read-oriented", "Confirm each package and env name against maintainer docs"], code: "{\n  \"mcpServers\": {\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    },\n    \"notion-docs\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@notionhq/notion-mcp-server\"\n      ],\n      \"env\": {\n        \"NOTION_API_KEY\": \"${NOTION_API_KEY}\"\n      }\n    }\n  }\n}" },
      { heading: "Multiple MCP servers in one Cursor config", body: ["You can combine several MCP servers in one Cursor config when a coding workflow needs local files, GitHub context, and external lookup tools.", "Add servers one at a time. If something fails, temporarily remove the other entries and test the failing server by itself so command, path, dependency, and token problems are easier to isolate."], bullets: ["Keep server names unique", "Separate repo, GitHub, docs, and search capabilities", "Use placeholders instead of real secrets", "Remove unused servers instead of leaving stale tools enabled"], code: "{\n  \"mcpServers\": {\n    \"repo-files\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Projects/example-app\"\n      ]\n    },\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    },\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    },\n    \"notion-docs\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@notionhq/notion-mcp-server\"\n      ],\n      \"env\": {\n        \"NOTION_API_KEY\": \"${NOTION_API_KEY}\"\n      }\n    }\n  }\n}" },
      { heading: "Static-site safety notes for Cursor MCP examples", body: ["A static, browser-only guide or config generator should never collect, store, validate, or transmit real API keys. Generate copyable placeholder JSON and let developers edit sensitive values locally.", "Do not ask users to paste private tokens, private repository names, production paths, or local config contents into a hosted page. Keep examples generic and pair config work with a security checklist before enabling write-capable tools."], bullets: ["Browser-only generation", "No login required", "No database storage", "No AI API calls", "No real secrets in examples", "Copy locally and review manually"] },
      { heading: "Common Cursor MCP config mistakes", body: ["Most Cursor MCP issues come from invalid JSON, a wrong config location, missing Node.js or npx, a server package name mismatch, unavailable local paths, or environment variables that are not available to the launched process.", "If a server does not appear, validate the JSON, confirm the command works in a terminal, check Cursor Settings → MCP for the active config path, and test with one server entry at a time."], bullets: ["Trailing commas or smart quotes", "args written as a string instead of an array", "Wrong mcp.json location", "Missing Node.js or npx", "Bad local folder path", "Token placeholder not replaced in the private local environment", "Testing in Chat mode instead of Agent mode"] }
    ],
    checklist: ["Choose the Cursor workflow before choosing servers", "Start with one MCP server entry", "Use narrow local filesystem paths", "Use ${GITHUB_TOKEN}, ${BRAVE_API_KEY}, and ${NOTION_API_KEY} only as placeholders in public examples", "Confirm package names and env variable names against each server maintainer's docs", "Validate the JSON before saving", "Check Cursor Settings → MCP for the active config path", "Restart or reload Cursor after changing MCP configuration", "Test in Cursor Agent mode", "Never publish real tokens, private paths, or private repository names"],
    faq: [
      { question: "Where does Cursor MCP config go?", answer: "Cursor commonly uses a local mcp.json file, and some setups support user-level and project-level configuration. Check Cursor Settings → MCP for the active config path before editing." },
      { question: "Can I use the same MCP servers in Cursor and Claude Desktop?", answer: "Often yes. The MCP servers may be the same, but the client-specific config location and setup flow can differ. Copy server entries carefully and verify the expected JSON structure for Cursor." },
      { question: "Should I put real API keys in these examples?", answer: "No. Public examples, static pages, generated previews, screenshots, and commits should use placeholders such as ${GITHUB_TOKEN}, ${BRAVE_API_KEY}, and ${NOTION_API_KEY}. Use real secrets only in your private local setup." },
      { question: "Why is my Cursor MCP server not working?", answer: "Common causes include invalid JSON, a missing dependency such as Node.js or npx, a bad local path, a server package mismatch, missing environment variables, or testing outside Cursor Agent mode." },
      { question: "Can a static website safely generate Cursor MCP config JSON?", answer: "Yes, if generation happens entirely in the browser and the site outputs placeholder-based JSON only. It should not collect tokens, call an AI API, store configs in a database, or modify local files." },
      { question: "Is this official Cursor documentation?", answer: "No. This is an independent developer guide with example snippets. Always verify Cursor's current MCP UI and the individual MCP server documentation before using a config." }
    ],
    relatedLinks: [
      { href: "/tools/cursor-mcp-config-generator/", label: "Cursor MCP Config Generator", description: "Generate a browser-only Cursor MCP config draft with safe placeholders." },
      { href: "/guides/how-to-install-mcp-servers-in-cursor/", label: "How to Install MCP Servers in Cursor", description: "Set up Cursor MCP before copying example server entries." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Plan clients, servers, data sources, and safety boundaries before configuration." },
      { href: "/guides/mcp-server-config-examples/", label: "MCP Server Config Examples", description: "Compare generic mcpServers JSON examples before copying Cursor-specific entries." },
      { href: "/guides/claude-desktop-mcp-config-examples/", label: "Claude Desktop MCP Config Examples", description: "Compare similar MCP config examples for Claude Desktop local workflows." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create companion .env.example placeholders for token and API key names." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions, secrets, and prompt injection risks before enabling tools." }
    ],
    primaryCta: { href: "/tools/cursor-mcp-config-generator/", label: "Generate a Cursor MCP Config" }
  },
  {
    slug: "mcp-server-config-examples",
    category: "MCP & Agent Setup",
    title: "MCP Server Config Examples: JSON Templates for Common Servers",
    description: "Copy practical MCP server config examples for filesystem, GitHub, search, database, and multi-server mcpServers JSON with safe placeholders.",
    h1: "MCP Server Config Examples",
    eyebrow: "MCP config examples",
    primaryKeyword: "MCP server config examples",
    secondaryKeywords: ["MCP server JSON config", "Model Context Protocol config examples", "mcpServers JSON example", "MCP config template", "MCP server command args env example", "filesystem MCP config example", "GitHub MCP config example", "database MCP config example"],
    updated,
    readingTime: "11 min read",
    intro: ["Use these MCP server config examples as safe starting points for common setups: filesystem access, GitHub context, search or browser lookup, database access, and multiple servers in one mcpServers JSON object.", "These snippets are independent reference examples for developers. They are not official documentation for any MCP client or server package, and you should verify the current server maintainer docs before using a config locally.", "For a faster first draft, use the MCP Server Config Generator to create placeholder-based JSON in your browser, then compare it with the examples below before copying anything into Claude Desktop, Cursor, or another MCP client."],
    keyTakeaways: ["Most MCP config examples share the same basic shape: a top-level mcpServers object with named server entries.", "Use placeholder environment variables such as ${GITHUB_TOKEN}, ${BRAVE_API_KEY}, and ${DATABASE_URL} in public examples.", "Start with one read-only server, validate the JSON, then add higher-risk tools only after reviewing permissions and secrets."],
    sections: [
      { heading: "What an MCP server config contains", body: ["An MCP server config tells a client how to start one or more MCP servers. The common shape is a top-level mcpServers object where each key is a local server name and each value contains a command, args, and optional environment variables.", "The exact file location depends on the client. Claude Desktop, Cursor, custom apps, and local development wrappers may store configs differently, so use these examples as JSON entry templates and verify the client-specific setup guide before saving them."], bullets: ["Server name under mcpServers", "command to launch the server", "args as an array", "optional env placeholders", "optional cwd when a server needs a working directory"] },
      { heading: "Basic mcpServers JSON template", body: ["Start with the smallest possible config: one server entry, one command, and an args array. Validate the JSON before adding tokens, paths, or additional servers.", "This example is intentionally generic. Replace the package name with the server package documented by the maintainer and keep real secrets out of public examples."], bullets: ["Use valid JSON only", "No comments or trailing commas", "One server first", "Review package documentation"], code: "{\n  \"mcpServers\": {\n    \"example-server\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"example-mcp-server\"\n      ]\n    }\n  }\n}" },
      { heading: "Filesystem MCP server config example", body: ["A filesystem server is useful when an AI client needs to read or search local project files. Keep the allowed folders narrow, especially when testing a new workflow.", "Do not point an example at an entire home directory or production secrets folder. Start with a sandbox project, docs folder, or read-only workspace if the server supports read-only behavior."], bullets: ["Use explicit folder paths", "Avoid broad home-directory access", "Test with harmless files first", "Document allowed paths for teammates"], code: "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Projects/example-app\",\n        \"/Users/your-name/Projects/example-app/docs\"\n      ]\n    }\n  }\n}" },
      { heading: "GitHub MCP server config example", body: ["A GitHub server can expose repository, issue, pull request, and organization context through MCP tools. Use the narrowest token scopes that satisfy the workflow.", "Public docs, static pages, screenshots, and commits should only show placeholders such as ${GITHUB_TOKEN}. Put real values in a private local environment setup or secret manager according to the server and client documentation."], bullets: ["Prefer read-only scopes for first tests", "Use placeholder token names in examples", "Review write-capable tools separately", "Rotate demo credentials after sharing screens"], code: "{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    }\n  }\n}" },
      { heading: "Search or browser MCP server config example", body: ["Search and browser-oriented servers are useful for research, docs lookup, and web context. They also introduce prompt-injection risk because web pages and search results are untrusted content.", "Use placeholder API keys in examples and keep browser/search tools separated from destructive actions. If a workflow needs write access, review it with a security checklist before enabling it."], bullets: ["Treat web content as untrusted", "Use ${BRAVE_API_KEY} or similar placeholders", "Avoid mixing browsing with destructive tools", "Log and redact carefully"], code: "{\n  \"mcpServers\": {\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    }\n  }\n}" },
      { heading: "Database MCP server config example", body: ["Database MCP servers should be handled more carefully than simple read-only examples. Use a least-privilege account, prefer read-only roles for exploration, and avoid production databases during initial testing.", "The exact package, driver, and connection string format depends on the server. Keep shared examples generic and use ${DATABASE_URL} instead of real credentials."], bullets: ["Use read-only database roles", "Avoid production for first tests", "Scope access to selected schemas or views", "Never publish connection strings"], code: "{\n  \"mcpServers\": {\n    \"database\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"example-database-mcp-server\"\n      ],\n      \"env\": {\n        \"DATABASE_URL\": \"${DATABASE_URL}\"\n      }\n    }\n  }\n}" },
      { heading: "Multiple MCP servers in one config", body: ["Many clients can load more than one MCP server from the same mcpServers object. Use clear names and add servers incrementally so troubleshooting stays simple.", "A practical developer setup might combine filesystem context, GitHub issues, search, and a database sandbox. Start with read-only capability and move write actions into a separate review path."], bullets: ["Keep server names unique", "Add one server at a time", "Separate high-risk tools", "Remove stale server entries"], code: "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem\",\n        \"/Users/your-name/Projects/example-app\"\n      ]\n    },\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-github\"\n      ],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_TOKEN}\"\n      }\n    },\n    \"brave-search\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-brave-search\"\n      ],\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    },\n    \"database\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"example-database-mcp-server\"\n      ],\n      \"env\": {\n        \"DATABASE_URL\": \"${DATABASE_URL}\"\n      }\n    }\n  }\n}" },
      { heading: "Pair config JSON with a .env.example file", body: ["Config examples are easier to share safely when paired with a .env.example file. The JSON references variable names, and the .env.example documents which variables are required without containing real values.", "This pattern helps teams review secrets, rotate credentials, and onboard developers without copying private tokens into documentation."], bullets: ["Keep real values out of Git", "Document each variable purpose", "Use separate dev and production credentials", "Rotate tokens after demos"], code: "GITHUB_TOKEN=your_github_token_here\nBRAVE_API_KEY=your_brave_api_key_here\nDATABASE_URL=postgres://user:password@localhost:5432/app" },
      { heading: "Security checklist before enabling a config", body: ["Before enabling an MCP config, review what each server can read, what it can write, which credentials it uses, and how failures are logged. A config is not just installation data; it defines the operating boundary for an AI agent.", "For high-risk servers, use a sandbox first, require human approval for writes, and document rollback steps. Treat prompts, web pages, issues, docs, and database rows as untrusted input that can contain malicious instructions."], bullets: ["Read-only first", "Least-privilege scopes", "No committed secrets", "Sandbox write actions", "Redact logs and errors", "Document rollback steps"] }
    ],
    checklist: ["Choose the MCP client and workflow first", "Copy one server entry at a time", "Keep args as an array, not a shell string", "Use narrow filesystem paths", "Use placeholder env values in shared examples", "Pair secrets with a .env.example file", "Validate JSON before saving", "Restart or reload the MCP client after edits", "Test read-only actions before write actions", "Run a security checklist before enabling production credentials"],
    faq: [
      { question: "What is an MCP server config example?", answer: "It is a JSON snippet that shows how an MCP client can launch a server with a local name, command, arguments, and optional environment variables." },
      { question: "What does mcpServers mean?", answer: "mcpServers is the common top-level object used in many MCP client config examples. Each key inside it names one server entry." },
      { question: "Can I use the same MCP server config in Claude Desktop and Cursor?", answer: "Often the server entry is similar, but the file location and client-specific setup can differ. Verify the client documentation before copying a config." },
      { question: "Should MCP config examples include real API keys?", answer: "No. Public examples should use placeholders such as ${GITHUB_TOKEN}, ${BRAVE_API_KEY}, and ${DATABASE_URL}. Use real values only in private local setup." },
      { question: "Why is my MCP server config not working?", answer: "Common causes include invalid JSON, trailing commas, a wrong command, missing Node.js or npx, a bad local path, missing environment variables, or using the wrong client config location." },
      { question: "Can a static website safely generate MCP server config JSON?", answer: "Yes, if generation happens entirely in the browser and outputs placeholder-based templates. It should not collect tokens, call an AI API, store configs, or upload local files." }
    ],
    relatedLinks: [
      { href: "/tools/mcp-server-config-generator/", label: "MCP Server Config Generator", description: "Generate a browser-only generic mcpServers JSON draft with safe placeholders." },
      { href: "/guides/claude-desktop-mcp-config-examples/", label: "Claude Desktop MCP Config Examples", description: "Compare client-specific examples for Claude Desktop." },
      { href: "/guides/cursor-mcp-config-examples/", label: "Cursor MCP Config Examples", description: "Compare client-specific examples for Cursor coding workflows." },
      { href: "/tools/mcp-env-template-generator/", label: "MCP Env Template Generator", description: "Create companion .env.example placeholders for config secrets." },
      { href: "/tools/mcp-security-checklist-generator/", label: "MCP Security Checklist Generator", description: "Review permissions, secrets, and prompt injection risks before enabling tools." },
      { href: "/guides/how-to-build-an-mcp-stack/", label: "How to Build an MCP Stack", description: "Plan clients, servers, data sources, and safety boundaries before configuration." },
      { href: "/mcp-server-examples/", label: "MCP Server Examples", description: "Browse server categories before copying config examples." }
    ],
    primaryCta: { href: "/tools/mcp-server-config-generator/", label: "Generate an MCP Server Config" }
  }

];

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
