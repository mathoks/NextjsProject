"use client"
import Countries from '@/app/lib/utills/countries'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import { addBranch } from '@/app/actions/users/addBranch'
import toast from 'react-hot-toast'


const BranchForm = () => {

    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(addBranch, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const show = " *"

    useEffect(() => {
      const notify = () => toast(state.message);  
      if (state.success === true)
      notify();
    },[state.success, state.message]);
  return (
    <div className='mx-auto flex flex-col space-y-2 bg-white'>
    <section>
      <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message  &&
            <p className={`text-sm ${state.success ? 'text-green-400' :  'text-red-500'}`}>
              {state?.message  + " "} 
              {state?.success ?  'great' : ''}
            </p>
          }
    </span>
    </section>
      <form action={dispatch} className='flex flex-col space-y-4 p-6 rounded-md  shadow-md min-w-80'>
      <section className='flex flex-col space-y-1'>
      <label htmlFor='name' className='font-semibold'>Name{<p className='text-red-700 inline'>{show}</p>}</label>
      <input onBlur={dispatch2} name='storename' className='p-2.5 bg-[#fcfaff] rounded-md  ring-1 ring-slate-300'/>
      <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'storename' || states?.errors?.name === 'storename') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
      </section>
        <section className='flex flex-col space-y-1'>
            <label htmlFor='address' className='font-semibold'>Address{<p className='text-red-700 inline'>{show}</p>}</label>
            <input name='address' onBlur={dispatch2} className='p-2.5 bg-[#fcfaff] ring-1 ring-slate-300 rounded-md'/>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'address' || states?.errors?.name === 'address') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className=''>
            <Countries/>
        </section>
        <section className='flex flex-col space-y-1 pb-2'>
            <label className='font-semibold' htmlFor='phone'> phone number{<p className='text-red-700 inline'>{show}</p>}</label>
            <input name='tel' className='p-2.5 bg-[#fcfaff]  ring-1 ring-slate-300 rounded-md'/>
            <span id="customer-error"  aria-live="polite" className="text-left" aria-atomic="true" >
        {(state?.errors.name === 'tel' || states?.errors.name === 'tel') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error}
              
            </p>
          }
    </span>
        </section>
        <button className='rounded-md bg-[#6A0DAD] py-2.5  text-white'>Submit</button>
      </form>
    </div>
  )
}

export default BranchForm

