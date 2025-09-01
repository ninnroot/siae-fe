import AeroSTEM from '@/components/professional_services/AeroSTEM'
import Aviation from '@/components/professional_services/Aviation'
import CompanyCertification from '@/components/professional_services/CompanyCertification'
import EductionTraining from '@/components/professional_services/EductionTraining'
import Hero from '@/components/professional_services/Hero'
import MWChapter from '@/components/professional_services/MWChapter'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Aviation />
        <MWChapter />
        <AeroSTEM />
        <EductionTraining />
        <CompanyCertification />
    </div>
  )
}

export default page