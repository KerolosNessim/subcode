import * as motion from "motion/react-client"
import Image from 'next/image'
import SectionHeader from '../shared/section-header'
import { Marquee } from '../ui/marquee'
const TechMarquee = () => {
  const imgs = [
    "/images/tech-1.svg",
    "/images/tech-2.svg",
    "/images/tech-3.svg",
    "/images/tech-4.svg",
    "/images/tech-5.svg",
    "/images/tech-6.svg",
    "/images/tech-7.svg",
    "/images/tech-8.svg",
  ]
  return (
    <section className='container  lg:space-y-8 space-y-6'>
      <SectionHeader title='التقنيات المستخدمة'  />
      {/* marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/card-pattern.svg')] bg-[#051a22] py-20 rounded-2xl">
        <Marquee repeat={100} reverse pauseOnHover className="[--duration:40s] [--gap:20px]">
          {imgs.map((img, idx) => (
            <div key={idx} className='bg-white rounded-full p-4 shadow-md'>
              <Image src={img} alt="tech" width={100} height={100} className="object-contain size-12 mx-auto" />
            </div>
          ))}
        </Marquee>
        <Marquee  repeat={100} reverse pauseOnHover className="[--duration:40s] [--gap:20px]">
          {imgs.map((img, idx) => (
            <div key={idx} className='bg-white rounded-full p-4 shadow-md'>
              <Image src={img} alt="tech" width={100} height={100} className="object-contain size-12 mx-auto" />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}

export default TechMarquee