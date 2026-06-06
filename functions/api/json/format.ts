import { fail, jsonResponse, ok, optionsResponse } from "../../../lib/api/response";
import { parseContentRequest, RequestValidationError } from "../../../lib/api/request";
import { formatJson } from "../../../lib/tools/json";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context: { request: Request }) {
  const tool = "json.format";

  try {
    const body = await context.request.json();
    const { content } = parseContentRequest(body);
    return jsonResponse(ok({ formatted: formatJson(content) }, tool));
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return jsonResponse(fail(error.code, error.message, tool), error.status);
    }

    return jsonResponse(
      fail("INVALID_JSON", "The provided content is not valid JSON.", tool, {
        message: error instanceof Error ? error.message : "Invalid JSON",
      }),
      400
    );
  }
}

export async function onRequest() {
  return jsonResponse(fail("METHOD_NOT_ALLOWED", "Use POST for this endpoint.", "json.format"), 405);
}
