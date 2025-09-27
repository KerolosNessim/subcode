"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import WorkCard from './work-card'
import { useLocale } from "next-intl"
const WorkSlider = () => {
  const locale = useLocale()
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr" }}>
      <CarouselContent className={""}>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className={"basis-[80%] md:basis-1/2 lg:basis-1/3 py-4 pl-4"}>
            <WorkCard />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default WorkSlider
