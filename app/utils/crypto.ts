// /app/utils/crypto.ts
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from "node:crypto";
import invariant from "tiny-invariant";

const algorithm = "aes-256-ctr";
const secretKey = process.env.CRYPTO_SECRET_KEY;

if (!secretKey) {
  throw new Error("Missing secret key for encryption");
}

invariant(secretKey, "Missing secret key for encryption");
// At this point, TypeScript still thinks `secretKey` could be undefined. We assert it is a string.
const keyString = secretKey as string;

const iv = randomBytes(16);

export function encrypt(text: string): string {
  const key = scryptSync(keyString, "salt", 32);
  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decrypt(hash: string): string {
  const [ivHex, encryptedText] = hash.split(":");
  const key = scryptSync(keyString, "salt", 32);
  const decipher = createDecipheriv(algorithm, key, Buffer.from(ivHex, "hex"));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedText, "hex")), decipher.final()]);
  return decrypted.toString();
}
