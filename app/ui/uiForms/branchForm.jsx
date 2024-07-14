"use client"
import Countries from '@/app/lib/utills/countries'
import React from 'react'

const BranchForm = () => {
  return (
    <div className='mx-auto flex flex-col space-y-2'>
      <form className='flex flex-col space-y-2 w-80 ring-2 ring-[#6A0DAD] p-6 rounded-md shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name'>Name</label>
      <input className='p-2.5'/>
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='address'>Address</label>
            <input  className='p-2.5'/>
        </section>
        <section className=''>
            <Countries/>
        </section>
        <section className='flex flex-col space-y-1 pb-2'>
            <label htmlFor='phone'> phone number</label>
            <input  className='p-2.5'/>
        </section>
        <button className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
    </div>
  )
}

export default BranchForm

