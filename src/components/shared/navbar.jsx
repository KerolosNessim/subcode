"use client";
import { Link } from "@/i18n/navigation";
import { FiMenu } from "react-icons/fi";
import LocaleSwitcher from "./locale-switcher";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "next-intl";
import React, { useState, useRef, useEffect } from "react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

// Products data
const PRODUCTS = [
  {
    category: "البرمجيات",
    items: [
      { name: "برامج إدارية", href: "/products/erp" },
      { name: "مواقع إلكترونية", href: "/products/websites" },
      { name: "تطبيقات موبايل", href: "/products/mobile-apps" },
    ],
  },
  {
    category: "التصميم",
    items: [
      { name: "شعارات", href: "/products/logos" },
      { name: "هويات بصرية", href: "/products/branding" },
      { name: "تصميم واجهات", href: "/products/ui-ux" },
    ],
  },
  {
    category: "التسويق",
    items: [
      { name: "إدارة وسائل التواصل", href: "/products/social-media" },
      { name: "إعلانات ممولة", href: "/products/ads" },
      { name: "تحسين محركات البحث", href: "/products/seo" },
    ],
  },
];

// Navigation links configuration
const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/works", label: "اعمالنا" },
  { href: "/prices", label: "الاسعار" },
  { href: "/products", label: "منتجاتنا", hasDropdown: true },
  { href: "/blogs", label: "المقالات" },
];

// Re-usable accordion component
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

const Navbar = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProductsHovered(false);
  };

  return (
    <framerMotion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center md:top-12 md:gap-4"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center justify-center size-16 bg-black md:rounded-full"
        aria-label="Home"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain size-10 max-md:flex-shrink-0"
          priority
        />
      </Link>

      {/* Main Navigation */}
      <div className="flex items-center justify-end w-full h-16 px-6 bg-white md:justify-center md:w-fit md:rounded-full shadow-xl gap-4">
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label, hasDropdown }) => (
            <li
              key={href}
              className="relative"
              onMouseEnter={() => hasDropdown && setIsProductsHovered(true)}
              onMouseLeave={() => !dropdownRef.current?.matches(':hover') && setIsProductsHovered(false)}
            >
              <Link
                href={href}
                className="text-sm font-semibold capitalize transition-all duration-300 hover:text-primary-800 flex items-center gap-1"
              >
                {label}
                {hasDropdown && (
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Products Dropdown */}
              {hasDropdown && (
                <AnimatePresence>
                  {isProductsHovered && (
                    <framerMotion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 mt-6 w-[70%] mx-auto bg-white shadow-xl rounded-xl p-6 z-50"
                      onMouseEnter={() => setIsProductsHovered(true)}
                      onMouseLeave={() => setIsProductsHovered(false)}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {PRODUCTS.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-primary-900 mb-2 ">
                              {category.category}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="block px-3 py-1.5 text-sm text-gray-700 cursor-pointer   transition-colors"
                                    onClick={handleLinkClick}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </framerMotion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Locale Switcher */}
        <div >
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu Button with Sheet */}
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="flex items-center justify-center w-10 h-10 font-semibold transition-all duration-300 rounded-full text-primary-900 bg-[#14688B4D]"
                aria-label="Open menu"
              >
                <FiMenu size={18} />
              </button>
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "right" : "left"} className="overflow-auto">
              <SheetHeader>
                <SheetTitle className=""></SheetTitle>
              </SheetHeader>
              <nav className="mt-4">
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {NAV_LINKS.map(({ href, label, hasDropdown }) => (
                    <div key={href} className="w-full">
                      {hasDropdown ? (
                        <AccordionItem value={href}>
                          <AccordionTrigger className="text-sm font-semibold capitalize py-3 px-4 hover:bg-gray-50 rounded-md w-full ">
                            {label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 ps-4">
                              {PRODUCTS.map((category, index) => (
                                <div key={index} className="space-y-1">
                                  <h4 className="font-medium text-primary-900 ">
                                    {category.category}
                                  </h4>
                                  <ul className="space-y-1 mt-1">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                          href={item.href}
                                          className="block py-1.5 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md  transition-colors"
                                          onClick={handleLinkClick}
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          href={href}
                          onClick={handleLinkClick}
                          className="block w-full py-3 px-4 text-sm font-semibold capitalize transition-all duration-300 hover:bg-gray-50 rounded-md "
                        >
                          {label}
                        </Link>
                      )}
                    </div>
                  ))}
                </Accordion>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </framerMotion.nav>
  )
};

export default Navbar;