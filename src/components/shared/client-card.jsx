import Image from 'next/image'
import React from 'react'
import { FaStar, FaVideo } from 'react-icons/fa6'

const ClientCard = ({ review }) => {
  return (
    <div className='flex items-center justify-center gap-6  p-6  border bborder-2 border-primary-800 rounded-2xl bg-white overflow-hidden h-full'>
      <Image src={review?.client_image || review?.image} alt="client" width={100} height={100} className='w-1/3 shrink-0  object-contain object-top self-end max-lg:hidden' />
      <div className='text-center lg:pe-6 max-lg:px-6 space-y-4'>
        <h4 className='text-primary-800 font-bold text-2xl '>{review?.client_name || review?.name}</h4>
        <p className='text-gray-200 '>{review?.description}</p>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center justify-center gap-4'>
            <Image src={review?.project_image} alt="client" width={100} height={100} className='size-16 object-cover rounded-full' />
            <div>
              <p className='text-primary-800 font-bold text-xl text-start  '>{review?.project_name}</p>
              <div className='flex items-center justify-center gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className='text-yellow-500' />
                ))}
              </div>
            </div>
          </div>
          <div className='size-12 bg-primary-800 rounded-full flex items-center justify-center'>
            <FaVideo className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientCard
