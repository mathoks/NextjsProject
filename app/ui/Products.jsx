import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/photo1.jpeg'
const Products = () => {
    const Arr = [1,2,4,5]
    console.log(Arr)
  return (
    <section className='md:flex  space-y-10 p-4' >
    <h3 className='text-gray-800'>Dealers Section</h3>
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-0 place-items-center'>
   {Arr.map((_, i)=>
    
    <div key={i} className='bg-white p-0  shadow-md rounded text-black flex flex-col gap-2 w-full'>
    <Image src={Logo} alt='image' className='w-full h-28 object-cover  rounded-t p-0 m-0' />
    <section className='p-4 flex flex-col gap-1'>
        <h2 className='font-bold text-lg'>Pan</h2>
        <p className='text-sm text-gray-600'>lorem ipsum dolor sit amet , consectour adipsing elirt</p>
        <div className='font-bold text-lg text-gray-800'>#700.6</div>
        <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>Add to Cart</button>
    </section>
    </div>
   
    )} 
    </div>
    </section>
  )
}

export default Products