import Image from 'next/image'
import React from 'react'
import Training from "@/assets/Training.jpg"
import MW from "@/assets/MW.png"

const MWChapter = () => {
  return (
    <div className='p-5 md:max-w-6xl md:mx-auto flex flex-col space-y-4 my-12'>
        <Image src={Training} alt='MW New Chapter' className='w-full md:h-[600px] object-cover'/>
        <div className='space-y-4'>
            <div className='flex items-center justify-start gap-4'>
                <Image src={MW} alt='MW Logo' className='w-16 h-16 md:w-24 md:h-24'/>
                <h2 className='text-[#090056] font-bold text-[22px] md:text-5xl'>MW – A New Chapter in Training Excellence</h2>
            </div>
            <div className='space-y-3 text-sm lg:text-md text-[#525252] md:space-y-6'>
                <p>In the post-pandemic recovery phase, SIAE has taken proactive steps to renew its commitment to aerospace education and workforce development. In 2025, MW was appointed as the new training facilitator for SIAE, marking a new chapter in the Institute’s journey to nurture the next generation of aerospace professionals.</p>
                <p>MW continues the legacy of ATTC with a refreshed holistic approach—combining academic rigor, industry relevance, and aviation values. Working closely with international regulators, MRO consultants, and training partners, MW delivers certification programs, skills upgrading courses, and youth outreach initiatives to meet evolving industry needs.</p>
                <p>With a focus on inclusivity, flexibility, and global collaboration, SIAE and MW are shaping a sustainable future for aerospace training—one that is resilient, forward-looking, and ready to meet the demands of a rapidly changing world.</p>
            </div>
        </div>
    </div>
  )
}

export default MWChapter