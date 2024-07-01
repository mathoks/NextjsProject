import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container ring-4 flex-col flex mt-10 w-fit text-center mx-auto'>
      <section className='flex flex-col mt-10 container  md:flex md:justify-evenly'>
        <div>
            <p>fetch store info here</p>
        </div>
        <div>
        <button > <Link href={'createstore/store'}>update store</Link></button>
        </div>
       
      </section>
    </div>
  )
}

export default page
