'use client'
import React, { useState } from 'react'


// import addUser from '@/app/actions/addUser'
import { Visibility, VisibilityOff } from '@mui/icons-material'
const UserAuthForm = () => {
    const [ptype, setptype] = useState('password')

  return (
    <div className='text-black  mx-auto'>
      <form className='flex flex-col space-y-4' action={()=>console.log('jj')}>
      <section className='flex flex-col justify-start  space-y-2'>
        <label className="" htmlFor="Username"> Username</label>
        <input id="username"
              placeholder="name@example.com"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              name='name'
              autoCorrect="off"
              required
              className='w-full p-4 shadow  rounded-md '
              pattern='[a-zA-Z0-9]{6,10}'
            //   disabled={isLoading || isGitHubLoading}
            />

       
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
              className='w-full p-4 shadow rounded-md '
            //   disabled={isLoading || isGitHubLoading}

              />

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
              name='password'
              aria-describedby='password-constraints'
            //   disabled={isLoading || isGitHubLoading}

              />
        {/* <Visibility className={`absolute right-4 inset-y-10 ${ptype === 'password' ? 'inline-block': 'hidden'}`} onClick={()=>setptype(ptype === 'password' ? 'text' : 'password')}/> */}
        { ptype === 'password' ? <VisibilityOff className={`absolute right-4 inset-y-10`} onClick={()=>setptype(ptype === 'text' ? 'password' : 'text')}/> : <Visibility className={`absolute right-4 inset-y-10 `} onClick={()=>setptype(ptype === 'password' ? 'text' : 'password')}/>}
        </section>
        <button className='bg-blue-500 py-4 rounded-md text-white' id='sign-up'> Sign up</button>
      </form>
    </div>
  )
}

export default UserAuthForm
