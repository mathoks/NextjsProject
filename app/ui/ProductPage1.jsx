
import { Avatar, Divider, Rating } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Carousel from './Carousal'
import Logo from "@/app/assets/photo4.jpeg";
import Logo1 from "@/app/assets/photo6.jpeg";
import Logo2 from "@/app/assets/photo7.jpeg";
import Logo3 from "@/app/assets/photo3.jpeg";

const slides = [
  { id: 0, name: "phones", pics: Logo },
  { id: 1, name: "fashion", pics: Logo2 },
  { id: 2, name: "cloths", pics: Logo1 },
  { id: 3, name: "shoes", pics: Logo3 },
];

const ProductPage1 = ({visi, index}) => {
  return (
    <div className='flex flex-col space-y-20 relative'>
    <nav
                aria-label="main"
                className={`fixed z-50 flex top-14 left-0 flex-col space-y-0 bg-white text-sm pt-2 w-full text-gray-600 pl-4 pr-4 pb-0  even:pb-0 ${
                  visi ? "shadow" : ""
                }`}
              >
            <Divider className={`right-0 left-0 fixed top-16${!visi ? "visible"  : "invisible opacity-0"}`}/>
                <div
                  className={`opacity-0  ${
                    !visi
                      ? "invisible  h-0 "
                      : "visible transition-opacity opacity-100 "
                  }`}
                >
                  <ul
                    role="subTab"
                    className="flex justify-between items-center pl-4 pr-4 font-semibold"
                  >
                    <li
                      value={0}
                      className={` pb-3 ${
                        index === "#Overview"
                          ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
                          : "border-none transition duration-500 text-gray-500 "
                      }`}
                    >
                      <Link href={`#Overview`}>Overview</Link>
                    </li>
                    <li
                      value={1}
                      className={` pb-3 ${
                        index === "#ProductDetails"
                          ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
                          : "border-none transition duration-500 text-gray-500"
                      }`}
                    >
                      <Link href={`#ProductDetails`}>Product Details</Link>
                    </li>
                    <li
                      value={2}
                      className={`pb-3 ${
                        index === "#Recommended"
                          ? "text-indigo-600 border-b-2  border-violet-600"
                          : "border-none text-gray-500"
                      }`}
                    >
                      <Link href={`#Recommended`} scroll>Recommended</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <section className="text-gray-900 absolute -top-14 flex flex-col w-fit">
                 <Carousel slides={slides} autoSlide={false}/> 
                 
                 
                  <div className='flex justify-between items-start p-2 text-sm'>
                  
                  <div className='flex justify-start items-center space-x-2'>
                  <Avatar/>
                  <div className='flex flex-col space-y-1'>
                  
                      <span className='font-semibold'>Chizzy Stores</span>
                      
                    <span className=' text-blue-400'><Link href={'#'}><p>Visit the Store</p></Link></span>
                    </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <span>4.0</span>
                      <Rating size="small"/>
                      <span className='text- text-blue-400'>10,052</span>
                    </div>
                  </div>
                 
              </section>
              </div>
  )
}

export default ProductPage1