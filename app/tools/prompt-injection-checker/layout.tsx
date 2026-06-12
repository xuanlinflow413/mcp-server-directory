import type { Metadata } from "next";
import { getTool } from "@/data/developerTools";

const tool = getTool("prompt-injection-checker");

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: tool.title,
  description: tool.description,
  keywords: [
    "Prompt Injection Checker",
    "AI Security Scanner",
    "Agent Security Tool",
    "Prompt Security Audit",
    "LLM security",
    "jailbreak detection",
    "prompt injection test",
    "LLM safety scanner",
    "system prompt leak detection",
    "AI red team tool",
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
        alt: "Prompt Injection Checker on BestMCPServers",
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
