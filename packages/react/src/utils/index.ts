export const noop = () => undefined;

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomString(length: number = 8): string {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
export function range(
  min: number,
  max: number,
  step: number = 1
): Array<number> {
  return Array.from({ length: max - min + step }, (_, i) => i + min);
}
