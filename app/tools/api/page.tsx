import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, FileJson, PlugZap, Shield } from "lucide-react";

const baseUrl = "https://bestmcpservers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "BestMCPServers Tool API — JSON, Base64, JWT Utilities",
  description:
    "Use BestMCPServers developer tools through a public HTTP API and OpenAPI spec. Format JSON, validate JSON, encode Base64, decode Base64, and inspect JWTs.",
  alternates: {
    canonical: `${baseUrl}/tools/api/`,
  },
  openGraph: {
    title: "BestMCPServers Tool API",
    description: "Public API and OpenAPI docs for AI-callable JSON, Base64, and JWT developer utilities.",
    type: "website",
    url: `${baseUrl}/tools/api/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "BestMCPServers Tool API",
    description: "AI-callable developer tools for JSON, Base64, and JWT workflows.",
  },
};

const endpoints = [
  { name: "Format JSON", method: "POST", path: "/api/json/format", operation: "formatJson" },
  { name: "Validate JSON", method: "POST", path: "/api/json/validate", operation: "validateJson" },
  { name: "Encode Base64", method: "POST", path: "/api/base64/encode", operation: "encodeBase64" },
  { name: "Decode Base64", method: "POST", path: "/api/base64/decode", operation: "decodeBase64" },
  { name: "Decode JWT", method: "POST", path: "/api/jwt/decode", operation: "decodeJwt" },
];

export default function ToolApiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${baseUrl}/tools/` },
      { "@type": "ListItem", position: 3, name: "Tool API", item: `${baseUrl}/tools/api/` },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BestMCPServers Tool API",
    url: `${baseUrl}/tools/api/`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link href="/tools/" className="text-sm font-medium text-blue-300 hover:text-blue-200">
            ← Back to tools
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
              <PlugZap className="h-4 w-4" />
              AI-callable developer tools
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">BestMCPServers Tool API</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Call BestMCPServers utilities directly from agents, scripts, ChatGPT Actions, OpenAPI clients, and future MCP clients. The first API layer exposes JSON formatting, JSON validation, Base64 encode/decode, and JWT decode tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/openapi.json" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
                View OpenAPI JSON
              </Link>
              <Link href="/openapi.yaml" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400">
                View OpenAPI YAML
              </Link>
              <Link href="/guides/use-bestmcpservers-api-with-chatgpt/" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400">
                ChatGPT setup guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <Code2 className="h-8 w-8 text-blue-600" />
              <h2 className="mt-4 text-lg font-bold text-slate-900">HTTP POST API</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Every tool accepts JSON input with a single content field and returns a consistent success/error envelope.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <FileJson className="h-8 w-8 text-blue-600" />
              <h2 className="mt-4 text-lg font-bold text-slate-900">OpenAPI Ready</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Import the OpenAPI spec into ChatGPT Actions, internal agents, or API clients without manual endpoint setup.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h2 className="mt-4 text-lg font-bold text-slate-900">No Auth v0</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">No database, login, payment, or API key. Rate limiting is designed for a later Cloudflare layer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Available Endpoints</h2>
          <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {endpoints.map((endpoint) => (
              <div key={endpoint.path} className="grid gap-4 p-5 md:grid-cols-[160px_1fr_180px] md:items-center">
                <div>
                  <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{endpoint.method}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{endpoint.name}</h3>
                  <code className="mt-1 block text-sm text-slate-600">{endpoint.path}</code>
                </div>
                <div className="text-sm text-slate-500">operationId: {endpoint.operation}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-slate-100">
            <h2 className="text-lg font-bold">Example request</h2>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-black/40 p-4 text-sm"><code>{`curl -X POST https://bestmcpservers.com/api/json/format \\
  -H "Content-Type: application/json" \\
  -d '{"content":"{\\"name\\":\\"BestMCPServers\\"}"}'`}</code></pre>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">MCP Server Direction</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              The HTTP API is the first step toward a hosted MCP tool provider. The same core functions can be exposed later through a remote MCP endpoint so Claude, Cursor, OpenClaw, and other clients can discover tools like format_json, validate_json, encode_base64, decode_base64, and decode_jwt.
            </p>
            <Link href="/agents/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
              Explore MCP agents and servers <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link href="/guides/use-bestmcpservers-api-with-chatgpt/" className="font-semibold text-blue-700 hover:text-blue-900">ChatGPT Actions guide</Link>
              <Link href="/guides/use-bestmcpservers-tools-with-cursor/" className="font-semibold text-blue-700 hover:text-blue-900">Cursor MCP guide</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
