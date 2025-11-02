import Image from 'next/image'
import React from 'react'

const ClientCard = ({review}) => {
  return (
    <div className='flex items-center justify-center  p-6 pb-0 border bborder-2 border-primary-800 rounded-2xl bg-white overflow-hidden h-full'>
      <Image src={review?.client_image} alt="client" width={100} height={100} className='w-1/3 shrink-0  object-contain object-top self-end max-lg:hidden' />
      <div className='text-center lg:pe-6 max-lg:px-6 space-y-4'>
        <h4 className='text-primary-800 font-bold text-2xl '>{review?.client_name}</h4>
        <p className='text-gray-200 '>{review?.description}</p>
        <div className='flex items-center justify-center gap-4'>
          <Image src={review?.project_image} alt="client" width={100} height={100} />
          <p className='text-primary-800 font-bold text-xl  '>{review?.project_name}</p>
      </div>
      </div>
    </div>
  )
}

export default ClientCard
