import type { Metadata } from "next";
import VeoGuidePage from "@/components/VeoGuidePage";
import { getVeoGuide } from "@/data/veoGuides";

const guide = getVeoGuide("veo-youtube-shorts-prompts");

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: guide.title,
  description: guide.description,
  keywords: [guide.primaryKeyword, "google veo prompts", "veo prompt generator", "veo video prompts", "veo 3 prompts"],
  alternates: { canonical: guide.url },
  openGraph: {
    title: guide.title,
    description: guide.description,
    type: "article",
    url: guide.url,
    siteName: "BestMCPServers",
  },
  twitter: {
    card: "summary_large_image",
    title: guide.title,
    description: guide.description,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <VeoGuidePage guide={guide} />;
}
