import Image from 'next/image'
import React from 'react'
import CompanyCerti from "@/assets/CompanyCerti.png"

const CompanyCertification = () => {
  return (
    <div className='bg-[#fffaf2]'>
        <div className='p-5 md:p-0 md:max-w-6xl md:mx-auto flex flex-col md:flex-row-reverse md:justify-between'>
            <Image src={CompanyCerti} alt='Aero STEM' className='w-full h-[250px] md:h-[650px] lg:h-[600px] object-cover md:w-1/2'/>
            <div className='md:py-16 md:px-5 lg:px-0 space-y-5 md:space-y-8 md:w-[45%]'>
                <h2 className='text-[#090056] text-2xl md:text-5xl font-bold mt-5'>Company Certification</h2>
                <p className='space-y-4 text-sm lg:text-md text-[#525252]'>We support companies preparing for CAAS, EASA and FAA certifications approvals. Our highly experienced team of consultants provide support for application and audits of CAAS SAR-66 and EASA Part 66 DOA, POA and 145 maintenance organisation approvals.</p>
                <h2 className='text-[#090056] text-2xl font-bold mt-5'>Partner With Us</h2>
                <div>
                    <p className='text-[#090056] font-bold'>For Organizations and schools</p>
                    <p className='space-y-4 text-sm lg:text-md text-[#525252]'>Bespoke training and certification aligned with your operational needs</p>
                </div>
                <div>
                    <p className='text-[#090056] font-bold'>For Professionals</p>
                    <p className='space-y-4 text-sm lg:text-md text-[#525252]'>Advance your career with globally portable credentials.</p>
                </div>
                <div className='lg:text-md text-[#525252]'>
                    <p>For more information on training and courses: <a href="#">www.mwings.io</a> </p>
                    <p>For enquiries on company certification and supply chain issues: <a href="#">msa@mwings.io</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyCertification