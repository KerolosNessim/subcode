import BlogsSection from '@/components/home/blogs-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import SectionHeader from '@/components/shared/section-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLocale } from 'next-intl'
import React from 'react'
import * as motion from "motion/react-client"
import BlogSlider from '@/components/shared/blog-slider'
import BlogGrid from '@/components/shared/blog-grid'
import { getLocale, getTranslations } from 'next-intl/server'
import { getData } from '@/services/fetch-data'
const BlogsPage =async () => {
  const locale =await getLocale()
  const tabStyle = "py-3 px-4 data-[state=active]:bg-primary-800 data-[state=active]:text-white data-[state=active]:rounded-full max-md:data-[state=active]:rounded-2xl"
  const b = await getTranslations();
  const t = await getTranslations("blogs");
  let blogs = []
  const res = await getData({
    url:"/category-with-blogs"
  })
  if (res?.code == 200) {
    blogs = res?.data?.data
  }
  else{
    blogs = []
  }
  
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat space-y-16">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: b('navigation.home'), href: '/' }, { label: b('navigation.articles') }]} />
        </div>
        {/* section header  */}
        <div className='container'>
          <SectionHeader title={b('navigation.articles')} disc={t('description')} />
        </div>
        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container'>
          <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue={blogs?.[0]?.slug} className="w-full space-y-12">
            <TabsList className="bg-[#EBEBEB] mx-auto text-gray-100 h-fit  p-2 md:rounded-full rounded-3xl max-md:flex-wrap">
              {blogs?.map((item) => (
                <TabsTrigger key={item?.id} value={item?.slug} className={tabStyle}>{item?.name}</TabsTrigger>
              ))}
            </TabsList>
            {blogs?.map((item) => (
              <TabsContent key={item?.id} value={item?.slug}>
                <BlogsLayout blogs={item?.blogs} />
              </TabsContent>
            ))}

          </Tabs>
        </motion.div>
      </div>
    </main>
  )
}

export default BlogsPage


const BlogsLayout = ({blogs}) => {
  return (
    <>
      <div className='md:hidden'>
        <BlogSlider blogs={blogs} />
      </div>
      <div className='max-md:hidden'>
        <BlogGrid blogs={blogs} />
      </div>
    </>
  )
}
