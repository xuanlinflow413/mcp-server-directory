"use client";

import Link from "next/link";
import { Server, Sparkles, Wrench, Bot } from "lucide-react";

const cards = [
  {
    href: "/#servers",
    icon: Server,
    title: "MCP Servers",
    description: "Browse curated MCP servers and integrations for Claude, Cursor, and AI agents.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    href: "/rsp/",
    icon: Sparkles,
    title: "AI Prompt Library",
    description: "Trending AI prompts, RSP prompts, image prompts — ready to copy and use.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    href: "/agents/",
    icon: Bot,
    title: "AI Agent Library",
    description: "Reusable AI agent workflows for marketing, SEO, research, and outreach.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    href: "/tools/",
    icon: Wrench,
    title: "Developer Tools",
    description: "JSON formatter and other free online utilities for developers.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            BestMCPServers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            AI Tools, Prompt Libraries, and Developer Resources
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#servers"
              className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Browse Servers
            </a>
            <Link
              href="/rsp/"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Explore Prompts
            </Link>
          </div>
        </div>

        {/* Three Entry Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className={`inline-flex rounded-lg p-3 ${card.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
