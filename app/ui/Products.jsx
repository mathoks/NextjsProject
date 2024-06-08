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
    <section className='flex flex-col gap-[0.025rem]' >
    <div className='w-full bg-white p-4'>
    <h3 className='text-gray-800  font-semibold '>Dealers Reel</h3>
    </div>
    
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.05rem] place-items-center first:pt-0 first:rounded-s-none last:pb-0'>
    {Array.from(Array(10)).map((_, index) => (
                        
                        <Usercard key={index} name = "John Bull" storeDescription= {users?.title}/>
                    ))}
  
    </div>
    </section>
  )
}

export default Products