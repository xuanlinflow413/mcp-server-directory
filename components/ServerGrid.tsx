"use client";

import { useMemo } from "react";
import { servers, type Category } from "@/data/servers";
import ServerCard from "./ServerCard";

interface ServerGridProps {
  activeCategory: Category | "all";
}

export default function ServerGrid({ activeCategory }: ServerGridProps) {
  const filteredServers = useMemo(() => {
    if (activeCategory === "all") return servers;
    return servers.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="servers" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Browse MCP Servers by Category
          </h2>
          <span className="text-sm text-slate-500">
            {filteredServers.length} server{filteredServers.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredServers.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-slate-500">No servers found in this category.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
