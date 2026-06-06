export interface RSPPrompt {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  previewImage: string;
  promptText: string;
  howToUse: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  wordCount: number;
  whenWorksBest?: string[];
  commonMistakes?: string[];
  lightingTips?: string[];
  whenToUse?: string;
  bestResultsTips?: string[];
  beforeYouGenerate?: string;
  promptVariations?: { name: string; prompt: string }[];
}

export const rspPrompts: RSPPrompt[] = [
{
    slug: "ai-editor-rsp-editing",
    title: "AI Editor RSP Editing Prompt | Popular Photo Effects 2026",
    metaDescription:
      "Discover the widely used AI editor RSP editing prompt. Transform photos with professional retouching, color grading, and stunning visual effects instantly.",
    keywords: [
      "ai editor rsp",
      "ai editor rsp editing",
      "rsp editing prompt",
      "ai photo editing prompt",
      "rsp photo editor",
    ],
    h1: "AI Editor RSP Editing Prompt: Transform Photos Like a Pro",
    previewImage: "/rsp/previews/ai-editor-rsp-editing.jpg",
    promptText: `Professional AI photo editing prompt for RSP (Retouch, Style, Polish) workflow. Apply this prompt to any portrait or landscape image:

"Apply advanced RSP editing: Retouch skin with frequency separation while preserving natural texture, apply cinematic color grading with teal-orange split toning, enhance dynamic range with HDR-like local contrast, add subtle film grain for organic feel, sharpen eyes and lips selectively, smooth background with Gaussian blur at 15% intensity, correct white balance to 5500K, boost vibrance by +12 without clipping highlights, apply lens vignette at -8 strength, and export at 4K resolution with sRGB color space."

This prompt works with Midjourney, Stable Diffusion, DALL-E, and most AI image generators that support detailed editing instructions.`,
    howToUse: [
      "Copy the full prompt text above using the Copy Prompt button.",
      "Open your preferred AI image editor (Midjourney, Stable Diffusion, or DALL-E).",
      "Paste the prompt into the editing input field or use it as an image-to-image transformation guide.",
      "Upload your base photo and apply the RSP workflow settings as described.",
      "Adjust intensity sliders based on your photo type — portraits need more retouch, landscapes need more color grading.",
      "Export the final image and compare before/after to refine your personal variation.",
    ],
    faqs: [
      {
        question: "What does RSP stand for in AI photo editing?",
        answer:
          "RSP stands for Retouch, Style, and Polish — a three-step workflow used by professional photo editors and AI tools. Retouch fixes imperfections, Style applies color grading and mood, and Polish adds final details like sharpening and grain.",
      },
      {
        question: "Can I use this RSP prompt with free AI tools?",
        answer:
          "Yes. The prompt works with free tiers of Midjourney, Leonardo.ai, Playground AI, and Stable Diffusion web UIs. Some advanced features like frequency separation may require desktop software like GIMP or Photoshop.",
      },
      {
        question: "How long does RSP editing take with AI?",
        answer:
          "AI-powered RSP editing typically takes 10–30 seconds per image on cloud platforms. Local Stable Diffusion with a good GPU can process in under 15 seconds. Batch processing multiple images takes proportionally longer.",
      },
      {
        question: "What is the top AI editor for RSP workflows?",
        answer:
          "Midjourney excels at stylistic RSP results. Stable Diffusion offers the most control for technical retouching. DALL-E 3 is ideal for beginners due to its natural language understanding. For professional use, combine AI with Photoshop for the Polish step.",
      },
      {
        question: "Do I need photography skills to use RSP prompts?",
        answer:
          "No. RSP prompts are designed for beginners. The prompt itself contains all technical instructions. As you use it more, you will naturally learn which adjustments work ideal for different photo types.",
      },
      {
        question: "Which file format should I use for RSP editing?",
        answer:
          "RAW files provide the most flexibility for RSP editing, especially during the Retouch and Style phases. If RAW is unavailable, high-quality JPEGs (minimum 90% quality) work well. Avoid heavily compressed images or screenshots, as they lack the tonal range needed for professional Polish.",
      },
      {
        question: "Can I automate RSP editing across hundreds of photos?",
        answer:
          "Yes. Many professionals batch-apply the Style and Polish steps using Lightroom presets or Photoshop Actions. For AI tools, some platforms offer batch upload features. Keep in mind that the Retouch step often benefits from individual attention, especially for portraits with varying skin tones and lighting conditions.",
      },
    ],
    whenWorksBest: [
      "Portrait photos with visible skin texture and natural lighting",
      "Images shot in RAW format for maximum editing flexibility",
      "Photos where you want a polished, professional look without over-processing",
      "Social media profile pictures and headshots that need subtle enhancement",
    ],
    commonMistakes: [
      "Applying frequency separation at 100% opacity destroys natural skin texture",
      "Over-sharpening eyes creates halos that look artificial",
      "Adding too much vignette draws attention away from the subject",
      "Ignoring white balance causes color casts that are hard to fix later",
    ],
    lightingTips: [
      "Shoot with soft, diffused light for the most flattering retouching results",
      "Avoid harsh midday sun — it creates deep shadows that are difficult to smooth",
      "Use a reflector or fill light to reduce contrast before editing",
      "Backlit subjects work well if you expose for the face, not the background",
    ],
    relatedSlugs: [
      "rsp-editing-prompt",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "ghost-girlfriend-ai-edit",
    ],
    wordCount: 850,
    whenToUse:
      "Use the AI Editor RSP Editing prompt when you need a single, comprehensive instruction set that handles an entire editing workflow from start to finish. It is ideal for content creators managing high-volume output who want consistent, professional-grade results without manually adjusting dozens of sliders. This prompt shines on portrait sessions, product photography, and influencer content where skin texture, color harmony, and subtle polish matter. It is also a strong choice for beginners who want to learn professional editing concepts through an AI-guided framework. If you are batch-processing headshots, preparing e-commerce imagery, or upgrading social media content, this prompt provides the structured Retouch-Style-Poland pipeline that saves time while elevating quality.",
    bestResultsTips: [
      "Start with high-resolution source images (minimum 2000px on the long edge) so the AI has detail to work with during retouching and sharpening.",
      "Use RAW or uncompressed JPEG files to preserve the dynamic range needed for HDR-like local contrast.",
      "Ensure your subject is well-lit with soft, diffused light; harsh shadows make frequency separation look unnatural.",
      "Choose photos with clean, uncluttered backgrounds so Gaussian blur enhances rather than competes with the subject.",
      "Avoid images that are already heavily filtered or compressed; the prompt works best on neutral, unedited starting points.",
      "For portraits, make sure eyes are in sharp focus in the original photo so selective sharpening produces striking results.",
      "If exporting for web, verify sRGB conversion to prevent color shifts on mobile devices and social platforms.",
    ],
    beforeYouGenerate:
      "This prompt is built for creators, marketers, and photo enthusiasts who want professional results without mastering every manual tool. It is not intended for users seeking extreme stylization, surreal art, or heavy compositing. If your source image is extremely underexposed, out of focus, or smaller than 1000px, the prompt cannot recover missing information. Likewise, if you need pixel-perfect surgical retouching for print publications, dedicated software like Photoshop may still be necessary. Use this prompt as a powerful starting point, not a magic fix for fundamentally flawed photography.",
    promptVariations: [
      {
        name: "Speed RSP — Quick Social Media Polish",
        prompt: `"Apply quick RSP editing: Retouch skin lightly with surface blur at 30% opacity, apply warm-cool split toning (warm highlights, cool shadows), boost clarity by +10, add subtle vignette at -6 strength, sharpen eyes only, and export at 1080px width for fast social sharing."`,
      },
      {
        name: "Studio RSP — High-End Portrait Finish",
        prompt: `"Apply studio-grade RSP editing: Retouch skin with frequency separation at 60% opacity and dodge-and-burn contouring, apply neutral color grading with lifted blacks, enhance dynamic range with local contrast at 25%, add fine film grain at 8% intensity, sharpen eyes and lashes with unsharp mask (amount 90, radius 1.0), smooth background with lens blur at f/2.8 equivalent, correct white balance with gray card reference, boost vibrance by +8, apply subtle vignette at -5 strength, and export at 4K resolution with ProPhoto RGB color space."`,
      },
      {
        name: "Landscape RSP — Scenic Color & Detail",
        prompt: `"Apply landscape RSP editing: Skip skin retouch, enhance dynamic range with graduated filters for sky and foreground, apply cinematic color grading with teal shadows and amber highlights, boost dehaze by +15 for atmospheric clarity, add fine grain at 10% for texture, sharpen mid-ground details selectively, correct white balance to match golden hour warmth, boost vibrance by +18, apply lens vignette at -10 strength for focus, and export at 4K resolution with Adobe RGB color space."`,
      },
    ],
  },
  {
    slug: "rsp-editing-prompt",
    title: "RSP Editing Prompt: Complete AI Photo Workflow Guide",
    metaDescription:
      "Master the widely used RSP editing prompt workflow. Step-by-step guide to retouch, style, and polish any photo using AI tools for professional results.",
    keywords: [
      "rsp editing prompt",
      "ai photo editing prompt",
      "rsp workflow",
      "ai retouch prompt",
      "photo polish ai",
    ],
    h1: "RSP Editing Prompt: The Complete AI Photo Workflow",
    previewImage: "/rsp/previews/rsp-editing-prompt.jpg",
    promptText: `Complete RSP (Retouch, Style, Polish) editing prompt for AI photo transformation:

"Step 1 — Retouch: Remove blemishes, soften under-eye shadows, even skin tone using frequency separation at 70% opacity, whiten teeth subtly (no glow effect), reduce redness in cheeks and nose, clean up stray hairs, and smooth fabric wrinkles without losing texture.

Step 2 — Style: Apply cinematic LUT with teal shadows and warm highlights, set contrast to +18, lift blacks to +12 for film look, reduce saturation by -5 for muted elegance, add subtle haze at 8% for atmosphere, and split-tone highlights to warm amber.

Step 3 — Polish: Sharpen eyes with unsharp mask (amount 80, radius 1.2), add catchlights if missing, apply micro-contrast with clarity +15, add 35mm film grain at 12% intensity, vignette corners at -10, and export with sRGB profile at 300 DPI."

Use this as an image-to-image prompt or as a step-by-step editing guide in Photoshop, GIMP, or AI editors.`,
    howToUse: [
      "Copy the complete three-step RSP prompt using the button above.",
      "Choose your editing platform — AI generators for one-click results, or Photoshop for manual control.",
      "For AI tools: paste as an image-to-image prompt with your source photo.",
      "For manual editing: follow each step in order, completing Retouch before moving to Style.",
      "Save a preset or custom style once you find settings you love.",
      "Share your before/after results on social media with #RSPEditing for community feedback.",
    ],
    faqs: [
      {
        question: "What makes RSP different from regular photo filters?",
        answer:
          "RSP is a structured three-phase workflow rather than a single filter. Filters apply one look globally. RSP first fixes problems (Retouch), then creates mood (Style), then perfects details (Polish) — resulting in professional, customized results.",
      },
      {
        question: "Can beginners follow an RSP editing prompt?",
        answer:
          "Absolutely. The prompt breaks editing into simple steps with specific numbers and settings. Even if you do not understand terms like 'frequency separation,' AI tools interpret them automatically. For manual editing, follow along with YouTube tutorials for each step.",
      },
      {
        question: "Which AI tool gives the leading RSP results?",
        answer:
          "Midjourney produces the most artistic Style results. Stable Diffusion with ControlNet gives the most accurate Retouching. Adobe Firefly integrates best with Photoshop for the Polish phase. Many professionals use a combination of two or three tools.",
      },
      {
        question: "How do I save my own RSP preset?",
        answer:
          "After editing a photo you love, document every setting: retouch opacity, color values, sharpening amounts, and grain intensity. Save these as a text file or use Photoshop's Actions panel to record the entire workflow for one-click replay.",
      },
      {
        question: "Is RSP editing only for portraits?",
        answer:
          "No. RSP works for any photo type. Landscapes need less Retouch and more Style. Product photos need precise Retouch and minimal grain. Street photography benefits from heavy Style and subtle Polish. Adjust the prompt ratios for your genre.",
      },
      {
        question: "How do I avoid over-smoothing skin during the Retouch step?",
        answer:
          "The key is opacity control. Keep frequency separation or skin smoothing below 70% and always work on a duplicate layer so you can dial back the effect. Preserve pore texture by masking smoothing away from high-detail areas like the forehead and cheeks.",
      },
      {
        question: "Can I mix RSP steps with my own creative adjustments?",
        answer:
          "Yes. Many creators treat the RSP framework as a foundation and add personal touches during the Style phase — custom LUTs, alternative color palettes, or texture overlays. Just complete each phase in order so corrections happen before creative styling.",
      },
    ],
    whenWorksBest: [
      "Multi-step editing workflows where you want full control over each phase",
      "Photos that need both technical correction and artistic styling",
      "Batch processing sessions where consistency across images matters",
      "Client work where you need to document and repeat your editing decisions",
    ],
    commonMistakes: [
      "Skipping the Retouch step and going straight to Style leaves imperfections visible",
      "Applying Style before Retouch makes skin problems harder to fix cleanly",
      "Using the same LUT on every photo ignores the unique lighting of each shot",
      "Exporting at low DPI ruins print quality even if the screen preview looks good",
    ],
    lightingTips: [
      "The three-point lighting setup gives you the most control during the Retouch phase",
      "Side lighting emphasizes texture — great for dramatic Style but harder to Retouch",
      "Flat frontal lighting minimizes shadows, making Retouch faster but Style less dynamic",
      "Golden hour light has warm tones that complement teal-orange split toning in Style",
    ],
    relatedSlugs: [
      "ai-editor-rsp-editing",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "chibi-ai-edit-prompt",
    ],
    wordCount: 920,
    whenToUse:
      "The Complete RSP Editing Prompt is designed for editors who want a disciplined, repeatable workflow across multiple images or client projects. It is especially valuable when you are training an AI assistant, documenting a process for a team, or learning the logic behind professional photo finishing. Use it when you need to separate technical correction from creative styling so that neither undermines the other. Wedding photographers, portrait studios, and content agencies often rely on this structured approach to maintain consistency across large galleries. It is also an excellent teaching tool for newcomers who want to understand why order matters in editing.",
    bestResultsTips: [
      "Always complete Retouch before Style; fixing blemishes after color grading is harder and can create patchy tones.",
      "Use non-destructive layers or duplicate images so you can revisit any RSP phase without starting over.",
      "Match your LUT choice to the original lighting — daylight photos need different color science than tungsten-lit interiors.",
      "Keep a log of successful settings per photo genre so you can build custom presets over time.",
      "Export an intermediate version after Style but before Polish; this gives you a fallback if grain or sharpening goes too far.",
      "Test your final export on both calibrated monitors and mobile screens to catch unexpected color shifts.",
      "When batch processing, review one fully edited image before applying the workflow to the entire set.",
    ],
    beforeYouGenerate:
      "This prompt is for editors who value structure and repeatability. If you prefer one-click filters or purely generative art, the phased approach may feel slow. It is also not ideal for heavily damaged photos requiring restoration, or for images where you want extreme surreal transformations. The RSP workflow assumes a decent starting image and focuses on refinement. If your goal is quick social-media polish without learning the underlying steps, a simpler single-step prompt may serve you better.",
    promptVariations: [
      {
        name: "RSP Lite — Fast Three-Step Cleanup",
        prompt: `"Step 1 — Retouch: Remove blemishes, even skin tone with light surface blur at 40% opacity, and whiten teeth subtly. Step 2 — Style: Apply warm-cool split toning, set contrast to +12, and reduce saturation by -3. Step 3 — Polish: Sharpen eyes slightly, add subtle vignette at -6, and export at 1080px width with sRGB profile."`,
      },
      {
        name: "RSP Pro — Editorial Fashion Finish",
        prompt: `"Step 1 — Retouch: Remove blemishes, soften under-eye shadows, even skin tone using frequency separation at 60% opacity, whiten teeth, reduce redness, clean stray hairs, smooth fabric wrinkles, and contour cheekbones with dodge-and-burn. Step 2 — Style: Apply high-fashion LUT with muted mauve shadows and warm cream highlights, set contrast to +22, lift blacks to +15, reduce saturation by -8, add subtle haze at 6%, and split-tone highlights to champagne. Step 3 — Polish: Sharpen eyes with unsharp mask (amount 95, radius 1.0), add catchlights, apply micro-contrast with clarity +18, add 35mm film grain at 10% intensity, vignette corners at -12, and export with sRGB profile at 300 DPI."`,
      },
      {
        name: "RSP Landscape — Scenic Workflow",
        prompt: `"Step 1 — Retouch: Remove sensor dust spots, even out sky gradients, and clean up foreground distractions. Step 2 — Style: Apply landscape LUT with deep teal shadows and golden highlights, set contrast to +20, lift blacks to +10, boost saturation in greens and blues by +8, add dehaze at 12%, and split-tone shadows to cool navy. Step 3 — Polish: Sharpen mid-ground details with unsharp mask (amount 70, radius 1.5), add clarity +12 for texture, add fine grain at 8% intensity, vignette corners at -8, and export with Adobe RGB profile at 300 DPI."`,
      },
    ],
  },
  {
    slug: "aesthetic-rsp-prompt",
    title: "Aesthetic RSP Prompt: Trending Dreamy Photo Edits",
    metaDescription:
      "Get the trending aesthetic RSP prompt. Create dreamy, moody, and visually stunning photo edits with this widely used AI editing formula for social media.",
    keywords: [
      "aesthetic rsp prompt",
      "aesthetic photo editing prompt",
      "dreamy photo ai prompt",
      "moody photo editing ai",
      "aesthetic ai editor",
    ],
    h1: "Aesthetic RSP Prompt: Create Dreamy, Trending Photo Edits",
    previewImage: "/rsp/previews/aesthetic-rsp-prompt.jpg",
    promptText: `Aesthetic RSP prompt for creating dreamy, social-media-ready photo edits:

"Apply aesthetic RSP editing: Retouch with porcelain skin effect at 60% opacity, add soft ethereal glow around subject, style with pastel pink and lavender color palette, reduce contrast to -8 for dreamy flat look, lift shadows to +25, add heavy haze at 20% for dreamscape effect, apply Orton effect at 30% for soft focus, polish with butterfly bokeh overlay at 15% opacity, add light leak from top-left corner in warm gold, dust particle overlay at 8%, and finish with handwritten-style date stamp in corner."

Perfect for Instagram, Pinterest, and TikTok aesthetic accounts. Works best on natural light portraits, flower fields, café scenes, and golden hour shots.`,
    howToUse: [
      "Copy the aesthetic RSP prompt to your clipboard.",
      "Select a photo with soft natural lighting — harsh midday sun does not work well with this dreamy style.",
      "Paste into Midjourney, Leonardo.ai, or your preferred aesthetic-focused AI editor.",
      "For manual editing in Lightroom: start with the 'Soft' profile, then apply custom adjustments matching the prompt values.",
      "Export in 4:5 aspect ratio for Instagram or 9:16 for TikTok/Reels.",
      "Add your personal watermark or signature to build brand recognition.",
    ],
    faqs: [
      {
        question: "What photos work best with aesthetic RSP prompts?",
        answer:
          "Soft natural light portraits, golden hour landscapes, café interiors, flower close-ups, and foggy scenes work best. Avoid harsh flash photography or high-contrast scenes — they fight against the soft, dreamy aesthetic.",
      },
      {
        question: "How do I make my aesthetic edits look unique?",
        answer:
          "Start with this prompt as a base, then customize one element: change the color palette from pastel pink to sage green, swap the Orton effect for prism distortion, or replace butterfly bokeh with heart-shaped aperture. Small changes create a signature look.",
      },
      {
        question: "Can aesthetic RSP prompts fix bad lighting?",
        answer:
          "Partially. The prompt can soften harsh shadows and add glow, but it cannot create light that was not captured. For strong results, shoot during golden hour or in open shade, then use the prompt to enhance what is already there.",
      },
      {
        question: "Why do my aesthetic edits look overprocessed?",
        answer:
          "You are likely applying effects at too high intensity. The prompt specifies percentages for a reason — start at 50% of the suggested value and increase gradually. Subtlety is key to professional-looking aesthetic edits.",
      },
      {
        question: "Which platform is ideal for sharing aesthetic RSP edits?",
        answer:
          "Instagram and Pinterest are the top platforms for aesthetic photo content. TikTok works well for before/after transformation videos. Use 4:5 ratio for Instagram feed, 9:16 for Stories and TikTok, and 2:3 for Pinterest.",
      },
      {
        question: "How do I keep skin tones natural under heavy pastel color grading?",
        answer:
          "Use selective color adjustments or HSL panels to protect orange and red channels, which control skin tones. Apply pastel shifts to the background and midtones while masking skin areas, or reduce the overall opacity of the color-grading layer to preserve warmth.",
      },
      {
        question: "What is the Orton effect and why is it popular in aesthetic editing?",
        answer:
          "The Orton effect blends a sharp image with a blurred, overexposed version to create a glowing, dreamlike softness. It is popular in aesthetic editing because it mimics the ethereal quality of film and vintage photography while smoothing harsh digital edges.",
      },
    ],
    whenWorksBest: [
      "Golden hour portraits with warm, directional sunlight",
      "Flower fields, gardens, and outdoor scenes with natural bokeh",
      "Cafe interiors and lifestyle shots with soft ambient light",
      "Selfies and casual photos where you want a dreamy, romantic mood",
    ],
    commonMistakes: [
      "Applying heavy haze to already foggy photos washes out all detail",
      "Using pastel colors on dark skin tones can look ashy instead of dreamy",
      "The Orton effect at high intensity turns photos into blurry messes",
      "Ignoring the original light direction when adding light leaks looks unnatural",
    ],
    lightingTips: [
      "Shoot during the hour after sunrise or before sunset for warm, golden tones",
      "Open shade on a sunny day gives soft, even light without harsh shadows",
      "Backlighting with a diffuser creates the ethereal glow this style is known for",
      "Avoid direct flash — it kills the soft, organic feel that makes aesthetic edits work",
    ],
    relatedSlugs: [
      "ai-editor-rsp-editing",
      "ghost-girlfriend-ai-edit",
      "cinematic-ai-photo-prompt",
      "rsp-editing-prompt",
    ],
    wordCount: 880,
    whenToUse:
      "The Aesthetic RSP Prompt is your go-to when the goal is mood and atmosphere over documentary realism. Reach for it when editing content for lifestyle brands, romantic travel diaries, influencer portfolios, or any visual story that benefits from softness and warmth. It excels on images shot in gentle natural light and pairs beautifully with floral, café, and golden-hour themes. Use this prompt when you want your audience to feel emotion before they analyze detail — ideal for Pinterest boards, Instagram grids, and TikTok transitions where visual cohesion matters more than clinical sharpness.",
    bestResultsTips: [
      "Start with photos that already have soft, diffused light; the prompt enhances atmosphere but cannot fully rescue harsh midday contrast.",
      "Keep the Orton effect below 35% to maintain recognizable facial features and environmental detail.",
      "Use pastel color grading as a subtle wash rather than a dominant tint; aim for 15-25% opacity on color layers.",
      "Add light leaks that match the original light direction in the photo to maintain believability.",
      "Select butterfly or shaped bokeh overlays that complement the background rather than compete with the subject.",
      "Export in the platform-native aspect ratio before uploading to avoid unexpected cropping.",
      "Preserve skin-tone warmth by masking faces from the coolest pastel shifts.",
    ],
    beforeYouGenerate:
      "This prompt is crafted for creators who prioritize feeling and visual harmony over technical precision. If your project demands crisp documentary detail, scientific accuracy, or corporate neutrality, the heavy haze and soft focus here will work against you. It is also not suited for photos with busy, high-contrast backgrounds or flash photography, where the dreamy treatments can look forced. Use this prompt when your image and your audience both invite a little romantic blur.",
    promptVariations: [
      {
        name: "Aesthetic Lite — Subtle Dreamy Polish",
        prompt: `"Apply aesthetic RSP editing: Retouch with soft skin smoothing at 40% opacity, add gentle glow around subject, style with pastel cream and peach palette, reduce contrast to -4, lift shadows to +15, add light haze at 10%, apply soft Orton effect at 15%, polish with circular bokeh overlay at 8% opacity, add subtle warm light leak from top edge, and finish with minimal dust particles at 4%."`,
      },
      {
        name: "Moody Aesthetic — Darker Dreamscape",
        prompt: `"Apply moody aesthetic RSP editing: Retouch with soft skin smoothing at 50% opacity, add cool ethereal glow around subject, style with muted mauve and slate blue palette, reduce contrast to -6, lift shadows to +20, add heavy haze at 18%, apply Orton effect at 25%, polish with raindrop bokeh overlay at 12% opacity, add cool light leak from left edge in silver, mist particle overlay at 10%, and finish with typewriter date stamp in corner."`,
      },
      {
        name: "Vintage Aesthetic — Retro Dream Edit",
        prompt: `"Apply vintage aesthetic RSP editing: Retouch with film-soft skin at 55% opacity, add warm glow around subject, style with faded sepia and blush pink palette, reduce contrast to -10, lift shadows to +30, add haze at 15%, apply Orton effect at 20%, polish with hexagonal bokeh overlay at 10% opacity, add warm orange light leak from right edge, dust and scratch overlay at 6%, and finish with handwritten date stamp and film border."`,
      },
    ],
  },
  {
    slug: "ghost-girlfriend-ai-edit",
    title: "Ghost Girlfriend AI Edit Prompt | Ethereal Portrait",
    metaDescription:
      "Create stunning ghost girlfriend AI edits with this trending prompt. Ethereal, translucent, and hauntingly beautiful portrait effects for your photos.",
    keywords: [
      "ghost girlfriend ai edit",
      "ghost portrait ai prompt",
      "ethereal ghost photo edit",
      "translucent portrait ai",
      "haunting photo editing prompt",
    ],
    h1: "Ghost Girlfriend AI Edit: Create Ethereal, Haunting Portraits",
    previewImage: "/rsp/previews/ghost-girlfriend-ai-edit.jpg",
    promptText: `Ghost girlfriend AI editing prompt for creating ethereal, translucent portrait effects:

"Transform subject into ghost girlfriend aesthetic: Apply 40% opacity reduction to skin for translucent effect, add soft white glow emanating from body edges, desaturate colors to 30% for ghostly pale look, add subtle motion blur at 8% for ethereal movement, overlay faint double exposure with forest or abandoned room background, add floating dust particles in light beams, apply cold blue-white color grading at 6500K, add tear streaks with light reflection, soften all edges with Gaussian blur at 5px, and finish with vintage film border and light leak artifacts."

This trending editing trend creates hauntingly beautiful portraits great for Halloween content, artistic photography projects, and moody social media aesthetics.`,
    howToUse: [
      "Copy the ghost girlfriend prompt using the Copy Prompt button.",
      "Choose a portrait photo with a clean background — busy backgrounds make the translucent effect harder to achieve.",
      "Use an AI editor with layer support (Photoshop, Photopea, or advanced Stable Diffusion workflows).",
      "Create a duplicate layer and reduce opacity to 40% for the ghost effect base.",
      "Add the glow effect using outer glow layer style with white color and 60px spread.",
      "Fine-tune the cold color grading until the skin has that iconic ghostly pale appearance.",
    ],
    faqs: [
      {
        question: "What is the ghost girlfriend AI edit trend?",
        answer:
          "Ghost girlfriend is a viral photo editing trend where portraits are transformed to look ethereal, translucent, and hauntingly beautiful. The subject appears as a gentle spirit with soft glow, pale skin, and dreamlike atmosphere. It combines horror aesthetics with romantic beauty.",
      },
      {
        question: "Can I create ghost edits without Photoshop?",
        answer:
          "Yes. Free alternatives include Photopea (browser-based Photoshop clone), GIMP, and Canva. AI tools like Midjourney and Leonardo.ai can also generate ghost girlfriend images from text prompts without needing source photos.",
      },
      {
        question: "Why does my ghost edit look fake?",
        answer:
          "The most common mistake is too much opacity reduction — going below 30% makes the subject disappear instead of look ghostly. Another issue is inconsistent lighting direction. Make sure the glow emanates from the same direction as your original light source.",
      },
      {
        question: "What backgrounds work ideal for ghost girlfriend edits?",
        answer:
          "Abandoned buildings, foggy forests, Victorian interiors, empty hallways, and moonlit gardens work best. The background should be darker than the subject so the translucent glow stands out. Avoid bright or cluttered backgrounds.",
      },
      {
        question: "How do I make the ghost effect look realistic?",
        answer:
          "Realism comes from subtlety. Keep opacity between 35-50%, add environmental interaction (dust particles, light beams, fog), and ensure the ghost's pose suggests weightlessness. Reference real double-exposure photography for natural-looking transparency.",
      },
      {
        question: "How can I add emotional storytelling to a ghost girlfriend edit?",
        answer:
          "Focus on small narrative details: a hand reaching toward something unseen, a distant gaze, or a flowing dress that suggests movement through time. Cold color grading and subtle tear streaks amplify the melancholic romance that defines this trend.",
      },
      {
        question: "What is the ideal opacity range for the translucent skin effect?",
        answer:
          "The sweet spot is 35% to 50% opacity. Below 35%, the subject begins to vanish and loses facial definition. Above 50%, the ghostly quality fades and the edit starts to look like a standard desaturated portrait with a glow filter.",
      },
    ],
    whenWorksBest: [
      "Portraits with simple, dark backgrounds that let the translucent effect stand out",
      "Photos with visible light beams or window light for dust particle effects",
      "Halloween content, artistic projects, and moody social media aesthetics",
      "Images where the subject has pale skin that responds well to desaturation",
    ],
    commonMistakes: [
      "Reducing opacity below 30% makes the subject disappear instead of look ghostly",
      "Adding glow from the wrong direction breaks the illusion of natural light",
      "Overusing motion blur makes the subject look blurry, not ethereal",
      "Choosing bright or cluttered backgrounds competes with the ghost effect",
    ],
    lightingTips: [
      "Use a single, strong light source from one side to create dramatic shadows",
      "Window light with sheer curtains diffuses the glow for a softer ghost effect",
      "Darken the background in-camera or in post so the subject's glow stands out",
      "Avoid flat lighting — contrast between light and shadow is what sells the ghost look",
    ],
    relatedSlugs: [
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "chibi-ai-edit-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 900,
    whenToUse:
      "The Ghost Girlfriend AI Edit Prompt is designed for moments when you want to blend melancholy romance with supernatural beauty. It is a favorite for Halloween campaigns, gothic aesthetic portfolios, conceptual art projects, and moody social media storytelling. Use it when your image already carries a sense of longing, solitude, or mystery — the prompt amplifies those emotions through translucency and cold light. It also works beautifully for album artwork, poetry visuals, and short-form video thumbnails where an ethereal presence stops the scroll. If your audience responds to dark academia, romantic horror, or dreamlike surrealism, this prompt belongs in your toolkit.",
    bestResultsTips: [
      "Select portraits with visible eye contact or a strong emotional expression; transparency can flatten features, so expression carries the image.",
      "Use dark, simple backgrounds — black walls, deep forests, or dim hallways — so the white glow reads clearly.",
      "Keep the original light direction in mind when adding outer glow; mismatched lighting destroys the illusion.",
      "Add environmental particles sparingly; 5-10% opacity dust or fog sells the atmosphere without clutter.",
      "Desaturate gradually rather than all at once; leaving a hint of lip or eye color keeps the subject feeling alive.",
      "Use vintage film borders to ground the supernatural effect in nostalgic photography aesthetics.",
      "Motion blur should suggest floating or drifting, not camera shake; keep it under 10% and directional.",
    ],
    beforeYouGenerate:
      "This prompt is for creators drawn to romantic-gothic aesthetics and emotional storytelling. It is not intended for bright, cheerful branding, corporate headshots, or family photography where a haunting mood would feel out of place. If your source image is already low-resolution or heavily compressed, the transparency and blur effects may exaggerate artifacts. Likewise, busy backgrounds or multi-subject compositions make the ghost effect difficult to execute cleanly. Choose your base photo with intention — this prompt rewards atmosphere and simplicity.",
    promptVariations: [
      {
        name: "Ghost Girlfriend Lite — Soft Ethereal Glow",
        prompt: `"Transform subject into soft ghost aesthetic: Apply 45% opacity reduction to skin for gentle translucency, add warm white glow from body edges, desaturate colors to 40%, add subtle motion blur at 5%, overlay faint double exposure with misty garden background, add floating pollen particles in light, apply cool silver-blue color grading at 6000K, soften edges with Gaussian blur at 3px, and finish with clean white border."`,
      },
      {
        name: "Ghost Bride — Victorian Haunting",
        prompt: `"Transform subject into ghost bride aesthetic: Apply 35% opacity reduction to skin and gown for deep translucency, add cold white glow from veil and dress edges, desaturate colors to 20%, add slow motion blur at 10% for drifting movement, overlay double exposure with abandoned chapel interior, add floating dust and feather particles in light beams, apply icy blue-white color grading at 7000K, add tear streaks with candlelight reflection, soften edges with Gaussian blur at 6px, and finish with aged film border and torn edges."`,
      },
      {
        name: "Ghost Companion — Friendly Spirit",
        prompt: `"Transform subject into friendly ghost aesthetic: Apply 50% opacity reduction to skin for light translucency, add soft golden glow from body edges, desaturate colors to 35%, add gentle motion blur at 4%, overlay faint double exposure with cozy bedroom background, add warm floating dust particles, apply neutral-warm color grading at 5500K, add soft smile enhancement, soften edges with Gaussian blur at 3px, and finish with rounded polaroid-style border."`,
      },
    ],
  },
  {
    slug: "chibi-ai-edit-prompt",
    title: "Chibi AI Edit Prompt: Turn Photos Into Cute Characters",
    metaDescription:
      "Transform any photo into adorable chibi art with this AI edit prompt. Popular for avatars, social media, and cute character creation from real photos.",
    keywords: [
      "chibi ai edit prompt",
      "chibi photo transformation",
      "cute character ai prompt",
      "photo to chibi ai",
      "anime chibi editing",
    ],
    h1: "Chibi AI Edit Prompt: Transform Photos Into Adorable Characters",
    previewImage: "/rsp/previews/chibi-ai-edit-prompt.jpg",
    promptText: `Chibi AI transformation prompt for converting photos into cute anime-style characters:

"Transform photo into chibi anime character: Enlarge head to 1.5x body ratio with oversized sparkling eyes, shrink body to 2.5 heads tall, apply rounded soft facial features with tiny nose and mouth, add blush circles on cheeks at 30% opacity, style hair into chunky simplified anime shapes with highlight strands, simplify clothing into clean bold shapes with minimal folds, add tiny hands and feet with 3 fingers, apply pastel color palette with soft shading, add white catchlights in eyes at 2 o\'clock position, include tiny floating heart or star accessories, and render with clean cell-shaded anime style with soft gradient backgrounds."

Works with Midjourney's niji model, Stable Diffusion with anime checkpoints, and DALL-E for consistent character creation.`,
    howToUse: [
      "Copy the chibi transformation prompt to your clipboard.",
      "For strong results, use a clear front-facing portrait with visible facial features.",
      "In Midjourney: use --niji 6 parameter for optimized anime output. Upload your photo as an image prompt plus this text.",
      "In Stable Diffusion: use an anime checkpoint like AnythingV5 or Counterfeit, with ControlNet OpenPose to preserve the pose.",
      "For multiple characters: process each person separately, then composite them together maintaining consistent chibi proportions.",
      "Use the result as social media avatars, Discord icons, or commission samples.",
    ],
    faqs: [
      {
        question: "What is a chibi character style?",
        answer:
          "Chibi is a Japanese art style featuring characters with oversized heads, large expressive eyes, and tiny bodies — typically 2-3 heads tall. The style emphasizes cuteness and simplicity, making it popular for merchandise, avatars, and casual anime art.",
      },
      {
        question: "Can AI accurately capture my likeness in chibi style?",
        answer:
          "AI can capture general features like hair color, eye shape, and clothing style. For stronger likeness, use image-to-image with high denoising strength (0.6-0.7) and include specific descriptors like 'wearing red glasses' or 'blonde bob haircut' in the prompt.",
      },
      {
        question: "Which AI model is ideal for chibi transformations?",
        answer:
          "Midjourney Niji 6 produces the highest quality chibi art. Stable Diffusion with anime checkpoints offers more control. DALL-E 3 understands the concept well but may need multiple attempts for consistent anime styling.",
      },
      {
        question: "How do I make chibi edits of multiple people?",
        answer:
          "Process each person individually for strong results. Use the same seed and checkpoint for consistency. Composite the final chibis into a group scene using Photoshop or Canva. Alternatively, use Midjourney with multiple image prompts and the --cref parameter.",
      },
      {
        question: "Can I use chibi AI edits commercially?",
        answer:
          "Check the terms of your AI platform. Midjourney paid plans allow commercial use. Stable Diffusion outputs are generally unrestricted. Always verify you have rights to the source photo before transforming it, especially for client work.",
      },
      {
        question: "How do I preserve my outfit details in chibi form?",
        answer:
          "Mention specific clothing items and colors explicitly in the prompt. AI tends to simplify garments into generic shapes unless guided. Adding descriptors like 'red plaid skirt,' 'denim jacket with pins,' or 'yellow raincoat' helps the model retain recognizable style elements.",
      },
      {
        question: "Why do my chibi results sometimes look creepy or off-model?",
        answer:
          "Creepy chibi results usually come from incorrect head-to-body ratios, overly detailed facial features, or inconsistent eye sizing. Ensure your prompt specifies 2.5 to 3 heads tall, rounded soft features, and simplified anatomy. Using a dedicated anime model like Niji 6 dramatically reduces off-model output.",
      },
    ],
    whenWorksBest: [
      "Clear front-facing portraits where facial features are easy to identify",
      "Photos with simple clothing that translates well to simplified anime shapes",
      "Social media avatars, Discord icons, and cute character commissions",
      "Group photos where each person can be processed individually for consistent style",
    ],
    commonMistakes: [
      "Using side-profile photos makes the oversized chibi head proportions look strange",
      "Complex patterns and textures in clothing do not simplify well into cell-shaded art",
      "Low-resolution source photos lose detail needed for accurate likeness",
      "Processing multiple people in one prompt leads to inconsistent proportions",
    ],
    lightingTips: [
      "Even, frontal lighting keeps facial features visible for accurate transformation",
      "Avoid heavy shadows on the face — they confuse AI models about feature placement",
      "A ring light or softbox creates the flat, clean look that chibi styles favor",
      "Colorful ambient lighting can be preserved as hair or eye highlights in the final art",
    ],
    relatedSlugs: [
      "ghost-girlfriend-ai-edit",
      "aesthetic-rsp-prompt",
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
    ],
    wordCount: 870,
    whenToUse:
      "The Chibi AI Edit Prompt is your tool for turning everyday portraits into irresistibly cute, shareable characters. It is widely used by streamers building branded avatar sets, couples creating matching profile pictures, and artists producing quick commission previews. Use it when you want to lower the emotional barrier of a formal photo — chibi art feels approachable, playful, and universally appealing. It also works well for merchandise mockups, sticker designs, and event invitations where a lighthearted tone matters. If your audience enjoys anime culture, Kawaii aesthetics, or personalized cartoon art, this prompt delivers instant charm.",
    bestResultsTips: [
      "Supply a front-facing, well-lit portrait with a neutral expression; extreme angles or heavy shadows distort the chibi proportions.",
      "Simplify clothing descriptions in your prompt to core shapes and colors; intricate patterns rarely survive the stylization process.",
      "Use an anime-specialized model such as Midjourney Niji 6 or a dedicated Stable Diffusion anime checkpoint for on-model anatomy.",
      "Process individuals separately and composite afterward; group prompts often produce uneven head sizes and inconsistent quality.",
      "Include 2-3 defining personal traits (hairstyle, glasses, accessories) to strengthen likeness without overcomplicating the design.",
      "Set denoising strength between 0.6 and 0.7 in image-to-image workflows to balance transformation with feature preservation.",
      "Export at high resolution even if the final use is small; clean lines scale down better than they scale up.",
    ],
    beforeYouGenerate:
      "This prompt is built for fun, personality-driven content and casual commercial use. It is not suited for formal corporate branding, realistic editorial portraiture, or contexts where anatomical accuracy is critical. If your source photo includes multiple people, complex group poses, or heavily obscured faces, the chibi conversion may struggle to maintain coherence. Additionally, if you need to match an existing intellectual property style closely, be mindful of copyright boundaries. Treat this prompt as a starting point for original character art rather than a replication engine.",
    promptVariations: [
      {
        name: "Chibi Icon — Minimal Avatar Style",
        prompt: `"Transform photo into minimal chibi icon: Enlarge head to 1.4x body ratio with large expressive eyes, shrink body to 2 heads tall, apply rounded facial features with dot eyes and tiny smile, add soft blush circles at 25% opacity, style hair into simple geometric shapes with one highlight, simplify clothing into solid color blocks, apply pastel palette with flat shading, add white catchlights, include one small star accessory, and render with clean thick outlines on transparent background."`,
      },
      {
        name: "Chibi Couple — Matching Pair Set",
        prompt: `"Transform two photos into matching chibi couple: Enlarge heads to 1.5x body ratio with oversized sparkling eyes, shrink bodies to 2.5 heads tall, apply rounded soft facial features with tiny noses and mouths, add blush circles at 30% opacity, style hair into chunky simplified anime shapes with highlight strands, simplify outfits into coordinated color palette with minimal folds, add tiny hands with 3 fingers, apply pastel color palette with soft shading, add white catchlights at 2 o\'clock, include tiny floating heart accessories between the pair, and render with clean cell-shaded anime style on soft gradient background."`,
      },
      {
        name: "Chibi Fantasy — Magical Character Version",
        prompt: `"Transform photo into fantasy chibi character: Enlarge head to 1.5x body ratio with oversized glowing eyes, shrink body to 2.5 heads tall, apply rounded soft facial features with tiny nose and mouth, add blush circles at 30% opacity, style hair into chunky anime shapes with magical color streaks, simplify clothing into enchanted robes with minimal folds and rune details, add tiny hands with 3 fingers holding a miniature wand, apply jewel-tone palette with soft shading, add white catchlights and star-shaped pupils, include tiny floating crystal accessories, and render with clean cell-shaded anime style with mystical gradient background."`,
      },
    ],
  },
{
    slug: "cinematic-ai-photo-prompt",
    title: "Cinematic AI Photo Prompt | Trending Film Look 2026",
    metaDescription:
      "Apply a trending cinematic AI photo prompt to any image. Get film-inspired color grading, anamorphic flares, and widescreen atmosphere in seconds.",
    keywords: [
      "cinematic ai photo prompt",
      "hollywood photo editing ai",
      "cinematic color grading prompt",
      "anamorphic photo ai",
      "film look ai editing",
    ],
    h1: "Cinematic AI Photo Prompt: Cinema-Inspired Editing for Any Image",
    previewImage: "/rsp/previews/cinematic-ai-photo-prompt.jpg",
    promptText: `Cinematic AI photo editing prompt for cinema-inspired-level visual treatment:

"Apply cinematic film treatment: Color grade with Kodak Vision3 5219 emulation, add teal shadows at RGB(18,42,52) and warm orange highlights at RGB(255,178,102), crush blacks to film-like 5 IRE, lift shadows with film toe curve, add anamorphic lens flare at light sources with horizontal streak, simulate 2.39:1 widescreen letterbox bars, apply subtle gate weave at 1px amplitude, add 35mm film grain with proper color channel separation, apply halation glow around bright edges at 3% intensity, add chromatic aberration at 2px offset, and finish with cinematic contrast curve (S-curve with lifted blacks and compressed highlights)."

This prompt recreates the look of cinema productions for your photography.`,
    howToUse: [
      "Copy the complete cinematic prompt using the Copy Prompt button.",
      "Select a photo with strong light sources — the anamorphic flare effect needs visible highlights to work.",
      "For AI tools: paste as an image-to-image prompt with strength between 0.4-0.6 to preserve composition while applying the look.",
      "For Lightroom/Photoshop: manually apply each step using the specified values as starting points.",
      "The letterbox bars can be added in post — crop to 2.39:1 ratio or use black bar overlays.",
      "Export at high resolution (4K+) to preserve film grain detail.",
    ],
    faqs: [
      {
        question: "What makes a photo look cinematic?",
        answer:
          "Cinematic photos combine several elements: widescreen aspect ratio (2.39:1), teal-orange color grading, film grain, anamorphic lens characteristics, controlled contrast with lifted blacks, and halation glow. These elements mimic how professional cinema cameras capture light.",
      },
      {
        question: "Can I apply cinematic looks to phone photos?",
        answer:
          "Yes. The cinematic prompt works on any photo source. Phone photos may need additional sharpening and noise reduction before applying film grain. Shoot in RAW or use the highest quality JPEG setting for strong results.",
      },
      {
        question: "What is anamorphic lens flare?",
        answer:
          "Anamorphic lens flare is the horizontal streak of light seen in movies shot with anamorphic lenses. It appears as a blue or white line extending from bright light sources. The prompt recreates this digitally for a signature cinematic look.",
      },
      {
        question: "Do I need expensive software for cinematic editing?",
        answer:
          "No. Free options include DaVinci Resolve (for color grading), GIMP with film emulation plugins, and web-based AI editors. The prompt itself works with free AI tools. Professional software like Photoshop speeds up the workflow but is not required.",
      },
      {
        question: "Which genres work best with cinematic prompts?",
        answer:
          "Portrait photography, automotive shots, cityscapes at night, and dramatic landscapes benefit most. The prompt enhances mood and atmosphere. Avoid using it on bright, cheerful photos where the dark, moody treatment would feel inappropriate.",
      },
      {
        question: "How do I keep skin tones natural with teal-orange grading?",
        answer:
          "Teal-orange grading pushes shadows toward cyan and highlights toward amber, which can make skin look orange if overdone. Use a qualifier or mask to protect midtone skin, or reduce the saturation of the orange channel until faces look healthy rather than sunburned.",
      },
      {
        question: "Why does my cinematic edit look like a filter instead of a film?",
        answer:
          "Filters apply uniform adjustments; film responds to light organically. Add subtle variation—slight gate weave, uneven grain, halation only on the brightest edges, and lifted rather than crushed blacks. These imperfections are what sell the analog illusion.",
      },
    ],
    whenWorksBest: [
      "Photos with strong light sources for anamorphic flare effects",
      "Night cityscapes, automotive shots, and dramatic portraits with mood",
      "Images you plan to crop to 2.39:1 widescreen ratio for maximum impact",
      "Content where a dark, atmospheric treatment enhances the story",
    ],
    commonMistakes: [
      "Applying cinematic contrast to bright, cheerful photos creates a mismatched mood",
      "Overdoing film grain on low-resolution images adds noise instead of texture",
      "Adding letterbox bars before editing crops out important composition elements",
      "Ignoring the original color temperature causes the teal-orange grade to look wrong",
    ],
    lightingTips: [
      "Shoot during blue hour for natural teal shadows that complement the color grade",
      "Include practical light sources in frame — street lamps, neon signs, car headlights",
      "Use a lens hood to control flare, then add digital anamorphic flare in post",
      "Underexpose slightly to preserve highlight detail for the halation glow effect",
    ],
    relatedSlugs: [
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
      "aesthetic-rsp-prompt",
      "ghost-girlfriend-ai-edit",
    ],
    wordCount: 890,
    whenToUse:
      "Use the cinematic AI photo prompt when you want to give everyday images the emotional weight of a movie frame. It is widely used for automotive photography where reflections and headlights create natural anamorphic flare opportunities, for night cityscapes that benefit from teal shadows and neon warmth, and for dramatic portraits that need a narrative atmosphere. Content creators also rely on this prompt for YouTube thumbnails, podcast cover art, and music promotion graphics where a Hollywood look increases perceived production value. If you are building a portfolio of mood-driven imagery or creating visuals for short films and trailers, this prompt provides consistent cinema-grade color science without requiring a colorist.",
    bestResultsTips: [
      "Start with RAW files or high-quality JPEGs—heavy grading reveals compression artifacts.",
      "Include at least one visible light source in frame for believable anamorphic flare.",
      "Underexpose by 0.3–0.7 stops to protect highlights before crushing blacks.",
      "Use subjects with warm skin tones; cool-toned complexions can look sickly under teal shadows.",
      "Avoid images with blown-out skies—there is no detail left to grade.",
      "Export at 4K or higher so film grain reads as texture, not noise.",
      "Test the prompt at 0.4 and 0.6 image-to-image strength to find the sweet spot for your photo.",
    ],
    beforeYouGenerate:
      "This prompt is for creators who want a polished, theatrical aesthetic—filmmakers, automotive photographers, and music visual designers will feel at home here. It is less suited for bright lifestyle content, cheerful product photography, or corporate headshots where a neutral look is expected. If your source image is already low resolution or heavily compressed, the grain and chromatic aberration will emphasize flaws rather than hide them.",
    promptVariations: [
      {
        name: "Neo-Noir Cinematic",
        prompt:
          'Apply neo-noir cinematic treatment: Convert to high-contrast monochrome with deep blacks, add selective color isolation on a single red or amber element, simulate venetian-blind shadow patterns, apply heavy film grain at 35% intensity, add cigarette-smoke haze overlay at 12%, crush blacks to pure black while preserving shadow detail in the subject’s eyes, finish with 2.39:1 letterbox and subtle vignette at -15.',
      },
      {
        name: "Golden Hour Cinema",
        prompt:
          'Apply golden hour cinematic treatment: Warm color grade with amber shadows and honey highlights, add lens flare from a low sun angle, boost dynamic range to preserve backlit hair detail, apply soft halation on rim light, simulate 16mm film grain for nostalgic texture, add subtle light leak from the right edge in warm orange, and finish with lifted blacks and gentle S-curve contrast for a romantic film look.',
      },
      {
        name: "Sci-Fi Blockbuster",
        prompt:
          'Apply sci-fi blockbuster cinematic treatment: Cool color grade with steel-blue shadows and cyan highlights, add digital HUD reflections and subtle scan-line artifacts at 4% opacity, simulate IMAX-grade clarity with micro-contrast enhancement, apply anamorphic flare with blue horizontal streaks, add volumetric fog with cool light scattering, crush blacks while preserving deep shadow detail, and finish with 2.76:1 ultra-widescreen letterbox for epic scale.',
      },
    ],
  },
  {
    slug: "vintage-film-rsp-prompt",
    title: "Vintage Film RSP Prompt | Trending Retro Look 2026",
    metaDescription:
      "Get the trending vintage film RSP prompt. Add authentic light leaks, grain, and faded colors for widely used retro photo editing results.",
    keywords: [
      "vintage film photo prompt",
      "retro photo editing ai",
      "film photography ai prompt",
      "light leak photo effect",
      "vintage color grading ai",
    ],
    h1: "Vintage Film RSP Prompt: Authentic Retro Photo Editing",
    previewImage: "/rsp/previews/vintage-film-rsp-prompt.jpg",
    promptText: `Vintage film RSP prompt for authentic retro photography aesthetics:

"Apply vintage film treatment: Retouch with minimal intervention — preserve natural skin texture and imperfections for authenticity. Style with Kodachrome 64 emulation — boost saturation in reds and yellows, fade blacks to dark gray for film toe, add warm color cast at +8 on yellow axis, simulate expired film with color shift toward magenta in shadows. Polish with heavy 35mm grain at 25% intensity, add light leak from right edge in warm orange, include film border with sprocket holes, add subtle scratches at 3% opacity, apply slight vignette from lens limitation (not digital), and finish with date stamp in bottom-right corner using 1970s typewriter font."

Perfect for nostalgic content, throwback Thursday posts, and vintage aesthetic portfolios.`,
    howToUse: [
      "Copy the vintage film RSP prompt to your clipboard.",
      "Choose photos with natural, unposed moments — vintage film looks best on candid shots.",
      "For authentic results, slightly underexpose your source photo by 0.5 stops before applying the prompt.",
      "In AI editors: use as an image-to-image prompt with 0.5 strength to preserve the moment while adding the film look.",
      "For manual editing: apply adjustments in the RSP order — minimal retouch, heavy color styling, then grain and artifacts.",
      "Add a subtle dust and scratch overlay from free texture libraries for extra authenticity.",
    ],
    faqs: [
      {
        question: "What defines vintage film photography aesthetics?",
        answer:
          "Vintage film aesthetics include faded colors, warm color casts, visible grain, light leaks, film borders, and slight imperfections. Unlike clean digital photos, film has character from chemical processing, lens limitations, and physical wear.",
      },
      {
        question: "How do I avoid making vintage edits look fake?",
        answer:
          "Authenticity comes from imperfection. Real film has inconsistent grain, uneven light leaks, and organic color shifts. Avoid perfectly symmetrical effects or uniform grain patterns. Vary opacity and placement of each element.",
      },
      {
        question: "Which vintage film stock should I emulate?",
        answer:
          "Kodachrome for vibrant travel photos, Portra 400 for soft skin tones, Tri-X for dramatic black and white, and Polaroid 600 for instant camera nostalgia. Each stock has distinct color science and grain structure.",
      },
      {
        question: "Can I create vintage looks on modern smartphone photos?",
        answer:
          "Yes. Smartphone photos actually work well because their sharpness and clarity provide a clean canvas. The vintage treatment adds back the character that digital sensors remove. Just avoid over-sharpened portrait mode photos.",
      },
      {
        question: "Where can I find free film grain and light leak overlays?",
        answer:
          "Free resources include Texture.ninja, Overlay.tech, and various YouTube tutorials with download links. Search for '8mm film overlay' or '35mm grain texture' on Google with Creative Commons filter enabled.",
      },
      {
        question: "Why do my vintage edits look more like a filter than real film?",
        answer:
          "Filters apply uniform color shifts and repeating grain textures. Real film has organic variation—uneven light leaks, chemical stains, and frame-to-frame inconsistency. Randomize scratch placement, vary grain intensity across the image, and avoid perfectly centered vignettes to break the digital uniformity.",
      },
      {
        question: "How do I match the date stamp font to the right era?",
        answer:
          "Use typewriter-style fonts for 1970s–1980s, dot-matrix or LCD fonts for late-1980s–1990s, and handwritten script for Polaroid-style instant photos. Keep the stamp slightly misaligned and low-contrast so it feels stamped by a machine rather than added in software.",
      },
    ],
    whenWorksBest: [
      "Candid lifestyle shots with natural, unposed body language",
      "Travel photography where warm tones enhance nostalgia",
      "Portraits with soft daylight or overcast lighting",
      "Social content themed around throwback aesthetics or analog culture",
    ],
    commonMistakes: [
      "Applying heavy grain to already noisy low-light photos destroys detail",
      "Using perfectly symmetrical light leaks that look digitally generated",
      "Over-saturating reds and yellows until skin looks sunburned",
      "Adding film borders to photos that will be cropped by social platforms",
    ],
    lightingTips: [
      "Shoot in open shade or during golden hour for soft, era-appropriate light",
      "Avoid LED or fluorescent lighting—the color spectrum clashes with warm film emulation",
      "Use natural window light for indoor portraits that feel like 1970s family albums",
      "Leave slight overexposure in highlights; film handled bright skies more gracefully than digital",
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "aesthetic-rsp-prompt",
      "rsp-editing-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 860,
    whenToUse:
      "The vintage film RSP prompt shines when you want to evoke nostalgia or analog authenticity. It is widely used for travel diaries that mimic 1970s Kodachrome slides, lifestyle content celebrating throwback fashion, and personal portfolios that reject sterile digital perfection. Musicians and brands targeting retro aesthetics—vinyl culture, cassette tapes, classic cars—use this prompt to maintain visual consistency with their identity. It is also a creator favorite for #ThrowbackThursday posts and anniversary content where a timestamped, grain-rich look adds emotional weight and credibility.",
    bestResultsTips: [
      "Start with candid, unposed moments—stiff studio shots rarely feel authentically vintage.",
      "Underexpose slightly before applying the prompt; film had less dynamic range than modern sensors.",
      "Use natural daylight or tungsten-lit scenes; modern LED spectrums do not shift gracefully into vintage color casts.",
      "Preserve skin imperfections and freckles—over-retouching kills the analog honesty.",
      "Add physical artifacts like sprocket holes or date stamps only at the final export stage.",
      "Vary grain intensity by image region; real film grain was never perfectly uniform.",
      "Combine with a subtle paper texture overlay for album-print authenticity.",
    ],
    beforeYouGenerate:
      "This prompt is ideal for storytellers, travel bloggers, and vintage-culture creators who value imperfection as a design choice. It is not recommended for clean corporate headshots, medical photography, or product images where accurate color representation is legally required. If your source photo is already heavily compressed or has aggressive noise reduction applied, the grain layer will fight against the plastic texture rather than complement it.",
    promptVariations: [
      {
        name: "Expired Polaroid",
        prompt:
          'Apply expired Polaroid treatment: Fade colors toward cyan and magenta, add chemical spread marks at frame edges, simulate developing emulsion streaks at 6% opacity, warm the overall cast to mimic aging chemicals, add thick white Polaroid frame with slightly uneven bottom, reduce contrast for the soft look of instant film, and finish with thumbprint smudge texture at 4% opacity for handled authenticity.',
      },
      {
        name: "Super-8 Home Movie",
        prompt:
          'Apply Super-8 home movie treatment: Add coarse grain with color channel misalignment, simulate frame-line jitter and gate weave at 2px, reduce saturation by 20% for the faded home-movie look, add warm orange light leak from top corner, apply slight overexposure bloom on highlights, include rounded-corner crop mask, and finish with projector flicker effect at 3% intensity for motion-still hybrid nostalgia.',
      },
      {
        name: "Newsprint Noir",
        prompt:
          'Apply newsprint noir treatment: Convert to high-contrast black and white with crushed blacks, add halftone dot pattern overlay at 10% opacity, simulate ink bleed on edges at 5%, add yellowed paper texture with subtle creases, reduce midtone detail for the limited dynamic range of old press photos, apply slight blur for cheap lens authenticity, and finish with press-caption border in typewriter font at the bottom.',
      },
    ],
  },
  {
    slug: "cyberpunk-neon-rsp-prompt",
    title: "Cyberpunk Neon RSP Prompt | Trending Futuristic Edit",
    metaDescription:
      "Try the trending cyberpunk neon RSP prompt. Add glowing signs, rain effects, and futuristic color grading to night photos instantly.",
    keywords: [
      "cyberpunk photo editing prompt",
      "neon photo ai prompt",
      "futuristic photo editing ai",
      "cyberpunk color grading",
      "neon glow photo effect",
    ],
    h1: "Cyberpunk Neon RSP Prompt: Futuristic Photo Transformation",
    previewImage: "/rsp/previews/cyberpunk-neon-rsp-prompt.jpg",
    promptText: `Cyberpunk neon RSP prompt for futuristic urban photo transformations:

"Apply cyberpunk neon treatment: Retouch with high-contrast skin — sharpen jawline, add subtle sweat/grease highlights for gritty realism. Style with neon color palette — magenta highlights at RGB(255,0,128), cyan shadows at RGB(0,255,255), electric blue rim light from behind subject, add holographic sign reflections on wet surfaces, boost saturation to +30 for neon pop, crush blacks for cinematic contrast. Polish with rain particle overlay at 20% opacity, add lens flare from neon signs, simulate CRT scanlines at 5% opacity on background only, add chromatic aberration at 4px for glitch aesthetic, include fog/mist with colored light scattering, and finish with Japanese/Chinese character decals on walls for authentic cyberpunk atmosphere."

Ideal for night city photography, portrait sessions with neon backgrounds, and synthwave aesthetic content.`,
    howToUse: [
      "Copy the cyberpunk neon prompt using the Copy Prompt button.",
      "Start with night photography or photos with artificial light sources — natural daylight photos do not work well.",
      "For AI transformation: use image-to-image with 0.6 strength and add 'cyberpunk city background' to the prompt.",
      "For manual editing: create multiple layers for each neon color, set blend mode to Screen or Color Dodge.",
      "Add rain using overlay textures or Photoshop's Noise filter with Motion Blur at 45 degrees.",
      "Export with high contrast and saturation for maximum impact on social media.",
    ],
    faqs: [
      {
        question: "What makes a photo look cyberpunk?",
        answer:
          "Cyberpunk aesthetics combine neon lighting (magenta and cyan), high contrast, wet reflective surfaces, futuristic elements, and urban grit. The style draws from Blade Runner, Akira, and modern neon-lit city photography from Tokyo and Hong Kong.",
      },
      {
        question: "Can I create cyberpunk edits from daytime photos?",
        answer:
          "It is difficult but possible. First darken the image significantly, replace the sky with a night cityscape, then add neon elements. It is much easier to start with night photography where the lighting direction and atmosphere already match.",
      },
      {
        question: "What is the most effective software for cyberpunk photo editing?",
        answer:
          "Photoshop offers the most control for manual cyberpunk editing. For AI generation, Midjourney and Stable Diffusion excel at creating cyberpunk scenes from scratch. DaVinci Resolve is excellent for color grading video content.",
      },
      {
        question: "How do I create realistic neon glow effects?",
        answer:
          "Realistic neon glow has three components: a bright core (white), a colored middle layer (Screen blend mode), and a wide soft outer glow (Color Dodge blend mode). Add subtle reflections on nearby surfaces for realism.",
      },
      {
        question: "Is cyberpunk editing only for city photos?",
        answer:
          "No. Cyberpunk aesthetics can be applied to portraits (neon-lit studio shots), product photography (futuristic tech), and even landscapes (distant megacity on horizon). The key is the color palette and lighting mood, not the subject.",
      },
      {
        question: "How do I stop neon colors from clipping and losing detail?",
        answer:
          "Neon magentas and cyans easily exceed sRGB gamut limits. Work in a wide-gamut color space like ProPhoto RGB, reduce saturation until detail returns in the brightest tubes, and add a soft white core to each neon element so the color sits in the mid-glow rather than the blown highlight.",
      },
      {
        question: "Why does my cyberpunk edit look like a video game screenshot?",
        answer:
          "Overly clean surfaces, perfectly symmetrical neon placement, and uniform rain patterns create a synthetic feel. Add grime, water streaks, uneven signage flicker, and asymmetrical color distribution. Real cities are chaotic; embrace the mess.",
      },
    ],
    whenWorksBest: [
      "Night cityscapes with existing artificial light sources",
      "Portrait sessions in front of neon signs or LED installations",
      "Synthwave, vaporwave, and futuristic music promotion artwork",
      "Rainy street photography where wet surfaces reflect colored light",
    ],
    commonMistakes: [
      "Starting with daylight photos that fight the night-dominant color palette",
      "Adding neon glow without corresponding reflections on wet ground",
      "Over-saturating until skin turns magenta or cyan",
      "Using perfectly straight rain streaks that look digitally generated",
    ],
    lightingTips: [
      "Shoot after sunset during blue hour so the sky retains depth rather than going pure black",
      "Include practical light sources—neon signs, storefront LEDs, vehicle headlights",
      "Use a polarizing filter to control reflections on wet pavement",
      "Underexpose slightly to preserve highlight detail in the brightest signage",
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "ai-editor-rsp-editing",
      "aesthetic-rsp-prompt",
      "ghost-girlfriend-ai-edit",
    ],
    wordCount: 890,
    whenToUse:
      "The cyberpunk neon RSP prompt is built for night owls and futurists. It transforms urban photography from Tokyo alleyways, Hong Kong street markets, and downtown Los Angeles into Blade Runner-inspired visuals. Synthwave musicians, tech reviewers, and sci-fi authors use this prompt for album art, channel banners, and book covers that need immediate futuristic recognition. It also works for portrait photographers with access to neon studios or LED installations, and for gamers streaming cyberpunk titles who want their thumbnails to match the in-game aesthetic. If your content lives in the intersection of technology and rebellion, this prompt is your visual signature.",
    bestResultsTips: [
      "Start with night photography; daylight sources rarely shift convincingly into neon palettes.",
      "Include wet pavement or glass to catch colored reflections—neon without bounce looks flat.",
      "Use models with strong jawlines and sharp features; the high-contrast treatment rewards structure.",
      "Work in wide-gamut color spaces to prevent neon highlights from clipping.",
      "Add environmental storytelling: signage, cables, steam vents, and graffiti ground the fantasy in reality.",
      "Keep skin in a separate masked layer so magenta/cyan grading does not turn faces alien.",
      "Export at high saturation for OLED screens where neon colors pop most dramatically.",
    ],
    beforeYouGenerate:
      "This prompt is for creators operating in sci-fi, electronic music, gaming, and urban nightlife spaces. It is not suitable for family portraits, wedding photography, or corporate branding where neon magenta skin would confuse the message. If your source image lacks artificial light sources or was shot in broad daylight, you will spend more time forcing the aesthetic than enjoying it—start with night material.",
    promptVariations: [
      {
        name: "Corporate Dystopia",
        prompt:
          'Apply corporate dystopia treatment: Desaturate all colors except cold blue and sterile white, add holographic advertisement projections on building faces, simulate surveillance camera UI overlays with timestamp and recording dots, apply clinical contrast with crushed blacks, add rain with oil-slick rainbow reflections, include faceless crowd silhouettes, and finish with barcode tattoos and AR contact-lens glow effects on subjects.',
      },
      {
        name: "Synthwave Sunset",
        prompt:
          'Apply synthwave sunset treatment: Replace sky with gradient grid horizon in magenta and cyan, add retro sun with horizontal line artifact, apply chrome reflections on vehicles, boost pink and teal separation, add palm tree silhouettes, simulate VHS tracking error at 4% opacity, apply heavy lens flare in warm pink, and finish with 1980s-style chrome typography overlay.',
      },
      {
        name: "Underground Hacker Den",
        prompt:
          'Apply underground hacker den treatment: Green phosphor CRT glow on faces, add terminal code reflections in glasses, simulate server-rack LED bokeh in background, apply heavy contrast with deep blacks, add cigarette smoke haze in cold green light, include cluttered desk with glowing monitors, apply chromatic aberration at 6px for cheap-screen realism, and finish with fisheye lens distortion for cramped-space paranoia.',
      },
    ],
  },
  {
    slug: "fantasy-portrait-rsp-prompt",
    title: "Fantasy Portrait RSP Prompt | Trending Magical Edit",
    metaDescription:
      "Use the trending fantasy portrait RSP prompt. Add glowing elements, ethereal atmospheres, and mystical color grading to portraits in seconds.",
    keywords: [
      "fantasy portrait ai prompt",
      "magical photo editing prompt",
      "ethereal portrait ai",
      "fantasy character photo edit",
      "mystical photo transformation",
    ],
    h1: "Fantasy Portrait RSP Prompt: Create Magical Character Art",
    previewImage: "/rsp/previews/fantasy-portrait-rsp-prompt.jpg",
    promptText: `Fantasy portrait RSP prompt for creating magical, otherworldly character images:

"Apply fantasy portrait transformation: Retouch with porcelain-perfect skin, add subtle pointed ear tips, enhance eye color to unnatural vibrant shade (emerald, violet, or amber), add soft magical glow emanating from hands or eyes. Style with ethereal color grading — soft lavender and moonlight blue palette, add floating particles of light (will-o-wisps), create volumetric god rays from above, add mist/fog at ground level in soft white. Polish with magical element overlays — subtle rune tattoos on skin that glow faintly, crown of woven flowers or crystals, flowing fabric that defies gravity, sparkle/bokeh effects around light sources, and finish with soft painterly brushstroke texture for storybook illustration feel."

Perfect for D&D character portraits, fantasy book covers, cosplay photography enhancement, and magical social media content.`,
    howToUse: [
      "Copy the fantasy portrait RSP prompt to your clipboard.",
      "Use a well-lit portrait with clear facial features — fantasy elements need a strong base to build upon.",
      "For AI generation: combine your photo with the prompt in Midjourney or Stable Diffusion for transformation.",
      "For manual editing: use Photoshop to paint in magical elements on separate layers with Screen blend mode.",
      "Create custom brushes for magical particles — scattered dots with outer glow work perfectly.",
      "Adjust the color palette based on your character type: warm golds for paladins, cool blues for mages, deep greens for druids.",
    ],
    faqs: [
      {
        question: "What is fantasy portrait editing?",
        answer:
          "Fantasy portrait editing transforms regular portraits into magical character art by adding ethereal elements, unnatural colors, glowing effects, and mystical atmospheres. It bridges photography and digital painting for immersive character visuals.",
      },
      {
        question: "Can I use fantasy prompts for cosplay photos?",
        answer:
          "Absolutely. Cosplay photography is one of the most effective applications for fantasy RSP prompts. The costume provides a foundation, and the prompt adds magical effects that would be impossible or expensive to achieve practically.",
      },
      {
        question: "How do I make magical glows look realistic?",
        answer:
          "Realistic magical glows illuminate surrounding surfaces. Add subtle colored light on the face near the glowing element, create soft shadows opposite the light source, and ensure the glow color matches the overall palette. Avoid pure white glows — tint them.",
      },
      {
        question: "Which fantasy races work best with photo editing?",
        answer:
          "Elves (pointed ears, ethereal beauty), fairies (small size, wings), and mystical humans (glowing eyes, rune tattoos) translate best. More extreme races like orcs or dwarves require heavier manipulation and may look less natural.",
      },
      {
        question: "Can I print fantasy-edited portraits?",
        answer:
          "Yes. Export at 300 DPI with CMYK color profile for professional printing. The painterly texture in the prompt actually helps hide minor imperfections that would show in photorealistic prints. Canvas prints work especially well for fantasy art.",
      },
      {
        question: "How do I choose the right magical color palette for my character class?",
        answer:
          "Match the glow and atmosphere to the character’s energy source: warm golds and whites for divine paladins and clerics, cool blues and purples for arcane mages, deep greens and earth tones for druids and rangers, and crimson blacks for warlocks and necromancers. Consistency between costume, glow, and background sells the fantasy.",
      },
      {
        question: "Why do my fantasy edits look like a filter rather than a painted illustration?",
        answer:
          "Filters apply global adjustments; painted illustrations have localized depth. Add atmospheric perspective—darker, cooler backgrounds with softer focus. Paint light interaction manually: the magical glow should cast colored reflections on skin, fabric, and nearby objects. Use textured brushes for the final overlay to break photographic smoothness.",
      },
    ],
    whenWorksBest: [
      "Well-lit portraits with clear facial structure and visible eyes",
      "Cosplay photography where costumes provide a fantasy foundation",
      "Book cover and promotional art for fantasy authors and game designers",
      "Social media content targeting TTRPG and fantasy fiction communities",
    ],
    commonMistakes: [
      "Adding glow without corresponding colored light on surrounding skin and fabric",
      "Using pure white magical effects that look like flash photography rather than enchantment",
      "Over-smoothing skin until the subject looks plastic rather than porcelain",
      "Ignoring the character’s logical light source—glows need direction and shadow",
    ],
    lightingTips: [
      "Use soft, even lighting to preserve facial detail for later magical enhancement",
      "Backlight or side-light the subject so added glow effects have a natural integration point",
      "Avoid busy backgrounds; mist and god rays need clean space to read properly",
      "Shoot at a slight upward angle for heroic framing that suits fantasy archetypes",
    ],
    relatedSlugs: [
      "ghost-girlfriend-ai-edit",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "chibi-ai-edit-prompt",
    ],
    wordCount: 880,
    whenToUse:
      "The fantasy portrait RSP prompt is essential for tabletop role-playing game players who want visual representations of their characters, cosplayers seeking to add impossible magical effects, and authors needing cover art that feels painted rather than photographed. It is also widely used by fantasy-themed streamers, tarot readers, and witchcraft-content creators who want an ethereal, storybook presence across their branding. If your project lives in worlds of magic, myth, or medieval imagination, this prompt transforms a standard portrait into a believable inhabitant of that realm.",
    bestResultsTips: [
      "Start with a high-resolution portrait where eyes and skin are clearly visible.",
      "Match the magical palette to the character’s class or energy source for narrative consistency.",
      "Use separate layers for glow effects so you can control opacity and color independently.",
      "Add environmental interaction—colored light should reflect on skin, fabric, and props.",
      "Keep skin retouching subtle; porcelain does not mean plastic.",
      "Use painterly texture overlays at low opacity to bridge photography and illustration.",
      "Export at 300 DPI if you plan to print posters, book covers, or play mats.",
    ],
    beforeYouGenerate:
      "This prompt is designed for fantasy enthusiasts, cosplayers, authors, and game artists who want their portraits to feel like they belong in a spellbook or RPG manual. It is not appropriate for corporate profiles, medical documentation, or journalistic work where accuracy and neutrality are required. If your source photo is underexposed or has heavy facial shadows, the magical glows may look pasted on rather than integrated.",
    promptVariations: [
      {
        name: "Fae Court Noble",
        prompt:
          'Apply fae court noble treatment: Add iridescent butterfly wings with translucent vein detail, enhance eyes to opalescent silver with vertical pupils, apply bioluminescent freckles across cheeks and shoulders, style with twilight violet and moss-green palette, add floating pollen and spore particles, weave flower crown with glowing stamens, apply soft dewdrop skin highlights, and finish with enchanted forest background bokeh in emerald and gold.',
      },
      {
        name: "Dark Sorcerer",
        prompt:
          'Apply dark sorcerer treatment: Deepen eye sockets with shadow and add ember-glow pupils, apply cracked obsidian skin texture on hands and forearms, style with deep crimson and smoke-black palette, add swirling ash and ember particle effects, create shadow tendrils rising from ground, apply dramatic rim lighting in blood red, add torn dark cloak with inner lining of spell-rune fabric, and finish with storm-cloud background and lightning flash highlights.',
      },
      {
        name: "Celestial Guardian",
        prompt:
          'Apply celestial guardian treatment: Add halo of geometric light fragments behind head, enhance eyes to radiant gold with starburst pupils, apply constellation tattoo patterns on arms and neck that glow softly, style with deep indigo and soft white palette, add falling stardust particles and distant nebula haze, create armor fragments of solidified starlight, apply gentle volumetric light from above like a beam from heaven, and finish with infinite sky background transitioning from twilight to cosmos.',
      },
    ],
  },
  {
    slug: "moody-dark-rsp-prompt",
    title: "Moody Dark RSP Prompt | Trending Dramatic Edit 2026",
    metaDescription:
      "Try the trending moody dark RSP prompt. Create dramatic, low-light edits with deep shadows and emotional atmosphere for any portrait.",
    keywords: [
      "moody dark photo prompt",
      "dramatic photo editing ai",
      "low light photo editing",
      "dark moody portrait prompt",
      "emotional photo editing ai",
    ],
    h1: "Moody Dark RSP Prompt: Dramatic Low-Light Photo Editing",
    previewImage: "/rsp/previews/moody-dark-rsp-prompt.jpg",
    promptText: `Moody dark RSP prompt for dramatic, emotionally charged photo editing:

"Apply moody dark treatment: Retouch with selective lighting — deepen shadows under cheekbones for dramatic contour, darken eye sockets slightly for intensity, preserve skin texture while reducing overall brightness. Style with low-key color grading — deep navy and charcoal base, single warm accent light from one side only (Rembrandt lighting pattern), desaturate all colors except the accent light warmth, add film noir contrast curve with crushed blacks. Polish with subtle haze in shadow areas for atmosphere, add single catchlight in eyes for life, apply slight grain for documentary feel, darken edges with heavy vignette at -20, and finish with matte black border for gallery presentation aesthetic."

Ideal for portrait photography, emotional storytelling, musician promo shots, and fine art photography projects.`,
    howToUse: [
      "Copy the moody dark RSP prompt using the Copy Prompt button.",
      "Shoot or select photos with strong directional lighting — the moody look depends on light and shadow interplay.",
      "For AI tools: use image-to-image with 0.5 strength to preserve composition while darkening the mood.",
      "For manual editing: start by crushing blacks to pure black, then carefully lift only the accent light areas.",
      "Use gradient maps for precise color control — navy to warm amber creates classic moody contrast.",
      "Export with slightly reduced brightness for mobile screens, which tend to boost shadows automatically.",
    ],
    faqs: [
      {
        question: "What is moody dark photography?",
        answer:
          "Moody dark photography emphasizes shadows, low light, and emotional atmosphere over bright, cheerful presentation. It uses high contrast, desaturated colors, and dramatic lighting to create introspective, powerful images.",
      },
      {
        question: "How do I shoot photos for moody dark editing?",
        answer:
          "Use single light sources (window light, street lamp, or one studio light), underexpose by 1-2 stops, and shoot against dark backgrounds. The editing prompt enhances what you capture — it cannot create light that was not there.",
      },
      {
        question: "Why do my moody edits look muddy instead of dramatic?",
        answer:
          "Muddy shadows happen when you simply darken everything. True moody editing preserves shadow detail while creating contrast. Use the S-curve carefully — lift the very bottom slightly (film toe) while crushing the mid-shadows.",
      },
      {
        question: "What subjects work ideal for moody dark treatment?",
        answer:
          "Portraits with strong features, musicians and artists, urban exploration photography, solitary figures in landscapes, and architectural details in shadow. Avoid group shots or busy scenes where darkness obscures important elements.",
      },
      {
        question: "Can moody dark editing work for wedding photos?",
        answer:
          "Selectively, yes. Couple portraits and detail shots (rings, flowers) can look stunning with moody treatment. However, keep ceremony and reception photos bright and cheerful. Use moody editing for the artistic album spreads only.",
      },
      {
        question: "How do I keep shadow detail without losing the dark mood?",
        answer:
          "Use the film toe technique: lift the very bottom of the tone curve slightly so the darkest shadows become dark gray rather than pure black. This reveals subtle texture in hair and fabric while maintaining the overall low-key atmosphere. The key is restraint—lift only the bottom 5% of tones.",
      },
      {
        question: "Why does my moody portrait look like a silhouette instead of a dramatic face?",
        answer:
          "Silhouettes happen when the subject is underexposed relative to the background. In moody editing, you need a single, controlled accent light on the face—usually from one side. If the light is too dim or too far behind the subject, facial features disappear into shadow. Position your light source at 45–90 degrees to the camera axis.",
      },
    ],
    whenWorksBest: [
      "Portraits with strong bone structure and expressive eyes",
      "Musician and artist promo shots that need emotional gravity",
      "Fine art photography projects for gallery or print exhibition",
      "Solo figure compositions where negative space reinforces isolation",
    ],
    commonMistakes: [
      "Darkening every shadow to pure black, destroying texture and depth",
      "Using multiple light sources that flatten the intended dramatic contrast",
      "Applying moody treatment to group shots where faces disappear into shadow",
      "Exporting too dark for mobile screens that crush shadows further",
    ],
    lightingTips: [
      "Use a single light source at 45–90 degrees for Rembrandt or split lighting patterns",
      "Underexpose by 1–2 stops in camera to protect highlights and deepen shadows",
      "Shoot against dark, non-reflective backgrounds to prevent fill light from killing contrast",
      "Add a small reflector or white card only if the shadow side loses all facial detail",
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "ghost-girlfriend-ai-edit",
      "vintage-film-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 870,
    whenToUse:
      "The moody dark RSP prompt is a creator favorite for musicians, actors, and fine-art photographers who want their portraits to carry emotional weight. It is widely used for album covers where shadows suggest depth and mystery, for actor headshots targeting dramatic roles, and for gallery prints that rely on chiaroscuro contrast. Writers and poets also use this aesthetic for promotional material when they want introspection rather than cheerfulness. If your brand or project deals with themes of solitude, resilience, or raw human emotion, this prompt provides the visual language to match.",
    bestResultsTips: [
      "Start with RAW files shot under single-source lighting; the prompt cannot invent light direction.",
      "Choose subjects with strong facial structure—shadows emphasize cheekbones and jawlines.",
      "Preserve one catchlight in each eye; total darkness in the eyes looks lifeless.",
      "Use gradient maps for color control rather than global saturation adjustments.",
      "Lift only the bottom 5% of the tone curve to reveal subtle shadow texture.",
      "Export two versions: one at native brightness for desktop, one slightly brighter for mobile.",
      "Add a matte black border for gallery presentation—it frames the darkness elegantly.",
    ],
    beforeYouGenerate:
      "This prompt is for artists, musicians, actors, and storytellers who want their images to feel like a moment before something happens. It is not suitable for family portraits, children’s photography, or corporate branding where warmth and openness are expected. If your source image was shot with flat, even lighting or a bright background, you will struggle to achieve the deep, controlled shadows this prompt is designed to enhance.",
    promptVariations: [
      {
        name: "Noir Detective",
        prompt:
          'Apply noir detective treatment: Heavy black-and-white conversion with crushed blacks, add venetian blind shadow stripes across face, simulate cigarette smoke haze in single shaft of light, apply high-contrast S-curve with no midtone gray, add rain-streaked window reflections, include desk-lamp single-source lighting from below eye level, apply heavy grain for 1940s newsreel feel, and finish with typewriter-caption border and case-file stamp overlay.',
      },
      {
        name: "Gothic Romance",
        prompt:
          'Apply gothic romance treatment: Desaturate to muted plum and charcoal palette, add candlelight single-source warmth from below, enhance pale skin with subtle blue undertone, apply heavy vignette with ornate baroque border, add mist or fog at ground level, soften focus around edges for dreamlike decay, include wilting rose or raven feather props, and finish with cracked oil-painting texture overlay for aged canvas feel.',
      },
      {
        name: "Industrial Isolation",
        prompt:
          'Apply industrial isolation treatment: Cool steel-gray and rust-orange palette, add single overhead bare-bulb light with harsh falloff, emphasize grease and dirt texture on skin and clothing, apply geometric shadow patterns from chain-link or rebar, add distant factory smoke and steam, crush blacks while preserving highlight detail on metal surfaces, apply documentary grain, and finish with institutional identification numbers stamped at frame edge.',
      },
    ],
  },
{
    slug: "anime-style-rsp-prompt",
    title: "Anime Style RSP Prompt | Trending Photo-to-Anime 2026",
    metaDescription:
      "Transform photos into anime art with this trending RSP prompt. Create stunning portraits, avatars, and fan art with authentic Japanese animation aesthetics.",
    keywords: [
      "anime style photo prompt",
      "photo to anime ai prompt",
      "anime portrait editing",
      "anime transformation ai",
      "anime filter photo prompt",
    ],
    h1: "Anime Style RSP Prompt: Transform Photos Into Anime Art",
    previewImage: "/rsp/previews/anime-style-rsp-prompt.jpg",
    promptText: `Anime style RSP prompt for converting photographs into Japanese animation aesthetics:

"Transform photo into anime style: Retouch with anime skin — smooth but not plastic, add subtle blush gradients on cheeks, enlarge eyes slightly with detailed irises featuring starburst highlights, simplify nose to single line or small dot, reshape lips into anime-style curves. Style with anime color grading — boost saturation selectively on hair and eyes, apply cel-shading with 2-3 distinct shadow levels (no smooth gradients), add anime-style hair with chunky strands and dramatic highlights, simplify clothing into clean shapes with minimal texture. Polish with anime background — soft bokeh with light orbs, add speed lines or cherry blossom petals for motion/atmosphere, apply slight chromatic aberration for retro anime feel, and finish with clean line art overlay at 15% opacity for hand-drawn authenticity."

Works with Midjourney Niji, Stable Diffusion anime models, and specialized photo-to-anime apps.`,
    howToUse: [
      "Copy the anime style RSP prompt to your clipboard.",
      "Choose a clear, well-lit portrait facing the camera — anime transformation works best with visible facial features.",
      "In Midjourney: upload your photo and add '--niji 6 --style expressive' for best anime conversion.",
      "In Stable Diffusion: use ControlNet with lineart or OpenPose to preserve the original pose and composition.",
      "For apps like Meitu or Remini: the prompt helps you understand what adjustments to make after automatic conversion.",
      "Fine-tune eye size and hair color to match your preferred anime style — shonen, shojo, or seinen aesthetics differ significantly.",
    ],
    faqs: [
      {
        question: "What is the difference between anime and chibi styles?",
        answer:
          "Anime style maintains realistic body proportions (7-8 heads tall) with stylized features. Chibi style shrinks the body to 2-3 heads tall with oversized heads for cuteness. Anime is dramatic and detailed; chibi is cute and simplified.",
      },
      {
        question: "Can AI accurately convert any photo to anime?",
        answer:
          "AI does well with front-facing portraits and clear features. Side profiles, group shots, and photos with complex backgrounds are harder. The conversion quality depends on the AI model — Niji 6 currently leads in accuracy.",
      },
      {
        question: "How do I preserve my likeness in anime conversion?",
        answer:
          "Include specific identifying features in the prompt: 'wearing round glasses,' 'short black hair with undercut,' 'freckles on nose.' Use image-to-image with moderate strength (0.5-0.6) to balance transformation with preservation.",
      },
      {
        question: "Which anime art style should I choose?",
        answer:
          "Shonen styles (Dragon Ball, Naruto) feature sharp lines and dramatic shadows. Shojo styles (Sailor Moon, Fruits Basket) use soft colors and sparkles. Seinen styles (Ghost in the Shell, Berserk) are darker and more realistic. Match the style to your personality.",
      },
      {
        question: "Can I use anime edits for commercial purposes?",
        answer:
          "This depends on your AI platform's terms and whether the result resembles existing copyrighted characters. Original anime-style portraits of real people are generally safe. Avoid copying specific anime art styles too closely to prevent copyright issues.",
      },
    ],
    relatedSlugs: [
      "chibi-ai-edit-prompt",
      "fantasy-portrait-rsp-prompt",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
    ],
    wordCount: 900,
    whenToUse:
      "Use the anime style RSP prompt when you want to turn personal portraits into illustrated characters for social media avatars, streaming channel branding, or fan-art communities. It is widely used by creators who want a consistent animated persona across platforms like Twitch, YouTube, and Discord. Cosplayers often apply it to showcase their costumes in a stylized format that matches the source material. Digital artists use it as a base for commissions or character-design sheets. It also works well for couples who want matching anime-style profile pictures or for memorializing pets in a beloved animation aesthetic. If you are building a visual novel, indie game, or webcomic, this prompt can help generate reference art quickly from actor photos. The key is starting with a clear, well-lit portrait so the AI can read facial symmetry and produce a recognizable, expressive result.",
    bestResultsTips: [
      "Start with a high-resolution front-facing portrait; anime models read facial symmetry better at 1024px or higher.",
      "Use soft, even lighting without heavy shadows so cel-shading layers do not compete with real-world contrast.",
      "Avoid busy patterns in clothing; solid colors and simple shapes translate cleanly into anime linework.",
      "Keep hair visible and unobstructed; hats and heavy bangs hide features the AI uses for likeness.",
      "Shoot against a clean background so the model can replace it with thematic bokeh or speed lines.",
      "If you wear glasses, make sure they are not reflective; glare confuses eye-detail generation.",
      "Supply multiple angles in a grid prompt for more consistent character-sheet output.",
    ],
    beforeYouGenerate:
      "This prompt is ideal for individuals, cosplayers, streamers, and indie creators who want a recognizable animated avatar. It is not intended for documentary photography, legal identification, or scientific imaging where photorealism is required. Avoid using it on group photos with more than two people, as proportions and likeness degrade quickly. If your source image is blurry, heavily shadowed, or features extreme side profiles, the conversion will likely disappoint. For commercial merchandise, verify your AI platform's licensing terms first. When in doubt, test with a single portrait before committing to a full project.",
    promptVariations: [
      {
        name: "Retro 90s Anime Portrait",
        prompt:
          "Transform photo into 1990s anime style: Apply classic cel-shading with limited 256-color palette, add thick black linework with occasional line boil, enlarge eyes with detailed hand-painted iris reflections, add subtle film grain and chromatic aberration for VHS authenticity, style hair into chunky geometric strands with hard highlights, use painted watercolor backgrounds with soft bokeh orbs, and finish with slight CRT scanline overlay at 6% opacity for nostalgic broadcast feel.",
      },
      {
        name: "Modern Shojo Sparkle Edit",
        prompt:
          "Transform photo into modern shojo anime style: Apply soft pastel color grading with pink and lavender tones, add large luminous eyes with starburst catchlights and floating heart reflections, add blush gradients across cheeks and nose bridge, style hair with flowing strands and soft ribbon accessories, include floating cherry blossom petals and lens flare sparkles, use dreamy gradient background with bokeh hearts, and finish with soft glow overlay at 20% for romantic atmosphere.",
      },
      {
        name: "Dark Seinen Cinematic Anime",
        prompt:
          "Transform photo into dark seinen anime style: Apply muted desaturated color palette with deep shadows, add sharp angular facial features with intense narrow eyes, style hair with realistic wind-swept strands and dramatic rim lighting, use heavy cinematic contrast with crushed blacks, add urban night background with neon sign reflections, include subtle rain particle overlay, and finish with film-grain texture and anamorphic lens flare for mature anime aesthetic.",
      },
    ],
  },
  {
    slug: "glow-up-rsp-prompt",
    title: "Glow Up RSP Prompt | Widely Used Photo Makeover 2026",
    metaDescription:
      "Try the trending glow up RSP prompt. Enhance portraits with natural retouching, warm color grading, and polished finishing for social-ready results.",
    keywords: [
      "glow up photo prompt",
      "photo transformation ai prompt",
      "glow up editing prompt",
      "beauty photo editing ai",
      "instant photo makeover prompt",
    ],
    h1: "Glow Up RSP Prompt: Instant Photo Transformation Guide",
    previewImage: "/rsp/previews/glow-up-rsp-prompt.jpg",
    promptText: `Glow up RSP prompt for attention-worthy photo transformations:

"Apply glow up transformation: Retouch with professional skin smoothing — remove blemishes, even skin tone, reduce under-eye circles, whiten teeth naturally, define jawline subtly, add healthy skin glow (not oily shine). Style with vibrant color grading — boost overall vibrance by +20, warm skin tones slightly, add golden hour light effect even on indoor photos, enhance eye color and clarity, add subtle hair shine and definition. Polish with background blur (bokeh) if not already present, add catchlights to eyes for sparkle, apply subtle sharpening on facial features, add soft vignette to draw focus to face, and finish with 'your skin but better' natural finish — never overprocessed or artificial looking."

The key to a successful glow up is enhancement, not replacement — you should still look like yourself.`,
    howToUse: [
      "Copy the glow up RSP prompt using the Copy Prompt button.",
      "Select a photo where you are clearly visible — glow up editing cannot work with blurry or distant shots.",
      "For AI beauty editors: paste the prompt and let the AI apply the full enhancement workflow.",
      "For manual editing in Facetune or Photoshop: follow each RSP step in order for systematic improvement.",
      "Compare before and after by flipping between versions — if you do not recognize yourself, dial back the retouching.",
      "Export at high resolution for profile pictures, dating apps, or professional headshots.",
    ],
    faqs: [
      {
        question: "What makes a good glow up edit?",
        answer:
          "A good glow up enhances your natural features without making you unrecognizable. It improves skin texture, lighting, and color while preserving your unique characteristics. The goal is 'best version of you,' not 'different person.'",
      },
      {
        question: "How much retouching is too much?",
        answer:
          "If your mother would not recognize you, it is too much. Good rules: keep skin pore texture visible, do not change bone structure, maintain natural eye shape and size, and preserve your smile's unique character. Enhancement should be subtle.",
      },
      {
        question: "Can guys use glow up prompts too?",
        answer:
          "Absolutely. Glow up editing works for all genders. For masculine presentations, reduce skin smoothing intensity, keep facial hair texture, and use cooler color tones. The RSP framework adapts to any style preference.",
      },
      {
        question: "What apps are ideal for glow up editing?",
        answer:
          "Facetune and Remini are popular for mobile glow ups. Photoshop offers the most control. AI tools like Midjourney can transform photos entirely. For quick results, try free alternatives like BeautyPlus or YouCam Makeup.",
      },
      {
        question: "How do I glow up a group photo?",
        answer:
          "Group photos are challenging because each person needs different adjustments. Use AI tools that detect multiple faces, or crop to individual portraits first, apply glow up to each, then composite back together. Ensure consistent lighting across all edited faces.",
      },
    ],
    relatedSlugs: [
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
    ],
    wordCount: 860,
    whenToUse:
      "The glow up RSP prompt is designed for anyone who wants to present a polished, confident version of themselves online. It is widely used for dating-app profile photos, LinkedIn headshots, influencer content, and personal-brand imagery. Use it when your lighting was flat, your skin was breaking out, or the camera caught you at an off moment. It is also popular among content creators who need a consistent, radiant look across thumbnails and banners. Event photographers apply it to client galleries so subjects feel their best. If you are launching a personal website, podcast cover, or author bio photo, this prompt delivers professional warmth without clinical overprocessing. The result should feel like you on your best day, not a stranger.",
    bestResultsTips: [
      "Begin with a sharp, well-exposed portrait; glow up prompts cannot rescue motion blur or extreme underexposure.",
      "Frontal or three-quarter angles retouch more evenly than extreme profiles.",
      "Natural daylight or soft ring-light sources produce the most believable skin enhancement.",
      "Avoid heavy makeup in the source photo if you want a fresh-faced, natural finish.",
      "Leave breathing room around the face so vignette and background blur do not crop features.",
      "Use RAW or high-quality JPEG files to preserve detail for subtle sharpening and eye brightening.",
      "If you have facial hair, mention its retention in the prompt so the AI does not smooth it away.",
    ],
    beforeYouGenerate:
      "This prompt is for personal enhancement and social presentation, not for medical documentation, forensic imaging, or identity verification. If you need an untouched photo for official paperwork, skip AI retouching entirely. It is also unsuitable for journalism or documentary work where authenticity is paramount. Overuse can create unrealistic beauty standards, so apply it mindfully and disclose edits when required by platform rules or professional ethics. Remember that the most engaging portraits still show personality, so resist the urge to smooth away every line and freckle.",
    promptVariations: [
      {
        name: "Soft Natural Glow Up",
        prompt:
          "Apply soft natural glow up transformation: Retouch with ultra-light skin smoothing preserving every pore, reduce redness and under-eye shadows only, whiten teeth by one shade, add subtle warm light to cheeks, style with true-to-life color grading keeping original tones intact, polish with minimal background blur and gentle eye brightening, and finish with matte skin texture for an untouched, no-makeup look.",
      },
      {
        name: "Golden Hour Glow Up",
        prompt:
          "Apply golden hour glow up transformation: Retouch with warm skin smoothing and sun-kissed tone enhancement, add simulated late-afternoon rim light from behind, style with amber and honey color grading boosting warmth by +25, enhance eye color with gold reflections, add hair shine catching sunset light, polish with soft lens flare and light leak artifacts, and finish with dreamy haze at 10% for vacation-photo atmosphere.",
      },
      {
        name: "Studio Headshot Glow Up",
        prompt:
          "Apply studio headshot glow up transformation: Retouch with professional skin smoothing suitable for corporate profiles, even out skin tone under mixed office lighting, define jawline and cheekbones subtly, style with neutral color grading and accurate white balance, add crisp catchlights in both eyes, polish with clean background replacement or subtle blur, apply micro-contrast for sharp professional finish, and export at 300 DPI for print-ready business cards and resumes.",
      },
    ],
  },
  {
    slug: "summer-vibes-rsp-prompt",
    title: "Summer Vibes RSP Prompt | Trending Sunny Edits 2026",
    metaDescription:
      "Get the trending summer vibes RSP prompt. Add warm sunlight, beach tones, and vacation energy to photos for instant sunny aesthetics.",
    keywords: [
      "summer vibes photo prompt",
      "sunny photo editing ai",
      "beach photo editing prompt",
      "vacation photo ai prompt",
      "warm photo editing ai",
    ],
    h1: "Summer Vibes RSP Prompt: Bright, Sunny Photo Transformation",
    previewImage: "/rsp/previews/summer-vibes-rsp-prompt.jpg",
    promptText: `Summer vibes RSP prompt for warm, vacation-worthy photo editing:

"Apply summer vibes treatment: Retouch with sun-kissed skin — add subtle tan warmth, enhance natural freckles if present, add healthy glow to shoulders and collarbones, soften harsh midday shadows. Style with warm golden color grading — boost temperature to +15, tint slightly toward magenta for sunset warmth, increase vibrance on blues (sky/ocean) and greens (palm trees), add golden hour light rays from top corner, enhance cloud definition for dramatic sky. Polish with lens flare from sun position, add water droplet or sand texture overlay at 8%, boost overall exposure by +0.5 for airy brightness, add subtle haze for humid summer atmosphere, and finish with vintage vacation filter feel — like a disposable camera memory."

Perfect for travel photos, beach content, poolside shots, and summer memory preservation.`,
    howToUse: [
      "Copy the summer vibes RSP prompt to your clipboard.",
      "Select photos taken outdoors in natural light — the prompt enhances existing sunshine rather than creating it artificially.",
      "For AI editing: use as image-to-image prompt with 0.4 strength to preserve the natural summer feel.",
      "For Lightroom: start with a warm preset, then adjust temperature and tint to match the golden hour look.",
      "Add location-appropriate elements: palm tree silhouettes for tropical shots, sailboats for coastal photos.",
      "Export in bright, high-key style — summer photos should feel light and uplifting.",
    ],
    faqs: [
      {
        question: "What defines summer vibes photography?",
        answer:
          "Summer vibes photography features warm golden light, bright airy exposure, saturated blues and greens, sun-kissed skin tones, and vacation atmosphere. It evokes feelings of freedom, warmth, and outdoor adventure.",
      },
      {
        question: "Can I apply summer vibes to winter photos?",
        answer:
          "You can try, but results often look unnatural. Winter photos have different light quality and color temperature. Instead, use the prompt on indoor photos with warm lighting, or save winter shots for a cozy winter editing prompt.",
      },
      {
        question: "How do I enhance blue skies without making them fake?",
        answer:
          "Use selective color adjustments targeting cyan and blue channels. Increase luminance slightly and add subtle saturation. Avoid the 'nuclear sky' look by keeping gradients natural — real skies are lighter near the horizon.",
      },
      {
        question: "What is the most effective time to shoot for summer vibes?",
        answer:
          "Golden hour (1 hour after sunrise, 1 hour before sunset) provides the warmest, most flattering light. Midday sun is harsher but works for beach and pool shots where bright light fits the aesthetic. Overcast days need more post-processing.",
      },
      {
        question: "Can I use summer vibes for product photography?",
        answer:
          "Yes. Summer vibes work great for skincare, swimwear, beverages, and outdoor gear. The warm, bright aesthetic makes products feel inviting and lifestyle-oriented. Add water splashes or sand textures for extra seasonal relevance.",
      },
    ],
    relatedSlugs: [
      "aesthetic-rsp-prompt",
      "vintage-film-rsp-prompt",
      "glow-up-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 850,
    whenToUse:
      "Use the summer vibes RSP prompt when you want to infuse travel, beach, poolside, or outdoor lifestyle photos with nostalgic warmth and energy. It is a creator favorite for vacation recaps, tropical resort marketing, swimwear lookbooks, and festival content. Travel bloggers apply it to destination galleries so readers feel the heat and freedom of the location. Restaurants and beverage brands use it for seasonal menu launches that evoke outdoor dining. Even indoor portraits shot near large windows can benefit when you want a sun-drenched, carefree mood. If you are curating a summer-themed social-media campaign or a photo book of warm memories, this prompt delivers consistent golden atmosphere across disparate shots. The effect works best when the original image already contains sky, water, or greenery to complement the warm shift.",
    bestResultsTips: [
      "Start with images that already contain blue sky, green foliage, or water so the warm grading has cool complements.",
      "Midday beach shots work better than you think; the prompt softens harsh shadows into sun-kissed glow.",
      "Include people in swimwear or light clothing so the warm skin tones feel contextually appropriate.",
      "Avoid indoor tungsten-lit photos; the orange cast clashes with the golden-hour simulation.",
      "Add physical props like sunglasses, straw hats, or tropical drinks to reinforce the vacation narrative.",
      "Use 4:5 or 9:16 crops for social feeds so bright skies and sandy foregrounds fill the frame.",
      "Preserve some natural contrast; over-brightening can wash out the depth that makes summer feel dimensional.",
    ],
    beforeYouGenerate:
      "This prompt is built for leisure, travel, and lifestyle imagery where warmth and optimism are the goal. It is not suitable for corporate headshots, medical photography, or somber documentary work where neutral tones are expected. If your source image is a night scene or a snowy landscape, the artificial sun rays will feel out of place. Use it when the content already whispers summer, and the prompt will amplify that story rather than inventing one. Always check that skin tones remain natural under heavy warm grading so subjects do not appear orange or oversaturated.",
    promptVariations: [
      {
        name: "Tropical Beach Paradise",
        prompt:
          "Apply tropical beach paradise treatment: Retouch with sun-kissed skin and enhanced tan lines, add salt-water droplets on skin and hair, style with turquoise ocean and emerald palm color grading, boost sand warmth to golden biscuit tones, add lens flare from low sun over water, polish with seabird silhouettes and distant sailboat compositing, include subtle surf foam texture overlay, and finish with vintage postcard border and faded date stamp for nostalgic travel aesthetic.",
      },
      {
        name: "Poolside Lounge Edit",
        prompt:
          "Apply poolside lounge treatment: Retouch with healthy summer glow and subtle oil-sheen on shoulders, style with cyan water and warm terracotta tile color grading, enhance ripple reflections on pool surface, add floating inflatable props in background, polish with caustic light patterns on skin from water refraction, include condensation droplets on beverage glasses, and finish with high-key brightness and subtle haze for resort-brochure atmosphere.",
      },
      {
        name: "Road-Trip Sunset Memory",
        prompt:
          "Apply road-trip sunset memory treatment: Retouch with wind-blown hair and casual summer clothing enhancement, style with deep orange and violet sunset sky grading, add long shadows on asphalt for late-day realism, include vintage car or motorcycle detail in frame, polish with dust particle overlay catching golden backlight, add distant mountain silhouette layers, and finish with film grain and light leak for retro summer vacation feel.",
      },
    ],
  },
  {
    slug: "black-white-rsp-prompt",
    title: "Black & White RSP Prompt | Classic Monochrome 2026",
    metaDescription:
      "Master monochrome photography with this trending black and white RSP prompt. Create timeless edits with rich contrast and tonal depth.",
    keywords: [
      "black and white photo prompt",
      "monochrome editing ai",
      "bw photo editing prompt",
      "classic photo editing ai",
      "grayscale photo transformation",
    ],
    h1: "Black & White RSP Prompt: Classic Monochrome Photo Editing",
    previewImage: "/rsp/previews/black-white-rsp-prompt.jpg",
    promptText: `Black and white RSP prompt for timeless monochrome photography:

"Apply black and white transformation: Retouch with tonal awareness — smooth skin while preserving texture contrast, define eyebrows and lashes for facial structure, add subtle dodge and burn for dimensional lighting. Style with monochrome conversion — use channel mixer emphasizing red channel for glowing skin (classic cinema-inspired look), or green channel for dramatic landscape contrast, set black point to pure black but preserve shadow detail, set white point to 245 (not pure white) for film-like highlight roll-off. Polish with grain appropriate to ISO — fine grain for studio shots, heavier grain for street photography, add subtle vignette for focus, apply slight contrast boost with S-curve, and finish with matte or glossy black border depending on presentation intent."

Black and white photography is about light, shadow, and emotion — color is a distraction.`,
    howToUse: [
      "Copy the black and white RSP prompt using the Copy Prompt button.",
      "Choose photos with strong tonal range — images that look good in color often fail in black and white without contrast.",
      "For AI conversion: use the prompt with image-to-image, emphasizing 'dramatic lighting' and 'strong contrast.'",
      "For manual editing: convert to black and white last — first perfect the tonal range and contrast in color.",
      "Use the red channel for portraits (flattering skin), green channel for landscapes (maximum detail), blue channel for dramatic skies.",
      "Print on matte paper for artistic presentations or glossy for commercial work.",
    ],
    faqs: [
      {
        question: "Why convert photos to black and white?",
        answer:
          "Black and white removes color distractions, emphasizing composition, texture, light, and emotion. It creates timeless aesthetics, reduces busy backgrounds to simple tones, and adds artistic gravitas to any subject.",
      },
      {
        question: "Which photos work best in black and white?",
        answer:
          "Photos with strong directional lighting, interesting textures, emotional expressions, and simple compositions convert best. Avoid photos where color is the main subject (sunsets, colorful street art, flower gardens).",
      },
      {
        question: "Should I shoot in black and white or convert later?",
        answer:
          "Always shoot in color and convert later. RAW color files contain more tonal information. You can preview in black and white on camera, but keep the color data for maximum editing flexibility.",
      },
      {
        question: "How do I avoid flat black and white conversions?",
        answer:
          "Flat conversions lack contrast. Use the S-curve to create tonal separation. Ensure you have true blacks, bright whites, and visible midtones. Add dodge and burn to create dimensional lighting that color would normally provide.",
      },
      {
        question: "What is the difference between grayscale and black and white?",
        answer:
          "Grayscale is a technical term for images containing only luminance values (no color). Black and white is the artistic practice of creating compelling monochrome images. All black and white photos are grayscale, but not all grayscale images are artistic black and white photography.",
      },
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "moody-dark-rsp-prompt",
      "vintage-film-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 840,
    whenToUse:
      "The black and white RSP prompt excels when you want to strip away distraction and let form, texture, and emotion dominate the frame. It is widely used in portrait studios for timeless headshots, in wedding photography for classic album spreads, and in street photography for gritty documentary storytelling. Architects and interior designers convert structural shots to monochrome to emphasize line and shadow. Musicians and actors often choose black and white for press kits because it conveys seriousness and artistic depth. Use it for memorial tributes, fine-art gallery prints, or any moment where color would dilute the emotional weight of the image. The absence of hue forces the viewer to engage with light, contrast, and composition in a more intentional way.",
    bestResultsTips: [
      "Select images with visible texture—weathered skin, fabric weave, brick walls, or tree bark translate beautifully.",
      "Strong side lighting or Rembrandt patterns create the dimensional shadows that make monochrome compelling.",
      "Avoid scenes where color is the primary subject; a red rose in grayscale loses its symbolic impact.",
      "Shoot in RAW so you can push contrast and recover shadow detail during conversion.",
      "Look for leading lines and geometric shapes; without color, composition becomes the star.",
      "Keep some pure black and some near-white in every frame to anchor the tonal range.",
      "Experiment with color-channel mixing before finalizing; red-channel emphasis flatters portraits, green sharpens landscapes.",
    ],
    beforeYouGenerate:
      "This prompt is for artists, portrait photographers, and storytellers who value mood over information. It is not recommended for product listings where accurate color representation drives purchasing decisions, or for scientific and medical imaging where hue carries diagnostic meaning. If your source photo is already low contrast and flat, monochrome conversion will only emphasize that weakness. Make sure the image has structural strength before you remove the color safety net. Beginners should also avoid converting photos where the subject relies on color for identity, such as vibrant fashion editorials or botanical studies.",
    promptVariations: [
      {
        name: "High-Contrast Noir Portrait",
        prompt:
          "Apply high-contrast noir portrait transformation: Retouch with dramatic skin texture preservation and deep shadow under cheekbones, style with crushed blacks and bright specular highlights using extreme S-curve, emphasize red channel for glowing skin against pitch background, add heavy film grain at 25% for 35mm aesthetic, polish with sharp eye detail and dark vignette, and finish with matte black border for classic cinema poster presentation.",
      },
      {
        name: "Soft Ethereal Monochrome",
        prompt:
          "Apply soft ethereal monochrome transformation: Retouch with gentle skin smoothing and lifted shadow detail, style with green-channel emphasis for delicate tonal gradation, keep blacks above pure black for dreamy film-toe effect, add subtle Orton glow at 15% for misty atmosphere, polish with fine-grain texture and minimal vignette, and finish with wide white matte border for fine-art gallery print aesthetic.",
      },
      {
        name: "Documentary Street Mono",
        prompt:
          "Apply documentary street monochrome transformation: Retouch with honest texture preservation and no skin smoothing, style with blue-channel emphasis for dramatic sky and pavement contrast, add medium grain matching high-ISO film stock, preserve motion blur in moving subjects, polish with subtle haze reduction and edge sharpening on architectural details, and finish with natural lens vignette and sRGB export for immediate web publication.",
      },
    ],
  },
  {
    slug: "food-photography-rsp-prompt",
    title: "Food Photography RSP Prompt | Creator Favorite Edits 2026",
    metaDescription:
      "Make dishes irresistible with this trending food photography RSP prompt. Add warmth, texture, and appetite appeal to culinary shots instantly.",
    keywords: [
      "food photography ai prompt",
      "food photo editing prompt",
      "culinary photo ai",
      "restaurant photo editing",
      "appetizing photo prompt",
    ],
    h1: "Food Photography RSP Prompt: Make Every Dish Look Delicious",
    previewImage: "/rsp/previews/food-photography-rsp-prompt.jpg",
    promptText: `Food photography RSP prompt for mouth-watering culinary photo editing:

"Apply food photography treatment: Retouch with freshness enhancement — boost color saturation on vegetables and fruits, add moisture droplets on fresh produce, enhance steam wisps if present, clean up crumbs and spills on plate edges. Style with warm appetite appeal — increase temperature for cozy warmth (+8), boost clarity and texture for tactile appeal, enhance golden browns on baked goods, make reds more vibrant on meats and sauces, add subtle rim light from behind for dimensional separation from background. Polish with shallow depth of field effect if not captured in camera, add subtle vignette to draw eye to hero dish, sharpen food texture selectively (crust, seeds, grill marks), reduce background distraction through blur or darkening, and finish with clean, bright presentation that makes viewers hungry."

Great for restaurant menus, food blogs, Instagram food accounts, and recipe websites.`,
    howToUse: [
      "Copy the food photography RSP prompt using the Copy Prompt button.",
      "Start with well-composed food photos — the prompt enhances but cannot fix bad angles or unappetizing presentation.",
      "For AI tools: use image-to-image with 0.3 strength to preserve the food's natural appearance while boosting appeal.",
      "For Lightroom: increase clarity and texture sliders, warm the temperature, and use radial filters on the hero dish.",
      "Add complementary props in post if needed — a sprinkle of herbs or dusting of powdered sugar can be composited.",
      "Export with sRGB color profile for web use where most food content is viewed.",
    ],
    faqs: [
      {
        question: "What makes food photography look appetizing?",
        answer:
          "Appetizing food photography features warm colors, visible texture, fresh appearance, good lighting that shows dimension, and clean composition. The brain associates warmth with cooked food and freshness with quality ingredients.",
      },
      {
        question: "Can AI make bad food photos look good?",
        answer:
          "AI can improve lighting, color, and sharpness, but it cannot fix fundamentally unappetizing food. Burnt, wilted, or poorly plated food will still look unappealing. Start with the most effective possible photo for strong results.",
      },
      {
        question: "What colors make food look most appetizing?",
        answer:
          "Warm reds, oranges, and yellows trigger appetite responses. Greens signal freshness. Browns and golds suggest perfectly cooked food. Blues and purples are appetite suppressants — avoid overusing them in food photography.",
      },
      {
        question: "How do I photograph steam for food photos?",
        answer:
          "Steam is best captured with backlighting against a dark background. For post-processing enhancement, AI can add realistic steam wisps. In manual editing, use soft white brushes with low opacity and Gaussian blur on separate layers.",
      },
      {
        question: "Is it ethical to heavily edit food photos for menus?",
        answer:
          "Enhancement (better lighting, color correction, sharpening) is standard and ethical. Misrepresentation (making portions look larger, adding ingredients not present) can create customer disappointment. Enhance reality, do not invent it.",
      },
    ],
    relatedSlugs: [
      "summer-vibes-rsp-prompt",
      "glow-up-rsp-prompt",
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
    ],
    wordCount: 830,
    whenToUse:
      "The food photography RSP prompt is essential for restaurant owners launching digital menus, food bloggers building recipe posts, and social-media managers running culinary accounts. It is a creator favorite for cookbook photography, meal-prep branding, and beverage campaigns where appetite appeal directly drives engagement. Use it when your dish looks delicious in person but flat on camera—common under fluorescent kitchen lights or phone flash. Catering companies apply it to event galleries so potential clients can almost taste the spread. Even home cooks use it to turn everyday dinners into shareable content that garners compliments and recipe requests. The prompt shines brightest on dishes with varied textures and colors, from vibrant salads to glistening steaks.",
    bestResultsTips: [
      "Shoot from a 45-degree angle or directly overhead so the prompt can enhance dimension without fighting perspective distortion.",
      "Use natural window light or a diffused artificial source; harsh shadows make food look greasy or unappetizing.",
      "Include fresh garnishes, herbs, or citrus wedges so the prompt has vibrant color accents to boost.",
      "Keep plates and backgrounds clean; crumbs and smudges distract even after AI cleanup.",
      "Capture food immediately after plating so steam, sheen, and structural height are at their peak.",
      "Use a macro lens or phone portrait mode for shallow depth of field that the prompt can refine further.",
      "Avoid blue-toned props or lighting; warm wood, linen, and ceramic backgrounds reinforce appetite appeal.",
    ],
    beforeYouGenerate:
      "This prompt is designed for culinary marketing, editorial food content, and social sharing where visual appetite is the primary goal. It is not intended for nutritional analysis, allergen documentation, or legal compliance photography where accurate portion representation matters. If you are shooting for a menu that must match served dishes, keep enhancements subtle and truthful. The prompt should make the food look its best, not create a fantasy that the kitchen cannot deliver. Be especially careful with meat and seafood color enhancement; oversaturated reds and oranges can cross the line from appetizing to artificial.",
    promptVariations: [
      {
        name: "Rustic Bakery Warmth",
        prompt:
          "Apply rustic bakery warmth treatment: Retouch with golden crust enhancement and visible crumb texture, add flour dusting on wooden surfaces, style with warm amber and caramel color grading boosting browns by +20, enhance melted butter and honey gloss, add steam wisps from fresh-baked bread, polish with shallow depth of field on background loaves, include vintage linen and parchment props, and finish with soft morning-window light for farmhouse-kitchen atmosphere.",
      },
      {
        name: "Vibrant Salad Freshness",
        prompt:
          "Apply vibrant salad freshness treatment: Retouch with saturated greens and reds on vegetables, add water droplets on lettuce leaves and cherry tomatoes, style with high-contrast clarity for crisp texture visibility, enhance lemon wedge highlights and dressing drizzle gloss, polish with bright white plate and minimal background, add microgreen detail sharpening, and finish with clean, airy exposure for health-focused editorial look.",
      },
      {
        name: "Dramatic Steakhouse Sear",
        prompt:
          "Apply dramatic steakhouse sear treatment: Retouch with char-mark sharpening and juicy pink interior emphasis, add glistening fat cap highlights, style with deep warm reds and mahogany browns, enhance grill-smoke wisps and flame-kissed edges, polish with dark slate or cast-iron background for contrast, add herb-butter melt drip detail, and finish with moody rim lighting for premium steakhouse menu presentation.",
      },
    ],
  },
{
    slug: "product-photo-rsp-prompt",
    title: "Product Photo RSP Prompt | E-Commerce Editing 2026",
    metaDescription:
      "Create professional product photos with this widely used RSP prompt. Clean backgrounds, accurate lighting, and e-commerce ready results for any catalog.",
    keywords: [
      "product photo editing prompt",
      "ecommerce photo ai prompt",
      "product photography ai",
      "clean product photo editing",
      "white background photo prompt",
    ],
    h1: "Product Photo RSP Prompt: E-Commerce Ready Editing",
    previewImage: "/rsp/previews/product-photo-rsp-prompt.jpg",
    promptText: `Product photo RSP prompt for professional e-commerce and catalog photography:

"Apply product photography treatment: Retouch with perfection cleaning — remove dust particles, fingerprints, and minor scratches, smooth fabric wrinkles on clothing, even out lighting on reflective surfaces, clean up background imperfections. Style with commercial color grading — accurate color representation (no creative shifts), boost clarity for material texture visibility, add subtle contrast for dimensional form, ensure white balance is neutral for true product colors. Polish with background treatment — extend clean white or contextual background seamlessly, add subtle shadow beneath product for grounding, apply consistent edge sharpening, ensure even lighting across entire product surface, and finish with e-commerce standard crop (slight padding around product, centered composition)."

Essential for Amazon listings, Shopify stores, Instagram shopping, and professional catalogs.`,
    howToUse: [
      "Copy the product photo RSP prompt using the Copy Prompt button.",
      "Start with photos on clean backgrounds — white, gray, or lifestyle contexts work best.",
      "For AI tools: use the prompt for background extension, shadow addition, and lighting correction.",
      "For Photoshop: use the pen tool for precise product isolation, then apply color and lighting corrections.",
      "Maintain consistent editing across all products in a catalog — buyers notice when one photo looks different.",
      "Export multiple sizes: full resolution for zoom, web-optimized for fast loading, and square crops for social media.",
    ],
    faqs: [
      {
        question: "What makes a good product photo for e-commerce?",
        answer:
          "Good product photos show the item clearly with accurate colors, good lighting, clean background, visible texture and details, and proper scale reference. The photo should answer customer questions before they ask them.",
      },
      {
        question: "White background or lifestyle context — which is better?",
        answer:
          "White backgrounds are required for Amazon and preferred for catalog consistency. Lifestyle contexts show products in use and increase emotional connection. Best practice: provide both — white background as primary, lifestyle as secondary images.",
      },
      {
        question: "How do I handle reflective products like jewelry?",
        answer:
          "Reflective products need controlled lighting to avoid harsh hotspots. Use a light tent or softbox. In editing, reduce specular highlights carefully while preserving sparkle. The prompt includes specific guidance for reflective surface retouching.",
      },
      {
        question: "Can AI remove backgrounds from product photos?",
        answer:
          "Yes. AI background removal tools like Remove.bg, Photoshop's AI select, and Stable Diffusion inpainting can isolate products. The RSP prompt then helps perfect the edges and add professional shadows for natural grounding.",
      },
      {
        question: "What resolution do product photos need?",
        answer:
          "Amazon requires minimum 1000px on the longest side. Shopify recommends 2048x2048. For zoom functionality, provide 2000px+. Always export at 72 DPI for web and 300 DPI for print catalogs.",
      },
      {
        question: "Why do my product photos look different on mobile vs desktop?",
        answer:
          "Different screens have varying color profiles and brightness levels. Always edit on a calibrated monitor and export in sRGB color space for the most consistent cross-device appearance. Test your final images on both phone and laptop before publishing.",
      },
      {
        question: "How do I photograph white products on white backgrounds?",
        answer:
          "Use a light gray background instead of pure white to create separation. Add subtle shadow beneath the product. In editing, adjust levels so the background reads as clean white while the product retains visible edges and dimension.",
      },
    ],
    relatedSlugs: [
      "food-photography-rsp-prompt",
      "ai-editor-rsp-editing",
      "glow-up-rsp-prompt",
      "rsp-editing-prompt",
    ],
    wordCount: 820,
    whenToUse: `This product photo RSP prompt is designed for anyone selling physical goods online. E-commerce sellers on Amazon, eBay, and Etsy use it to create consistent catalog imagery that meets platform requirements. Shopify store owners apply it to maintain brand cohesion across hundreds of SKUs. Handmade artisans and small-batch creators use it to give their products a professional edge without hiring a studio photographer. Marketing teams producing seasonal lookbooks and email campaigns rely on this prompt for quick turnaround. Even dropshipping businesses use it to standardize supplier-provided images into a unified store aesthetic. The prompt excels with physical products — electronics, apparel, home goods, accessories, and packaged items. It is less suited for digital products, services, or abstract concepts where no physical object exists to photograph.`,
    bestResultsTips: [
      "Shoot on a clean, non-reflective surface — white foam board or seamless paper works well",
      "Use two light sources at 45-degree angles to eliminate harsh shadows",
      "Capture at least 2000px on the longest side for zoom-friendly resolution",
      "Photograph multiple angles — front, back, side, and detail shots increase buyer confidence",
      "Include a size reference object for small items like jewelry or electronics accessories",
      "Shoot in RAW format to preserve maximum editing flexibility for color correction",
      "Keep the product centered with 10-15% padding around all edges for flexible cropping",
    ],
    beforeYouGenerate: `This prompt is ideal for online sellers, catalog photographers, and marketing teams who need clean, consistent product imagery. If you are a hobbyist selling one or two items occasionally, simpler phone editing apps may suffice. This prompt is not designed for artistic product photography where creative distortion or dramatic lighting is the goal — it prioritizes accuracy and commercial appeal over artistic expression. Avoid using it for products where texture and material authenticity are the main selling points without manual review, as AI can occasionally smooth away important surface details.`,
    promptVariations: [
      {
        name: "Lifestyle Context Version",
        prompt: `"Apply lifestyle product photography treatment: Place product in authentic home or office environment, add natural window light from left side, include subtle props that suggest usage context (coffee cup near notebook, plant near vase), maintain shallow depth of field with product in sharp focus, warm color grading at 5800K, add subtle lifestyle atmosphere without cluttering the frame, ensure product remains the hero element with 60% of visual weight, and finish with Instagram-friendly 4:5 aspect ratio."`,
      },
      {
        name: "360° Rotation Version",
        prompt: `"Apply 360 product photography treatment: Capture product from 36 angles (10° increments) on motorized turntable, maintain identical lighting across all frames, remove background consistently using chroma key or AI removal, align all images to identical center point, add subtle shadow beneath product in each frame, ensure color temperature matches across the full rotation sequence, and export as interactive spin set or animated GIF for product pages."`,
      },
      {
        name: "Macro Detail Version",
        prompt: `"Apply macro product detail treatment: Focus on material texture and craftsmanship details, use extension tube or macro lens for 1:1 magnification, add side lighting to emphasize surface texture and edges, boost clarity and micro-contrast for tactile appeal, remove dust and fingerprints with precision cloning, maintain accurate color for material authenticity, add subtle reflection on glossy surfaces, and finish with tight crop that fills frame with product detail."`,
      },
    ],
  },
  {
    slug: "hdr-landscape-rsp-prompt",
    title: "HDR Landscape RSP Prompt | Nature Photography 2026",
    metaDescription:
      "Create breathtaking HDR landscapes with this trending RSP prompt. Enhance dynamic range, natural colors, and scenic detail for stunning nature shots.",
    keywords: [
      "hdr landscape photo prompt",
      "nature photo editing ai",
      "landscape photography prompt",
      "scenic photo editing ai",
      "dynamic range photo prompt",
    ],
    h1: "HDR Landscape RSP Prompt: Breathtaking Nature Photography",
    previewImage: "/rsp/previews/hdr-landscape-rsp-prompt.jpg",
    promptText: `HDR landscape RSP prompt for stunning nature and scenic photography:

"Apply HDR landscape treatment: Retouch with detail recovery — bring back shadow detail in foreground without flattening, recover highlight detail in sky clouds, reduce haze for distant mountain clarity, sharpen fine details like tree branches and rock texture. Style with natural color enhancement — boost greens in foliage naturally (avoid neon effect), deepen blue in sky with graduated filter effect, warm golden light on sunlit areas, cool shadows in shaded areas for dimensional color, add subtle Orton effect for dreamy atmosphere. Polish with dynamic range optimization — tone mapping for visible detail in all zones, add subtle contrast for depth, sharpen mid-ground elements, dehaze at 15% for atmospheric perspective, and finish with natural vignette that mimics lens characteristics, not digital darkening."

Perfect for travel photography, nature portfolios, real estate exterior shots, and scenic social media content.`,
    howToUse: [
      "Copy the HDR landscape RSP prompt using the Copy Prompt button.",
      "Start with bracketed exposures or a single RAW file with good dynamic range — the prompt enhances what you capture.",
      "For AI enhancement: use the prompt with image-to-image at low strength (0.3) to preserve natural appearance.",
      "For Lightroom/Photoshop: use HDR merge for bracketed shots, then apply the color and detail enhancements.",
      "Be careful not to overprocess — natural landscapes should look real, not like video game graphics.",
      "Export with Adobe RGB for printing or sRGB for web sharing.",
    ],
    faqs: [
      {
        question: "What is HDR in photography?",
        answer:
          "HDR (High Dynamic Range) combines multiple exposures to capture detail in both bright highlights and dark shadows. Our eyes see a wide range of light, but cameras do not. HDR bridges that gap for more realistic or dramatic landscape photos.",
      },
      {
        question: "Can I create HDR from a single photo?",
        answer:
          "Yes, from RAW files. RAW contains more dynamic range than JPEG. Use shadow and highlight recovery sliders, then apply tone mapping. The result is not true HDR but can look very close with modern editing tools.",
      },
      {
        question: "Why do HDR landscapes sometimes look fake?",
        answer:
          "Overprocessing creates the 'HDR look' that people dislike. Signs include halos around objects, oversaturated colors, flat lighting with no shadows, and visible tone mapping artifacts. The RSP prompt emphasizes natural, restrained processing.",
      },
      {
        question: "What time of day is ideal for landscape HDR?",
        answer:
          "Golden hour and blue hour provide the most dramatic natural light. Midday sun creates harsh shadows that HDR can help with but looks less artistic. Stormy weather often produces the most dramatic HDR results with dark clouds and bright breaks.",
      },
      {
        question: "Do I need special equipment for HDR landscapes?",
        answer:
          "A tripod is essential for true multi-exposure HDR to prevent alignment issues. A camera with bracketing mode speeds up capture. For single-shot HDR, any camera that shoots RAW works. Smartphones with HDR mode can produce surprisingly good results.",
      },
      {
        question: "How do I avoid halos around trees and mountains in HDR?",
        answer:
          "Halos appear when tone mapping pushes local contrast too aggressively. Use conservative dehaze settings (under 20%), avoid clarity boosts above +30, and manually blend exposures with luminosity masks instead of relying on automatic HDR merge for complex scenes.",
      },
      {
        question: "Should I use graduated filters or digital blending for sky exposure?",
        answer:
          "Digital blending gives more control than physical graduated filters. Use exposure bracketing and blend the properly exposed sky with the properly exposed foreground using layer masks. This avoids the dark line that physical filters can create on uneven horizons.",
      },
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "summer-vibes-rsp-prompt",
      "black-white-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 850,
    whenToUse: `This HDR landscape prompt is built for photographers who capture scenes with extreme light differences. Travel photographers use it to bring out foreground detail in sunset shots where the sky would otherwise blow out. Nature enthusiasts apply it to forest scenes where dappled light creates deep shadows and bright patches. Real estate photographers rely on it for exterior shots showing both building detail and sky. Astrophotographers use modified versions to reveal foreground terrain under starlit skies. The prompt also works for cityscape photography at twilight, where building lights and fading daylight compete for exposure. It is not meant for flat, evenly lit scenes where HDR offers no advantage, nor for portraits where the dramatic tonal range looks unnatural on skin.`,
    bestResultsTips: [
      "Use a sturdy tripod — even slight movement between bracketed shots ruins alignment",
      "Bracket at least 3 exposures: -2EV, 0EV, and +2EV for maximum dynamic range capture",
      "Shoot in RAW format — JPEG lacks the tonal data needed for quality HDR blending",
      "Include a fixed reference point in frame to help alignment software lock the sequence",
      "Avoid scenes with moving water, clouds, or foliage unless using ghost-removal software",
      "Compose with strong leading lines — HDR enhances depth and draws viewers into the scene",
      "Underexpose your base shot slightly to preserve highlight detail in bright sky areas",
    ],
    beforeYouGenerate: `This prompt serves landscape photographers, travel content creators, and real estate professionals who need to balance extreme light in a single frame. Casual snapshot photographers may find the workflow unnecessarily complex for simple scenes. Do not use this prompt for portraits — the aggressive tone mapping creates unflattering skin tones and unnatural facial shadows. It is also unsuitable for fast-action photography where bracketing is impossible. If your scene already has balanced exposure with visible detail everywhere, standard editing will produce cleaner results than HDR processing.`,
    promptVariations: [
      {
        name: "Dramatic Storm Version",
        prompt: `"Apply dramatic storm landscape treatment: Darken sky with heavy cloud detail recovery, add lightning glow reflection on landscape, boost contrast between dark clouds and bright breaks, add rain streak overlay at 12% opacity, cool overall temperature to 4800K for moody atmosphere, enhance water droplets on foreground elements, add subtle rainbow if light break is visible, deepen shadows for dramatic tension, and finish with cinematic 16:9 crop emphasizing storm scale against landscape."`,
      },
      {
        name: "Golden Hour Panorama Version",
        prompt: `"Apply golden hour panorama treatment: Stitch 5-7 overlapping frames with 30% overlap, maintain consistent exposure across all frames, warm temperature to 6000K for golden glow, enhance sun flare with subtle starburst effect, add graduated warmth from horizon upward, recover shadow detail in foreground rocks and vegetation, sharpen distant peaks with clarity boost, and finish with ultra-wide aspect ratio (3:1 or wider) for immersive panoramic feel."`,
      },
      {
        name: "Minimalist Misty Version",
        prompt: `"Apply minimalist misty landscape treatment: Reduce overall contrast for soft, ethereal feel, lift shadows significantly for fog luminosity, desaturate colors to muted earth tones, add layered atmospheric perspective with distant hills fading to pale gray, soften all edges with subtle Gaussian blur at 2px, remove distracting foreground elements through careful cloning, add subtle cool color cast at 5200K, and finish with square 1:1 crop for contemplative, gallery-style presentation."`,
      },
    ],
  },
  {
    slug: "pet-portrait-rsp-prompt",
    title: "Pet Portrait RSP Prompt | Animal Photography 2026",
    metaDescription:
      "Transform pet photos into adorable portraits with this widely used RSP prompt. Enhance fur detail, eye sparkle, and personality for stunning animal shots.",
    keywords: [
      "pet portrait ai prompt",
      "pet photo editing prompt",
      "animal photography ai",
      "dog photo editing ai",
      "cat portrait editing prompt",
    ],
    h1: "Pet Portrait RSP Prompt: Adorable Animal Photo Editing",
    previewImage: "/rsp/previews/pet-portrait-rsp-prompt.jpg",
    promptText: `Pet portrait RSP prompt for capturing the personality of furry friends:

"Apply pet portrait treatment: Retouch with fur perfection — enhance fur texture and detail without over-sharpening, brighten eyes to catchlight sparkle, whiten teeth subtly if visible, clean up eye discharge or nose debris gently, even out patchy fur lighting. Style with warm, inviting color grading — boost warm tones for cozy feel, enhance natural fur colors (golden retrievers get warmer golds, huskies get cooler silvers), add environmental context colors (green grass, autumn leaves), keep white fur pure without yellow cast. Polish with eye enhancement — sharpen iris detail, brighten catchlights, add subtle eye glow for life, blur background for subject separation, add subtle vignette around pet's face, and finish with personality-preserving treatment that keeps the pet looking natural and adorable, not overprocessed."

Perfect for pet Instagram accounts, memorial portraits, veterinarian websites, and pet photography businesses.`,
    howToUse: [
      "Copy the pet portrait RSP prompt using the Copy Prompt button.",
      "Choose photos where the pet is looking at the camera — eye contact creates connection.",
      "For AI tools: use image-to-image with 0.4 strength to preserve the pet's natural appearance.",
      "For manual editing: focus on the eyes first — they are the most important feature in pet portraits.",
      "Capture personality through expression — a head tilt, tongue out, or playful pose matters more than perfect lighting.",
      "Export at high resolution for print products like canvases, calendars, and greeting cards.",
    ],
    faqs: [
      {
        question: "How do I get pets to look at the camera?",
        answer:
          "Use treats, toys, or sounds above the camera. Have an assistant attract attention. For AI editing, you cannot change eye direction easily — capture it in camera. Some AI tools can generate eye contact, but results vary.",
      },
      {
        question: "What is the most effective lighting for pet portraits?",
        answer:
          "Natural window light is ideal — soft, directional, and flattering. Avoid flash which causes red-eye in dogs and startled expressions. Outdoor shade on sunny days provides even lighting without harsh shadows.",
      },
      {
        question: "Can AI remove leashes and collars from pet photos?",
        answer:
          "Yes. AI inpainting tools like Photoshop's Generative Fill, Stable Diffusion inpainting, and Midjourney's vary region can remove leashes and collars. The RSP prompt includes cleanup instructions for perfect final portraits.",
      },
      {
        question: "How do I photograph black pets without losing detail?",
        answer:
          "Black pets need more light than you think. Use side lighting to create dimension and show fur texture. In editing, lift shadows carefully to reveal detail without making the pet look gray. The RSP prompt includes specific black fur guidance.",
      },
      {
        question: "What makes a pet portrait emotionally powerful?",
        answer:
          "Emotional pet portraits capture personality — a goofy smile, intense focus, or peaceful relaxation. Sharp eyes, natural expression, and good lighting create connection. The RSP prompt enhances these elements while preserving authenticity.",
      },
      {
        question: "Why do my pet photos look blurry even after editing?",
        answer:
          "Pet photography requires fast shutter speeds (1/500s or faster) because animals move constantly. Camera shake and subject motion are the main culprits. The editing prompt can sharpen slightly, but it cannot fix motion blur from a too-slow shutter.",
      },
      {
        question: "How do I photograph multiple pets together?",
        answer:
          "Use treats or toys to align their attention in the same direction. Shoot at eye level with the smaller pet. Use a smaller aperture (f/5.6-f/8) to keep both pets in focus. The editing prompt can then enhance each pet's features consistently.",
      },
    ],
    relatedSlugs: [
      "glow-up-rsp-prompt",
      "fantasy-portrait-rsp-prompt",
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
    ],
    wordCount: 840,
    whenToUse: `This pet portrait prompt is designed for pet owners, professional pet photographers, and animal-focused businesses. Veterinarians and groomers use enhanced portraits for client communications and social media. Pet rescue organizations rely on quality photos to increase adoption rates — a well-edited portrait can mean the difference between a scroll-past and an application. Pet influencers and Instagram account managers use it to maintain consistent, high-quality content. Memorial portrait services apply it to create lasting tributes for grieving pet owners. The prompt works for dogs, cats, rabbits, horses, and most furry companions. It is less effective for reptiles, fish, and birds where feather or scale detail requires different treatment approaches.`,
    bestResultsTips: [
      "Get down to the pet's eye level for intimate, engaging portraits",
      "Use continuous shooting mode — pets blink, move, and change expression constantly",
      "Focus on the eyes — even if the nose or ears are slightly soft, sharp eyes save the photo",
      "Shoot outdoors in open shade for natural, even lighting without harsh shadows",
      "Use a long lens (85mm or longer) to create background compression and separation",
      "Capture personality moments — the head tilt, tongue out, or ear perk are gold",
      "Avoid flash when possible — it causes red-eye in dogs and startled expressions in cats",
    ],
    beforeYouGenerate: `This prompt is ideal for pet owners who want frame-worthy portraits, pet photographers building portfolios, and animal businesses needing professional imagery. If you are simply documenting your pet's daily life for personal memories, basic phone editing is probably sufficient. This prompt is not designed for wildlife photography where distance and natural habitat context matter more than portrait-style enhancement. It also should not be used for veterinary diagnostic imagery where accurate color and texture representation is medically important. For reptiles, birds, and aquatic pets, seek species-specific editing guidance.`,
    promptVariations: [
      {
        name: "Action Play Version",
        prompt: `"Apply action pet portrait treatment: Preserve motion blur in running/jumping limbs for dynamic energy, freeze face and eyes with sharp detail, boost saturation on toys and outdoor environment, add dust or grass kick-up particles at 15% opacity, warm temperature to 5800K for sunny outdoor feel, enhance muscle definition in active poses, add catchlights from sky in eyes, and finish with 16:9 cinematic crop emphasizing movement direction and space."`,
      },
      {
        name: "Studio Minimal Version",
        prompt: `"Apply studio minimal pet portrait treatment: Place pet against seamless neutral background (gray or cream), use large softbox for even, shadowless lighting, remove all environmental distractions through background replacement, enhance fur detail with micro-contrast, keep eye color true to breed standard, add subtle rim light from behind for dimensional separation, apply minimal retouching preserving natural character, and finish with classic 4:5 portrait crop suitable for framed prints."`,
      },
      {
        name: "Seasonal Theme Version",
        prompt: `"Apply seasonal pet portrait treatment: Add context-appropriate environmental elements (fall leaves, winter snow, spring flowers), match color grading to season — warm amber for autumn, cool blue for winter, fresh green for spring, enhance seasonal textures in fur (snowflakes on coat, pollen on nose), add subtle atmospheric effects (falling leaves, gentle snowfall), and finish with seasonal frame or border treatment that complements the time of year."`,
      },
    ],
  },
  {
    slug: "wedding-photo-rsp-prompt",
    title: "Wedding Photo RSP Prompt | Romantic Editing 2026",
    metaDescription:
      "Create timeless wedding photos with this trending RSP prompt. Add romance, elegance, and soft beauty to every bridal shot with professional results.",
    keywords: [
      "wedding photo editing prompt",
      "romantic photo ai prompt",
      "bridal photo editing ai",
      "wedding photography prompt",
      "elegant photo editing ai",
    ],
    h1: "Wedding Photo RSP Prompt: Romantic Perfection Editing",
    previewImage: "/rsp/previews/wedding-photo-rsp-prompt.jpg",
    promptText: `Wedding photo RSP prompt for timeless, romantic editing:

"Apply wedding photo treatment: Retouch with bridal perfection — smooth skin while preserving natural texture, reduce under-eye shadows from long day, whiten teeth and eyes subtly, fix makeup smudges, tame flyaway hairs, smooth dress wrinkles without losing fabric texture. Style with romantic color grading — soft pastel palette with blush pinks and ivory, warm golden highlights for skin glow, cool gentle shadows for depth, reduce contrast for soft, flattering look, add subtle haze for dreamlike atmosphere. Polish with romantic enhancements — soften background bokeh, add gentle light leaks in warm tones, enhance bouquet colors, sharpen ring details, add subtle sparkle to jewelry, ensure consistent skin tones across all photos in the set, and finish with timeless elegance that will look beautiful decades from now, not trendy or dated."

Essential for wedding photographers, engagement shoots, anniversary sessions, and romantic portrait work.`,
    howToUse: [
      "Copy the wedding photo RSP prompt using the Copy Prompt button.",
      "Apply consistently across the entire wedding set — mismatched editing looks unprofessional.",
      "For AI batch editing: create a preset from this prompt and apply to all photos with minor individual adjustments.",
      "For manual editing: start with the bride and groom portraits, then adapt the same style for ceremony and reception shots.",
      "Preserve emotional moments — do not over-retouch tears, laughter lines, or candid expressions that tell the story.",
      "Export multiple formats: high-res for albums, web-optimized for galleries, and social media crops for sharing.",
    ],
    faqs: [
      {
        question: "How much retouching is appropriate for wedding photos?",
        answer:
          "Enhance without erasing. Remove temporary blemishes, soften harsh shadows, and fix wardrobe issues. Preserve natural expressions, laugh lines, and genuine emotion. The couple should recognize themselves — just at their best.",
      },
      {
        question: "What color palette works ideal for wedding photos?",
        answer:
          "Soft, warm palettes flatter skin tones and create romance. Blush pink, ivory, champagne, and soft gold are timeless. Avoid trendy filters that will date the photos. The RSP prompt uses classic romantic colors that endure.",
      },
      {
        question: "How do I edit photos from different lighting conditions?",
        answer:
          "Weddings move from bright outdoor ceremonies to dim receptions. Create base adjustments for each lighting scenario, then apply the romantic color grading consistently. The RSP prompt adapts to various lighting while maintaining cohesive style.",
      },
      {
        question: "Should I edit candid and posed photos differently?",
        answer:
          "Keep the same color grading for consistency, but adjust retouching intensity. Posed portraits can handle more polish. Candid moments should look natural with minimal intervention — preserve the authenticity that makes them special.",
      },
      {
        question: "How long should wedding photo editing take?",
        answer:
          "Professional turnaround is 4-8 weeks for full galleries. AI-assisted workflows can reduce this to 2-3 weeks. The RSP prompt streamlines decision-making by providing a clear editing framework, saving hours of experimentation per wedding.",
      },
      {
        question: "How do I maintain consistent skin tones across the entire wedding gallery?",
        answer:
          "Create a master color profile from the best-lit portrait of the day, then apply it as a starting point for every image. Adjust individually for different lighting scenarios (indoor, outdoor, flash) but keep the underlying warmth and saturation consistent.",
      },
      {
        question: "What should I do if the bride's white dress looks blue or yellow?",
        answer:
          "Use the white balance eyedropper on the dress itself in a well-exposed shot. Then apply that correction across similar lighting conditions. Be careful not to overcorrect — slight warmth in a white dress often looks more flattering than pure clinical white.",
      },
    ],
    relatedSlugs: [
      "glow-up-rsp-prompt",
      "fantasy-portrait-rsp-prompt",
      "moody-dark-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 860,
    whenToUse: `This wedding photo prompt is crafted for professional wedding photographers, engagement session artists, and anniversary portrait creators. Second shooters building their portfolio use it to match the lead photographer's style. Destination wedding photographers rely on it for quick turnaround in different lighting environments. Couples planning DIY weddings use it to enhance guest-taken photos into cohesive memories. The prompt also serves elopement photographers capturing intimate ceremonies in dramatic locations. It is designed for romantic, timeless aesthetics — not trendy or heavily stylized looks that will date the images. Avoid using it for documentary-style wedding coverage where raw authenticity is prioritized over polished beauty, or for same-day edit slideshows where speed matters more than refined processing.`,
    bestResultsTips: [
      "Shoot in RAW format — wedding lighting changes constantly and RAW preserves maximum adjustment flexibility",
      "Use off-camera flash for reception shots to maintain consistent quality in dark venues",
      "Capture detail shots of rings, flowers, and decor with a macro lens for album variety",
      "Shoot the getting-ready phase in natural window light for the most flattering skin tones",
      "Take multiple exposure bracketing for outdoor ceremonies with bright skies",
      "Photograph the couple during golden hour even if the ceremony is at midday — schedule a portrait session",
      "Backup every card immediately — wedding photos are irreplaceable moments",
    ],
    beforeYouGenerate: `This prompt is designed for wedding professionals and serious enthusiasts who deliver complete galleries to clients. If you are a guest capturing casual moments on your phone, simpler editing apps will give faster results. This prompt is not suitable for photojournalistic wedding coverage where heavy retouching contradicts the documentary approach. It also should not be used for quick social media posting where the full RSP workflow is overkill. Couples doing their own post-processing should have basic Lightroom skills before attempting the full prompt — the results depend on understanding layer-based adjustments.`,
    promptVariations: [
      {
        name: "Vintage Romance Version",
        prompt: `"Apply vintage romance wedding treatment: Warm color grading with sepia undertones, add soft film grain at 18% opacity, simulate light leaks in warm amber from frame edges, reduce contrast for soft, dreamy look, add subtle vignette for old-photo feel, enhance lace and fabric detail with micro-contrast, soften background to creamy bokeh, add handwritten-style date overlay, and finish with matte finish that mimics aged photographic paper."`,
      },
      {
        name: "Dramatic Evening Version",
        prompt: `"Apply dramatic evening wedding treatment: Deepen shadows for moody atmosphere, enhance candlelight and string light bokeh, warm temperature to 3200K for intimate glow, add subtle haze from sparkler smoke or fog machines, sharpen silhouette shots against sunset sky, boost contrast for dramatic first dance lighting, preserve deep blacks while lifting shadow detail in faces, and finish with cinematic 2.39:1 letterbox for movie-trailer feel."`,
      },
      {
        name: "Airport Elopement Version",
        prompt: `"Apply destination elopement treatment: Enhance natural landscape backdrop without overpowering couple, balance exposure between bright sky and backlit subjects, add subtle fill light to faces while preserving natural sun flare, boost location-specific colors (ocean blue, mountain green, desert gold), reduce haze for distant vista clarity, sharpen intimate detail shots (hands, rings, vows), and finish with wide cinematic crop that showcases the epic location scale alongside the couple."`,
      },
    ],
  },
  {
    slug: "street-photography-rsp-prompt",
    title: "Street Photography RSP Prompt | Urban Editing 2026",
    metaDescription:
      "Enhance street photography with this widely used RSP prompt. Add grit, atmosphere, and documentary style to urban shots for compelling visual stories.",
    keywords: [
      "street photography ai prompt",
      "urban photo editing prompt",
      "documentary photo ai",
      "city photography editing",
      "gritty photo editing prompt",
    ],
    h1: "Street Photography RSP Prompt: Urban Storytelling Editing",
    previewImage: "/rsp/previews/street-photography-rsp-prompt.jpg",
    promptText: `Street photography RSP prompt for compelling urban documentary editing:

"Apply street photography treatment: Retouch with documentary honesty — preserve skin texture and character, remove only distracting modern elements (neon signs, plastic trash), enhance environmental storytelling details, keep imperfections that add authenticity. Style with urban color grading — desaturate slightly for gritty realism (-10), add subtle warm tone to skin under streetlights, cool down shadows in alleyways and doorways, boost contrast for dramatic light/shadow interplay, add film-like grain for analog authenticity. Polish with atmospheric enhancement — add subtle haze for pollution/mist realism, sharpen architectural details, enhance reflections on wet pavement, preserve motion blur in moving subjects for dynamism, add subtle vignette from natural lens limitations, and finish with documentary integrity — the photo should feel real and observed, not staged or overproduced."

Ideal for street photographers, travel bloggers, urban explorers, and documentary projects.`,
    howToUse: [
      "Copy the street photography RSP prompt using the Copy Prompt button.",
      "Select photos with strong composition and story — street photography is about moments, not just technical perfection.",
      "For AI enhancement: use at low strength (0.3) to preserve the raw, candid feel that defines street photography.",
      "For manual editing: use the RSP framework but apply lighter adjustments than you would for portraits.",
      "Preserve motion blur and grain — these elements add authenticity and energy to street shots.",
      "Export with sRGB for web sharing where most street photography communities exist.",
    ],
    faqs: [
      {
        question: "What defines good street photography?",
        answer:
          "Good street photography captures authentic human moments in public spaces. It features compelling composition, interesting light, emotional expression, and storytelling without staging. The best street photos make viewers feel present in the scene.",
      },
      {
        question: "Should street photos be edited at all?",
        answer:
          "Yes, but minimally. Color correction, contrast adjustment, and cropping are standard. Heavy retouching contradicts documentary ethics. The RSP prompt is designed for enhancement that preserves authenticity, not transformation that creates fiction.",
      },
      {
        question: "How do I photograph strangers legally and ethically?",
        answer:
          "Laws vary by country. In public spaces, photography is generally legal in the US and UK. Some countries require consent. Ethically, avoid exploiting vulnerable subjects, respect requests to stop, and consider how your photo represents the person.",
      },
      {
        question: "What gear is ideal for street photography?",
        answer:
          "Small, quiet cameras work best. Mirrorless cameras with compact lenses, high-end compact cameras (Ricoh GR, Fuji X100), or even smartphones. The best camera is the one you always carry. The RSP prompt works on photos from any device.",
      },
      {
        question: "How do I develop a street photography style?",
        answer:
          "Shoot consistently in similar lighting conditions, edit with a consistent palette, and focus on subjects that interest you. Some photographers specialize in shadows, reflections, or specific neighborhoods. The RSP prompt helps establish consistent editing as part of your style.",
      },
      {
        question: "How do I overcome fear of photographing strangers?",
        answer:
          "Start in busy tourist areas where cameras are expected. Use a small, unobtrusive camera. Smile and nod if noticed — most people do not mind. Shoot from the hip with a wide lens for candid moments. Confidence builds with practice and positive encounters.",
      },
      {
        question: "What makes a street photo tell a story?",
        answer:
          "Storytelling street photos contain juxtaposition, emotion, or a decisive moment. Look for contrasts — old and young, wealth and poverty, motion and stillness. Include environmental context that reveals location and culture. The best images raise questions rather than answer them.",
      },
    ],
    relatedSlugs: [
      "black-white-rsp-prompt",
      "moody-dark-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "cyberpunk-neon-rsp-prompt",
    ],
    wordCount: 850,
    whenToUse: `This street photography prompt is built for documentary photographers, urban explorers, and travel storytellers who capture candid moments in public spaces. Photojournalists use it to maintain consistent processing across assignment galleries. Travel bloggers rely on it to give their destination coverage a cohesive, professional look. Urban artists and graffiti photographers apply it to enhance the grit and texture of city environments. The prompt is also popular among photography students learning documentary ethics and minimal intervention editing. It excels with candid human moments, architectural details, and urban landscapes. It is not designed for staged portraits, commercial fashion shoots, or studio work where heavy retouching and controlled lighting are the norms.`,
    bestResultsTips: [
      "Shoot with a small, quiet camera — large DSLRs attract attention and change behavior",
      "Use zone focusing at f/8-f/11 so you can shoot instantly without waiting for autofocus",
      "Look for interesting light first — a great moment in bad light is still a bad photo",
      "Include environmental context — street signs, architecture, and weather tell the location story",
      "Shoot in burst mode during decisive moments — the second or third frame often captures the peak expression",
      "Photograph during 'blue hour' for urban scenes where artificial and natural light mix beautifully",
      "Keep your camera accessible — the best moments last less than a second",
    ],
    beforeYouGenerate: `This prompt serves documentary photographers and street photography enthusiasts who value authenticity over perfection. If you are shooting commercial work or client portraits, other RSP prompts offer more appropriate retouching guidance. This prompt is specifically not for photographers who want to remove all imperfections — documentary integrity requires preserving the reality of the scene. Do not use it for photos where subjects have an expectation of privacy or where heavy editing would misrepresent the moment. For beginners, understanding composition and timing matters more than editing — master those first before relying on post-processing.`,
    promptVariations: [
      {
        name: "Rainy Night Version",
        prompt: `"Apply rainy night street treatment: Enhance reflections on wet pavement with boosted clarity, add rain streak overlay at 20% opacity, deepen shadows for moody night atmosphere, boost neon and storefront light saturation, cool temperature to 4500K for urban night feel, add subtle haze from rain and steam, preserve motion blur from umbrellas and passing cars, sharpen architectural lines against soft atmospheric background, and finish with high-contrast black point for dramatic night depth."`,
      },
      {
        name: "Monochrome Grit Version",
        prompt: `"Apply monochrome street treatment: Convert to black and white using green channel for maximum detail, boost contrast for dramatic light and shadow, add heavy grain at 22% for analog documentary feel, crush blacks to pure black while preserving shadow detail in key areas, dodge and burn selectively to guide eye through frame, sharpen edges of subjects and architecture, add subtle vignette from natural lens falloff, and finish with matte paper tone for gallery-style presentation."`,
      },
      {
        name: "Golden Hour Commute Version",
        prompt: `"Apply golden hour commute treatment: Warm temperature to 6000K for late-afternoon glow, enhance long shadows for dimensional depth, boost saturation on clothing and storefront colors, add lens flare from low sun angle, preserve silhouette detail in backlit subjects, sharpen faces in partial shadow, add subtle haze for atmospheric summer warmth, and finish with 4:5 crop emphasizing vertical urban elements and human scale against city architecture."`,
      },
    ],
  },
];

export function getPromptBySlug(slug: string): RSPPrompt | undefined {
  return rspPrompts.find((p) => p.slug === slug);
}

export function getRelatedPrompts(slugs: string[]): RSPPrompt[] {
  return slugs
    .map((slug) => getPromptBySlug(slug))
    .filter((p): p is RSPPrompt => p !== undefined);
}
