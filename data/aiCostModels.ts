export type ModelPrice = {
  id: string;
  name: string;
  provider: string;
  inputPrice: number;
  outputPrice: number;
};

export const modelPrices: ModelPrice[] = [
  { id: "gpt-5", name: "GPT-5", provider: "OpenAI", inputPrice: 1.25, outputPrice: 10 },
  { id: "gpt-5-mini", name: "GPT-5 Mini", provider: "OpenAI", inputPrice: 0.25, outputPrice: 2 },
  { id: "claude-sonnet", name: "Claude Sonnet", provider: "Anthropic", inputPrice: 3, outputPrice: 15 },
  { id: "claude-opus", name: "Claude Opus", provider: "Anthropic", inputPrice: 15, outputPrice: 75 },
  { id: "gemini-2-5-pro", name: "Gemini 2.5 Pro", provider: "Google", inputPrice: 1.25, outputPrice: 10 },
  { id: "deepseek", name: "DeepSeek", provider: "DeepSeek", inputPrice: 0.27, outputPrice: 1.1 },
  { id: "kimi", name: "Kimi", provider: "Moonshot AI", inputPrice: 0.6, outputPrice: 2.5 },
];
