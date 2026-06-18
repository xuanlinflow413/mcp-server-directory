import { getWorkflowPack } from "../../../../data/workflowPacks";

const BILLING_API = "https://auth.bestmcpservers.com";

type PagesFunctionContext = {
  request: Request;
  params: {
    slug?: string | string[];
  };
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
  const rawSlug = context.params.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  if (!slug) return fail("MISSING_SLUG", "Workflow slug is required.", 400);

  const pack = getWorkflowPack(slug);
  if (!pack) return fail("NOT_FOUND", "Workflow pack not found.", 404);

  try {
    const session = await getBillingSession(context.request);
    if (!session?.authenticated) {
      return fail("LOGIN_REQUIRED", "Sign in to unlock the copy-ready workflow assets.", 401);
    }

    const requiredPlan = pack.launchPriority <= 3 ? "builder" : "pro";
    const allowed = requiredPlan === "builder" ? hasBuilderAccess(session) : hasProAccess(session);
    if (!allowed) {
      return fail(
        "PAYMENT_REQUIRED",
        "Upgrade to Pro to unlock this workflow.",
        402
      );
    }

    return json({
      success: true,
      data: {
        access: hasProAccess(session) ? "pro" : "builder",
        requiredPlan,
        copyReady: pack.copyReady,
      },
    });
  } catch (error) {
    return fail("SESSION_CHECK_FAILED", error instanceof Error ? error.message : "Could not verify workflow access.", 502);
  }
}

export async function onRequest() {
  return fail("METHOD_NOT_ALLOWED", "Use GET for this endpoint.", 405);
}
