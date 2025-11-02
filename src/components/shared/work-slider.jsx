"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import WorkCard from './work-card'
import { useLocale } from "next-intl"
const WorkSlider = ({ data }) => {
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
        {data?.map((item, i) => (
          <CarouselItem key={i} className={"basis-[80%] md:basis-1/2 lg:basis-1/3 py-4 pl-4"}>
            <WorkCard data={item}  />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default WorkSlider
