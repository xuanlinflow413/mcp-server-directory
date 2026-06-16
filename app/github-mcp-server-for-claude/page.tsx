import type { Metadata } from "next";
import { McpSeoPage } from "@/components/McpSeoPage";
import { audiencePages } from "@/data/mcpSeoPages";

const page = audiencePages["github-mcp-server-for-claude"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonical,
    type: "website",
  },
};

export default function Page() {
  return <McpSeoPage config={page.config} />;
}
