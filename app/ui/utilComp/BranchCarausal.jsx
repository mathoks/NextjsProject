'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import {register} from 'swiper/element-bundle'
import { Shop2Outlined , LocationOnOutlined, StreetviewOutlined, PhoneAndroid} from '@mui/icons-material';
import { useSession } from 'next-auth/react';


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
const BranchCarousel = ({ slides = [], autoSlide = true, autoInterval = 3000, id }) => {
    const session = useSession()
    const swiperDiv= useRef()

  return (


    <div className='mybranch text-gray-800  space-y-2 '>
    <div className='flex justify-between items-center'>
    <h2 className='font-semibold'>Branches</h2>
    { slides.length <  3 && session?.data?.user?.id === id ? (
     <button className=' rounded-md px-2.5 py-1.5 ring-1 text-blue-500'><Link href={`/Dashboard/${encodeURIComponent(session?.data?.user?.name)}/settings/branch`}>Add a branch</Link></button>
    ) : null}
    </div>
    
    <swiper-container
      ref={swiperDiv}
      slides-per-view= "1"
      // navigation="true"
      pagination="true"
      // pagination-type="fraction"
      space-between="4"
       className="space-y-3"
    >
    
{slides?.map(({branchName, branchAddress, phone, state, market, country, id }, i) => ( 

    

<swiper-slide
              key={i}
              
            >
            <div className='flex flex-col space-y-2  p-4'>
<div className='flex justify-start items-center space-x-2 '>
 <span><Shop2Outlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span>{branchName}</span>
 </div>
 <div className='flex justify-start items-center space-x-2'>
 <span><LocationOnOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span className='line-clamp-3 overflow-ellipsis  break-words'>{market + " " + state + " " + country }</span>
 </div>
 <div className='flex justify-start items-center space-x-2'>
 <span><StreetviewOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
 <span>{branchAddress}</span>
 </div>
 <div className='flex justify-start items-center space-x-2'>
 <span><PhoneAndroid fontSize='inherit' sx={{color:'gray'}}/></span>
 <span>{phone}</span>
 </div>
 <div className='flex justify-end mt-2 '>
 <button className="ring-1 ring-inset rounded-md ring-blue-500 px-2.5 py-1.5 text-blue-500">
   {" "}
   <Link href={`${id}/branch/${encodeURIComponent(id)}`}>View products</Link>
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

