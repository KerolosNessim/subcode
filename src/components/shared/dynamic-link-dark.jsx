"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const DynamicLinkDark = ({ href = "#", children, className, external = false, withIcon=false }) => {
  const baseClasses =
    "group text-white lg:text-base text-sm bg-primary-800 border border-primary-800 lg:py-3 lg:px-9 py-2 px-6 rounded-md inline-block transition-all duration-700 hover:bg-white hover:text-primary-900 flex items-center justify-center gap-2 w-fit  hover:gap-3";
  const svgIcon = (
    <svg
      className="text-white group-hover:text-primary-900 group-hover:rotate-45 transition-all duration-700"
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7 1M1 7L7 13M1 7H11.5M17 7H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className)}
      >
        {children}
        {withIcon && svgIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClasses, className)}>
      {children}
      {withIcon && svgIcon}
    </Link>
  );
};

export default DynamicLinkDark;
