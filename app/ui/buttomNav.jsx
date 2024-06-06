import { ArrowUpward } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const ButtomNav = () => {
  return (
    <div className=' text-white flex flex-col pb-2 '>
      <div className='flex flex-col items-center justify-center space-y-1 bg-indigo-400 p-1 text-sm '>
      <span>
      <Link href={'#'}>
        <ArrowUpward fontSize='inherit'/>
        </Link>
      </span>
      <p>Back to Top</p>
      </div>
      <div className=' bg-indigo-500'>
      <div className=' flex gap-4 ml-auto  justify-start p-2 flex-wrap text-sm h-24'>
      <p>My Account</p>
      <p>My Orders</p>
      <p>My List</p>
      <p>Open a shop on Mymart</p>
      <p>Customer Service</p>
      </div>
      </div>
      <div className='flex flex-col justify-start bg-indigo-700 space-y-2'>
      <div className='flex justify-between m-2'>
      <span className='flex gap-1'>
      <span className='text- text-green-500'>&#x1F310;</span>
      <p>English</p>
      </span>
      <span className='flex gap-1'>
      <span>&#x20A6;</span>
        <p>NGN-NG Naira</p>
        </span>
        <span className='flex gap-1'>
        <span>&#x1F1F3;&#x1F1EC;</span>

            <p>Nigeria</p>
        </span>
        
      </div>
        <div className='flex justify-center items-center'>
            <p>Already a customer? Sign in</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <p>Conditions of Use </p>
            <p>Privacy Notice</p>
        </div>
        <div className='flex justify-center items-center gap-4 text-sm'>
        <p>@ 2022-2024, Mymart.com, Inc</p>
        </div>
      </div>
    </div>
  )
}

export default ButtomNav
