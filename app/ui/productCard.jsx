'use client'
import { BookmarkAddOutlined, StarRateOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { useRef } from 'react'
import {register} from 'swiper/element-bundle'
import Logo from '@/app/assets/photo7.jpeg'
import Logo2 from '@/app/assets/photo6.jpeg'

register()

const ProductCard = () => {
    const swiperRef = useRef()
  return (
    <div className='grid grid-cols-2 gap-4 w-auto text-black '>
      {Array.from(Array(10)).map((_, ids)=>{
        return (
        <div className='shadow-md rounded-md bg-white w-auto ' key={ids} >
        <div className='prodswiper' >
        <swiper-container
        ref = {swiperRef}
        slides-per-view="1"
      // navigation="true"
      pagination="true"
      pagination-type="fraction"
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
                className='rounded-sm bg-white w-auto h-auto'
                />

                
            </swiper-slide>
    
       )
       } 
       </swiper-container>
       </div>
        <div className='block space-y-1 p-2'>
        <div className='flex justify-between items-center'>
            <span>Furniture</span>
            <span>#599.09</span>
        </div>

        <div className='flex font-semibold'>
            <span>Office Chair</span>
        </div>
        <div className='w-auto'>
            <span className='text-sm line-clamp-2 overflow-ellipsis w'> available for all office reqirements </span>
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
