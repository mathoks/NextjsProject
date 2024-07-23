"use client"
import React, { useState } from 'react'
import {Fab, CircularProgress, Divider} from '@mui/material'
import { AddAPhoto } from '@mui/icons-material'

const ProdEditForm = ({data}) => {
    const {id, name, description, category, price, negotiable, availability, prodImage } = data
    const [src, setsrc] = useState(prodImage.map(({image})=>image))
    const [loading, setIsloading] = useState(false)
    
    const handleImage = async (e) => {
        const pic = document?.getElementById(e?.target.id);
        
    
        for (const file of pic.files) {
          const reader = new FileReader();
          if (reader && e.target.id === "edit-0") {
            
            setIsloading(true);
            reader.onload = (e) => {
                  setIsloading(false); 
                  setsrc((prev) => [e?.target.result, prev[1]]);
              setlabel(file.name);
            };
          } else {
        
            setIsloading(true);
            reader.onload = (e) => {
               setIsloading(false); 
               setsrc((prev) => [prev[0], e?.target.result]);
              setlabel1(file.name);

            };
          }
    
          reader.readAsDataURL(file);
        }
      };

      const handleFocus = (e) => {
        e.target.nextElementSibling.style.visibility = 'visible'
        if (e.target){
        e.target.nextElementSibling.textContent = e.target.value.length + `/${e.target.maxLength}`;
        if(e.target.value.length === e.target.maxLength){
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
    <div className='flex flex-col  p-4  text-base '>
      <form className='mx-auto space-y-4 w-full md:flex'>
      <label className='font-semibold'>Images</label>
      <section className='flex overflow-x-scroll space-x-2 mx-auto'>
        {prodImage.map(({id}, ids)=>(
        <div key={id || ids} className='relative'>
        <img
            src={src[ids]}
            width={300}
            height={400}
            className='rounded-md h-[160px] w-[200px]'
        />
        <div className='absolute inset-12'>
        <div className='relative'>
        <input disabled = {loading} id={`edit-${ids}`} onClick={handleImage} className='sr-only'/>
        <Fab>{loading ? <CircularProgress/> : <AddAPhoto/> }</Fab>
        </div>
        </div>
        </div>))
        }
      </section>
      <section className='pr-8 space-y-2'>
      <section className='no_border flex flex-col'>
        <label className='font-semibold'>Name</label>
        <input maxLength={30} onChange={handleFocus} onBlur={handleBlur} className='py-1.5 placeholder:text-gray-500 ' placeholder={name}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        <section className='space-y-1 flex flex-col no_border'>
        <label  className='font-semibold'>Description</label>
        <input maxLength={200} onChange={handleFocus} onBlur={handleBlur} className='w-full py-1.5 placeholder:text-gray-500 ' placeholder={description}/>
        <pre className='text-slate-400  text-sm text-right '> </pre>
        </section>
        <section className='flex flex-col space-y-1 no_border'>
        <label  className='font-semibold'>Price</label>
        <input maxLength={10} onChange={handleFocus} onBlur={handleBlur} className='w-full py-1.5 placeholder:text-gray-500 placeholder:px-0 ' placeholder={price}/>
        <pre className='text-slate-400  text-sm text-right'></pre>
        </section>
        <button className='w-full bg-violet-800 p-2 rounded-md font-semibold text-white '>Update</button>
        </section>
        
      </form>
    </div>
  )
}

export default ProdEditForm
