import Ads from '@/app/ui/adds'
import Link from 'next/link'
import React from 'react'

const defaultP = () => {
  return (
    <div>
    <div className="p-4 pb-0 font-semibold text-lg"><Link href={'/home/Arrivals'}>New Arrivals</Link></div>
      <Ads/>
    </div>
  )
}

export default defaultP
