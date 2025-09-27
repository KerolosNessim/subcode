"use client";


import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const DynamicLink = ({ href, children, className, external = false }) => {
  const baseClasses =
    "group border border-primary-800 text-primary-900 lg:text-base text-sm bg-white lg:py-3 lg:px-9 py-2 px-6 rounded-md flex items-center justify-center gap-2 w-fit hover:bg-primary-800 hover:text-white hover:gap-3 transition-all duration-700";

  const svgIcon = (
    <svg
      className="text-primary-900 group-hover:text-white group-hover:rotate-45 transition-all duration-700"
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
        {svgIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClasses, className)}>
      {children}
      {svgIcon}
    </Link>
  );
};

export default DynamicLink;
