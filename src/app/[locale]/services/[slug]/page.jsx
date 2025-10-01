import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import BlogCrd from '@/components/shared/blog-card'
import { useLocale } from 'next-intl'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { LiaHandshake } from "react-icons/lia";
import SectionHeader from '@/components/shared/section-header'
import WorkGrid from '@/components/shared/work-grid'
import WorkSlider from '@/components/shared/work-slider'

const SinglrServicePage = () => {
  const locale = useLocale()
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')]  ">
        {/* breadcrumbs */}
        <div className=' container mb-10'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'خدماتنا', href: '/services' }, { label: 'البرمجيات وتطوير الأنظمة' }]} />
        </div>
        <div className='space-y-20'>
          {/* single service section  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='container flex items-center justify-between max-lg:flex-col-reverse'>
            {/* content  */}
            <div className='lg:w-1/3 w-full space-y-4'>
              <h3 className='lg:text-xl font-semibold text-primary-800'>خدماتنا</h3>
              <h2 className='lg:text-5xl md:text-3xl text-2xl font-bold leading-relaxed'>البرمجيات وتطوير الأنظمة</h2>
              <p className='text-gray-200 leading-8 text-sm'>
                نقدّم لك حلول برمجة متكاملة لإنشاء موقع إلكتروني احترافي، مصمم بعناية ليتناسب مع طبيعة نشاطك التجاري ويواكب أحدث المعايير التقنية. نهتم بتقديم تجربة مستخدم سلسة، تصميم متجاوب مع جميع الأجهزة، وأداء عالي يضمن سرعة التصفح وكفاءة الاستخدام.
              </p>
            </div>
            {/* image */}
            <div className='lg:w-1/2 w-full relative py-12 z-1'>
              <Image src="/images/waves-circle.svg" width={600} height={600} alt="victor" className='lg:size-60 md:size-40 size-28  object-contain absolute top-0 end-0 -z-1' />
              <Image src="/images/Laptop.svg" width={600} height={600} alt="victor" className='w-full' />
            </div>
          </motion.div>
          {/* featuers */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='container space-y-8'>
            <h3 className="text-center text-2xl md:text-3xl font-bold text-white py-1.5 bg-gradient-to-l from-[#4F7E92B2]/80 to-70% to-[#16536E]/80 lg:w-3/4 mx-auto">
              ليش تختارنا شريكك في تطوير البرمجيات والحلول الرقمية المتكاملة؟
            </h3>
            <Carousel
              opts={{
                loop: true, direction: locale === "ar" ? "rtl" : "ltr",
                align: "start"
              }}>
              <CarouselContent className={""}>
                <CarouselItem className={"basis-[80%] md:basis-[45%] lg:basis-1/4 py-4 pl-6"}>
                  <div className="group space-y-4 text-center border-2 border-primary-800 rounded-xl p-10 bg-white text-primary-800 hover:text-white cursor-pointer  hover:bg-[linear-gradient(to_bottom,#104F6A,#14688BB2),url('/images/card-pattern.svg')] ">
                    <AiOutlineThunderbolt className='text-5xl mx-auto' />
                    <h3 className='text-xl font-bold'>سرعة التنفيذ</h3>
                    <p className='text-gray-200 group-hover:text-white text-lg leading-8 '>نلتزم بمواعيد التسليم لنساعدك تبدأ وتنافس في السوق بسرعة</p>
                  </div>
                </CarouselItem>
                <CarouselItem className={"basis-[80%] md:basis-[45%] lg:basis-1/4 py-4 pl-6"}>
                  <div className="group space-y-4 text-center border-2 border-primary-800 rounded-xl p-10 bg-white text-primary-800 hover:text-white cursor-pointer  hover:bg-[linear-gradient(to_bottom,#104F6A,#14688BB2),url('/images/card-pattern.svg')] ">
                    <IoSettingsOutline className='text-5xl mx-auto' />
                    <h3 className='text-xl font-bold'>حلول مخصصة</h3>
                    <p className='text-gray-200 group-hover:text-white text-lg leading-8 '>نركز على توفير تجربة سلسة للمستخدمين لضمان سرعة التبني</p>
                  </div>
                </CarouselItem>
                <CarouselItem className={"basis-[80%] md:basis-[45%] lg:basis-1/4 py-4 pl-6"}>
                  <div className="group space-y-4 text-center border-2 border-primary-800 rounded-xl p-10 bg-white text-primary-800 hover:text-white cursor-pointer  hover:bg-[linear-gradient(to_bottom,#104F6A,#14688BB2),url('/images/card-pattern.svg')] ">
                    <FiLock className='text-5xl mx-auto' />
                    <h3 className='text-xl font-bold'>أمان عالي</h3>
                    <p className='text-gray-200 group-hover:text-white text-lg leading-8 '>نركز على توفير تجربة سلسة للمستخدمين لضمان سرعة التبني</p>
                  </div>
                </CarouselItem>
                <CarouselItem className={"basis-[80%] md:basis-[45%] lg:basis-1/4 py-4 pl-6"}>
                  <div className="group space-y-4 text-center border-2 border-primary-800 rounded-xl p-10 bg-white text-primary-800 hover:text-white cursor-pointer  hover:bg-[linear-gradient(to_bottom,#104F6A,#14688BB2),url('/images/card-pattern.svg')] ">
                    <LiaHandshake className='text-5xl mx-auto' />
                    <h3 className='text-xl font-bold'>دعم مستمر</h3>
                    <p className='text-gray-200 group-hover:text-white text-lg leading-8 '>نركز على توفير تجربة سلسة للمستخدمين لضمان سرعة التبني</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>

          {/* related works */}
          <div className='space-y-12' >
            <SectionHeader title='أعمالنا السابقة في تطوير البرمجيات' disc={"في كل مشروع برمجي نفذه فريقنا، كنا نركز على تقديم حلول تقنية مبتكرة تُسهم في نمو عملائنا، وتحقق لهم حضور رقمي قوي"} />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='container max-md:hidden'>
              <WorkGrid />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='container md:hidden'>
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SinglrServicePage
