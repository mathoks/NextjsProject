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
    <section className='flex flex-col space-y-4 first:pt-2 ' >
    <h3 className='text-gray-800 p-4 font-bold'>Dealers Reel</h3>
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center first:pt-0  last:pb-0'>
    {Array.from(Array(10)).map((_, index) => (
                        
                        <Usercard key={index} name = "John Bull" storeDescription= {users?.title}/>
                    ))}
  
    </div>
    </section>
  )
}

export default Products