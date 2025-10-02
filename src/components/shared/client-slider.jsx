import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { useLocale } from 'next-intl'
import ClientCard from './client-card'

const ClientSlider = () => {
  const locale = useLocale()
  return (
    <Carousel className={"lg:space-y-8 space-y-6"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
      <CarouselContent>
        <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard /></CarouselItem>
        <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard /></CarouselItem>
        <CarouselItem className={"  md:basis-1/2 basis-full"}><ClientCard /></CarouselItem>

      </CarouselContent>
      <div className={`flex items-center justify-center gap-4 w-full ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
        <CarouselPrevious className={"static translate-0"} />
        <CarouselNext className={"static translate-0"} />
      </div>
    </Carousel>
  )
}

export default ClientSlider
