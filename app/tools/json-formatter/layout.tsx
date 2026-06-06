import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "JSON Formatter — Free Online JSON Validator & Beautifier",
  description:
    "Free online JSON formatter, validator, and beautifier. Format, minify, validate, and copy JSON with syntax highlighting. No signup required.",
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "online json formatter",
    "json minifier",
    "json parser",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/tools/json-formatter/",
  },
  openGraph: {
    title: "JSON Formatter — Free Online JSON Validator & Beautifier",
    description:
      "Free online JSON formatter, validator, and beautifier. Format, minify, validate, and copy JSON with syntax highlighting.",
    type: "website",
    url: "https://bestmcpservers.com/tools/json-formatter/",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter — Free Online JSON Validator & Beautifier",
    description: "Free online JSON formatter, validator, and beautifier.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JsonFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
