import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Film, Sparkles, Video } from "lucide-react";
import VeoPromptGeneratorClient from "./VeoPromptGeneratorClient";

const canonical = "https://bestmcpservers.com/tools/veo-prompt-generator/";
const title = "Veo Prompt Generator — Create Better Google Veo Video Prompts";
const description = "Generate optimized Google Veo prompts for cinematic videos, ads, short films, and social content. Free online Veo prompt generator.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bestmcpservers.com"),
  title,
  description,
  keywords: [
    "veo prompt generator",
    "google veo prompt generator",
    "veo 3 prompt generator",
    "veo prompt examples",
    "cinematic veo prompts",
    "veo ad prompts",
    "veo video prompts",
  ],
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    siteName: "BestMCPServers",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const examples = [
  {
    name: "Cinematic Scene",
    prompt: "A cinematic wide shot of a lone explorer crossing a glowing desert at sunrise, slow dolly forward, warm golden light, atmospheric dust, highly detailed, 8-second sequence, professional cinema camera.",
  },
  {
    name: "Movie Trailer",
    prompt: "A dramatic movie trailer shot of a stormy coastal castle, sweeping crane movement, lightning backlight, epic fantasy tone, high contrast, 8-second sequence, anamorphic lens look.",
  },
  {
    name: "Product Commercial",
    prompt: "A luxury smartwatch rotating on black glass, macro camera movement, clean studio lighting, premium reflections, ultra realistic, 6-second product commercial, shot like a global tech ad.",
  },
  {
    name: "Fashion Ad",
    prompt: "A high-fashion model walking through a minimalist concrete gallery, slow tracking shot, soft diffused lighting, editorial styling, elegant fabric motion, 8-second luxury fashion ad.",
  },
  {
    name: "Travel Video",
    prompt: "A cinematic drone shot over turquoise cliffs and a hidden beach, smooth forward motion, bright morning light, natural colors, travel documentary style, 10-second sequence.",
  },
  {
    name: "Nature Documentary",
    prompt: "A close documentary shot of a snow leopard moving across a mountain ridge, gentle handheld camera feel, cold dawn lighting, realistic fur detail, 8-second nature film sequence.",
  },
  {
    name: "Luxury Brand Ad",
    prompt: "A sleek perfume bottle emerging from mist on a marble surface, slow push-in camera movement, moody spotlighting, refined luxury aesthetic, highly detailed, 7-second commercial.",
  },
  {
    name: "Startup Explainer",
    prompt: "A friendly 3D animated scene showing AI agents organizing business tasks on floating dashboards, smooth camera pan, bright studio lighting, clean startup explainer style, 8-second sequence.",
  },
  {
    name: "YouTube Shorts",
    prompt: "A vertical energetic shot of a creator unboxing a futuristic gadget, quick handheld movement, bright room lighting, sharp focus, social video style, 6-second YouTube Shorts clip.",
  },
  {
    name: "TikTok Style Video",
    prompt: "A fast-paced vertical video of colorful street food being prepared, close-up camera cuts, vibrant neon market lighting, playful social media tone, 5-second TikTok style sequence.",
  },
];

