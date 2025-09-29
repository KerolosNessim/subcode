import React, { use } from 'react'
import SectionHeader from '../shared/section-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocale } from 'next-intl'
import WorkCard from '../shared/work-card'
import WorkSlider from '../shared/work-slider'
import * as motion from "motion/react-client"
const WorksSection = () => {
  const locale = useLocale()
  const tabStyle = "py-3 px-4 data-[state=active]:bg-primary-800 data-[state=active]:text-white data-[state=active]:rounded-full max-md:data-[state=active]:rounded-2xl"
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='container py-16 space-y-12'>
      <SectionHeader title='أعمالنا' disc="في كل مشروع ننفذه، نركز على تقديم حلول مبتكرة تساعدك على النمو وتحقيق حضور رقمي قوي يميزك عن منافسيك" />
      <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="all" className="w-full space-y-12">
        <TabsList className="bg-[#EBEBEB] mx-auto text-gray-100 h-fit  p-2 md:rounded-full rounded-3xl max-md:flex-wrap">
          <TabsTrigger value="all" className={tabStyle}>الكل</TabsTrigger>
          <TabsTrigger value="web" className={tabStyle}>مواقع إلكترونية</TabsTrigger>
          <TabsTrigger value="store" className={tabStyle}>متاجر إلكترونية</TabsTrigger>
          <TabsTrigger value="app" className={tabStyle}>تطبيقات</TabsTrigger>
          <TabsTrigger value="markting" className={tabStyle}>تسويق إلكتروني</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <WorkSlider />
        </TabsContent>
        <TabsContent value="web">
          <WorkSlider/>
        </TabsContent>
        <TabsContent value="store">
          <WorkSlider/>
        </TabsContent>
        <TabsContent value="app">
          <WorkSlider/>
        </TabsContent>
        <TabsContent value="markting">
          <WorkSlider/>
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}

export default WorksSection
