import Image from 'next/image'
import React from 'react'
import museum from "@/assets/museum.jpg"

const AeroSTEM = () => {
  return (
    <div className='bg-[#fffaf2] overflow-hidden'>
        <div className='p-5 md:p-0 md:max-w-6xl md:mx-auto flex flex-col md:flex-row-reverse md:justify-between'>
            <Image src={museum} alt='Aero STEM' className='w-full object-cover'/>
            <div className='md:py-16 md:px-5 space-y-5 md:space-y-8 md:max-w-[45%]'>
                <h2 className='text-[#090056] text-4xl md:text-5xl font-bold mt-5'>AeroSTEM</h2>
                <div className='space-y-4 text-sm lg:text-md text-[#525252]'>
                    <p>MW proprietary AeroSTEM education with aerospace inspires our youth through immersive youth enrichment and forward-looking professional development pathways.</p>
                    <p>Guided by our signature H.E.L.M.™ approach—Happiness, Empowerment, Leadership, and Mentorship—we equip learners to explore their potential, gain real-world exposure, and thrive in the aviation and aerospace sectors.</p>
                    <p>From our AeroSTEM learning journeys and hangar tours for students, to international training partnerships for aspiring and working aviation professionals, MW creates meaningful entry points into a rapidly growing aviation industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AeroSTEM