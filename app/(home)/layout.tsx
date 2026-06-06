import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
  description:
    "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
  alternates: {
    canonical: "https://bestmcpservers.com/",
  },
  openGraph: {
    title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
    description:
      "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
    type: "website",
    url: "https://bestmcpservers.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestMCPServers — AI Tools, Prompt Libraries & Developer Resources",
    description:
      "BestMCPServers is your hub for AI tools, prompt libraries, and developer resources. Browse MCP servers, copy AI prompts, and use free online developer utilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
