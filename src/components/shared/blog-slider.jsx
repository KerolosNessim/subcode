"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useLocale } from 'next-intl'
import BlogCrd from '../shared/blog-card'

const BlogSlider = ({blogs}) => {
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
        {blogs?.map((blog, i) => (
          <CarouselItem key={i} className={"basis-[80%] md:basis-1/2 lg:basis-1/3 py-4 pl-6"}>
            <BlogCrd blog={blog} />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}

export default BlogSlider
