import Ads from '@/app/ui/adds'
import Link from 'next/link'
import React from 'react'

const defaultP = () => {
  return (
    <>
    <Link className='py-4 pb-0 font-semibold text-base' href={'/home/Arrivals'}>New Arrivals</Link>
      <Ads/>
    </>
  )
}

export default defaultP
