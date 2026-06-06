export function formatJson(content: string): string {
  const parsed = JSON.parse(content);
  return JSON.stringify(parsed, null, 2);
}

export function validateJson(content: string):
  | { valid: true; parsed: unknown }
  | { valid: false; error: { message: string } } {
  try {
    return {
      valid: true,
      parsed: JSON.parse(content),
    };
  } catch (error) {
    return {
      valid: false,
      error: {
        message: error instanceof Error ? error.message : "Invalid JSON",
      },
    };
  }
}
