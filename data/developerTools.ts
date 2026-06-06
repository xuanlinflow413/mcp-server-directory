export type ToolSlug =
  | "json-formatter"
  | "json-validator"
  | "base64-encoder-decoder"
  | "jwt-decoder"
  | "url-encoder-decoder"
  | "uuid-generator"
  | "veo-prompt-generator";

export type ToolConfig = {
  slug: ToolSlug;
  name: string;
  shortName: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  mode: "json-validator" | "base64" | "jwt" | "url" | "uuid" | "json-formatter" | "veo";
  tags: string[];
  sample: string;
  faqs: { question: string; answer: string }[];
};

const base = "https://bestmcpservers.com";

export const developerTools: ToolConfig[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    shortName: "Formatter",
    title: "JSON Formatter — Free Online JSON Validator & Beautifier",
    description: "Free online JSON formatter, validator, and beautifier. Format, minify, validate, and copy JSON with syntax highlighting. No signup required.",
    canonical: `${base}/tools/json-formatter/`,
    h1: "JSON Formatter Online",
    intro: "Format, validate, and minify JSON in your browser. Your data stays local and is never sent to a server.",
    mode: "json-formatter",
    tags: ["json", "formatter", "validator", "minifier"],
    sample: '{\n  "project": "BestMCPServers",\n  "tools": ["formatter", "validator"],\n  "private": true\n}',
    faqs: [
      { question: "Is the JSON formatter private?", answer: "Yes. Formatting runs in your browser and the input is not sent to a backend service." },
      { question: "Can I validate JSON here?", answer: "Yes. The formatter can parse JSON and show syntax errors before you copy or download the result." },
      { question: "What is JSON beautifying?", answer: "Beautifying turns compact JSON into indented, readable JSON for debugging and code review." },
      { question: "Can I minify JSON?", answer: "Yes. Minifying removes whitespace so JSON is smaller for configuration files or transport." },
      { question: "Does it support nested JSON?", answer: "Yes. Any valid JSON object, array, string, number, boolean, or null can be parsed." },
      { question: "Do I need to install anything?", answer: "No. This is a free online utility that works directly in the browser." },
    ],
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    shortName: "Validator",
    title: "JSON Validator Online — Validate and Check JSON Syntax",
    description: "Free online JSON validator. Validate JSON syntax, find parsing errors, and verify JSON structure instantly.",
    canonical: `${base}/tools/json-validator/`,
    h1: "JSON Validator Online",
    intro: "Paste JSON to check syntax, locate parsing errors, copy valid JSON, or download the validated file. Everything runs locally in your browser.",
    mode: "json-validator",
    tags: ["json", "validator", "syntax", "parser"],
    sample: '{\n  "name": "MCP Server",\n  "version": "1.0.0",\n  "features": ["tools", "resources", "prompts"]\n}',
    faqs: [
      { question: "What does a JSON validator do?", answer: "A JSON validator parses your input and confirms whether it follows valid JSON syntax." },
      { question: "Can this tool show JSON error location?", answer: "Yes. Browser JSON parsing errors usually include the position where parsing failed, which helps you find the broken comma, quote, or bracket." },
      { question: "Is my JSON uploaded to a server?", answer: "No. Validation happens in your browser only. There is no backend service, account, or database." },
      { question: "Can I download validated JSON?", answer: "Yes. After validation, use the Download button to save the checked JSON as a .json file." },
      { question: "What are common JSON syntax errors?", answer: "Common errors include trailing commas, missing quotes around keys, single quotes, unclosed arrays, and comments inside JSON." },
      { question: "Can this validate JSON arrays?", answer: "Yes. Valid JSON can be an object, array, string, number, boolean, or null." },
    ],
  },
  {
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder Decoder",
    shortName: "Base64",
    title: "Base64 Encoder Decoder Online — Free Encode & Decode Tool",
    description: "Encode and decode Base64 strings instantly with this free online Base64 converter.",
    canonical: `${base}/tools/base64-encoder-decoder/`,
    h1: "Base64 Encoder Decoder Online",
    intro: "Encode plain text to Base64 or decode Base64 strings back to readable text. Useful for debugging tokens, config values, and API payloads.",
    mode: "base64",
    tags: ["base64", "encode", "decode", "converter"],
    sample: "BestMCPServers developer tools",
    faqs: [
      { question: "What is Base64 encoding?", answer: "Base64 converts binary or text data into ASCII characters so it can safely travel through text-based systems." },
      { question: "Is Base64 encryption?", answer: "No. Base64 is encoding, not encryption. Anyone can decode it without a password." },
      { question: "Can I decode Base64 text here?", answer: "Yes. Paste a Base64 string and click Decode to convert it back to UTF-8 text." },
      { question: "Does this tool upload my data?", answer: "No. Encoding and decoding run in your browser only." },
      { question: "Why does Base64 sometimes end with equals signs?", answer: "Equals signs are padding characters used to make the encoded output length align correctly." },
      { question: "Can this handle Unicode text?", answer: "Yes. The tool uses UTF-8 safe encoding and decoding for regular text." },
    ],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    shortName: "JWT",
    title: "JWT Decoder Online — Decode JSON Web Tokens",
    description: "Decode JWT tokens online. View headers, payloads, expiration times, and claims instantly.",
    canonical: `${base}/tools/jwt-decoder/`,
    h1: "JWT Decoder Online",
    intro: "Paste a JSON Web Token to decode the header and payload, inspect claims, and view expiration times. This tool only decodes; it does not verify signatures.",
    mode: "jwt",
    tags: ["jwt", "decoder", "json web token", "claims"],
    sample: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJlc3RNQ1BTZXJ2ZXJzIiwiaWF0IjoxNzE2OTQwODAwLCJleHAiOjE4OTM0NTYwMDB9.signature",
    faqs: [
      { question: "Does this JWT decoder verify signatures?", answer: "No. It only decodes the header and payload so you can inspect claims. It does not validate the token signature." },
      { question: "Is it safe to paste a JWT here?", answer: "Decoding runs locally in your browser, but you should still avoid pasting production secrets or sensitive user tokens into any tool." },
      { question: "What parts does a JWT contain?", answer: "A JWT usually has three dot-separated parts: header, payload, and signature." },
      { question: "How is the expiration time shown?", answer: "If the payload has an exp claim, the tool converts the Unix timestamp into a readable local date and UTC date." },
      { question: "What is the iat claim?", answer: "iat means issued at. It is a Unix timestamp showing when the token was created." },
      { question: "Why can a JWT be decoded without a secret?", answer: "JWT header and payload are Base64URL encoded, not encrypted. The secret is needed for signature verification, not decoding." },
    ],
  },
  {
    slug: "url-encoder-decoder",
    name: "URL Encoder Decoder",
    shortName: "URL Encoder",
    title: "URL Encoder Decoder — Encode and Decode URLs Online",
    description: "Encode and decode URLs instantly with this free online URL encoding tool.",
    canonical: `${base}/tools/url-encoder-decoder/`,
    h1: "URL Encoder Decoder Online",
    intro: "Encode URLs, query strings, and reserved characters for safe transport, or decode URL-encoded text back into readable strings.",
    mode: "url",
    tags: ["url", "encode", "decode", "percent encoding"],
    sample: "https://bestmcpservers.com/search?q=mcp server tools&category=devtools",
    faqs: [
      { question: "What is URL encoding?", answer: "URL encoding converts spaces and reserved characters into percent-encoded sequences so URLs remain valid." },
      { question: "When should I encode a URL?", answer: "Encode user input, query parameter values, redirect URLs, and strings that may include spaces or special characters." },
      { question: "Can this decode percent-encoded URLs?", answer: "Yes. Paste an encoded URL or query string and click Decode to make it readable." },
      { question: "Does the tool send URLs to a backend?", answer: "No. Encoding and decoding happen inside your browser only." },
      { question: "What is the difference between encodeURI and encodeURIComponent?", answer: "encodeURI keeps URL structure characters while encodeURIComponent encodes a single component such as a query value." },
      { question: "Why are spaces encoded as %20 or plus signs?", answer: "%20 is standard percent encoding. Plus signs are often used for spaces in form-encoded query strings." },
    ],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    shortName: "UUID",
    title: "UUID Generator Online — Generate UUID v4 Instantly",
    description: "Generate secure UUID v4 identifiers instantly. Copy or download UUIDs for development use.",
    canonical: `${base}/tools/uuid-generator/`,
    h1: "UUID Generator Online",
    intro: "Generate one or many UUID v4 identifiers locally in your browser. Copy results or download them for tests, seed data, and configuration files.",
    mode: "uuid",
    tags: ["uuid", "uuid v4", "generator", "identifier"],
    sample: "",
    faqs: [
      { question: "What is a UUID v4?", answer: "A UUID v4 is a randomly generated 128-bit identifier commonly used for database records, test data, and distributed systems." },
      { question: "Are these UUIDs generated locally?", answer: "Yes. The browser generates UUIDs locally using the Web Crypto API when available." },
      { question: "Can I generate multiple UUIDs?", answer: "Yes. Choose how many UUIDs you need and generate a newline-separated list." },
      { question: "Are UUID v4 values guaranteed unique?", answer: "They are not mathematically guaranteed, but collisions are extremely unlikely for normal development and production use." },
      { question: "Can I download generated UUIDs?", answer: "Yes. Use the Download button to save generated UUIDs as a text file." },
      { question: "Should UUIDs be used as secrets?", answer: "No. UUIDs are identifiers, not passwords or security tokens." },
    ],
  },
  {
    slug: "veo-prompt-generator",
    name: "Veo Prompt Generator",
    shortName: "Veo Prompts",
    title: "Veo Prompt Generator — Create Better Google Veo Video Prompts",
    description: "Generate optimized Google Veo prompts for cinematic videos, ads, short films, and social content. Free online Veo prompt generator.",
    canonical: `${base}/tools/veo-prompt-generator/`,
    h1: "Veo Prompt Generator",
    intro: "Create optimized Google Veo prompts in seconds for cinematic scenes, ad concepts, social videos, product demos, and short films.",
    mode: "veo",
    tags: ["veo", "prompt generator", "video", "ai tool"],
    sample: "A cinematic drone shot of a futuristic city at sunset, ultra realistic, slow camera movement, golden hour lighting, highly detailed, 8-second sequence, shot on a professional cinema camera.",
    faqs: [
      { question: "What is Google Veo?", answer: "Google Veo is Google's generative video model family for creating video from prompts and other creative inputs." },
      { question: "Does this work with Veo 3?", answer: "Yes. It helps structure Veo and Veo 3 prompts with subject, camera, lighting, scene, and duration details." },
      { question: "Is this tool free?", answer: "Yes. It is a free static browser tool with no login, database, payment, or API key." },
      { question: "Are prompts uploaded?", answer: "No. Prompt generation happens in your browser only." },
      { question: "Can I write ad prompts?", answer: "Yes. Use product, scene, commercial style, camera movement, lighting, and duration fields." },
      { question: "What makes a cinematic prompt?", answer: "Camera movement, lighting, lens feel, mood, subject detail, and a clear scene make prompts more cinematic." },
    ],
  },
];

export function getTool(slug: ToolSlug): ToolConfig {
  const tool = developerTools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Unknown tool: ${slug}`);
  return tool;
}

export function relatedTools(slug: ToolSlug): ToolConfig[] {
  return developerTools.filter((item) => item.slug !== slug).slice(0, 5);
}
