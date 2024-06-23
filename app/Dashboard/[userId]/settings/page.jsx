import { ArrowBackOutlined, ArrowForwardIos, ArrowForwardIosOutlined, ArrowForwardOutlined } from '@mui/icons-material'
import React from 'react'

const page = () => {
  return (
    <div className='b bg-gray-200 w-screen text-slate-950 flex flex-col space-y-3'>
        <section className='flex justify-between items-center bg-white w-screen p-4'>
            <ArrowForwardIos fontSize='medium'/>
            <span>Settings</span>
            <span></span>
        </section>
        <section className='bg-white space-y-2 p-4'>
        <span className='flex justify-between'>
        <span>Language</span>
        <span className='flex text-gray-400 space-x-2 items-center text-sm'>
        <span>English</span>
        <ArrowForwardIosOutlined/>
        </span>
        </span>
        <span className='w-screen h-1 bg-gray-300'></span>
        <span className='flex justify-between'>
        <span>Currency</span>
        <span className='flex text-gray-400 space-x-2 items-center text-sm'>
        <span>NGN</span>
        <ArrowForwardOutlined/>
        </span>
        </span>
        </section>
        <section className='bg-white p-4'>
        <span className='flex justify-between items-center'>
        <span >
        Notifications
        </span>
        <span className='text-gray-400'>
            <ArrowForwardOutlined fontSize='medium'/>
        </span>
        </span>
        </section>
    </div>
  )
}

export default page