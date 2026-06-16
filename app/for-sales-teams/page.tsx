import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";
import { audiencePages } from "@/data/mcpSeoPages";

const page = audiencePages["for-sales-teams"];

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
  openGraph: { title: page.title, description: page.description, url: page.canonical, type: "website" },
  twitter: { card: "summary_large_image", title: page.title, description: page.description },
};

export default function Page() {
  return <McpSeoPage config={page.config} />;
}
