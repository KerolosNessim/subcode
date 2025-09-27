"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import ReactCountryFlag from "react-country-flag";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale) => {
    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = newLocale; // أول segment هو اللغة
      router.push(segments.join("/"));
    });
  };

  return (
    <Select
      dir={locale === "ar" ? "rtl" : "ltr"}
      onValueChange={handleChange}
      defaultValue={locale}
      disabled={isPending}
    >
      <SelectTrigger
        iconColor={"text-primary-900"}
        className="w-fit text-base !h-10 rounded-full bg-[#14688B4D] text-primary-900 font-semibold hover:bg-main-navy transition-all duration-300"
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar" className="flex items-center gap-2">
          <ReactCountryFlag countryCode="SA" svg className="rounded-full object-cover" />
          <span>العربية</span>
        </SelectItem>
        <SelectItem value="en" className="flex items-center gap-2">
          <ReactCountryFlag countryCode="US" svg className="rounded-full object-cover" />
          <span>English</span>
        </SelectItem>
        <SelectItem value="tr" className="flex items-center gap-2">
          <ReactCountryFlag countryCode="TR" svg className="rounded-full object-cover" />
          <span>Türkçe</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
