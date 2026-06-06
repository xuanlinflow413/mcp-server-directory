"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  Clipboard,
  Copy,
  Download,
  FileJson,
  Hash,
  KeyRound,
  Link2,
  RefreshCw,
  Trash2,
  Code2,
  Database,
  Eye,
} from "lucide-react";
import type { ToolConfig } from "@/data/developerTools";
import { relatedTools } from "@/data/developerTools";

type Props = { tool: ToolConfig };

type JwtDecoded = { header: string; payload: string; expiration: string };

type ApiInfo = {
  endpoint: string;
  operationId: string;
  mcpTool: string;
  exampleContent: string;
};

function getApiInfo(tool: ToolConfig): ApiInfo | null {
  if (tool.slug === "json-validator") {
    return {
      endpoint: "/api/json/validate",
      operationId: "validateJson",
      mcpTool: "validate_json",
      exampleContent: '{"name":"BestMCPServers"}',
    };
  }

  if (tool.mode === "base64") {
    return {
      endpoint: "/api/base64/encode",
      operationId: "encodeBase64 / decodeBase64",
      mcpTool: "encode_base64 / decode_base64",
      exampleContent: "BestMCPServers developer tools",
    };
  }

  if (tool.mode === "jwt") {
    return {
      endpoint: "/api/jwt/decode",
      operationId: "decodeJwt",
      mcpTool: "decode_jwt",
      exampleContent: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMifQ.signature",
    };
  }

  return null;
}

function base64UrlDecode(value: string): string {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(padded), (char: string) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(""),
  );
}

function safeBase64Encode(value: string): string {
  return btoa(unescape(encodeURIComponent(value)));
}

function safeBase64Decode(value: string): string {
  return decodeURIComponent(escape(atob(value.trim())));
}

function errorLocation(input: string, message: string): string {
  const match = message.match(/position (\d+)/i);
  if (!match) return message;
  const index = Number(match[1]);
  const before = input.slice(0, index);
  const line = before.split("\n").length;
  const column = before.length - before.lastIndexOf("\n");
  return `${message} (line ${line}, column ${column})`;
}

function makeUuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16),
  );
}

