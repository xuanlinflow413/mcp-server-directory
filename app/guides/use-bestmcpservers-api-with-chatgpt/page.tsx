import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://bestmcpservers.com";
const canonical = `${baseUrl}/guides/use-bestmcpservers-api-with-chatgpt/`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Use BestMCPServers Tool API with ChatGPT Actions",
  description: "Import the BestMCPServers OpenAPI spec into ChatGPT Actions to call JSON formatter, JSON validator, Base64, and JWT decoder tools.",
  alternates: { canonical },
  openGraph: {
    title: "Use BestMCPServers Tool API with ChatGPT Actions",
    description: "Import the BestMCPServers OpenAPI spec into ChatGPT Actions to call JSON formatter, JSON validator, Base64, and JWT decoder tools.",
    type: "article",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Use BestMCPServers Tool API with ChatGPT Actions",
    description: "Import the BestMCPServers OpenAPI spec into ChatGPT Actions to call JSON formatter, JSON validator, Base64, and JWT decoder tools.",
  },
  robots: { index: true, follow: true },
};

const sections = [{'heading': 'What ChatGPT Actions need from this API', 'paragraphs': ['ChatGPT Actions work best when the OpenAPI document is small, explicit, and uses stable operation IDs. BestMCPServers exposes a focused OpenAPI 3.1 document with five operations: formatJson, validateJson, encodeBase64, decodeBase64, and decodeJwt. Each endpoint accepts one content field and returns a consistent success or error envelope, so an assistant can safely call tools without understanding page UI state.', 'For the current MVP there is no login, database, payment, or API key. That keeps the action setup simple: import the schema, select the operations, and test calls against production endpoints. Rate limiting can be added later at the Cloudflare layer without changing the OpenAPI contract.'], 'code': 'https://bestmcpservers.com/openapi.json'}, {'heading': 'Step-by-step setup', 'paragraphs': ['Create or edit a Custom GPT, open the Actions section, and import the OpenAPI schema URL. After import, verify that the operation names are visible and that the server URL is https://bestmcpservers.com. Use the test panel to send a small JSON formatting request before adding the action to a real workflow.', 'A good first test is to ask ChatGPT to format a compact JSON object, validate an intentionally broken JSON string, encode a short text value, decode a Base64 string, and inspect a sample JWT payload. These calls cover every endpoint and confirm that both success and error responses are usable.'], 'code': 'POST /api/json/format\n{\n  "content": "{\\"name\\":\\"BestMCPServers\\"}"\n}'}, {'heading': 'Recommended Action descriptions', 'paragraphs': ['Use clear descriptions that tell ChatGPT when to call each operation. For example, formatJson should be used when the user wants readable JSON; validateJson should be used when the user asks whether JSON is syntactically valid; decodeJwt should be used only to inspect header and payload, not to verify security.', 'The JWT endpoint intentionally returns verified: false. This is important because JWT decoding is not signature verification. The assistant should state that decoded claims are informational unless the token signature is verified by the application that issued it.']}, {'heading': 'Production notes', 'paragraphs': ['The API is intentionally narrow. It does not store user input, does not create accounts, and does not require API keys. For sensitive production tokens or secrets, users should avoid pasting confidential data into any hosted tool unless they understand their own security policy.', 'If traffic grows, the next production step is Cloudflare rate limiting for /api/* by IP. API keys, quotas, and analytics should come only after the SEO and API-call demand is validated.']}];
const faqs = [{'question': 'Can I use BestMCPServers with ChatGPT Actions?', 'answer': 'Yes. Import https://bestmcpservers.com/openapi.json into a Custom GPT Action to expose JSON, Base64, and JWT utility endpoints.'}, {'question': 'Does the API require authentication?', 'answer': 'No. The current MVP is open and does not require login, payment, or API keys.'}, {'question': 'Can ChatGPT verify JWT signatures with this API?', 'answer': 'No. The JWT endpoint only decodes header and payload. It does not verify signatures and returns verified: false.'}, {'question': 'What should I test first?', 'answer': 'Start with /api/json/format using a small JSON object, then test invalid JSON through /api/json/validate to confirm error handling.'}];

export default function GuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides/` },
      { "@type": "ListItem", position: 3, name: "Use BestMCPServers Tool API with ChatGPT Actions", item: canonical },
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
            <li className="font-medium text-slate-900">Use BestMCPServers Tool API with ChatGPT Actions</li>
          </ol>
        </nav>

        <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">ChatGPT Actions Guide</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Use BestMCPServers Tool API with ChatGPT Actions</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">Import the BestMCPServers OpenAPI spec into ChatGPT Actions to call JSON formatter, JSON validator, Base64, and JWT decoder tools.</p>
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
