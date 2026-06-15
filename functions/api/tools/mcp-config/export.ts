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

const configToolkitPack = {
  title: "MCP Config Production Toolkit",
  summary: "Copy-ready production assets for turning the free MCP config generators into a safe Claude Desktop, Cursor, and server rollout package.",
  sections: [
    {
      title: "Production rollout brief",
      lines: [
        "Goal: convert browser-generated MCP planning templates into a least-privilege production configuration package.",
        "Use separate local, staging, and production profiles. Never reuse personal tokens for team or production workflows.",
        "Ship in three stages: read-only local validation → limited staging write access → production rollout with audit notes.",
      ],
    },
    {
      title: "Claude Desktop config bundle",
      lines: [
        "{",
        "  \"mcpServers\": {",
        "    \"project-files-readonly\": {",
        "      \"command\": \"npx\",",
        "      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"${MCP_ALLOWED_WORKSPACE}\"]",
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
      title: "Cursor MCP profile notes",
      lines: [
        "Create a dedicated Cursor MCP profile for each project instead of sharing a global config.",
        "Map filesystem roots to the active repository only; avoid home-directory or downloads-folder access.",
        "Start GitHub, Linear, Notion, and browser tools in read-only mode until acceptance tests pass.",
        "Record every enabled server, token scope, owner, expiry date, and rollback command in the project README.",
      ],
    },
    {
      title: ".env.production.example",
      lines: [
        "MCP_ALLOWED_WORKSPACE=/absolute/path/to/project",
        "GITHUB_READONLY_TOKEN=replace_with_readonly_token",
        "GITHUB_WRITE_TOKEN=replace_only_after_human_approval_gate",
        "LINEAR_API_KEY=replace_if_needed",
        "NOTION_INTERNAL_INTEGRATION_TOKEN=replace_if_needed",
        "MCP_AUDIT_LOG_LEVEL=info",
        "MCP_PROFILE=production",
      ],
    },
    {
      title: "Permission matrix",
      lines: [
        "filesystem: read-only by default; write access only to approved repo paths after review.",
        "git: status, diff, and log allowed; commit, push, and reset require human approval.",
        "github: issue and PR reads allowed; comments may be enabled; merge and release actions disabled by default.",
        "browser/search: public documentation and QA verification only; no credentialed admin consoles without explicit approval.",
        "secrets: values stay in environment variables or platform secrets; never paste raw values into generated configs or chat logs.",
      ],
    },
    {
      title: "QA and rollback checklist",
      lines: [
        "1. Generate free MCP configs and remove every server not needed for the first real workflow.",
        "2. Run one read-only task that touches repo files, docs, and public references only.",
        "3. Inspect logs for token leakage, unexpected file access, or tool calls outside the allowed workspace.",
        "4. Enable one write-capable integration at a time and document the business reason.",
        "5. Confirm the rollback path: disable server, revoke token, clear local config, redeploy known-good profile.",
        "6. Schedule monthly permission review and rotate any token that was exposed to a shared workstation.",
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
      return fail("LOGIN_REQUIRED", "Sign in to unlock the MCP Config Production Toolkit.", 401);
    }

    if (!hasBuilderAccess(session)) {
      return fail("PAYMENT_REQUIRED", "Buy the Builder Pack or upgrade to Pro to unlock this MCP config toolkit.", 402);
    }

    return json({
      success: true,
      data: {
        access: hasProAccess(session) ? "pro" : "builder",
        requiredPlan: "builder",
        pack: configToolkitPack,
      },
    });
  } catch (error) {
    return fail("SESSION_CHECK_FAILED", error instanceof Error ? error.message : "Could not verify MCP config toolkit access.", 502);
  }
}

export async function onRequest() {
  return fail("METHOD_NOT_ALLOWED", "Use GET for this endpoint.", 405);
}
