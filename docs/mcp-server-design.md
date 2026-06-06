# BestMCPServers MCP Server Design

## Goal
Expose BestMCPServers developer utilities as AI-callable tools for Claude, Cursor, OpenClaw, ChatGPT Actions, and future MCP clients.

## Current v0
- Public HTTP API on `https://bestmcpservers.com/api/*`
- OpenAPI spec at `/openapi.json` and `/openapi.yaml`
- No database, login, payment, or API key
- Rate limiting reserved for Cloudflare rules/KV later

## Tool Mapping
- `format_json` -> `POST /api/json/format`
- `validate_json` -> `POST /api/json/validate`
- `encode_base64` -> `POST /api/base64/encode`
- `decode_base64` -> `POST /api/base64/decode`
- `decode_jwt` -> `POST /api/jwt/decode`

## MCP Tool Schemas
All tools accept:

```json
{
  "type": "object",
  "required": ["content"],
  "properties": {
    "content": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100000
    }
  }
}
```

## Future Remote MCP Endpoint
Recommended endpoint:

```text
https://bestmcpservers.com/mcp
```

Transport:
- Streamable HTTP for remote clients
- Optional stdio wrapper package for local clients

## Roadmap
1. Public REST API + OpenAPI docs
2. Tool pages include API examples and operation IDs
3. Remote MCP endpoint that reuses `lib/tools/*`
4. Client setup guides for Claude, Cursor, ChatGPT, and OpenClaw
5. MCP Server Marketplace pages with hosted tool alternatives
6. Optional API keys, usage tiers, and rate-limit dashboard after demand validation
