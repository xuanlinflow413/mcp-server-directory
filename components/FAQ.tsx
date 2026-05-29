const faqs = [
  {
    question: "What is an MCP Server?",
    answer:
      "An MCP (Model Context Protocol) server is a lightweight program that exposes tools, resources, and prompts to AI clients like Claude Desktop and Cursor. It enables AI agents to interact with external systems—files, databases, APIs, browsers, and more—through a standardized protocol.",
  },
  {
    question: "How do I install MCP servers in Claude Desktop?",
    answer:
      "Open Claude Desktop Settings → Developer → Edit Config. Add the server configuration to your claude_desktop_config.json file with the command and arguments for the MCP server you want to use. Restart Claude Desktop to apply changes.",
  },
  {
    question: "How do I add MCP servers to Cursor?",
    answer:
      "In Cursor, create or edit the .cursor/mcp.json file in your project root or home directory. Add the MCP server configuration with the command and args, then reload the Cursor window. Cursor will automatically detect and connect to the configured servers.",
  },
  {
    question: "What are the best MCP servers for developers?",
    answer:
      "Popular choices include Filesystem (file operations), GitHub (repo management), PostgreSQL (database access), Puppeteer (browser automation), and Brave Search (web search). The best server depends on your specific workflow and the external tools you use daily.",
  },
  {
    question: "Are MCP servers free to use?",
    answer:
      "Most MCP servers are open-source and free to use. However, some servers require API keys for third-party services (e.g., Brave Search API, AWS credentials) which may have their own pricing. Always check the server's documentation for any required credentials or costs.",
  },
  {
    question: "What is the Model Context Protocol (MCP)?",
    answer:
      "MCP is an open protocol developed by Anthropic that standardizes how AI applications connect to external data sources and tools. It allows AI clients to discover and use capabilities exposed by MCP servers, creating a modular ecosystem of AI-powered integrations.",
  },
  {
    question: "Can I use multiple MCP servers at once?",
    answer:
      "Yes. Both Claude Desktop and Cursor support multiple concurrent MCP servers. You can configure as many servers as needed in your configuration file, and the AI client will have access to all their combined tools and resources.",
  },
  {
    question: "Where can I find more MCP servers?",
    answer:
      "You can discover more MCP servers on GitHub by searching for 'mcp-server' or visiting the official Model Context Protocol servers repository. This directory curates the most popular and well-maintained servers for easy discovery.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
