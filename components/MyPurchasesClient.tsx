"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const BILLING_API = "https://bestmcp-billing.xuanlinflow.workers.dev";
const SESSION_KEY = "bestmcpservers_session_token";
const USER_KEY = "bestmcpservers_user";

type WorkflowPackSummary = {
  slug: string;
  title: string;
  tool: string;
  subtitle: string;
  savedTime: string;
  launchPriority: number;
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

type StoredUser = {
  email?: string;
  name?: string;
  avatar_url?: string;
};

type Props = {
  workflowPacks: WorkflowPackSummary[];
};

function loginUrl() {
  if (typeof window === "undefined") return `${BILLING_API}/api/auth/google`;
  return `${BILLING_API}/api/auth/google?returnUrl=${encodeURIComponent(window.location.href)}`;
}

function normalize(value?: string) {
  return (value || "").toLowerCase();
}

function formatDate(timestamp?: number) {
  if (!timestamp) return null;
  const millis = timestamp > 10_000_000_000 ? timestamp : timestamp * 1000;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(millis));
}

export default function MyPurchasesClient({ workflowPacks }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<StoredUser | null>(null);
  const [session, setSession] = useState<SessionData | null>(null);
  const [status, setStatus] = useState<"idle" | "exchanging" | "checking" | "signed-out" | "error">("checking");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedToken = window.localStorage.getItem(SESSION_KEY);
    const storedUser = window.localStorage.getItem(USER_KEY);
    if (storedToken) setToken(storedToken);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as StoredUser);
      } catch {
        window.localStorage.removeItem(USER_KEY);
      }
    }

    const url = new URL(window.location.href);
    const handoffToken = url.searchParams.get("auth_token");
    if (!handoffToken) {
      if (!storedToken) setStatus("signed-out");
      return;
    }

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
        setUser(data.user);
        url.searchParams.delete("auth_token");
        window.history.replaceState({}, "", url.toString());
        setStatus("checking");
      })
      .catch((err) => {
        setStatus("error");
        setMessage(`Login handoff failed: ${err instanceof Error ? err.message : "unknown error"}`);
      });
  }, []);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;
    setStatus("checking");
    fetch(`${BILLING_API}/api/auth/session`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (res.status === 401) {
          window.localStorage.removeItem(SESSION_KEY);
          setToken(null);
          setSession(null);
          throw new Error("Your session expired. Please sign in again.");
        }
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then((data: SessionData) => {
        if (!cancelled) {
          setSession(data);
          setStatus("idle");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          if (!window.localStorage.getItem(SESSION_KEY)) setStatus("signed-out");
          else setStatus("error");
          setMessage(err instanceof Error ? err.message : "Could not verify account status");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  const subscriptionStatus = normalize(session?.subscription?.status);
  const subscriptionPlanId = normalize(session?.subscription?.plan_id);
  const hasActivePro = ["active", "trialing"].includes(subscriptionStatus) && subscriptionPlanId.includes("bestmcp") && subscriptionPlanId.includes("pro");
  const hasBuilderAccess = hasActivePro || Number(session?.credits?.lifetime_purchased || 0) > 0;
  const renewalDate = formatDate(session?.subscription?.current_period_end);

  const unlockedPacks = useMemo(() => {
    if (hasActivePro) return workflowPacks;
    if (hasBuilderAccess) return workflowPacks.filter((pack) => pack.launchPriority <= 3);
    return [];
  }, [hasActivePro, hasBuilderAccess, workflowPacks]);

  const lockedPacks = useMemo(() => {
    const unlocked = new Set(unlockedPacks.map((pack) => pack.slug));
    return workflowPacks.filter((pack) => !unlocked.has(pack.slug));
  }, [unlockedPacks, workflowPacks]);

  if (status === "checking" || status === "exchanging") {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">Checking account access...</p>
        <p className="mt-3 text-slate-600">We are verifying your unlocked workflow packs.</p>
      </div>
    );
  }

  if (status === "signed-out") {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Account required</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Sign in to see your unlocked packs</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Your purchases are attached to your BestMCPServers account. Sign in with Google, then this page will show Builder Pack or Pro access without showing credits or usage counts.
        </p>
        {message ? <p className="mt-4 text-sm text-red-600">{message}</p> : null}
        <a href={loginUrl()} className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">Sign in with Google</a>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">Access check failed</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-red-950">We could not verify your purchases</h2>
        <p className="mt-4 text-red-800">{message || "Please refresh or sign in again."}</p>
        <a href={loginUrl()} className="mt-6 inline-flex rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800">Sign in again</a>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">My purchases</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{hasActivePro ? "Pro is active" : hasBuilderAccess ? "Builder Pack is unlocked" : "No paid packs unlocked yet"}</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              {hasActivePro
                ? "You can open every copy-ready workflow pack, including future Pro workflow updates."
                : hasBuilderAccess
                  ? "You can open the top 3 Builder workflow packs with copy-ready prompts, configs, and runbooks."
                  : "Free access lets you browse workflow previews. Unlock Builder Pack or Pro to copy the execution assets."}
            </p>
            {user?.email ? <p className="mt-3 text-sm text-slate-500">Signed in as {user.email}</p> : null}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 lg:min-w-72">
            <p><span className="font-semibold text-slate-950">Access:</span> {hasActivePro ? "Pro" : hasBuilderAccess ? "Builder Pack" : "Free"}</p>
            <p className="mt-2"><span className="font-semibold text-slate-950">Unlocked packs:</span> {unlockedPacks.length} / {workflowPacks.length}</p>
            {hasActivePro && renewalDate ? <p className="mt-2"><span className="font-semibold text-slate-950">Current period ends:</span> {renewalDate}</p> : null}
          </div>
        </div>
        {!hasActivePro && !hasBuilderAccess ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">Compare plans</Link>
            <Link href="/workflows/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50">Browse previews</Link>
          </div>
        ) : null}
      </section>

      {hasActivePro || hasBuilderAccess ? (
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Unlocked tool implementation packs</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/mcp-stack-builder/#premium-export" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Unlocked · MCP Stack Builder</p>
              <h3 className="mt-3 text-lg font-bold text-slate-950">MCP Stack Implementation Pack</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">Open copy-ready configs, permission matrix, environment template, and rollout checklist.</p>
              <p className="mt-4 text-sm font-semibold text-emerald-900">Open implementation pack →</p>
            </Link>
            <Link href="/tools/mcp-server-config-generator/#premium-export" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Unlocked · MCP Config Tools</p>
              <h3 className="mt-3 text-lg font-bold text-slate-950">MCP Config Production Toolkit</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">Open production-ready Claude Desktop, Cursor, env, permission, QA, and rollback assets.</p>
              <p className="mt-4 text-sm font-semibold text-emerald-900">Open config toolkit →</p>
            </Link>
          </div>
        </section>
      ) : null}

      {unlockedPacks.length > 0 ? (
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Unlocked workflow packs</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {unlockedPacks.map((pack) => (
              <Link key={pack.slug} href={`/workflows/${pack.slug}/#copy-ready-assets`} className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Unlocked · {pack.tool}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{pack.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{pack.subtitle}</p>
                <p className="mt-4 text-sm font-semibold text-emerald-900">Open copy-ready assets →</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {lockedPacks.length > 0 ? (
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Locked workflow packs</h2>
          <p className="mt-2 text-slate-600">These remain available as free previews. Upgrade to unlock the copy-ready execution assets.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lockedPacks.map((pack) => (
              <Link key={pack.slug} href={`/workflows/${pack.slug}/`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Locked · {pack.tool}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{pack.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pack.subtitle}</p>
                <p className="mt-4 text-sm font-semibold text-blue-700">View free preview →</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
