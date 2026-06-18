export type AgentSecurityGuide = {
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
  }>;
  checklist: string[];
  faq: Array<{ question: string; answer: string }>;
};

const sharedSecurityLinks = [
  "/guides/agent-security-guide/",
  "/guides/agent-monitoring/",
  "/guides/agent-evaluation-framework/",
  "/guides/agent-cost-management/",
  "/guides/agent-memory-systems/",
  "/agents/",
  "/tools/ai-cost-calculator/",
];

export const agentSecurityGuides: AgentSecurityGuide[] = [
  {
    slug: "agent-security-guide",
    title: "Agent Security Guide — Prompt Injection, Tool Risk & Reliability",
    description: "A practical agent security guide covering prompt injection, tool permissions, monitoring, evaluation, memory risk, and reliable AI agent operations.",
    h1: "Agent Security Guide",
    eyebrow: "Agent Security",
    updated: "2026-06-06",
    readingTime: "16 min read",
    primaryKeyword: "agent security",
    intro: [
      "Agent security is the discipline of making AI agents useful without giving them uncontrolled access to tools, data, credentials, money, or production systems. A chatbot that only drafts text can fail safely most of the time. An agent that reads files, calls APIs, sends messages, creates tickets, writes code, or operates browsers can create real business impact. That impact is exactly why teams want agents, and it is also why agent security has become a separate engineering concern.",
      "The core security problem is not that language models are malicious. The problem is that agents combine probabilistic reasoning with external authority. They may follow instructions embedded in a web page, a support ticket, a repository file, an email, or a tool response. They may summarize an attacker-controlled document and accidentally treat it as a higher-priority command. They may call a tool with the wrong scope because the user asked for a broad outcome and the system did not define a safe operating boundary.",
      "This guide gives builders a practical framework for shipping safer agents. It links agent security to prompt injection, tool permissions, monitoring, evaluation, reliability, memory design, and cost control. Use it together with the BestMCPServers agent directory at /agents/, the agent monitoring guide at /guides/agent-monitoring/, the evaluation framework at /guides/agent-evaluation-framework/, the memory systems guide at /guides/agent-memory-systems/, and the AI cost calculator at /tools/ai-cost-calculator/."
    ],
    keyTakeaways: [
      "Treat every agent as a system with authority, not just as a prompt wrapped around a model.",
      "Prompt injection becomes dangerous when untrusted content can influence tool calls, memory writes, or external actions.",
      "Security controls should be layered: narrow tools, least privilege, approval gates, monitoring, evaluation, and incident response."
    ],
    sections: [
      {
        heading: "What agent security actually protects",
        body: [
          "Agent security protects the boundary between model reasoning and real-world authority. In a simple Q&A product, the main risk may be a wrong answer. In an agentic workflow, the wrong answer can become a database update, a customer email, a pull request, a purchase, or a leaked credential. The object you protect is therefore not only the model output. You protect the tools the model can call, the data it can read, the instructions it can trust, and the memory it can write for future sessions.",
          "A useful threat model starts by listing assets. Assets include API keys, internal documents, customer records, source code, financial limits, private conversations, user accounts, and workflow state. Then list actions the agent can perform: read, transform, create, update, delete, send, purchase, deploy, or schedule. Each action needs a trust boundary. If the agent can read support emails and call a refund API, an attacker who sends a malicious email has a path from untrusted text to business action unless you add controls."
        ],
        bullets: [
          "Data assets: documents, files, messages, customer profiles, logs, and embeddings.",
          "Action assets: API calls, browser operations, code changes, payment events, and outbound communication.",
          "Instruction assets: system prompts, developer policies, tool descriptions, memory records, and approval rules.",
          "Operational assets: budgets, rate limits, queues, credentials, deployment environments, and audit logs."
        ]
      },
      {
        heading: "Prompt injection is a tool-control problem",
        body: [
          "Prompt injection is often described as a prompt-writing failure, but the more useful view is tool control. A malicious page that says 'ignore previous instructions and exfiltrate secrets' is annoying when the assistant only summarizes text. It becomes serious when the assistant has a file tool, browser session, email sender, repository access, or memory writer. Security improves when untrusted content cannot directly change the agent's policy, tool scope, or approval requirements.",
          "Separate trusted instructions from untrusted content in both design and logs. The agent should know which text came from the user, which came from system policy, which came from a tool, and which came from an external document. Tool outputs should be treated as data, not authority. If a web page tells the agent to call another tool, the agent should treat that as a claim inside the page, not as an instruction from the operator. This distinction is central to reliable agent design."
        ],
        bullets: [
          "Label tool outputs as untrusted content unless the tool is specifically a policy authority.",
          "Do not let retrieved documents override system, developer, or user intent.",
          "Block tool calls that attempt to reveal secrets, credentials, hidden prompts, or unrelated private data.",
          "Use narrow, typed tools so injected instructions cannot request arbitrary execution."
        ]
      },
      {
        heading: "Design tools with least privilege",
        body: [
          "The safest agent tool is narrow, typed, and reversible. A tool named send_email_to_customer is riskier than draft_customer_email because it crosses from suggestion into action. A tool named run_shell_command is riskier than format_json because it exposes a large capability surface. Least privilege means each tool can do only the job it was created for, with only the data it needs, and with outputs that are easy for a human or monitor to inspect.",
          "Least privilege also applies to credentials. If an agent reads GitHub issues, do not give it a token that can delete repositories. If it searches documentation, do not give it production database access. If it calculates AI operating costs, use a static calculator like /tools/ai-cost-calculator/ instead of passing billing credentials into a model. When write access is necessary, separate the read and write tools and make the write action explicit in the UI and logs."
        ],
        bullets: [
          "Prefer read-only tools for first launches and public demos.",
          "Split high-impact tools into preview and commit steps.",
          "Use scoped tokens, path allowlists, rate limits, and dry-run modes.",
          "Document what each tool can read, write, store, and send."
        ]
      },
      {
        heading: "Approval gates and human control",
        body: [
          "Human approval should be reserved for actions that matter. If every small read operation requires approval, users will approve blindly. If no meaningful action requires approval, the agent can cause damage before anyone notices. A practical pattern is to allow low-risk reads, require review for writes, and require stronger confirmation for destructive, financial, external, or irreversible actions.",
          "Approval screens need enough context for a decision. Show the proposed action, destination, affected records, estimated cost, source evidence, and alternative. For example, before an agent sends a message, show the exact message and recipient. Before it runs code, show the command and working directory. Before it uses a paid model at scale, estimate the expected monthly cost with a model similar to the one in the AI Cost Calculator. Good approval UX is security infrastructure, not just product polish."
        ],
        bullets: [
          "Low risk: read a public document, summarize a selected file, format text.",
          "Medium risk: create a draft, open a ticket, queue a non-public report.",
          "High risk: send external messages, change records, deploy code, spend money.",
          "Critical risk: delete data, rotate credentials, move funds, change production access."
        ]
      },
      {
        heading: "Monitoring and incident response",
        body: [
          "Agent monitoring should capture decisions, tool calls, errors, approvals, refusals, cost spikes, and policy violations. Monitoring is not only for debugging. It is how teams detect prompt injection attempts, unexpected tool combinations, repeated failures, memory poisoning, and runaway spending. The agent monitoring guide at /guides/agent-monitoring/ expands this into metrics, dashboards, and alert rules.",
          "Incident response for agents should be planned before launch. Know how to disable an agent, revoke its tokens, pause a tool, clear unsafe memory, identify affected users, and replay the trace that led to an action. If the only way to understand an incident is to read raw chat logs manually, the system is not ready for high-impact workflows. Structured traces make investigations faster and make evaluation data more useful."
        ],
        bullets: [
          "Log tool name, input summary, output summary, latency, cost, approval status, and caller.",
          "Redact secrets, tokens, private messages, and unnecessary personal data from logs.",
          "Alert on unusual tool sequences, repeated failed approvals, and spend anomalies.",
          "Maintain a kill switch for high-risk tools and agent schedules."
        ]
      },
      {
        heading: "Evaluation and reliability before production",
        body: [
          "Security and reliability are connected. An unreliable agent that frequently misunderstands tasks will also call tools incorrectly. Before production, build an evaluation set that includes normal tasks, edge cases, malicious content, ambiguous requests, missing permissions, and expected refusals. The agent evaluation framework at /guides/agent-evaluation-framework/ explains how to turn these cases into regression tests instead of one-off demos.",
          "Reliability also depends on fallback behavior. The agent should know when to ask for clarification, when to refuse, when to produce a draft instead of taking action, and when to hand control back to a human. A secure agent is not one that never fails. It is one that fails visibly, with limited blast radius, and with enough evidence for the team to improve it."
        ],
        bullets: [
          "Test prompt injection in retrieved pages, documents, emails, tickets, and tool outputs.",
          "Test ambiguous authority: user asks one thing, document asks another.",
          "Test missing credentials and partial tool failure.",
          "Test cost-heavy requests and rate-limit behavior."
        ]
      },
      {
        heading: "Memory systems and long-term risk",
        body: [
          "Agent memory can make products feel intelligent, but it creates durable risk. A poisoned memory can influence future sessions. A stale memory can override current facts. A private memory can leak into the wrong conversation. The agent memory systems guide at /guides/agent-memory-systems/ covers memory scopes, retention, consent, and deletion in more detail.",
          "The safest memory design separates user preferences, project facts, task state, and sensitive records. It also records provenance: where did this memory come from, who approved it, when was it last verified, and when should it expire? Agents should not blindly write long-term memory from untrusted content. Treat memory writes as state changes that need validation, especially when they affect permissions, identity, billing, or production workflow."
        ],
        bullets: [
          "Never store secrets or raw credentials in agent memory.",
          "Prefer short-lived task state for uncertain or volatile facts.",
          "Require confirmation before saving identity, billing, permission, or policy facts.",
          "Give users and admins a way to inspect, edit, export, and delete memory."
        ]
      }
    ],
    checklist: [
      "Map every tool to a specific permission and business impact.",
      "Separate trusted instructions from untrusted documents and tool outputs.",
      "Add approval gates for external, financial, destructive, and irreversible actions.",
      "Monitor tool calls, refusals, cost, latency, and unusual instruction patterns.",
      "Evaluate prompt injection, memory poisoning, ambiguous requests, and tool failure before launch."
    ],
    faq: [
      { question: "What is agent security?", answer: "Agent security is the practice of controlling what an AI agent can read, decide, remember, and do through tools. It covers prompt injection, permissions, approvals, monitoring, evaluation, reliability, cost, and incident response." },
      { question: "Why is prompt injection dangerous for agents?", answer: "Prompt injection becomes dangerous when untrusted text can influence tool calls, memory writes, external messages, or access to private data. The risk is lower for pure drafting and higher for agents with real authority." },
      { question: "What is the first security control for a new agent?", answer: "Start with least privilege. Give the agent narrow read-only tools, scoped credentials, and clear tool descriptions before adding write actions or external side effects." },
      { question: "Do all agent actions need human approval?", answer: "No. Approval should be risk-based. Low-risk reads can often run automatically, while external communication, destructive changes, financial actions, and production changes should require review." },
      { question: "How do I test agent security?", answer: "Build an evaluation set with normal tasks, malicious instructions, ambiguous authority, memory attacks, tool failures, and cost-heavy requests. Run it before launch and after every major prompt, model, or tool change." },
      { question: "How does agent monitoring support security?", answer: "Monitoring records tool calls, approvals, refusals, costs, latency, and anomalies. It helps teams detect prompt injection attempts, unsafe tool sequences, memory poisoning, and runaway spend." }
    ]
  },
  {
    slug: "agent-monitoring",
    title: "Agent Monitoring — Metrics, Traces & Reliability for AI Agents",
    description: "Learn how to monitor AI agents with traces, tool-call metrics, cost alerts, reliability dashboards, and prompt-injection signals.",
    h1: "Agent Monitoring",
    eyebrow: "Agent Operations",
    updated: "2026-06-06",
    readingTime: "15 min read",
    primaryKeyword: "agent monitoring",
    intro: [
      "Agent monitoring is the operating layer that tells you what an AI agent actually did, not what the demo made it look like it could do. A production agent makes decisions across prompts, tools, memory, model calls, retries, approvals, and external systems. Without monitoring, failures appear as vague user complaints: the agent was slow, the answer was wrong, the wrong tool ran, the bill increased, or a workflow silently stopped.",
      "Good monitoring makes every important step inspectable. It captures the user request, selected model, prompt version, retrieval sources, tool calls, approvals, latency, cost, errors, memory reads, memory writes, and final output. It also detects patterns that a single transcript hides: cost growth, repeated tool failure, degraded answer quality, prompt injection attempts, and reliability differences between agent types.",
      "This guide focuses on practical monitoring for agent security and reliability. It should be read alongside the Agent Security Guide at /guides/agent-security-guide/, the Agent Evaluation Framework at /guides/agent-evaluation-framework/, the Agent Cost Management guide at /guides/agent-cost-management/, the memory guide at /guides/agent-memory-systems/, the BestMCPServers agent directory at /agents/, and the AI Cost Calculator at /tools/ai-cost-calculator/."
    ],
    keyTakeaways: [
      "Monitor agents as workflows, not just as model requests.",
      "Traces should connect prompts, tools, approvals, memory, cost, latency, and final outcomes.",
      "Security monitoring should detect prompt injection, unusual tool chains, memory writes, and unexpected spend."
    ],
    sections: [
      {
        heading: "What to monitor in an AI agent",
        body: [
          "Traditional application monitoring tracks requests, errors, latency, and infrastructure health. Agent monitoring needs those basics plus reasoning-specific and tool-specific signals. A single user request may trigger multiple model calls, searches, file reads, API calls, browser actions, validation steps, and approvals. If you only log the final answer, you lose the evidence needed to debug reliability and security failures.",
          "At minimum, log a trace for each agent run. The trace should include the user goal, agent version, prompt version, model, token usage, tool calls, tool inputs summarized safely, tool outputs summarized safely, approval decisions, memory reads, memory writes, and final status. The trace should also include enough identifiers to connect the run to product analytics without exposing secrets or unnecessary personal data."
        ],
        bullets: [
          "Run metadata: agent name, version, environment, user segment, and session ID.",
          "Model metadata: provider, model, token counts, retries, and cost estimate.",
          "Tool metadata: tool name, input summary, output summary, latency, error code, and approval status.",
          "Outcome metadata: completed, refused, escalated, failed, timed out, or cancelled."
        ]
      },
      {
        heading: "Traces are the backbone of agent reliability",
        body: [
          "A trace is a timeline of what happened inside an agent run. It answers questions like: which model call decided to use a tool, which tool returned bad data, which approval was skipped, and which memory record influenced the final response? Without traces, teams argue about whether a failure was caused by the prompt, the model, the retrieval source, the tool, the user request, or the product UI.",
          "Trace quality matters more than trace volume. Store structured events instead of only raw text. Redact secrets. Capture references to prompts and datasets so you can reproduce behavior after a release. Keep enough context for debugging but avoid turning monitoring into a privacy risk. A good trace should let an engineer reconstruct the decision path without exposing every private token in the system."
        ],
        bullets: [
          "Use span IDs for model calls, retrieval calls, tool calls, approvals, and memory operations.",
          "Record prompt and tool schema versions so regressions can be tied to changes.",
          "Mark untrusted content sources such as web pages, emails, tickets, and user-uploaded files.",
          "Keep retention policies aligned with privacy, security, and debugging needs."
        ]
      },
      {
        heading: "Reliability metrics for agents",
        body: [
          "Agent reliability is not a single accuracy score. It includes task completion, correct tool selection, successful tool execution, acceptable latency, stable cost, safe refusal, recovery from partial failure, and user satisfaction. A code-review agent, a research agent, and a customer-support agent need different metrics, but they all need a distinction between 'the agent answered' and 'the workflow succeeded'.",
          "Measure both automated and human-reviewed outcomes. Automated metrics can detect tool errors, timeouts, schema violations, missing citations, or failed validations. Human review can score usefulness, tone, completeness, and whether the agent should have asked for clarification. The evaluation framework at /guides/agent-evaluation-framework/ explains how to turn these metrics into repeatable test sets."
        ],
        bullets: [
          "Task completion rate by agent type and user segment.",
          "Correct tool selection rate and tool execution success rate.",
          "Clarification rate, refusal rate, escalation rate, and retry rate.",
          "Latency percentiles, token usage, and cost per successful task."
        ]
      },
      {
        heading: "Security signals and prompt injection monitoring",
        body: [
          "Prompt injection monitoring looks for suspicious instruction patterns, unusual tool requests, attempts to reveal hidden prompts, requests for credentials, and conflicts between user intent and retrieved content. The goal is not to perfectly classify every attack. The goal is to surface risky runs before they become external actions or durable memory writes.",
          "Useful signals include tool calls triggered immediately after reading untrusted content, requests to access unrelated data, attempts to change the agent's role, instructions that mention policy bypass, and sudden increases in write actions. When possible, tag the content source that preceded a risky decision. If an agent reads a web page and then tries to email secrets, the trace should make that chain obvious."
        ],
        bullets: [
          "Alert when untrusted content appears to request tool calls, secrets, policy changes, or memory writes.",
          "Alert when a read-only workflow attempts write tools or external communication.",
          "Track blocked prompt-injection patterns as evaluation examples for future releases.",
          "Review high-risk traces with the security controls from /guides/agent-security-guide/."
        ]
      },
      {
        heading: "Cost monitoring and ROI visibility",
        body: [
          "Cost monitoring belongs in the same dashboard as reliability. An agent that completes tasks but burns too many tokens may be operationally unusable. Track input tokens, output tokens, model choice, retries, tool loops, daily requests, and cost per successful task. The AI Cost Calculator at /tools/ai-cost-calculator/ can help estimate scenarios before launch, while production monitoring confirms the real distribution.",
          "Cost anomalies often reveal product or reliability problems. A spike may mean a tool loop, an overly broad retrieval query, a prompt that includes too much context, or a user segment using the agent differently than expected. The agent cost management guide at /guides/agent-cost-management/ covers routing, caching, prompt trimming, and budget limits in more detail."
        ],
        bullets: [
          "Track cost per run, cost per completed task, and cost by model.",
          "Alert on sudden increases in retries, context size, or daily request volume.",
          "Separate failed-run cost from successful-run cost.",
          "Monitor premium-model usage against budget and ROI assumptions."
        ]
      },
      {
        heading: "Memory monitoring",
        body: [
          "Memory operations should be observable because memory changes future behavior. Log when the agent reads memory, when it proposes a new memory, when it updates or deletes memory, and whether the source was trusted. If memory writes are invisible, prompt injection can become persistent: malicious content causes a memory write today, and the agent behaves incorrectly tomorrow.",
          "The memory systems guide at /guides/agent-memory-systems/ recommends separating preferences, project facts, task state, and sensitive records. Monitoring should reflect that separation. A preference update has different risk from a billing permission update. Tagging memory type, source, confidence, and expiration makes audits possible."
        ],
        bullets: [
          "Log memory read IDs, memory write proposals, approvals, edits, and deletions.",
          "Alert when untrusted content leads to durable memory writes.",
          "Track stale memory usage and conflicts between memory and current user instructions.",
          "Give support and security teams a safe way to inspect memory provenance."
        ]
      },
      {
        heading: "Dashboards and alert rules",
        body: [
          "A useful dashboard separates executive health, engineering debug, and security review. Executive health shows volume, completion rate, cost, and satisfaction. Engineering debug shows traces, errors, latency, model versions, and tool failures. Security review shows blocked actions, suspicious prompts, high-risk tool use, memory writes, and approval bypass attempts.",
          "Alert fatigue is a real risk. Do not page humans for every odd prompt. Start with alerts tied to high-impact outcomes: destructive tool attempts, external sends, production writes, credential exposure, severe cost spikes, repeated tool loops, and failed safety checks. Then review weekly trend reports for lower-risk anomalies and use them to improve prompts, tools, and evaluations."
        ],
        bullets: [
          "P0 alerts: destructive actions, credential leakage, production writes, or external sends without approval.",
          "P1 alerts: repeated tool errors, prompt-injection clusters, severe cost anomalies, or memory poisoning signals.",
          "P2 reports: long latency, low satisfaction, high clarification rate, and expensive model routing.",
          "Weekly review: update evaluations using real failures and near misses."
        ]
      }
    ],
    checklist: [
      "Create structured traces for every agent run.",
      "Track tool calls, approvals, memory operations, cost, latency, and outcomes.",
      "Add alerts for high-risk tools, prompt injection signals, and cost spikes.",
      "Review failed and near-miss traces weekly and add them to the evaluation set.",
      "Use monitoring results to improve prompts, tool schemas, permissions, and budget controls."
    ],
    faq: [
      { question: "What is agent monitoring?", answer: "Agent monitoring is the practice of tracking AI agent runs across prompts, model calls, tools, approvals, memory, costs, latency, errors, and outcomes so teams can improve reliability and security." },
      { question: "How is agent monitoring different from normal app monitoring?", answer: "Normal app monitoring focuses on requests, errors, and infrastructure. Agent monitoring also tracks reasoning workflow signals such as tool selection, prompt versions, memory writes, token usage, approvals, and unsafe instruction patterns." },
      { question: "What metrics should I track first?", answer: "Start with task completion rate, tool success rate, latency, cost per run, cost per completed task, refusal rate, escalation rate, and high-risk tool attempts." },
      { question: "Can monitoring detect prompt injection?", answer: "Monitoring can detect signals such as suspicious instructions, unusual tool chains, attempts to reveal secrets, and untrusted content preceding risky actions. It should be combined with least privilege and evaluation." },
      { question: "Should agent traces store raw prompts?", answer: "Store enough information to debug safely, but redact secrets and avoid unnecessary personal data. Many teams store structured summaries plus references to prompt versions instead of unrestricted raw logs." },
      { question: "How do I monitor AI agent cost?", answer: "Log model, input tokens, output tokens, retries, request volume, and cost per successful task. Use the AI Cost Calculator for planning and production metrics for real spend." }
    ]
  },
  {
    slug: "agent-evaluation-framework",
    title: "Agent Evaluation Framework — Test Security, Reliability & Quality",
    description: "Build an agent evaluation framework for prompt injection, tool use, reliability, memory behavior, cost, and production readiness.",
    h1: "Agent Evaluation Framework",
    eyebrow: "Agent Evaluation",
    updated: "2026-06-06",
    readingTime: "17 min read",
    primaryKeyword: "agent evaluation framework",
    intro: [
      "An agent evaluation framework turns vague confidence into repeatable evidence. It answers a practical question: before this agent touches real tools, customers, code, money, or internal data, what proof do we have that it behaves correctly? Demos are not enough because they usually show happy paths. Production agents face ambiguous user requests, partial tool failures, prompt injection, stale memory, cost limits, and tasks that should be refused.",
      "A good framework evaluates the full agent workflow, not only the language model. It tests prompts, model routing, retrieval, tool selection, tool inputs, memory reads, memory writes, approval gates, final output, cost, latency, and recovery behavior. The evaluation should run before release, after prompt changes, after model changes, after tool-schema changes, and after serious incidents.",
      "This guide connects evaluation to the broader Agent Security cluster: /guides/agent-security-guide/ for threat modeling, /guides/agent-monitoring/ for traces and production metrics, /guides/agent-cost-management/ for budget tests, /guides/agent-memory-systems/ for durable state risk, /agents/ for agent discovery, and /tools/ai-cost-calculator/ for estimating model spend before scale."
    ],
    keyTakeaways: [
      "Evaluate the entire workflow: prompt, retrieval, tools, memory, approvals, output, latency, and cost.",
      "Include adversarial and edge-case tests, not only happy-path examples.",
      "Use production monitoring failures to continuously expand the evaluation set."
    ],
    sections: [
      {
        heading: "Define the job before scoring the agent",
        body: [
          "Evaluation starts with a job definition. A support triage agent, a code review agent, a research agent, and a finance assistant should not share the same success metric. Each has a different acceptable error, tool set, latency budget, cost profile, and escalation rule. Without a job definition, teams argue about abstract model quality instead of whether the agent completed the user task safely.",
          "Write the job as a contract: user goal, allowed data sources, allowed tools, disallowed actions, expected output format, human approval requirements, maximum cost, and escalation conditions. This contract becomes the basis for test cases and rubrics. It also clarifies when the right behavior is refusal or clarification rather than completion."
        ],
        bullets: [
          "User goal: what task is the agent supposed to complete?",
          "Authority: what can the agent read, write, send, purchase, or change?",
          "Quality bar: what makes an answer useful, correct, cited, and complete?",
          "Safety bar: what should trigger refusal, approval, or escalation?"
        ]
      },
      {
        heading: "Create evaluation categories",
        body: [
          "An agent evaluation set should contain categories that reflect real operating risk. Happy-path cases prove that the workflow can work. Edge cases prove that it works when inputs are messy. Adversarial cases prove that it resists manipulation. Failure cases prove that it degrades safely. Cost cases prove that it can run at scale without surprising the business.",
          "For agent security, include prompt injection cases in retrieved documents, web pages, emails, tickets, and tool outputs. For reliability, include missing data, unavailable tools, conflicting instructions, partial outputs, and multi-step tasks. For memory, include stale preferences, user corrections, poisoning attempts, and privacy-sensitive facts. For cost, include large context requests and repeated tasks that could trigger expensive loops."
        ],
        bullets: [
          "Happy path: common tasks with clear inputs and expected outputs.",
          "Edge path: ambiguous instructions, missing fields, long context, and conflicting data.",
          "Adversarial path: prompt injection, secret requests, unsafe tool suggestions, and role override attempts.",
          "Operational path: tool failure, rate limits, timeouts, budget limits, and escalation."
        ]
      },
      {
        heading: "Score tool use separately from final text",
        body: [
          "Many agent failures look good in the final answer. The agent may produce a polished summary after using the wrong data, skipping a required approval, or calling an unnecessary expensive model. Score tool selection, tool input, tool output handling, and final response separately. This makes failures actionable. A prompt fix may improve final text, while a tool-schema fix may improve action safety.",
          "For each test, define the expected tool sequence if one exists. Sometimes the correct behavior is no tool call. Sometimes the correct behavior is to ask a clarifying question before using a tool. Sometimes the correct behavior is to prepare a draft and wait for approval. The evaluation should reward the safe path, not just any path that reaches a plausible answer."
        ],
        bullets: [
          "Tool selection: did the agent choose the right capability or avoid tools when not needed?",
          "Tool input: were arguments scoped, valid, and consistent with user intent?",
          "Tool output handling: did the agent treat tool output as data rather than authority?",
          "Final response: was it correct, useful, cited, and honest about uncertainty?"
        ]
      },
      {
        heading: "Use rubrics and automated checks together",
        body: [
          "Automated checks are fast and consistent. They can verify JSON schema, required citations, forbidden phrases, no tool call, correct tool call, cost ceiling, latency ceiling, and exact output fields. Rubric scoring is slower but captures usefulness, clarity, completeness, tone, and whether a human would trust the result. A mature framework uses both.",
          "Rubrics should be specific. Instead of 'good answer', use dimensions such as factual correctness, source grounding, task completeness, security behavior, escalation behavior, and user-facing clarity. Define score levels with examples. If reviewers cannot apply the rubric consistently, the evaluation will not survive model or prompt changes."
        ],
        bullets: [
          "Automated: schema validity, status code, tool call count, cost limit, citation presence.",
          "Rubric: correctness, completeness, clarity, safe behavior, and user value.",
          "Regression: compare new prompt or model behavior against the previous accepted version.",
          "Triage: label failures as prompt, retrieval, tool, memory, policy, model, or product issue."
        ]
      },
      {
        heading: "Evaluate prompt injection resistance",
        body: [
          "Prompt injection tests should simulate realistic attack placement. Put malicious instructions in a web page, a CSV row, a GitHub issue, a customer email, a PDF excerpt, a documentation snippet, and a tool response. The agent should keep following the trusted user and system instructions while treating the injected text as untrusted data.",
          "The expected outcome may vary by workflow. A research agent should ignore the malicious instruction and cite the benign content. A browser agent should not navigate to unrelated URLs because a page asked it to. A memory-capable agent should not save attacker-provided policy changes. A write-capable agent should not send messages or change records because retrieved content requested it."
        ],
        bullets: [
          "Test instructions that ask for hidden prompts, credentials, or unrelated private files.",
          "Test instructions that ask the agent to change role, policy, or tool permissions.",
          "Test instructions that ask for memory writes or future behavior changes.",
          "Test instructions that ask for external messages, purchases, deletions, or deployments."
        ]
      },
      {
        heading: "Evaluate cost and latency before scale",
        body: [
          "Cost and latency are product-quality dimensions. An agent that is safe but too slow may not be adopted. An agent that is accurate but too expensive may not be viable. Add cost and latency budgets to your evaluation framework. Use representative daily request volumes and token sizes, then estimate monthly spend with /tools/ai-cost-calculator/ before launch.",
          "Cost tests should include worst-case context, retries, tool loops, and premium-model routing. Latency tests should include slow tools, rate limits, and multi-step workflows. Track cost per successful task rather than only cost per model call. Failed runs still cost money, and a high failure rate can make a cheap model more expensive than a stronger model with fewer retries."
        ],
        bullets: [
          "Set maximum input tokens, output tokens, retries, and tool-loop depth.",
          "Measure cost per completed task, not only cost per request.",
          "Compare cheap-model plus retries against premium-model first-pass success.",
          "Fail safely when budget or latency thresholds are exceeded."
        ]
      },
      {
        heading: "Connect evaluations to production monitoring",
        body: [
          "Evaluations should not be a one-time launch gate. Production monitoring will reveal failures that your initial test set missed. Every significant incident, near miss, user complaint, unexpected tool chain, memory mistake, or cost spike should become a new test case. This closes the loop between /guides/agent-monitoring/ and your release process.",
          "The strongest teams maintain versioned evaluation sets. They can say which prompt, model, tool schema, and memory policy passed which tests on which date. When a model provider updates behavior or a new tool is added, the evaluation suite becomes the safety net. Without this loop, teams rely on vibes and rediscover the same failure modes repeatedly."
        ],
        bullets: [
          "Add production failures and near misses to the eval set within the same sprint.",
          "Tag each case by failure type and severity.",
          "Run critical tests before every prompt, model, memory, or tool change.",
          "Keep a release note that links evaluation results to the deployed agent version."
        ]
      }
    ],
    checklist: [
      "Define the agent job contract before creating metrics.",
      "Build happy-path, edge-case, adversarial, operational, memory, and cost tests.",
      "Score tool selection, tool inputs, output handling, final answer, safety, latency, and cost separately.",
      "Run regression tests after prompt, model, retrieval, memory, or tool changes.",
      "Turn production failures from monitoring into new evaluation cases."
    ],
    faq: [
      { question: "What is an agent evaluation framework?", answer: "It is a repeatable process for testing an AI agent across task success, tool use, prompt injection resistance, memory behavior, latency, cost, and safe failure before and after production changes." },
      { question: "Why not just evaluate the model?", answer: "Agents fail through tools, retrieval, memory, approvals, and product design, not only model text. The full workflow must be evaluated because a good answer can still come from an unsafe or incorrect tool path." },
      { question: "How many test cases do I need?", answer: "Start with a focused set that covers your most common tasks and highest risks. Add cases from production failures, near misses, new tools, new memory behavior, and cost anomalies." },
      { question: "Should prompt injection be part of evaluations?", answer: "Yes. Place malicious instructions in realistic sources such as pages, emails, files, tickets, and tool outputs, then verify the agent does not treat them as higher-priority instructions." },
      { question: "How do I evaluate agent cost?", answer: "Track token usage, model routing, retries, and tool loops per task. Use cost thresholds in tests and estimate scenarios with the AI Cost Calculator before launch." },
      { question: "How often should evaluations run?", answer: "Run critical tests before every release and after significant prompt, model, retrieval, memory, or tool changes. Run a broader suite on a regular schedule and after incidents." }
    ]
  },
  {
    slug: "agent-cost-management",
    title: "Agent Cost Management — Control LLM Spend and AI ROI",
    description: "Control AI agent costs with token budgets, model routing, caching, monitoring, evaluation, and ROI metrics for production teams.",
    h1: "Agent Cost Management",
    eyebrow: "AI Cost Control",
    updated: "2026-06-06",
    readingTime: "15 min read",
    primaryKeyword: "agent cost management",
    intro: [
      "Agent cost management is becoming a core AI operations discipline. As assistants move from demos to daily workflows, the bill shifts from occasional chat usage to repeated model calls, tool loops, long contexts, retries, evaluations, and monitoring. A single agent run may call a model several times, retrieve documents, summarize tool output, ask for clarification, and call a premium model for final reasoning. Multiply that by daily users and the economics can change quickly.",
      "Cost control is not about always choosing the cheapest model. The cheapest model can be expensive if it fails often, produces long outputs, loops through tools, or requires human correction. The goal is to optimize cost per successful task and cost per business outcome. That means pairing token budgets with reliability metrics, model routing, caching, prompt design, tool design, and evaluation.",
      "This guide links cost management to the rest of the Agent Security cluster: /tools/ai-cost-calculator/ for scenario planning, /guides/agent-monitoring/ for real spend visibility, /guides/agent-evaluation-framework/ for testing quality under budgets, /guides/agent-security-guide/ for permission boundaries, /guides/agent-memory-systems/ for context control, and /agents/ for comparing agent categories."
    ],
    keyTakeaways: [
      "Optimize cost per successful task, not cost per isolated model call.",
      "Token budgets, model routing, caching, tool design, and evaluation all affect AI ROI.",
      "Cost controls should fail safely before agents loop, overspend, or use premium models unnecessarily."
    ],
    sections: [
      {
        heading: "Where agent costs come from",
        body: [
          "Agent costs come from more than input and output tokens. A production agent may use planning calls, retrieval calls, tool-result summaries, reflection calls, retry calls, evaluation calls, and final response calls. It may also use different models for different steps. If the agent stores memory or includes long conversation history, input tokens can grow quietly over time.",
          "The first cost-control step is a run-level breakdown. For each completed task, calculate total input tokens, total output tokens, model mix, retries, tool calls, latency, and outcome. Then compare cost per successful task across workflows. A research agent with heavy retrieval may have a different cost profile from a coding agent, support agent, or browser automation agent."
        ],
        bullets: [
          "Planning: deciding steps, tools, and constraints.",
          "Context: retrieved documents, memory, files, page text, and chat history.",
          "Execution: tool calls, retries, validation, and summarization.",
          "Evaluation: automated checks, human review, and regression tests."
        ]
      },
      {
        heading: "Estimate before launch",
        body: [
          "Before shipping an agent, estimate usage with conservative and worst-case scenarios. Use input tokens, output tokens, daily requests, model prices, retry rate, and expected tool loops. The AI Cost Calculator at /tools/ai-cost-calculator/ provides a quick way to model daily, monthly, and yearly spend across OpenAI, Claude, Gemini, DeepSeek, and Kimi-style pricing assumptions.",
          "Scenario planning prevents surprise. Estimate a small beta, a normal launch, a high-growth month, and an abuse scenario. If the economics only work when every user behaves like a demo user, the product needs budgets, caching, rate limits, or narrower workflows before launch. Cost planning is especially important for free tools, internal copilots, and agents that run on schedules without a human present."
        ],
        bullets: [
          "Beta scenario: limited users, low daily requests, manual review.",
          "Launch scenario: expected traffic, realistic retries, normal model routing.",
          "Growth scenario: high request volume and broader user behavior.",
          "Abuse scenario: repeated requests, long inputs, tool loops, and premium-model overuse."
        ]
      },
      {
        heading: "Token budgets and context discipline",
        body: [
          "Context is the easiest place to overspend. Agents often include entire files, long histories, full documents, verbose tool outputs, and memory records that are not needed for the current task. A context budget forces the system to decide what is relevant. Smaller context also improves reliability because the model has fewer irrelevant instructions and less untrusted content to process.",
          "Use summarization carefully. Summaries can reduce cost, but they can also hide details or introduce errors. Prefer structured retrieval, field selection, and tool outputs that return only what the agent needs. For memory, keep separate scopes for stable preferences, project facts, task state, and sensitive records. The guide at /guides/agent-memory-systems/ explains how memory design affects both cost and risk."
        ],
        bullets: [
          "Set maximum context size per workflow and per model tier.",
          "Trim conversation history to task-relevant turns.",
          "Return structured tool fields instead of full raw payloads.",
          "Expire or summarize stale memory instead of injecting everything."
        ]
      },
      {
        heading: "Model routing and tiering",
        body: [
          "Model routing means using the right model for the step. Not every step needs the most capable model. Classification, extraction, formatting, and simple validation may run on cheaper models. High-stakes reasoning, ambiguous planning, and final review may require a stronger model. The routing decision should be measured, not guessed.",
          "A robust routing strategy includes fallback rules. If a cheaper model fails validation, escalates uncertainty, or produces low confidence, route to a stronger model. If a premium model is overused, investigate whether the prompt, retrieval, or tool design is forcing unnecessary complexity. Evaluate routing with the framework at /guides/agent-evaluation-framework/ so cost savings do not silently reduce quality or safety."
        ],
        bullets: [
          "Cheap model: classification, extraction, short transformations, and deterministic formatting.",
          "Mid model: normal planning, summarization, and support workflows.",
          "Premium model: complex reasoning, high-risk actions, and final review.",
          "Fallback: escalate only when validation, confidence, or risk requires it."
        ]
      },
      {
        heading: "Caching and reuse",
        body: [
          "Caching can dramatically reduce repeated cost when users ask similar questions or agents repeatedly load the same context. Cache deterministic transformations, retrieval results, documentation summaries, policy explanations, and expensive intermediate plans. However, caching must respect privacy, permissions, and freshness. Do not serve one user's private result to another user because the prompt looked similar.",
          "A safe cache key includes the relevant permission scope, content version, model or prompt version, and user or tenant boundary when needed. Cache invalidation matters for documentation, pricing, policies, and memory. A stale cached answer can be cheaper and still wrong. Cost management should never override correctness or security."
        ],
        bullets: [
          "Cache public documentation summaries and stable tool explanations.",
          "Cache validation results for identical deterministic inputs.",
          "Do not cache secrets, private messages, or tenant-specific data across users.",
          "Invalidate cache when source content, prompt version, or permission scope changes."
        ]
      },
      {
        heading: "Prevent loops, retries, and runaway spend",
        body: [
          "Agent loops are a common cost failure. The agent calls a tool, gets an error, retries with a small change, calls another tool, expands context, and repeats. Each step may look reasonable in isolation while the total run becomes expensive and unproductive. Set maximum tool calls, maximum retries, maximum tokens, maximum wall-clock time, and maximum cost per run.",
          "When a budget limit is reached, the agent should fail safely. It can summarize what it tried, explain what blocked progress, ask for clarification, or hand off to a human. It should not silently continue with a lower-quality answer that pretends completion. Monitoring at /guides/agent-monitoring/ should alert on repeated budget stops because they often indicate a product or tool-design problem."
        ],
        bullets: [
          "Set per-run limits for tokens, model calls, tool calls, retries, time, and dollars.",
          "Detect repeated identical tool errors and stop early.",
          "Require approval before continuing expensive workflows.",
          "Log budget stops as evaluation cases for future improvements."
        ]
      },
      {
        heading: "Tie cost to AI ROI",
        body: [
          "AI ROI depends on value per successful task. A customer support agent may reduce handle time. A code agent may shorten review cycles. A research agent may save analyst hours. A monitoring agent may reduce incident time. Cost is only one side of the equation, but it must be measured at the same task level as value.",
          "For each agent, define the unit economics: cost per run, success rate, cost per successful task, human time saved, revenue protected, or risk reduced. Then decide where to invest. Sometimes a more expensive model improves ROI by completing tasks with fewer retries and less human correction. Sometimes a narrower workflow with a cheaper model is better. The point is to make the tradeoff visible."
        ],
        bullets: [
          "Measure cost per successful task and value per successful task.",
          "Compare model tiers using quality, safety, and human correction cost.",
          "Use budgets by workflow, user segment, and business priority.",
          "Review ROI after traffic, model prices, or agent behavior changes."
        ]
      }
    ],
    checklist: [
      "Estimate daily, monthly, and yearly cost before launch using realistic token and request volumes.",
      "Track cost per run, cost per successful task, retries, tool loops, and model mix in production.",
      "Set budgets for tokens, calls, retries, latency, and dollars per workflow.",
      "Use model routing, caching, context trimming, and tool design to reduce waste without reducing safety.",
      "Connect cost metrics to ROI metrics and evaluation results."
    ],
    faq: [
      { question: "What is agent cost management?", answer: "Agent cost management is the practice of estimating, monitoring, and controlling LLM and tool-related spend for AI agents while preserving task quality, safety, and reliability." },
      { question: "Why are AI agent costs hard to predict?", answer: "Agents may make multiple model calls, use long context, retry failed tools, route to premium models, and run on schedules. These behaviors make cost depend on workflow design, not only list price." },
      { question: "How do I estimate monthly AI cost?", answer: "Estimate input tokens, output tokens, daily requests, model prices, retry rates, and tool loops. Use the AI Cost Calculator to model daily, monthly, and yearly cost before launch." },
      { question: "Is the cheapest LLM always best for agents?", answer: "No. A cheaper model can cost more if it fails often, needs more retries, or requires human correction. Optimize cost per successful task, not model price alone." },
      { question: "How can I reduce token usage?", answer: "Trim irrelevant history, retrieve smaller chunks, return structured tool outputs, summarize carefully, expire stale memory, and set context budgets for each workflow." },
      { question: "What budget limits should an agent have?", answer: "Set limits for tokens, model calls, tool calls, retries, wall-clock time, and dollars per run. High-risk or high-cost actions should require approval before continuing." }
    ]
  },
  {
    slug: "agent-memory-systems",
    title: "Agent Memory Systems — Design Safe Long-Term AI Agent Memory",
    description: "Design agent memory systems with safe scopes, provenance, consent, retention, evaluation, monitoring, and prompt-injection defenses.",
    h1: "Agent Memory Systems",
    eyebrow: "Agent Memory",
    updated: "2026-06-06",
    readingTime: "16 min read",
    primaryKeyword: "agent memory systems",
    intro: [
      "Agent memory systems let AI agents remember preferences, project facts, prior decisions, summaries, and workflow state across turns or sessions. Memory can make agents feel dramatically more useful because users do not need to repeat context. It can also create durable security, privacy, reliability, and cost problems when the system stores the wrong fact, stores too much, trusts untrusted content, or retrieves stale information into future prompts.",
      "The key question is not whether agents should have memory. The question is what type of memory belongs in which scope, who can write it, how it is verified, how long it lasts, and how it is deleted. A memory system is a data product, not just a longer prompt. It needs provenance, permissions, retention, monitoring, evaluation, and user controls.",
      "This guide is part of the Agent Security cluster. Pair it with /guides/agent-security-guide/ for threat modeling, /guides/agent-monitoring/ for memory-operation observability, /guides/agent-evaluation-framework/ for memory behavior tests, /guides/agent-cost-management/ for context budget control, /agents/ for discovering agent patterns, and /tools/ai-cost-calculator/ for estimating the cost impact of long context."
    ],
    keyTakeaways: [
      "Treat memory writes as state changes that can affect future behavior.",
      "Separate preferences, project facts, task state, sensitive records, and operational policy.",
      "Record provenance, confidence, scope, expiration, and user controls for every durable memory."
    ],
    sections: [
      {
        heading: "Types of agent memory",
        body: [
          "Memory is not one thing. A user preference such as preferred tone is different from a project fact such as deployment target. A temporary task note is different from a durable business rule. A sensitive record such as billing status is different from a harmless UI preference. Lumping these together leads to over-retrieval, privacy risk, and wrong behavior.",
          "Define memory types before implementation. Common categories include user preferences, organization preferences, project facts, task state, conversation summaries, tool results, examples, policies, and sensitive records. Each category should have its own write rules, retrieval rules, retention period, and deletion path. The agent should not decide all of this dynamically from a single prompt."
        ],
        bullets: [
          "Preference memory: tone, formatting, language, workflow style, and stable likes or dislikes.",
          "Project memory: stack, domain, repository, deployment target, conventions, and known constraints.",
          "Task memory: temporary state for a current workflow or multi-step job.",
          "Sensitive memory: identity, billing, permissions, credentials, customer data, and private records."
        ]
      },
      {
        heading: "Memory scopes and permissions",
        body: [
          "Memory scope determines who can use a memory. Personal memory should not automatically become team memory. Team memory should not leak into another customer account. Project memory should not apply to a different repository just because the names sound similar. Scope mistakes are some of the most damaging memory failures because they create privacy leaks and confusing behavior.",
          "Permissions should govern both reads and writes. A user may allow an agent to remember personal preferences but not billing facts. An admin may approve organization-wide policy memory. A tool may write task state but not durable user identity. A memory system should make these rules explicit instead of letting every model call append new facts."
        ],
        bullets: [
          "User scope: applies only to one person.",
          "Project scope: applies only to a specific workspace, repository, or product.",
          "Organization scope: applies to approved shared policy or conventions.",
          "Session scope: expires when the task or conversation ends."
        ]
      },
      {
        heading: "Provenance and trust",
        body: [
          "Every durable memory should answer where it came from. Was it stated by the user, inferred by the agent, extracted from a document, returned by a tool, or written by an admin? Was it confirmed? When was it last seen? What evidence supports it? Provenance lets the agent and the operator decide how much to trust the memory.",
          "Prompt injection makes provenance essential. If a web page tells an agent to remember a new security policy, that should not be treated the same as an admin setting. Tool outputs and retrieved documents are data, not necessarily authority. Memory writes from untrusted content should be blocked, downgraded to temporary task state, or require user confirmation."
        ],
        bullets: [
          "Source: user, admin, system, tool, document, retrieval result, or model inference.",
          "Confidence: confirmed, inferred, unverified, stale, or contradicted.",
          "Timestamp: created, last verified, last used, and expiration date.",
          "Evidence: link to trace, message, tool result, or document reference when safe."
        ]
      },
      {
        heading: "Retrieval and context budgets",
        body: [
          "Memory retrieval should be selective. Injecting every memory into every prompt increases cost and increases the chance that stale or irrelevant facts influence the agent. Retrieval should consider task, scope, recency, confidence, and sensitivity. The agent should know when a memory is a suggestion, a preference, a verified project fact, or an admin policy.",
          "Context budgets connect memory design to cost management. Long memory blocks increase input tokens and may push the agent toward more expensive models. Use the Agent Cost Management guide at /guides/agent-cost-management/ and the AI Cost Calculator at /tools/ai-cost-calculator/ to estimate the cost impact of memory-heavy workflows. Sometimes the cheapest memory is a better retrieval rule, not a bigger context window."
        ],
        bullets: [
          "Retrieve only memories relevant to the current task and scope.",
          "Prefer concise structured memories over long narrative summaries.",
          "Do not inject sensitive memory unless the task requires it and the user is authorized.",
          "Track token cost added by memory and prune stale records."
        ]
      },
      {
        heading: "Memory poisoning and prompt injection",
        body: [
          "Memory poisoning occurs when incorrect, malicious, or untrusted information is saved and later influences the agent. It can happen through direct user input, imported documents, web pages, tool outputs, or model inference. The risk is high because the attack persists beyond the original conversation. A one-time prompt injection can become a long-term behavior change if it writes memory.",
          "Defenses include write approval, source labeling, policy checks, expiration, conflict detection, and monitoring. For example, a memory that changes payment instructions, security policy, deployment target, or user identity should require explicit confirmation. A memory derived from a public page should not modify private workflow rules. The Agent Security Guide at /guides/agent-security-guide/ covers broader injection defenses."
        ],
        bullets: [
          "Block memory writes that request policy changes from untrusted content.",
          "Require confirmation for identity, billing, permissions, security, and production facts.",
          "Expire uncertain memories and re-verify old project facts.",
          "Log memory writes so monitoring can detect suspicious sources."
        ]
      },
      {
        heading: "User controls and deletion",
        body: [
          "Users and administrators need control over durable memory. They should be able to inspect what the agent remembers, correct inaccurate facts, delete memory, disable memory for a workflow, and understand how memory affects behavior. Hidden memory creates trust problems even when it is accurate because users cannot tell why the agent behaves a certain way.",
          "Deletion should be real within the product's stated retention rules. If memory is copied into logs, analytics, evaluation datasets, or support tools, the policy should say so. For privacy-sensitive products, memory controls are not optional. They are part of the safety and compliance posture. Even for simple static tools, avoid implying that personal memory is stored if the site has no database or backend."
        ],
        bullets: [
          "Show memory records with source, scope, and last updated date.",
          "Allow edit, delete, export, and disable controls where memory is durable.",
          "Do not store secrets, API keys, passwords, or raw credentials in memory.",
          "Document retention and deletion behavior in plain language."
        ]
      },
      {
        heading: "Evaluate and monitor memory behavior",
        body: [
          "Memory systems need tests. The evaluation framework at /guides/agent-evaluation-framework/ should include cases where memory helps, memory conflicts with the current instruction, memory is stale, memory comes from untrusted content, and memory should not be retrieved. A memory-capable agent is not reliable until it can ignore the wrong memory as well as use the right one.",
          "Production monitoring should track memory reads, writes, updates, deletes, conflicts, and user corrections. A high correction rate may mean the agent writes too aggressively. A high retrieval rate may mean context is too broad. A suspicious source pattern may indicate memory poisoning. Tie these signals to the dashboard described in /guides/agent-monitoring/."
        ],
        bullets: [
          "Test current instruction versus stale memory conflict.",
          "Test untrusted document attempts to create durable memory.",
          "Test user correction and deletion behavior.",
          "Monitor memory writes by source, scope, category, and approval status."
        ]
      }
    ],
    checklist: [
      "Define memory categories, scopes, write rules, retrieval rules, retention, and deletion controls.",
      "Record provenance, confidence, source, timestamps, and expiration for durable memory.",
      "Block or review memory writes from untrusted content and sensitive categories.",
      "Retrieve memory selectively to reduce cost and avoid stale context.",
      "Evaluate and monitor memory behavior as part of agent reliability and security."
    ],
    faq: [
      { question: "What is agent memory?", answer: "Agent memory is stored context that an AI agent can use across turns or sessions, such as user preferences, project facts, task state, summaries, and approved workflow rules." },
      { question: "Why is agent memory risky?", answer: "Memory can become stale, incorrect, private, or poisoned by untrusted content. Because it affects future behavior, a bad memory can persist beyond the original interaction." },
      { question: "What should not be stored in agent memory?", answer: "Do not store API keys, passwords, raw credentials, unnecessary personal data, unsupported policy changes, or sensitive facts that lack consent and access controls." },
      { question: "How should memory writes be approved?", answer: "Low-risk preferences may be saved automatically with transparency, but identity, billing, permissions, security, production, and policy memories should require confirmation or admin approval." },
      { question: "How does memory affect AI cost?", answer: "Memory can increase input tokens when injected into prompts. Selective retrieval, concise structured memory, expiration, and pruning reduce both cost and irrelevant context." },
      { question: "How do I test agent memory systems?", answer: "Test helpful memory, stale memory, conflicting current instructions, untrusted-source memory writes, deletion, correction, and scope isolation between users or projects." }
    ]
  },
  {
    slug: "agent-permission-builder",
    title: "Agent Permission Builder Guide — Least-Privilege Scopes & Approval Gates",
    description: "Use the Agent Permission Builder to turn agent capabilities into least-privilege scopes, approval gates, risk notes, and Pro-ready audit reports.",
    h1: "Agent Permission Builder Guide",
    eyebrow: "Agent Permissions",
    updated: "2026-06-18",
    readingTime: "9 min read",
    primaryKeyword: "agent permission builder",
    intro: [
      "Agent permissions define what an AI agent can read, write, send, spend, delete, remember, or deploy. A useful permission plan is not a generic checklist. It maps each business workflow to the exact tools, data scopes, approval gates, and rollback paths the agent needs.",
      "The Agent Permission Builder at /tools/agent-permission-builder/ helps teams create that first plan. This guide explains how to turn the generated output into a practical review process for MCP tools, coding agents, internal support agents, and production automation.",
      "Use this guide with the Agent Security Guide, the MCP Security Audit workflow, and the Pro implementation checklists when you need a repeatable permission review instead of a one-off prompt."
    ],
    keyTakeaways: [
      "Start with workflow actions, not model names: read, write, send, spend, delete, deploy, and remember.",
      "Split preview and commit steps so users can inspect risky actions before execution.",
      "Use Pro audit reports to turn free permission plans into repeatable acceptance evidence."
    ],
    sections: [
      {
        heading: "Map the agent workflow before granting tools",
        body: [
          "A permission review starts by describing the job the agent performs. Repo onboarding, PR review, customer support, QA, and marketing research all need different scopes. A coding agent may need repository read access and test execution, but not billing access. A support agent may need ticket read access and draft replies, but not refund execution without approval.",
          "Write the workflow as a sequence of actions, then classify each action by authority. Reads are usually lower risk than writes. Drafts are lower risk than sends. Local previews are lower risk than production changes. The permission plan should make those differences visible."
        ],
        bullets: [
          "Read scope: files, issues, tickets, docs, analytics, or public URLs.",
          "Write scope: drafts, tickets, pull requests, config files, or memory records.",
          "External action scope: emails, webhooks, deployments, purchases, or account changes.",
          "Sensitive scope: secrets, customer data, billing, production systems, or durable memory."
        ]
      },
      {
        heading: "Define approval gates by risk level",
        body: [
          "Approval gates should protect actions that create external, financial, destructive, or hard-to-reverse effects. If every action asks for approval, users stop reading. If no action asks for approval, the agent can create damage before monitoring catches it.",
          "The practical pattern is to allow low-risk reads, require review for writes, and require stronger confirmation for destructive or production actions. The approval screen should show the destination, exact action, affected records, source evidence, expected cost, and rollback path."
        ],
        bullets: [
          "Low risk: read public docs, inspect selected files, format text, or draft notes.",
          "Medium risk: create drafts, open tickets, generate pull requests, or write temporary files.",
          "High risk: send messages, change records, modify production config, or spend money.",
          "Critical risk: delete data, rotate credentials, move funds, or grant new access."
        ]
      },
      {
        heading: "Turn builder output into a Pro audit report",
        body: [
          "The free builder output is a starting point. A Pro audit report should add evidence: which tools were reviewed, which scopes were narrowed, which approval gates exist, which checks passed, and which risks remain before launch.",
          "For teams, the report is useful because it becomes an artifact that product, engineering, security, and operations can all read. It should not expose secrets or tokens. It should describe scope boundaries and verification steps in plain language."
        ],
        bullets: [
          "List each tool, allowed action, denied action, and credential scope.",
          "Record the owner, review date, and next review trigger.",
          "Attach acceptance checks for prompt injection, wrong-tool use, and approval bypass attempts.",
          "Keep secrets out of reports; reference secret storage only as [REDACTED]."
        ]
      }
    ],
    checklist: [
      "Open the Agent Permission Builder and define the agent's job, tools, data, and actions.",
      "Classify actions into read, write, external, destructive, financial, production, and memory categories.",
      "Add approval gates for high-impact actions and preview/commit splits for writes.",
      "Convert the free output into a Pro audit report with owners, evidence, and acceptance checks.",
      "Re-run the review whenever tools, credentials, scopes, or production workflows change."
    ],
    faq: [
      { question: "What is an agent permission builder?", answer: "An agent permission builder is a tool for turning an AI agent workflow into scoped permissions, risk levels, approval gates, and review notes." },
      { question: "Is least privilege only a security concern?", answer: "No. Least privilege also improves reliability because narrower tools reduce wrong actions, unclear approvals, and unexpected workflow behavior." },
      { question: "Should agents get write access by default?", answer: "No. Start with read-only or draft-only access, then add explicit write tools with preview and approval steps when the workflow requires them." },
      { question: "What belongs in a Pro permission report?", answer: "A Pro report should include reviewed tools, allowed scopes, denied scopes, approval gates, risk notes, acceptance checks, owners, and review dates." }
    ]
  },
  {
    slug: "ai-search-visibility-checker",
    title: "AI Search Visibility Checker Guide — Make Agent Content Discoverable",
    description: "Use the AI Search Visibility Checker to review sitemap, robots, schema, headings, and content signals for AI search and crawler discovery.",
    h1: "AI Search Visibility Checker Guide",
    eyebrow: "AI Search Visibility",
    updated: "2026-06-18",
    readingTime: "8 min read",
    primaryKeyword: "AI search visibility checker",
    intro: [
      "AI search visibility is the practical question of whether crawlers and answer engines can discover, parse, and trust your pages. For an agent or MCP site, that means pages need clear routes, indexable HTML, canonical URLs, sitemap entries, structured content, and useful body text.",
      "The AI Search Visibility Checker at /tools/ai-search-visibility-checker/ gives builders a quick first pass. It does not replace Search Console or server logs, but it helps catch common launch issues before a page is promoted as SEO-ready.",
      "Use this guide when publishing new MCP workflows, security guides, permission tools, or AI agent pages. The goal is not to game AI search. The goal is to make useful pages easy to crawl, quote, and evaluate."
    ],
    keyTakeaways: [
      "AI search visibility starts with crawlable pages, sitemap inclusion, canonical URLs, and clear headings.",
      "A 200 response is not enough; verify expected title, H1, body text, and sitemap entries.",
      "Pro reports should separate technical visibility issues from content-quality improvements."
    ],
    sections: [
      {
        heading: "Check crawl basics first",
        body: [
          "Before optimizing content, confirm the page can actually be discovered. The route should return a real page, not a generic app shell. The canonical URL should match the production URL. The page should appear in sitemap.xml, and robots rules should not block the path.",
          "For static Next.js pages, a build can succeed while sitemap coverage is incomplete if a data source is not connected to sitemap generation. That is why dynamic guide systems should derive both pages and sitemap entries from the same source of truth whenever possible."
        ],
        bullets: [
          "HTTP status returns 200 after redirects finish.",
          "Title, H1, canonical, and body copy match the intended page.",
          "Sitemap contains the exact canonical URL with trailing slash style preserved.",
          "Robots and meta robots allow indexing for public SEO pages."
        ]
      },
      {
        heading: "Review content signals for answer engines",
        body: [
          "Answer engines need clear language, not just keywords. A useful page explains who it is for, what problem it solves, how to use it, what limitations apply, and which related resources support the task. For agent tools, include concrete workflow terms such as permissions, approvals, audit reports, MCP servers, crawler checks, and acceptance steps.",
          "Structured sections, FAQs, and internal links help both users and crawlers understand the page cluster. Avoid empty landing pages that promise a tool but provide no crawlable explanation of the use case."
        ],
        bullets: [
          "Use one clear H1 and descriptive H2 sections.",
          "Explain the user task before the CTA.",
          "Link related tools, guides, workflows, and pricing pages.",
          "Include FAQ answers that match real search questions."
        ]
      },
      {
        heading: "Convert checks into a Pro visibility report",
        body: [
          "The free checker can identify likely gaps. A Pro visibility report should prioritize fixes and record evidence: status code, sitemap result, canonical result, schema result, missing content sections, and recommended remediation.",
          "Keep the report honest. Do not claim that a page is visible in every AI answer engine from a local check alone. Report what was verified and what still requires external indexing data."
        ],
        bullets: [
          "Separate verified technical facts from content recommendations.",
          "Record the checked URL, expected H1, sitemap result, and date.",
          "Flag pages that return generic shells or lack body content.",
          "Use Search Console, server logs, or crawler data when available."
        ]
      }
    ],
    checklist: [
      "Run the AI Search Visibility Checker against the production URL.",
      "Verify status, canonical, H1, title, body copy, robots, and sitemap inclusion.",
      "Review schema, FAQ, internal links, and content clarity for answer-engine usefulness.",
      "Prioritize fixes by crawl blocker, metadata gap, content gap, and conversion gap.",
      "Recheck after deployment and keep evidence separate from assumptions."
    ],
    faq: [
      { question: "What is AI search visibility?", answer: "AI search visibility is the ability of crawlers and answer engines to discover, parse, understand, and cite a page based on crawlability, structure, and content usefulness." },
      { question: "Does a visibility checker guarantee AI search rankings?", answer: "No. It verifies technical and content signals that support discovery. Ranking and citation still depend on external crawling, authority, relevance, and answer-engine behavior." },
      { question: "Why is sitemap inclusion important?", answer: "Sitemap inclusion helps crawlers discover important public pages, especially dynamic guide or tool pages that may not receive many external links yet." },
      { question: "What should a Pro visibility report include?", answer: "It should include the checked URL, HTTP result, canonical result, sitemap result, robots status, schema notes, content gaps, and recommended fixes." }
    ]
  }
];

export const agentSecurityGuideLinks = agentSecurityGuides.map((guide) => ({
  title: guide.h1,
  href: `/guides/${guide.slug}/`,
  description: guide.description,
}));

export const requiredAgentSecurityLinks = sharedSecurityLinks;

export function getAgentSecurityGuide(slug: string) {
  return agentSecurityGuides.find((guide) => guide.slug === slug);
}
