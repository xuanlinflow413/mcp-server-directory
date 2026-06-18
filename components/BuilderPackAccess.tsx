"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { WorkflowPack } from "@/data/workflowPacks";

type Props = {
  builderPacks: WorkflowPack[];
};

export default function BuilderPackAccess({ builderPacks }: Props) {
  const searchParams = useSearchParams();
  const isBuilderSuccess = searchParams.get("checkout") === "success" && searchParams.get("plan") === "builder";
  const isProSuccess = searchParams.get("checkout") === "success" && searchParams.get("plan") === "pro";

  return (
    <>
      {isProSuccess ? (
        <div id="pro-active" className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Payment received</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Pro is active. Start using the full workflow library.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-900">
            Your $19/month Pro subscription unlocks all workflow packs and Pro-only implementation details. Use the library below; you do not need to pay again.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="#workflow-library" className="rounded-xl bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-800">
              Open workflow library
            </Link>
            <Link href="/workflows/" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-emerald-200 hover:ring-emerald-500">
              Browse all workflows
            </Link>
          </div>
        </div>
      ) : null}

      {isBuilderSuccess ? (
        <div id="builder-pack" className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Payment received</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Workflow access is active. Start here.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-900">
            Your workflow access gives you the top launch workflow packs. Pick one below and use the implementation checklist, MCP stack, and launch steps directly.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {builderPacks.map((pack) => (
              <Link key={pack.slug} href={`/workflows/${pack.slug}/`} className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-emerald-200 hover:ring-emerald-500">
                <span className="block text-xs uppercase tracking-widest text-emerald-700">Start workflow</span>
                <span className="mt-2 block">{pack.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div id="builder-pack-overview" className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-6 text-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Workflow access</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">If you have legacy workflow access, use these 3 workflows first.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          Legacy workflow access unlocks the highest-priority MCP implementation packs below: open a workflow, follow the checklist, and use the recommended stack in your AI coding setup.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {builderPacks.map((pack) => (
            <Link key={pack.slug} href={`/workflows/${pack.slug}/`} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Builder workflow</p>
              <h3 className="mt-2 font-bold text-slate-950">{pack.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{pack.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
