"use client"
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import PricesSection from '@/components/shared/prices-section'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import DynamicLink from '@/components/shared/dynamic-link'
import { FiInfo } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { useLocale, useTranslations } from 'next-intl';
import { FaCheckCircle } from "react-icons/fa";
import { Switch } from '@/components/ui/switch'
import { getData } from '@/services/fetch-data'
import { IoIosCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io'
const PricesPage = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [isMonthly, setIsMonthly] = useState(true);
  const [prices, setPrices] = useState([]);
  const [packagesFeatures, setPackagesFeatures] = useState([]);
  async function getPrices() {
    const res = await getData({ url: '/packages?type=' + (isMonthly ? 'monthly' : 'yearly') });
    if (res?.code == 200) {
      setPrices(res?.data?.data);
    }
    else {
      setPrices([]);
    }
  }
  async function getPackagesFeatures() {
    const res = await getData({ url: '/feature-packages' });
    if (res?.code == 200) {
      setPackagesFeatures(res?.data?.data);
    }
    else {
      setPackagesFeatures([]);
    }
  }
  useEffect(() => {
    getPrices();
    getPackagesFeatures();
  }, [isMonthly]);
  return (
    <main >
      <div className="md:pt-40 pt-30  bg-[url('/images/hero-bg.svg')] space-y-20 ">
        {/* breadcrumbs */}
        <div className=' container'>
          <CustomBreadcrumbs items={[{ label:t('navigation.home'), href: '/' }, { label:t('navigation.pricing') }]} />
        </div>
        {/* prices section */}
        <section className='container'>
          {/* section header */}
          <div className='space-y-6 text-center'>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='lg:text-4xl md:text-3xl text-2xl font-bold text-gray-100 '>{t('pricing.title')}</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className='lg:text-2xl text-gray-400 lg:leading-10 font-light'>{t('pricing.subtitle')}</motion.p>
          </div>
          {/* type of prices */}
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='flex items-center justify-center gap-4 mt-6'>
            <p>{t('pricing.yearly')}</p>
            <Switch className={"w-20"} checked={!isMonthly} onCheckedChange={(value) => setIsMonthly(!value)} />
            <p>{t('pricing.monthly')}</p>

          </motion.div>
          {/* cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
            {
              prices?.length > 0 &&
              prices?.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: .8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  key={index}
                  className='odd:bg-white-50 even:bg-primary-800 shadow-lg rounded-3xl p-8 odd:text-primary-800 even:text-white even:scale-110 even:shadow-xl even:bg-[url("/images/card-pattern.svg")] space-y-10 group'>
                  <h3 className=''>{item?.name}</h3>
                  <h4 className='text-4xl font-bold '>{Number(item?.price).toFixed(2)} {isMonthly ? t('pricing.per_month') : t('pricing.per_year')}</h4>
                  <p className=' '>{item?.description}</p>
                  <div className='h-[2px] w-full bg-primary-800 group-even:bg-white-50'></div>
                  <ul className='space-y-6'>
                    {
                      item?.features?.length > 0 &&
                      item?.features?.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2 '>
                          <FaCheckCircle className='text-primary-800 group-even:text-white size-5' />
                          <p>{feature}</p>
                        </li>
                      ))
                    }
                  </ul>
                  <DynamicLink href={'#'} external className={"w-full border-none rounded-full shadow-xl hover:shadow hover:shadow-white"}>{t('pricing.subscribe')}</DynamicLink>
                </motion.div>
              ))
            }
          </div>

        </section>
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
            <p>{t('pricing.custom_plan_title')}</p>
            <h3 className='md:text-3xl text-xl font-Semibold leading-12'>{t('pricing.custom_plan_description')}</h3>
            <DynamicLink href="/contact">{t('pricing.custom_plan_cta')}</DynamicLink>
          </div>
        </motion.div>
        {/* Features Comparison Table */}
        <div className='bg-white py-20'>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='container mb-16 text-center text-3xl font-bold text-gray-100'>
            {t('pricing.features_title')}
          </motion.h4>
          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='bg-[#051a22] max-md:py-12'>
            <div className='max-lg:container lg:w-[95%] flex items-center justify-between'>
              <Image 
                src="/images/table.svg" 
                width={100} 
                height={100} 
                alt="prices" 
                className='h-40 basis-1/4 shrink-0 object-cover max-md:hidden' 
              />
              {prices?.map((pkg, index) => (
                <div key={pkg.id} className='basis-1/4 max-md:basis-1/3 shrink-0 text-center'>
                  <p className='text-white'>{pkg.name}</p>
                  <p className='text-gray-400 text-xs'>{Number(pkg.price).toFixed(2)} / {pkg.type_name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Table Content */}
          <div className='container'>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='font-bold py-6 border-b border-gray-300/30 max-md:text-center'>
              {t('pricing.details')}
            </motion.p>
            {packagesFeatures?.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex items-center justify-between py-4 border-b border-gray-300/30 last:border-0 max-md:flex-wrap'>
                {/* Feature Name */}
                <div className='basis-1/4 shrink-0 flex items-center gap-1 max-md:basis-full max-md:justify-center max-md:mb-4'>
                  <p>{feature.name}</p>
                  <FiInfo className='text-gray-300' />
                </div>
                {/* Feature Availability for each package */}
                {prices?.map((pkg) => {
                  const isAvailable = feature?.packages_support?.some(p => p.id === pkg.id);
                  return (
                    <div key={`${feature.id}-${pkg.id}`} className='basis-1/4 max-md:w-[800px] overflow-x-scroll flex justify-center'>
                      {isAvailable ? (
                        <IoIosCheckmarkCircle className='text-primary-800 size-6' />
                      ) : (
                          <IoMdCloseCircle className='text-red-500 size-6' />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}

export default PricesPage
