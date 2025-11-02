import React from 'react'
import WorkCard from './work-card'

const WorkGrid = ({data}) => {
  return (
    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-6'>
      {data?.map((item, i) => (
        <WorkCard key={i} data={item} />
      ))}
    </div>
  )
}

export default WorkGrid
