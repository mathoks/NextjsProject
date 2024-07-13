import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container ring-4 flex-col mx-auto flex md:mt-10 w-fit text-center text-black'>
      <section className='flex flex-col p-10 container  md:flex md:justify-evenly space-y-2'>
        <div className='border ring-2'>
            <p>You do not have a store </p>
        </div>
        <div>
        <button className='bg-[#6A0DAD] text-white px-2.5 py-1'> <Link href={'createstore/store'}>update store</Link></button>
        </div>
       
      </section>
    </div>
  )
}

export default page
