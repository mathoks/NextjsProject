"use client"

import { ProductCart, PricePolicy, LinkToBranch } from '@/app/ui/uiForms/productCart'
import React from 'react'


const ProductForm = ({data}) => {
  return (
    <div className='mx-auto flex flex-col space-y-2 bg-white'>
      <form className='flex flex-col space-y-4 min-w-80 p-6 rounded-md  shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name' className='font-semibold'>Name</label>
      <input type='text' className='p-2.5 bg-[#fcfaff] ring-1 ring-[#6A0DAD] rounded-md shadow-md'/>
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='address' className='font-semibold '>Product Description</label>
            <input name='text' className='p-2.5 bg-[#fcfaff] ring-1 ring-[#6A0DAD] rounded-md shadow-md'/>
        </section>
        <section className='flex flex-col space-y-2'>
            <label className='font-semibold'>category</label>
            <ProductCart/>
        </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='price' className='font-semibold'> Price</label>
            <input type='number' className='p-2.5 bg-[#fcfaff] ring-1 ring-[#6A0DAD] rounded-md shadow-md'/>
        </section>
        <section className='pb-2'>
        <PricePolicy/>
        </section>
        <section className='pb-2'>
        <label>link to a branch</label>
            <LinkToBranch option={data}/>
        </section>
        <button type='submit' className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm

