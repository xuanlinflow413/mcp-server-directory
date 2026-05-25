import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "Best MCP Servers 2026 | Curated Directory for Claude & Cursor",
  description:
    "Curated directory of 20+ MCP servers for Claude, Cursor, and AI agents. Find, compare, and install Model Context Protocol servers.",
  keywords: [
    "best mcp servers",
    "mcp server list",
    "awesome mcp servers",
    "claude mcp servers",
    "cursor mcp servers",
    "model context protocol",
    "mcp directory",
  ],
  verification: {
    google: "r79PY62ZMOSfpJOaPPb7ismHQA9KS2WupX3dwbYK8_o",
  },
  openGraph: {
    title: "Best MCP Servers 2026 | Curated Directory for Claude & Cursor",
    description:
      "Curated directory of 20+ MCP servers for Claude, Cursor, and AI agents. Find, compare, and install Model Context Protocol servers.",
    type: "website",
    url: "https://bestmcpservers.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Servers 2026 | Curated Directory for Claude & Cursor",
    description:
      "Curated directory of 20+ MCP servers for Claude, Cursor, and AI agents. Find, compare, and install Model Context Protocol servers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an MCP Server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An MCP (Model Context Protocol) server is a lightweight program that exposes tools, resources, and prompts to AI clients like Claude Desktop and Cursor. It enables AI agents to interact with external systems through a standardized protocol.",
        },
      },
      {
        "@type": "Question",
        name: "How do I install MCP servers in Claude Desktop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open Claude Desktop Settings → Developer → Edit Config. Add the server configuration to your claude_desktop_config.json file with the command and arguments for the MCP server you want to use. Restart Claude Desktop to apply changes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I add MCP servers to Cursor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Cursor, create or edit the .cursor/mcp.json file in your project root or home directory. Add the MCP server configuration with the command and args, then reload the Cursor window.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best MCP servers for developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular choices include Filesystem, GitHub, PostgreSQL, Puppeteer, and Brave Search. The best server depends on your specific workflow and the external tools you use daily.",
        },
      },
      {
        "@type": "Question",
        name: "Are MCP servers free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most MCP servers are open-source and free to use. However, some servers require API keys for third-party services which may have their own pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Model Context Protocol (MCP)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCP is an open protocol developed by Anthropic that standardizes how AI applications connect to external data sources and tools, creating a modular ecosystem of AI-powered integrations.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use multiple MCP servers at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Both Claude Desktop and Cursor support multiple concurrent MCP servers. You can configure as many servers as needed in your configuration file.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find more MCP servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can discover more MCP servers on GitHub by searching for 'mcp-server' or visiting the official Model Context Protocol servers repository.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
