"use client"

import { ProductCart, PricePolicy, LinkToBranch, Availability } from '@/app/ui/uiForms/productCart'
import React, { useEffect } from 'react'
import ImageUploader from '../utilComp/ImageUploader'
import { useFormState,  } from 'react-dom'
import { addProduct } from '@/app/actions/users/addProduct'
import { validate } from '@/app/lib/utills/validator'
import toast from 'react-hot-toast'





const ProductForm = ({data}) => {
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(addProduct, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const show = " *" 

    
    useEffect(() => {
      const notify = () => toast(state.message);  
      if (state.success === true)
      notify();
    },[state.success, state.message]);
    

  return (
    <div className='mx-auto flex flex-col space-y-2 bg-white mb-16 pb-20'>
     <section>
      <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message  &&
            <p className={`text-sm ${state.success ? 'text-green-400' :  'text-red-500'}`}>
              {state?.message  + " "} 
              {state?.success ?  state.message : ''}
            </p>
          }
    </span>
    </section>
       <form action={dispatch} className='flex flex-col space-y-4 min-w-80 p-6 rounded-md  shadow-md'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name' className='font-semibold'>Name{<p className='text-red-700 inline'>{show}</p>}</label>
      <input onBlur={dispatch2} type='text' name='name' className='p-2.5 bg-[#fcfaff]  rounded-md ring-1 ring-slate-300'/>
      <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'name' || states?.errors?.name === 'name') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='description' className='font-semibold '>Product Description{<p className='text-red-700 inline'>{show}</p>}</label>
            <input onBlur={dispatch2} type='text' name='description' className='p-2.5 bg-[#fcfaff] rounded-md ring-1 ring-slate-300'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'description' || states?.errors?.name === 'description') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section>
        <label className='font-semibold'>Add an Image{<p className='text-red-700 inline'>{show}</p>} <span className='font-light text-[12px] ml-4 text-red-600'>minimum 2 pictures</span></label>
        <ImageUploader/>
        </section>
        
        <section className='flex flex-col space-y-2'>
            <label className='font-semibold'>category{<p className='text-red-700 inline'>{show}</p>}</label>
            <ProductCart/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'category' || states?.errors?.name === 'category') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='price' className='font-semibold'> Price{<p className='text-red-700 inline'>{show}</p>}</label>
            <input onBlur={dispatch2} type='number' name='price' className='p-2.5 bg-[#fcfaff] rounded-md ring-1 ring-slate-300'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'price' || states?.errors?.name === 'price') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1'>
        <label className='font-semibold'>Price flexibility{<p className='text-red-700 inline'>{show}</p>}</label>
        <PricePolicy/>
        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'negotiable' || states?.errors?.name === 'negotiable') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1'>
        <label className='font-semibold pb-2'>Availability{<p className='text-red-700 inline'>{show}</p>}</label>
        <Availability/>
        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'availability' || states?.errors?.name === 'availability') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='pb-2 space-y-1'>
        <label className='font-semibold'>Link to a branch</label>
            <LinkToBranch option={data}/>
        </section>
        <button type='submit'  className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
      

    </div>
  )
}

export default ProductForm

