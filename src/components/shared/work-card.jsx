import SafeImage from './safe-image'
import React from 'react'
import DynamicLink from './dynamic-link'
import { useTranslations } from 'next-intl'

const WorkCard = ({ data, product }) => {
const t = useTranslations("works")
  return (
    <div className='bg-white rounded-4xl shadow-md overflow-hidden'>
      {/* image */}
      <SafeImage src={data?.main_image} alt={data?.name || "work"} width={300} height={300} className='w-full h-60 object-cover' />

      {/* content */}
      <div className='px-6 py-8 text-center space-y-6'>
        <h3 className='text-xl font-bold text-primary-800'>{data?.name}</h3>
        <p className=' leading-6 text-gray-200 line-clamp-3'>
          {data?.description}
        </p>
        <DynamicLink href={product ? `/products/${data?.slug}` : `/works/${data?.slug}`}  className={"mx-auto"}>
          {t("detailes")}
        </DynamicLink>
      </div>

    </div>
  )
}

export default WorkCard
