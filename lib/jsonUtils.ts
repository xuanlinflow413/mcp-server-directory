export function formatJson(json: string): string {
  const parsed = JSON.parse(json);
  return JSON.stringify(parsed, null, 2);
}

export function minifyJson(json: string): string {
  const parsed = JSON.parse(json);
  return JSON.stringify(parsed);
}

export function validateJson(json: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(json);
    return { valid: true };
  } catch (e: unknown) {
    const err = e as Error;
    return { valid: false, error: err.message };
  }
}

export const SAMPLE_JSON = `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "isActive": true,
  "roles": ["admin", "editor"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  }
}`;
