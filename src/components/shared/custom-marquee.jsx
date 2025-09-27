import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { GiStarShuriken } from "react-icons/gi";

const CustomMarquee = () => {
  const items = [
    "سهل الاستخدام",
    "سهولة الوصول",
    "دعم متواصل",
    "سرعة عالية",
  ];

  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="overflow-hidden whitespace-nowrap bg-gradient-to-l from-[#4F7E92B2] to-50% to-[#16536E] -skew-y-1"
    >
      <Marquee autoFill={true} pauseOnHover={true} speed={70} >
        {[...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="py-2 px-2 min-w-max text-white font-bold flex items-center gap-4"
          >
            <GiStarShuriken size={20} />
            <span>{text}</span>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default CustomMarquee;
