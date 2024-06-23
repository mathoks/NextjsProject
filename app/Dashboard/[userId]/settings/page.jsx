import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material'
import React from 'react'

const page = () => {
  return (
    <div className='b bg-gray-300 w-screen text-slate-950'>
        <section className='flex justify-start items-center bg-white w-screen p-4'>
            <ArrowBackOutlined fontSize='medium'/>
            <span>Settings</span>
            <span></span>
        </section>
        <section className='bg-white space-y-2 p-4'>
        <span className='flex'>
        <span>Language</span>
        <span className='flex text-gray-300 space-x-2 items-center'>
        <span>English</span>
        <ArrowForwardOutlined/>
        </span>
        </span>
        <span className='w-screen h-1 bg-gray-300'/>
        <span className='flex'>
        <span>Currency</span>
        <span className='flex text-gray-300 space-x-2 items-center'>
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
        <span>
            <ArrowForwardOutlined fontSize='medium'/>
        </span>
        </span>
        </section>
    </div>
  )
}

export default page