import type { Metadata } from "next";
import Link from "next/link";
import { rspPrompts } from "@/data/rspPrompts";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title: "Trending AI Photo Editing Prompts Library | RSP Collection",
  description:
    "Discover 20+ trending AI photo editing prompts. Transform your photos with RSP workflows — from cinematic looks to anime transformations, ghost edits to cyberpunk neon.",
  keywords: [
    "ai editor rsp",
    "ai editor rsp editing",
    "rsp editing prompt",
    "aesthetic rsp prompt",
    "ai photo editing prompts",
    "trending photo editing prompts",
    "rsp prompt library",
  ],
  alternates: {
    canonical: "https://bestmcpservers.com/rsp/",
  },
  openGraph: {
    title: "Trending AI Photo Editing Prompts Library | RSP Collection",
    description:
      "Discover 20+ trending AI photo editing prompts. Transform your photos with professional RSP workflows.",
    type: "website",
    url: "https://bestmcpservers.com/rsp/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending AI Photo Editing Prompts Library | RSP Collection",
    description:
      "Discover 20+ trending AI photo editing prompts for cinematic, aesthetic, and creative transformations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What is an RSP editing prompt?",
    answer:
      "RSP stands for Retouch, Style, and Polish — a three-step workflow used in AI photo editing. Retouch fixes imperfections, Style applies color grading and mood, and Polish adds final details like sharpening and grain. Our prompt library provides ready-to-use RSP prompts for various aesthetics.",
  },
  {
    question: "Are these prompts free to use?",
    answer:
      "Yes. All prompts in our library are free to copy and use with your preferred AI image editing tools. We do not require attribution, though sharing the library helps other creators discover these resources.",
  },
  {
    question: "Which AI tools work with these prompts?",
    answer:
      "Our RSP prompts work with Midjourney, Stable Diffusion, DALL-E, Adobe Firefly, Leonardo.ai, and most AI image generators. They can also be used as step-by-step guides in traditional software like Photoshop, GIMP, and Lightroom.",
  },
  {
    question: "How do I copy a prompt?",
    answer:
      "Each prompt page has a 'Copy Prompt' button that copies the full text to your clipboard. Simply click the button and paste into your AI editor. No signup or login required.",
  },
  {
    question: "Can I modify these prompts?",
    answer:
      "Absolutely. These prompts are starting points. Adjust colors, intensities, and effects to match your personal style. We encourage experimentation — the best edits come from making a prompt your own.",
  },
];

export default function RSPLibraryPage() {
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
              BestMCPServers.com
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Directory
              </Link>
              <Link
                href="/rsp/"
                className="text-sm font-semibold text-blue-600"
              >
                AI Prompts
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trending AI Photo Editing Prompts Library
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            20+ ready-to-use RSP prompts for transforming your photos. From
            cinematic Hollywood looks to anime transformations — copy, paste,
            and create.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              ai editor rsp
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              rsp editing prompt
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              aesthetic rsp prompt
            </span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
              cinematic ai photo
            </span>
          </div>
        </div>
      </section>

      {/* Prompt Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Browse All {rspPrompts.length} Prompts
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rspPrompts.map((prompt) => (
            <Link
              key={prompt.slug}
              href={`/rsp/${prompt.slug}/`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center">
                <span className="text-sm text-slate-400">Preview Image</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                {prompt.h1}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {prompt.metaDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prompt.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; 2026 BestMCPServers.com. All rights reserved.
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
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