function formatHtml(value: string): string {
  const tokens = value
    .replace(/>\s+</g, "><")
    .replace(/</g, "\n<")
    .replace(/>/g, ">\n")
    .split("\n")
    .map((token) => token.trim())
    .filter(Boolean);
  let indent = 0;
  return tokens
    .map((token) => {
      if (/^<\//.test(token)) indent = Math.max(indent - 1, 0);
      const line = `${"  ".repeat(indent)}${token}`;
      if (/^<[^!?/][^>]*[^/]?>$/.test(token) && !/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b/i.test(token)) {
        indent += 1;
      }
      return line;
    })
    .join("\n");
}

function formatSql(value: string): string {
  const keywords = [
    "SELECT",
    "FROM",
    "WHERE",
    "INNER JOIN",
    "LEFT JOIN",
    "RIGHT JOIN",
    "FULL JOIN",
    "JOIN",
    "ON",
    "GROUP BY",
    "HAVING",
    "ORDER BY",
    "LIMIT",
    "OFFSET",
    "INSERT INTO",
    "VALUES",
    "UPDATE",
    "SET",
    "DELETE FROM",
    "RETURNING",
  ];
  let sql = value.replace(/\s+/g, " ").trim();
  keywords.forEach((keyword) => {
    sql = sql.replace(new RegExp(`\\s+(${keyword.replace(/ /g, "\\s+")})\\s+`, "gi"), `\n$1 `);
  });
  return sql
    .replace(/,\s*/g, ",\n  ")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^(select|from|where|inner join|left join|right join|full join|join|on|group by|having|order by|limit|offset|insert into|values|update|set|delete from|returning)\b/i, (match) => match.toUpperCase()))
    .join("\n");
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let inCode = false;
  let inList = false;
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("```")) {
      if (inCode) {
        html.push("</code></pre>");
        inCode = false;
      } else {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push("<pre><code>");
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      html.push(escapeHtml(raw));
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!inList) { html.push("<ul>"); inList = true; }
      html.push(`<li>${inlineMarkdown(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    if (inList) { html.push("</ul>"); inList = false; }
    if (!line.trim()) continue;
    if (line.startsWith("### ")) html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
    else if (line.startsWith("## ")) html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
    else if (line.startsWith("# ")) html.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
    else if (line.startsWith("> ")) html.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
    else html.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  if (inList) html.push("</ul>");
  if (inCode) html.push("</code></pre>");
  return html.join("\n");
}

function inlineMarkdown(value: string): string {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="nofollow noopener" target="_blank">$1</a>');
}

export default function DeveloperToolPage({ tool }: Props) {
  const [input, setInput] = useState(tool.sample);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(5);
  const related = useMemo(() => relatedTools(tool.slug), [tool.slug]);
  const apiInfo = useMemo(() => getApiInfo(tool), [tool]);

  const clearState = useCallback(() => {
    setInput("");
    setOutput("");
    setStatus(null);
    setError(null);
  }, []);

  const copyText = useCallback(async (value: string) => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setStatus("Copied to clipboard.");
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setStatus("Copied to clipboard.");
    }
  }, []);

  const downloadText = useCallback((filename: string, value: string) => {
    if (!value) return;
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const runJsonValidate = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setOutput(pretty);
      setError(null);
      setStatus("Valid JSON. No syntax errors found.");
    } catch (e) {
      const message = e instanceof Error ? e.message : "Invalid JSON";
      setOutput("");
      setStatus(null);
      setError(errorLocation(input, message));
    }
  }, [input]);

  const runBase64Encode = useCallback(() => {
    try {
      setOutput(safeBase64Encode(input));
      setError(null);
      setStatus("Encoded to Base64.");
    } catch {
      setError("Unable to encode this input as UTF-8 text.");
    }
  }, [input]);

  const runBase64Decode = useCallback(() => {
    try {
      setOutput(safeBase64Decode(input));
      setError(null);
      setStatus("Decoded from Base64.");
    } catch {
      setOutput("");
      setStatus(null);
      setError("Invalid Base64 input or unsupported character encoding.");
    }
  }, [input]);

  const runJwtDecode = useCallback(() => {
    try {
      const parts = input.trim().split(".");
      if (parts.length < 2) throw new Error("A JWT must contain at least header and payload parts.");
      const headerObj = JSON.parse(base64UrlDecode(parts[0]));
      const payloadObj = JSON.parse(base64UrlDecode(parts[1]));
      let expiration = "No exp claim found.";
      if (payloadObj.exp) {
        const date = new Date(Number(payloadObj.exp) * 1000);
        expiration = `Expires: ${date.toLocaleString()} (${date.toUTCString()})`;
      }
      const decoded: JwtDecoded = {
        header: JSON.stringify(headerObj, null, 2),
        payload: JSON.stringify(payloadObj, null, 2),
        expiration,
      };
      setOutput(`${decoded.header}\n\n${decoded.payload}\n\n${decoded.expiration}`);
      setError(null);
      setStatus("JWT decoded. Signature is not verified by this tool.");
    } catch (e) {
      const message = e instanceof Error ? e.message : "Invalid JWT";
      setOutput("");
      setStatus(null);
      setError(message);
    }
  }, [input]);

  const runUrlEncode = useCallback(() => {
    setOutput(encodeURIComponent(input));
    setError(null);
    setStatus("Encoded URL component.");
  }, [input]);

  const runUrlDecode = useCallback(() => {
    try {
      setOutput(decodeURIComponent(input.replace(/\+/g, " ")));
      setError(null);
      setStatus("Decoded URL string.");
    } catch {
      setOutput("");
      setStatus(null);
      setError("Invalid URL-encoded input.");
    }
  }, [input]);

  const runUuidGenerate = useCallback(() => {
    const safeCount = Math.max(1, Math.min(100, count));
    const ids = Array.from({ length: safeCount }, () => makeUuid()).join("\n");
    setOutput(ids);
    setError(null);
    setStatus(`Generated ${safeCount} UUID v4 value${safeCount > 1 ? "s" : ""}.`);
  }, [count]);

  const runHtmlFormat = useCallback(() => {
    setOutput(formatHtml(input));
    setError(null);
    setStatus("Formatted HTML markup.");
  }, [input]);

  const runSqlFormat = useCallback(() => {
    setOutput(formatSql(input));
    setError(null);
    setStatus("Formatted SQL query.");
  }, [input]);

  const runMarkdownPreview = useCallback(() => {
    setOutput(markdownToHtml(input));
    setError(null);
    setStatus("Generated Markdown preview HTML.");
  }, [input]);

  const buttons = (() => {
    if (tool.mode === "json-validator") {
      return [
        { label: "Validate", icon: CheckCircle, onClick: runJsonValidate, primary: true },
        { label: "Sample JSON", icon: FileJson, onClick: () => setInput(tool.sample) },
      ];
    }
    if (tool.mode === "base64") {
      return [
        { label: "Encode", icon: Clipboard, onClick: runBase64Encode, primary: true },
        { label: "Decode", icon: RefreshCw, onClick: runBase64Decode },
        { label: "Sample Text", icon: FileJson, onClick: () => setInput(tool.sample) },
      ];
    }
    if (tool.mode === "jwt") {
      return [{ label: "Decode JWT", icon: KeyRound, onClick: runJwtDecode, primary: true }];
    }
    if (tool.mode === "url") {
      return [
        { label: "Encode URL", icon: Link2, onClick: runUrlEncode, primary: true },
        { label: "Decode URL", icon: RefreshCw, onClick: runUrlDecode },
      ];
    }
    if (tool.mode === "uuid") {
      return [{ label: "Generate UUID v4", icon: Hash, onClick: runUuidGenerate, primary: true }];
    }
    if (tool.mode === "html") {
      return [
        { label: "Format HTML", icon: Code2, onClick: runHtmlFormat, primary: true },
        { label: "Sample HTML", icon: FileJson, onClick: () => setInput(tool.sample) },
      ];
    }
    if (tool.mode === "sql") {
      return [
        { label: "Format SQL", icon: Database, onClick: runSqlFormat, primary: true },
        { label: "Sample SQL", icon: FileJson, onClick: () => setInput(tool.sample) },
      ];
    }
    if (tool.mode === "markdown") {
      return [
        { label: "Preview Markdown", icon: Eye, onClick: runMarkdownPreview, primary: true },
        { label: "Sample Markdown", icon: FileJson, onClick: () => setInput(tool.sample) },
      ];
    }
    return [];
  })();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
        { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://bestmcpservers.com/tools/" },
        { "@type": "ListItem", position: 3, name: tool.name, item: tool.canonical },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-slate-900 hover:text-slate-700">BestMCPServers</Link>
            <span className="hidden sm:inline text-xs text-slate-400 ml-2">AI Tools &amp; Developer Utilities</span>
            <nav className="flex gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/rsp/" className="text-sm text-slate-600 hover:text-slate-900">Prompt Library</Link>
              <Link href="/tools/" className="text-sm font-semibold text-blue-600">Tools</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li className="text-slate-300">/</li>
            <li><Link href="/tools/" className="hover:text-slate-900">Developer Tools</Link></li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-900">{tool.name}</li>
          </ol>
        </nav>
      </div>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{tool.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">{tool.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tool.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {buttons.map((button) => (
              <button
                key={button.label}
                onClick={button.onClick}
                disabled={tool.mode !== "uuid" && !input.length}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${button.primary ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100"}`}
              >
                <button.icon className="w-4 h-4" /> {button.label}
              </button>
            ))}
            <button onClick={() => copyText(output)} disabled={!output} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 hover:bg-slate-100 disabled:text-slate-400">
              <Copy className="w-4 h-4" /> Copy
            </button>
            <button onClick={() => downloadText(`${tool.slug}.txt`, output)} disabled={!output} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 hover:bg-slate-100 disabled:text-slate-400">
              <Download className="w-4 h-4" /> Download
            </button>
            <button onClick={clearState} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Trash2 className="w-4 h-4" /> Clear
            </button>
          </div>

          {tool.mode === "uuid" && (
            <div className="mb-4 flex items-center gap-3">
              <label className="text-sm font-medium text-slate-700" htmlFor="uuid-count">Generate Multiple</label>
              <input id="uuid-count" type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-6">
            {tool.mode !== "uuid" && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Input</label>
                <textarea value={input} onChange={(event) => setInput(event.target.value)} spellCheck={false} className="h-96 w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Paste content here..." />
              </div>
            )}
            <div className={tool.mode === "uuid" ? "lg:col-span-2" : ""}>
              <label className="mb-2 block text-sm font-medium text-slate-700">Output</label>
              <textarea value={output} readOnly spellCheck={false} className="h-96 w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-900" placeholder="Results will appear here..." />
              {tool.mode === "markdown" && output && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                  <p className="mb-3 text-sm font-semibold text-slate-700">Rendered Preview</p>
                  <div
                    className="prose prose-slate max-w-none text-sm leading-7 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-slate-950 [&_pre]:p-4 [&_pre]:text-slate-100 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1"
                    dangerouslySetInnerHTML={{ __html: output }}
                  />
                </div>
              )}
            </div>
          </div>

          {(status || error) && (
            <div className={`mt-4 rounded-xl border p-4 text-sm ${error ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
              <div className="flex items-start gap-2">
                {error ? <AlertCircle className="mt-0.5 h-4 w-4" /> : <CheckCircle className="mt-0.5 h-4 w-4" />}
                <span>{error || status}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {apiInfo && (
        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">API available</p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950">Call this tool from scripts and AI agents</h2>
                  <p className="mt-3 leading-7 text-slate-700">
                    This utility is also exposed through the BestMCPServers Tool API. Use the HTTP endpoint now, import the OpenAPI spec into ChatGPT Actions, or map it to the future MCP tool name for Claude, Cursor, and OpenClaw workflows.
                  </p>
                  <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-4">
                      <p className="font-semibold text-slate-900">Endpoint</p>
                      <code className="mt-1 block break-all text-blue-700">{apiInfo.endpoint}</code>
                    </div>
                    <div className="rounded-xl bg-white p-4">
                      <p className="font-semibold text-slate-900">OpenAPI operation</p>
                      <code className="mt-1 block break-all text-blue-700">{apiInfo.operationId}</code>
                    </div>
                    <div className="rounded-xl bg-white p-4">
                      <p className="font-semibold text-slate-900">MCP tool name</p>
                      <code className="mt-1 block break-all text-blue-700">{apiInfo.mcpTool}</code>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:max-w-md">
                  <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-slate-100"><code>{`curl -X POST https://bestmcpservers.com${apiInfo.endpoint} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify({ content: apiInfo.exampleContent })}'`}</code></pre>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/tools/api/" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">API docs</Link>
                    <Link href="/openapi.json" className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">OpenAPI JSON</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">How To Use</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              <li>Paste or generate the content in the tool area.</li>
              <li>Run the primary action such as validate, encode, decode, or generate.</li>
              <li>Review the result, error message, or expiration viewer.</li>
              <li>Copy or download the output for development use.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Best Practices</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Keep sensitive production secrets out of online tools.</li>
              <li>Validate generated output before using it in production.</li>
              <li>Prefer local, browser-only utilities for quick debugging.</li>
              <li>Save repeatable examples as fixtures for future tests.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Common Mistakes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Confusing encoding with encryption or signature verification.</li>
              <li>Copying stale output after changing input.</li>
              <li>Ignoring parser errors that point to a specific syntax location.</li>
              <li>Using identifiers or decoded tokens as security secrets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tool.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Related Tools</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((item) => (
              <Link key={item.slug} href={`/tools/${item.slug}/`} className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Need more developer utilities?</h2>
          <p className="mt-3 text-slate-400">Explore browser-only tools for JSON, tokens, encoding, URLs, and identifiers.</p>
          <Link href="/tools/" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Browse all tools</Link>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">&copy; 2026 BestMCPServers. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">Home</Link>
              <Link href="/rsp/" className="text-sm text-slate-500 hover:text-slate-900">Prompt Library</Link>
              <Link href="/tools/" className="text-sm text-slate-500 hover:text-slate-900">Tools</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
