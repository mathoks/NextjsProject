"use client"

import React from 'react'
import { useFormState } from 'react-dom'
import { addProduct } from '@/app/actions/users/addProduct'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import { ProductStatus } from './productCart'


const ProductAttri = ({data}) => {
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(addProduct, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const show = " *" 
  return (
    <div className='mx-auto flex flex-col space-y-2 bg-white mb-36 '>
     <section>
      <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message  &&
            <p className={`text-sm ${state.success ? 'text-green-400' :  'text-red-500'}`}>
              {state?.message  + " "} 
              {state?.success ?  <Link href= {'/login'} className="hover:text-brand underline underline-offset-4">click here to Login</Link> : ''}
            </p>
          }
    </span>
    </section>
      <form action={dispatch} className='flex flex-col space-y-4 min-w-80 p-6 rounded-md  shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name' className='font-semibold'>Brand{<p className='text-red-700 inline'>{show}</p>}</label>
      <input required  type='text' name='name' className='p-2.5 bg-[#fcfaff]  rounded-md shadow-md'/>
      <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'name' || states?.errors?.name === 'name') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
      </section>
        <section className='flex flex-col space-y-1'>
        <label className='font-semibold'  htmlFor='status'>Status{<p className='text-red-700 inline'>{show}</p>}</label>
           <ProductStatus/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'status' || states?.errors?.name === 'status') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-2'>
        <label className='font-semibold'>Color{<p className='text-red-700 inline'>{show}</p>}</label>
        <input name={'color'} className='p-2.5 bg-[#fcfaff] rounded-md shadow-md'/>
        </section>
        
        <section className='flex flex-col space-y-2'>
           <label  className='font-semibold' htmlFor='weight'>weight(kg)</label>
           <input className='p-2.5 bg-[#fcfaff] rounded-md shadow-md' name='weight'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'weight' || states?.errors?.name === 'weight') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='waranty' className='font-semibold'>Waranty{<p className='text-red-700 inline'>{show}</p>}</label>
            <input type='text' name='waranty' className='p-2.5 bg-[#fcfaff] rounded-md shadow-md'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'waranty' || states?.errors?.name === 'waranty') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1'>
        <label className='font-semibold'>material</label>
        <input name='material' className='p-2.5 bg-[#fcfaff] rounded-md shadow-md'/>
        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'material' || states?.errors?.name === 'material') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-2'>
           <label  className='font-semibold' htmlFor='weight'>Size{<span className='font-normal text-[12px]'> (small, meduim, large, X, SM, XXL, L)</span>}</label>
           <input className='p-2.5 bg-[#fcfaff] rounded-md shadow-md' name='weight'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'size' || states?.errors?.name === 'size') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <button type='submit'  className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ProductAttri

