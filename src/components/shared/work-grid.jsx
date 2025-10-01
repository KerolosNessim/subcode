import React from 'react'
import WorkCard from './work-card'

const WorkGrid = () => {
  return (
    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4'>
      {Array.from({ length: 9 }).map((_, i) => (
        <WorkCard key={i} />
      ))}
    </div>
  )
}

export default WorkGrid
