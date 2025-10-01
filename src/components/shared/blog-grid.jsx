import React from 'react'
import BlogCrd from './blog-card'

const BlogGrid = () => {
  return (
    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-6'>
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCrd key={i} />
      ))}
    </div>
  )
}

export default BlogGrid
