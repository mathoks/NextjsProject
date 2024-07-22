
import { Avatar, Divider, Rating } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Carousel from './Carousal'
import { auth } from '@/auth'


const ProductPage1 = async(props) => {
  const session = await auth()
 return (
 <div>
    <section className="text-gray-900  flex flex-col w-full space-y-4 text-[15px]">
              <div className='mx-auto space-y-1 rounded-md shadow-md pb-2 ring-1 ring-slate-300'>
              <span className='flex justify-between items-center pr-1'>
              <h1 className='text-lg font-semibold p-2'>{props?.data?.name}</h1>
              {props.data.storeId === session?.user?.id ? <button className='ring-1 ring-slate-300 rounded-full px-4 py-[2px] text-white bg-[#FF4500] font-semibold'>Edit</button> : ''}
              </span>
                              <div className='relative '>
                <Carousel slides={props?.data.prodImage} autoSlide={false}/> 
                <span className='text-[12px] px-2 text-white absolute top-2 bg-[#FF4500]'>{props.data.availability}</span>
                <Divider variant='fullWidth'/>
                 <div className=' font-semibold space-y-2 px-2'>
                 
                 <span className="flex justify-between items-center space-x-1 text-base font-semibold">
                            <span className='flex items-center space-x-1'>
                            <span className="text-[12px]">&#x20A6;</span>
                            <p className="">{props.data.price}</p>
                          </span>
                          <span className='text-sm'>{props?.data?.negotiable}</span>
                            </span>
                          <span className=''>{props?.data?.category}</span>
                          <div className='text-[12px] -pt-3 flex items-center space-x-1'>
                          <span>4.0</span>
                          <Rating size="small"/>
                          <span className='text-blue-400'>10,052</span>
                          </div>
                          </div>      
                 
                 </div>
                
                 </div> 
                 <div className='flex mx-auto'>
                 <button className=' w-[19rem] ring-1 ring-slate-300 py-1.5 text-white  bg-[#FF4500] rounded-full font-semibold'>Add to wishlist</button>
                 </div>
                 
                 <div className='p-2'>
                  <div className='flex justify-between items-start p-2'>
                  
                  <div className='flex justify-start items-start space-x-1'>
                  <Avatar src = {props?.data?.store?.bizLogo}/>
                  <div className='flex flex-col space-y-1'>
                  
                      <span className='font-semibold'>{props?.data?.store?.businessName}</span>
                      <div className='flex items-center space-x-1 text-[12px]'>
                      <span>4.0</span>
                      <Rating size="small"/>
                      <span className='text-blue-400'>10,052</span>
                    </div>
                      
                    <span className=' text-blue-400'><Link href={'#'}><p>Visit the Store</p></Link></span>
                    <div>
                      <span className=''>Product availiable at these branches</span>
                      <div className='flex flex-col text-gray-700'>
                      {props?.data.branch?.map(({branch}, i)=><div key={i} className='flex flex-col '> <span className='font-semibold first-letter:uppercase'>{branch.branchName}</span><span >{branch.branchAddress}</span><span>{branch.market + " " + branch.state + " " +  branch.country}</span></div>)}

                      </div>
                  </div>
                    </div>
                    </div>
                    
                  </div>
                  
                  </div>
                  <Divider/>
                  <div className='px-8 pl-14 min-h-20 flex justify-center items-center'>
                  
                  <p className=''>{props?.data.description}</p>
                  
                    
                  </div>
                  <Divider/>
              </section>
              
              </div>
  )
}

export default ProductPage1
