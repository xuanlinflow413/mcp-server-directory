import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
  description:
    "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
  keywords: [
    "best mcp servers",
    "mcp server list",
    "ai prompt library",
    "ai photo editing prompts",
    "json formatter",
    "developer tools",
    "model context protocol",
  ],
  verification: {
    google: "Zscg3HMWOVmKLvzwcgZGMd9ZoVZ0VKZnlG5azDqSUF8",
  },
  openGraph: {
    title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
    description:
      "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
    type: "website",
    url: "https://bestmcpservers.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
    description:
      "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
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
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
