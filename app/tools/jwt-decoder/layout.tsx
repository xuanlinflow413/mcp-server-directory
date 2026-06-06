import type { Metadata } from "next";
import { getTool } from "@/data/developerTools";

const tool = getTool("jwt-decoder" as any);

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: tool.title,
  description: tool.description,
  keywords: tool.tags,
  alternates: { canonical: tool.canonical },
  openGraph: {
    title: tool.title,
    description: tool.description,
    type: "website",
    url: tool.canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: tool.title,
    description: tool.description,
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
