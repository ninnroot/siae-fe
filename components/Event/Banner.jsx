import Image from 'next/image'
import React from 'react'
import heroimage from "@/assets/Hero.jpg"
import { Calendar } from 'lucide-react'

const Banner = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <Image src={heroimage} alt='Hero Image' className='w-full h-[280px] md:h-[400px] object-cover'/>
        <div className='absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-4 z-20'>
            <h1 className='text-2xl md:text-3xl text-center font-bold'>Events from SIAE</h1>
            <p className='text-xs md:text-sm text-center mx-auto w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
        </div>
      </div>
      <div className='absolute left-1/2 bottom-0 z-100 -translate-x-1/2 translate-y-1/2 w-[80%] md:w-2/3 lg:w-1/2'>
          <div className='w-full bg-white rounded-lg py-10 px-8 sm:px-16 shadow-md'>
              <form action="" className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16'>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor="search_event" className='text-[#939393] text-sm'>Search Event</label>
                  <input type="text" value="SATEC" id='search_event' className='outline-none border-b-[1px] border-b-[#d9d9d9] text-[#090056]'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label htmlFor="search_event" className='text-[#939393] text-sm'>Date</label>
                  <div className='flex border-b-[1px] border-b-[#d9d9d9] justify-between'>
                    <input type="text" value="06/05/2025" id='search_event' className='outline-none  text-[#090056]'/>
                    <Calendar className='w-5 h-5 mx-1'/>
                  </div>
                </div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Banner