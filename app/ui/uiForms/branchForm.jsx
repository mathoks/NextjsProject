"use client"
import Countries from '@/app/lib/utills/countries'
import React from 'react'

const BranchForm = () => {
  return (
    <div className='mx-auto flex flex-col space-y-2'>
      <form className='flex flex-col space-y-2 w-60 ring-2 p-6 rounded-md shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name'>Name</label>
      <input />
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='address'>Address</label>
            <input/>
        </section>
        <section className=''>
            <Countries/>
        </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='phone'> phone number</label>
            <input/>
        </section>
      </form>
    </div>
  )
}

export default BranchForm

