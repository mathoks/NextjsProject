import { auth } from '@/auth'
import { Settings } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'


const page = async() => {
    const session = await auth()
const {user: {name, image}} = session
  return (
    <div className='h-screen'>
      <header className='bg-[#6A0DAD] h-44 p-4 text-white'>
      <span className='flex justify-end'>
      <Settings fontSize='medium' />
      </span>
      
        <span className='flex space-x-2 items-center'>
            <Avatar src={image}/>
            <span className='flex flex-col space-y-1'>
            <p className='f font-semibold'>{name}</p>
            <p className='text-sm'>Lamb industries limited</p>
            </span>
        </span>
        <div className='bg-white rounded-t-md h-28 px-4 text-black w-fit'>
            <span className='flex justify-between items-center'><p>Complete your profile</p><button className='py-1 px-2 bg-[#6A0DAD] text-white'>Go</button></span>
        </div>
      </header>
      <section>

      </section>
    </div>
  )
}

export default page
