import { decodeBase64 } from "./base64";

function decodeBase64Url(input: string): string {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "="
  );
  return decodeBase64(padded);
}

export type DecodedJwt = {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
  claims: {
    exp: unknown | null;
    iat: unknown | null;
    nbf: unknown | null;
  };
  verified: false;
  warning: string;
};

export function decodeJwt(content: string): DecodedJwt {
  const parts = content.trim().split(".");

  if (parts.length !== 3) {
    throw new Error("JWT must contain three dot-separated parts.");
  }

  const [headerPart, payloadPart, signature] = parts;

  if (!headerPart || !payloadPart || !signature) {
    throw new Error("JWT header, payload, and signature must not be empty.");
  }

  const header = JSON.parse(decodeBase64Url(headerPart)) as Record<string, unknown>;
  const payload = JSON.parse(decodeBase64Url(payloadPart)) as Record<string, unknown>;

  return {
    header,
    payload,
    signature,
    claims: {
      exp: payload.exp ?? null,
      iat: payload.iat ?? null,
      nbf: payload.nbf ?? null,
    },
    verified: false,
    warning: "This endpoint only decodes JWTs. It does not verify the signature.",
  };
}
