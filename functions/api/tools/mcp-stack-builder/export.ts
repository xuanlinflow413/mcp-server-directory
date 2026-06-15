const BILLING_API = "https://auth.bestmcpservers.com";

type PagesFunctionContext = {
  request: Request;
};

type BillingSession = {
  authenticated?: boolean;
  credits?: {
    lifetime_purchased?: number;
    balance?: number;
  } | null;
  subscription?: {
    status?: string;
    plan_id?: string;
  } | null;
};

function normalize(value?: string) {
  return (value || "").toLowerCase();
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store",
      "Access-Control-Allow-Origin": "https://bestmcpservers.com",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
    },
  });
}

function fail(code: string, message: string, status: number) {
  return json({ success: false, error: { code, message } }, status);
}

function hasProAccess(session: BillingSession) {
  const subscriptionStatus = normalize(session.subscription?.status);
  const subscriptionPlanId = normalize(session.subscription?.plan_id);
  return ["active", "trialing"].includes(subscriptionStatus) && subscriptionPlanId.includes("bestmcp") && subscriptionPlanId.includes("pro");
}

function hasBuilderAccess(session: BillingSession) {
  return hasProAccess(session) || Number(session.credits?.lifetime_purchased || 0) > 0;
}

async function getBillingSession(request: Request): Promise<BillingSession | null> {
  const authorization = request.headers.get("Authorization") || "";
  if (!authorization.toLowerCase().startsWith("bearer ")) return null;

  const res = await fetch(`${BILLING_API}/api/auth/session`, {
    headers: { Authorization: authorization },
  });

  if (res.status === 401) return null;
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as BillingSession;
}

const implementationPack = {
  title: "MCP Stack Implementation Pack",
  summary: "Copy-ready implementation assets for turning a free MCP stack recommendation into a shippable Claude Desktop, Cursor, or internal agent setup.",
  sections: [
    {
      title: "Implementation brief",
      lines: [
        "Goal: turn the browser-generated MCP stack recommendation into a safe, auditable agent setup.",
        "Start with read-only tools, isolate credentials by environment, and enable write actions only after the QA checklist passes.",
        "Ship as a staged rollout: local sandbox → internal pilot → production credentials → weekly permission review.",
      ],
    },
    {
      title: "Claude Desktop config template",
      lines: [
        "{",
        "  \"mcpServers\": {",
        "    \"filesystem-readonly\": {",
        "      \"command\": \"npx\",",
        "      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/path/to/approved/workspace\"]",
        "    },",
        "    \"github-readonly\": {",
        "      \"command\": \"npx\",",
        "      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"],",
        "      \"env\": { \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"${GITHUB_READONLY_TOKEN}\" }",
        "    }",
        "  }",
        "}",
      ],
    },
    {
      title: "Cursor agent setup notes",
      lines: [
        "Create separate local and production MCP profiles instead of sharing credentials.",
        "Limit filesystem roots to the project workspace; never grant home-directory access by default.",
        "Keep GitHub tokens read-only until the workflow has a human review step before writes.",
        "Document every enabled MCP server, owner, token scope, and rollback command in the project README.",
      ],
    },
    {
      title: ".env.example",
      lines: [
        "GITHUB_READONLY_TOKEN=replace_with_readonly_token",
        "NOTION_INTERNAL_INTEGRATION_TOKEN=replace_if_needed",
        "SLACK_BOT_TOKEN=replace_if_needed",
        "MCP_ALLOWED_WORKSPACE=/absolute/path/to/project",
        "MCP_AUDIT_LOG_LEVEL=info",
      ],
    },
    {
      title: "Permission matrix",
      lines: [
        "filesystem: read-only for docs/code lookup; write access only for approved repos.",
        "git: local diff/status allowed; commit/push requires human approval.",
        "github: issues and PR reads allowed; merge/release actions disabled by default.",
        "browser/search: allowed for public documentation and competitor research only.",
        "secrets: never expose raw values in chat, logs, screenshots, or generated files.",
      ],
    },
    {
      title: "Rollout checklist",
      lines: [
        "1. Generate the free stack recommendation and remove servers that are not required for the first workflow.",
        "2. Create least-privilege tokens and store them outside the repository.",
        "3. Run a dry task that only reads files and public docs.",
        "4. Review logs for accidental secret exposure or unexpected write attempts.",
        "5. Enable one additional permission at a time and record the reason.",
        "6. Add a rollback note that disables each MCP server and rotates related tokens.",
      ],
    },
  ],
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://bestmcpservers.com",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
    },
  });
}

export async function onRequestGet(context: PagesFunctionContext) {
  try {
    const session = await getBillingSession(context.request);
    if (!session?.authenticated) {
      return fail("LOGIN_REQUIRED", "Sign in to unlock the MCP Stack Implementation Pack.", 401);
    }

    if (!hasBuilderAccess(session)) {
      return fail("PAYMENT_REQUIRED", "Buy the Builder Pack or upgrade to Pro to unlock this implementation pack.", 402);
    }

    return json({
      success: true,
      data: {
        access: hasProAccess(session) ? "pro" : "builder",
        requiredPlan: "builder",
        pack: implementationPack,
      },
    });
  } catch (error) {
    return fail("SESSION_CHECK_FAILED", error instanceof Error ? error.message : "Could not verify MCP stack pack access.", 502);
  }
}

export async function onRequest() {
  return fail("METHOD_NOT_ALLOWED", "Use GET for this endpoint.", 405);
}
