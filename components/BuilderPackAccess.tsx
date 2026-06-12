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

  return (
    <>
      {isBuilderSuccess ? (
        <div id="builder-pack" className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Payment received</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Builder Pack is unlocked. Start here.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-900">
            Your $9.99 Builder Pack gives you the top 3 launch workflow packs. Pick one below and use the implementation checklist, MCP stack, and launch steps directly.
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
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Builder Pack access</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">If you bought the $9.99 Builder Pack, use these 3 workflows first.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          Builder Pack is not a separate dashboard yet. It unlocks the highest-priority MCP implementation packs below: open a workflow, follow the checklist, and use the recommended stack in your AI coding setup.
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
