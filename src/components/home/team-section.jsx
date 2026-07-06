import React from 'react'
import SectionHeader from '../shared/section-header'
import { Marquee } from '../ui/marquee'
import { div } from 'motion/react-client'
import SafeImage from '../shared/safe-image'
import { resolveImageSrc } from '@/lib/utils'
import *as motion from "motion/react-client"
import { getData } from '@/services/fetch-data'
import { getTranslations } from 'next-intl/server'
const TeamSection = async () => {
  const t =await getTranslations('team');
  let team = [];
  const res = await getData({
    url: "/team"
  })
  if (res?.code == 200) {
    team = res?.data?.data;
  } else {
    team = [];
  }

  return (
    team.length > 0 &&
    <section className='container  lg:space-y-8 space-y-6'>
      <SectionHeader title={t('title')} disc={t('description')} />
      {/* marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee repeat={100} reverse pauseOnHover className="[--duration:40s] [--gap:20px]">
          {team
            ?.filter((item) => resolveImageSrc(item?.image))
            .map((item, idx) => (
            <div key={idx} className='bg-white rounded-xl p-2 shadow-md'>
              <SafeImage src={item?.image} alt={item?.name || "team member"} width={100} height={100} className="object-cover object-bottom lg:size-40 size-30 mx-auto rounded-xl" />
              <div className='text-center'>
                <h3 className='text-gray-100 font-medium'>{item?.name}</h3>
                <h3 className='text-gray-300 font-medium'>{item?.specialty}</h3>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}

export default TeamSection
