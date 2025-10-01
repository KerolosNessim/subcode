import AboutSection from '@/components/home/about-section'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import CustomMarquee from '@/components/shared/custom-marquee'
import DynamicLink from '@/components/shared/dynamic-link'
import PartnerMarquee from '@/components/shared/partner-marquee'
import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import { FaRegSquareCheck } from "react-icons/fa6";
import Counters from '@/components/shared/counters'

const AboutPage = () => {
  return (
    <main className='overflow-hidden'>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label: 'الرئيسية', href: '/' }, { label: 'من نحن' }]} />
        </div>
        <AboutSection />
        <div className='py-10 container'>
          <PartnerMarquee />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='container my-20 bg-[#051a22] flex items-center justify-between  rounded-3xl'>
        <div className='bg-center h-80 w-1/3 max-md:hidden bg-[url("/images/about.svg")]'>
        </div>
        <div className='py-16 px-6 text-white lg:w-1/2 md:w-2/3 space-y-3' >
          <p>حول فكرتك إلي واقع رقمي</p>
          <h3 className='md:text-3xl text-xl font-Semibold leading-12'>نطوّر لك حلول برمجية مبتكرة تساعدك تنمّي عملك وتواكب المستقبل</h3>
          <DynamicLink href="/contact">ابدأ مشروعك الآن</DynamicLink>
        </div>
      </motion.div>
      <div className=" bg-[url('/images/hero-bg.svg')] bg-no-repeat py-16 overflow-hidden space-y-20">
        {/* detailes  */}
        <div className='container flex items-center justify-between max-lg:flex-col max-lg:gap-12 '>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='lg:w-1/2  w-full relative z-1'>

            {/* image  */}
            <Image src="/images/about-bg.svg" alt="about" fill className="object-contain  w-full absolute -z-1 animate-wiggle" />
            <Image src="/images/person2.svg" alt="about" width={500} height={500} className="object-contain w-[60%] mx-auto " />


          </motion.div>
          {/* content */}
          <motion.div
            initial={{ opacity: 0, scale: .7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='lg:w-1/2 md:w-2/3 space-y-4'>
            <h3 className='lg:text-4xl md:text-3xl text-2xl'>لماذا تختار <span className='text-primary-800'>صب كود</span></h3>
            <p className='text-gray-200 leading-8 '>نحن نؤمن أن نجاحنا مرتبط بنجاح عملائنا، لذا نحرص على تقديم خدمات مدروسة، مبنية على تحليل دقيق، وتنفيذ احترافي يضمن لك التفوّق في سوقك المستهدف.</p>
            <ul className='text-gray-100 lg:text-lg space-y-4 leading-8'>
              <li className='flex items-center gap-3'>
                <FaRegSquareCheck className='text-primary-800 shrink-0' />
                <p>استشارة تسويقية مجانية مع خبرائنا.</p>
              </li>
              <li className='flex items-center gap-3'>
                <FaRegSquareCheck className='text-primary-800 shrink-0' />
                <p>تغطية متكاملة تشمل إنشاء موقعك الإلكتروني وتصميم الهوية والإعلانات المدفوعة.</p>
              </li>
              <li className='flex items-center gap-3'>
                <FaRegSquareCheck className='text-primary-800 shrink-0' />
                <p>خطة استراتيجية متكاملة لمنصات التواصل الاجتماعي تمتد لـ ٦ أشهر تضمن لك تحقيق أهدافك بكل دقة.</p>
              </li>
            </ul>
          </motion.div>
        </div>
        {/* counters */}
        <Counters />
      </div>
    </main>
  )
}

export default AboutPage
