"use client"
import React, { useState } from 'react'
import {Fab, CircularProgress} from '@mui/material'
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

    return (
    <div className='flex flex-col  p-4  text-base w-full'>
      <form className='mx-auto space-y-2'>
      <section className='flex overflow-x-scroll space-x-2 w-full'>
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
      <section>
      <section className='space-y-1 w-full'>
        <label className='font-semibold'>Name</label>
        <input className='w-full py-1.5 placeholder:text-gray-500 placeholder:px-2 shadow-md rounded-sm ring-1 ring-slate-400 block' placeholder={name}/>
        </section>
        <section className='space-y-1 w-full'>
        <label  className='font-semibold'>Description</label>
        <input className='w-full py-1.5 placeholder:text-gray-500 placeholder:px-2 shadow-md rounded-sm ring-1 ring-slate-400 block' placeholder={description}/>
        </section>
        <section className='space-y-1 w-full'>
        <label  className='font-semibold'>Price</label>
        <input className='w-full py-1.5 placeholder:text-gray-500 placeholder:px-2 shadow-md rounded-sm ring-1 ring-slate-400 block' placeholder={price}/>
        </section>
        </section>
      </form>
    </div>
  )
}

export default ProdEditForm
