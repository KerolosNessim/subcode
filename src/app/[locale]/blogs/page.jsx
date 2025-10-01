import BlogsSection from '@/components/home/blogs-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import SectionHeader from '@/components/shared/section-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLocale } from 'next-intl'
import React from 'react'
import * as motion from "motion/react-client"
import BlogSlider from '@/components/shared/blog-slider'
import BlogGrid from '@/components/shared/blog-grid'
const BlogsPage = () => {
  const locale = useLocale()
  const tabStyle = "py-3 px-4 data-[state=active]:bg-primary-800 data-[state=active]:text-white data-[state=active]:rounded-full max-md:data-[state=active]:rounded-2xl"
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat space-y-16">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'المقالات' }]} />
        </div>
        {/* section header  */}
        <div className='container'>
          <SectionHeader title='المقالات' disc={"هنا ستجد مقالات متخصصة تقدم لك استراتيجيات، أفكار، وأدوات حديثة تساعدك على مواكبة التغيرات، التميز عن منافسيك"} />
        </div>
        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container'>
          <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="all" className="w-full space-y-12">
            <TabsList className="bg-[#EBEBEB] mx-auto text-gray-100 h-fit  p-2 md:rounded-full rounded-3xl max-md:flex-wrap">
              <TabsTrigger value="all" className={tabStyle}>الكل</TabsTrigger>
              <TabsTrigger value="web" className={tabStyle}>مواقع إلكترونية</TabsTrigger>
              <TabsTrigger value="store" className={tabStyle}>متاجر إلكترونية</TabsTrigger>
              <TabsTrigger value="app" className={tabStyle}>تطبيقات</TabsTrigger>
              <TabsTrigger value="markting" className={tabStyle}>تسويق إلكتروني</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <BlogsLayout />
            </TabsContent>
            <TabsContent value="web">
              <BlogsLayout />
            </TabsContent>
            <TabsContent value="store">
              <BlogsLayout />
            </TabsContent>
            <TabsContent value="app">
              <BlogsLayout />
            </TabsContent>
            <TabsContent value="markting">
              <BlogsLayout />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </main>
  )
}

export default BlogsPage


const BlogsLayout = () => {
  return (
    <>
      <div className='md:hidden'>
        <BlogSlider />
      </div>
      <div className='max-md:hidden'>
        <BlogGrid />
      </div>
    </>
  )
}
