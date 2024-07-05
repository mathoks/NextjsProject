import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container ring-4 flex-col mx-auto flex md:mt-10 w-fit text-center '>
    <section className='flex flex-col p-10 container  md:flex md:justify-evenly space-y-2'>
    
    <p>you have no branch added</p>
    
    <button className='bg-[#6A0DAD] text-white px-2.5 py-1'> <Link href={'createstore/store'}>Add a branch</Link></button>

      </section>
      </div>
  )
}

export default page
