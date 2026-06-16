import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { McpSeoPage } from "@/components/McpSeoPage";
import { audiencePages } from "@/data/mcpSeoPages";

const slug = "for-vscode";
const page = audiencePages[slug];

if (!page) {
  notFound();
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
  openGraph: { title: page.title, description: page.description, url: page.canonical, type: "website" },
  twitter: { card: "summary_large_image", title: page.title, description: page.description },
};

export default function Page() {
  return <McpSeoPage config={page.config} />;
}
