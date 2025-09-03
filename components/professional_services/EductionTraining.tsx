import React from 'react'
import MRO from "@/assets/MRO.jpg"
import ATTC from "@/assets/ATTC.jpg"
import Image from 'next/image'

const EductionTraining = () => {
  return (
    <div>
        <div className='p-5 md:p-0 md:max-w-6xl md:mx-auto flex flex-col md:flex-row md:justify-between md:hidden'>
            <Image src={MRO} alt='Aero STEM' className='w-full h-[250px] object-cover'/>
            <div className='md:py-16 space-y-5 md:space-y-8 md:w-[45%]'>
                <h2 className='text-[#090056] text-2xl md:text-5xl font-bold mt-5'>Education and Training</h2>
                <p className='text-xl font-bold leading-8'>Diploma with CAAS and EASA Licensed Aircraft Engineer Course</p>
                <div className='space-y-4 text-sm text-[#525252]'>
                    <p>Highly tailored industry diploma course approved by CPE (Council of Private Education) for our students to obtain dual-qualification (CAAS + EASA) in only 13 months. Students will receive the Certificate in Aircraft Maintenance, Advanced Certificate in Aircraft Maintenance on their journey to obtaining their full Diploma in Singapore. Our graduates will be able to serve global fleets for a truly high flying career.</p>
                    <ul className='list-disc ml-5'>
                        <li>Our teachers and trainers are certified with Singapore ACLP and ACTA adult training qualifications providing industry-validated course development and corporate training experience.</li>
                        <li>o Over the last 20 years since ATTC, we have helped over 3000+ students to pass their CAAS/EASA 66 tuition and exams.</li>
                    </ul>
                    <span>For more informations, visit <a href="#" className='text-blue-600'>SIAE</a>.</span>
                </div>
            </div>
        </div>
        <div className='p-5 md:p-0 md:max-w-6xl md:mx-auto flex flex-col md:flex-row md:justify-between md:hidden'>
            <Image src={ATTC} alt='Aero STEM' className='h-[250px] object-cover'/>
            <div className='md:py-16 space-y-5 md:space-y-8 md:w-[45%]'>
                <h2 className='text-[#090056] text-2xl md:text-5xl font-bold mt-5'>Singapore CAAS Certification Courses</h2>
                {/* <p className='text-xl font-bold leading-8'>Diploma with CAAS and EASA Licensed Aircraft Engineer Course</p> */}
                <div className='space-y-4 text-sm text-[#525252]'>
                    <div>
                        <p>✓ Aircraft Maintenance Engineering (SAR-66 all modules)</p>
                        <ul className='list-disc ml-8'>
                            <li>CAT A/B1/B2 Aircraft Engineer Tuition and Preparation </li>
                            <li>Workshop Certification Courses </li>
                            <li>CAAS Conversion (CTC) Courses</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold text-[#090056]'>EASA and GCAA Certification Courses</p>
                        <ul className='list-disc ml-8'>
                            <li> CAT A/B1/B2 License Aircraft Engineer Courses (Self study/Full course)</li>
                            <li>Aircraft Type Training (All aircraft types)</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-bold text-[#090056]'>Corporate Courses</p>
                        <ul className='list-disc ml-8'>
                            <li>Aviation Culture</li>
                            <li>Safety and Human Factors</li>
                            <li>Aviation Safety Management Systems</li>
                            <li>Composite Repair & Non-Destructive Testing</li>
                            <li>AS9100D Quality Management</li>
                            <li>Lead Auditor and Auditor</li>
                            <li>Aviation English for Engineers</li>
                        </ul>
                    </div>
                    <p>We understand every company is different and we can customised courses to fit your engineers needs.</p>
                </div>
            </div>
        </div>
        {/* md screen and above */}
        <div className='hidden md:flex md:max-w-6xl md:mx-auto md:gap-8'>
            <div className='flex flex-col w-1/2'>
                <Image src={MRO} alt='Aero STEM' className='w-full h-[600px] lg:h-[520px] object-cover'/>
                <Image src={ATTC} alt='Aero STEM' className='w-full h-[600px] lg:h-[520px] object-cover'/>
            </div>
            <div className='w-1/2 md:px-2 lg:px-0 lg:pl-12 space-y-12 py-12'>
                <div className='space-y-5 md:space-y-8'>
                    <h2 className='text-[#090056] text-2xl md:text-5xl font-bold mt-5'>Education and Training</h2>
                    <p className='text-xl md:text-2xl font-bold leading-8'>Diploma with CAAS and EASA Licensed Aircraft Engineer Course</p>
                    <div className='space-y-4 text-sm lg:text-md text-[#525252]'>
                        <p>Highly tailored industry diploma course approved by CPE (Council of Private Education) for our students to obtain dual-qualification (CAAS + EASA) in only 13 months. Students will receive the Certificate in Aircraft Maintenance, Advanced Certificate in Aircraft Maintenance on their journey to obtaining their full Diploma in Singapore. Our graduates will be able to serve global fleets for a truly high flying career.</p>
                        <ul className='list-disc ml-5'>
                            <li>Our teachers and trainers are certified with Singapore ACLP and ACTA adult training qualifications providing industry-validated course development and corporate training experience.</li>
                            <li>o Over the last 20 years since ATTC, we have helped over 3000+ students to pass their CAAS/EASA 66 tuition and exams.</li>
                        </ul>
                        <span>For more informations, visit <a href="#" className='text-blue-600'>SIAE</a>.</span>
                    </div>
                </div>
                <div className='space-y-5 md:space-y-8'>
                    <h2 className='text-[#090056] text-2xl font-bold mt-5'>Singapore CAAS Certification Courses</h2>
                    {/* <p className='text-xl font-bold leading-8'>Diploma with CAAS and EASA Licensed Aircraft Engineer Course</p> */}
                    <div className='space-y-4 text-sm lg:text-md text-[#525252]'>
                        <div>
                            <p>✓ Aircraft Maintenance Engineering (SAR-66 all modules)</p>
                            <ul className='list-disc ml-8'>
                                <li>CAT A/B1/B2 Aircraft Engineer Tuition and Preparation </li>
                                <li>Workshop Certification Courses </li>
                                <li>CAAS Conversion (CTC) Courses</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-bold text-[#090056]'>EASA and GCAA Certification Courses</p>
                            <ul className='list-disc ml-8'>
                                <li> CAT A/B1/B2 License Aircraft Engineer Courses (Self study/Full course)</li>
                                <li>Aircraft Type Training (All aircraft types)</li>
                            </ul>
                        </div>
                        <div>
                            <p className='font-bold text-[#090056]'>Corporate Courses</p>
                            <ul className='list-disc ml-8'>
                                <li>Aviation Culture</li>
                                <li>Safety and Human Factors</li>
                                <li>Aviation Safety Management Systems</li>
                                <li>Composite Repair & Non-Destructive Testing</li>
                                <li>AS9100D Quality Management</li>
                                <li>Lead Auditor and Auditor</li>
                                <li>Aviation English for Engineers</li>
                            </ul>
                        </div>
                        <p>We understand every company is different and we can customised courses to fit your engineers needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EductionTraining