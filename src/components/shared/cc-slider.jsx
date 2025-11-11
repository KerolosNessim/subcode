import { getLocale } from 'next-intl/server'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import ClientCard from './client-card'
import { useLocale } from 'next-intl'


const ClientClientSlider = ({reviews,withArrow=true}) => {
  const locale = useLocale()

  return (
    reviews?.length > 0 &&
    <Carousel className={"lg:space-y-8 space-y-6"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
      <CarouselContent>
        {reviews?.map((review, index) => (
          <CarouselItem key={index} className={"  md:basis-1/2 basis-full"}><ClientCard review={review} /></CarouselItem>
        ))}
      </CarouselContent>
      {withArrow && <div className={`flex items-center justify-center gap-4 w-full ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
        <CarouselPrevious className={"static translate-0"} />
        <CarouselNext className={"static translate-0"} />
      </div>}
    </Carousel>
  )
}

export default ClientClientSlider
