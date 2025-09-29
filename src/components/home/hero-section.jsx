import React from 'react'
import PartnerMarquee from '../shared/partner-marquee'
import * as motion from "motion/react-client"
import DynamicLink from '../shared/dynamic-link'
import DynamicLinkDark from '../shared/dynamic-link-dark'

function HeroSection() {
  return (
    <section
      className="text-center flex items-center justify-center " >
      {/* content */}
      <div className='max-lg:container w-[65%] mx-auto space-y-8'>
        {/* badage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='w-fit py-2 px-5 rounded-md shadow-md shadow-[#081822] bg-primary-950 flex items-center justify-center gap-4 mx-auto'>
          <div className='animate-pulse  size-4 rounded-full bg-primary-400/25 flex items-center justify-center '>
            <div className='size-3 rounded-full bg-primary-400'></div>
          </div>
          <p className='text-white-50 md:text-sm text-xs font-bold'>جاهزين للعمل علي مشروعك</p>
        </motion.div>
        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-2xl md:text-4xl lg:text-5xl  text-gray-100 '>
          لأن نجاح مشروعك رحلة، وخطوته الأولى مع <span className='text-primary-700 font-bold leading-[2.2]'>Subcode</span> , النجاح يبدأ من هنا... يبدأ معنا
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-gray-200 lg:text-2xl md:text-xl  leading-relaxed   '>في Subcode نؤمن إن نجاح أي فكرة يبدأ بخطوة برمجية صحيحة،لذلك نوفر لك حلول مبتكرة، سريعة وآمنة تساعدك على تحويل رؤيتك إلى واقع ملموس وتنمية أعمالك بثقة.</motion.p>
        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className='flex items-center justify-center gap-4 '>
          <DynamicLinkDark href='#' external>إبدا مشروعك الأن</DynamicLinkDark>
          <DynamicLink href={"#"} external >
            تواصل معنا
          </DynamicLink>
        </motion.div>
        {/* marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <PartnerMarquee />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
