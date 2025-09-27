import Image from 'next/image'
import React from 'react'

const ClientCard = () => {
  return (
    <div className='flex items-center justify-center  pt-6 border bborder-2 border-primary-800 rounded-2xl bg-white'>
      <Image src="/images/person.png" alt="client" width={100} height={100} className='w-[50%]  object-cover object-top self-end max-lg:hidden' />
      <div className='text-center lg:pe-6 max-lg:px-6 space-y-4'>
        <h4 className='text-primary-800 font-bold text-3xl '>أدهم مصطفي</h4>
       <p className='text-gray-200 text-xl '>“ أنا مريت بتجارب وواجهت تحديات يمكن ملخصها بكل أمانة: الصبر .. الصبر .. الصبر “</p>
        <div className='flex items-center justify-center gap-4'>
        <Image src="/images/aqdi.png" alt="client" width={100} height={100} />
          <p className='text-primary-800 font-bold text-xl  '>منصة عقدي</p>
      </div>
      </div>
    </div>
  )
}

export default ClientCard