const categories = [
  {
    title: "Cinematic Prompts",
    body: "Cinematic Veo prompts should read like a compact shot brief for a director, cinematographer, and motion designer at the same time. Start with the subject and location, then add shot scale, lens feel, camera movement, lighting, atmosphere, and duration. Instead of only writing “make it cinematic,” specify a slow dolly in, drone reveal, anamorphic framing, golden hour lighting, volumetric haze, rain reflections, or film trailer pacing. Strong cinematic prompts also describe what changes during the clip: a character turns, a city wakes up, a vehicle enters frame, or light breaks through clouds. This gives Veo a visual arc rather than a static image prompt. Keep the language concrete and visual, avoid too many competing actions, and use quality cues such as ultra realistic, highly detailed, professional cinema camera, shallow depth of field, or dramatic color grading when they match the scene.",
  },
  {
    title: "Ad Prompts",
    body: "Ad prompts work best when they focus on one product, one visual promise, and one memorable motion. Begin with the product name or object, then describe material, surface, reflections, environment, camera movement, brand mood, and the intended commercial style. A strong Veo ad prompt might include macro detail, slow product rotation, liquid splash, glass reflection, clean studio background, luxury lighting, or a lifestyle use case. Avoid vague marketing claims like “amazing” or “best”; instead, show the benefit visually through action and composition. For a tech ad, show the device opening, interface glowing, or user workflow becoming simpler. For a fashion or beauty ad, emphasize texture, motion, skin tone, fabric, and light. The goal is to make the video look like a polished campaign asset, with clear product recognition, controlled movement, and a premium final frame.",
  },
  {
    title: "Social Media Prompts",
    body: "Social media Veo prompts need immediate visual clarity because the first second matters. Mention the platform style, aspect ratio, subject, action, pace, and hook. For YouTube Shorts, TikTok, or Reels, use phrases like vertical video, quick close-up, energetic handheld movement, bright room lighting, satisfying transformation, or fast food preparation. Social prompts can be more casual than cinematic prompts, but they still need structure: who is on screen, what they do, where it happens, how the camera moves, and how long the clip lasts. If the prompt is for a tutorial, show the step or result rather than describing the full lesson. If it is for a trend, describe the visual rhythm and expression. Keep the scene simple, readable on a phone, and focused on one punchy visual idea that can be understood without sound.",
  },
  {
    title: "Storytelling Prompts",
    body: "Storytelling prompts should capture one emotionally clear moment instead of trying to compress an entire screenplay into a short clip. Define the character or subject, the setting, what just changed, and the feeling the viewer should take away. Words like quiet discovery, rising tension, hopeful reveal, lonely departure, mysterious arrival, or triumphant return can guide tone, but they should be paired with concrete visual details. Describe weather, props, costumes, distance, camera position, lighting, and the subject’s small action. For example, a child finding a glowing map in an attic is easier for Veo to visualize than a broad fantasy adventure summary. Good storytelling prompts also include a beginning-to-end motion: the door opens, the character looks up, the light shifts, or the camera reveals a hidden detail. That small arc makes the generated sequence feel intentional.",
  },
  {
    title: "Product Demo Prompts",
    body: "Product demo prompts should show the product solving a clear visual task. Start with the product or interface, then describe the user action, visible result, camera angle, environment, and pacing. For software, mention dashboards, floating UI panels, animated workflows, drag-and-drop actions, before-and-after states, or clean cursor movement. For physical products, show hands, materials, scale, close-up details, assembly, pouring, opening, folding, or transformation. The best Veo product demo prompts avoid abstract business language and instead describe what the viewer should actually see on screen. If the product has multiple features, choose one hero feature for the clip rather than listing everything. Include lighting and duration so the demo feels polished, and add context such as home office, studio table, kitchen counter, retail shelf, or outdoor field test when it helps explain why the product matters.",
  },
];

const faqs = [
  { question: "What is Google Veo?", answer: "Google Veo is Google DeepMind's generative video model family for creating video from text and other creative inputs. This page helps you write structured prompts for Veo-style video generation." },
  { question: "How do I write better Veo prompts?", answer: "Include a clear subject, visual style, scene, camera movement, lighting, duration, and quality cues. Specific camera and lighting language usually produces stronger results than generic adjectives alone." },
  { question: "Does this work with Veo 3?", answer: "Yes. The generator is designed for Google Veo and Veo 3 style prompt writing. It does not require an API key and simply helps you produce better text prompts to paste into your Veo workflow." },
  { question: "What makes a cinematic prompt?", answer: "A cinematic prompt describes shot type, camera motion, lighting, mood, composition, realism, and duration. It should feel like a short direction from a filmmaker or creative director." },
  { question: "Can I use these prompts commercially?", answer: "You can use the generated text prompts for commercial projects, ads, and client work. Always check the terms of the video generation platform and any assets, people, brands, or music used in the final video." },
  { question: "Is this Veo prompt generator free?", answer: "Yes. The tool is free, browser-only, and does not use a database, login, payment flow, API key, or third-party prompt service." },
  { question: "Are my prompts uploaded to a server?", answer: "No. The generator runs in your browser as a static page. The prompt is assembled locally from the fields you type into the form." },
  { question: "What duration should I use for Veo prompts?", answer: "Use the duration supported by your current Veo product experience. For many short-form concepts, 5 to 10 seconds is a practical prompt length because it keeps the action focused." },
  { question: "Can I create ad prompts with this tool?", answer: "Yes. Add the product as the subject, use a commercial or luxury style, describe the scene, specify camera movement, and choose lighting that matches the brand mood." },
];

