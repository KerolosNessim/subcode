import React from 'react'
import SectionHeader from '../shared/section-header'
import DynamicLinkDark from '../shared/dynamic-link-dark'
import DynamicLink from '../shared/dynamic-link'
import Image from 'next/image'
import * as motion from "motion/react-client"
const AboutSection = () => {
  return (
    <section className='pt-16 space-y-8 overflow-hidden' >
      <div className='container'>
        <SectionHeader />
      </div>

      {/* image and content */}
      <div className='lg:w-[95%] ms-auto max-lg:container flex items-center justify-between'>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=' text-gray-100 lg:w-1/3 md:2/3 space-y-6'>
          <h3 className='lg:text-2xl text-xl font-medium '>شركة <span className='text-primary-700 font-bold'>Subcode</span> للبرمجيات والتسويق الرقمي</h3>
          <p className='lg:text-xl md:text-lg text-sm' >نحن في شركة Subcode نؤمن أن التكنولوجيا والتسويق الرقمي هما حجر الأساس لنجاح أي عمل في العصر الحديث. موزعين في عدة دول منها مصر، تركيا، والسعودية.</p>
          <p className='lg:text-xl md:text-lg text-sm text-gray-300' >هدفنا هو تطوير برمجيات قوية وف ّعالة تعيش لسنوات، وتساهم في بناء مستقبل رقمي مستدام يساعد الشركات واألفراد على النمو والتطور بثقة.</p>
          <div className='flex items-center  gap-4 '>
            <DynamicLinkDark href='#' external>اطلب استشارة مجانية</DynamicLinkDark>
            <DynamicLink href={"#"} external >
              تعرف علينا
            </DynamicLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='lg:w-2/3 md:1/3 min-h-[70vh] relative overflow-hidden max-lg:hidden  '>
          <Image src={'/images/circles.svg'} width={1000} height={1000} alt='about' className='animate-pulse object-cover absolute top-0 -end-[10%]' />
          <Image src={'/images/person.png'} width={450} height={450} alt='about' className='absolute bottom-0 end-[17%]' />
        </motion.div>

      </div>


    </section>
  )
}

export default AboutSection
