"use client"

import React from 'react'
import { useFormState } from 'react-dom'
import { addProduct } from '@/app/actions/users/addProduct'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import { ProductStatus } from './productCart'


const ProductAttri = ({data}) => {
  const {id, name, description, category, price, negotiable, availability, prodImage } = data
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(addProduct, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const show = " *" 

    const handleFocus = (e) => {
      e.target.nextElementSibling.style.visibility = 'visible'
      if (e.target){
      e.target.nextElementSibling.textContent = e.target.value.length + `/${e.target.maxLength}`;
      if(e.target.value.length === e.target.maxLength || e.target.value.length > e.target.maxLength){
          e.target.nextElementSibling.style.color = 'red'
      }else{
          e.target.nextElementSibling.style.color = 'black'
      
      }
      }
    }

    const handleBlur = (e) => {  
      // if (e.target.value.length === 0)
       e.target.nextElementSibling.style.visibility = 'hidden'
    }
  return (
    <div className='flex flex-col space-y-2 bg-white '>
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
      <form action={dispatch} className='flex flex-col space-y-4 md:mx-auto'>
      <section className='flex flex-col space-y-1 no_border'>
      <label htmlFor='brand' className='font-semibold'>Brand{<p className='text-red-700 inline'>{show}</p>}</label>
      <input maxLength={30} onChange={handleFocus} type='text' name='brand' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
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
        <section className='flex flex-col space-y-2 no_border'>
        <label className='font-semibold'>Color{<p className='text-red-700 inline'>{show}</p>}</label>    
        <input maxLength={10} onChange={handleFocus} type='text' name='color' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        
        <section className='flex flex-col space-y-2 no_border'>
           <label  className='font-semibold' htmlFor='weight'>weight(kg)</label>
           <input maxLength={5} onChange={handleFocus} type='number' name='weight' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'weight' || states?.errors?.name === 'weight') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
            <label htmlFor='waranty' className='font-semibold'>Waranty{<p className='text-red-700 inline'>{show}</p>}</label>
            <input maxLength={100} onChange={handleFocus} type='text' name='waranty' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'waranty' || states?.errors?.name === 'waranty') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label className='font-semibold'>material</label>
        <input maxLength={100} onChange={handleFocus} type='text' name='material' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'material' || states?.errors?.name === 'material') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-2 no_border'>
           <label  className='font-semibold' htmlFor='weight'>Size{<span className='font-normal text-[12px]'> (small, meduim, large, X, SM, XXL, L)</span>}</label>
           <input maxLength={20} onChange={handleFocus} type='text' name='size' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'size' || states?.errors?.name === 'size') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <button className='w-full bg-violet-800 p-2 rounded-md font-semibold text-white '>Update</button>
      </form>
    </div>
  )
}

export default ProductAttri


