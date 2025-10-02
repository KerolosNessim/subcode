import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import PricesSection from '@/components/shared/prices-section'
import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import DynamicLink from '@/components/shared/dynamic-link'
import { FiInfo } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";

const PricesPage = () => {
  return (
    <main >
      <div className="md:pt-40 pt-30  bg-[url('/images/hero-bg.svg')] space-y-20 ">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'الاسعار' }]} />
        </div>
        {/* prices section */}
        <PricesSection />
        {/* banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container my-20 bg-[#051a22] bg-[url("/images/card-pattern.svg")] flex items-center justify-between  rounded-3xl'>
          <div className='bg-center h-96 w-1/3 max-md:hidden bg-[url("/images/about.svg")]'>
          </div>
          <div className='py-16 px-6 text-white lg:w-1/2 md:w-2/3 space-y-5' >
            <p>اختر باقتك... على مقاس مشروعك</p>
            <h3 className='md:text-3xl text-xl font-Semibold leading-12'>نوفر لك باقات مرنة ومخصصة لتناسب أهدافك وميزانيتك، وتمنحك الحلول اللي يحتاجها مشروعك للنجاح</h3>
            <DynamicLink href="/contact">اطلب باقتك الآن</DynamicLink>
          </div>
        </motion.div>
        {/* table */}
        <div className='bg-white py-20 '>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='container mb-16  text-center text-3xl font-bold text-gray-100'>مصمم خصيصا لأحتياجاتك</motion.h4>
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='bg-[#051a22] max-md:py-12 '>
            <div className='max-lg:container lg:w-[95%] flex items-center justify-between '>
              <Image src="/images/table.svg" width={100} height={100} alt="prices" className='h-40 basis-1/4 shrink-0 object-cover max-md:hidden' />
              <div className='basis-1/4 max-md:basis-1/3 shrink-0 text-center'>
                <p className='text-white'>الخطة الأساسية</p>
                <p className='text-gray-400 text-xs'>15 دولار/شهريا</p>
              </div>
              <div className='basis-1/4 max-md:basis-1/3 shrink-0 text-center'>
                <p className='text-white'>الخطة البرو </p>
                <p className='text-gray-400 text-xs'>20 دولار/شهريا</p>
              </div>
              <div className='basis-1/4 max-md:basis-1/3 shrink-0 text-center'>
                <p className='text-white'>الخطة البريميم </p>
                <p className='text-gray-400 text-xs'>30 دولار/شهريا</p>
              </div>
            </div>

          </motion.div>
          {/* content */}
          <div className='container '>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='font-bold py-6 border-b border-gray-300/30 max-md:text-center'>التفاصيل</motion.p>
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 * index }}
                key={index} className='flex items-center justify-between py-4 border-b border-gray-300/30 last:border-0  max-md:flex-wrap'>
                <div className='basis-1/4 shrink-0 flex items-center gap-1 max-md:basis-full max-md:justify-center max-md:mb-4'>
                  <p>دعم فني متكامل</p>
                  <FiInfo className='text-gray-300' />
                </div>
                <div className='basis-1/4 max-md:w-[800px] overflow-x-scroll flex justify-center '>
                  <FaCircleCheck className='text-primary-800 size-6' />
                </div>
                <div className='basis-1/4 max-md:w-[800px] overflow-x-scroll flex justify-center '>
                  <FaCircleCheck className='text-primary-800 size-6' />
                </div>
                <div className='basis-1/4 max-md:w-[800px] overflow-x-scroll flex justify-center '>
                  <FaCircleCheck className='text-primary-800 size-6' />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}

export default PricesPage
