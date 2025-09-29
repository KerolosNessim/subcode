import React from 'react'
import SectionHeader from '../shared/section-header'
import { Marquee } from '../ui/marquee'
import { div } from 'motion/react-client'
import Image from 'next/image'
import *as motion from "motion/react-client"
const TeamSection = () => {
  return (
    <section className='container  lg:space-y-8 space-y-6'>
      <SectionHeader title='فريقنا' disc={"نحن مجموعة متنوعة من المصممين والمفكرين والمبتكرين متحدين بشغف مشترك لخلق أعمال ذات مغزى. "} />
      {/* marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee repeat={100} reverse pauseOnHover className="[--duration:40s] [--gap:20px]">
          {Array.from({ length: 10 }).map((img, idx) => (
            <div key={idx} className='bg-white rounded-xl p-2 shadow-md'>
              <Image  src={"/images/team.png"} alt="partner" width={100} height={100} className="object-contain lg:size-40 size-30 mx-auto" />
              <div className='text-center'>
                <h3 className='text-gray-100 font-medium'>Ibrahim Reda</h3>
                <h3 className='text-gray-300 font-medium'>Backend Developer</h3>
            </div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}

export default TeamSection
