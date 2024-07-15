"use client"
import Countries from '@/app/lib/utills/countries'
import React from 'react'

const BranchForm = () => {
  return (
    <div className='mx-auto flex flex-col space-y-2 bg-white'>
      <form className='flex flex-col space-y-2 w-80  p-6 rounded-md  shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name' className='font-semibold'>Name</label>
      <input className='p-2.5 bg-[#fcfaff] rounded-md'/>
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='address' className='font-semibold'>Address</label>
            <input  className='p-2.5 bg-[#fcfaff]'/>
        </section>
        <section className=''>
            <Countries/>
        </section>
        <section className='flex flex-col space-y-1 pb-2'>
            <label className='font-semibold' htmlFor='phone'> phone number</label>
            <input  className='p-2.5 bg-[#fcfaff] rounded-md'/>
        </section>
        <button className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
    </div>
  )
}

export default BranchForm

