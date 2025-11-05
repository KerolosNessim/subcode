import React from 'react'
import DynamicLink from './dynamic-link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const BlogCrd = ({ blog }) => {
  const t = useTranslations("blogs")
  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
      {/* image */}
      <Image src={blog?.image} alt="work" width={300} height={300} className='w-full h-60 object-cover' />

      {/* content */}
      <div className='px-6 py-8  space-y-6'>
        {/* category */}
        <div className='flex items-center gap-2'>
          <p className='py-2 px-4 text-sm text-gray-200 bg-white rounded-full shadow-md'>{blog?.category?.name}</p>
        </div>
        <h3 className='text-xl font-bold text-gray-100'>{blog?.title}</h3>
        <div className=' leading-6 text-gray-200 line-clamp-3' dangerouslySetInnerHTML={{__html:blog?.description}}></div>
        <DynamicLink href={'/blogs/slug'}  >
          {t("detailes")}
        </DynamicLink>
      </div>

    </div>
  )
}

export default BlogCrd
