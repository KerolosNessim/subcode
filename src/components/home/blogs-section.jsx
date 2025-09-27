"use client"
import React from 'react'
import SectionHeader from '../shared/section-header'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useLocale } from 'next-intl'
import BlogCrd from '../shared/blog-card'
import DynamicLinkDark from '../shared/dynamic-link-dark'
import { motion } from "framer-motion"
const BlogsSection = () => {
  const locale = useLocale()
  return (
    <div className="pt-20 lg:space-y-8 space-y-6 container bg-[url('/images/hero-bg.svg')] bg-center bg-contain bg-no-repeat">
      <SectionHeader title='المدونة' disc={"هنا ستجد مقالات متخصصة تقدم لك استراتيجيات، أفكار، وأدوات حديثة تساعدك على مواكبة التغيرات، التميز عن منافسيك"} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr" }}>
          <CarouselContent className={""}>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i} className={"basis-[80%] md:basis-1/2 lg:basis-1/3 py-4 pl-6"}>
                <BlogCrd />
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
      <DynamicLinkDark href='#' withIcon className={"mx-auto"}>تصفح المقالات</DynamicLinkDark>
      </motion.div>
    </div>
  )
}

export default BlogsSection
