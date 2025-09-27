"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Counters = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // يشتغل مرة واحدة بس
        }
      },
      { threshold: 0.3 } // 30% من العنصر لازم يظهر
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counters = [
    { number: 660, label: "مشروع" },
    { number: 120, label: "عميل" },
    { number: 15, label: "سنة خبرة" },
    { number: 50, label: "جائزة" },
  ];

  return (
    <div className="lg:w-[60%] mx-auto max-lg:container" ref={sectionRef}>
      <h3 className="text-center text-2xl md:text-3xl font-bold text-white py-1.5 bg-gradient-to-l from-[#4F7E92B2]/80 to-70% to-[#16536E]/80">
        شاهد النجاح: أرقام النجاح, نمو حقيقي!
      </h3>
      <p className="text-gray-300 text-center text-xl mt-4">
        إكتشف أثرنا وكيف يدفع نتائج ملموسة للشركات
      </p>

      {/* counters */}
      <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-8 gap-4 mt-4 place-items-center ">
        {counters.map((counter, i) => (
          <motion.div
            initial={{ opacity: 0, y:-10, x:-10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 }}
            key={i} className="flex items-center gap-4">
            <Image
              src="/images/counter.svg"
              alt="counter"
              width={100}
              height={100}
              className="lg:size-16 size-12 object-contain"
            />
            <div>
              <p className="text-center lg:text-5xl text-3xl font-bold text-primary-700">
                {startCount ? (
                  <CountUp end={counter.number} duration={2} />
                ) : (
                  0
                )}
              </p>
              <p className="text-primary-800 text-center">{counter.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counters;
