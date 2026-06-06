export type ModelProvider = "OpenAI" | "Anthropic" | "Google" | "DeepSeek" | "Moonshot AI";

export type ModelPrice = {
  id: string;
  name: string;
  provider: ModelProvider;
  inputPrice: number;
  outputPrice: number;
  context?: string;
  notes?: string;
};

export const modelPrices: ModelPrice[] = [
  { id: "gpt-5", name: "GPT-5", provider: "OpenAI", inputPrice: 1.25, outputPrice: 10, context: "Flagship GPT model", notes: "Use for high-quality planning, coding, and agent workflows." },
  { id: "gpt-5-mini", name: "GPT-5 Mini", provider: "OpenAI", inputPrice: 0.25, outputPrice: 2, context: "Lower-cost GPT model", notes: "Good default for high-volume SaaS drafts, chat, and routing." },
  { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI", inputPrice: 2.5, outputPrice: 10, context: "Multimodal production model", notes: "Useful when legacy GPT-4o pricing assumptions are still in your model." },
  { id: "gpt-4o-mini", name: "GPT-4o Mini", provider: "OpenAI", inputPrice: 0.15, outputPrice: 0.6, context: "Efficient GPT-4o family model", notes: "Often used for inexpensive classification, extraction, and support flows." },
  { id: "claude-sonnet", name: "Claude Sonnet", provider: "Anthropic", inputPrice: 3, outputPrice: 15, context: "Balanced Claude model", notes: "Plan for coding assistants, research agents, and document workflows." },
  { id: "claude-opus", name: "Claude Opus", provider: "Anthropic", inputPrice: 15, outputPrice: 75, context: "Higher-reasoning Claude model", notes: "Use carefully when long outputs or high request volume can inflate spend." },
  { id: "claude-haiku", name: "Claude Haiku", provider: "Anthropic", inputPrice: 0.8, outputPrice: 4, context: "Fast lower-cost Claude model", notes: "Useful for routing, summarization, and lighter support tasks." },
  { id: "gemini-2-5-pro", name: "Gemini 2.5 Pro", provider: "Google", inputPrice: 1.25, outputPrice: 10, context: "Google AI pro model", notes: "Useful for long-context and multimodal planning assumptions." },
  { id: "gemini-2-5-flash", name: "Gemini 2.5 Flash", provider: "Google", inputPrice: 0.3, outputPrice: 2.5, context: "Efficient Gemini model", notes: "Useful for high-volume app flows where speed and cost matter." },
  { id: "deepseek", name: "DeepSeek", provider: "DeepSeek", inputPrice: 0.27, outputPrice: 1.1 },
  { id: "kimi", name: "Kimi", provider: "Moonshot AI", inputPrice: 0.6, outputPrice: 2.5 },
];

export function getModelsByProvider(provider: ModelProvider): ModelPrice[] {
  return modelPrices.filter((model) => model.provider === provider);
}

export function calculateModelCost(model: ModelPrice, inputTokens: number, outputTokens: number, dailyRequests: number) {
  const inputCost = (inputTokens * dailyRequests * model.inputPrice) / 1_000_000;
  const outputCost = (outputTokens * dailyRequests * model.outputPrice) / 1_000_000;
  const daily = inputCost + outputCost;
  return {
    daily,
    monthly: daily * 30,
    yearly: daily * 365,
    perThousandRequests: dailyRequests > 0 ? (daily / dailyRequests) * 1000 : 0,
  };
}
