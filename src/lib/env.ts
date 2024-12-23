// Environment variable helper for browser environment
export function getClientEnv(key: string): string {
  // Use a type assertion since we know these are string values
  const env = (import.meta.env as Record<string, string>);
  const value = env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}