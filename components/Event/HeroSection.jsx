import React from 'react'
import heroimage from "@/assets/Hero.jpg"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='relative'>
        <Image src={heroimage} alt='Hero Image' className='w-full h-[280px] md:h-[400px] object-cover'/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-4 z-20'>
            <h1 className='text-2xl md:text-3xl text-center'>Events from SIAE</h1>
            <p className='text-xs md:text-sm text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2'>
            <div className='w-full bg-white rounded-md translate-y-1/2'>
                <p className='text-2xl'>Search Event</p>
                <p>Date</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection