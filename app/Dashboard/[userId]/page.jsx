
import ProgressBar from '@/app/ui/utilComp/ProgressBar'
import { auth } from '@/auth'
import { Settings } from '@mui/icons-material'
import { Avatar} from '@mui/material'
import dynamic from 'next/dynamic'
import React from 'react'

// const ProgressBar = dynamic(()=>import('../../ui/utilComp/ProgressBar'), {ssr: false})
const page = async() => {
    const session = await auth()
const {user: {name, image}} = session
  return (
    <div className='h-screen bg-gray-50'>
      <header className='bg-[#6A0DAD] h-44 p-4 text-white flex-col space-y-2'>
      <span className='flex justify-end'>
      <Settings fontSize='medium' />
      </span>
      
        <div className='flex space-x-2 items-center'>
            <Avatar src={image}/>
            <span className='flex flex-col space-y-1'>
            <p className='f font-semibold'>{name}</p>
            <p className='text-sm'>Lamb industries limited</p>
            </span>
        </div>
        <div className='bg-white flex flex-col rounded-t-md h-20 p-4 text-black space-y-3 z-40 shadow'>
            <span className='flex justify-between items-center'><p>Complete your profile</p><button className='py-1 px-4 bg-[#6A0DAD] text-white rounded-full'>Go</button></span>
            <span>
                <ProgressBar value={70}/>
            </span>
        </div>
      </header>
      <section>

      </section>
    </div>
  )
}

export default page
