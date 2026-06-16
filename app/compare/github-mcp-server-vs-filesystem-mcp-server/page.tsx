import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";
import { comparisonPage } from "@/data/mcpSeoPages";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: comparisonPage.title,
  description: comparisonPage.description,
  alternates: { canonical: comparisonPage.canonical },
  openGraph: { title: comparisonPage.title, description: comparisonPage.description, url: comparisonPage.canonical, type: "website" },
  twitter: { card: "summary_large_image", title: comparisonPage.title, description: comparisonPage.description },
};

export default function Page() {
  return <McpSeoPage config={comparisonPage.config} />;
}
