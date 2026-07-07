import * as motion from "motion/react-client"
import SafeImage from '../shared/safe-image'
import { resolveImageSrc } from '@/lib/utils'
import SectionHeader from '../shared/section-header'
import { Marquee } from '../ui/marquee'
const TechMarquee = ({data,title}) => {
  // const imgs = [
  //   "/images/tech-1.svg",
  //   "/images/tech-2.svg",
  //   "/images/tech-3.svg",
  //   "/images/tech-4.svg",
  //   "/images/tech-5.svg",
  //   "/images/tech-6.svg",
  //   "/images/tech-7.svg",
  //   "/images/tech-8.svg",
  // ]
  return (
    <section className='container  lg:space-y-8 space-y-6'>
      <SectionHeader title={title}  />
      {/* marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/card-pattern.svg')] bg-[#051a22] py-20 rounded-2xl">
        {data?.length > 6 && (
        <Marquee repeat={100} reverse pauseOnHover className="[--duration:40s] [--gap:20px]">
          {data?.filter((img) => resolveImageSrc(img)).map((img, idx) => (
            <div key={idx} className='bg-white rounded-full p-4 shadow-md'>
              <SafeImage src={img} alt="tech" width={100} height={100} className="object-contain size-12 mx-auto" />
            </div>
          ))}
        </Marquee>
        )}
        {data?.length <= 6 && (
          <div className="flex gap-4 justify-center flex-wrap px-4 ">
            {data?.filter((img) => resolveImageSrc(img)).map((img, idx) => (
              <div key={idx} className='bg-white rounded-full lg:size-24 size-20 flex items-center justify-center shadow-md'>
                <SafeImage src={img} alt="tech" width={100} height={100} className="object-contain lg:size-16 size-12 mx-auto" />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default TechMarquee