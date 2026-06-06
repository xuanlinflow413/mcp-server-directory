"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { agents } from "@/data/agents";
import {
  Search,
  ArrowRight,
  Users,
  Zap,
  BarChart3,
  Target,
  Lightbulb,
  Briefcase,
} from "lucide-react";

type Category = "all" | "Marketing" | "Growth" | "Research" | "Sales";

interface CategoryOption {
  value: Category;
  label: string;
  icon: React.ReactNode;
}

const categories: CategoryOption[] = [
  { value: "all", label: "All Agents", icon: <Users className="h-4 w-4" /> },
  { value: "Marketing", label: "Marketing", icon: <Target className="h-4 w-4" /> },
  { value: "Growth", label: "Growth", icon: <BarChart3 className="h-4 w-4" /> },
  { value: "Research", label: "Research", icon: <Lightbulb className="h-4 w-4" /> },
  { value: "Sales", label: "Sales", icon: <Briefcase className="h-4 w-4" /> },
];

const categoryBadgeColors: Record<string, string> = {
  Marketing: "bg-rose-100 text-rose-700",
  Growth: "bg-emerald-100 text-emerald-700",
  Research: "bg-blue-100 text-blue-700",
  Sales: "bg-amber-100 text-amber-700",
};

function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search agents by name or keyword..."
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>
    </div>
  );
}

function AgentCard({ agent }: { agent: (typeof agents)[number] }) {
  return (
    <Link
      href={`/agents/${agent.slug}/`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
          {agent.h1}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            categoryBadgeColors[agent.category] || "bg-slate-100 text-slate-700"
          }`}
        >
          {agent.category}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
        {agent.whatItDoes}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {agent.keywords.slice(0, 3).map((kw) => (
          <span
            key={kw}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
          >
            {kw}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-900">
        <span>View workflow</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{agent.workflowSteps.length} workflow steps</span>
          <span>{agent.faqs.length} FAQs</span>
        </div>
      </div>
    </Link>
  );
}

function AgentGrid({
  activeCategory,
  searchQuery,
}: {
  activeCategory: Category;
  searchQuery: string;
}) {
  const filteredAgents = useMemo(() => {
    let result = agents;
    if (activeCategory !== "all") {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.h1.toLowerCase().includes(q) ||
          a.whatItDoes.toLowerCase().includes(q) ||
          a.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section className="bg-slate-50 py-8 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            {activeCategory === "all" ? "All Agents" : `${activeCategory} Agents`}
          </h2>
          <span className="text-sm text-slate-500">
            {filteredAgents.length} agent{filteredAgents.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredAgents.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-slate-500">No agents found matching your criteria.</p>
            <p className="mt-2 text-sm text-slate-400">
              Try adjusting your search or category filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function AgentLibraryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <AgentGrid activeCategory={activeCategory} searchQuery={searchQuery} />
    </>
  );
}
