import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function resolveImageSrc(src, fallback = null) {
  const value = typeof src === "string" ? src.trim() : src;
  if (value) return value;

  const fallbackValue =
    typeof fallback === "string" ? fallback.trim() : fallback;
  if (fallbackValue) return fallbackValue;

  return null;
}
