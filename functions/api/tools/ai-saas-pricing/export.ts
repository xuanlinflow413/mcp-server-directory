const BILLING_API = "https://bestmcp-billing.xuanlinflow.workers.dev";

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

const pricingCostPack = {
  title: "AI SaaS Pricing & Cost Pack",
  summary: "Copy-ready unit economics assets for turning token-cost estimates into launch-safe AI SaaS pricing, credit rules, and margin checks.",
  sections: [
    {
      title: "Pricing decision memo",
      lines: [
        "Goal: convert model cost, usage caps, and conversion assumptions into a pricing decision founders can defend before launch.",
        "Anchor paid pricing on paid-user cost, not average visitor cost. Free users should have explicit caps, lower-cost models, or queue limits.",
        "Ship one simple paid path first: Starter for light usage, Pro for recurring job-to-be-done usage, or a one-time pack when behavior is not yet predictable.",
        "Do not promise unlimited AI usage until production logs prove worst-case power users stay inside gross-margin targets.",
      ],
    },
    {
      title: "Unit economics worksheet",
      lines: [
        "Inputs to collect before setting price:",
        "- Average input tokens per successful task",
        "- Average output tokens per successful task",
        "- Model price per 1M input tokens and output tokens",
        "- Expected tasks per active free user per month",
        "- Expected tasks per paid user per month",
        "- Payment processor fee and support/refund buffer",
        "Formula: monthly_ai_cost = ((input_tokens * input_price) + (output_tokens * output_price)) / 1_000_000 * monthly_tasks",
        "Formula: target_price = (paid_user_ai_cost + support_buffer + platform_buffer) / target_gross_margin",
      ],
    },
    {
      title: "Credit pack template",
      lines: [
        "Starter pack: fixed number of successful generations, one account, no team sharing, expires only if your terms require it.",
        "Pro monthly: recurring credit allowance sized from median paid-user behavior plus a visible fair-use ceiling.",
        "Overage policy: ask users to buy another pack or upgrade before running expensive calls; never silently run negative-margin usage.",
        "Refund rule: refund failed checkout or duplicated purchases; do not refund consumed AI credits unless the product failed to deliver output.",
      ],
    },
    {
      title: "Free plan guardrails",
      lines: [
        "Use a cheaper model, lower output cap, or smaller context window for anonymous/free users.",
        "Gate repeated high-cost actions behind login so usage can be limited per account instead of per browser session.",
        "Separate marketing demo usage from production usage. Demo prompts should be short, deterministic, and abuse-resistant.",
        "Add a hard monthly budget alert before launch and a kill switch for expensive endpoints.",
      ],
    },
    {
      title: "Launch checklist",
      lines: [
        "1. Price one paid offer with a clear included usage allowance.",
        "2. Verify payment success returns credits or entitlement without manual support.",
        "3. Test cancellation, failed payment, duplicate checkout, and expired session paths.",
        "4. Confirm public pricing copy does not imply unlimited AI usage unless margins support it.",
        "5. Track cost per successful paid task and review after the first 20 paid users.",
        "6. Raise limits only after real margin data beats the target for at least one billing cycle.",
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
      return fail("LOGIN_REQUIRED", "Sign in to unlock the AI SaaS Pricing & Cost Pack.", 401);
    }

    if (!hasBuilderAccess(session)) {
      return fail("PAYMENT_REQUIRED", "Buy the Builder Pack or upgrade to Pro to unlock this pricing and cost pack.", 402);
    }

    return json({
      success: true,
      data: {
        access: hasProAccess(session) ? "pro" : "builder",
        requiredPlan: "builder",
        pack: pricingCostPack,
      },
    });
  } catch (error) {
    return fail("SESSION_CHECK_FAILED", error instanceof Error ? error.message : "Could not verify pricing pack access.", 502);
  }
}

export async function onRequest() {
  return fail("METHOD_NOT_ALLOWED", "Use GET for this endpoint.", 405);
}
