import { fail, jsonResponse, ok, optionsResponse } from "../../../lib/api/response";
import { parseContentRequest, RequestValidationError } from "../../../lib/api/request";
import { decodeBase64 } from "../../../lib/tools/base64";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context: { request: Request }) {
  const tool = "base64.decode";

  try {
    const body = await context.request.json();
    const { content } = parseContentRequest(body);
    return jsonResponse(ok({ decoded: decodeBase64(content) }, tool));
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return jsonResponse(fail(error.code, error.message, tool), error.status);
    }

    return jsonResponse(
      fail("INVALID_BASE64", "The provided content is not valid Base64.", tool, {
        message: error instanceof Error ? error.message : "Invalid Base64",
      }),
      400
    );
  }
}

export async function onRequest() {
  return jsonResponse(fail("METHOD_NOT_ALLOWED", "Use POST for this endpoint.", "base64.decode"), 405);
}
