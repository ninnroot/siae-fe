import Hero from '@/components/event/Hero'
import PreviousEvent from '@/components/Event/PreviousEvent'
import IncomingEvent from "@/components/Event/IncomingEvent"
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <IncomingEvent />
        <PreviousEvent />
    </div>
  )
}

export default page