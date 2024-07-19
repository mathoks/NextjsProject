'use client'
import { BookmarkAddOutlined, StarRateOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import {register} from 'swiper/element-bundle'

register()

const ProductCard = ({count, info}) => {
    const swiperRef = useRef()
  
  return (
    <div className='grid grid-cols-2 gap-4 w-auto lg:grid-cols-4 lg:mx-auto'>
      {info.map(({id, prodImage, name, category, price, description,availability }, ids)=>{
        return (
        <div className='shadow-md rounded-md bg-white w-auto relative' key={ids} >
        <div className=' bg-[#6A0DAD] w-full rounded-t-sm py-1 p-1'>
        <span className='font-semibold text-white'>{category}</span>
        </div>
       
        <div className='prodswiper' >
        <swiper-container
        ref = {swiperRef}
        slides-per-view="1"
      // navigation="true"
      pagination="true"
    //   pagination-type="fraction"
      space-between="2">
       {
        prodImage.map(({id, image}, ids)=> 
            <swiper-slide key ={ids || id}>
                <img
                src={image}
                key={id}
                alt='pro'
                loading='lazy'
                width={200}
                 height={200}
                className=' bg-white w-auto h-auto'
                />

                
            </swiper-slide>
    
       )
       } 
       </swiper-container>
       </div>
        <div className='block space-y-2 p-2'>
        <div className='flex justify-between items-center font-semibold'>
            <span className='line-clamp-2 overflow-ellipsis font-semibold'>{name}</span>
            <span className=' font-semibold'>{price}</span>
        </div>

        <div className='flex font-semibold'>
            <span></span>
        </div>
        <div className='w-auto'>
            <span className='text-sm line-clamp-3 overflow-ellipsis w'>{description}</span>
        </div>
        <div className='flex items-center justify-between'>
        <span className='flex space-x-1 items-center'>
        <span><StarRateOutlined fontSize='inherit'/></span>
        <span>4.5</span>
        </span>
          <span><BookmarkAddOutlined fontSize='inherit'/></span>  
        </div>
        </div>
        <span className='flex justify-between pr-2 absolute'>
       <span className=' inset-full bg-[#6A0DAD] px-2.5 py-1 shadow-sm rounded-r-sm text-white text-[0.75rem] leading-4'>{availability}</span>
       </span>
        </div>
        )
      })}
    </div>
  )
}

export default ProductCard
