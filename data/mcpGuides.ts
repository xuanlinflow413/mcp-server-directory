export type McpGuide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  updated: string;
  readingTime: string;
  primaryKeyword: string;
  intro: string[];
  keyTakeaways: string[];
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
    code?: string;
  }>;
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ title: string; href: string; description: string }>;
};

export const mcpGuides: McpGuide[] = [
  {
    slug: "mcp-server-examples",
    title: "MCP Server Examples — Real Protocol Server Ideas",
    description: "Explore practical MCP server examples for files, databases, browser automation, APIs, memory, search, and developer workflows.",
    h1: "MCP Server Examples",
    eyebrow: "MCP Examples",
    updated: "2026-06-05",
    readingTime: "12 min read",
    primaryKeyword: "mcp server examples",
    intro: [
      "MCP server examples are the fastest way to understand what the Model Context Protocol is useful for. A good MCP server does not just expose an API endpoint. It gives an AI assistant a safe, typed way to read data, call tools, and work inside a specific workflow.",
      "This guide collects practical MCP server ideas you can build, install, or evaluate. Use it as a product map for deciding which server belongs in Claude Desktop, Cursor, internal agents, or your own developer tool stack."
    ],
    keyTakeaways: [
      "The best MCP servers map to a narrow, repeatable user task instead of exposing an entire backend.",
      "Filesystem, database, browser, GitHub, documentation, memory, search, and API wrapper servers are the most useful starting points.",
      "Every MCP server should define clear permissions, human-readable tool names, and testable example prompts."
    ],
    sections: [
      {
        heading: "What counts as a useful MCP server example?",
        body: [
          "A useful example has a clear actor, a clear data source, and a clear task. For instance, a filesystem server helps an assistant read and edit local files. A database server helps it inspect schemas and run safe queries. A browser server helps it test pages or collect public information.",
          "The example should also explain the boundary. If a server can delete files, run SQL mutations, submit forms, or send messages, the page should say how those actions are gated. That boundary is what turns an interesting demo into something a builder can safely reuse."
        ],
        bullets: [
          "Good: 'Read project files and summarize TODOs.'",
          "Good: 'Query analytics events without exposing raw credentials.'",
          "Risky: 'Give the model full shell and database access with no approval.'"
        ]
      },
      {
        heading: "Common MCP server categories",
        body: [
          "Most examples fall into a few repeatable categories. The directory structure on BestMCPServers can mirror these categories so users can browse by job-to-be-done instead of memorizing package names.",
          "A directory page should show the server name, integration target, install command, supported tools, auth model, maintenance signal, and example prompts. That makes the list more valuable than a plain GitHub link collection."
        ],
        bullets: [
          "Filesystem MCP server: read, search, and edit project files.",
          "Database MCP server: inspect schemas and run approved SQL queries.",
          "Browser MCP server: open pages, click elements, and collect page evidence.",
          "GitHub MCP server: read issues, inspect pull requests, and create comments.",
          "Docs MCP server: search product documentation and return cited answers.",
          "Memory MCP server: store and retrieve project-specific facts.",
          "API wrapper MCP server: expose a SaaS API as typed assistant tools."
        ]
      },
      {
        heading: "Example: a documentation search MCP server",
        body: [
          "A documentation server is one of the safest first examples because the assistant mostly reads indexed content. The server can expose tools like search_docs, get_doc_page, and list_recent_changes. Users can ask the assistant to answer implementation questions while citing the exact docs it used.",
          "This type of server works well for SDKs, internal engineering wikis, API docs, policy manuals, and product support centers. It is also easier to review because the output is constrained to a known corpus."
        ],
        code: `{
  "tools": ["search_docs", "get_doc_page", "list_recent_changes"],
  "examplePrompt": "Find the current authentication flow and cite the setup page."
}`
      },
      {
        heading: "Example: an API wrapper MCP server",
        body: [
          "An API wrapper MCP server turns a normal product API into assistant-friendly tools. Instead of asking the model to invent curl commands, the server exposes operations with stable names, typed inputs, and predictable responses.",
          "BestMCPServers already has public developer tools and an API area, so an API wrapper guide can link naturally to the tools API and future MCP-ready contracts. The important rule is to avoid saying an MCP endpoint exists until it is actually implemented."
        ],
        bullets: [
          "Use narrow tools like format_json, decode_jwt, or validate_url instead of one generic call_api tool.",
          "Return structured errors so the assistant can recover.",
          "Document rate limits, privacy behavior, and whether data is stored."
        ]
      },
      {
        heading: "How to choose the right MCP example to build first",
        body: [
          "Start with the workflow where the assistant already helps you manually. If you repeatedly copy logs, paste files, search docs, or ask for command examples, that workflow is a good MCP candidate. Avoid broad platform servers until you have one narrow server working reliably.",
          "For an independent site, the best content format is a searchable example library. Each example should include the user task, tool list, configuration shape, security notes, and links to related setup guides."
        ],
        bullets: [
          "Pick one user task.",
          "Define read-only mode first.",
          "Add write actions only after approval rules are clear.",
          "Test with Claude Desktop or Cursor using a real prompt.",
          "Publish the install steps and troubleshooting notes."
        ]
      }
    ],
    faq: [
      { question: "What is a simple MCP server example?", answer: "A simple example is a filesystem MCP server that lets an assistant list files, read selected files, and search a project directory with explicit user permission." },
      { question: "Are MCP servers the same as APIs?", answer: "No. An API is a service interface. An MCP server adapts tools, resources, and prompts into a protocol that AI clients can discover and call safely." },
      { question: "Which MCP server should I try first?", answer: "Start with a read-only server such as docs search, filesystem read, or GitHub issue reading. These examples are easier to inspect and safer than write-heavy automation." },
      { question: "Can an MCP server call external APIs?", answer: "Yes. Many useful servers wrap external APIs, but the wrapper should expose narrow typed tools and avoid leaking secrets or raw credentials to the client." },
      { question: "How should I evaluate an MCP server example?", answer: "Check the install steps, tool names, permissions, supported clients, maintenance history, security notes, and whether the example includes real prompts." }
    ],
    related: [
      { title: "MCP Tutorial for Beginners", href: "/mcp-tutorial-for-beginners/", description: "Learn the basic client-server model before choosing examples." },
      { title: "MCP Server Config Examples", href: "/guides/mcp-server-config-examples/", description: "Copy safe mcpServers JSON examples after choosing server categories." },
      { title: "Best MCP Servers for Claude", href: "/guides/best-mcp-servers-for-claude/", description: "Browse Claude-focused server recommendations." },
      { title: "Use BestMCPServers Tools with Cursor", href: "/guides/use-bestmcpservers-tools-with-cursor/", description: "Connect tool workflows to Cursor and MCP-ready patterns." }
    ]
  },
  {
    slug: "mcp-tutorial-for-beginners",
    title: "MCP Tutorial for Beginners — Step-by-Step Guide",
    description: "A beginner-friendly MCP tutorial explaining clients, servers, tools, resources, prompts, setup flow, examples, and safety basics.",
    h1: "MCP Tutorial for Beginners",
    eyebrow: "MCP Tutorial",
    updated: "2026-06-05",
    readingTime: "13 min read",
    primaryKeyword: "mcp tutorial for beginners",
    intro: [
      "The Model Context Protocol, usually shortened to MCP, is a standard way for AI applications to connect with tools and data sources. Instead of hard-coding every integration inside an AI client, MCP lets a separate server describe what it can do.",
      "This beginner tutorial explains the moving parts without assuming you already know the protocol. By the end, you should understand what an MCP client is, what an MCP server does, how tools are exposed, and how to choose your first server."
    ],
    keyTakeaways: [
      "An MCP client is the AI application, such as Claude Desktop or an IDE assistant, that connects to servers.",
      "An MCP server exposes tools, resources, and prompts for a specific workflow or data source.",
      "The safest beginner setup is a read-only server with clear install steps and a small number of tools."
    ],
    sections: [
      {
        heading: "MCP in one sentence",
        body: [
          "MCP lets an AI client discover and use external capabilities through a standard protocol. The client does not need to know every detail of your filesystem, database, SaaS API, or documentation site. It only needs to connect to a server that describes available tools and how to call them.",
          "For beginners, the most important mental model is simple: the AI client talks to the MCP server, and the MCP server talks to the real system. That separation is why MCP is useful for security, reuse, and maintainability."
        ]
      },
      {
        heading: "The three basic pieces: client, server, and tools",
        body: [
          "The client is where the user chats with the assistant. The server is the integration layer. Tools are the named actions the assistant can request. A filesystem server might expose read_file and search_files. A docs server might expose search_docs and open_doc. A GitHub server might expose list_issues and read_pull_request.",
          "Resources and prompts are also part of MCP. Resources are structured data the client can inspect. Prompts are reusable prompt templates the server can provide. Beginners should start by understanding tools first, then expand into resources and prompts when the workflow needs them."
        ],
        bullets: [
          "Client: Claude Desktop, Cursor, or another MCP-capable AI app.",
          "Server: the integration process that exposes capabilities.",
          "Tools: typed actions the assistant can call.",
          "Resources: data objects the assistant can read.",
          "Prompts: reusable prompt templates from the server."
        ]
      },
      {
        heading: "Beginner setup flow",
        body: [
          "The exact setup depends on the client, but the flow is usually the same. You install a server package, add a server entry to the client configuration, restart the client, and test with a narrow prompt. If the server does not appear, check the command path, environment variables, and logs before changing the prompt.",
          "Do not start with a complex server that needs multiple tokens and write permissions. A read-only docs or filesystem server gives you a clean way to learn how discovery, approval, and tool calls behave."
        ],
        bullets: [
          "Choose one server with clear install documentation.",
          "Install the required runtime, such as Node.js or Python.",
          "Add the server command to your client config.",
          "Restart the client so it can discover the tools.",
          "Ask a small test prompt and verify the result."
        ]
      },
      {
        heading: "First prompt examples to test MCP",
        body: [
          "A good first prompt asks the assistant to use one specific capability. That makes it easier to tell whether the server is connected and whether the assistant is choosing the right tool. Avoid broad prompts like 'do my project' during setup.",
          "If the client shows tool approval dialogs, read them carefully. MCP is powerful because it lets assistants take action, but that also means the user needs to understand what the tool is about to read or change."
        ],
        bullets: [
          "For a docs server: 'Search the docs for authentication setup and cite the relevant page.'",
          "For a filesystem server: 'List the files in this project root and summarize the folder structure.'",
          "For a GitHub server: 'Read the latest open issues and group them by theme.'",
          "For an API wrapper: 'Validate this JSON and explain any syntax error.'"
        ]
      },
      {
        heading: "Common beginner mistakes",
        body: [
          "Most MCP setup problems are not model problems. They are configuration problems. The command path may be wrong, the runtime may not be installed, the config file may be in the wrong location, or the server may require an environment variable that was not passed to the client.",
          "The second common mistake is granting too much access too early. If you are still learning, prefer read-only tools and local demo data. Add write access only when you can explain why the assistant needs it and how the user approves it."
        ],
        bullets: [
          "Using a global command that the client process cannot find.",
          "Editing the wrong config file.",
          "Forgetting to restart the AI client.",
          "Installing a server without checking supported clients.",
          "Adding broad write permissions before testing read-only behavior."
        ]
      }
    ],
    faq: [
      { question: "What does MCP stand for?", answer: "MCP stands for Model Context Protocol, a standard for connecting AI clients to tools, data sources, prompts, and resources." },
      { question: "Do I need to code to use MCP?", answer: "Not always. Many servers can be installed with package commands and a config file. Building a custom server usually requires Python, Node.js, or another supported runtime." },
      { question: "Is MCP only for Claude?", answer: "No. Claude Desktop is a common MCP client, but the protocol is not limited to Claude. Other assistants and developer tools can implement MCP clients." },
      { question: "What is the best MCP server for beginners?", answer: "A read-only docs, filesystem, or GitHub reading server is usually best because it is easier to understand and safer than write-heavy automation." },
      { question: "Why does my MCP server not show up?", answer: "Check the config file location, command path, installed runtime, environment variables, logs, and whether you restarted the client after editing the config." }
    ],
    related: [
      { title: "How to Install MCP Servers in Cursor", href: "/guides/how-to-install-mcp-servers-in-cursor/", description: "Follow a client-specific MCP installation flow for Cursor." },
      { title: "MCP Server Examples", href: "/mcp-server-examples/", description: "Browse practical examples after learning the basics." },
      { title: "Claude MCP Server Config", href: "/claude-mcp-server-config/", description: "Learn how config entries work in Claude Desktop." }
    ]
  },
  {
    slug: "claude-mcp-server-config",
    title: "Claude MCP Server Config — Setup Guide",
    description: "Learn how Claude MCP server config works, where to place server entries, what commands mean, and how to troubleshoot common setup errors.",
    h1: "Claude MCP Server Config",
    eyebrow: "Claude MCP Setup",
    updated: "2026-06-05",
    readingTime: "11 min read",
    primaryKeyword: "claude mcp server config",
    intro: [
      "Claude Desktop can connect to MCP servers through a local configuration file. That config tells Claude which server command to run, which arguments to pass, and which environment variables the server needs.",
      "This guide explains the shape of a Claude MCP server config without pretending to be official Anthropic documentation. Always confirm exact file locations and client behavior with the current Claude Desktop docs for your operating system."
    ],
    keyTakeaways: [
      "A Claude MCP config entry usually defines a server name, command, args, and optional env values.",
      "Most failures come from wrong command paths, missing runtimes, missing tokens, or forgetting to restart Claude Desktop.",
      "Keep config entries narrow and avoid giving write-capable servers unnecessary credentials."
    ],
    sections: [
      {
        heading: "What a Claude MCP server config does",
        body: [
          "The config is a launch map. Claude Desktop reads the server entries, starts the listed commands, and discovers the tools each server exposes. If the command fails, Claude cannot see the tools. If the server starts but requires missing credentials, the tools may appear but fail when called.",
          "The server name should be human-readable because it helps users understand what capability is being added. A name like filesystem, github, docs-search, or json-tools is easier to audit than a vague name like helper."
        ]
      },
      {
        heading: "Common config shape",
        body: [
          "A typical config entry includes mcpServers at the top level. Each server has a command and optional args. Some servers also need env variables for API tokens or paths. The exact command depends on the package and runtime.",
          "Treat the following as an illustrative structure, not a universal copy-paste block. Check the server README before adding it to a real config."
        ],
        code: `{
  "mcpServers": {
    "docs-search": {
      "command": "node",
      "args": ["/path/to/server.js"],
      "env": {
        "DOCS_INDEX_PATH": "/path/to/docs-index"
      }
    }
  }
}`
      },
      {
        heading: "Safe config rules",
        body: [
          "The config file is powerful because it can launch local processes. That means you should only add servers you trust and understand. Read the server source or at least the README, check what tools it exposes, and start with read-only access when possible.",
          "If a server needs an API token, prefer the narrowest token scope available. Do not add production admin credentials to a local assistant config unless there is a strong reason and a review process."
        ],
        bullets: [
          "Use descriptive server names.",
          "Prefer absolute paths for local scripts when setup is failing.",
          "Keep secrets in env values, not inside prompts.",
          "Avoid broad write permissions during first setup.",
          "Remove unused servers instead of leaving stale entries enabled."
        ]
      },
      {
        heading: "Troubleshooting Claude MCP config",
        body: [
          "If the server does not show up, first verify the command works from a terminal. Then verify the same runtime is available to the Claude Desktop process. A command that works in your shell may fail in a GUI app if PATH is different.",
          "If the server appears but tool calls fail, check environment variables, file permissions, API token scopes, and server logs. If only one tool fails, the issue is probably inside the server or input schema rather than the client config."
        ],
        bullets: [
          "Restart Claude Desktop after editing the config.",
          "Check JSON syntax before relaunching.",
          "Use absolute command paths when PATH is inconsistent.",
          "Confirm the package version supports your client.",
          "Disable one server at a time to isolate failures."
        ]
      },
      {
        heading: "When to create a separate config entry",
        body: [
          "Separate config entries are useful when servers have different trust levels or workflows. For example, a read-only docs server and a write-capable deployment server should not be treated as the same integration. Splitting them makes approval decisions clearer.",
          "For teams, the config should be documented like any other developer environment file. Include the server purpose, install command, required environment variables, and test prompt so new users can verify setup quickly."
        ]
      }
    ],
    faq: [
      { question: "Where is the Claude MCP config file?", answer: "The location depends on your operating system and Claude Desktop version. Check the current Claude Desktop MCP documentation, then verify you are editing the config used by the running app." },
      { question: "What goes inside mcpServers?", answer: "Each entry typically includes a server name, command, optional args, and optional env values. The exact fields depend on the server package." },
      { question: "Why does my Claude MCP server fail to start?", answer: "Common causes include invalid JSON, wrong command path, missing Node.js or Python runtime, missing package, missing env variable, or a command that works in the shell but not in the desktop app environment." },
      { question: "Should I put API keys in Claude MCP config?", answer: "Only when the server requires them, and only with the narrowest practical scope. Avoid broad production admin tokens for experimental local setups." },
      { question: "Is this official Claude documentation?", answer: "No. This is an independent BestMCPServers guide. Use it as a practical checklist and confirm exact details with official Anthropic documentation." }
    ],
    related: [
      { title: "How to Create claude_desktop_config.json", href: "/guides/how-to-create-claude-desktop-config-json/", description: "Create and validate the Claude Desktop MCP config file." },
      { title: "Claude Desktop MCP Config Examples", href: "/guides/claude-desktop-mcp-config-examples/", description: "Compare copy-ready Claude Desktop server entries for common MCP workflows." },
      { title: "Claude MCP Server Disconnected", href: "/claude-mcp-server-config/#troubleshooting-claude-mcp-config", description: "Start with config troubleshooting when a server disconnects." },
      { title: "Best MCP Servers for Claude", href: "/guides/best-mcp-servers-for-claude/", description: "Find server ideas for Claude workflows." },
      { title: "MCP Security Best Practices", href: "/mcp-security-best-practices/", description: "Review security before adding powerful servers." }
    ]
  },
  {
    slug: "mcp-security-best-practices",
    title: "MCP Security Best Practices — Secure MCP Servers",
    description: "Review MCP security best practices for permissions, secrets, tool design, logging, approvals, sandboxing, and production deployment.",
    h1: "MCP Security Best Practices",
    eyebrow: "MCP Security",
    updated: "2026-06-05",
    readingTime: "14 min read",
    primaryKeyword: "mcp security best practices",
    intro: [
      "MCP makes AI assistants more useful by connecting them to tools and data. That same power creates security questions: what can the assistant read, what can it change, where are secrets stored, and how does a user approve risky actions?",
      "This guide gives practical MCP security best practices for builders and teams. It is not a formal audit or legal opinion. Use it as an implementation checklist before publishing, installing, or recommending an MCP server."
    ],
    keyTakeaways: [
      "Design MCP tools around least privilege and narrow tasks.",
      "Separate read-only capabilities from write or destructive actions.",
      "Protect secrets, log safely, document permissions, and test misuse cases before launch."
    ],
    sections: [
      {
        heading: "Start with least privilege",
        body: [
          "Least privilege means the server only gets the access needed for its task. A docs search server does not need write access. A formatting tool does not need network access. A GitHub issue reader does not need permission to merge pull requests.",
          "For independent builders, least privilege is also a product advantage. Users are more likely to install a server when the README clearly explains what it can and cannot access."
        ],
        bullets: [
          "Use read-only tokens when possible.",
          "Limit filesystem paths instead of exposing an entire machine.",
          "Scope database access to selected schemas or views.",
          "Expose narrow tools rather than one generic execution tool."
        ]
      },
      {
        heading: "Separate read actions from write actions",
        body: [
          "Read actions help the assistant understand context. Write actions change the world. Treat them differently. A server that can send email, write files, delete records, deploy code, or submit forms should make those actions explicit and reviewable.",
          "Do not hide destructive behavior behind harmless tool names. A tool called sync_data that can delete production records is harder for users to evaluate than archive_records or delete_stale_records."
        ],
        bullets: [
          "Name write tools honestly.",
          "Require confirmation for destructive actions when the client supports it.",
          "Return a preview or dry-run result before mutation.",
          "Keep audit logs for high-impact actions."
        ]
      },
      {
        heading: "Protect secrets and credentials",
        body: [
          "MCP servers often need credentials to call APIs. Those credentials should stay in server-side environment variables or local config, not in prompts. The assistant should never need to see raw secrets to complete a normal task.",
          "If the server returns errors, avoid printing complete tokens, cookies, private URLs, or database connection strings. Redacted errors are less convenient during debugging, but they prevent accidental leakage into chat transcripts."
        ],
        bullets: [
          "Redact tokens in logs and error messages.",
          "Use short-lived or scoped credentials when available.",
          "Do not expose env dumps as a tool response.",
          "Rotate credentials after demos or shared screenshots."
        ]
      },
      {
        heading: "Validate inputs and outputs",
        body: [
          "Every tool should validate inputs before touching the target system. If a tool accepts a path, restrict allowed directories. If it accepts SQL, prefer parameterized queries or predefined operations. If it accepts URLs, block internal metadata endpoints and private network ranges when not needed.",
          "Output validation matters too. A server can accidentally return private data that the user did not ask for. Keep responses minimal, structured, and focused on the task."
        ],
        bullets: [
          "Validate path, URL, SQL, and command inputs.",
          "Return only the fields needed by the assistant.",
          "Use allowlists for dangerous operations.",
          "Reject ambiguous requests instead of guessing."
        ]
      },
      {
        heading: "Document the security model",
        body: [
          "A secure MCP server should explain its trust model in plain language. Users need to know what the server reads, what it writes, where data goes, whether requests are logged, and which credentials are required.",
          "For BestMCPServers directory pages, security metadata can become a ranking and filtering feature. Servers with clear permissions, active maintenance, and scoped tools should be easier to recommend than servers with broad unreviewed access."
        ],
        bullets: [
          "List required permissions.",
          "Explain data storage and retention.",
          "Show example approval prompts where possible.",
          "Publish a changelog for permission changes.",
          "Include a contact path for vulnerability reports."
        ]
      }
    ],
    faq: [
      { question: "Are MCP servers safe?", answer: "They can be safe when designed with least privilege, clear permissions, safe credential handling, validation, and user approval for risky actions. A poorly scoped server can create real risk." },
      { question: "What is the biggest MCP security risk?", answer: "The biggest practical risk is giving an assistant broad read or write access without understanding what tools the server exposes and what credentials it uses." },
      { question: "Should MCP servers have write access?", answer: "Only when the workflow needs it. Start read-only, add write tools separately, name them clearly, and prefer preview or confirmation steps for destructive actions." },
      { question: "How should MCP servers handle secrets?", answer: "Store secrets in environment variables or secure config, never in prompts. Redact tokens in logs and tool responses, and use scoped credentials where possible." },
      { question: "Do I need a security checklist before publishing an MCP server?", answer: "Yes. At minimum, review permissions, credentials, input validation, logging, user approvals, dependency maintenance, and documentation before launch." }
    ],
    related: [
      { title: "MCP Security Checklist", href: "/mcp-security-best-practices/#document-the-security-model", description: "Use this guide as the first checklist before a dedicated page exists." },
      { title: "Claude MCP Server Config", href: "/claude-mcp-server-config/", description: "Apply safe config rules in Claude Desktop." },
      { title: "MCP Server Examples", href: "/mcp-server-examples/", description: "Evaluate examples with security metadata in mind." }
    ]
  },
  {
    slug: "python-mcp-server-example",
    title: "Python MCP Server Example — Simple Build Guide",
    description: "Build a simple Python MCP server example with a clear tool design, configuration notes, test prompts, and troubleshooting checklist.",
    h1: "Python MCP Server Example",
    eyebrow: "MCP Python",
    updated: "2026-06-05",
    readingTime: "12 min read",
    primaryKeyword: "python mcp server example",
    intro: [
      "A Python MCP server is a good starting point for builders who want to expose scripts, data workflows, documentation search, or internal tools to an AI assistant. Python is familiar, expressive, and well suited for data-heavy integrations.",
      "This page walks through the shape of a simple Python MCP server example. It focuses on product and implementation decisions: what tool to expose, how to keep it safe, how to configure a client, and how to test the result."
    ],
    keyTakeaways: [
      "Start with one narrow read-only Python tool before adding complex automation.",
      "Document runtime, install command, client config, example prompt, and troubleshooting steps.",
      "Keep secrets outside prompts and avoid exposing arbitrary shell or filesystem access."
    ],
    sections: [
      {
        heading: "Choose a small Python MCP use case",
        body: [
          "The best first Python example is not a giant automation server. It is a single useful tool that returns structured output. Examples include validating JSON, searching local docs, summarizing a CSV schema, checking a package version, or reading a safe directory.",
          "A narrow use case helps you verify the full MCP loop: the client discovers the tool, the assistant chooses it, the server validates input, and the result comes back in a format the assistant can explain."
        ],
        bullets: [
          "Good first tool: search_docs(query).",
          "Good first tool: summarize_csv_schema(path).",
          "Good first tool: validate_json(text).",
          "Avoid first tool: run_any_command(command)."
        ]
      },
      {
        heading: "Example tool design",
        body: [
          "Imagine a Python server that exposes a docs search tool. The assistant sends a query, the server searches a local index, and the response returns matching titles, snippets, and source paths. This is useful, testable, and relatively safe because it reads from a known corpus.",
          "The implementation details depend on the Python MCP SDK and server framework version you choose. The durable design principle is more important than one exact snippet: keep tool names explicit, inputs typed, and outputs structured."
        ],
        code: `# Illustrative tool contract, not a complete SDK-specific implementation
Tool: search_docs
Input: { "query": "authentication setup", "limit": 5 }
Output: {
  "results": [
    { "title": "Auth setup", "path": "docs/auth.md", "snippet": "..." }
  ]
}`
      },
      {
        heading: "Client configuration notes",
        body: [
          "After the server runs locally, add it to your MCP-capable client config. For Claude Desktop, that usually means a server entry with command, args, and optional env values. For IDE clients, the exact UI and config location may differ.",
          "Use absolute paths while debugging. Once the setup is reliable, you can simplify commands if the client environment resolves them correctly. Always restart the client after editing the configuration."
        ],
        bullets: [
          "Confirm Python is installed and visible to the client process.",
          "Use a virtual environment for dependencies.",
          "Pass required paths through env values or args.",
          "Restart the client after config changes.",
          "Test with one small prompt before adding more tools."
        ]
      },
      {
        heading: "Test prompts for a Python MCP server",
        body: [
          "Testing should prove that the assistant can discover the tool, call it with valid input, and explain the result. Do not begin with a prompt that requires multiple tools and ambiguous judgment. Start with one deterministic request.",
          "If the server handles files or data, include a prompt that tests missing files, invalid input, and permission boundaries. Those cases are where many demo servers fail."
        ],
        bullets: [
          "'Use the docs search tool to find the setup page for authentication.'",
          "'Validate this JSON string and explain the syntax error.'",
          "'Summarize the columns in this allowed CSV file.'",
          "'Try a missing file path and tell me what error the server returns.'"
        ]
      },
      {
        heading: "Python MCP server safety checklist",
        body: [
          "Python makes it easy to access files, processes, databases, and networks. That convenience is exactly why a Python MCP server needs careful boundaries. The assistant should not receive a general-purpose Python execution tool unless the environment is intentionally sandboxed.",
          "For public examples, show the safe version first. If you later add write actions, separate them from read actions and document the additional risk."
        ],
        bullets: [
          "Restrict allowed directories and file types.",
          "Validate all path and query inputs.",
          "Do not expose arbitrary eval or shell execution.",
          "Redact secrets from errors and logs.",
          "Add clear README instructions and example prompts."
        ]
      }
    ],
    faq: [
      { question: "Can I build an MCP server with Python?", answer: "Yes. Python is a practical choice for MCP servers, especially for docs search, data workflows, internal scripts, and API wrappers." },
      { question: "What should my first Python MCP server do?", answer: "Start with one narrow read-only tool such as docs search, JSON validation, CSV schema summary, or safe file reading." },
      { question: "Do I need a Python virtual environment?", answer: "It is strongly recommended. A virtual environment makes dependencies predictable and avoids conflicts with other Python projects." },
      { question: "Why does my Python MCP server work in terminal but not in Claude or Cursor?", answer: "The client process may have a different PATH or environment. Use absolute paths, pass env values explicitly, and restart the client after config changes." },
      { question: "Is it safe to expose Python scripts through MCP?", answer: "It depends on scope. Read-only and validated tools are safer. Avoid arbitrary shell, eval, broad filesystem access, and unscoped production credentials." }
    ],
    related: [
      { title: "MCP Tutorial for Beginners", href: "/mcp-tutorial-for-beginners/", description: "Understand the protocol before writing a custom server." },
      { title: "MCP Security Best Practices", href: "/mcp-security-best-practices/", description: "Review security rules before exposing Python tools." },
      { title: "Tool API", href: "/tools/api/", description: "Compare public HTTP tool endpoints with MCP-ready tool design." }
    ]
  },
  {
      "slug": "node-js-mcp-server-example",
      "title": "Node.js MCP Server Example — Simple Build Guide",
      "description": "Build a practical Node.js MCP server example with tool design, client config notes, testing prompts, and security guardrails.",
      "h1": "Node.js MCP Server Example",
      "eyebrow": "MCP Node.js",
      "updated": "2026-06-05",
      "readingTime": "12 min read",
      "primaryKeyword": "node js mcp server example",
      "intro": [
        "A Node.js MCP server is a practical choice when your integration already lives close to JavaScript tooling, web APIs, npm packages, frontend projects, or developer automation. It can expose a small set of typed tools that an MCP-capable client can discover and call.",
        "This guide focuses on the shape of a safe Node.js MCP server example: what to build first, how to describe tools, how to configure a client, and how to test the server without giving an assistant more access than it needs."
      ],
      "keyTakeaways": [
        "Start with one narrow Node.js tool, such as docs search, JSON validation, package lookup, or safe URL inspection.",
        "Use explicit tool names, typed inputs, structured outputs, and predictable error messages.",
        "Keep secrets in environment variables, validate all inputs, and avoid exposing arbitrary shell or filesystem access."
      ],
      "sections": [
        {
          "heading": "Choose a small Node.js MCP use case",
          "body": [
            "The best first Node.js MCP server is not a general automation layer. It is a focused integration that answers one repeatable need. Good examples include validating JSON, searching project documentation, checking npm package metadata, formatting small snippets, or wrapping a single internal API.",
            "A narrow use case makes the full MCP loop easier to test. The client discovers the tool, the assistant calls it with a typed input, the server validates the request, and the result returns in a structured format the assistant can explain."
          ],
          "bullets": [
            "Good first tool: validate_json(text).",
            "Good first tool: search_docs(query, limit).",
            "Good first tool: inspect_package(name).",
            "Avoid first tool: run_any_command(command)."
          ]
        },
        {
          "heading": "Illustrative Node.js tool contract",
          "body": [
            "The exact implementation depends on the MCP SDK version and package style you choose. The stable idea is the same: describe a named tool with a clear input schema, validate the input, run a bounded operation, and return a compact response.",
            "For public examples, keep the first tool read-only. A docs search or JSON validation tool is easier for users to inspect than a tool that writes files, runs commands, or calls production services."
          ],
          "code": "Tool: validate_json\\nInput: { text: '{ \\\"name\\\": \\\"demo\\\" }' }\\nOutput: { valid: true, message: 'JSON parsed successfully' }"
        },
        {
          "heading": "Client configuration notes",
          "body": [
            "After the Node.js server runs locally, add it to the configuration for your MCP-capable client. A typical entry points the client to a command such as node, npx, or a package script, plus any required arguments and environment variables.",
            "Use absolute paths while debugging. Desktop clients and IDE clients may not inherit the same PATH as your terminal. If the command works in your shell but not in the client, the issue is often command resolution, missing environment variables, or a stale client session."
          ],
          "bullets": [
            "Confirm Node.js is installed and visible to the client process.",
            "Prefer a small package script for repeatable local startup.",
            "Pass tokens through env values, not prompts.",
            "Restart the client after editing MCP config."
          ]
        },
        {
          "heading": "Testing prompts for a Node.js MCP server",
          "body": [
            "A good test prompt proves that the assistant can find the tool, call it with the expected input, and explain the returned result. Avoid broad prompts during setup because they make it hard to tell whether the server, client, or model behavior caused a failure.",
            "Include negative tests too. Invalid JSON, missing package names, blocked URLs, and disallowed paths reveal whether your server handles errors safely."
          ],
          "bullets": [
            "Use the JSON validation tool on this snippet and explain the error.",
            "Search the local docs for authentication setup and cite the closest result.",
            "Check this npm package name and return only the package summary.",
            "Try an invalid input and show the server error message."
          ]
        },
        {
          "heading": "Node.js MCP server safety checklist",
          "body": [
            "Node.js makes it easy to reach files, child processes, package managers, web APIs, and credentials. That flexibility is useful, but it also means a Node.js MCP server needs clear boundaries.",
            "This page is a practical implementation guide, not a formal security audit. Before production use, review the server against your organization’s security, privacy, logging, and deployment requirements."
          ],
          "bullets": [
            "Do not expose arbitrary child_process execution in a starter server.",
            "Restrict filesystem access to approved paths.",
            "Validate URL, path, package name, and JSON inputs.",
            "Redact secrets from logs, errors, and tool responses."
          ]
        },
      {
          "heading": "Production documentation for a Node.js MCP example",
          "body": [
            "A useful Node.js MCP example should include more than a happy-path snippet. Document the supported Node version, package manager, install command, local run command, client configuration shape, required environment variables, and a small verification prompt. That documentation lets another developer reproduce the server without guessing how your terminal was configured. Also document what the server does not do. If the example cannot write files, call private APIs, or run commands, say that clearly. Clear limits make the example easier to trust and easier to list in a directory.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "Common Node.js MCP implementation mistakes",
          "body": [
            "Many Node.js examples fail because they treat MCP as a thin shell around arbitrary JavaScript. That is risky and hard to review. A better server exposes a small number of named tools and rejects inputs outside the intended workflow. Another common problem is returning unstructured text for everything. Structured results help the assistant summarize accurately and help users debug failures without dumping raw stack traces.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "How BestMCPServers should evaluate Node.js MCP servers",
          "body": [
            "For a directory page, Node.js MCP servers should be evaluated by practical installability, not only by star count. A server with clear setup, scoped permissions, current dependencies, and example prompts is more useful than an abandoned package with an impressive README but no working configuration. The directory card should capture purpose, supported clients, package source, credentials, exposed tools, and security notes.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        }
      ],
      "faq": [
        {
          "question": "Can I build an MCP server with Node.js?",
          "answer": "Yes. Node.js is a practical runtime for MCP servers, especially when the integration uses npm packages, web APIs, frontend tooling, or JavaScript automation."
        },
        {
          "question": "What should my first Node.js MCP server do?",
          "answer": "Start with one narrow read-only tool such as JSON validation, documentation search, npm package lookup, or safe URL inspection."
        },
        {
          "question": "Should I use node or npx in MCP config?",
          "answer": "Either can work depending on the package. For debugging, a direct node command with an absolute script path is often easier to inspect."
        },
        {
          "question": "Why does my Node.js MCP server work in terminal but not in Claude or Cursor?",
          "answer": "The client process may have a different PATH, working directory, or environment. Use absolute paths, pass env values explicitly, verify dependencies, and restart the client."
        },
        {
          "question": "Is it safe to expose Node.js scripts through MCP?",
          "answer": "It depends on scope. Read-only validated tools are safer. Avoid arbitrary command execution, broad filesystem access, unscoped tokens, and production write permissions in early examples."
        }
      ],
      "related": [
        {
          "title": "Python MCP Server Example",
          "href": "/python-mcp-server-example/",
          "description": "Compare a Python-first MCP server design with a Node.js implementation."
        },
        {
          "title": "MCP Security Best Practices",
          "href": "/mcp-security-best-practices/",
          "description": "Review permission, secret, and validation rules before publishing a server."
        },
        {
          "title": "Claude MCP Server Config",
          "href": "/claude-mcp-server-config/",
          "description": "Learn how server command entries are usually configured in Claude Desktop."
        }
      ]
    },
    {
      "slug": "mcp-security-checklist",
      "title": "MCP Security Checklist — Review Servers Before Use",
      "description": "Use this practical MCP security checklist to review permissions, tools, secrets, logging, approvals, dependencies, and deployment risks.",
      "h1": "MCP Security Checklist",
      "eyebrow": "MCP Security",
      "updated": "2026-06-05",
      "readingTime": "10 min read",
      "primaryKeyword": "mcp security checklist",
      "intro": [
        "An MCP security checklist helps you slow down before connecting an AI assistant to files, databases, SaaS accounts, internal tools, or deployment workflows. The question is not only whether a server works. The question is what it can read, what it can change, and how mistakes are contained.",
        "Use this checklist before installing, publishing, recommending, or hosting an MCP server. It is not a formal audit or legal opinion, but it gives builders and teams a concrete review path."
      ],
      "keyTakeaways": [
        "Review permissions, credentials, input validation, logging, approvals, and dependency maintenance before trusting an MCP server.",
        "Separate read-only tools from write tools so users can make clearer approval decisions.",
        "Document the security model in plain language, including what data is accessed and where it goes."
      ],
      "sections": [
        {
          "heading": "1. Permission scope",
          "body": [
            "Start by listing exactly what the server can access. A useful MCP server should have a narrow purpose and a narrow permission set. If the server needs filesystem access, define allowed directories. If it needs an API token, use the smallest token scope available.",
            "Broad access is not always wrong, but it should be intentional. A server that can read an entire machine, query production data, or mutate SaaS records needs stronger review than a read-only documentation search server."
          ],
          "bullets": [
            "Does the server explain what it can read?",
            "Does it explain what it can write or delete?",
            "Can permissions be reduced?",
            "Are production credentials avoided during testing?",
            "Can the server run in read-only mode first?"
          ]
        },
        {
          "heading": "2. Tool design and naming",
          "body": [
            "Tool names should be honest. Users and reviewers should be able to tell whether a tool reads data, writes data, sends a message, deploys code, deletes records, or calls an external service.",
            "Avoid one generic tool that accepts arbitrary commands or raw API calls unless the environment is intentionally sandboxed and the risk is clearly documented."
          ],
          "bullets": [
            "Prefer search_docs over execute_anything.",
            "Prefer create_draft_email over send_email when possible.",
            "Prefer preview_changes before apply_changes.",
            "Use separate tools for read, write, and delete actions."
          ]
        },
        {
          "heading": "3. Secrets and sensitive data",
          "body": [
            "Secrets should stay outside prompts and chat transcripts. MCP servers that need tokens should read them from environment variables, local secret stores, or deployment secrets, depending on the environment.",
            "Tool responses and logs should redact tokens, cookies, database URLs, private headers, and personal data that is not needed for the task."
          ],
          "bullets": [
            "Never ask users to paste long-lived secrets into a prompt.",
            "Redact secrets in errors and logs.",
            "Use scoped or short-lived credentials when available.",
            "Rotate credentials after demos, screenshots, or shared debugging sessions."
          ]
        },
        {
          "heading": "4. Input validation and abuse cases",
          "body": [
            "Every tool should reject unsafe or ambiguous input. Path inputs need directory restrictions. URL inputs need checks for private networks when the server should only fetch public pages. SQL inputs need parameterization, allowlists, or read-only views.",
            "Test misuse cases before launch. A server that handles only the happy path may fail dangerously when the assistant sends malformed input or a user asks for a risky shortcut."
          ],
          "bullets": [
            "Validate paths, URLs, SQL, JSON, and command-like strings.",
            "Block private network access unless it is required and reviewed.",
            "Return structured errors instead of stack traces with secrets.",
            "Add tests for missing, malformed, and disallowed inputs."
          ]
        },
        {
          "heading": "5. Deployment and monitoring",
          "body": [
            "Local demo servers and hosted servers have different risk profiles. A local server may expose a user’s machine. A hosted server may expose shared infrastructure, network routes, logs, and tenant data.",
            "This checklist does not replace a production security review. Before deploying for real users, confirm authentication, authorization, rate limits, logging, retention, vulnerability handling, and incident response."
          ],
          "bullets": [
            "Require authentication for hosted servers.",
            "Apply rate limits and request size limits.",
            "Keep audit logs for high-impact actions.",
            "Review dependency updates and vulnerability reports."
          ]
        },
      {
          "heading": "How to apply the checklist before installation",
          "body": [
            "Before installing a server, read the README as if you were approving a small software vendor. Identify what the server can access, what credentials it needs, what tools it exposes, and whether it can write or delete anything. If those details are missing, treat the server as higher risk until you inspect the source or test it in a sandbox. For team use, turn the same questions into an approval record: who requested the server, why it is needed, what data it touches, and which permissions were granted.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "Checklist questions for directory listings",
          "body": [
            "A directory listing can make security easier by turning hidden review work into visible metadata. Instead of showing only the server name and GitHub URL, include fields for read/write access, credential requirements, supported clients, tool categories, maintenance signals, and security documentation. This does not replace an audit, but it helps users compare servers quickly and makes safer defaults easier to recommend.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "What to do when a checklist item fails",
          "body": [
            "A failed checklist item does not always mean the server is unusable. It means you need a mitigation or a narrower setup. A server that asks for a broad token may be acceptable if you can create a scoped token. A server that logs too much may be acceptable only in local testing, not in production. If the risk cannot be reduced, skip the server or keep it in a watch list until the maintainer improves the docs.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        }
      ],
      "faq": [
        {
          "question": "What is an MCP security checklist?",
          "answer": "It is a practical review list for MCP servers covering permissions, tool behavior, credentials, validation, logging, approvals, dependencies, and deployment risks."
        },
        {
          "question": "Do all MCP servers need the same security review?",
          "answer": "No. A read-only docs server is usually lower risk than a server that can write files, send emails, deploy code, or access production data."
        },
        {
          "question": "What is the biggest item to check first?",
          "answer": "Check permission scope first. Understand what the server can read, write, delete, or send before adding it to an AI client."
        },
        {
          "question": "Should MCP tools require user approval?",
          "answer": "Risky write or destructive actions should be explicit and reviewable. The exact approval behavior depends on the client."
        },
        {
          "question": "Is this checklist a security audit?",
          "answer": "No. It is a practical starting checklist for builders and evaluators. Production systems should go through a proper security review."
        }
      ],
      "related": [
        {
          "title": "MCP Security Best Practices",
          "href": "/mcp-security-best-practices/",
          "description": "Read the broader security guide behind this checklist."
        },
        {
          "title": "Claude MCP Server Config",
          "href": "/claude-mcp-server-config/",
          "description": "Apply safe configuration rules in local client setup."
        },
        {
          "title": "How to Host an MCP Server",
          "href": "/how-to-host-mcp-server/",
          "description": "Review deployment-specific risks before hosting a server."
        }
      ]
    },
    {
      "slug": "how-to-host-mcp-server",
      "title": "How to Host an MCP Server — Deployment Guide",
      "description": "Learn how to host an MCP server safely across local development, private team environments, and remote deployment patterns.",
      "h1": "How to Host an MCP Server",
      "eyebrow": "MCP Hosting",
      "updated": "2026-06-05",
      "readingTime": "13 min read",
      "primaryKeyword": "how to host mcp server",
      "intro": [
        "Hosting an MCP server means choosing where the integration process runs, who can connect to it, how credentials are stored, and how tool calls are monitored. The right hosting model depends on the workflow, the client, and the risk of the systems being connected.",
        "This guide explains practical hosting options for MCP servers without assuming one setup is best for everyone. Treat it as an implementation planning guide, not as official protocol documentation or a production security audit."
      ],
      "keyTakeaways": [
        "Local hosting is usually the safest first step because it keeps setup small and easy to inspect.",
        "Remote hosting needs stronger authentication, authorization, rate limits, monitoring, and secret management.",
        "Do not expose write-capable MCP tools publicly without a clear access model and production review."
      ],
      "sections": [
        {
          "heading": "Start with local hosting",
          "body": [
            "Most builders should start by running the MCP server locally. Local hosting keeps the feedback loop short: install the runtime, run the server command, add it to the client config, restart the client, and test one small prompt.",
            "Local does not automatically mean safe. A local server can still read files, call APIs, or run commands. The benefit is that the boundary is easier to understand while you are still learning."
          ],
          "bullets": [
            "Best for first examples and personal workflows.",
            "Useful for filesystem, docs, and developer tooling servers.",
            "Easy to debug with terminal logs.",
            "Still requires least privilege and careful credential handling."
          ]
        },
        {
          "heading": "Private team hosting",
          "body": [
            "A private team deployment can make sense when several users need the same tools, indexes, or API wrappers. Instead of each person running a local copy, the team can maintain one service with controlled access.",
            "This model needs clear ownership. Someone must manage updates, credentials, logs, access requests, and incident response. If the server touches customer data or production systems, involve the right reviewers before rollout."
          ],
          "bullets": [
            "Use team identity and access controls.",
            "Keep separate environments for development and production.",
            "Document what data the server can access.",
            "Review token scopes regularly."
          ]
        },
        {
          "heading": "Remote hosting considerations",
          "body": [
            "Remote hosting adds network and access-control questions that local demos can avoid. You need to decide which clients can connect, how requests are authenticated, how tool calls are authorized, and how abuse is limited.",
            "Do not treat a remote MCP server like a public demo endpoint unless it only exposes low-risk read-only behavior and has appropriate rate limits."
          ],
          "bullets": [
            "Require authentication before exposing tools.",
            "Authorize users per tool or per resource when needed.",
            "Add rate limits and request size limits.",
            "Avoid returning secrets or excessive internal data."
          ]
        },
        {
          "heading": "Example hosting decision map",
          "body": [
            "The hosting model should follow the risk of the workflow. A docs search server for public documentation can be simpler than a server that reads private tickets or triggers deployments.",
            "When unsure, choose the smaller blast radius. Start local, move to a private service when there is a real team need, and only consider broader exposure after the security model is written down and reviewed."
          ],
          "code": "Low risk: public docs search -> local or private hosted read-only server\\nMedium risk: internal wiki or issue search -> private hosting with auth and scoped access\\nHigh risk: database writes, deployments, payments, customer data -> require production review"
        },
        {
          "heading": "Deployment disclaimer and launch checklist",
          "body": [
            "Hosting changes the risk profile of an MCP server. A server that is acceptable for a local prototype may not be acceptable for a shared service. Before production deployment, validate the design against your organization’s security, privacy, legal, and operational requirements.",
            "BestMCPServers can describe hosting patterns and tradeoffs, but this guide is not a guarantee that a specific deployment is safe. Test your exact server, client, credentials, logs, and network path."
          ],
          "bullets": [
            "Confirm authentication and authorization.",
            "Use scoped secrets and secure secret storage.",
            "Document permissions and data flows.",
            "Add monitoring and rollback procedures."
          ]
        },
      {
          "heading": "Choose a hosting model by client behavior",
          "body": [
            "The hosting decision should start with the client. Some MCP workflows expect a local process launched from a desktop client. Others can work through a remote service or an HTTP bridge depending on the implementation. If the client cannot reliably reach the hosted service, the architecture is wrong no matter how elegant the deployment looks. Write down the client, transport, authentication method, expected users, and tool categories before choosing infrastructure.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "Operational checklist for hosted MCP services",
          "body": [
            "A hosted MCP service needs the same operational basics as any developer-facing integration. Monitor uptime, error rates, request volume, authentication failures, dependency updates, and unusual tool usage. If the service can mutate data, add audit logs and a rollback plan before inviting users. Logs should help debug the service without becoming a sensitive transcript archive; redaction, retention limits, and access controls are part of the product design.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "Content opportunities around MCP hosting",
          "body": [
            "Hosting content can become a strong cluster for BestMCPServers because users often search only after they have already built or installed something. That means the intent is practical and close to action. Pages can compare local hosting, Cloudflare, AWS, VPS, team-private deployments, and security tradeoffs. The strongest pages should include decision trees, example architectures, configuration warnings, and links back to security checklists.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        }
      ],
      "faq": [
        {
          "question": "Can I host an MCP server locally?",
          "answer": "Yes. Local hosting is the common first step for development, personal workflows, and safer experimentation."
        },
        {
          "question": "Can an MCP server be hosted remotely?",
          "answer": "Yes, depending on the client and transport support, but remote hosting requires stronger authentication, authorization, monitoring, rate limiting, and secret management."
        },
        {
          "question": "Should I expose an MCP server to the public internet?",
          "answer": "Only with a clear access model and a low-risk tool surface. Write-capable or sensitive-data servers should not be exposed publicly without a proper production review."
        },
        {
          "question": "What is the safest hosting model for beginners?",
          "answer": "Run a read-only server locally, test it with small prompts, and avoid production credentials until you understand the server’s behavior."
        },
        {
          "question": "What should I check before hosting for a team?",
          "answer": "Check user access, token scopes, data retention, logging, rate limits, dependency maintenance, and incident response ownership."
        }
      ],
      "related": [
        {
          "title": "MCP Security Checklist",
          "href": "/mcp-security-checklist/",
          "description": "Review the security checklist before hosting a server."
        },
        {
          "title": "MCP Hosting on Cloudflare",
          "href": "/mcp-hosting-cloudflare/",
          "description": "Explore Cloudflare-oriented hosting considerations."
        },
        {
          "title": "MCP Server Examples",
          "href": "/mcp-server-examples/",
          "description": "Choose a low-risk server example before planning deployment."
        }
      ]
    },
    {
      "slug": "mcp-server-vs-api",
      "title": "MCP Server vs API — What Is the Difference? | BestMCPServers",
      "description": "Compare MCP servers and APIs: how they differ, where they overlap, when to build each one, and how API wrappers become MCP tools.",
      "h1": "MCP Server vs API",
      "eyebrow": "MCP Concepts",
      "updated": "2026-06-05",
      "readingTime": "11 min read",
      "primaryKeyword": "mcp server vs api",
      "intro": [
        "An MCP server and an API are related, but they are not the same thing. An API is a service interface for software systems. An MCP server is an integration layer that lets AI clients discover and call tools, resources, or prompts in a structured way.",
        "The easiest mental model: an API serves applications, while an MCP server adapts capabilities for AI-assisted workflows. Many MCP servers call APIs behind the scenes, but the user experience and safety model are different."
      ],
      "keyTakeaways": [
        "An API exposes service operations; an MCP server exposes assistant-friendly tools, resources, and prompts.",
        "MCP servers often wrap APIs with better names, schemas, context, and permission boundaries for AI clients.",
        "Use APIs for general product integration and MCP servers when an AI assistant needs discoverable, task-oriented tools."
      ],
      "sections": [
        {
          "heading": "What an API does",
          "body": [
            "An API gives software a way to call a service. It usually defines endpoints, methods, authentication, request bodies, responses, errors, and rate limits. Developers use APIs to build apps, scripts, integrations, dashboards, and backend workflows.",
            "APIs are designed for software systems first. They may be too broad, too low-level, or too sensitive to hand directly to an AI assistant without an adapter."
          ],
          "bullets": [
            "Typical API unit: endpoint or method.",
            "Typical user: developer or application.",
            "Typical docs: authentication, parameters, responses, errors.",
            "Typical risk: broad access if tokens are over-scoped."
          ]
        },
        {
          "heading": "What an MCP server does",
          "body": [
            "An MCP server describes capabilities in a way an MCP-capable AI client can discover and use. Instead of asking the assistant to invent raw HTTP calls, the server exposes named tools with typed inputs and structured outputs.",
            "A good MCP server also narrows the workflow. It can turn a complex API into a few assistant-friendly actions such as search_docs, get_issue_summary, validate_json, or create_draft_ticket."
          ],
          "bullets": [
            "Typical MCP unit: tool, resource, or prompt.",
            "Typical user: AI client and human operator.",
            "Typical docs: tool names, permissions, config, example prompts.",
            "Typical risk: unclear tool boundaries or unsafe write access."
          ]
        },
        {
          "heading": "How an API wrapper becomes an MCP server",
          "body": [
            "Many useful MCP servers are API wrappers. The server keeps credentials on the server side, validates inputs, calls the underlying API, and returns a compact result the assistant can use.",
            "The wrapper should not expose every API operation automatically. Assistant-facing tools work better when they match real tasks and hide unnecessary internal details."
          ],
          "code": "API operation: GET /v1/issues?status=open\\nMCP tool: list_open_issues({ project: 'docs-site', limit: 10 })\\nWhy it helps: clearer tool name, typed input, scoped result, easier logging"
        },
        {
          "heading": "When to build an API",
          "body": [
            "Build or improve an API when you need a durable interface for multiple applications, partners, scripts, or backend systems. APIs are also the right foundation when you need stable product integration beyond AI clients.",
            "If your product does not already have a clean API, an MCP server may still be possible, but it can become a fragile adapter around undocumented behavior. A stable API usually makes the MCP layer easier to maintain."
          ],
          "bullets": [
            "You need application-to-application integration.",
            "You need partner or customer developer access.",
            "You need versioned endpoints and standard auth.",
            "You need a foundation for several clients, not only AI assistants."
          ]
        },
        {
          "heading": "When to build an MCP server",
          "body": [
            "Build an MCP server when the primary user experience is an AI assistant using tools on behalf of a human. The server should expose a small number of high-value tasks with clear safety boundaries.",
            "Do not claim an MCP endpoint or hosted MCP integration exists until it is actually implemented and tested. If you are still designing the layer, describe it as MCP-ready, MCP-oriented, or an example pattern instead."
          ],
          "bullets": [
            "The assistant needs to search, inspect, summarize, or act inside a workflow.",
            "The tool surface can be narrow and well named.",
            "The server can validate inputs and protect secrets.",
            "The user can understand what each tool is allowed to do."
          ]
        },
      {
          "heading": "Decision framework: API first or MCP first",
          "body": [
            "If the goal is to support many software clients, build the API first. If the goal is to let an AI assistant complete a narrow workflow with human oversight, build the MCP layer first or in parallel with a small API wrapper. A useful test is to describe the action in one sentence. If the sentence starts with a developer integrating a product into an app, that is probably API-first. If it starts with a user asking an assistant to inspect, summarize, search, or draft using a tool, that is probably MCP-first.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "How MCP changes documentation requirements",
          "body": [
            "API documentation usually explains endpoints, parameters, authentication, and responses. MCP documentation also needs to explain tool intent, safe prompts, permission boundaries, client configuration, and what the assistant should never do with the tool. That difference creates an SEO opportunity because many users need a practical comparison that tells them whether to expose an existing API as MCP tools, keep it as HTTP endpoints, or publish both interfaces.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "BestMCPServers positioning for API wrapper content",
          "body": [
            "BestMCPServers can use this topic to connect its tool API pages with the MCP directory. A page about MCP servers versus APIs should not pretend that every HTTP tool is already an MCP server. Instead, it can explain the bridge: stable API operations can become assistant-friendly tools when wrapped with schemas, permissions, and examples. That honest positioning supports future pages about OpenAPI, ChatGPT Actions, Cursor workflows, and MCP-ready tool contracts.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        }
      ],
      "faq": [
        {
          "question": "Is an MCP server the same as an API?",
          "answer": "No. An API is a general service interface. An MCP server is an adapter that exposes tools, resources, or prompts to MCP-capable AI clients."
        },
        {
          "question": "Can an MCP server call an API?",
          "answer": "Yes. Many MCP servers wrap APIs and present selected operations as assistant-friendly tools with typed inputs and structured outputs."
        },
        {
          "question": "Do I need an API before building an MCP server?",
          "answer": "Not always, but a stable API often makes the MCP server easier to maintain."
        },
        {
          "question": "Which is safer: MCP server or API?",
          "answer": "Neither is automatically safer. Safety depends on authentication, authorization, permission scope, input validation, logging, and exposed read or write access."
        },
        {
          "question": "Should I expose every API endpoint as an MCP tool?",
          "answer": "Usually no. MCP tools should map to clear assistant tasks. Exposing every endpoint can create confusing tool lists and unnecessary security risk."
        }
      ],
      "related": [
        {
          "title": "MCP Tutorial for Beginners",
          "href": "/mcp-tutorial-for-beginners/",
          "description": "Learn the client-server model before comparing MCP and APIs."
        },
        {
          "title": "MCP Server Examples",
          "href": "/mcp-server-examples/",
          "description": "See examples of API wrappers and other MCP server categories."
        },
        {
          "title": "Tool API",
          "href": "/tools/api/",
          "description": "Compare HTTP tool APIs with MCP-oriented tool design."
        }
      ]
    },
    {
      "slug": "mcp-hosting-cloudflare",
      "title": "MCP Hosting on Cloudflare — Workers Deployment Guide",
      "description": "Explore MCP hosting on Cloudflare, including Workers-oriented patterns, authentication, secrets, rate limits, and production safety checks.",
      "h1": "MCP Hosting on Cloudflare",
      "eyebrow": "MCP Hosting",
      "updated": "2026-06-05",
      "readingTime": "12 min read",
      "primaryKeyword": "mcp hosting cloudflare",
      "intro": [
        "Cloudflare can be attractive for MCP-related hosting because it offers edge compute, routing, access controls, logs, secrets, and deployment workflows in one platform. That does not mean every MCP server belongs on Cloudflare, or that hosting alone makes a server safe.",
        "This guide explains Cloudflare-oriented hosting considerations for builders planning an MCP server or MCP-adjacent tool service. It is an independent practical guide, not official Cloudflare or protocol documentation."
      ],
      "keyTakeaways": [
        "Cloudflare can be useful for lightweight hosted MCP-adjacent services, API wrappers, documentation search, and authenticated team tools.",
        "Remote hosting requires authentication, authorization, rate limits, secret management, and clear tool boundaries.",
        "Do not publish sensitive or write-capable MCP services without production security, privacy, and operational review."
      ],
      "sections": [
        {
          "heading": "When Cloudflare hosting makes sense",
          "body": [
            "Cloudflare is most useful when the server can run as a lightweight service, route requests predictably, and benefit from platform features such as Access, Workers, secrets, rate limiting, and logs.",
            "Good candidates include public documentation search, API wrapper services, metadata lookup tools, validation utilities, and internal team tools with clear authentication. Heavy local filesystem workflows, desktop-only integrations, and long-running local processes may fit better outside Cloudflare."
          ],
          "bullets": [
            "Good fit: public docs search with scoped responses.",
            "Good fit: authenticated API wrapper with narrow tools.",
            "Good fit: lightweight validation or lookup service.",
            "Poor fit: broad local filesystem access."
          ]
        },
        {
          "heading": "Workers-oriented architecture pattern",
          "body": [
            "A simple Cloudflare pattern is to put a Worker in front of a narrow tool service. The Worker handles routing, authentication checks, request validation, rate limits, and calls to approved upstream APIs or storage.",
            "Whether this becomes a direct MCP server, an MCP-adjacent backend, or an API wrapper depends on the client and transport support you are targeting. Avoid telling users a hosted MCP endpoint exists until it is implemented, tested, and documented."
          ],
          "code": "Client or integration -> Cloudflare Access/auth check -> Worker route -> input validation -> approved API, KV, D1, R2, or docs index -> structured response"
        },
        {
          "heading": "Authentication and access control",
          "body": [
            "Remote MCP-related services should not rely on obscurity. If a tool can access private data or perform actions, require authentication and authorize access per user, team, tool, or resource as needed.",
            "Cloudflare Access can help protect internal tools, but it does not replace application-level authorization. The service still needs to know what each authenticated user is allowed to do."
          ],
          "bullets": [
            "Use Access or another authentication layer for private tools.",
            "Check authorization inside the service, not only at the edge.",
            "Separate admin tools from normal user tools.",
            "Use per-environment secrets."
          ]
        },
        {
          "heading": "Secrets, rate limits, and logs",
          "body": [
            "Hosted services need disciplined secret handling. Store tokens in platform secrets or a secure secret manager, not in prompts, client-side code, or public configuration. Return redacted errors when upstream calls fail.",
            "Rate limits and logs are part of the safety model. They help reduce abuse and make incidents easier to investigate, but logs should avoid retaining raw secrets, private prompts, or sensitive records unless there is a reviewed need."
          ],
          "bullets": [
            "Store API tokens as secrets.",
            "Use scoped credentials for upstream services.",
            "Apply request size limits and rate limits.",
            "Redact tokens, cookies, and private headers."
          ]
        },
        {
          "heading": "Deployment disclaimer and production checklist",
          "body": [
            "Cloudflare can provide useful deployment primitives, but it does not automatically make an MCP server production-ready. The risky parts are usually permissions, credentials, user access, tool behavior, and data handling.",
            "Before using Cloudflare for a real hosted MCP service, review the exact architecture with your security, privacy, and operations requirements. This guide is a planning checklist, not a formal audit or guarantee of compliance."
          ],
          "bullets": [
            "Confirm the intended client and transport behavior.",
            "Document every tool and permission.",
            "Test authentication and authorization failures.",
            "Prepare rollback, monitoring, and incident response steps."
          ]
        },
      {
          "heading": "Cloudflare implementation paths to compare",
          "body": [
            "Cloudflare can support several MCP-adjacent patterns. A Worker can act as a lightweight API wrapper. Access can protect a private team endpoint. KV, D1, R2, or an external search service can provide data backing for documentation lookup or metadata tools. Each option changes the security and operations checklist. The best first Cloudflare page should compare these paths rather than pretending there is one universal deployment.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "Cloudflare-specific risk questions",
          "body": [
            "Edge deployment can make a service easy to reach, which is useful and dangerous at the same time. Ask whether the endpoint should be reachable from the public internet, whether every request is authenticated, and whether the Worker can reach upstream systems that contain private or production data. Also review platform logs and analytics because a hosted MCP-adjacent tool may process prompts, URLs, file names, or internal identifiers.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        },
        {
          "heading": "How to turn this into useful independent-site content",
          "body": [
            "A Cloudflare MCP hosting article should be concrete enough to help builders make a decision, but careful enough not to claim official support or production safety. The page can include architecture diagrams, checklists, and deployment tradeoffs without publishing untested commands as universal truth. For BestMCPServers, this page should link to the general hosting guide, security checklist, MCP server versus API comparison, and tool API page.",
            "Use this section as a practical review step rather than a guarantee. MCP implementations, client behavior, hosted transports, and vendor documentation can change, so verify the exact server, package version, credentials, and client configuration before recommending it to users or adding it to a production workflow."
          ],
          "bullets": [
            "Define the user task clearly.",
            "Document permissions and limitations.",
            "Test with one realistic prompt.",
            "Record troubleshooting notes and safe defaults."
          ]
        }
      ],
      "faq": [
        {
          "question": "Can I host an MCP server on Cloudflare?",
          "answer": "It may be possible depending on the server design, client support, and transport requirements. Cloudflare is often useful for lightweight hosted tool services and API wrappers, but the exact implementation must be tested."
        },
        {
          "question": "Is Cloudflare Workers a good fit for every MCP server?",
          "answer": "No. Workers can be a good fit for lightweight stateless services, but local filesystem servers, long-running processes, and broad desktop integrations may not fit that model."
        },
        {
          "question": "Do I still need authentication if Cloudflare is in front?",
          "answer": "Yes. Private or write-capable tools need authentication and authorization. Edge protection helps, but the application should still enforce what each user can access."
        },
        {
          "question": "Where should secrets be stored for Cloudflare-hosted MCP services?",
          "answer": "Use platform secrets or a secure secret manager. Do not put tokens in prompts, public config, client-side code, or tool responses."
        },
        {
          "question": "Is this official Cloudflare MCP documentation?",
          "answer": "No. This is an independent BestMCPServers planning guide. Confirm current Cloudflare platform behavior and MCP client requirements before production deployment."
        }
      ],
      "related": [
        {
          "title": "How to Host an MCP Server",
          "href": "/how-to-host-mcp-server/",
          "description": "Compare local, private, and remote hosting models."
        },
        {
          "title": "MCP Security Checklist",
          "href": "/mcp-security-checklist/",
          "description": "Review security controls before exposing hosted tools."
        },
        {
          "title": "MCP Server vs API",
          "href": "/mcp-server-vs-api/",
          "description": "Decide whether to build an API wrapper, MCP server, or both."
        }
      ]
    }
];

export function getMcpGuide(slug: string) {
  return mcpGuides.find((guide) => guide.slug === slug);
}
