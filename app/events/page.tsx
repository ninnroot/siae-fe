import PreviousEvent from '@/components/Event/PreviousEvent'
import IncomingEvent from "@/components/Event/IncomingEvent"
import Bannar from "@/components/Event/Banner"
import React from 'react'

const page = () => {
  return (
    <div>
        <Bannar />
        <IncomingEvent />
        <PreviousEvent />
    </div>
  )
}

export default page