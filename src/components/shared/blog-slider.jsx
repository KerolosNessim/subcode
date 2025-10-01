"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useLocale } from 'next-intl'
import BlogCrd from '../shared/blog-card'

const BlogSlider = () => {
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
        {Array.from({ length: 3 }).map((_, i) => (
          <CarouselItem key={i} className={"basis-[80%] md:basis-1/2 lg:basis-1/3 py-4 pl-6"}>
            <BlogCrd />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default BlogSlider
