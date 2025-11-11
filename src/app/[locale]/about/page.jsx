import AboutSection from '@/components/home/about-section'
import TeamSection from '@/components/home/team-section'
import Counters from '@/components/shared/counters'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import DynamicLink from '@/components/shared/dynamic-link'
import PartnerMarquee from '@/components/shared/partner-marquee'
import { getSettings } from '@/services/fetch-settings'
import * as motion from "motion/react-client"
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { FaRegSquareCheck } from "react-icons/fa6"

const AboutPage =async () => {
  const t = await getTranslations('about');
  const settings = await getSettings();
  
  return (
    <main className='overflow-hidden'>
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs 
            items={[
              { label: t('breadcrumbHome'), href: '/' }, 
              { label: t('breadcrumbAbout') }
            ]} 
          />
        </div>
        <AboutSection knowMoreLink={false} />
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
          <p>{t('heroTitle')}</p>
          <h3 className='md:text-3xl text-xl font-Semibold leading-12'>{t('heroSubtitle')}</h3>
          <DynamicLink href={`https://wa.me/${settings?.social_media?.whatsapp}`} external>{t('heroCta')}</DynamicLink>
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
            <h3 className='lg:text-4xl md:text-3xl text-2xl'>{t('whyChooseUs')} <span className='text-primary-800'>{t('companyName')}</span></h3>
            <p className='text-gray-200 leading-8'>{t('aboutDescription')}</p>
            <ul className='text-gray-100 lg:text-lg space-y-4 leading-8'>
              {t.raw('benefits').map((benefit, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <FaRegSquareCheck className='text-primary-800 shrink-0' />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* counters */}
        <Counters />
        {/* team  */}
        <TeamSection/>
      </div>
    </main>
  )
}

export default AboutPage
