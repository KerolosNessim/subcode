
import * as motion from "motion/react-client"
import { getLocale, getTranslations } from "next-intl/server"
import BlogSlider from '../shared/blog-slider'
import DynamicLinkDark from '../shared/dynamic-link-dark'
import SectionHeader from '../shared/section-header'
import { getData } from "@/services/fetch-data"
const BlogsSection =async  () => {
  const t = await getTranslations("blogs") 
  let blogs = []
  const res = await getData({
    url:"/all-blog"
  })
  if (res?.code == 200) {
    blogs = res?.data?.data
  }
  else {
    blogs = []
  }
  return (
    blogs?.length > 0 &&
    <div className="pt-20 lg:space-y-8 space-y-6 container bg-[url('/images/hero-bg.svg')] bg-center bg-contain bg-no-repeat">
      <SectionHeader title={t("title")} disc={t("description")} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <BlogSlider blogs={blogs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <DynamicLinkDark href='/blogs' withIcon className={"mx-auto"}>{t("more")}</DynamicLinkDark>
      </motion.div>
    </div>
  )
}

export default BlogsSection
