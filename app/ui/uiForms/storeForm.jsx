'use client'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { addUser } from '@/app/actions/users/addUsers'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'
import Link from 'next/link'
import Countries from '@/app/lib/utills/countries'



const StoreForm = () => {
    const [ptype, setptype] = useState('password')
    const initialState = { message: null, errors: {}, success: null };
    const [state, dispatch] = useFormState(addUser, initialState);
     const [states, dispatch2] = useFormState(validate, initialState);

  return (
    <div className='text-black  mx-auto w-[80%]'>
    
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
        <label className="" htmlFor="Username"> Storename</label>
        <input id="storename"
              placeholder="mercyStores"
              type="text"
              autoCapitalize="none"
              autoComplete="cc-name"
              name='storename'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md'
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
        <label className="" htmlFor="address">address</label>
        <input id="address"
              placeholder="name@123"
              type="text"
              autoCapitalize="none"
              autoComplete= "address-level1"
              name='address'
              autoCorrect="off"
              required
              onBlur={dispatch2}
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
        <section className='flex flex-col justify-start  space-y-2'>
        <label className="" htmlFor="buisness email">store mail</label>
        <span className='text-[12px]'>if store mail is not provided the default user Email will be used</span>
        <input id="store_email"
              placeholder="name123@mail.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              name='email'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md'
              pattern='^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})+$'
            //   disabled={isLoading || isGitHubLoading}
            />

        <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'email' || states?.errors?.name === 'email') &&
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
        <label className="" htmlFor="Username"> Username</label>
        <input id="usern"
              placeholder="name@123"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              name='username'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md'
              pattern='[a-zA-Z0-9]{6,10}'
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
        <label className="" htmlFor="Username"> Username</label>
        <input id="uername"
              placeholder="name@123"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              name='username'
              autoCorrect="off"
              required
              onBlur={dispatch2}
              className='w-full p-4 shadow  rounded-md'
              pattern='[a-zA-Z0-9]{6,10}'
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
        <label className="" htmlFor="email"> Email</label>
        <input id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              name='email'
              required
              onBlur={dispatch2}
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
        
        <section className='relative flex flex-col justify-start space-y-2'>
        <label className="" htmlFor="password">Password </label>
        <input id="password"
              type={ptype}
              autoComplete="new-password"
              autoCorrect="off"
              minLength={8}
              required
              className='w-full p-4 shadow  rounded-md'
              onBlur={dispatch2}
              name='password'
              aria-describedby='password-constraints'
            //   disabled={isLoading || isGitHubLoading}

              />
        {/* <Visibility className={`absolute right-4 inset-y-10 ${ptype === 'password' ? 'inline-block': 'hidden'}`} onClick={()=>setptype(ptype === 'password' ? 'text' : 'password')}/> */}
        { ptype === 'password' ? <VisibilityOff className={`absolute right-4 inset-y-10`} onClick={()=>setptype(ptype === 'text' ? 'password' : 'text')}/> : <Visibility className={`absolute right-4 inset-y-10 `} onClick={()=>setptype(ptype === 'password' ? 'text' : 'password')}/>}
        <span id="customer-error"  aria-live="polite" className=" mx-auto text-left" aria-atomic="true" >
        {(state?.errors.name === 'password' || states?.errors.name === 'password') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
              
            </p>
          }
    </span>
        </section>
        <button  className='bg-blue-500 py-4 rounded-md text-white disabled:opacity-70' id='sign-up'> Sign up</button>
      </form>
    </div>
  )
}

export default StoreForm
