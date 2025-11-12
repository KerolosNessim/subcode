"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

export default function FloatingSocials({ social }) {
  const [open, setOpen] = useState(false);

  // خريطة الأيقونات لكل منصة
  const iconMap = {
    facebook: { icon: <FaFacebook className="text-blue-600" />, name: "فيسبوك" },
    twitter: { icon: <FaTwitter className="text-sky-500" />, name: "تويتر" },
    instagram: { icon: <FaInstagram className="text-pink-500" />, name: "انستجرام" },
    linkedin: { icon: <FaLinkedin className="text-blue-700" />, name: "لينكدإن" },
    youtube: { icon: <FaYoutube className="text-red-600" />, name: "يوتيوب" },
    tiktok: { icon: <FaTiktok className="text-black" />, name: "تيك توك" },
    telegram: { icon: <FaTelegram className="text-blue-400" />, name: "تليجرام" },
    whatsapp: { icon: <FaWhatsapp className="text-green-500" />, name: "واتساب" },
  };

  // نعمل مصفوفة من الروابط الموجودة فقط
  const socials = Object.entries(social || {}).filter(
    ([, value]) => value && value.trim() !== ""
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center gap-1">
        <AnimatePresence>
          {open &&
            socials.map(([key, link], i) => {
              const data = iconMap[key];
              if (!data) return null;

              let href = link;
              if (key === "whatsapp") href = `https://wa.me/${link.replace(/[^0-9]/g, "")}`;
              if (key === "telegram" && link.startsWith("@"))
                href = `https://t.me/${link.substring(1)}`;

              return (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white shadow-lg rounded-full size-14 border border-main-green/50 flex items-center justify-center hover:scale-110 transition-transform"
                  title={data.name}
                >
                  {data.icon}
                </motion.a>
              );
            })}
        </AnimatePresence>

        {/* الزر الرئيسي */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary-800 text-white size-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {open ? <FaTimes /> : <FaPlus />}
        </button>
      </div>
    </div>
  );
}
