function bytesToBinary(bytes: Uint8Array): string {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }
  return binary;
}

function binaryToBytes(binary: string): Uint8Array {
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export function encodeBase64(content: string): string {
  return btoa(bytesToBinary(new TextEncoder().encode(content)));
}

export function decodeBase64(content: string): string {
  const normalized = content.trim();

  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(normalized) || normalized.length % 4 === 1) {
    throw new Error("The provided content is not valid Base64.");
  }

  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(binaryToBytes(atob(normalized)));
  } catch {
    throw new Error("The provided content is not valid Base64.");
  }
}
