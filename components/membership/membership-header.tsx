import React from 'react'

const Header = () => {
  return (
    <div className='mx-6 sm:px-12 md:max-w-6xl md:mx-auto my-16 md:my-28'>
        <div className='text-center mb-8 md:mb-28 max-w-5xl mx-auto space-y-4'>
            <p className='text-lg font-[300]'>SIAE SINCE 1975</p>
            <h1 className='text-2xl leading-8 md:text-5xl font-bold md:leading-16 text-[#090056]'>Be Part of the Oldest Aviation Professional Community in Singapore</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
            <h2 className='md:w-1/4 text-xl md:text-3xl text-[#090056] text-center md:text-left font-bold'>Individual Membership</h2>
            <ul className='!list-disc md:w-3/4 text-md md:text-lg font-[300] px-6'>
                <li>Please send supporting documents including education certificate copies and (1) passport after we received your application, in order to complete application.</li>
                <li>Your payment will be fully refunded if your application is unsuccessful.</li>
                <li>Membership period shall be from 1st Apr to 31st Mar of subsequent year and there shall be no pro-rating of membership.  Any signup from 1st Jan to 1st Apr shall be recognized and granted provisional membership until subscription officially commences on 1st Apr.</li>
            </ul>
        </div>
    </div>
  )
}

export default Header