const relatedLinks = [
  ["JSON Formatter", "/tools/json-formatter/"],
  ["JSON Validator", "/tools/json-validator/"],
  ["Base64 Encode Decode", "/tools/base64-encoder-decoder/"],
  ["JWT Decoder", "/tools/jwt-decoder/"],
  ["AI Agents", "/agents/"],
  ["Guides", "/guides/"],
];

const veoGuideLinks = [
  ["Veo Prompt Examples", "/guides/veo-prompt-examples/"],
  ["How to Write Veo Prompts", "/guides/how-to-write-veo-prompts/"],
  ["Veo Cinematic Prompts", "/guides/veo-cinematic-prompts/"],
  ["Veo Ad Prompts", "/guides/veo-ad-prompts/"],
  ["Veo YouTube Shorts Prompts", "/guides/veo-youtube-shorts-prompts/"],
];

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Veo Prompt Generator",
  url: canonical,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: ["Generate Google Veo prompts", "Copy prompts", "Clear form", "Load sample prompt", "Cinematic and ad prompt examples"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bestmcpservers.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://bestmcpservers.com/tools/" },
    { "@type": "ListItem", position: 3, name: "Veo Prompt Generator", item: canonical },
  ],
};

export default function VeoPromptGeneratorPage() {
  return (
    <main className="min-h-screen bg-white">
      {[webApplicationSchema, faqSchema, breadcrumbSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-950">BestMCPServers</Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-950">Home</Link>
            <Link href="/tools/" className="font-semibold text-blue-600">Tools</Link>
            <Link href="/agents/" className="hover:text-slate-950">Agents</Link>
            <Link href="/guides/" className="hover:text-slate-950">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/tools/" className="hover:text-white">Tools</Link></li>
              <li>/</li>
              <li className="text-white">Veo Prompt Generator</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              <Video className="h-4 w-4" /> Google Veo prompt builder
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Veo Prompt Generator</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">Create optimized Google Veo prompts in seconds.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#generator" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500">
                Generate Prompt <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#examples" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">View Examples</a>
            </div>
          </div>
        </div>
      </section>

      <VeoPromptGeneratorClient />

      <section id="examples" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Prompt examples</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Veo prompt examples for videos, ads, and shorts</h2>
            <p className="mt-4 text-slate-600">Use these examples as starting points for Google Veo, Veo 3, and other cinematic video prompt workflows.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {examples.map((example) => (
              <article key={example.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950"><Film className="h-5 w-5 text-blue-600" /> {example.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{example.prompt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Prompt categories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Ways to structure Google Veo prompts</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {categories.map((category) => (
              <article key={category.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{category.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Veo Prompt Generator FAQ</h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6" open={faq.question === "What is Google Veo?"}>
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Veo learning hub</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Learn how to write better Veo prompts</h2>
            <p className="mt-3 text-slate-600">Use these long-form guides to move from examples to cinematic scenes, ad prompts, YouTube Shorts prompts, and a repeatable Veo prompt writing workflow.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {veoGuideLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-white">
            <CheckCircle2 className="h-5 w-5 text-blue-300" />
            <h2 className="text-2xl font-bold">Related Tools</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-slate-100 transition hover:border-blue-300/50 hover:bg-blue-500/10">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
