"use client";

import { useEffect, useMemo, useState } from "react";

const BILLING_API = "https://bestmcp-billing.xuanlinflow.workers.dev";
const SESSION_KEY = "bestmcpservers_session_token";
const USER_KEY = "bestmcpservers_user";

type Plan = {
  id: string;
  name?: string;
  product_name?: string;
  product_slug?: string;
  price_cents?: number;
  interval?: string;
};

type SessionData = {
  authenticated?: boolean;
  credits?: {
    balance?: number;
    lifetime_purchased?: number;
  } | null;
  subscription?: {
    status?: string;
    plan_id?: string;
    current_period_end?: number;
  } | null;
};

type Props = {
  plan: "builder" | "pro";
  label?: string;
  className?: string;
};

function loginUrl() {
  if (typeof window === "undefined") return `${BILLING_API}/api/auth/google`;
  return `${BILLING_API}/api/auth/google?returnUrl=${encodeURIComponent(window.location.href)}`;
}

function normalize(value?: string) {
  return (value || "").toLowerCase();
}

function trackCtaClick(plan: Props["plan"], stage: string) {
  if (typeof window === "undefined") return;
  const plausible = (window as Window & {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }).plausible;
  if (typeof plausible === "function") {
    plausible("CTA Click", {
      props: {
        plan,
        stage,
        page: window.location.pathname,
        cta: "billing_checkout",
      },
    });
  }
}

export default function BillingCheckout({ plan, label, className }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [session, setSession] = useState<SessionData | null>(null);
  const [status, setStatus] = useState<"idle" | "exchanging" | "checking" | "loading" | "redirecting" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(SESSION_KEY);
    if (stored) setToken(stored);

    const url = new URL(window.location.href);
    const handoffToken = url.searchParams.get("auth_token");
    if (!handoffToken) return;

    setStatus("exchanging");
    fetch(`${BILLING_API}/api/auth/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: handoffToken }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem(SESSION_KEY, data.token);
        window.localStorage.setItem(USER_KEY, JSON.stringify(data.user));
        setToken(data.token);
        url.searchParams.delete("auth_token");
        window.history.replaceState({}, "", url.toString());
        setStatus("idle");
      })
      .catch((err) => {
        setStatus("error");
        setMessage(`Login handoff failed: ${err.message || "unknown error"}`);
      });
  }, []);

  useEffect(() => {
    if (!token) {
      setSession(null);
      return;
    }

    let cancelled = false;
    const url = new URL(window.location.href);
    const justReturnedFromCheckout = url.searchParams.get("checkout") === "success";
    const delays = justReturnedFromCheckout ? [0, 1200, 3000, 6000] : [0];

    async function fetchSession() {
      setStatus((current) => (current === "idle" ? "checking" : current));
      try {
        const res = await fetch(`${BILLING_API}/api/auth/session`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 401) {
          window.localStorage.removeItem(SESSION_KEY);
          setToken(null);
          setSession(null);
          setStatus("idle");
          return;
        }
        if (!res.ok) throw new Error(await res.text());
        const data = (await res.json()) as SessionData;
        if (!cancelled) {
          setSession(data);
          setStatus("idle");
        }
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setMessage(err instanceof Error ? err.message : "Could not verify account status");
        }
      }
    }

    const timers = delays.map((delay) => window.setTimeout(fetchSession, delay));
    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [token]);

  const subscriptionStatus = normalize(session?.subscription?.status);
  const subscriptionPlanId = normalize(session?.subscription?.plan_id);
  const hasActivePro = ["active", "trialing"].includes(subscriptionStatus) && subscriptionPlanId.includes("bestmcp") && subscriptionPlanId.includes("pro");
  const hasBuilderAccess = hasActivePro || Number(session?.credits?.lifetime_purchased || 0) > 0;
  const hasAccess = plan === "pro" ? hasActivePro : hasBuilderAccess;

  const buttonLabel = useMemo(() => {
    if (hasAccess) return plan === "pro" ? "Pro active — open workflows" : "Builder Pack unlocked — open packs";
    if (status === "exchanging") return "Finishing login...";
    if (status === "checking") return "Checking access...";
    if (status === "loading") return "Preparing checkout...";
    if (status === "redirecting") return "Redirecting to Stripe...";
    return label || (plan === "builder" ? "Start Builder Pack" : "Start Pro");
  }, [hasAccess, label, plan, status]);

  async function startCheckout() {
    trackCtaClick(plan, hasAccess ? "already_unlocked" : token ? "checkout_start" : "login_start");

    if (hasAccess) {
      window.location.href = "/my-purchases/";
      return;
    }

    if (!token) {
      window.location.href = loginUrl();
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const plansRes = await fetch(`${BILLING_API}/api/billing/plans`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (plansRes.status === 401) {
        window.localStorage.removeItem(SESSION_KEY);
        setToken(null);
        window.location.href = loginUrl();
        return;
      }
      if (!plansRes.ok) throw new Error(await plansRes.text());
      const data = await plansRes.json();
      const plans = (data.plans || []) as Plan[];
      const selected = plans.find((item) => {
        const haystack = `${normalize(item.name)} ${normalize(item.product_name)} ${normalize(item.product_slug)} ${normalize(item.id)}`;
        return haystack.includes(plan) && (haystack.includes("bestmcp") || haystack.includes("mcp") || haystack.includes("workflow"));
      }) || plans.find((item) => normalize(item.name).includes(plan) || normalize(item.id).includes(plan));

      if (!selected?.id) {
        throw new Error(`No ${plan} plan is configured in billing yet.`);
      }

      const checkoutRes = await fetch(`${BILLING_API}/api/billing/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          plan_id: selected.id,
          success_url: `${window.location.origin}/my-purchases/?checkout=success&plan=${plan}`,
          cancel_url: `${window.location.origin}/pricing/?checkout=cancelled&plan=${plan}`,
        }),
      });
      if (!checkoutRes.ok) throw new Error(await checkoutRes.text());
      const checkout = await checkoutRes.json();
      if (!checkout.url) throw new Error("Stripe checkout URL missing");
      setStatus("redirecting");
      window.location.href = checkout.url;
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Checkout failed");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === "exchanging" || status === "checking" || status === "loading" || status === "redirecting"}
        className={className || "inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"}
      >
        {buttonLabel}
      </button>
      {status === "error" && message ? (
        <p className="mt-2 text-xs text-red-600">{message}</p>
      ) : null}
    </div>
  );
}
