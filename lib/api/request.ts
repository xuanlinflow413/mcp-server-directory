const MAX_CONTENT_LENGTH = 100_000;

export type ContentRequest = {
  content: string;
};

export function parseContentRequest(body: unknown): ContentRequest {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new RequestValidationError("INVALID_REQUEST", "Request body must be a JSON object.");
  }

  const content = (body as { content?: unknown }).content;

  if (typeof content !== "string") {
    throw new RequestValidationError("INVALID_REQUEST", "content must be a string.");
  }

  if (content.trim().length === 0) {
    throw new RequestValidationError("EMPTY_CONTENT", "content must not be empty.");
  }

  if (content.length > MAX_CONTENT_LENGTH) {
    throw new RequestValidationError("CONTENT_TOO_LARGE", "content must be 100,000 characters or less.", 413);
  }

  return { content };
}

export class RequestValidationError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status = 400) {
    super(message);
    this.name = "RequestValidationError";
    this.code = code;
    this.status = status;
  }
}
