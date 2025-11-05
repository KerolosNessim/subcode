import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import BlogCrd from '@/components/shared/blog-card'
import { useLocale } from 'next-intl'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { LiaHandshake } from "react-icons/lia";
import SectionHeader from '@/components/shared/section-header'
import WorkGrid from '@/components/shared/work-grid'
import WorkSlider from '@/components/shared/work-slider'
import { getLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { getData } from '@/services/fetch-data'

const SinglrServicePage = async ({ params }) => {
  const { slug } = params;
  const locale = await getLocale();
  const t = await getTranslations('services');
  const b=await getTranslations();

  let service = null;
  try {
    const res = await getData({
      url:`/services/${slug}`,
    });
    if (res?.code === 200 && res?.data?.data) {
      service = res.data.data;
    }
  } catch (error) {
    console.error('Error fetching service:', error);
    service = null;
  }



  return (
    service && (
      <main>
        <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')]">
          {/* breadcrumbs */}
          <div className='container mb-10'>
            <CustomBreadcrumbs items={[
              { label: b('navigation.home'), href: '/' },
              { label: b('services.title'), href: '/services' },
              { label: service?.title },
            ]} />
          </div>
          <div className='space-y-20'>
            {/* single service section  */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='container flex items-center justify-between max-lg:flex-col-reverse'>
              {/* content  */}
              <div className='lg:w-1/3 w-full space-y-4'>
                <h3 className='lg:text-xl font-semibold text-primary-800'>{t('servicesLabel')}</h3>
                <h2 className='lg:text-5xl md:text-3xl text-2xl font-bold leading-relaxed'>{service?.title}</h2>
                <p className='text-gray-200 leading-8 text-sm'>
                  {service?.description}
                </p>
              </div>
              {/* image */}
              <div className='lg:w-1/2 w-full relative py-12 z-1'>
                <Image src="/images/waves-circle.svg" width={600} height={600} alt="victor" className='lg:size-60 md:size-40 size-28  object-contain absolute top-0 end-0 -z-1' />
                <Image src={service?.image} width={600} height={600} alt="victor" className='w-full' />
              </div>
            </motion.div>
            {/* featuers */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='container space-y-8'>
              <h3 className="text-center text-2xl md:text-3xl font-bold text-white py-1.5 bg-gradient-to-l from-[#4F7E92B2]/80 to-70% to-[#16536E]/80 lg:w-3/4 mx-auto">
                {t('whyChooseUs')}
              </h3>
              <Carousel
                opts={{
                  loop: true, direction: locale === "ar" ? "rtl" : "ltr",
                  align: "start"
                }}>
                <CarouselContent className={""}>
                  {service?.feature_services?.map((feature, i) => (
                    <CarouselItem key={i} className={"basis-[80%] md:basis-[45%] lg:basis-1/4 py-4 pl-6"}>
                      <div className="group space-y-4 text-center border-2 border-primary-800 rounded-xl p-10 bg-white text-primary-800 hover:text-white cursor-pointer  hover:bg-[linear-gradient(to_bottom,#104F6A,#14688BB2),url('/images/card-pattern.svg')] ">
                        <Image src={feature?.image} width={600} height={600} alt="victor" className='w-1/3 mx-auto' />
                        <h3 className='text-xl font-bold'>{feature?.title}</h3>
                        <p className='text-gray-200 group-hover:text-white text-lg leading-8 '>{feature?.description}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>

            {/* related works
            <div className='space-y-12' >
              <SectionHeader 
                title={t('previousWorks', { service: service?.title || '' })}
                disc={t('worksDescription')}
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='container max-md:hidden'>
                <WorkGrid />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='container md:hidden'>
                <WorkSlider />
              </motion.div>
            </div> */}
          </div>
        </div>
      </main>
    )
  )
}

export default SinglrServicePage
