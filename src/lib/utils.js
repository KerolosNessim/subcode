import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function normalizeImageValue(image) {
  if (typeof image === "string") return image.trim();

  if (image && typeof image === "object") {
    if (typeof image.url === "string") return image.url.trim();
    if (typeof image.src === "string") return image.src.trim();
  }

  return image;
}

export function resolveImageSrc(src, fallback = null) {
  const value = normalizeImageValue(src);
  if (value) return value;

  const fallbackValue = normalizeImageValue(fallback);
  if (fallbackValue) return fallbackValue;

  return null;
}
