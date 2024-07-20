'use client'
import { BookmarkAddOutlined, StarRateOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import {register} from 'swiper/element-bundle'

register()

const ProductCard = ({count, info}) => {
    const swiperRef = useRef()
  
  return (
      info.map(({id, prodImage, name, category, price, description,availability }, ids)=>{
        return (
        <div className='shadow_cus rounded-md bg-white  space-y-1 relative h-fit' key={ids} >
        <div className=' bg-[#f9f5fb]  rounded-t-sm py-1 p-1'>
        <span className='font-semibold text-gray-800'>{category}</span>
        </div>
       
        <div className='prodswiper mx-auto h-[9.5rem]' >
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
                className=' bg-white mx-auto h-[8rem] pb-4'
                />

                
            </swiper-slide>
    
       )
       } 
       </swiper-container>
       </div>
       <span className='block absolute inset-x-0 inset-y-[10rem] z-40'>
       <span className='  bg-[#6A0DAD] px-2.5 py-1 shadow-sm rounded-r-sm text-white text-[0.75rem] leading-4'>{availability.replace(/_/g, " ")}</span>
       </span>
        <div className='block space-y-2 p-2 '>
       
        <div className='flex justify-between items-center font-semibold'>
            <span className='line-clamp-2 overflow-ellipsis font-semibold'>{name}</span>
            <span className="flex justify-start items-center space-x-1">
                            <span className="text-[12px]">&#x20A6;</span>
                            <p className="text-[12px] font-semibold">{price}</p>
                          </span>
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
        
        </div>
        )
      })
    // </div>
  )
}

export default ProductCard
