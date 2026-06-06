"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#servers", label: "MCP Servers" },
  { href: "/rsp/", label: "Prompt Library" },
  { href: "/agents/", label: "Agent Library" },
  { href: "/tools/", label: "Tools" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900">
              BestMCPServers
            </span>
            <span className="hidden sm:inline text-xs text-slate-400">
              AI Tools &amp; Developer Resources
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#servers", "")) ||
                    (item.href === "/rsp/" && pathname.startsWith("/rsp/")) ||
                    (item.href === "/tools/" && pathname.startsWith("/tools/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
