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
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useRef, useEffect } from "react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import shadcn/ui components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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


// Mobile menu accordion item component
const MobileNavItem = ({ href, label, hasDropdown, children }) => {
  const t = useTranslations("products");
  
  if (hasDropdown) {
    return (
      <AccordionItem value={href} className="border-b-0">
        <AccordionTrigger className="py-3 px-4 hover:bg-gray-50 rounded-md text-left [&[data-state=open]>svg]:rotate-180">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{label}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-0 pt-2">
          <div className="space-y-1 ps-4">
            {PRODUCTS.map((category, index) => (
              <div key={index} className="space-y-1">
                <h4 className="font-medium text-primary-900 text-sm py-1">
                  {category.category}
                </h4>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 py-1.5 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
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
    );
  }

  return (
    <Link
      href={href}
      className="block py-3 px-4 font-semibold text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const NAV_LINKS = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/works", label: t("works") },
    { href: "/prices", label: t("pricing") },
    { href: "/products", label: t("products"), hasDropdown: true },
    { href: "/blogs", label: t("articles") },
  ];

  // Close dropdown with delay
  useEffect(() => {
    // Only run this effect when isProductsHovered is true
    if (!isProductsHovered) return;
    
    let timeoutId;
    const dropdownElement = dropdownRef.current;
    
    const handleMouseLeave = () => {
      // Set a timeout before closing the dropdown
      timeoutId = setTimeout(() => {
        setIsProductsHovered(false);
      }, 500); // 500ms delay before closing
    };
    
    const handleMouseEnter = () => {
      // Clear the timeout if user hovers back into the dropdown
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
    
    const handleClickOutside = (event) => {
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        setIsProductsHovered(false);
      }
    };
    
    if (dropdownElement) {
      dropdownElement.addEventListener('mouseleave', handleMouseLeave);
      dropdownElement.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener('mouseleave', handleMouseLeave);
        dropdownElement.removeEventListener('mouseenter', handleMouseEnter);
      }
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isProductsHovered]); 

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
              onMouseLeave={() => {
                // Don't close immediately, let the dropdown's own handler manage the delay
                if (!dropdownRef.current?.matches(':hover')) {
                  // The dropdown's mouseleave handler will handle the delay
                }
              }}
            >
              <Link
                href={href}
                className=" font-semibold capitalize transition-all duration-300 hover:text-primary-800 flex items-center gap-1"
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="fixed left-0 right-0 mt-6 w-[70%] mx-auto bg-primary-800 shadow-xl rounded-xl p-6 z-50"
                      onMouseEnter={() => setIsProductsHovered(true)}
                      onMouseLeave={() => setIsProductsHovered(false)}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {PRODUCTS.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-white mb-2 ">
                              {category.category}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="block px-3 py-1.5 text-sm text-white cursor-pointer   transition-colors"
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
            <SheetContent side={locale === "ar" ? "right" : "left"} className="overflow-auto ">
              <SheetHeader>
                <SheetTitle className=""></SheetTitle>
              </SheetHeader>
              <nav className="mt-4">
                <Accordion type="single" collapsible className="w-full space-y-1">
                  {NAV_LINKS.map(({ href, label, hasDropdown }) => (
                    <MobileNavItem 
                      key={href}
                      href={href}
                      label={label}
                      hasDropdown={hasDropdown}
                    />
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



