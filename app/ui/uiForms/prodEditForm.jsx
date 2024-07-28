"use client"
import React, { useState , useEffect} from 'react'
import { validate } from '@/app/lib/utills/validator'
import { updateProduct } from '@/app/actions/users/updateProd'
import { useFormState } from 'react-dom'
import ImageEdit from '../utilComp/imageEdit'
import { Availability, LinkToBranch, PricePolicy, ProductCart } from './productCart'
import { getBranch } from '@/app/lib/actions/getbranch'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'



const ProdEditForm = ({data}) => {
    const {id, name, description, category, price, negotiable, availability, prodImage, branch } = data
    const initialState = { message: null, errors: {}, success: null, store: null };
    const [state, dispatch] = useFormState(updateProduct, initialState);
    const [states, dispatch2] = useFormState(validate, initialState);
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const session = useSession()

        const toggleActive = ()=>{
            setLoading((prev)=>!prev)
    
        }

        
          

       useEffect(()=>{
       
        const notify = () => toast(state.message);  
        const branch = async ()=>{
            const res = await getBranch(session?.data?.user?.id)
            setDatas(res)
        }
        
            if (state.success === true){
            notify();
            toggleActive();
            document?.getElementById('prod_edit_form').reset()
            }
        if(datas.length === 0)
        branch();
        else return;
       },[datas,state.success, state.message, ])

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
    <div className='flex flex-col   text-base '>
      <form className='mx-auto space-y-4 w-full md:flex md:space-x-4' id='prod_edit_form' action={dispatch}>
     <ImageEdit data={prodImage} trigger = {toggleActive} hide={loading}/>
      
      <section className='mx-auto space-y-4 p-2'>
      <section className='no_border flex flex-col space-y-1'>
        <label htmlFor='edit_name' className='font-semibold'>Name</label>
        <input id='edit_name'  name='name' defaultValue={null} maxLength={30} onChange={handleFocus} onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        <section className='space-y-1 flex flex-col no_border'>
        <label htmlFor='edit_desc' className='font-semibold'>Description</label>
        <input id='edit_desc' maxLength={200} name='description' defaultValue={null} onChange={handleFocus} onBlur={handleBlur} className='w-full py-1.5 placeholder:text-gray-500 border-b-2 border-black' placeholder={description}/>
        <pre className='text-slate-400  text-sm text-right '> </pre>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label htmlFor='edit_price' className='font-semibold'>Price</label>
        <input id='edit_price' maxLength={10} defaultValue={null} name='price' onChange={handleFocus}  onBlur={handleBlur} className='w-full py-1.5 placeholder:text-gray-500' placeholder={price}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label htmlFor='cat' className='font-semibold'>Category</label>
            <ProductCart/>
        </section>
        <section>
        <label htmlFor='avail' className='font-semibold'>Availability</label>
            <Availability/>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label htmlFor='flexi' className='font-semibold'>Negotiable</label>
        <PricePolicy/>
        </section>
        <section className='flex flex-col space-y-1 no_border pb-4'>
        <label htmlFor='link_branch'  className='font-semibold'>Link to a Branch</label>
            <LinkToBranch option={datas} branches={branch}/>
        </section>
        <input name='id' type='text' defaultValue={id} className='sr-only'/>
        <button disabled = {loading} id='form_botton' onClick={()=>setTimeout(toggleActive, 500)} className='w-full bg-violet-800 p-2 rounded-md font-semibold text-white disabled:opacity-5'>Update</button>
        </section>
        
      </form>
    </div>
  )
}

export default ProdEditForm
