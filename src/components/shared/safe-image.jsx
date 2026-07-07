import Image from "next/image";
import { resolveImageSrc } from "@/lib/utils";

export default function SafeImage({ src, fallback, alt = "", ...props }) {
  const resolvedSrc = resolveImageSrc(src, fallback);
  const resolvedAlt =
    alt || (src && typeof src === "object" ? src.alt?.trim?.() : "") || "";

  if (!resolvedSrc) return null;

  return <Image src={resolvedSrc} alt={resolvedAlt} {...props} />;
}
