"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Copy, RotateCcw, ShieldCheck } from "lucide-react";
import BillingCheckout from "@/components/BillingCheckout";

const toolOptions = ["File system", "Shell commands", "Browser automation", "External APIs", "Database", "Email or messaging", "Payment/refund", "MCP tools"];
const dataOptions = ["Public content", "User profile", "Customer records", "Source code", "Secrets/config", "Billing data", "Internal docs"];

function classifyRisk(actions: string[], data: string[], autonomy: string) {
  let score = actions.length * 8 + data.length * 6;
  if (actions.includes("Shell commands")) score += 18;
  if (actions.includes("Payment/refund")) score += 22;
  if (data.includes("Secrets/config")) score += 24;
  if (data.includes("Billing data")) score += 18;
  if (autonomy === "autonomous") score += 24;
  if (autonomy === "reviewed") score += 10;
  if (score >= 85) return { label: "Critical", score: Math.min(score, 100), color: "text-red-700", bg: "bg-red-50 border-red-200" };
  if (score >= 60) return { label: "High", score, color: "text-orange-700", bg: "bg-orange-50 border-orange-200" };
  if (score >= 35) return { label: "Medium", score, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" };
  return { label: "Low", score, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" };
}

export default function AgentPermissionBuilder() {
  const [agentName, setAgentName] = useState("Support Reply Agent");
  const [goal, setGoal] = useState("Draft customer replies, search help docs, and suggest safe refunds under policy.");
  const [tools, setTools] = useState<string[]>(["External APIs", "MCP tools"]);
  const [data, setData] = useState<string[]>(["User profile", "Customer records", "Internal docs"]);
  const [autonomy, setAutonomy] = useState("reviewed");
  const [copied, setCopied] = useState(false);

  const risk = useMemo(() => classifyRisk(tools, data, autonomy), [tools, data, autonomy]);
  const approvalGates = useMemo(() => {
    const gates = ["Require human approval before irreversible external actions.", "Log every tool call with actor, input summary, output summary, and timestamp."];
    if (tools.includes("Shell commands")) gates.push("Block shell execution by default; allow only reviewed command templates.");
    if (tools.includes("Payment/refund")) gates.push("Require approval above a low refund threshold and enforce policy checks before execution.");
    if (data.includes("Secrets/config")) gates.push("Remove secrets from model context; expose only scoped capability tokens.");
    if (data.includes("Billing data")) gates.push("Mask billing identifiers and require audit logging for every billing lookup.");
    return gates;
  }, [tools, data]);

  const policy = useMemo(() => {
    return `# ${agentName} Permission Policy\n\nPurpose: ${goal}\n\nRisk level: ${risk.label} (${risk.score}/100)\n\nAllowed capabilities:\n${tools.map((item) => `- ${item}: allow only task-scoped operations`).join("\n") || "- No tool access selected"}\n\nData boundaries:\n${data.map((item) => `- ${item}: read only the minimum fields needed for the current task`).join("\n") || "- Public content only"}\n\nAutonomy mode: ${autonomy}\n\nApproval gates:\n${approvalGates.map((item) => `- ${item}`).join("\n")}\n\nDefault denies:\n- No credential exposure in prompts or logs\n- No broad filesystem access\n- No production mutation without an approval gate\n- No cross-customer data access\n- No network calls outside the allowlist\n\nLaunch checklist:\n- Test prompt injection attempts before release\n- Verify logs do not store secrets\n- Add rate limits and rollback controls\n- Review permissions after each new tool integration`;
  }, [agentName, goal, tools, data, autonomy, risk, approvalGates]);

  const toggle = (value: string, current: string[], setter: (next: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Free builder</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Define the agent boundary</h2>
            <div className="mt-6 space-y-5">
              <label className="block text-sm font-semibold text-slate-700">Agent name
                <input value={agentName} onChange={(event) => setAgentName(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">Agent goal
                <textarea value={goal} onChange={(event) => setGoal(event.target.value)} rows={4} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" />
              </label>
              <div>
                <p className="text-sm font-semibold text-slate-700">Tool access</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {toolOptions.map((item) => <button key={item} type="button" onClick={() => toggle(item, tools, setTools)} className={`rounded-full border px-3 py-1.5 text-sm ${tools.includes(item) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>{item}</button>)}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Data access</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {dataOptions.map((item) => <button key={item} type="button" onClick={() => toggle(item, data, setData)} className={`rounded-full border px-3 py-1.5 text-sm ${data.includes(item) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>{item}</button>)}
                </div>
              </div>
              <label className="block text-sm font-semibold text-slate-700">Autonomy level
                <select value={autonomy} onChange={(event) => setAutonomy(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm">
                  <option value="assistive">Assistive only — drafts, no actions</option>
                  <option value="reviewed">Reviewed actions — human approves mutations</option>
                  <option value="autonomous">Autonomous actions — can execute within policy</option>
                </select>
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`rounded-3xl border p-6 ${risk.bg}`}>
              <div className="flex items-center gap-3">
                <ShieldCheck className={`h-6 w-6 ${risk.color}`} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Policy risk</p>
                  <h3 className={`text-3xl font-bold ${risk.color}`}>{risk.label} · {risk.score}/100</h3>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">Generated permission policy</h3>
                <div className="flex gap-2">
                  <button type="button" onClick={() => { navigator.clipboard.writeText(policy); setCopied(true); }} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"><Copy className="h-4 w-4" />{copied ? "Copied" : "Copy"}</button>
                  <button type="button" onClick={() => { setTools([]); setData([]); setAutonomy("assistive"); }} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"><RotateCcw className="h-4 w-4" />Reset</button>
                </div>
              </div>
              <pre className="mt-5 max-h-[540px] overflow-auto whitespace-pre-wrap rounded-2xl bg-black/40 p-4 text-sm leading-6 text-slate-100">{policy}</pre>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Pro lead magnet</p>
            <h3 className="mt-2 text-xl font-bold text-slate-950">Export this as a compliance-ready permission audit</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">The free builder creates the policy draft. Pro turns it into an audit checklist with owners, reviewed scopes, approval evidence, launch risks, and next-review dates.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>✓ Reviewed tool and credential scope table</li>
              <li>✓ Approval-gate checklist for risky actions</li>
              <li>✓ Prompt-injection and bypass test prompts</li>
              <li>✓ Evidence format for security review handoff</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:min-w-72">
            <BillingCheckout plan="pro" label="Export Pro audit report" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700" />
            <Link href="/guides/agent-permission-builder/" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100">See report structure</Link>
            <Link href="/pricing/" className="text-center text-sm font-semibold text-blue-700 hover:text-blue-900">Compare Pro pricing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
