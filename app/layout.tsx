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
  alternates: {
    canonical: "https://bestmcpservers.com/",
  },
  verification: {
    google: "Zscg3HMWOVmKLvzwcgZGMd9ZoVZ0VKZnlG5azDqSUF8",
  },
  openGraph: {
    title: "Best MCP Servers 2026 | Curated Directory for Claude & Cursor",
    description:
      "Curated directory of 20+ MCP servers for Claude, Cursor, and AI agents. Find, compare, and install Model Context Protocol servers.",
    type: "website",
    url: "https://bestmcpservers.com/",
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
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
