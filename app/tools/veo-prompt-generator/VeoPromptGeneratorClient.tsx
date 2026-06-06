"use client";

import { useMemo, useState } from "react";
import { Clipboard, Eraser, Sparkles, Wand2 } from "lucide-react";

type FormState = {
  subject: string;
  style: string;
  cameraMovement: string;
  lighting: string;
  scene: string;
  duration: string;
};

const sample: FormState = {
  subject: "a futuristic city skyline with autonomous flying vehicles",
  style: "cinematic, ultra realistic, highly detailed",
  cameraMovement: "slow drone shot moving forward over the rooftops",
  lighting: "golden hour sunset lighting with soft reflections",
  scene: "a clean sci-fi metropolis with glass towers, neon accents, and distant mountains",
  duration: "8-second sequence",
};

const emptyState: FormState = {
  subject: "",
  style: "",
  cameraMovement: "",
  lighting: "",
  scene: "",
  duration: "",
};

function buildPrompt(values: FormState) {
  const subject = values.subject.trim() || "your main subject";
  const style = values.style.trim() || "cinematic, ultra realistic";
  const camera = values.cameraMovement.trim() || "smooth camera movement";
  const lighting = values.lighting.trim() || "natural cinematic lighting";
  const scene = values.scene.trim() || "a visually rich scene";
  const duration = values.duration.trim() || "8-second sequence";

  return `A ${style} video of ${subject}, set in ${scene}, ${camera}, ${lighting}, highly detailed, ${duration}, shot on a professional cinema camera.`;
}

export default function VeoPromptGeneratorClient() {
  const [values, setValues] = useState<FormState>(sample);
  const [hasGenerated, setHasGenerated] = useState(true);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => buildPrompt(values), [values]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setHasGenerated(false);
    setCopied(false);
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="generator" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Free Veo prompt tool</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Generate a complete Google Veo prompt</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Fill in the creative direction, then generate a polished prompt for cinematic videos, ads, shorts, and product scenes.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Subject
                <input value={values.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder="e.g. a luxury electric car driving through Tokyo" className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Style
                <input value={values.style} onChange={(event) => updateField("style", event.target.value)} placeholder="e.g. cinematic, photorealistic, documentary" className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Camera Movement
                <input value={values.cameraMovement} onChange={(event) => updateField("cameraMovement", event.target.value)} placeholder="e.g. slow dolly in, aerial drone shot" className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Lighting
                <input value={values.lighting} onChange={(event) => updateField("lighting", event.target.value)} placeholder="e.g. golden hour lighting, neon reflections" className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Scene
                <textarea value={values.scene} onChange={(event) => updateField("scene", event.target.value)} placeholder="Describe the location, mood, action, and visual details" rows={4} className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Duration
                <input value={values.duration} onChange={(event) => updateField("duration", event.target.value)} placeholder="e.g. 8-second sequence" className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
              </label>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button onClick={() => setHasGenerated(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">
                <Wand2 className="h-4 w-4" /> Generate
              </button>
              <button onClick={() => { setValues(sample); setHasGenerated(true); setCopied(false); }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                <Sparkles className="h-4 w-4" /> Sample
              </button>
              <button onClick={copyPrompt} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                <Clipboard className="h-4 w-4" /> {copied ? "Copied" : "Copy"}
              </button>
              <button onClick={() => { setValues(emptyState); setHasGenerated(false); setCopied(false); }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                <Eraser className="h-4 w-4" /> Clear
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Prompt output</p>
                <h3 className="mt-2 text-2xl font-bold">Ready for Google Veo</h3>
              </div>
              <button onClick={copyPrompt} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Copy</button>
            </div>
            <div className="mt-8 min-h-[280px] rounded-2xl border border-white/10 bg-white/5 p-5 text-lg leading-8 text-slate-100">
              {hasGenerated ? prompt : "Click Generate Prompt to create your optimized Veo prompt."}
            </div>
            <p className="mt-5 text-sm text-slate-400">Tip: stronger Veo prompts usually include subject, motion, setting, lighting, style, duration, and camera language.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
