'use client'
import React, { useState, useEffect } from 'react'
import { AddPhotoAlternate, Visibility, VisibilityOff } from '@mui/icons-material'
import { addUser } from '@/app/actions/users/addUsers'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import Countries from '@/app/lib/utills/countries'
 import {Avatar} from '@mui/material'
 
 

const StoreForm = () => {
    const [ptype, setptype] = useState('password')
    const initialState = { message: null, errors: {}, success: null };
    const [state, dispatch] = useFormState(addUser, initialState);
     const [states, dispatch2] = useFormState(validate, initialState);
     const [src, setsrc] = useState('')

    //  useEffect(() => {
    //   const pic =  document?.getElementById('image').files[0]
    //   const circle = document?.getElementById('image-add')
    //   if(!pic){
    //     circle.innerHTML = `${<AddPhotoAlternate/>}`
    //   }
      
    //  }, [])
     

  return (
    <div className='text-black  mx-auto w-[80%] mt-24 md:flex md:justify-around'>
    <section className='md:mx-auto space-y-4 flex-col md:flex md:justify-start md:my-2'>
    <header className='mb-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>Lets Build Your Store Together</h1>
    </header>
    <span className='relative pb-10 space-y-3'>
    <Avatar src={src} id='image-add'  sx={{width: 60 , height: 60, bgcolor: 'white'}} className='ring-2 shadow-md' ><AddPhotoAlternate color='primary' sx={{color :'#007bff'}} fontSize='large' /></Avatar>
    <input type='file' accept='image/*' id='image' className='bo rounded-[50%] w-[50px] h-[50px] border-none p-0 absolute mx-auto  -mt-10 opacity-0'/>
    <p className=''>Add a Logo</p>
    </span>
    </section>
    <section>
    <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message &&
            <p className={`text-sm ${state.success ? 'text-green-400' :  'text-red-500'}`}>
              {state?.message  + " "} 
              {state?.success ?  <Link href= {'/login'} className="hover:text-brand underline underline-offset-4">click here to Login</Link> : ''}
            </p>
          }
    </span>
      <form className='flex flex-col space-y-4' action={dispatch}>
      <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium text-gray-700 required:after:content-['*'] required:after:text-red-500" htmlFor="Username"> Storename</label>
        <input id="storename"
              placeholder="mercyStores"
              type="text"
              autoCapitalize="none"
              autoComplete="cc-name"
              name='storename'
              autoCorrect="off"
              required
              // onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md fit_placeholder'
              pattern='[a-zA-Z0-9]{3,20}'
            //   disabled={isLoading || isGitHubLoading}
            />

        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'storename' || states?.errors?.name === 'storename') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium text-gray-700 required:after:content-['*'] required:after:text-red-500" htmlFor="address">address</label>
        <input id="address"
              placeholder="name@123"
              type="text"
              autoCapitalize="none"
              autoComplete= "address-level1"
              name='address'
              autoCorrect="off"
              required
              // onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md'
              pattern='[a-zA-Z0-9]{6,30}'
              enterKeyHint='next'
            // disabled={isLoading || isGitHubLoading}
            />

        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'address' || states?.errors?.name === 'address') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='w- [97%]'>
            <Countries/>
        </section>

        <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium text-gray-700 required:after:content-['*'] required:after:text-red-500" htmlFor="Username">Store Description</label>
        <textarea id="uername"
              placeholder="Tell Your Story, Sell Your Brand...."
              type="text"
              autoCapitalize="none"
              name='description'
              autoCorrect="off"
              required
              maxLength={200}
              // onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md focus:border-[#664982]'
              pattern='[a-zA-Z0-9]{0,200}'
            //   disabled={isLoading || isGitHubLoading}
            />

        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'username' || states?.errors?.name === 'username') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium text-gray-700 required:after:content-['*'] required:after:text-red-500" htmlFor="phone"> Business Line</label>
        <input id="tel"
              placeholder="0809678945"
              type="tel"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              name='tel'
              inputMode='tel'

              required
              // onBlur={dispatch2}
              className='w-full p-4 shadow rounded-md '
            //   disabled={isLoading || isGitHubLoading}

              />
        <span id="customer-error"  aria-live="polite" className=" mx-auto text-left" aria-atomic="true" >
        {(state?.errors.name === 'email' || states?.errors.name === 'email') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error}
              
            </p>
          }
    </span>
        </section>
        
       
        <button  className='bg-blue-500 py-4 rounded-md text-white disabled:opacity-70' id='sign-up'> Sign up</button>
      </form>
      </section>
    </div>
  )
}

export default StoreForm
