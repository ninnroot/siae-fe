import AllBlog from '@/components/Blog/AllBlog'
import RecentBlog from '@/components/Blog/RecentBlog'
import React from 'react'

const page = () => {
  return (
    <div>
        <RecentBlog />
        <AllBlog />
    </div>
  )
}

export default page