import { fail, jsonResponse, ok, optionsResponse } from "../../../lib/api/response";
import { parseContentRequest, RequestValidationError } from "../../../lib/api/request";
import { decodeJwt } from "../../../lib/tools/jwt";

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context: { request: Request }) {
  const tool = "jwt.decode";

  try {
    const body = await context.request.json();
    const { content } = parseContentRequest(body);
    return jsonResponse(ok(decodeJwt(content), tool));
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return jsonResponse(fail(error.code, error.message, tool), error.status);
    }

    return jsonResponse(
      fail("INVALID_JWT", error instanceof Error ? error.message : "The provided content is not a valid JWT.", tool),
      400
    );
  }
}

export async function onRequest() {
  return jsonResponse(fail("METHOD_NOT_ALLOWED", "Use POST for this endpoint.", "jwt.decode"), 405);
}
