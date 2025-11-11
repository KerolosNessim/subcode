"use client"
import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import PartnerMarquee from '../shared/partner-marquee';
import * as motion from 'motion/react-client';
import DynamicLink from '../shared/dynamic-link';
import DynamicLinkDark from '../shared/dynamic-link-dark';
import Typewriter from 'typewriter-effect';
import { getSettings } from '@/services/fetch-settings';
function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [settings, setSettings] = useState({});
  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSettings();
      setSettings(settings);
    };
    fetchSettings();
  }, []);
  return (
    <section
      className="text-center flex items-center justify-center " >
      {/* content */}
      <div className={`max-lg:container  mx-auto space-y-8 ${locale === 'ar' ? 'lg:w-[65%]' : 'lg:w-[70%] '}`}>
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
          <p className='text-white-50 md:text-sm text-xs font-bold'>{t('badge')}</p>
        </motion.div>
        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-2xl md:text-4xl   text-gray-100 font-bold `}>
          {t('title')}<span className='text-primary-700 font-extrabold lg:text-5xl leading-[2.2]'>{t('titleHighlight')}</span>
          <br />
          <Typewriter
            options={{
              strings: t.raw('titleSuffixes'),
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 50,
              pauseFor: 1500,
              cursor: '|',
              cursorClassName: 'text-primary-700 font-bold animate-pulse',
              wrapperClassName: 'inline-block',
              skipAddStyles: true
            }}
            component="span"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-gray-200  md:text-xl  leading-relaxed   '>
          {t('description')}
        </motion.p>
        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className='flex items-center justify-center gap-4 '>
          <DynamicLinkDark href={`https://wa.me/${settings?.social_media?.whatsapp}`} external>{t('ctaPrimary')}</DynamicLinkDark>
          <DynamicLink href={`https://wa.me/${settings?.social_media?.whatsapp}`} external>
            {t('ctaSecondary')}
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
