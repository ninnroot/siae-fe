import React from 'react'
import previousevent from "@/assets/previousevent.jpg"
import Image from 'next/image'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const posts = [
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \n (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    },
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \b (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    },
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \b (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    },
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \b (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    },
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \b (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    },
    {
        image : previousevent,
        month: "APR",
        day: "14",
        title : "OBITUARY – CHEW LENG SENG \b (1939 – 2022)",
        desc : "Singapore Aerospace Technology and Engineering Conference (SATEC) 2022 Event Details Morning Session Registration shall commence from 0730 Hrs onwards and close at 0830 Hrs. After performing the Safe Entry check-in into Suntec Singapore, participants shall proceed to..",

    }
]

const PreviousEvent = () => {
  return (
    <div className='p-5 lg:max-w-6xl lg:mx-auto'>
        <div className='flex items-cener justify-between mb-5'>
            <h2 className='text-2xl md:text-4xl font-bold text-[#090056] mb-4'>Previous Events</h2>
            <DropdownMenu>
                <DropdownMenuTrigger>Sort by: Lastest</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Lastest</DropdownMenuItem>
                    <DropdownMenuItem>Oldest</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {posts.map((post,index)=>(
                <div className='flex flex-col rounded-2xl overflow-hidden shadow'>
                    <div className='w-full relative'>
                        <Image src={post.image} alt="post.image" className='w-full h-[200px] object-cover group/image'/>
                        <Button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#090056] text-sm hidden group-hover/image:flex'>View detail</Button>
                    </div>
                    <div className='flex gap-6 p-5'>
                        <div className='flex flex-col items-center'>
                            <p className='text-[#939393] text-sm font-bold'>{post.month}</p>
                            <p className='text-2xl font-bold'>{post.day}</p>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h3 className='text-[#090056] font-bold text-md md:text-md'>{post.title}</h3>
                            <p className='text-[#8d8d8d] text-sm md:text-lg'>{post.desc.substring(0,45)}...</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Pagination className='py-8'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </div>
  )
}

export default PreviousEvent