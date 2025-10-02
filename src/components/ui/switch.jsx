"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary-800 data-[state=unchecked]:bg-[#F1F2F9] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-8 w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 relative",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-6 rounded-full ring-0 transition-all data-[state=checked]:translatez-x-[calc(100%-2px)] data-[state=unchecked]:translatez-x-0 absolute data-[state=unchecked]:end-1 top-1/2 -translate-y-1/2   data-[state=checked]:end-[calc(100%-28px)]",
        )} />
    </SwitchPrimitive.Root>
  );
}

export { Switch }
