import type { Metadata } from "next";
import { getTool } from "@/data/developerTools";

const tool = getTool("claude-cost-calculator");

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: tool.title,
  description: tool.description,
  keywords: ["Claude Cost Calculator", "Claude API cost calculator", "Anthropic cost calculator", "Claude token calculator", "Claude Sonnet cost calculator", "Claude Opus cost calculator"],
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
