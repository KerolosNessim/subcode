import React from 'react'
import DynamicLink from './dynamic-link'
import Image from 'next/image'

const BlogCrd = () => {
  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
      {/* image */}
      <Image src="/images/blog.png" alt="work" width={300} height={300} className='w-full h-60 object-cover' />

      {/* content */}
      <div className='px-6 py-8  space-y-6'>
        {/* category */}
        <div className='flex items-center gap-2'>
          <p className='py-2 px-4 text-sm text-gray-200 bg-white rounded-full shadow-md'>برمجة</p>
          <p className='py-2 px-4 text-sm text-gray-200 bg-white rounded-full shadow-md'>تسويق إلكتروني</p>
        </div>
        <h3 className='text-xl font-bold text-gray-100'>صنع تجارب مستخدمين عاطفية وجذابة</h3>
        <p className=' leading-6 text-gray-200 line-clamp-4'>افتح قوة تحليلات البيانات واحصل على رؤى قابلة للتنفيذ لاتخاذ قرارات تجارية مستنيرة. عزز رؤية موقعك على الويب افتح قوة تحليلات البيانات واحصل على رؤى قابلة للتنفيذ لاتخاذ قرارات تجارية مستنيرة. عزز رؤية موقعك على الويب</p>
        <DynamicLink href={'/blogs/slug'}  >
          إقرأ المقال
        </DynamicLink>
      </div>

    </div>
  )
}

export default BlogCrd
