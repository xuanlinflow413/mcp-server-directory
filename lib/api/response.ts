export type ApiMeta = {
  tool: string;
  version: string;
};

export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type ApiSuccess<T extends Record<string, unknown>> = {
  success: true;
  data: T;
  meta: ApiMeta;
};

export type ApiFailure = {
  success: false;
  error: ApiError;
  meta: ApiMeta;
};

export function ok<T extends Record<string, unknown>>(data: T, tool: string): ApiSuccess<T> {
  return {
    success: true,
    data,
    meta: {
      tool,
      version: "1.0.0",
    },
  };
}

export function fail(
  code: string,
  message: string,
  tool: string,
  details?: Record<string, unknown>
): ApiFailure {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details ? { details } : {}),
    },
    meta: {
      tool,
      version: "1.0.0",
    },
  };
}

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export function optionsResponse(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
