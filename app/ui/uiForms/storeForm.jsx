'use client'
import React, { useState, useEffect } from 'react'
import { AddPhotoAlternate } from '@mui/icons-material'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import Countries from '@/app/lib/utills/countries'
 import {Avatar} from '@mui/material'
import { createStore } from '@/app/actions/users/createStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
 

const StoreForm = () => {
  const session = useSession()
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(createStore, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const [src, setsrc] = useState(null)
    const router = useRouter()
    const [show, setshow] = useState(' *')
    const [ImageName, setImage]= useState('no Image choosen ggggggghhihijiojo')
    
    if(state.success === true){
      const notify = () => toast(state.message);
      notify();
      // router.replace(`/store/${state.store}`)
    }
    const handleImage = ()=>{
      const pic =  document?.getElementById('image').files[0]
      if(pic){
        const reader = new FileReader()
        if(reader){
          reader.onload = (e)=>{
            setsrc(e?.target.result)
          }
          reader.readAsDataURL(pic)
        }
        setImage(pic.name)
      }
    else 
    return;
  }

 
     useEffect(() => {
       if (src === null) 
         setsrc(<AddPhotoAlternate />);
     }, []);
     

  return (
    <div className='text-gray-900 mx-auto mt-8 md:flex md:justify-around border-b border-gray-900/10 pb-12'>
       <ToastContainer className={'w-fit text-center text-green-400'}/>
      <form  id='form' className='flex flex-col space-y-4 mx-auto text-gray-900' action={dispatch}>
      <section className='md:mx-auto space-y-4 flex-col md:flex md:justify-start md:my-2 text-gray-900'>
    <header className='mb-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>Lets Build Your Store Together</h1>
    </header>
    </section>
    <section>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Store Profile</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600 text-wrap'>This information will be displayed publicly on the store banner</p>
    </section>
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
      <section className='flex flex-col justify-start  space-y-2'>
      <label className='block text-sm font-medium leading-6 text-gray-900 pb-1' htmlFor='photo'>Logo</label>
          <div className='flex  items-center gap-x-3'>
              <Avatar  src={src} id='image-add'  sx={{width: 60 , height: 60, bgcolor: 'white'}}  className=' ring-gray-300 shadow-md ring-1 ring-inset' ><AddPhotoAlternate sx={{color :'#ddd'}} fontSize='large' /></Avatar>
           <span className=' relative cursor-pointer'>
           <button type='button'  className=' rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-nowrap'>
              Add Logo
            </button>
            <input type='file' name='picture' onChange={handleImage} accept='image/*' id='image' className=' opacity-0 border-none whitespace-nowrap p-0 absolute -inset-x-1 z-30 overflow-hidden'/>
           </span> 
           <p id='sel' className='text-sm text-gray-800 text-wrap line-clamp-2 overflow-ellipsis'>{ImageName}</p>
          </div>
      </section>
          <section className='flex flex-col justify-start  space-y-2 text-gray-900'>
        <label className="text-sm font-medium leading-6 text-gray-900 required:after:content-['*'] required:after:text-red-500" htmlFor="storename"> Storename{<p className='text-red-700 inline'>{show}</p>}</label>
        <input id="storename"
              placeholder="mercyStores"
              type="text"
              autoCapitalize="none"
              autoComplete="cc-name"
              name='storename'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className=' p-3 shadow text-gray-900 rounded-md placeholder:focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
        <section className='flex flex-col space-y-2'>
            <Countries />
            <span id="customer-error"  aria-live="polite" className="text-left" aria-atomic="true" >
        {(state?.errors.name === 'Location' || states?.errors.name === 'Location') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error}
              
            </p>
          }
    </span>
        </section>

        <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium leading-6 text-gray-900 required:after:content-['*'] required:after:text-red-500" htmlFor="address">Store/Shop No{<p className='text-red-700 inline'>{show}</p>}</label>
        <input id="address"
              placeholder=""
              type="text"
              autoCapitalize="none"
              autoComplete= "address-level1"
              name='address'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className=' p-3 shadow  rounded-md'
              pattern='[a-zA-Z0-9\s]{6,100}'
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

        <section className='flex flex-col justify-start  space-y-2'>
        <label className="text-sm font-medium text-gray-900 leading-6 required:after:content-['*'] required:after:text-red-500" htmlFor="store description">Store description{<p className='text-red-700 inline'>{show}</p>}</label>
        <textarea id="storedes"
              placeholder="Tell Your Story, Sell Your Brand...."
              type="text"
              cols={4}
              rows={5}
              autoCapitalize="none"
              name='description'
              autoCorrect="off"
              required
              maxLength={200}
              onBlur={dispatch2}
              className=' p-3 shadow  rounded-md focus:border-[#664982]'
              pattern='[a-zA-Z0-9\s]{10,200}'
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
        <label className="text-sm font-medium text-gray-900 leading-6 required:after:content-['*'] required:after:text-red-500" htmlFor="phone"> Business Line{<p className='text-red-700 inline'>{show}</p>}</label>
        <input id="tel"
              placeholder="+234809678945"
              type="tel"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              name='tel'
              inputMode='tel'
              required
        
              className=' p-3 shadow rounded-md '
            

              />
        <span id="customer-error"  aria-live="polite" className="text-left" aria-atomic="true" >
        {(state?.errors.name === 'phone' || states?.errors.name === 'phone') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error}
              
            </p>
          }
    </span>
        </section>
        
       
        <button disabled = {state.success === true}  className='bg-[#6A0DAD] py-4 rounded-md text-white disabled:opacity-70' id='sign-up'> Create store</button>
      </form>
    </div>
  )
}

export default StoreForm
