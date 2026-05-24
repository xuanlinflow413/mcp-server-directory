"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

type Tab = "claude" | "cursor" | "generic";

const tabs: { id: Tab; label: string }[] = [
  { id: "claude", label: "Claude Desktop" },
  { id: "cursor", label: "Cursor" },
  { id: "generic", label: "Generic (npx)" },
];

const codeExamples: Record<Tab, { title: string; code: string }> = {
  claude: {
    title: "claude_desktop_config.json",
    code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}`,
  },
  cursor: {
    title: ".cursor/mcp.json",
    code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}`,
  },
  generic: {
    title: "Command Line",
    code: "npx -y @modelcontextprotocol/server-filesystem /path/to/dir",
  },
};

export default function InstallGuide() {
  const [activeTab, setActiveTab] = useState<Tab>("claude");

  return (
    <section id="install" className="bg-white py-16 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          How to Install MCP Servers
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Choose your client and copy the configuration.
        </p>

        <div className="mt-8">
          <div className="flex border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-slate-900 text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">
                {codeExamples[activeTab].title}
              </span>
              <CopyButton text={codeExamples[activeTab].code} />
            </div>
            <pre className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
              <code className="text-sm text-slate-300">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
