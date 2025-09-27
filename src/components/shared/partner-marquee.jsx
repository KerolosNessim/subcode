import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const images = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
]

const PartnerMarquee = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee repeat={100} reverse  pauseOnHover className="[--duration:25s] [--gap:3rem]">
        {images.map((img,idx) => (
          <Image key={idx} src={img} alt="partner" width={100} height={100} className="object-contain lg:size-32 size-24" />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}

export default PartnerMarquee
