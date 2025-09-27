import React from 'react'
import SectionHeader from '../shared/section-header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLocale } from 'next-intl'
import ClientCard from '../shared/client-card'
import * as motion from "motion/react-client"
const ClientSection = () => {
  const locale = useLocale()
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='container py-20 lg:space-y-8 space-y-6 '>
      <SectionHeader title='أراء عملائنا' disc={"كن صاحب قصة النجاح القادمة"}/>
      <Carousel className={"lg:space-y-8 space-y-6"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr" ,align: "start" }}>
        <CarouselContent>
          <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard/></CarouselItem>
          <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard/></CarouselItem>
          <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard/></CarouselItem>

        </CarouselContent>
        <div className={`flex items-center justify-center gap-4 w-full ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
        <CarouselPrevious className={"static translate-0"}/>
          <CarouselNext className={"static translate-0"} />
        </div>
      </Carousel>
    </motion.section>
  )
}

export default ClientSection
