import React from 'react'
import * as motion from "motion/react-client"
import { Switch } from '../ui/switch'
import { useLocale } from 'next-intl';
import { FaCheckCircle } from "react-icons/fa";
import DynamicLink from './dynamic-link';

const PricesSection = () => {
  const locale = useLocale();
  return (
    <section className='container'>
      {/* section header */}
      <div className='space-y-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='lg:text-4xl md:text-3xl text-2xl font-bold text-gray-100 '>إختر الخطة المثالية لعملك</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className=' lg:text-2xl text-gray-400 lg:leading-10 font-light'>سواء كنت مبتدئًا أو تنمو بسرعة، لدى بيني خطة تناسبك. أنشئ كتالوجك الإلكتروني، وشارك رابطك، واستلم الطلبات مباشرةً على واتساب — بدون الحاجة إلى مهارات تقنية.</motion.p>
      </div>
      {/* type of prices */}
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='flex items-center justify-center gap-4 mt-6'>
        <p>سنوي</p>
        <Switch className={"w-20"} />
        <p>شهري</p>

      </motion.div>
      {/* cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: .8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='bg-white-50 shadow-lg rounded-3xl p-8 text-primary-800 space-y-10'>
          <h3 className=''>الخطة الأساسية</h3>
          <h4 className='text-5xl font-bold '>15 دولار</h4>
          <p className=' '>في أوقات مختلفة، لا يوجد علاقة بين الأطفال الصغار المحصورين. لماذا يعتقد السيد النهاية.</p>
          <div className='h-[2px] w-full bg-primary-800'></div>
          <ul className='space-y-6'>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5'  />
              <p>دعم العملاء</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5'  />
              <p>حتى 10 مستخدمين</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5'  />
              <p>تقارير شهرية</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5'  />
              <p>دعم أجهزة متعددة</p>
            </li>
          </ul>
          <DynamicLink href={'#'} external className={"w-full border-none rounded-full shadow-xl"}>إشترك في الباقة</DynamicLink>
        </motion.div>
        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: .8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 ,delay:0.2}} className='bg-primary-800 bg-[url("/images/card-pattern.svg")] shadow-lg rounded-3xl p-8 text-white space-y-10 lg:scale-110'>
          <h3 className=''>الخطة البريميم</h3>
          <h4 className='text-5xl font-bold '>30 دولار</h4>
          <p className=' '>في أوقات مختلفة، لا يوجد علاقة بين الأطفال الصغار المحصورين. لماذا يعتقد السيد النهاية.</p>
          <div className='h-[2px] w-full bg-white'></div>
          <ul className='space-y-6'>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className=' size-5'  />
              <p>دعم العملاء</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className=' size-5'  />
              <p>حتى 10 مستخدمين</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className=' size-5'  />
              <p>تقارير شهرية</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className=' size-5'  />
              <p>دعم أجهزة متعددة</p>
            </li>
          </ul>
          <DynamicLink href={'#'} external className={"w-full border-none rounded-full shadow-xl hover:bg-white hover:text-primary-800"}>إشترك في الباقة</DynamicLink>
        </motion.div>
        {/* card 3 */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: .8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 ,delay:0.4}} className='bg-white-50 shadow-lg rounded-3xl p-8 text-primary-800 space-y-10'>
          <h3 className=''>الخطة البرو</h3>
          <h4 className='text-5xl font-bold '>20 دولار</h4>
          <p className=' '>في أوقات مختلفة، لا يوجد علاقة بين الأطفال الصغار المحصورين. لماذا يعتقد السيد النهاية.</p>
          <div className='h-[2px] w-full bg-primary-800'></div>
          <ul className='space-y-6'>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5' />
              <p>دعم العملاء</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5' />
              <p>حتى 10 مستخدمين</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5' />
              <p>تقارير شهرية</p>
            </li>
            <li className='flex items-center gap-2 '>
              <FaCheckCircle className='text-primary-800 size-5' />
              <p>دعم أجهزة متعددة</p>
            </li>
          </ul>
          <DynamicLink href={'#'} external className={"w-full border-none rounded-full shadow-xl"}>إشترك في الباقة</DynamicLink>
        </motion.div>
      </div>

    </section>
  )
}

export default PricesSection
