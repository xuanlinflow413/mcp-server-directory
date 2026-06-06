export const prdTemplates = [
  {
    "slug": "ai-agent-prd-template",
    "name": "AI Agent PRD Template",
    "priority": "P0",
    "title": "AI Agent PRD Template \u2014 Product Requirements for AI Agents",
    "description": "Use this AI Agent PRD template to define goals, users, workflows, tools, memory, guardrails, evaluation metrics, and launch requirements for AI agent products.",
    "primary": "ai agent prd template",
    "secondary": [
      "ai agent prd",
      "ai agent product requirements document",
      "ai agent requirements template",
      "autonomous agent PRD",
      "AI workflow PRD template",
      "AI assistant PRD template",
      "agentic AI product requirements"
    ],
    "product": "AI agent",
    "audience": "founders, product managers, AI builders, and engineering leads",
    "problem": "an agent can plan, call tools, remember context, ask for approval, fail partially, or create output that needs review",
    "sections": [
      "agent goals and jobs to be done",
      "tool access and permission boundaries",
      "memory and context rules",
      "human-in-the-loop checkpoints",
      "evaluation cases and launch metrics"
    ],
    "examples": [
      "customer support triage agent",
      "research assistant agent",
      "coding workflow agent"
    ],
    "links": [
      "/mcp-server-prd-template/",
      "/saas-prd-template/",
      "/agents/",
      "/tools/api/"
    ],
    "faq": [
      [
        "What is an AI Agent PRD?",
        "An AI Agent PRD is a product requirements document that defines the user problem, agent goals, workflows, tools, memory, permission boundaries, evaluation plan, and acceptance criteria for an AI agent product."
      ],
      [
        "How is an AI Agent PRD different from a normal software PRD?",
        "A normal PRD often describes screens and features. An AI Agent PRD must also describe reasoning steps, tool calls, fallback behavior, context limits, review checkpoints, and safety constraints."
      ],
      [
        "What should an AI Agent PRD include?",
        "It should include the target user, core jobs, agent inputs and outputs, tool permissions, memory policy, human approval flows, failure states, metrics, and a test set for evaluation."
      ],
      [
        "Should an AI Agent PRD define tools and permissions?",
        "Yes. Tool access is one of the highest-risk parts of an agent product. The PRD should list every tool, what it can do, when the agent may call it, and when user confirmation is required."
      ],
      [
        "How do I write acceptance criteria for an AI agent?",
        "Use scenario-based criteria. Define what the agent should do for common requests, ambiguous requests, unsafe requests, tool failures, missing data, and tasks that require human review."
      ],
      [
        "Can AI generate an AI Agent PRD?",
        "Yes. A generator can produce a strong first draft, but teams should review tool permissions, safety assumptions, evaluation cases, and launch risks before implementation."
      ]
    ]
  },
  {
    "slug": "mcp-server-prd-template",
    "name": "MCP Server PRD Template",
    "priority": "P0",
    "title": "MCP Server PRD Template \u2014 MCP Tool Requirements",
    "description": "Plan an MCP server with this PRD template. Define tools, resources, prompts, permissions, authentication, client integrations, and launch requirements.",
    "primary": "mcp server prd template",
    "secondary": [
      "prd mcp server",
      "mcp server requirements document",
      "mcp server product requirements",
      "mcp tool prd",
      "mcp integration requirements",
      "model context protocol server PRD",
      "AI tool server PRD"
    ],
    "product": "MCP server",
    "audience": "AI platform teams, developer tool founders, internal automation teams, and MCP builders",
    "problem": "an MCP server has to expose tools, resources, schemas, and permissions to AI clients without confusing the model or risking unsafe access",
    "sections": [
      "tools, resources, and prompts",
      "input and output schemas",
      "Claude, Cursor, and ChatGPT integration requirements",
      "authentication and consent flows",
      "compatibility tests and documentation"
    ],
    "examples": [
      "developer utility MCP server",
      "internal knowledge base MCP server",
      "AI tool marketplace MCP server"
    ],
    "links": [
      "/ai-agent-prd-template/",
      "/tools/api/",
      "/agents/",
      "/guides/use-bestmcpservers-tools-with-cursor/"
    ],
    "faq": [
      [
        "What is an MCP Server PRD?",
        "An MCP Server PRD is a product requirements document for a Model Context Protocol server. It defines exposed tools, resources, prompts, schemas, permissions, client integrations, and launch criteria."
      ],
      [
        "What should an MCP Server PRD include?",
        "It should include target clients, user personas, tool definitions, input schemas, output contracts, error behavior, authentication, rate limits, documentation, and client compatibility tests."
      ],
      [
        "Is an MCP server different from a REST API?",
        "Yes. A REST API exposes endpoints to applications, while an MCP server exposes model-discoverable tools and context to AI clients. Some teams still bridge REST endpoints into MCP tools."
      ],
      [
        "Should MCP tools have input and output schemas?",
        "Yes. Schemas help AI clients call the right tool with valid arguments and parse responses reliably. The PRD should define schema fields, examples, and error cases."
      ],
      [
        "How do I define security requirements for an MCP server?",
        "List permission boundaries, user consent points, secret handling rules, logging retention, abuse prevention, rate limits, and whether each tool can read, write, delete, or trigger external actions."
      ],
      [
        "Can I use this template for Claude or Cursor integrations?",
        "Yes. The template includes client integration requirements that can be adapted for Claude Desktop, Cursor, internal agents, or future remote MCP clients."
      ]
    ]
  },
  {
    "slug": "saas-prd-template",
    "name": "SaaS PRD Template",
    "priority": "P1",
    "title": "SaaS PRD Template \u2014 SaaS Product Plan",
    "description": "Use this SaaS PRD template to define users, features, pricing, onboarding, analytics, integrations, security, and launch requirements for SaaS products.",
    "primary": "saas prd template",
    "secondary": [
      "saas prd example",
      "software prd example",
      "saas product requirements document",
      "saas requirements template",
      "B2B SaaS PRD",
      "saas MVP requirements"
    ],
    "product": "SaaS product",
    "audience": "SaaS founders, product managers, growth teams, and engineering leads",
    "problem": "SaaS teams need to align acquisition, onboarding, permissions, billing assumptions, integrations, and retention metrics before they build too much",
    "sections": [
      "user personas and buyer roles",
      "MVP feature scope",
      "onboarding and activation",
      "workspace, roles, and permissions",
      "analytics, retention, and launch metrics"
    ],
    "examples": [
      "B2B analytics dashboard",
      "AI workflow SaaS",
      "team collaboration product"
    ],
    "links": [
      "/ai-agent-prd-template/",
      "/marketplace-prd-template/",
      "/crm-prd-template/",
      "/mobile-app-prd-template/"
    ],
    "faq": [
      [
        "What is a SaaS PRD?",
        "A SaaS PRD is a product requirements document that defines the users, problems, workflows, features, pricing assumptions, onboarding, analytics, integrations, and launch requirements for a SaaS product."
      ],
      [
        "What should a SaaS PRD include?",
        "It should include the target market, personas, core use cases, MVP scope, onboarding flow, account model, role permissions, billing assumptions, analytics events, and acceptance criteria."
      ],
      [
        "How long should a SaaS PRD be?",
        "For an MVP, a practical SaaS PRD is often long enough to align the team without becoming a specification dump. The sections should be specific enough for design, engineering, and growth teams."
      ],
      [
        "Should pricing be included in a SaaS PRD?",
        "Yes, at least as assumptions. Pricing affects plan limits, onboarding, upgrade prompts, analytics, support expectations, and how the product defines value."
      ],
      [
        "How do I define SaaS MVP requirements?",
        "Start with one user segment, one repeated pain, one core workflow, and one measurable success metric. Everything outside that path should be marked later, optional, or out of scope."
      ],
      [
        "Can AI write a SaaS PRD?",
        "AI can create a strong first draft and suggest missing sections, but founders should review ICP, pricing assumptions, technical constraints, and launch metrics."
      ]
    ]
  },
  {
    "slug": "marketplace-prd-template",
    "name": "Marketplace PRD Template",
    "priority": "P2",
    "title": "Marketplace PRD Template \u2014 Marketplace Plan",
    "description": "Plan a marketplace product with this PRD template. Define buyers, sellers, listings, search, payments, trust, reviews, and marketplace launch requirements.",
    "primary": "marketplace prd template",
    "secondary": [
      "marketplace product requirements document",
      "two-sided marketplace PRD",
      "multi-vendor marketplace requirements",
      "buyer seller marketplace PRD",
      "marketplace MVP requirements",
      "online marketplace PRD"
    ],
    "product": "marketplace",
    "audience": "marketplace founders, product managers, platform operators, and engineering teams",
    "problem": "a marketplace must serve buyers and sellers at the same time, so requirements need to cover supply, demand, trust, transactions, and liquidity",
    "sections": [
      "buyer and seller personas",
      "listing and discovery requirements",
      "seller onboarding and supply strategy",
      "payments, disputes, and reviews",
      "liquidity and marketplace health metrics"
    ],
    "examples": [
      "service marketplace",
      "digital product marketplace",
      "AI tools marketplace"
    ],
    "links": [
      "/saas-prd-template/",
      "/ai-agent-prd-template/",
      "/mcp-server-prd-template/",
      "/agents/"
    ],
    "faq": [
      [
        "What is a marketplace PRD?",
        "A marketplace PRD is a product requirements document for a platform that connects two or more sides, such as buyers and sellers, providers and customers, or creators and users."
      ],
      [
        "What should a marketplace PRD include?",
        "It should include buyer personas, seller personas, listings, discovery, onboarding, transaction flows, trust and safety requirements, reviews, payments, disputes, and marketplace health metrics."
      ],
      [
        "How is a marketplace PRD different from a SaaS PRD?",
        "A SaaS PRD usually optimizes one user workflow. A marketplace PRD must balance supply and demand, solve cold start problems, and define trust mechanisms for multiple participant types."
      ],
      [
        "Should a marketplace PRD include payments?",
        "If transactions happen on the platform, yes. Even if payments are delayed, the PRD should describe assumptions, fees, disputes, refunds, and compliance risks."
      ],
      [
        "How do I define buyer and seller requirements?",
        "Write separate journeys for each side. Define what buyers need to find, evaluate, and purchase, and what sellers need to list, manage, deliver, and get paid."
      ],
      [
        "Can AI generate a marketplace PRD?",
        "AI can help draft the structure, but founders should validate the market model, trust assumptions, liquidity strategy, and operational constraints."
      ]
    ]
  },
  {
    "slug": "crm-prd-template",
    "name": "CRM PRD Template",
    "priority": "P2",
    "title": "CRM PRD Template \u2014 Product Requirements for CRM Software",
    "description": "Use this CRM PRD template to define contacts, deals, pipelines, tasks, reporting, integrations, permissions, and launch requirements for CRM products.",
    "primary": "crm prd template",
    "secondary": [
      "crm product requirements document",
      "crm software requirements",
      "crm requirements template",
      "sales crm PRD",
      "customer relationship management PRD",
      "crm feature requirements"
    ],
    "product": "CRM product",
    "audience": "CRM founders, sales operations teams, product managers, and software teams",
    "problem": "CRM products have many connected objects and workflows, so unclear requirements create messy data models, inconsistent pipelines, and reporting gaps",
    "sections": [
      "contacts, companies, and deals",
      "pipeline stages and sales workflows",
      "tasks, reminders, notes, and activities",
      "email, calendar, import, and export integrations",
      "roles, audit logs, and reporting metrics"
    ],
    "examples": [
      "small business CRM",
      "sales pipeline CRM",
      "AI-powered CRM assistant"
    ],
    "links": [
      "/saas-prd-template/",
      "/mobile-app-prd-template/",
      "/ai-agent-prd-template/",
      "/ai-prd-generator/"
    ],
    "faq": [
      [
        "What is a CRM PRD?",
        "A CRM PRD is a product requirements document that defines contacts, companies, deals, pipelines, activities, reporting, permissions, integrations, and launch criteria for CRM software."
      ],
      [
        "What should a CRM PRD include?",
        "It should include the data model, user roles, sales workflows, pipeline stages, tasks, notes, reporting dashboards, integrations, import and export requirements, and acceptance criteria."
      ],
      [
        "How do I define CRM feature requirements?",
        "Start with the sales or customer workflow. Then define which objects support that workflow, what fields they need, how users update them, and which reports measure success."
      ],
      [
        "Should CRM permissions be included in the PRD?",
        "Yes. CRM data often includes sensitive customer and revenue information. The PRD should define role-based access, visibility rules, audit logs, and admin controls."
      ],
      [
        "What data objects should a CRM PRD define?",
        "Common objects include contacts, companies, deals, activities, tasks, notes, pipeline stages, users, teams, and reports. Some CRMs also include tickets, products, or subscriptions."
      ],
      [
        "Can AI generate a CRM PRD?",
        "Yes. AI can draft the structure and suggest workflows, but teams should validate the data model, sales process, integrations, and permission assumptions."
      ]
    ]
  },
  {
    "slug": "chrome-extension-prd-template",
    "name": "Chrome Extension PRD Template",
    "priority": "P2",
    "title": "Chrome Extension PRD Template \u2014 Browser Extension Plan",
    "description": "Plan a Chrome extension with this PRD template. Define users, permissions, popup UI, content scripts, storage, privacy, and Chrome Web Store requirements.",
    "primary": "chrome extension prd template",
    "secondary": [
      "chrome extension product requirements document",
      "browser extension PRD",
      "chrome extension requirements template",
      "manifest v3 requirements",
      "chrome extension MVP requirements",
      "browser plugin PRD"
    ],
    "product": "Chrome extension",
    "audience": "extension founders, indie hackers, product managers, and browser tool developers",
    "problem": "browser extensions run inside a sensitive browser context, so requirements must be precise about permissions, data collection, storage, scripts, and review risks",
    "sections": [
      "popup UI and browser entry points",
      "content scripts and background service worker",
      "permissions and host access",
      "storage, sync, and privacy rules",
      "Chrome Web Store listing and review readiness"
    ],
    "examples": [
      "productivity extension",
      "AI writing extension",
      "developer tool extension"
    ],
    "links": [
      "/ai-agent-prd-template/",
      "/tools/api/",
      "/saas-prd-template/",
      "/mobile-app-prd-template/"
    ],
    "faq": [
      [
        "What is a Chrome Extension PRD?",
        "A Chrome Extension PRD is a product requirements document that defines the users, browser context, permissions, popup UI, content scripts, storage, privacy rules, and launch requirements for an extension."
      ],
      [
        "What should a Chrome extension PRD include?",
        "It should include the target user, extension goal, browser entry points, popup behavior, content script behavior, background service worker requirements, permissions, data handling, and store launch criteria."
      ],
      [
        "Should permissions be listed in the PRD?",
        "Yes. Permissions affect security, user trust, store review, and implementation. The PRD should explain why each permission is needed and when the extension uses it."
      ],
      [
        "What is Manifest V3?",
        "Manifest V3 is the current Chrome extension platform model that changes how extensions define background work, permissions, and capabilities. A PRD should account for these constraints early."
      ],
      [
        "Should privacy requirements be part of the PRD?",
        "Yes. Browser extensions may access page content or user activity, so the PRD should define data collection, storage, retention, consent, and privacy messaging."
      ],
      [
        "Can AI generate a Chrome extension PRD?",
        "AI can draft a useful PRD, especially for flows and requirements, but developers should review permissions, Manifest V3 constraints, and Chrome Web Store policy risks."
      ]
    ]
  },
  {
    "slug": "mobile-app-prd-template",
    "name": "Mobile App PRD Template",
    "priority": "P1",
    "title": "Mobile App PRD Template \u2014 iOS and Android Plan",
    "description": "Use this mobile app PRD template to define users, screens, onboarding, features, notifications, analytics, permissions, and launch requirements.",
    "primary": "mobile app prd template",
    "secondary": [
      "mobile app prd example",
      "app product requirements document",
      "mobile app requirements template",
      "iOS app PRD",
      "Android app PRD",
      "mobile MVP requirements"
    ],
    "product": "mobile app",
    "audience": "app founders, product managers, designers, and mobile engineering teams",
    "problem": "mobile apps need clear requirements for screens, onboarding, permissions, offline behavior, performance, notifications, analytics, and app store launch constraints",
    "sections": [
      "user journeys and screen list",
      "onboarding and account flows",
      "notifications and permission prompts",
      "offline behavior and performance",
      "analytics, crash reporting, and store readiness"
    ],
    "examples": [
      "consumer mobile app",
      "productivity mobile app",
      "AI mobile app"
    ],
    "links": [
      "/saas-prd-template/",
      "/chrome-extension-prd-template/",
      "/crm-prd-template/",
      "/ai-agent-prd-template/"
    ],
    "faq": [
      [
        "What is a mobile app PRD?",
        "A mobile app PRD is a product requirements document that defines users, journeys, screens, features, permissions, analytics, performance expectations, and launch requirements for an iOS or Android app."
      ],
      [
        "What should a mobile app PRD include?",
        "It should include personas, user journeys, screen lists, onboarding, account flows, core features, notifications, permissions, offline behavior, analytics, accessibility, and acceptance criteria."
      ],
      [
        "Should a PRD include screen lists?",
        "Yes. A screen list helps design and engineering estimate scope, identify missing states, and align navigation before visual design begins."
      ],
      [
        "How do I write requirements for iOS and Android?",
        "Define shared behavior first, then list platform-specific differences such as permissions, navigation patterns, notifications, store requirements, and device constraints."
      ],
      [
        "Should push notifications be included in the PRD?",
        "Yes, if the app uses them. The PRD should define triggers, copy, frequency limits, opt-in flows, and success metrics for notifications."
      ],
      [
        "Can AI generate a mobile app PRD?",
        "AI can draft the structure and examples quickly, but teams should review screen scope, platform constraints, analytics, and launch risks."
      ]
    ]
  }
] as const;

export type PrdTemplate = (typeof prdTemplates)[number];
