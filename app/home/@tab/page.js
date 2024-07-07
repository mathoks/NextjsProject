import Ads from '@/app/ui/adds'
import Link from 'next/link'
import React from 'react'

const defaultP = () => {
  return (
    <div className=''>
    <h2 className="p-4 pb-0 font-semibold text-base"><Link href={'/home/Discorver'}>Discount Sales</Link></h2>
      <Ads/>
    </div>
  )
}

export default defaultP
