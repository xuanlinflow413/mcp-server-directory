import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "JSON Formatter Online — Free JSON Beautifier, Validator & Minifier",
  description:
    "Free online JSON formatter, validator, and minifier. Format, validate, and compress JSON instantly in your browser — no data sent to any server.",
  keywords: [
    "json formatter",
    "json validator",
    "json minifier",
    "json beautifier",
    "online json tool",
    "json pretty print",
    "json compressor",
    "bestmcpservers",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/tools/json-formatter/",
  },
  openGraph: {
    title: "JSON Formatter Online — Free JSON Beautifier, Validator & Minifier",
    description:
      "Free online JSON formatter, validator, and minifier. Format, validate, and compress JSON instantly in your browser.",
    type: "website",
    url: "https://bestmcpservers.com/tools/json-formatter/",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter Online — Free JSON Beautifier, Validator & Minifier",
    description:
      "Free online JSON formatter, validator, and minifier. Format, validate, and compress JSON instantly in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JsonFormatterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
