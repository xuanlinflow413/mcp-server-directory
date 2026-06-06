export type RateLimitConfig = {
  enabled: boolean;
  windowMs: number;
  maxRequests: number;
  keyStrategy: "ip" | "apiKey" | "ipAndUserAgent";
};

export const rateLimitConfig: RateLimitConfig = {
  enabled: false,
  windowMs: 60_000,
  maxRequests: 60,
  keyStrategy: "ip",
};

export async function checkRateLimit() {
  return {
    limited: false,
    remaining: rateLimitConfig.maxRequests,
    resetMs: rateLimitConfig.windowMs,
  };
}
