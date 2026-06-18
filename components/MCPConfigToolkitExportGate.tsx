"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BillingCheckout from "@/components/BillingCheckout";

const SESSION_KEY = "bestmcpservers_session_token";

type PackSection = {
  title: string;
  lines: string[];
};

type ConfigToolkitPack = {
  title: string;
  summary: string;
  sections: PackSection[];
};

type ExportResponse = {
  success: boolean;
  data?: {
    access: "builder" | "pro";
    requiredPlan: "builder";
    pack: ConfigToolkitPack;
  };
  error?: {
    code: string;
    message: string;
  };
};

function CopyBlock({ title, lines }: PackSection) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <pre className="mt-4 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

function LockedPreview({ message }: { message: string }) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Paid production layer</p>
        <h3 className="mt-3 text-2xl font-bold text-slate-950">Unlock the MCP Config Production Toolkit</h3>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          The free generators create planning templates. Pro unlocks a production bundle for real rollouts with deployment-ready setup guidance and safety checks.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-slate-700">
          <li>• Client setup bundle</li>
          <li>• Deployment environment outline</li>
          <li>• Access boundary guidance</li>
          <li>• Launch safety workflow</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">Locked toolkit preview</h3>
        {message ? <p className="mt-3 text-sm text-slate-500">{message}</p> : null}
        <div className="mt-5 rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">
          <p className="font-semibold text-blue-200">Production Toolkit</p>
          <div className="mt-4 space-y-2 text-slate-400 blur-[2px] select-none">
            <p>Client profile: project-scoped connectors and safe defaults...</p>
            <p>Access guide: boundaries, owners, and approval points...</p>
            <p>Launch workflow: verify, monitor, and safely revert...</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <BillingCheckout
            plan="pro"
            label="Unlock with Pro"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          />
          <Link href="/pricing/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50">
            Compare plans
          </Link>
          <Link href="/my-purchases/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50">
            My purchases
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MCPConfigToolkitExportGate() {
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked">("checking");
  const [pack, setPack] = useState<ConfigToolkitPack | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem(SESSION_KEY);
    if (!token) {
      setStatus("locked");
      setMessage("Sign in and upgrade to Pro to view the production toolkit.");
      return;
    }

    let cancelled = false;
    fetch("/api/tools/mcp-config/export", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        const data = (await res.json()) as ExportResponse;
        if (!res.ok || !data.success || !data.data?.pack) {
          if (res.status === 401) window.localStorage.removeItem(SESSION_KEY);
          throw new Error(data.error?.message || "This MCP config toolkit is locked.");
        }
        return data.data.pack;
      })
      .then((nextPack) => {
        if (!cancelled) {
          setPack(nextPack);
          setStatus("unlocked");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setMessage(err instanceof Error ? err.message : "This MCP config toolkit is locked.");
          setStatus("locked");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="premium-export" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Premium export</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Turn free MCP config templates into production rollout assets</h2>
          <p className="mt-4 text-slate-600">
            Keep using the free browser-only generators. Pro unlocks the production toolkit: setup files, deployment notes, access boundaries, and launch safety steps.
          </p>
        </div>

        {status === "checking" ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">Checking your MCP config toolkit access...</div>
        ) : null}

        {status === "unlocked" && pack ? (
          <div className="mt-8">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Unlocked</p>
              <h3 className="mt-3 text-2xl font-bold text-emerald-950">{pack.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-900">{pack.summary}</p>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {pack.sections.map((section) => <CopyBlock key={section.title} title={section.title} lines={section.lines} />)}
            </div>
          </div>
        ) : null}

        {status === "locked" ? <LockedPreview message={message} /> : null}
      </div>
    </section>
  );
}
