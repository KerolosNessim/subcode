import React from 'react'
import DynamicLinkDark from './dynamic-link-dark'
import DynamicLink from './dynamic-link'
import * as motion from "motion/react-client"
import Image from 'next/image'
import Newsletter from './newsletter'
import { Link } from '@/i18n/navigation'
import ReactCountryFlag from 'react-country-flag'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";
import LocaleSwitcher from './locale-switcher'

const Footer = () => {
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
        <p className='text-gray-100 text-2xl font-semibold'>عزز أرباحك .. إبدا مشروعك الأن</p>
        {/* links */}
        <div className='flex items-center  gap-4 '>
          <DynamicLinkDark href='#' external>تواصل معنا</DynamicLinkDark>
          <DynamicLink href={"#"} external >
            إكتشف الأسعار
          </DynamicLink></div>
      </motion.div>
      {/* footer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='py-10 border-b-2 border-gray-500 lg:w-3/4 mx-auto flex items-start lg:justify-between justify-center md:gap-6 gap-10 max-lg:flex-wrap '>
        {/* info and newsletter */}
        <div className='text-center space-y-4 max-lg:w-full'>
          {/* image */}
          <div className='size-20 bg-black rounded-full flex items-center justify-center mx-auto'>
            <Image src="/images/logo.png" alt="logo" width={100} height={100} className='w-1/2 object-cover' />
          </div>
          {/* title */}
          <h3 className=' text-gray-400 font-bold'>أطلق العنان لأمكانياتك وأتصل بنا نبدأ مشروعك</h3>
          {/* input */}
          <Newsletter />
        </div>
        {/* links */}
        <div className=' space-y-2'>
          <h3 className='text-primary-800 font-semibold'>اكتشف المزيد</h3>
          <ul className='space-y-2'>
            <li>
              <Link className='font-light hover:font-normal block '>
                المدونة
              </Link>
            </li>
            <li>
              <Link className='font-light hover:font-normal block '>
                قصص العملاء
              </Link>
            </li>
          </ul>
        </div>
        {/* links */}
        <div className=' space-y-2'>
          <h3 className='text-primary-800 font-semibold'>الوظائف المتاحة</h3>
          <ul className='space-y-2'>
            <li>
              <Link className='font-light hover:font-normal block '>
                اتصل بنا
              </Link>
            </li>
            <li>
              <Link className='font-light hover:font-normal block '>
                الاسئلة الشائعة
              </Link>
            </li>
          </ul>
        </div>
        {/* numbers */}
        <div className=' space-y-2'>
          <h3 className='text-primary-800 font-semibold'>أرقامنا</h3>
          <ul className='space-y-2' >
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="EG" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p className='text-gray-200 '>
                  01025187506
                </p>
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="SA" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p className='text-gray-200 '>
                  01025187506
                </p>
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2'>
                <ReactCountryFlag countryCode="TR" svg className="rounded-md" style={{
                  width: "25px",
                  height: "25px",
                }} />
                <p className='text-gray-200 '>
                  01025187506
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
        <div className='space-y-2'>
          <p className='text-primary-800 font-semibold max-md:text-center'>تواصل معنا</p>
          <div className='flex items-center gap-3'>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-primary-800 hover:scale-110 transition-all duration-300">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        {/* localization */}
        <LocaleSwitcher isDark/>
      </motion.div>

    </footer>
  )
}

export default Footer
