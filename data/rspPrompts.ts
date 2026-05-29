export interface RSPPrompt {
  slug: string;
  title: string; // <= 60 chars
  metaDescription: string; // 150-160 chars
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
}

export const rspPrompts: RSPPrompt[] = [
  {
    slug: "ai-editor-rsp-editing",
    title: "AI Editor RSP Editing Prompt | Top Photo Effects 2026",
    metaDescription:
      "Discover the top AI editor RSP editing prompt. Transform photos with professional retouching, color grading, and stunning visual effects instantly.",
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
  },
  {
    slug: "rsp-editing-prompt",
    title: "RSP Editing Prompt: Complete AI Photo Workflow Guide",
    metaDescription:
      "Master the RSP editing prompt workflow. Step-by-step guide to retouch, style, and polish any photo using AI tools for professional results.",
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
  },
  {
    slug: "aesthetic-rsp-prompt",
    title: "Aesthetic RSP Prompt: Create Dreamy Photo Edits",
    metaDescription:
      "Get the trending aesthetic RSP prompt. Create dreamy, moody, and visually stunning photo edits with this proven AI editing formula for social media.",
    keywords: [
      "aesthetic rsp prompt",
      "aesthetic photo editing prompt",
      "dreamy photo ai prompt",
      "moody photo editing ai",
      "aesthetic ai editor",
    ],
    h1: "Aesthetic RSP Prompt: Create Dreamy, Viral-Worthy Photo Edits",
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
  },
  {
    slug: "ghost-girlfriend-ai-edit",
    title: "Ghost Girlfriend AI Edit Prompt | Ethereal Portrait",
    metaDescription:
      "Create stunning ghost girlfriend AI edits with this popular prompt. Ethereal, translucent, and hauntingly beautiful portrait effects for your photos.",
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
  },
  {
    slug: "chibi-ai-edit-prompt",
    title: "Chibi AI Edit Prompt: Turn Photos Into Cute Characters",
    metaDescription:
      "Transform any photo into adorable chibi art with this AI edit prompt. Perfect for avatars, social media, and cute character creation from real photos.",
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

"Transform photo into chibi anime character: Enlarge head to 1.5x body ratio with oversized sparkling eyes, shrink body to 2.5 heads tall, apply rounded soft facial features with tiny nose and mouth, add blush circles on cheeks at 30% opacity, style hair into chunky simplified anime shapes with highlight strands, simplify clothing into clean bold shapes with minimal folds, add tiny hands and feet with 3 fingers, apply pastel color palette with soft shading, add white catchlights in eyes at 2 o'clock position, include tiny floating heart or star accessories, and render with clean cell-shaded anime style with soft gradient backgrounds."

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
  },
  {
    slug: "cinematic-ai-photo-prompt",
    title: "Cinematic AI Photo Prompt: Cinema-Inspired Edits",
    metaDescription:
      "Get the cinematic AI photo prompt used by creators. Add cinema-inspired color grading, anamorphic flares, and film grain to any photo instantly.",
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
  },
  {
    slug: "vintage-film-rsp-prompt",
    title: "Vintage Film RSP Prompt: Retro Photo Editing Guide",
    metaDescription:
      "Create authentic vintage film looks with this RSP prompt. Add light leaks, grain, and faded colors for authentic retro photo editing results.",
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
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "aesthetic-rsp-prompt",
      "rsp-editing-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 860,
  },
  {
    slug: "cyberpunk-neon-rsp-prompt",
    title: "Cyberpunk Neon RSP Prompt: Futuristic Photo Edits",
    metaDescription:
      "Transform photos into cyberpunk masterpieces with this neon RSP prompt. Add glowing signs, rain effects, and futuristic color grading instantly.",
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
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "ai-editor-rsp-editing",
      "aesthetic-rsp-prompt",
      "ghost-girlfriend-ai-edit",
    ],
    wordCount: 890,
  },
  {
    slug: "fantasy-portrait-rsp-prompt",
    title: "Fantasy Portrait RSP Prompt: Magical Character Edits",
    metaDescription:
      "Create magical fantasy portraits with this RSP prompt. Add glowing elements, ethereal atmospheres, and mystical color grading to any photo.",
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
    ],
    relatedSlugs: [
      "ghost-girlfriend-ai-edit",
      "aesthetic-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "chibi-ai-edit-prompt",
    ],
    wordCount: 880,
  },
  {
    slug: "moody-dark-rsp-prompt",
    title: "Moody Dark RSP Prompt: Dramatic Low-Light Edits",
    metaDescription:
      "Master moody dark photography with this RSP prompt. Create dramatic, low-light edits with deep shadows and emotional atmosphere.",
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
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "ghost-girlfriend-ai-edit",
      "vintage-film-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 870,
  },
  {
    slug: "anime-style-rsp-prompt",
    title: "Anime Style RSP Prompt: Photo to Anime Transformation",
    metaDescription:
      "Transform real photos into stunning anime art with this RSP prompt. Perfect for profile pictures, fan art, and anime-style portraits.",
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
  },
  {
    slug: "glow-up-rsp-prompt",
    title: "Glow Up RSP Prompt: Transform Your Photos Instantly",
    metaDescription:
      "Get the viral glow up RSP prompt. Transform ordinary photos into stunning, polished images with professional retouching and color enhancement.",
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
  },
  {
    slug: "summer-vibes-rsp-prompt",
    title: "Summer Vibes RSP Prompt: Bright Sunny Photo Edits",
    metaDescription:
      "Get the perfect summer vibes RSP prompt. Add warm sunlight, beach tones, and vacation energy to any photo for instant sunny aesthetics.",
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
  },
  {
    slug: "black-white-rsp-prompt",
    title: "Black & White RSP Prompt: Classic Monochrome Edits",
    metaDescription:
      "Master black and white photography with this RSP prompt. Create stunning monochrome edits with perfect contrast and tonal range.",
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
  },
  {
    slug: "food-photography-rsp-prompt",
    title: "Food Photography RSP Prompt: Delicious Photo Edits",
    metaDescription:
      "Make food photos irresistible with this RSP prompt. Add warmth, texture, and appetite appeal to any culinary shot instantly.",
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
  },
  {
    slug: "product-photo-rsp-prompt",
    title: "Product Photo RSP Prompt: E-Commerce Ready Edits",
    metaDescription:
      "Create professional product photos with this RSP prompt. Clean backgrounds, perfect lighting, and e-commerce ready results for any product.",
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
    ],
    relatedSlugs: [
      "food-photography-rsp-prompt",
      "ai-editor-rsp-editing",
      "glow-up-rsp-prompt",
      "rsp-editing-prompt",
    ],
    wordCount: 820,
  },
  {
    slug: "hdr-landscape-rsp-prompt",
    title: "HDR Landscape RSP Prompt: Stunning Nature Edits",
    metaDescription:
      "Create breathtaking HDR landscape photos with this RSP prompt. Enhance dynamic range, colors, and detail for stunning nature photography.",
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
    ],
    relatedSlugs: [
      "cinematic-ai-photo-prompt",
      "summer-vibes-rsp-prompt",
      "black-white-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 850,
  },
  {
    slug: "pet-portrait-rsp-prompt",
    title: "Pet Portrait RSP Prompt: Adorable Animal Photo Edits",
    metaDescription:
      "Transform pet photos into adorable portraits with this RSP prompt. Enhance fur texture, eye sparkle, and personality for perfect pet photography.",
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
    ],
    relatedSlugs: [
      "glow-up-rsp-prompt",
      "fantasy-portrait-rsp-prompt",
      "ai-editor-rsp-editing",
      "rsp-editing-prompt",
    ],
    wordCount: 840,
  },
  {
    slug: "wedding-photo-rsp-prompt",
    title: "Wedding Photo RSP Prompt: Romantic Perfection Edits",
    metaDescription:
      "Create stunning wedding photos with this RSP prompt. Add romance, elegance, and timeless beauty to every wedding shot.",
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
    ],
    relatedSlugs: [
      "glow-up-rsp-prompt",
      "fantasy-portrait-rsp-prompt",
      "moody-dark-rsp-prompt",
      "ai-editor-rsp-editing",
    ],
    wordCount: 860,
  },
  {
    slug: "street-photography-rsp-prompt",
    title: "Street Photography RSP Prompt: Urban Storytelling Edits",
    metaDescription:
      "Enhance street photography with this RSP prompt. Add grit, atmosphere, and documentary style to urban shots for compelling visual stories.",
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
    ],
    relatedSlugs: [
      "black-white-rsp-prompt",
      "moody-dark-rsp-prompt",
      "cinematic-ai-photo-prompt",
      "cyberpunk-neon-rsp-prompt",
    ],
    wordCount: 850,
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
