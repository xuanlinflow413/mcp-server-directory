import type { Metadata } from "next";
import { getTool } from "@/data/developerTools";

const tool = getTool("ai-cost-calculator");

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: tool.title,
  description: tool.description,
  keywords: [
    "AI Cost Calculator",
    "LLM Cost Calculator",
    "Token Cost Calculator",
    "OpenAI cost calculator",
    "Claude cost calculator",
    "Gemini cost calculator",
    "DeepSeek cost calculator",
    "Kimi cost calculator",
  ],
  alternates: { canonical: tool.canonical },
  openGraph: {
    title: tool.title,
    description: tool.description,
    type: "website",
    url: tool.canonical,
    images: [
      {
        url: "https://bestmcpservers.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Cost Calculator on BestMCPServers",
      },
    ],
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
