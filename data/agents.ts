export interface Agent {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  whatItDoes: string;
  whenToUse: string[];
  workflowSteps: string[];
  systemPrompt: string;
  userPromptTemplate: string;
  inputsRequired: string[];
  outputsGenerated: string[];
  recommendedTools: string[];
  mcpServers: { name: string; description: string }[];
  commonMistakes: { title: string; fix: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const agents: Agent[] = [
  {
    slug: "reddit-marketing-agent",
    title: "Reddit Marketing Agent: Workflow + Prompts | BestMCPServers",
    h1: "Reddit Marketing Agent",
    metaDescription:
      "A reusable Reddit marketing agent workflow. Find relevant subreddits, craft authentic comments, and track engagement without getting banned.",
    keywords: [
      "reddit marketing agent",
      "reddit growth agent",
      "reddit promotion workflow",
      "ai reddit marketing",
      "reddit automation",
    ],
    category: "Marketing",
    whatItDoes:
      "This agent finds subreddits where your target audience actually hangs out, identifies posts where you can add value, and drafts comments that sound like they came from a real user — not a marketer. It tracks which subreddits drive traffic and which ones get you banned.",
    whenToUse: [
      "You have a product or service that solves a specific problem Reddit users complain about",
      "You want to drive organic traffic without paying for ads",
      "You are willing to spend 30 minutes a day engaging, not just posting links",
      "You understand that Reddit hates marketers and will ban you if you act like one",
    ],
    workflowSteps: [
      "Identify 10-20 subreddits where your target audience posts (not where competitors post)",
      "Set up keyword alerts for posts mentioning problems your product solves",
      "Read the post and at least 5 comments before responding",
      "Draft a comment that answers the question first, mentions your solution second (if at all)",
      "Track which comments drive traffic and which get removed",
      "Adjust tone based on subreddit culture — what works in r/startups bombs in r/personalfinance",
    ],
    systemPrompt: `You are a Reddit marketing assistant. Your job is to help the user engage authentically on Reddit.

Rules:
- Never write comments that sound promotional
- Always answer the question first, mention the product second (or not at all)
- Match the tone of the subreddit
- Never use marketing language like "game-changer", "revolutionary", or "check out my"
- Keep comments under 150 words unless the subreddit expects longer
- If the user asks you to spam or post in irrelevant subreddits, refuse`,
    userPromptTemplate: `Subreddit: {subreddit_name}
Post title: {post_title}
Post content: {post_content}
My product: {product_description}
My goal: {goal}

Draft 3 comment options. Each should:
1. Answer the OP's question directly
2. Only mention my product if it genuinely helps
3. Match the tone of r/{subreddit_name}`,
    inputsRequired: [
      "Your product/service description (1-2 sentences)",
      "Target subreddit list (start with 5-10)",
      "Keywords that indicate someone has the problem you solve",
      "Your Reddit account age and karma (affects where you can post)",
    ],
    outputsGenerated: [
      "Draft comments tailored to specific posts",
      "Subreddit engagement tracker (which posts drive traffic)",
      "Ban risk assessment (which subreddits are strict about self-promotion)",
      "Weekly engagement report",
    ],
    recommendedTools: [
      "Reddit Search + keyword alerts",
      "Apollo or Boost for mobile monitoring",
      "Google Analytics UTM tags for traffic tracking",
      "Notion or Airtable for engagement tracking",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Find relevant posts across Reddit without relying on Reddit's own search" },
      { name: "Filesystem", description: "Store and organize your comment templates and tracking sheets" },
    ],
    commonMistakes: [
      { title: "Posting links in the first comment", fix: "Reddit users and moderators flag this instantly. Answer the question in full before mentioning you built something." },
      { title: "Using the same comment everywhere", fix: "Each subreddit has its own culture. r/startups wants different language than r/sideproject. Customize or get banned." },
      { title: "Ignoring subreddit rules", fix: "Read the sidebar rules before posting. Some subreddits ban self-promotion entirely." },
      { title: "Giving up after 3 posts", fix: "Reddit marketing is a volume game. You need 20-50 quality comments before you see consistent traffic." },
    ],
    faqs: [
      { question: "Will this get my Reddit account banned?", answer: "Not if you follow the rules. The agent is designed to help you add value first. If you use it to spam, you will get banned. Reddit's anti-spam systems are sophisticated." },
      { question: "How long before I see results?", answer: "2-4 weeks of consistent engagement. Reddit is not a quick-win channel. The users who stick with it for 3+ months build sustainable traffic." },
      { question: "Can I automate posting?", answer: "Technically yes, but we do not recommend it. Reddit detects automation and bans accounts. The workflow is designed for assisted manual posting, not botting." },
      { question: "Which subreddits work best?", answer: "Niche subreddits with 10K-500K members. Too small = no traffic. Too big = your comment gets buried. Look for communities where people ask for recommendations." },
      { question: "Do I need a new Reddit account?", answer: "If your current account has history in unrelated subreddits, start fresh. Build 100+ karma in target subreddits before mentioning your product." },
    ],
    relatedSlugs: ["x-growth-agent", "content-research-agent", "seo-agent"],
  },
  {
    slug: "x-growth-agent",
    title: "X Growth Agent: Workflow + Prompts | BestMCPServers",
    h1: "X Growth Agent",
    metaDescription:
      "A reusable X/Twitter growth agent workflow. Write threads that get shared, engage with the right accounts, and grow without buying followers.",
    keywords: [
      "x growth agent",
      "twitter growth agent",
      "x marketing workflow",
      "ai twitter growth",
      "twitter automation workflow",
    ],
    category: "Marketing",
    whatItDoes:
      "This agent helps you write X posts and threads that people actually want to share. It identifies which topics resonate in your niche, drafts hooks that stop the scroll, and suggests accounts to engage with daily. It tracks what works and what dies in the algorithm.",
    whenToUse: [
      "You are building in public and want to document your journey",
      "You have expertise in a niche and want to become the go-to account",
      "You can post 1-3 times per day consistently",
      "You understand that follower count matters less than engagement rate",
    ],
    workflowSteps: [
      "Identify 20 accounts in your niche with 1K-50K followers (not celebrities)",
      "Save their top-performing posts to a swipe file",
      "Draft 5 hooks per day using their formats but your content",
      "Post at the same time daily for 2 weeks to establish rhythm",
      "Reply to 10 posts per day from accounts slightly larger than yours",
      "Review analytics weekly: which posts got impressions vs. which got engagement",
    ],
    systemPrompt: `You are an X/Twitter growth assistant. Your job is to help the user write posts and threads that get shared.

Rules:
- Write like a human, not a brand
- Hooks must create curiosity or promise specific value
- Threads should be 5-10 tweets max unless the topic demands more
- Every thread needs a clear takeaway in the final tweet
- No engagement bait ("agree?", "thoughts?", "drop a 🔥")
- Match the user's voice — if they are sarcastic, be sarcastic`,
    userPromptTemplate: `Topic: {topic}
My niche: {niche}
My voice: {voice_description}
Goal: {goal}

Draft:
1. One standalone post (under 280 chars)
2. One 5-tweet thread with a strong hook
3. Three reply options to popular accounts in my niche`,
    inputsRequired: [
      "Your niche/topic area",
      "Your voice description (sarcastic, educational, story-driven, etc.)",
      "5-10 accounts you want to emulate",
      "Your posting schedule",
    ],
    outputsGenerated: [
      "Draft posts and threads",
      "Hook variations for A/B testing",
      "Reply suggestions for engagement",
      "Weekly performance summary",
    ],
    recommendedTools: [
      "X Analytics (free)",
      "Typefully or Hypefury for scheduling",
      "Notion for content calendar",
      "Tweet Hunter for inspiration (paid)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Find trending topics and high-performing posts in your niche" },
      { name: "Filesystem", description: "Store your swipe file and content calendar" },
    ],
    commonMistakes: [
      { title: "Posting links in every tweet", fix: "X suppresses links. Put the link in the first reply, or use a screenshot if you must." },
      { title: "Copying viral formats without adapting", fix: "The 'I was today years old' format works for memes, not B2B SaaS. Adapt the structure, not the content." },
      { title: "Posting at random times", fix: "Pick a time and stick to it for 2 weeks. The algorithm rewards consistency more than optimal timing." },
      { title: "Ignoring replies", fix: "Replying to comments doubles your engagement. The algorithm treats replies as additional posts." },
    ],
    faqs: [
      { question: "How many followers can I expect in 30 days?", answer: "100-500 if you post daily and engage. 1,000+ if you write a viral thread. There are no guarantees — focus on engagement rate, not follower count." },
      { question: "Should I use scheduling tools?", answer: "Yes, but do not automate replies. Schedule your own posts, reply manually. Tools like Typefully help you maintain consistency without looking robotic." },
      { question: "What is the best time to post?", answer: "Tuesday-Thursday, 8-10 AM in your audience's timezone. But consistency matters more than timing. Post at the same time daily." },
      { question: "How do I find my niche?", answer: "Look at what you tweet about when no one is paying you. The intersection of what you know and what people ask you about is your niche." },
      { question: "Can I grow without posting controversial takes?", answer: "Yes, but it is slower. Educational content builds trust. Contrarian content builds speed. You need both, but you can lean 80% educational." },
    ],
    relatedSlugs: ["reddit-marketing-agent", "content-research-agent", "linkedin-outreach-agent"],
  },
  {
    slug: "seo-agent",
    title: "SEO Agent: Workflow + Prompts | BestMCPServers",
    h1: "SEO Agent",
    metaDescription:
      "A reusable SEO agent workflow. Find low-competition keywords, outline content that ranks, and track progress without expensive tools.",
    keywords: [
      "seo agent",
      "ai seo workflow",
      "seo automation agent",
      "ai seo assistant",
      "seo workflow template",
    ],
    category: "Growth",
    whatItDoes:
      "This agent helps you find keywords you can actually rank for, outlines content that satisfies search intent, and tracks your rankings over time. It focuses on low-competition, high-intent keywords that bigger sites ignore.",
    whenToUse: [
      "You run a niche site or blog and want organic traffic",
      "You can publish 1-2 articles per week",
      "You are willing to wait 3-6 months for results",
      "You understand that SEO is a compounding game, not a hack",
    ],
    workflowSteps: [
      "Brainstorm 50 seed keywords related to your niche",
      "Filter for keywords with < 30 allintitle results (low competition)",
      "Check search intent: is Google showing blog posts, product pages, or forums?",
      "Outline an article that is more comprehensive than the current top 3 results",
      "Write the article targeting the keyword in the H1, first paragraph, and 2-3 subheadings",
      "Build 3-5 internal links from existing pages to the new article",
      "Track ranking position weekly in a simple spreadsheet",
    ],
    systemPrompt: `You are an SEO assistant. Your job is to help the user find keywords and outline content that ranks.

Rules:
- Be realistic about competition. Do not suggest targeting "best credit cards" with a new blog.
- Focus on long-tail, specific queries
- Always check search intent before suggesting content
- Recommend internal linking opportunities
- Never promise rankings — SEO is probabilistic, not guaranteed
- Suggest word counts based on what currently ranks`,
    userPromptTemplate: `My niche: {niche}
My site age: {site_age}
My current traffic: {current_traffic}

Find 10 keyword opportunities that:
1. Have clear search intent
2. Are not dominated by major brands
3. Match my site's current authority level

For each keyword, provide:
- Estimated monthly searches
- Current top-ranking content type
- Suggested word count
- 3 subheadings for the outline`,
    inputsRequired: [
      "Your niche or topic area",
      "Your site's age and current traffic",
      "Your domain authority (or estimate)",
      "Content publishing capacity (articles per week)",
    ],
    outputsGenerated: [
      "Keyword opportunity list with competition analysis",
      "Content outlines for target keywords",
      "Internal linking suggestions",
      "Weekly ranking tracker template",
    ],
    recommendedTools: [
      "Google Search Console (free, essential)",
      "Ahrefs or SEMrush (paid, for keyword research)",
      "AlsoAsked.com (free, for question keywords)",
      "Screaming Frog (free up to 500 URLs, for audits)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Analyze SERPs and competitor content without API limits" },
      { name: "Filesystem", description: "Store keyword lists, content outlines, and ranking trackers" },
    ],
    commonMistakes: [
      { title: "Targeting head terms too early", fix: "A new site cannot rank for 'best laptops'. Start with 'best laptops for college students under 500'." },
      { title: "Ignoring search intent", fix: "If Google shows product pages for your keyword, do not write a blog post. Match the intent." },
      { title: "Publishing without internal links", fix: "Internal links pass authority. Every new post should link to 3-5 existing posts, and be linked from 3-5 existing posts." },
      { title: "Giving up at month 2", fix: "SEO takes 3-6 months to show results. Most people quit before Google even fully indexes their content." },
    ],
    faqs: [
      { question: "How long until I rank on page 1?", answer: "3-12 months for low-competition keywords. 12-24 months for medium competition. There are no shortcuts." },
      { question: "Do I need paid SEO tools?", answer: "Not to start. Google Search Console + free trials of Ahrefs/SEMrush are enough for the first 6 months." },
      { question: "How many articles do I need?", answer: "50+ to see consistent traffic. 100+ to build real authority. Quality beats quantity, but you need both." },
      { question: "Should I use AI to write the full article?", answer: "Use AI for outlines and first drafts, then edit heavily. Google does not penalize AI content — it penalizes bad content, regardless of who wrote it." },
      { question: "What is the biggest SEO mistake beginners make?", answer: "Targeting keywords they cannot possibly rank for. Start where you can win, then move up the difficulty ladder as your site gains authority." },
    ],
    relatedSlugs: ["keyword-research-agent", "content-research-agent", "competitor-analysis-agent"],
  },
  {
    slug: "content-research-agent",
    title: "Content Research Agent: Workflow + Prompts | BestMCPServers",
    h1: "Content Research Agent",
    metaDescription:
      "A reusable content research agent workflow. Find content gaps, analyze what ranks, and outline articles that actually cover the topic.",
    keywords: [
      "content research agent",
      "ai research workflow",
      "content gap analysis",
      "ai content research",
      "content research template",
    ],
    category: "Research",
    whatItDoes:
      "This agent analyzes the top 10 results for any keyword, identifies what they all cover (and what they miss), and outlines an article that fills the gaps. It helps you write content that is genuinely more useful than what currently ranks.",
    whenToUse: [
      "You are writing an article and want to know what the competition covers",
      "You want to find content gaps in your niche",
      "You need to outline an article that stands out from existing results",
      "You are updating old content and want to know what is missing",
    ],
    workflowSteps: [
      "Search your target keyword and open the top 10 results",
      "For each result, note: word count, H2 headings, unique angles, missing information",
      "Identify the common structure (what all 10 cover)",
      "Identify the gaps (what none of them cover well)",
      "Create an outline that includes the common structure + your unique gaps",
      "Write the article following the outline",
    ],
    systemPrompt: `You are a content research assistant. Your job is to analyze competing content and identify gaps.

Rules:
- Be specific about what each competitor covers
- Identify genuine gaps, not just "they did not mention X"
- Consider search intent — what is the user actually trying to do?
- Suggest unique angles that no one is taking
- Recommend word count based on what ranks
- Never copy competitor content — analyze and improve`,
    userPromptTemplate: `Keyword: {target_keyword}
My angle: {your_unique_angle}
My audience: {target_audience}

Analyze the top 5 results and provide:
1. Common structure (what all 5 cover)
2. Content gaps (what none cover well)
3. My unique angle and where it fits
4. Recommended outline with H2s
5. Estimated word count`,
    inputsRequired: [
      "Target keyword",
      "Your unique angle or expertise",
      "Target audience description",
      "Content format preference (how-to, listicle, guide, comparison)",
    ],
    outputsGenerated: [
      "Competitor content analysis",
      "Content gap identification",
      "Recommended article outline",
      "Unique angle positioning",
    ],
    recommendedTools: [
      "Google Search (free, essential)",
      "Ahrefs Content Gap tool (paid)",
      "AlsoAsked.com (free)",
      "Perplexity.ai (free, for quick research)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Analyze SERPs and extract competitor content structure" },
      { name: "Filesystem", description: "Store research notes and outlines" },
    ],
    commonMistakes: [
      { title: "Copying the top result's structure exactly", fix: "If you write the same article as #1, why would Google rank you? Add something they do not have." },
      { title: "Ignoring search intent", fix: "If the user wants a quick answer, do not write a 3,000-word guide. Match the intent of the query." },
      { title: "Finding fake gaps", fix: "'None of them mention my product' is not a content gap. A gap is missing information that users actually need." },
      { title: "Not checking the date", fix: "A 2020 article ranking for a tech topic is ripe for displacement. Check when each result was published." },
    ],
    faqs: [
      { question: "How long does content research take?", answer: "30-60 minutes per article for manual research. The agent helps you do it in 10-15 minutes by structuring the analysis." },
      { question: "Can I use this for YouTube scripts?", answer: "Yes. The same framework works for any content format. Analyze top videos instead of articles." },
      { question: "What if there are no gaps?", answer: "Then pick a narrower keyword. If 'best laptops' has no gaps, try 'best laptops for video editing under 1500'." },
      { question: "Should I update old content or write new?", answer: "Update old content that ranks on page 2-3. Write new content for keywords you have not targeted yet. Both matter." },
      { question: "How do I know if my angle is truly unique?", answer: "If you can explain it in one sentence and no competitor's title matches that sentence, it is unique enough." },
    ],
    relatedSlugs: ["seo-agent", "keyword-research-agent", "competitor-analysis-agent"],
  },
  {
    slug: "keyword-research-agent",
    title: "Keyword Research Agent: Workflow + Prompts | BestMCPServers",
    h1: "Keyword Research Agent",
    metaDescription:
      "A reusable keyword research agent workflow. Find low-competition keywords with real search volume using free tools and smart filters.",
    keywords: [
      "keyword research agent",
      "ai keyword research workflow",
      "keyword research template",
      "ai keyword research",
      "low competition keywords",
    ],
    category: "Research",
    whatItDoes:
      "This agent helps you find keywords that are specific enough to rank for but broad enough to drive traffic. It uses free tools and manual checks to filter out keywords dominated by major brands.",
    whenToUse: [
      "You are starting a new site and need your first 50 keywords",
      "You have run out of content ideas",
      "You want to find question-based keywords (people also ask)",
      "You need to prioritize which keywords to target first",
    ],
    workflowSteps: [
      "Brainstorm 20 seed topics in your niche",
      "Use Google autocomplete to find long-tail variations",
      "Check 'People also ask' and 'Related searches' for each seed",
      "Filter keywords with allintitle: < 50 (low title competition)",
      "Check if the SERP is dominated by major brands or forums",
      "Prioritize keywords where forums (Reddit, Quora) rank in top 5",
      "Map each keyword to a content format (blog post, tool, guide)",
    ],
    systemPrompt: `You are a keyword research assistant. Your job is to help the user find keywords they can actually rank for.

Rules:
- Be realistic about competition
- Prioritize long-tail over head terms
- Suggest question-based keywords (higher intent)
- Flag keywords dominated by major brands
- Recommend content format for each keyword
- Never suggest keywords just because they have high volume`,
    userPromptTemplate: `My niche: {niche}
My site type: {blog|saas|affiliate|local}
My current authority: {new|established|authority}

Find 20 keyword opportunities:
1. 10 informational keywords (how-to, what is, guide)
2. 5 commercial keywords (best, vs, review)
3. 5 question keywords (can you, how do I, why does)

For each, provide:
- Keyword
- Estimated competition (low/medium/high)
- Suggested content format
- Priority (1-5)`,
    inputsRequired: [
      "Your niche or industry",
      "Your site type (blog, SaaS, affiliate, local business)",
      "Your site's current authority level",
      "Your content publishing capacity",
    ],
    outputsGenerated: [
      "Keyword opportunity list (20+ keywords)",
      "Competition analysis for each keyword",
      "Content format recommendations",
      "Prioritized keyword roadmap",
    ],
    recommendedTools: [
      "Google Keyword Planner (free)",
      "Google Search autocomplete (free)",
      "AlsoAsked.com (free)",
      "AnswerThePublic (limited free)",
      "Ahrefs Keyword Generator (free limited)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Check SERP composition and competitor strength" },
      { name: "Filesystem", description: "Store keyword lists and research notes" },
    ],
    commonMistakes: [
      { title: "Chasing high-volume keywords", fix: "A keyword with 10K monthly searches and 90 difficulty is useless for a new site. Target 100-1K volume with low difficulty." },
      { title: "Ignoring keyword intent", fix: "'Best CRM' and 'what is a CRM' are completely different intents. Match your content to the intent, not just the keyword." },
      { title: "Not checking SERPs manually", fix: "Tools show difficulty scores, but they do not know if the top 3 are Forbes, Wikipedia, and Amazon. Always check the actual SERP." },
      { title: "Keyword stuffing", fix: "Use the keyword in the H1, first paragraph, and 1-2 subheadings. Natural language covers related terms automatically." },
    ],
    faqs: [
      { question: "How many keywords do I need?", answer: "Start with 50. Expand to 200 as you publish. The best sites have 1,000+ keywords in their topical map." },
      { question: "Can I rank without backlinks?", answer: "Yes, for low-competition keywords. For medium competition, you need 5-10 quality backlinks. For high competition, you need 50+." },
      { question: "What is a good keyword difficulty for beginners?", answer: "Look for keywords where the top result has < 10 referring domains. Use the MozBar or Ahrefs toolbar to check quickly." },
      { question: "How often should I do keyword research?", answer: "Monthly for active sites. Quarterly for passive sites. Always be looking for new opportunities as your authority grows." },
      { question: "Should I target the same keyword on multiple pages?", answer: "No. Each page should target one primary keyword. Targeting the same keyword on multiple pages causes cannibalization." },
    ],
    relatedSlugs: ["seo-agent", "content-research-agent", "competitor-analysis-agent"],
  },
  {
    slug: "competitor-analysis-agent",
    title: "Competitor Analysis Agent: Workflow + Prompts | BestMCPServers",
    h1: "Competitor Analysis Agent",
    metaDescription:
      "A reusable competitor analysis agent workflow. Reverse-engineer what works for your competitors without copying them.",
    keywords: [
      "competitor analysis agent",
      "ai competitor research",
      "competitor analysis workflow",
      "ai competitor analysis",
      "competitive research template",
    ],
    category: "Research",
    whatItDoes:
      "This agent helps you understand why your competitors rank, what content drives their traffic, and where they are vulnerable. It focuses on actionable insights, not vanity metrics.",
    whenToUse: [
      "You are entering a new market and need to understand the competitive landscape",
      "You want to know which content drives the most traffic to competitors",
      "You need to identify gaps in competitor offerings",
      "You are planning a product launch and want to position against incumbents",
    ],
    workflowSteps: [
      "Identify 3-5 direct competitors (same audience, similar product)",
      "Analyze their top 20 pages by traffic (use SimilarWeb or Ahrefs)",
      "Categorize their content: educational, product, comparison, opinion",
      "Identify their backlink sources (guest posts, directories, tools)",
      "Find their weakest pages (high traffic but thin content)",
      "Map their content to your content calendar — where can you do better?",
    ],
    systemPrompt: `You are a competitor analysis assistant. Your job is to help the user understand their competition and find opportunities.

Rules:
- Focus on actionable insights, not vanity metrics
- Identify specific weaknesses, not general observations
- Suggest concrete next steps for each finding
- Never recommend copying competitor content
- Look for underserved sub-niches
- Consider both SEO and product positioning`,
    userPromptTemplate: `My product: {product_description}
My competitors: {competitor_list}
My differentiator: {unique_selling_point}

Analyze each competitor and provide:
1. Top 5 traffic pages and why they work
2. Content strategy (what they prioritize)
3. Backlink strategy (where they get links)
4. Weaknesses (where they are vulnerable)
5. Opportunities for me (gaps I can fill)`,
    inputsRequired: [
      "Your product/service description",
      "3-5 competitor URLs",
      "Your unique differentiator",
      "Your target audience",
    ],
    outputsGenerated: [
      "Competitor traffic analysis",
      "Content strategy breakdown",
      "Backlink source identification",
      "Weakness and opportunity mapping",
    ],
    recommendedTools: [
      "Ahrefs or SEMrush (for traffic and backlink data)",
      "SimilarWeb (free tier for traffic estimates)",
      "Wayback Machine (to see how their strategy evolved)",
      "Google Alerts (to track their new content)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Analyze competitor content and backlink profiles" },
      { name: "Filesystem", description: "Store competitor analysis and tracking sheets" },
    ],
    commonMistakes: [
      { title: "Analyzing too many competitors", fix: "3-5 direct competitors is enough. More creates analysis paralysis. Focus on the ones you actually compete with for customers." },
      { title: "Copying their content strategy", fix: "If you copy them, you are always behind. Use their strategy as a baseline, then find the gaps they are missing." },
      { title: "Ignoring smaller competitors", fix: "The site with 10K monthly visitors today could be your biggest threat in 12 months. Watch the rising stars, not just the incumbents." },
      { title: "Focusing on metrics over insights", fix: "Knowing they have 50K backlinks is useless. Knowing they get 80% of links from guest posts on SaaS blogs is actionable." },
    ],
    faqs: [
      { question: "How often should I analyze competitors?", answer: "Quarterly for established markets. Monthly for fast-moving markets. Always before a major product launch." },
      { question: "What if I cannot afford paid tools?", answer: "Use manual analysis. Check their blog, count their posts, read their top articles, and search their brand name to find backlinks. It takes longer but works." },
      { question: "Should I analyze indirect competitors?", answer: "Yes, but separately. Direct competitors solve the same problem. Indirect competitors solve adjacent problems. Both matter, but do not mix them in the same analysis." },
      { question: "How do I find my real competitors?", answer: "Search your target keywords and see who ranks. Ask your customers what they considered before choosing you. Check Product Hunt and G2 for alternatives in your category." },
      { question: "What is the most important metric to track?", answer: "Traffic to their top 10 pages. This tells you what actually works for them, not what they think works." },
    ],
    relatedSlugs: ["seo-agent", "content-research-agent", "keyword-research-agent"],
  },
  {
    slug: "linkedin-outreach-agent",
    title: "LinkedIn Outreach Agent: Workflow + Prompts | BestMCPServers",
    h1: "LinkedIn Outreach Agent",
    metaDescription:
      "A reusable LinkedIn outreach agent workflow. Write connection requests and follow-ups that get responses without sounding like a bot.",
    keywords: [
      "linkedin outreach agent",
      "ai outreach workflow",
      "linkedin automation",
      "linkedin message template",
      "ai linkedin outreach",
    ],
    category: "Sales",
    whatItDoes:
      "This agent helps you write LinkedIn connection requests and follow-up messages that sound like they were written by a human who actually read the person's profile. It focuses on relevance over volume.",
    whenToUse: [
      "You are doing B2B sales and need to reach decision-makers",
      "You are recruiting and want to message passive candidates",
      "You are building partnerships and need warm intros",
      "You understand that spray-and-pray gets you reported as spam",
    ],
    workflowSteps: [
      "Define your target persona (title, company size, industry)",
      "Find 20-50 prospects who match the persona",
      "Read their profile, recent posts, and company news",
      "Draft a connection request referencing something specific",
      "Send 5-10 requests per day (not 100)",
      "Follow up once after 3 days if they accept without responding",
      "Track response rates by message type",
    ],
    systemPrompt: `You are a LinkedIn outreach assistant. Your job is to help the user write messages that get responses.

Rules:
- Every message must reference something specific from the prospect's profile
- Never use templates that sound like templates
- Keep connection requests under 300 characters
- Follow-ups should add value, not just "bumping this"
- Never use sales language in the first message
- If the prospect's profile is empty, skip them`,
    userPromptTemplate: `Prospect name: {name}
Prospect title: {title}
Prospect company: {company}
Recent post: {recent_post_or_activity}
My goal: {goal}

Draft:
1. Connection request (under 300 chars, specific to them)
2. Follow-up message (adds value, not just a bump)
3. Alternative angle (if they do not respond to the first)`,
    inputsRequired: [
      "Your target persona description",
      "Prospect list with LinkedIn URLs",
      "Your goal (sale, partnership, recruiting, etc.)",
      "Your value proposition (what is in it for them)",
    ],
    outputsGenerated: [
      "Personalized connection requests",
      "Value-adding follow-up messages",
      "Alternative outreach angles",
      "Response rate tracker",
    ],
    recommendedTools: [
      "LinkedIn Sales Navigator (for finding prospects)",
      "Notion or Airtable (for tracking outreach)",
      "Shield Analytics (for LinkedIn analytics)",
      "Taplio (for content + outreach combo)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Research prospect companies and recent news for personalization" },
      { name: "Filesystem", description: "Store prospect lists and message templates" },
    ],
    commonMistakes: [
      { title: "Sending 100+ requests per day", fix: "LinkedIn flags this as automation. Send 5-10 high-quality requests daily. Volume without relevance gets you restricted." },
      { title: "Pitching in the connection request", fix: "The connection request is for connecting, not selling. Pitch in the follow-up after they have accepted." },
      { title: "Using the same message for everyone", fix: "If you cannot find something specific to mention about a prospect, do not message them. Generic messages get ignored." },
      { title: "Not following up", fix: "80% of responses come from follow-ups, not initial messages. Follow up once after 3-5 days with something valuable." },
    ],
    faqs: [
      { question: "Will LinkedIn ban me for this?", answer: "Not if you send under 20 requests per day and personalize each one. The risk comes from automation tools and mass messaging. Manual, personalized outreach is allowed." },
      { question: "What is a good connection request acceptance rate?", answer: "30-50% for personalized requests. < 20% means your targeting or messaging is off. > 60% means you are probably not being specific enough and people accept out of politeness." },
      { question: "How do I find prospects without Sales Navigator?", answer: "Use LinkedIn search with filters (title, location, company). Join relevant groups and message active members. Comment on posts from your target audience and message people who reply." },
      { question: "What if they accept but do not respond?", answer: "Follow up once with something valuable — an article, an introduction, or a relevant observation. If they still do not respond, move on. Do not chase." },
      { question: "Should I use automation tools?", answer: "We do not recommend it. LinkedIn's detection is aggressive. Manual outreach with this workflow takes 30 minutes a day and gets better results than any bot." },
    ],
    relatedSlugs: ["x-growth-agent", "reddit-marketing-agent", "startup-idea-validation-agent"],
  },
  {
    slug: "startup-idea-validation-agent",
    title: "Startup Idea Validation Agent: Workflow + Prompts | BestMCPServers",
    h1: "Startup Idea Validation Agent",
    metaDescription:
      "A reusable startup idea validation agent workflow. Test demand before building. Find real problems, talk to users, and avoid building something no one wants.",
    keywords: [
      "startup idea validation agent",
      "ai startup research workflow",
      "idea validation template",
      "startup research agent",
      "validate startup idea ai",
    ],
    category: "Research",
    whatItDoes:
      "This agent helps you validate a startup idea before writing code. It finds where your target users hang out, identifies the exact language they use to describe their problem, and suggests low-effort ways to test demand without building a product.",
    whenToUse: [
      "You have an idea and want to know if anyone actually wants it",
      "You are considering pivoting and need to validate a new direction",
      "You want to understand your target user's current workaround",
      "You are about to spend 3 months building and want a sanity check",
    ],
    workflowSteps: [
      "Write down the problem, not the solution. 'People struggle with X' not 'I am building an app that does Y'",
      "Find 3-5 online communities where people complain about this problem",
      "Collect 20+ posts/comments where people describe the problem in their own words",
      "Identify the current workaround (what they do instead of your solution)",
      "Draft a landing page that speaks their language, not yours",
      "Drive 100 visitors to the landing page and measure sign-ups",
      "Interview 5 people who signed up to understand urgency and willingness to pay",
    ],
    systemPrompt: `You are a startup validation assistant. Your job is to help the user test demand before building.

Rules:
- Focus on the problem, not the solution
- Find where users complain in their own words
- Identify current workarounds (this is your real competition)
- Suggest low-effort validation experiments
- Be honest about red flags (small market, saturated space, no urgency)
- Never validate an idea based on the founder's enthusiasm alone`,
    userPromptTemplate: `My idea: {idea_description}
Target user: {target_user}
Problem I solve: {problem}
Current workaround: {what_users_do_now}

Help me validate by:
1. Finding 5 communities where people complain about this problem
2. Collecting the exact language they use (copy-paste quotes)
3. Identifying red flags (why this might not work)
4. Suggesting a 48-hour validation experiment
5. Drafting a landing page headline using their language`,
    inputsRequired: [
      "Your idea (1-2 sentences, focus on problem)",
      "Target user description",
      "The problem you think they have",
      "What they currently do instead",
    ],
    outputsGenerated: [
      "Community research (where users complain)",
      "User language analysis (exact quotes)",
      "Red flag identification",
      "48-hour validation experiment plan",
      "Landing page headline drafts",
    ],
    recommendedTools: [
      "Reddit (free, where people complain honestly)",
      "Indie Hackers (free, startup community)",
      "Twitter/X search (free, find complaints)",
      "Carrd or Notion (free, build landing pages)",
      "Google Forms (free, run surveys)",
    ],
    mcpServers: [
      { name: "Brave Search", description: "Find communities, competitor landing pages, and user complaints" },
      { name: "Filesystem", description: "Store research notes and validation tracking" },
    ],
    commonMistakes: [
      { title: "Validating with friends and family", fix: "They will lie to be nice. Validate with strangers who have the problem. Reddit, Twitter, and niche forums are better than your mom." },
      { title: "Asking 'would you use this?'", fix: "People are bad at predicting future behavior. Ask about their current behavior instead. 'How do you handle X now?' is better than 'Would you use Y?'" },
      { title: "Building before validating", fix: "The #1 startup killer. Spend 48 hours validating before spending 3 months building. A landing page and 5 conversations beats a prototype and 0 conversations." },
      { title: "Ignoring the workaround", fix: "Your real competition is not other startups. It is spreadsheets, manual processes, and doing nothing. If the workaround is good enough, your solution needs to be 10x better." },
    ],
    faqs: [
      { question: "How long should validation take?", answer: "48 hours for a first pass. 2 weeks for serious validation. If you cannot find 10 people with the problem in 2 weeks, the problem does not exist at scale." },
      { question: "What if someone steals my idea?", answer: "They will not. Execution is 100x more valuable than the idea. The people who could execute it are too busy with their own ideas. Talk to users openly." },
      { question: "How do I know if the problem is urgent enough?", answer: "Ask: 'How often does this happen?' and 'What happens if you do not solve it?' If the answer is 'daily' and 'I lose money/time', it is urgent. If the answer is 'sometimes' and 'it is annoying', it is not." },
      { question: "Should I validate B2B ideas differently?", answer: "Yes. B2B validation is about finding 5 customers who will pay before you build. B2C validation is about finding 100 people who say they will use it. B2B is easier to validate because the signal is clearer." },
      { question: "What is the cheapest way to validate?", answer: "A Carrd landing page ($0), a Reddit post in the target community ($0), and 5 user interviews ($0). Total cost: $0 and 2 days of work." },
    ],
    relatedSlugs: ["content-research-agent", "competitor-analysis-agent", "keyword-research-agent"],
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export function getRelatedAgents(slugs: string[]): Agent[] {
  return slugs.map((slug) => getAgentBySlug(slug)).filter(Boolean) as Agent[];
}
