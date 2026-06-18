"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BillingCheckout from "@/components/BillingCheckout";

const SESSION_KEY = "bestmcpservers_session_token";

type CopyReadyWorkflow = {
  missingContent: string[];
  prompt: string[];
  claudeCodeConfig: string[];
  cursorConfig: string[];
  mcpConfig: string[];
  agentWorkflow: string[];
};

type WorkflowAssetResponse = {
  success: boolean;
  data?: {
    access: "builder" | "pro";
    requiredPlan: "builder" | "pro";
    copyReady: CopyReadyWorkflow;
  };
  error?: {
    code: string;
    message: string;
  };
};

type Props = {
  slug: string;
  title: string;
  launchPriority: number;
};

function CopyBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <pre className="mt-4 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

function LockedAssetPreview() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="text-lg font-bold text-amber-950">What unlocks after payment</h3>
        <ul className="mt-4 space-y-2 text-sm text-amber-900">
          <li>• Copy/paste prompt tailored to this workflow.</li>
          <li>• Claude Code and Cursor configuration notes.</li>
          <li>• Minimum MCP permission boundaries and setup checklist.</li>
          <li>• Full agent workflow with verification and rollback steps.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">Locked copy-ready assets</h3>
        <div className="mt-4 rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100">
          <p className="font-semibold text-blue-200">Free preview stops here.</p>
          <p className="mt-3 text-slate-300">
            The paid pack is the execution layer: exact prompt, config, MCP boundaries, checklist, and agent runbook.
          </p>
          <div className="mt-5 space-y-2 text-slate-400 blur-[2px] select-none">
            <p>Prompt: You are my workflow agent...</p>
            <p>Config: filesystem, git, github, docs, browser...</p>
            <p>Workflow: triage → map → risk → execute → verify...</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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

export default function WorkflowAssetGate({ slug, title, launchPriority }: Props) {
  const requiredPlan = "pro";
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked" | "error">("checking");
  const [copyReady, setCopyReady] = useState<CopyReadyWorkflow | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem(SESSION_KEY);
    if (!token) {
      setStatus("locked");
      return;
    }

    let cancelled = false;
    fetch(`/api/workflows/${slug}/assets`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        const data = (await res.json()) as WorkflowAssetResponse;
        if (!res.ok || !data.success || !data.data?.copyReady) {
          if (res.status === 401) window.localStorage.removeItem(SESSION_KEY);
          throw new Error(data.error?.message || "This workflow pack is locked.");
        }
        return data.data.copyReady;
      })
      .then((assets) => {
        if (!cancelled) {
          setCopyReady(assets);
          setStatus("unlocked");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setMessage(err instanceof Error ? err.message : "This workflow pack is locked.");
          setStatus("locked");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <section id="copy-ready-assets" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Copy-ready paid assets</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Make this pack useful in 5 minutes</h2>
          <p className="mt-4 text-slate-600">
            Free pages explain the use case. Paid access unlocks the exact prompt, MCP configuration, and agent workflow for {title}.
          </p>
        </div>

        {status === "checking" ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">Checking your pack access...</div>
        ) : null}

        {status === "unlocked" && copyReady ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-bold text-emerald-950">Unlocked: what you provide first</h3>
              <ul className="mt-4 space-y-2 text-sm text-emerald-900">
                {copyReady.missingContent.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <CopyBlock title="Copy/paste prompt" lines={copyReady.prompt} />
            <CopyBlock title="Claude Code configuration" lines={copyReady.claudeCodeConfig} />
            <CopyBlock title="Cursor configuration" lines={copyReady.cursorConfig} />
            <CopyBlock title="MCP configuration" lines={copyReady.mcpConfig} />
            <CopyBlock title="Agent workflow" lines={copyReady.agentWorkflow} />
          </div>
        ) : null}

        {status === "locked" || status === "error" ? (
          <>
            {message ? <p className="mt-5 text-sm text-slate-500">{message}</p> : null}
            <LockedAssetPreview />
          </>
        ) : null}
      </div>
    </section>
  );
}
