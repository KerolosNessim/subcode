"use client";
import { Link } from "@/i18n/navigation";
import * as motion from "motion/react-client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LocaleSwitcher from "./locale-switcher";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed md:top-12 top-0 right-0 left-0 z-50 flex items-center justify-center md:gap-4"
    >
      <Link href="/" className="size-16  md:rounded-full bg-black flex items-center justify-center">

        <Image src="/images/logo.png" alt="logo" width={100} height={100} className="object-contain size-10 max-md:flex-shrink-0" />
      </Link>
      <div
        className="md:w-fit w-full px-6   bg-[#FAFAFA] text-gray-100 md:rounded-full shadow-xl   flex items-center md:justify-center justify-end h-16 md:gap-8 gap-4"
      >
        {/* navs */}
        <ul
          className={`md:flex flex-col md:flex-row items-center gap-6 md:gap-8  absolute md:static bg-white-50 max-md:shadow-2xl md:bg-transparent w-full md:w-auto top-16  md:top-auto left-0 md:left-auto px-4 md:px-0 py-6 md:py-0 transition-all duration-300 ease-in-out  max-md:space-y-6 ${isMobileMenuOpen ? "block" : "hidden"
            }`}
        >
          <li>
            <Link
              href="/"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              خدماتنا
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              اعمالنا
            </Link>
          </li>
          <li>
            <Link
              href="/prices"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              الاسعار
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              منتجاتنا
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="capitalize font-semibold hover:text-primary-800 transition-all duration-300"
            >
              المقالات
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary-900 bg-[#14688B4D] font-semibold transition-all duration-300 size-10 rounded-full  flex items-center justify-center"
            >
              {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
    </motion.nav>
  );
}

export default Navbar;