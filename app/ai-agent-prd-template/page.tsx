import type { Metadata } from "next";
import PrdTemplatePage from "@/components/PrdTemplatePage";
import { prdTemplates } from "@/data/prdTemplates";

const template = prdTemplates.find((item) => item.slug === "ai-agent-prd-template")!;
const baseUrl = "https://bestmcpservers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: template.title,
  description: template.description,
  alternates: { canonical: `${baseUrl}/ai-agent-prd-template/` },
  openGraph: {
    title: template.title,
    description: template.description,
    type: "article",
    url: `${baseUrl}/ai-agent-prd-template/`,
  },
  twitter: {
    card: "summary_large_image",
    title: template.title,
    description: template.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrdTemplatePage template={template} />;
}
