'use client'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { addUser } from '@/app/actions/users/addUsers'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'


// const Fields = {
//   username: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),  
//   email: joi
//     .string()
//     .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
//   password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
// }

// const State = {
//   errors: {
//     error: [],
//     message: null
//   }
// }

// const validate = function(_,e){
 
//   const { value, name } = e?.target;
//   const FormSchema = joi.object({[name]: Fields[name]});
//   const valid = FormSchema.validate({
//     [name]: value,
//   });
//   const  {error } = valid
//   if (error) {
//    console.log(error)
//     return {
//       errors: {
//             error: error.toString().split(":")[1],
//             // .replace(/"/g, ''),
//             name: name,
//           },
//           message: null,
//   };
// }

// };


const UserAuthForm = () => {
    const [ptype, setptype] = useState('password')
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(addUser, initialState);
     const [states, dispatch2] = useFormState(validate, initialState);
    console.log(states, typeof states?.errors?.error !== 'undefined')
  return (
    <div className='text-black  mx-auto'>
    
    <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message &&
            <p className="text-sm text-red-500" >
              {state?.message}
              
            </p>
          }
    </span>
      <form className='flex flex-col space-y-4' action={dispatch}>
      <section className='flex flex-col justify-start  space-y-2'>
        <label className="" htmlFor="Username"> Username</label>
        <input id="username"
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
        {state?.errors.name === 'username' || states?.errors?.name === 'username' &&
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
        {state?.errors.name === 'email' || states?.errors.name === 'email' &&
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
        {state?.errors.name === 'password' || states?.errors.name === 'password' &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error}
              
            </p>
          }
    </span>
        </section>
        <button disabled={state?.errors?.error !== undefined || states.errors.error !== undefined  } className='bg-blue-500 py-4 rounded-md text-white disabled:opacity-70' id='sign-up'> Sign up</button>
      </form>
    </div>
  )
}

export default UserAuthForm
