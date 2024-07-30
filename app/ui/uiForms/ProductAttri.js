"use client"

import React, { useEffect, useState, useCallback, } from 'react'
import { useFormState } from 'react-dom'
import { validate } from '@/app/lib/utills/validator'
import { ProductStatus } from './productCart'
import toast from 'react-hot-toast'
import { updateProductAtrr } from '@/app/actions/users/updateProductAtrr'

const ProductAttri = ({data}) => {
    const {id} = data
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(updateProductAtrr, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const [loadings, setLoading] = useState(false)

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

    const toggleActive = ()=>{
      setLoading((prev)=>!prev)
  }

  const handleclick = useCallback((e)=>{

    let idOut;
    if(idOut){
        clearTimeout(idOut)
    }
     idOut = setTimeout(toggleActive, 100)
   },[])

    useEffect(()=>{
      const notify = (me) => toast(me);  
          if (state.success === true){
          notify(state.message);
          toggleActive();
          document?.getElementById('prod_A_form').reset()
          }
     if(state.success === false){
      if(state.message === 'Validation failed. No data to update.')
        notify("No data to update");
     else notify("An error occured. Please try again");
      toggleActive();
     }
      else return;
     },[state.success, state.message, state.idOp])


  return (
    <div className='flex flex-col space-y-2 bg-white '>
     <section>
      <span id="customer-error"  aria-live="polite" className=" mx-auto text-center" aria-atomic="true" >
        {state?.message  &&
            <p className={`text-sm ${state.success ? 'text-green-400' :  'text-red-500'}`}>
              {state?.message  + " "} 
            </p>
          }
    </span>
    </section>
      <form action={dispatch} id="prod_A_form" className='flex flex-col space-y-4 md:mx-auto'>
      <section className='flex flex-col space-y-1 no_border'>
      <label htmlFor='brand' className='font-semibold'>Brand</label>
      <input id='brand' maxLength={30} onChange={handleFocus} type='text' name='brand' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'brand'}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
      <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'brand' || states?.errors?.name === 'brand') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
      </section>
        <section className='flex flex-col space-y-1'>
        <label className='font-semibold'  htmlFor='status'>Status</label>
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
        <label htmlFor= 'color' className='font-semibold'>Color</label>    
        <input id='color' maxLength={20} onChange={handleFocus} type='text' name='color' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'clor'}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        
        <section className='flex flex-col space-y-2 no_border'>
           <label  className='font-semibold' htmlFor='weight'>weight(kg)</label>
           <input id='weight' maxLength={10} step={0.001} onChange={handleFocus} type='number' name='weight' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'weight'}/>
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
            <label htmlFor='warranty' className='font-semibold'>Warranty</label>
            <input id = 'waranty' maxLength={100} onChange={handleFocus} type='text' name='warranty' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'warranty'}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'warranty' || states?.errors?.name === 'warranty') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label htmlFor='material' className='font-semibold'>material</label>
        <input id='material' maxLength={100} onChange={handleFocus} type='text' name='material' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'material'}/>
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
           <label  className='font-semibold' htmlFor='size'>Size{<span className='font-normal text-[12px]'> (small, meduim, large, X, SM, XXL, L)</span>}</label>
           <input id='size' maxLength={20} onChange={handleFocus} type='text' name='size' onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={'size'}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
            <span id="customer-error"  aria-live="polite" className=" text-left" aria-atomic="true" >
        {(state?.errors.name === 'size' || states?.errors?.name === 'size') &&
            <p className="text-sm text-red-500" >
              {state?.errors.error || states?.errors.error }
              
            </p>
          }
        </span>
        </section>
        <input name='id' type='text' defaultValue={id} className='sr-only'/>
        <button  disabled = {loadings} onClick={handleclick} className='w-full disabled:opacity-5 bg-violet-800 p-2 rounded-md font-semibold text-white '>Update</button>
      </form>
    </div>
  )
}

export default ProductAttri


