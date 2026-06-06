import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://bestmcpservers.com";
const canonical = `${baseUrl}/guides/use-bestmcpservers-tools-with-cursor/`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Use BestMCPServers Tools with Cursor and MCP",
  description: "Connect Cursor workflows to BestMCPServers developer tools through HTTP endpoints today and a future remote MCP server.",
  alternates: { canonical },
  openGraph: {
    title: "Use BestMCPServers Tools with Cursor and MCP",
    description: "Connect Cursor workflows to BestMCPServers developer tools through HTTP endpoints today and a future remote MCP server.",
    type: "article",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Use BestMCPServers Tools with Cursor and MCP",
    description: "Connect Cursor workflows to BestMCPServers developer tools through HTTP endpoints today and a future remote MCP server.",
  },
  robots: { index: true, follow: true },
};

const sections = [{'heading': 'How Cursor can use the Tool API today', 'paragraphs': ['Cursor can consume BestMCPServers in two stages. Today, developers can call the HTTP endpoints directly from scripts, shell commands, or project automation. The OpenAPI contract defines the same tool names that will be exposed by a future remote MCP endpoint.', 'This is useful for coding workflows where Cursor needs to inspect JWT payloads, format pasted JSON, validate configuration files, or encode and decode Base64 strings without opening a browser tool page.'], 'code': 'curl -X POST https://bestmcpservers.com/api/base64/decode \\\n  -H "Content-Type: application/json" \\\n  -d \'{"content":"QmVzdE1DUFNlcnZlcnM="}\''}, {'heading': 'Future remote MCP configuration', 'paragraphs': ['The intended remote MCP endpoint is https://bestmcpservers.com/mcp. Once shipped, Cursor should discover tools such as format_json, validate_json, encode_base64, decode_base64, and decode_jwt from that endpoint. The current REST API already uses the same core tool functions, so the MCP layer can be added without changing tool behavior.', 'Until the remote MCP endpoint is live, treat the OpenAPI spec and docs page as the canonical contract. Teams can wrap the HTTP endpoints inside their own local MCP server if they need Cursor-native tool discovery immediately.'], 'code': '{\n  "mcpServers": {\n    "bestmcpservers": {\n      "url": "https://bestmcpservers.com/mcp"\n    }\n  }\n}'}, {'heading': 'Tool names and endpoints', 'paragraphs': ['Use stable tool names in prompts and wrappers: format_json maps to /api/json/format, validate_json maps to /api/json/validate, encode_base64 maps to /api/base64/encode, decode_base64 maps to /api/base64/decode, and decode_jwt maps to /api/jwt/decode.', 'Keeping the tool names close to endpoint names helps AI clients choose the correct operation. It also makes migration from OpenAPI or HTTP tools to MCP tools easier.']}, {'heading': 'Safety notes for coding agents', 'paragraphs': ['Do not ask an AI coding agent to paste production secrets, private JWTs, session cookies, or customer data into any hosted endpoint unless your team policy allows it. The current API does not store data, but sensitive inputs still deserve careful handling.', 'For local-only sensitive workflows, use the browser tool pages or a local wrapper. For public or low-risk developer data, the HTTP API is suitable for fast agent workflows.']}];
const faqs = [{'question': 'Is the BestMCPServers MCP endpoint live?', 'answer': 'The HTTP API and OpenAPI spec are live now. The planned remote MCP endpoint is https://bestmcpservers.com/mcp and should reuse the same core tools.'}, {'question': 'Can Cursor call the API without MCP?', 'answer': 'Yes. Cursor can generate or run curl/scripts against the HTTP API today, and teams can wrap the endpoints in a local MCP server if needed.'}, {'question': 'What tools will the MCP server expose?', 'answer': 'The planned tools are format_json, validate_json, encode_base64, decode_base64, and decode_jwt.'}, {'question': 'Does JWT decode verify a token?', 'answer': 'No. It only decodes the header and payload. Signature verification requires the issuer secret or public key and is outside this endpoint.'}];

export default function GuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides/` },
      { "@type": "ListItem", position: 3, name: "Use BestMCPServers Tools with Cursor and MCP", item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {[breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/tools/" className="hover:text-slate-950">Tools</Link>
            <Link href="/tools/api/" className="font-semibold text-blue-600">API</Link>
            <Link href="/agents/" className="hover:text-slate-950">Agents</Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides/" className="hover:text-slate-900">Guides</Link></li>
            <li>/</li>
            <li className="font-medium text-slate-900">Use BestMCPServers Tools with Cursor and MCP</li>
          </ol>
        </nav>

        <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Cursor MCP Guide</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Use BestMCPServers Tools with Cursor and MCP</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">Connect Cursor workflows to BestMCPServers developer tools through HTTP endpoints today and a future remote MCP server.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/tools/api/" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">Open API docs</Link>
            <Link href="/openapi.json" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10">OpenAPI JSON</Link>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-950">Quick answer</h2>
          <p className="mt-3 leading-8 text-slate-700">Use <Link href="/openapi.json" className="font-semibold text-blue-700 hover:text-blue-900">the OpenAPI spec</Link> for ChatGPT Actions and HTTP clients today. For MCP clients, use the documented tool names as the contract for the upcoming remote MCP endpoint while the public API endpoints already execute the same core tool functions.</p>
        </section>

        {sections.map((section) => (
          <section key={section.heading} className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 80)} className="mt-4 leading-8 text-slate-700">{paragraph}</p>
            ))}
            {section.code ? <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100"><code>{section.code}</code></pre> : null}
          </section>
        ))}

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Related resources</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li><Link href="/tools/api/" className="font-semibold text-blue-700 hover:text-blue-900">BestMCPServers Tool API</Link></li>
            <li><Link href="/tools/json-formatter/" className="font-semibold text-blue-700 hover:text-blue-900">JSON Formatter API</Link></li>
            <li><Link href="/tools/base64-encode-decode/" className="font-semibold text-blue-700 hover:text-blue-900">Base64 Encode Decode</Link></li>
            <li><Link href="/tools/jwt-decoder/" className="font-semibold text-blue-700 hover:text-blue-900">JWT Decoder API</Link></li>
            <li><Link href="/agents/" className="font-semibold text-blue-700 hover:text-blue-900">MCP Agents Directory</Link></li>
            <li><Link href="/guides/how-to-install-mcp-servers-in-cursor/" className="font-semibold text-blue-700 hover:text-blue-900">Install MCP Servers in Cursor</Link></li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{faq.question}</summary>
                <p className="mt-3 leading-8 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
