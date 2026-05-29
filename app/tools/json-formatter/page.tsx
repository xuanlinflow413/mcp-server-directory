"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { formatJson, minifyJson, validateJson, SAMPLE_JSON } from "@/lib/jsonUtils";
import {
  AlignLeft,
  Minimize2,
  CheckCircle,
  Copy,
  Trash2,
  Download,
  FileJson,
  Braces,
  Zap,
  Shield,
} from "lucide-react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = useCallback(() => {
    try {
      const result = formatJson(input);
      setOutput(result);
      setError(null);
    } catch (e: unknown) {
      const err = e as Error;
      setOutput("");
      setError(err.message);
    }
  }, [input]);

  const handleMinify = useCallback(() => {
    try {
      const result = minifyJson(input);
      setOutput(result);
      setError(null);
    } catch (e: unknown) {
      const err = e as Error;
      setOutput("");
      setError(err.message);
    }
  }, [input]);

  const handleValidate = useCallback(() => {
    const result = validateJson(input);
    if (result.valid) {
      setOutput(input);
      setError(null);
    } else {
      setOutput("");
      setError(result.error || "Invalid JSON");
    }
  }, [input]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }, [output]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError(null);
  }, []);

  const handleDownload = useCallback(() => {
    if (!output) return;
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [output]);

  const handleSample = useCallback(() => {
    setInput(SAMPLE_JSON);
    setOutput("");
    setError(null);
  }, []);

  const btnBase =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors";

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold text-slate-900 hover:text-slate-700"
            >
              BestMCPServers
            </Link>
            <span className="hidden sm:inline text-xs text-slate-400 ml-2">
              AI Tools &amp; Developer Utilities
            </span>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Directory
              </Link>
              <Link
                href="/rsp/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                AI Prompts
              </Link>
              <Link
                href="/tools/json-formatter/"
                className="text-sm font-semibold text-blue-600"
              >
                Tools
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            JSON Formatter Online
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Free online JSON formatter, validator, and minifier. Format, validate,
            and compress JSON instantly in your browser — no data sent to any server.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              json formatter
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              json validator
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              json minifier
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              online json tool
            </span>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={handleFormat}
              disabled={!input.length}
              className={btnBase}
              style={{
                background: input.length ? "#2563eb" : "#e2e8f0",
                color: input.length ? "#fff" : "#94a3b8",
              }}
            >
              <AlignLeft className="w-4 h-4" />
              Format
            </button>

            <button
              onClick={handleMinify}
              disabled={!input.length}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: input.length ? "#0f172a" : "#94a3b8",
              }}
            >
              <Minimize2 className="w-4 h-4" />
              Minify
            </button>

            <button
              onClick={handleValidate}
              disabled={!input.length}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: input.length ? "#0f172a" : "#94a3b8",
              }}
            >
              <CheckCircle className="w-4 h-4" />
              Validate
            </button>

            <div className="w-px h-8 mx-1 bg-slate-200" />

            <button
              onClick={handleCopy}
              disabled={!output.length || !!error}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: output.length && !error ? "#0f172a" : "#94a3b8",
              }}
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>

            <button
              onClick={handleDownload}
              disabled={!output.length || !!error}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: output.length && !error ? "#0f172a" : "#94a3b8",
              }}
            >
              <Download className="w-4 h-4" />
              Download
            </button>

            <button
              onClick={handleClear}
              disabled={!input.length}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: input.length ? "#dc2626" : "#94a3b8",
              }}
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>

            <button
              onClick={handleSample}
              className={btnBase}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                color: "#0f172a",
              }}
            >
              <FileJson className="w-4 h-4" />
              Sample
            </button>
          </div>

          {/* Editor Grid */}
          <div className="grid md:grid-cols-2 gap-4" style={{ minHeight: "360px" }}>
            {/* Input */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-500">
                  Input
                </label>
                <span className="text-xs text-slate-400">
                  {input.length} chars
                </span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
                className="flex-1 w-full p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#0f172a",
                  minHeight: "320px",
                }}
                spellCheck={false}
              />
            </div>

            {/* Output */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-500">
                  Output
                </label>
                {output && !error && (
                  <span className="text-xs text-green-600">
                    Valid JSON
                  </span>
                )}
              </div>

              {error ? (
                <div
                  className="p-4 rounded-lg text-sm"
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #dc2626",
                    color: "#dc2626",
                    minHeight: "320px",
                  }}
                >
                  <div className="font-semibold mb-1">Invalid JSON</div>
                  <div className="font-mono text-xs whitespace-pre-wrap">{error}</div>
                </div>
              ) : (
                <textarea
                  value={output}
                  readOnly
                  className="flex-1 w-full p-4 rounded-lg font-mono text-sm resize-none focus:outline-none"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    color: "#0f172a",
                    minHeight: "320px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-slate-900">
            Why Use Our JSON Formatter?
          </h2>
          <p className="text-center mb-8 text-slate-500">
            Fast, secure, and completely free. No signup required.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 bg-white border border-slate-200">
              <Braces className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Format & Beautify
              </h3>
              <p className="text-sm text-slate-600">
                Instantly format messy JSON with proper indentation and syntax highlighting. Makes large JSON files readable.
              </p>
            </div>
            <div className="rounded-xl p-6 bg-white border border-slate-200">
              <Zap className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Minify & Compress
              </h3>
              <p className="text-sm text-slate-600">
                Remove all whitespace to reduce file size. Perfect for production APIs and reducing network payload.
              </p>
            </div>
            <div className="rounded-xl p-6 bg-white border border-slate-200">
              <Shield className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                Validate & Debug
              </h3>
              <p className="text-sm text-slate-600">
                Catch syntax errors before they break your app. Get clear error messages with line-level detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Is this JSON formatter free to use?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Yes, completely free. No signup, no limits, no watermarks. Use it as much as you need.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Is my JSON data sent to a server?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                No. All processing happens in your browser. Your JSON never leaves your device, making it safe for sensitive data.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                What is the difference between formatting and minifying JSON?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Formatting adds indentation and line breaks to make JSON human-readable. Minifying removes all whitespace to create the smallest possible file size for APIs and production use.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                Can I download the formatted JSON?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Yes. After formatting or minifying, click the Download button to save the result as a .json file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; 2026 BestMCPServers — AI Tools &amp; Developer Utilities. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                MCP Directory
              </Link>
              <Link
                href="/rsp/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                AI Prompts
              </Link>
              <Link
                href="/tools/json-formatter/"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                JSON Formatter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
