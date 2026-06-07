"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Download, FileJson, KeyRound, RefreshCw, ShieldCheck } from "lucide-react";
import type { McpConfigTool } from "@/data/mcpConfigTools";

type Props = { tool: McpConfigTool };

type PermissionMode = "Read-only" | "Read/write" | "Dangerous / requires approval";
type DataSensitivity = "Public" | "Internal" | "Customer data" | "Credentials / secrets" | "Production systems";
type DeploymentType = "Local only" | "Team machine" | "Cloud-hosted" | "Production";
type ClientTarget = "Claude Desktop" | "Cursor" | "Generic MCP client" | "Local development" | "Documentation example";
type OutputStyle = "JSON config" | "README snippet" | "Setup checklist";

const workflowOptions = ["Coding assistant", "Repo analysis", "Docs lookup", "Issue triage", "Browser testing", "Custom workflow"];
const categoryDefaults: Record<string, { command: string; args: string[]; env: string[] }> = {
  Filesystem: { command: "npx", args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/workspace"], env: [] },
  GitHub: { command: "npx", args: ["-y", "@modelcontextprotocol/server-github"], env: ["GITHUB_TOKEN"] },
  Browser: { command: "npx", args: ["-y", "@modelcontextprotocol/server-puppeteer"], env: ["BROWSER_HEADLESS", "BROWSER_TIMEOUT_MS"] },
  Database: { command: "npx", args: ["-y", "@modelcontextprotocol/server-postgres"], env: ["DATABASE_URL"] },
  Search: { command: "npx", args: ["-y", "@modelcontextprotocol/server-brave-search"], env: ["BRAVE_API_KEY"] },
  Docs: { command: "npx", args: ["-y", "@modelcontextprotocol/server-memory"], env: [] },
  Memory: { command: "npx", args: ["-y", "@modelcontextprotocol/server-memory"], env: [] },
  Custom: { command: "node", args: ["./dist/server.js"], env: ["MCP_SERVER_TOKEN"] },
};

function parseCsv(value: string): string[] {
  return value.split(/[,\n]/).map((item) => item.trim()).filter(Boolean);
}

function shellArgs(value: string): string[] {
  const matches = value.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
  return matches.map((item) => item.replace(/^["']|["']$/g, "").trim()).filter(Boolean);
}

function envObject(names: string[]): Record<string, string> | undefined {
  const safeNames = names.map((name) => name.replace(/[^A-Z0-9_]/gi, "_").toUpperCase()).filter(Boolean);
  if (!safeNames.length) return undefined;
  return Object.fromEntries(safeNames.map((name) => [name, `\${${name}}`]));
}

function buildConfig(serverName: string, command: string, args: string[], envVars: string[]) {
  const server: { command: string; args?: string[]; env?: Record<string, string> } = { command };
  if (args.length) server.args = args;
  const env = envObject(envVars);
  if (env) server.env = env;
  return { mcpServers: { [serverName || "mcp-server"]: server } };
}

function stringifyConfig(serverName: string, command: string, args: string[], envVars: string[]) {
  return JSON.stringify(buildConfig(serverName, command, args, envVars), null, 2);
}

function makeSetupNotes(mode: string, workflow: string, permission: PermissionMode, serverType: string) {
  const client = mode === "cursor" ? "Cursor MCP settings" : mode === "claude-desktop" ? "Claude Desktop claude_desktop_config.json" : "your MCP client configuration";
  return [
    `1. Add this ${serverType} server to ${client}.`,
    "2. Store real tokens outside version control and use environment variable names in shared examples.",
    "3. Restart the MCP client after editing configuration.",
    `4. Test ${permission.toLowerCase()} actions with a low-risk workspace before expanding scope.`,
    workflow ? `5. Confirm the config supports the ${workflow.toLowerCase()} workflow before enabling it for teammates.` : "5. Confirm the workflow before enabling it for teammates.",
  ].join("\n");
}

function makeEnvTemplate(serverType: string, vars: string[], includeComments: boolean, prefixStyle: string) {
  const normalized = vars.map((name) => name.replace(/[^A-Z0-9_]/gi, "_").toUpperCase()).filter(Boolean);
  const lines: string[] = [];
  if (includeComments) {
    lines.push(`# ${serverType} MCP server`);
    lines.push("# Never commit real tokens. Use this file as .env.example only.");
  }
  for (const raw of normalized) {
    const name = prefixStyle === "MCP_" && !raw.startsWith("MCP_") ? `MCP_${raw}` : raw;
    if (name.includes("TOKEN") || name.includes("KEY") || name.includes("SECRET")) lines.push(`${name}=`);
    else if (name.includes("HEADLESS")) lines.push(`${name}=true`);
    else if (name.includes("TIMEOUT")) lines.push(`${name}=30000`);
    else lines.push(`${name}=`);
  }
  lines.push("");
  if (includeComments) {
    lines.push("# .env.example can be committed. .env should stay local and ignored by git.");
    lines.push("# Do not paste real API keys, tokens, passwords, or connection strings into public issues or PRs.");
  }
  return lines.join("\n");
}

function makeSecurityChecklist(opts: { serverType: string; dataSensitivity: DataSensitivity; permission: PermissionMode; deployment: DeploymentType; envVars: string[]; hasSecrets: boolean; hasWriteActions: boolean }) {
  const highRisk = opts.permission !== "Read-only" || opts.hasWriteActions || opts.dataSensitivity !== "Public" || opts.deployment === "Production";
  const normalizedEnvVars = opts.envVars.map((name) => name.replace(/[^A-Z0-9_]/gi, "_").toUpperCase()).filter(Boolean);
  const envChecklist = normalizedEnvVars.length
    ? `- [ ] Environment variable placeholders are reviewed: ${normalizedEnvVars.join(", ")}.\n- [ ] Each listed variable has an owner, scope, and rotation plan.\n`
    : "- [ ] Required environment variables are listed before rollout.\n";
  return `# MCP Security Checklist\n\n## Scope\n- [ ] Server purpose is documented.\n- [ ] Data sources are listed.\n- [ ] Server type is recorded as ${opts.serverType}.\n- [ ] Data sensitivity is recorded as ${opts.dataSensitivity}.\n- [ ] Permission level is recorded as ${opts.permission}.\n\n## Secrets\n- [ ] No real secrets are stored in committed config.\n- [ ] Tokens use least-privilege scopes.\n- [ ] Production credentials are separated from development.\n${envChecklist}${opts.hasSecrets ? "- [ ] Secret rotation owner and schedule are documented.\n" : "- [ ] Confirm whether this server truly needs secrets.\n"}\n## Permissions\n- [ ] Start with read-only scope where possible.\n- [ ] Write actions require human approval.\n- [ ] Destructive actions have rollback steps.\n${opts.hasWriteActions ? "- [ ] Write tools are tested in a sandbox before real repositories, files, or databases.\n" : "- [ ] No write-capable tools are enabled without a separate review.\n"}\n## Prompt Injection\n- [ ] Tool outputs are treated as untrusted content.\n- [ ] Web pages, issues, docs, and messages cannot override policy.\n- [ ] Destructive actions require human approval.\n\n## Logging\n- [ ] Tool calls are logged.\n- [ ] Sensitive values are redacted.\n- [ ] Failure modes are documented.\n\n## Deployment\n- [ ] Deployment type is recorded as ${opts.deployment}.\n- [ ] Team members know where config lives and who owns it.\n${highRisk ? "- [ ] High-risk access receives a second human review before production use.\n" : "- [ ] Low-risk setup still has owner, logs, and rollback notes.\n"}`;
}

export default function McpConfigGenerator({ tool }: Props) {
  const initialServerType = tool.serverTypes[0] || "Custom";
  const [serverName, setServerName] = useState(tool.defaultServerName);
  const [serverType, setServerType] = useState(initialServerType);
  const [command, setCommand] = useState(tool.defaultCommand || "npx");
  const [args, setArgs] = useState(tool.defaultArgs.join(" "));
  const [envVars, setEnvVars] = useState(tool.defaultEnvVars.join(", "));
  const [permission, setPermission] = useState<PermissionMode>("Read-only");
  const [workflow, setWorkflow] = useState(workflowOptions[0]);
  const [clientTarget, setClientTarget] = useState<ClientTarget>(tool.mode === "claude-desktop" ? "Claude Desktop" : tool.mode === "cursor" ? "Cursor" : "Generic MCP client");
  const [outputStyle, setOutputStyle] = useState<OutputStyle>("JSON config");
  const [dataSensitivity, setDataSensitivity] = useState<DataSensitivity>("Internal");
  const [deployment, setDeployment] = useState<DeploymentType>("Local only");
  const [hasSecrets, setHasSecrets] = useState(true);
  const [hasWriteActions, setHasWriteActions] = useState(false);
  const [includeComments, setIncludeComments] = useState(true);
  const [prefixStyle, setPrefixStyle] = useState("none");
  const [copied, setCopied] = useState(false);

  const applyServerType = useCallback((nextType: string) => {
    setServerType(nextType);
    const defaults = categoryDefaults[nextType];
    if (defaults) {
      setServerName(nextType.toLowerCase().replace(/\s+/g, "-"));
      if (tool.mode !== "env-template" && tool.mode !== "security-checklist") {
        setCommand(defaults.command);
        setArgs(defaults.args.join(" "));
      }
      setEnvVars(defaults.env.join(", "));
    }
  }, [tool.mode]);

  const output = useMemo(() => {
    const argList = shellArgs(args);
    const envList = parseCsv(envVars);
    if (tool.mode === "env-template") return makeEnvTemplate(serverType, envList, includeComments, prefixStyle);
    if (tool.mode === "security-checklist") return makeSecurityChecklist({ serverType, dataSensitivity, permission, deployment, envVars: envList, hasSecrets, hasWriteActions });
    if (outputStyle === "README snippet") {
      return `## ${clientTarget} MCP server config\n\nUse this as a planning template. Review official server docs before production use.\n\n\`\`\`json\n${stringifyConfig(serverName, command, argList, envList)}\n\`\`\`\n\n### Setup notes\n${makeSetupNotes(tool.mode, workflow, permission, serverType)}`;
    }
    if (outputStyle === "Setup checklist") return makeSetupNotes(tool.mode, workflow, permission, serverType);
    return stringifyConfig(serverName, command, argList, envList);
  }, [args, clientTarget, command, dataSensitivity, deployment, envVars, hasSecrets, hasWriteActions, includeComments, outputStyle, permission, prefixStyle, serverName, serverType, tool.mode, workflow]);

  const copyOutput = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, [output]);

  const downloadOutput = useCallback(() => {
    const ext = tool.mode === "security-checklist" ? "md" : tool.mode === "env-template" ? "env.example" : "json";
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tool.slug}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [output, tool.mode, tool.slug]);

  return (
    <section id="generator" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3"><FileJson className="h-5 w-5 text-blue-600" /></div>
              <div>
                <h2 className="text-xl font-bold text-slate-950">Generate your template</h2>
                <p className="text-sm text-slate-600">Browser-only inputs. Use environment variable names, not real secrets.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {(tool.mode === "cursor" || tool.mode === "generic-config") && (
                <label className="grid gap-2 text-sm font-medium text-slate-700">{tool.mode === "cursor" ? "Workflow" : "Client target"}
                  <select value={tool.mode === "cursor" ? workflow : clientTarget} onChange={(event) => tool.mode === "cursor" ? setWorkflow(event.target.value) : setClientTarget(event.target.value as ClientTarget)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950">
                    {(tool.mode === "cursor" ? workflowOptions : ["Claude Desktop", "Cursor", "Generic MCP client", "Local development", "Documentation example"]).map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
              )}

              <label className="grid gap-2 text-sm font-medium text-slate-700">Server type
                <select value={serverType} onChange={(event) => applyServerType(event.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950">
                  {tool.serverTypes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              {tool.mode !== "env-template" && tool.mode !== "security-checklist" && (
                <>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Server name
                    <input value={serverName} onChange={(event) => setServerName(event.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 text-slate-950" placeholder="filesystem" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Command
                    <input value={command} onChange={(event) => setCommand(event.target.value)} className="rounded-xl border border-slate-300 px-3 py-2 font-mono text-sm text-slate-950" placeholder="npx" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Args
                    <textarea value={args} onChange={(event) => setArgs(event.target.value)} rows={3} className="rounded-xl border border-slate-300 px-3 py-2 font-mono text-sm text-slate-950" placeholder="-y @modelcontextprotocol/server-filesystem /path/to/project" />
                  </label>
                </>
              )}

              <label className="grid gap-2 text-sm font-medium text-slate-700">Env variable names
                <textarea value={envVars} onChange={(event) => setEnvVars(event.target.value)} rows={2} className="rounded-xl border border-slate-300 px-3 py-2 font-mono text-sm text-slate-950" placeholder="GITHUB_TOKEN, DATABASE_URL" />
              </label>

              {tool.mode === "env-template" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Prefix style
                    <select value={prefixStyle} onChange={(event) => setPrefixStyle(event.target.value)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950"><option value="none">Keep names</option><option value="MCP_">Add MCP_ prefix</option></select>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={includeComments} onChange={(event) => setIncludeComments(event.target.checked)} /> Include comments</label>
                </div>
              )}

              {tool.mode !== "env-template" && (
                <label className="grid gap-2 text-sm font-medium text-slate-700">Permission mode
                  <select value={permission} onChange={(event) => setPermission(event.target.value as PermissionMode)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950"><option>Read-only</option><option>Read/write</option><option>Dangerous / requires approval</option></select>
                </label>
              )}

              {tool.mode === "generic-config" && (
                <label className="grid gap-2 text-sm font-medium text-slate-700">Output style
                  <select value={outputStyle} onChange={(event) => setOutputStyle(event.target.value as OutputStyle)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950"><option>JSON config</option><option>README snippet</option><option>Setup checklist</option></select>
                </label>
              )}

              {tool.mode === "security-checklist" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Data sensitivity
                    <select value={dataSensitivity} onChange={(event) => setDataSensitivity(event.target.value as DataSensitivity)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950"><option>Public</option><option>Internal</option><option>Customer data</option><option>Credentials / secrets</option><option>Production systems</option></select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">Deployment type
                    <select value={deployment} onChange={(event) => setDeployment(event.target.value as DeploymentType)} className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-950"><option>Local only</option><option>Team machine</option><option>Cloud-hosted</option><option>Production</option></select>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={hasSecrets} onChange={(event) => setHasSecrets(event.target.checked)} /> Has secrets?</label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={hasWriteActions} onChange={(event) => setHasWriteActions(event.target.checked)} /> Has write actions?</label>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-white">Generated output</h2>
                <p className="text-sm text-slate-400">Review before production. This is a planning template.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={copyOutput} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"><Copy className="h-4 w-4" /> {copied ? "Copied" : "Copy output"}</button>
                <button onClick={downloadOutput} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"><Download className="h-4 w-4" /> Download</button>
              </div>
            </div>
            <pre className="mt-5 h-[520px] overflow-auto rounded-2xl bg-black/40 p-4 text-xs leading-6 text-slate-100"><code>{output}</code></pre>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900"><ShieldCheck className="mb-2 h-5 w-5" />Generated configs are planning templates. Review server documentation and never paste real secrets into shared config files.</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700"><KeyRound className="mb-2 h-5 w-5 text-blue-600" />Use variable names such as GITHUB_TOKEN or DATABASE_URL. Keep actual values in local .env files or secret managers.</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700"><RefreshCw className="mb-2 h-5 w-5 text-blue-600" />Restart Claude Desktop, Cursor, or your MCP client after editing configuration, then test read-only actions first.</div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Related tools and guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {tool.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm">
                <div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-slate-950 group-hover:text-blue-600">{link.label}</h3><ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600" /></div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
