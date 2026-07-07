import React from 'react'
import DynamicLinkDark from './dynamic-link-dark'
import DynamicLink from './dynamic-link'
import * as motion from "motion/react-client"
import Image from 'next/image'
import SafeImage from './safe-image'
import Newsletter from './newsletter'
import ReactCountryFlag from 'react-country-flag'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube, FaTelegram } from "react-icons/fa6";
import LocaleSwitcher from './locale-switcher'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const socialIconMap = {
  facebook: { Icon: FaFacebook, hoverClass: 'hover:text-blue-600' },
  twitter: { Icon: FaTwitter, hoverClass: 'hover:text-blue-400' },
  instagram: { Icon: FaInstagram, hoverClass: 'hover:text-pink-600' },
  linkedin: { Icon: FaLinkedin, hoverClass: 'hover:text-blue-700' },
  youtube: { Icon: FaYoutube, hoverClass: 'hover:text-red-600' },
  tiktok: { Icon: FaTiktok, hoverClass: 'hover:text-black' },
  whatsapp: { Icon: FaWhatsapp, hoverClass: 'hover:text-green-500' },
  telegram: { Icon: FaTelegram, hoverClass: 'hover:text-blue-400' },
}

const Footer = ({settings}) => {
  const t = useTranslations('footer')
  const b = useTranslations()

  const whatsapp = settings?.social_media?.whatsapp
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`
    : null

  const socials = Object.entries(settings?.social_media || {}).filter(
    ([, value]) => value && String(value).trim() !== ''
  )

  return (
    <footer className=' container  py-10 relative overflow-hidden z-[2]'>
      <Image src="/images/waves-circle.svg" alt="footer" width={1000} height={1000} className='opacity-50 size-60 object-cover absolute top-0 end-0 z-[-1]' />
      <Image src="/images/dots.svg" alt="footer" width={1000} height={1000} className='opacity-50 size-60 object-contain absolute top-[20%] start-0 z-[-1] max-md:hidden' />
      {/* contact us */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='bg-white px-6 py-10 border-y-2 border-gray-500 flex items-center justify-between lg:w-3/4 mx-auto max-md:flex-col gap-6'>
        <p className='text-gray-100 text-2xl font-semibold'>{t('boostProfits')}</p>
        {/* links */}
        <div className='flex items-center gap-4'>
          {whatsappHref && (
            <DynamicLinkDark href={whatsappHref} external>{t('contactUs')}</DynamicLinkDark>
          )}
          <DynamicLink href={"/prices"}>
            {t('discoverPricing')}
          </DynamicLink>
        </div>
      </motion.div>
      {/* footer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='py-10 border-b-2 border-gray-500 lg:w-3/4 mx-auto flex items-start lg:justify-between justify-center md:gap-6 gap-10 max-lg:flex-wrap '>
        {/* info and newsletter */}
        <div className='text-center space-y-4 max-lg:w-full lg:max-w-1/3'>
          {/* image */}
          <div className='size-20 bg-black rounded-full flex items-center justify-center mx-auto'>
            <SafeImage src={settings?.site_logo} fallback="/images/logo.png" alt="logo" width={100} height={100} className='w-1/2 object-cover' />
          </div>
          {/* title */}
          <h3 className=' text-gray-400 font-bold'>{settings?.site_description}</h3>
          {/* input */}
          <Newsletter />
        </div>
        {/* links */}
        <div className=' space-y-2'>
          <h3 className='text-primary-800 font-semibold'>{t('discoverMore')}</h3>
          <ul className='space-y-2'>
            <li>
              <Link href="/blogs" className='font-light hover:font-normal block'>
                {b('navigation.articles')}
              </Link>
            </li>
            <li>
              <Link href="/customer-stories" className='font-light hover:font-normal block'>
                {t('pricing')}
              </Link>
            </li>
          </ul>
        </div>
        {/* links */}
        <div className='space-y-2'>
          <h3 className='text-primary-800 font-semibold'>{t('services')}</h3>
          <ul className='space-y-2'>
            <li>
              <Link href="/services" className='font-light hover:font-normal block'>
                {b('navigation.services')}
              </Link>
            </li>
            <li>
              <Link href="/works" className='font-light hover:font-normal block'>
                {b('navigation.works')}
              </Link>
            </li>
            <li>
              <Link href="/products" className='font-light hover:font-normal block'>
                {b('navigation.products')}
              </Link>
            </li>
          </ul>
        </div>
        {/* numbers */}
        <div className=' space-y-2'>
          <h3 className='text-primary-800 font-semibold'>{t('ourNumbers')}</h3>
          <ul className='space-y-2'  >
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="EG" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p dir="ltr" className='text-gray-200 '>
                  {settings?.site_phone_ar}
                </p>
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="SA" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p dir="ltr" className='text-gray-200 '>
                  {settings?.site_phone_sar}
                </p>
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="TR" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p dir="ltr" className='text-gray-200 '>
                  {settings?.site_phone_tr}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      {/* socials and localization */}
      <motion.div
        initial={{ opacity: 0, scale: .7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='pt-10 lg:w-3/4 mx-auto flex items-center justify-between max-md:flex-col max-md:gap-6 '>
        {/* socials */}
        <div className='space-y-4'>
          <p className='text-primary-800 font-semibold max-md:text-center'>{t('contactUs')}</p>

          <div className='flex items-center justify-center gap-4 flex-wrap'>
            {socials.map(([key, link]) => {
              const data = socialIconMap[key]
              if (!data) return null

              const { Icon, hoverClass } = data
              let href = link
              if (key === 'whatsapp') href = `https://wa.me/${link.replace(/[^0-9]/g, '')}`
              if (key === 'telegram' && link.startsWith('@')) href = `https://t.me/${link.substring(1)}`

              return (
                <a
                  key={key}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-primary-800 ${hoverClass} transition-colors`}
                  aria-label={key}
                >
                  <Icon className='w-6 h-6' />
                </a>
              )
            })}
          </div>
          


        </div>
        {/* localization */}
        <LocaleSwitcher isDark/>
      </motion.div>

    </footer>
  )
}

export default Footer
