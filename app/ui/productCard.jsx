'use client'
import { BookmarkAddOutlined, StarRateOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import {register} from 'swiper/element-bundle'

register()

const ProductCard = ({count}) => {
    const swiperRef = useRef()
  return (
    <div className='grid grid-cols-2 gap-4 w-auto lg:grid-cols-4 lg:mx-auto '>
      {Array.from(Array(count)).map((_, ids)=>{
        return (
        <div className='shadow-md rounded-md bg-white w-auto ' key={ids} >
        <div className='prodswiper relative' >
        <swiper-container
        ref = {swiperRef}
        slides-per-view="1"
      // navigation="true"
      pagination="true"
    //   pagination-type="fraction"
      space-between="2">
       {
        ['https://picsum.photos/id/28/200','https://picsum.photos/id/28/200' ].map((pic, id)=> 
            <swiper-slide key ={id}>
                <img
                src={pic}
                alt='pro'
                loading='lazy'
                width={200}
                 height={200}
                className='rounded-md bg-white w-auto h-auto'
                />

                
            </swiper-slide>
    
       )
       } 
       </swiper-container>
       <span className='flex justify-between pr-2'>
       <span className=' inset-full bg-[#6A0DAD] px-2.5 py-1.5 shadow-sm rounded-e-sm text-white'>In-stock</span>
       <span className=' line-clamp-1 overflow-ellipsis'>Furniture</span>
       </span>
       
       </div>
        <div className='block space-y-2 p-2'>
        <div className='flex justify-between items-center font-semibold'>
            <span className='line-clamp-2 overflow-ellipsis'>Office Chair Industrial meart for ttryu hhgtdtrf gfggggghjdb gfdffghfhdre dggfggfgg</span>
            <span>#599.09</span>
        </div>

        <div className='flex font-semibold'>
            <span></span>
        </div>
        <div className='w-auto'>
            <span className='text-sm line-clamp-3 overflow-ellipsis w'> available for all office reqirements including homes just let us know your requirements i will deliver to your doorstep </span>
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
      })}
    </div>
  )
}

export default ProductCard
