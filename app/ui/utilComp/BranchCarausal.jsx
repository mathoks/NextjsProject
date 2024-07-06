'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import {register} from 'swiper/element-bundle'
import { Shop2Outlined , LocationOnOutlined, StreetviewOutlined} from '@mui/icons-material';

register();

// /**
//  * Carousel component.
//  * @component
//  * @param {object} props- Component props.
//  * @param {Array<object>} props.slides - Array of slide objects.
//  * @param {boolean} props.autoSlide - Auto slide flag.
//  * @param {number} props.autoInterval - Auto slide interval.
//  * @returns {jsx}
// */
const BranchCarousel = ({ slides = [], autoSlide = false, autoInterval = 3000, id=0 }) => {
  
    const swiperDiv= useRef()

  

  

  return (


    <div className='mybranch text-gray-800 p-4 space-y-2 '>
    <h2>Branches</h2>
    <swiper-container
      ref={swiperDiv}
      slides-per-view="1"
      // navigation="true"
      pagination="true"
      // pagination-type="fraction"
      space-between="4"
       className="space-y-3"
    >
    
{slides.map((slide, i) => ( 

    

<swiper-slide
              key={i}
              
            >
            <div className='flex flex-col space-y-2'>
<div className='flex justify-start items-center space-x-3 '>
 <span><Shop2Outlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span>Chizy stores 2</span>
 </div>
 <div className='flex justify-start items-center space-x-3'>
 <span><LocationOnOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span className='line-clamp-3 overflow-ellipsis  break-words'>Alaba international, Lagos Nigeria</span>
 </div>
 <div className='flex justify-start items-center space-x-3'>
 <span><StreetviewOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span>Block A23</span>
 </div>
 <div className='flex justify-end mt-2 '>
 <button className="ring-1 ring-inset rounded-md ring-gray-600 px-2.5 py-1 text-blue-500">
   {" "}
   <Link href={`${id}/branch/${encodeURIComponent(id)}`}>view products</Link>
 </button>
 </div>
 </div>
            </swiper-slide>

   
  ))}
    </swiper-container>

    </div>
  )
} 
  export default BranchCarousel

