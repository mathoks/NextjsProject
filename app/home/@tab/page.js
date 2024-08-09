import Ads from '@/app/ui/adds'
import Link from 'next/link'
import React from 'react'

const defaultP = () => {
  return (
    <>
    <Link href={'/home/Discorver'} className=" pb-0 font-semibold text-base">Discount Sales</Link>
      <Ads/>
    </>
  )
}

export default defaultP
