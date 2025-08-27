import Image from 'next/image'
import React from 'react'
import CAAS from "@/assets/CAAS.png";
import EASA from "@/assets/EASA.png";
import FA from "@/assets/FA.png";

const Hero = () => {
  return (
    <div className='p-5 space-y-5 mt-[100px] mb-[80px] md:flex md:max-w-6xl md:mx-auto md:gap-20'>
        <div className='space-y-3 md:w-[55%]'>
            <h2 className='text-[#090056] text-xl md:text-5xl font-bold'>Professional Services</h2>
            <p className='text-lg md:text-2xl font-semibold'>SIAE is both a <span className='text-[#090056]'>trusted guardian</span> of industry standards and a <span className='text-[#090056]'>future-shaping force</span>.</p>
            <div className='hidden md:flex items-center justify-start gap-12 w-full'>
                <Image src={EASA} alt="" className='w-1/3'/>
                <Image src={FA} alt="" className='w-1/5'/>
            </div>
        </div>
        <div className='flex items-center justify-between w-full md:hidden'>
            <Image src={EASA} alt="" className='w-[30%]'/>
            <Image src={CAAS} alt=""className='w-[30%]'/>
            <Image src={FA} alt="" className='w-[22%]'/>
        </div>
        <div className='hidden md:block md:w-[40%] md:mx-auto'>
            <Image src={CAAS} alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default Hero