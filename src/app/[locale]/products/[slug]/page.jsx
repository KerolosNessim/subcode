"use client"
import ClientClientSlider from '@/components/shared/cc-slider'
import ClientSlider from '@/components/shared/client-slider'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import DynamicLink from '@/components/shared/dynamic-link'
import TechMarquee from '@/components/shared/tech-marquee'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getData } from '@/services/fetch-data'
import * as motion from "motion/react-client"
import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { GoLock } from "react-icons/go"
import { IoSettingsOutline } from "react-icons/io5"
import { SlRocket } from "react-icons/sl"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";

import Markdown from 'react-markdown'
const SingleProductPage = () => {
  const locale = useLocale();
  const b = useTranslations()
  const { slug } = useParams();
  const tabstyle = "data-[state=active]: shadow-none lg:px-6 px-4 text-lg text-gray-300  data-[state=active]:text-gray-100 "
  const [singleWork, setSingleWork] = useState(null)
  const [images, setImages] = useState([])
  async function getSingleWork() {
    const res = await getData({
      url: `/websites/${slug}`,
    })
    console.log(res)
    if (res?.code == 200) {
      const workData = res?.data?.data;
      setSingleWork(workData)

      // Format images for React Image Gallery
      const galleryImages = [
        {
          original: workData.main_image,
          thumbnail: workData.main_image,
          originalAlt: workData.name,
          thumbnailAlt: workData.name
        },
        ...workData.images.map(img => ({
          original: img,
          thumbnail: img,
          originalAlt: workData.name,
          thumbnailAlt: workData.name
        }))
      ];

      setImages(galleryImages);
    }
    else {
      setSingleWork(null)
    }
  }
  useEffect(() => {
    getSingleWork()
  }, [slug])
  return (
    <main >
      <div className="md:pt-40 pt-30 pb-20 bg-[url('/images/hero-bg.svg')]  space-y-20">
        {/* breadcrumbs */}
        <div className=' container mb-10'>
          <CustomBreadcrumbs items={[{ label: b("navigation.home"), href: '/' }, { label: b("navigation.works"), href: '/works' }, { label: singleWork?.name }]} />
        </div>
        {/* works details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container flex items-center gap-8 max-lg:flex-col '>
          {/* Image Gallery */}
          <div className="lg:w-1/2 w-full">
            {images.length > 0 && (
              <div className="w-full">
                <ImageGallery
                  items={images}
                  showFullscreenButton={true}
                  showThumbnails={true}
                  lazyLoad={true}
                  autoPlay={true}
                  showPlayButton={false}
                  showNav={true}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{singleWork?.name}</h2>
            <p className="text-gray-200 leading-8 max-md:text-sm">{singleWork?.caption}</p>
            <p className="text-gray-200 leading-8 max-md:text-sm lg:text-lg">{singleWork?.description}</p>

            {/* Category and Link */}
            <div className="flex items-end justify-between">
              {/* Category */}
              {singleWork?.tags?.length > 0 && (
                <div>
                  <p>{b('singleWork.category')}</p>
                  <div className="flex gap-2">
                    {singleWork?.tags?.map((tag, index) => (
                      <p key={index} className="text-gray-200 text-xs border border-gray-200/50 rounded-full py-2 px-4 w-fit">
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Link */}
              {singleWork?.link_project && (
                <DynamicLink href={singleWork.link_project} external>
                  {b('singleWork.visit_website')}
                </DynamicLink>
              )}
            </div>
          </div>
        </motion.div>
        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='container '>
          <Tabs dir={locale === "ar" ? "rtl" : "ltr"} defaultValue="desc" className="w-full space-y-8">
            <TabsList className={"w-full rounded-none bg-transparent py-6 border-b-2 border-gray-400/30 justify-start"}>
              <TabsTrigger value="desc" className={tabstyle}>{b('singleWork.tabs.description')}</TabsTrigger>
              <TabsTrigger value="adv" className={tabstyle}>{b('singleWork.tabs.features')}</TabsTrigger>
              <TabsTrigger value="rev" className={tabstyle}>{b('singleWork.tabs.reviews')}</TabsTrigger>
            </TabsList>
            <TabsContent value="desc" className='space-y-8'>
              <div className="text-gray-200 leading-8 max-md:text-sm">
                <Markdown>{singleWork?.long_description}</Markdown>
              </div>
            </TabsContent>
            <TabsContent value="adv" className='space-y-8'>
              {singleWork?.advantage_projects?.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  key={index}
                  className='space-y-4 '>
                  <h4 className="text-primary-800 font-bold lg:text-xl text-lg flex items-center gap-2">- {feature?.title}</h4>
                  <p className="text-gray-200 leading-8 max-md:text-sm">{feature?.description}</p>
                </motion.div>
              ))}

            </TabsContent>
            <TabsContent value="rev">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {
                  singleWork?.review_projects?.length > 0 &&
                  <ClientClientSlider reviews={singleWork?.review_projects} />
                }
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        {/* marquee */}
        <TechMarquee title={b('singleWork.tech')} data={singleWork?.technologies} />
        {/* package */}
        <section className='container'>
          {/* section header */}
          <div className='space-y-6 text-center'>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='lg:text-4xl md:text-3xl text-2xl font-bold text-gray-100 '>{b('singleWork.packages')}</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className=' lg:text-2xl text-gray-400 lg:leading-10 font-light'>{b('singleWork.packagesDescription')}</motion.p>
          </div>

          {/* cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
            {
              singleWork?.subscriptions?.length > 0 &&
              singleWork?.subscriptions?.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: .8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  key={index}
                  className='odd:bg-white-50 even:bg-primary-800 shadow-lg rounded-3xl p-8 odd:text-primary-800 even:text-white even:scale-110 even:shadow-xl even:bg-[url("/images/card-pattern.svg")] space-y-10 group'>
                  <h3 className=''>{item?.name}</h3>
                  <h4 className='text-4xl font-bold '>{Number(item?.price).toFixed(2)} $ <span className="text-gray-400 group-even:text-white text-xl">/ {item?.type_name}</span></h4>
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
                  <DynamicLink href={'#'} external className={"w-full border-none rounded-full shadow-xl hover:shadow hover:shadow-white"}>إشترك في الباقة</DynamicLink>
                </motion.div>
              ))
            }
          </div>

        </section>
      </div>
    </main>
  )
}

export default SingleProductPage
