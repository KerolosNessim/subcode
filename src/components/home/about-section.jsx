import React from 'react'
import SectionHeader from '../shared/section-header'
import DynamicLinkDark from '../shared/dynamic-link-dark'
import DynamicLink from '../shared/dynamic-link'
import Image from 'next/image'
import SafeImage from '../shared/safe-image'
import { resolveImageSrc } from '@/lib/utils'
import * as motion from "motion/react-client"
import { getData } from '@/services/fetch-data'
import { getLocale, getTranslations } from 'next-intl/server'
import { getSettings } from '@/services/fetch-settings'
const AboutSection = async ({knowMoreLink=true}) => {
  const locale = await getLocale()
  const t = await getTranslations('about')
  const settings = await getSettings();
  let data
  const res = await getData({
    url: "/about-us"
  })
  if (res?.code === 200) {
    data = res?.data?.data
  }
  else {
    data = null
  }
  return (
    data?
    <section className='pt-16 space-y-8 overflow-hidden' >
      <div className='container'>
        <SectionHeader title={t('title')} />
      </div>

      {/* image and content */}
      <div className='lg:w-[95%] ms-auto max-lg:container flex items-center justify-between'>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=' text-gray-100 lg:w-1/2 md:2/3 space-y-6 '>
            <h3 className='lg:text-2xl text-xl font-medium '>{data?.title}</h3>
            <p className='lg:text-xl md:text-lg text-sm text-gray-300' >{data?.description}</p>
          <div className='flex items-center  gap-4 '>
              <DynamicLinkDark href={`https://wa.me/${settings?.social_media?.whatsapp}`} external>{t('consultation')}</DynamicLinkDark>
            {knowMoreLink && (
              <DynamicLink href={"/about"}>
              {t('knowMore')}
            </DynamicLink>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='lg:w-1/2 md:1/3 min-h-[70vh] relative overflow-hidden max-lg:hidden  '>
          <Image 
            src={'/images/circles.svg'} 
            width={1000} 
            height={1000} 
            alt='about' 
            className='animate-pulse object-cover absolute top-0 -end-0' 
          />
          {resolveImageSrc(data?.[`image_${locale}`]) && (
            <SafeImage 
              src={data[`image_${locale}`]} 
              width={450} 
              height={450} 
              alt={data?.title || 'about'} 
              className='absolute bottom-0 end-[17%] object-contain object-bottom' 
            />
          )}
        </motion.div>

      </div>


    </section>
    :null
  )
}

export default AboutSection
