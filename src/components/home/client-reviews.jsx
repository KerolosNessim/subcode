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
import ClientSlider from '../shared/client-slider'
const ClientSection = () => {
  const locale = useLocale()
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className='container py-20 lg:space-y-8 space-y-6 '>
      <SectionHeader title='أراء عملائنا' disc={"كن صاحب قصة النجاح القادمة"} />
      <ClientSlider />
    </motion.section>
  )
}

export default ClientSection
