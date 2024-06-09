import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/photo1.jpeg'
import Usercard from './Usercard'
import { getUsers } from '../actions/users/getUsers'

/**
 * @component - The Products component
 * @returns {jsx} The rendered component.
 * 
 * 
 */
const Products = async({users}) => {
    

  return (
    <section className='flex flex-col bg-slate-50 pl-4 pr-4 pb-2 pt-4' >
    <div className='w-full  p-4 bg-white'>
    <p className='text-gray-800  font-semibold  text-lg'>Dealers Reel</p>
    </div>
    
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center first:pt-4 gap-2  last:pb-0'>
    {Array.from(Array(10)).map((_, index) => (
                        
                        <Usercard key={index} name = "John Bull" storeDescription= {users?.title}/>
                    ))}
  
    </div>
    </section>
  )
}

export default Products