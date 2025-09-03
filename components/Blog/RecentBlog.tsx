import React from 'react'
import blog from "@/assets/blog.jpg"
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const posts = [
    {
        image : blog,
        author: "Shanmuganathan Sridurga",
        date : "Jul 10, 2024",
        title : "Obituary Notice-Chow Khai Leong",
        desc : "We are saddened by the news that Mr Chow has passed away on 24 Jun 2024. Our deepest condolences to Irene and family. Mr Chow has been mentor to many generations of engineers in Malayan Airways, MSA, SIA and SIAEC. He was part of the Team of Pioneer Aircraft Maintenance Engineers who steered Singapore Airlines...",

    },
    {
        image : blog,
        author: "Shanmuganathan Sridurga",
        date : "Jul 10, 2024",
        title : "Obituary Notice-Chow Khai Leong",
        desc : "We are saddened by the news that Mr Chow has passed away on 24 Jun 2024. Our deepest condolences to Irene and family. Mr Chow has been mentor to many generations of engineers in Malayan Airways, MSA, SIA and SIAEC. He was part of the Team of Pioneer Aircraft Maintenance Engineers who steered Singapore Airlines...",

    },
    {
        image : blog,
        author: "Shanmuganathan Sridurga",
        date : "Jul 10, 2024",
        title : "Obituary Notice-Chow Khai Leong",
        desc : "We are saddened by the news that Mr Chow has passed away on 24 Jun 2024. Our deepest condolences to Irene and family. Mr Chow has been mentor to many generations of engineers in Malayan Airways, MSA, SIA and SIAEC. He was part of the Team of Pioneer Aircraft Maintenance Engineers who steered Singapore Airlines...",

    }
]

const RecentBlog = () => {
  return (
    <div className='p-5 lg:max-w-6xl lg:mx-auto'>
        <h2 className='text-2xl md:text-4xl font-bold text-[#090056] mb-4'>Recent Blog Posts</h2>
        {posts.map((post,index)=>(
            <div className='space-y-3 my-5'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='w-full md:w-[50%]'>
                        <Image src={post.image} alt="post.image" className='w-full h-[200px] object-cover'/>
                    </div>
                    <div className='space-y-2 md:w-[50%]'>
                        <p className='text-[#939393] text-sm md:text-md'>by {post.author} . {post.date}</p>
                        <h3 className='text-[#090056] font-bold text-md md:text-xl'>{post.title}</h3>
                        <p className='text-sm md:text-md'>{post.desc}</p>
                        <Button variant="link" className='text-[#090056] !p-0 text-sm md:text-md'>Read More<ArrowUpRight /></Button>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#dedede]'></div>
            </div>
        ))}
    </div>
  )
}

export default RecentBlog