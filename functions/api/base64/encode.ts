import { fail, jsonResponse, ok, optionsResponse } from "../../../lib/api/response";
import { parseContentRequest, RequestValidationError } from "../../../lib/api/request";
import { encodeBase64 } from "../../../lib/tools/base64";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context: { request: Request }) {
  const tool = "base64.encode";

  try {
    const body = await context.request.json();
    const { content } = parseContentRequest(body);
    return jsonResponse(ok({ encoded: encodeBase64(content) }, tool));
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return jsonResponse(fail(error.code, error.message, tool), error.status);
    }

    return jsonResponse(fail("INVALID_REQUEST", "Request body must be valid JSON.", tool), 400);
  }
}

export async function onRequest() {
  return jsonResponse(fail("METHOD_NOT_ALLOWED", "Use POST for this endpoint.", "base64.encode"), 405);
}
