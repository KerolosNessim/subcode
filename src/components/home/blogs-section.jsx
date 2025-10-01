"use client"
import { motion } from "framer-motion"
import { useLocale } from 'next-intl'
import BlogSlider from '../shared/blog-slider'
import DynamicLinkDark from '../shared/dynamic-link-dark'
import SectionHeader from '../shared/section-header'
const BlogsSection = () => {
  const locale = useLocale()
  return (
    <div className="pt-20 lg:space-y-8 space-y-6 container bg-[url('/images/hero-bg.svg')] bg-center bg-contain bg-no-repeat">
      <SectionHeader title='المقالات' disc={"هنا ستجد مقالات متخصصة تقدم لك استراتيجيات، أفكار، وأدوات حديثة تساعدك على مواكبة التغيرات، التميز عن منافسيك"} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <BlogSlider />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <DynamicLinkDark href='/blogs' withIcon className={"mx-auto"}>تصفح المقالات</DynamicLinkDark>
      </motion.div>
    </div>
  )
}

export default BlogsSection
