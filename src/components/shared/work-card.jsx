import Image from 'next/image'
import React from 'react'
import DynamicLink from './dynamic-link'

const WorkCard = () => {
  return (
    <div className='bg-white rounded-4xl shadow-md overflow-hidden'>
      {/* image */}
      <Image src="/images/work.png" alt="work" width={300} height={300} className='w-full h-60 object-cover' />

      {/* content */}
      <div className='px-6 py-8 text-center space-y-6'>
        <h3 className='text-xl font-bold text-primary-800'>عقدي – منصة توثيق العقود الألكترونية</h3>
        <p className=' leading-6 text-gray-200 line-clamp-3'>
          عقدي" هو منصّة مبتكرة لتوثيق العقود العقارية إلكترونياً بكل سرعة وكفاءة (سكني وتجاري). يوفّر لك التطبيق طريقة آمنة وموثوقة لإنجاز معاملاتك العقارية 
        </p>
        <DynamicLink href={'#'} external className={"mx-auto"}>
          تفاصيل المشروع
        </DynamicLink>
      </div>

    </div>
  )
}

export default WorkCard
