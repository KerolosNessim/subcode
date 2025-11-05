import React from 'react'
import BlogCrd from './blog-card'

const BlogGrid = ({blogs}) => {
  return (
    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-6'>
      {blogs?.map((item) => (
        <BlogCrd key={item?.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogGrid
