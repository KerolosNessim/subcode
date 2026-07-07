"use client"
import { Marquee } from "@/components/ui/marquee";
import SafeImage from "@/components/shared/safe-image";
import { resolveImageSrc } from "@/lib/utils";
import { getData } from "@/services/fetch-data";
import { useEffect, useState } from "react";



const PartnerMarquee =  () => {
  const [images, setImages] = useState([])
  async function getParteners(){
    const res = await getData({ url: "/partner-successes" })
    if(res?.code==200){
      setImages(res?.data?.data)
    }
    else{
      setImages([])
    }
  }
  useEffect(() => {
    getParteners()
  }, [])
  console.log(images)
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee repeat={100} reverse pauseOnHover className="[--duration:25s] [--gap:3rem]">
        {images
          ?.filter((img) => resolveImageSrc(img?.image))
          .map((img, idx) => (
          <SafeImage key={idx} src={img?.image} alt={img?.title || "partner"} width={100} height={100} className=" object-contain grayscale-100 hover:grayscale-0 transition-all duration-300 lg:w-32 w-24  " />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}

export default PartnerMarquee
