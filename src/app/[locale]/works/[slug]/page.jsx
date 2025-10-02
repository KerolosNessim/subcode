import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import DynamicLink from '@/components/shared/dynamic-link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocale } from 'next-intl'
import { SlRocket } from "react-icons/sl";
import { GoLock } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import ClientSlider from '@/components/shared/client-slider'
import TechMarquee from '@/components/shared/tech-marquee'

const SingleWorkPage = () => {
  const locale = useLocale();
  const tabstyle = "data-[state=active]: shadow-none lg:px-6 px-4 text-lg text-gray-300  data-[state=active]:text-gray-100 "
  return (
    <main >
      <div className="md:pt-40 pt-30 pb-20 bg-[url('/images/hero-bg.svg')]  space-y-20">
        {/* breadcrumbs */}
        <div className=' container mb-10'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'أعمالنا', href: '/works' }, { label: 'تفاصيل العمل' }]} />
        </div>
        {/* works details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container flex items-center gap-8 max-lg:flex-col '>
          {/* image */}
          <Image src="/images/single-work.png" alt="work" width={300} height={300} className='block lg:w-1/2 w-full object-contain ' />
          {/* content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl  font-bold">اسم المشروع</h2>
            <p className="text-gray-200 leading-8 max-md:text-sm">وصف صغير للمشروع</p>
            <p className="text-gray-200 leading-8 max-md:text-sm lg:text-lg ">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
            {/* category and link */}
            <div className="flex items-end justify-between">
              {/* category */}
              <div >
                <p >التصنيف</p>
                <p className="text-gray-200 text-xs border border-gray-200/50 rounded-full py-2 px-4 w-fit">تصميم مواقع</p>
              </div>
              {/* link */}
              <DynamicLink href="#" external >
                زيارة الموقع
              </DynamicLink>
            </div>

          </div>
        </motion.div>
        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container '>
          <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="desc" className="w-full space-y-8">
            <TabsList className={"w-full rounded-none bg-transparent py-6 border-b-2 border-gray-400/30 justify-start"}>
              <TabsTrigger value="desc" className={tabstyle}>الوصف</TabsTrigger>
              <TabsTrigger value="adv" className={tabstyle}>المميزات</TabsTrigger>
              <TabsTrigger value="rev" className={tabstyle}>اراء العملاء</TabsTrigger>
            </TabsList>
            <TabsContent value="desc" className='space-y-8'>
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 * i }}
                  key={i}
                  className='space-y-4 '>
                  <h4 className="text-primary-800 font-bold lg:text-xl text-lg ">- نص تجريبي يمكن استبداله في هذه المساحة</h4>
                  <p className="text-gray-200 leading-8 max-md:text-sm">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
                </motion.div>
              ))}
            </TabsContent>
            <TabsContent value="adv" className='space-y-8'>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='space-y-4 '>
                <h4 className="text-primary-800 font-bold lg:text-xl text-lg flex items-center gap-2">- سهولة الاستخدام <SlRocket /></h4>
                <p className="text-gray-200 leading-8 max-md:text-sm">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 , delay:0.2}}
                className='space-y-4 '>
                <h4 className="text-primary-800 font-bold lg:text-xl text-lg flex items-center gap-2">- أمان وموثوقية <GoLock /></h4>
                <p className="text-gray-200 leading-8 max-md:text-sm">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 , delay:0.4}}
                className='space-y-4 '>
                <h4 className="text-primary-800 font-bold lg:text-xl text-lg flex items-center gap-2">- دعم وتحديثات مستمرة<IoSettingsOutline /></h4>
                <p className="text-gray-200 leading-8 max-md:text-sm">نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.نص تجريبي يمكن استبداله في هذه المساحة.</p>
              </motion.div>
            </TabsContent>
            <TabsContent value="rev">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >
                <ClientSlider />
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        {/* marquee */}
        <TechMarquee/>

      </div>
    </main>
  )
}

export default SingleWorkPage
