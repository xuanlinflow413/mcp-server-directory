import { ExternalLink } from "lucide-react";
import { type MCPServer } from "@/data/servers";
import CopyButton from "./CopyButton";

interface ServerCardProps {
  server: MCPServer;
}

const categoryColors: Record<string, string> = {
  "file-system": "bg-blue-50 text-blue-700",
  database: "bg-emerald-50 text-emerald-700",
  web: "bg-purple-50 text-purple-700",
  browser: "bg-orange-50 text-orange-700",
  "ai-llm": "bg-rose-50 text-rose-700",
  communication: "bg-cyan-50 text-cyan-700",
  devtools: "bg-amber-50 text-amber-700",
  cloud: "bg-indigo-50 text-indigo-700",
  other: "bg-gray-50 text-gray-700",
};

const clientLabels: Record<string, string> = {
  claude: "Claude",
  cursor: "Cursor",
  generic: "Generic",
};

export default function ServerCard({ server }: ServerCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <a
            href={server.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
          >
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 truncate">
              {server.name}
            </h3>
            <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-600" />
          </a>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            categoryColors[server.category] || categoryColors.other
          }`}
        >
          {server.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-600 line-clamp-2">{server.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {server.clients.map((client) => (
          <span
            key={client}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
          >
            {clientLabels[client]}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-slate-950 p-3">
        <div className="flex items-center justify-between gap-2">
          <code className="text-xs text-slate-300 break-all">{server.installCommand}</code>
          <CopyButton text={server.installCommand} />
        </div>
      </div>
    </div>
  );
}
