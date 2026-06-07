import type { Metadata } from "next";
import { getTool } from "@/data/developerTools";
import { getMcpConfigTool } from "@/data/mcpConfigTools";

const tool = getTool("mcp-server-config-generator");
const mcpTool = getMcpConfigTool("mcp-server-config-generator");

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: tool.title,
  description: tool.description,
  keywords: [mcpTool.primaryKeyword, ...mcpTool.secondaryKeywords],
  alternates: { canonical: tool.canonical },
  openGraph: {
    title: tool.title,
    description: tool.description,
    type: "website",
    url: tool.canonical,
    images: [{ url: "https://bestmcpservers.com/og-image.png", width: 1200, height: 630, alt: `${tool.name} on BestMCPServers` }],
  },
  twitter: {
    card: "summary_large_image",
    title: tool.title,
    description: tool.description,
    images: ["https://bestmcpservers.com/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
